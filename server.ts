import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '10mb' }));

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback response generator if API key is missing or quota exceeded
function generateFallbackAnswer(
  query: string,
  articles: Array<{
    id: string;
    title: string;
    softwareName: string;
    softwareSlug?: string;
    summary: string;
    content?: string;
  }>
) {
  const q = query.toLowerCase();
  
  // Find top matching articles based on keyword score
  const scored = articles.map(art => {
    let score = 0;
    const title = art.title.toLowerCase();
    const summary = art.summary.toLowerCase();
    const content = (art.content || '').toLowerCase();
    const soft = art.softwareName.toLowerCase();

    const terms = q.split(/\s+/).filter(t => t.length > 2);
    for (const term of terms) {
      if (title.includes(term)) score += 10;
      if (summary.includes(term)) score += 5;
      if (content.includes(term)) score += 2;
      if (soft.includes(term)) score += 3;
    }
    return { art, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const bestMatches = scored.filter(s => s.score > 0).slice(0, 3);

  if (bestMatches.length === 0) {
    return {
      answer: `I searched across all software user guides and articles in the Falgoon portal, but could not find a specific match for "${query}".\n\nYou can:\n1. Try asking with different terms (e.g., "how to invite staff", "knowledge base", "parent invoices").\n2. Check the System Glossary or Troubleshooting Wizard.\n3. Administrators can also add documentation for this topic dynamically in the Admin CMS.`,
      citations: []
    };
  }

  const top = bestMatches[0].art;
  const citations = bestMatches.map(m => ({
    title: m.art.title,
    softwareName: m.art.softwareName,
    articleId: m.art.id,
    softwareSlug: m.art.softwareSlug || 'nursery-admin',
    relevanceSnippet: m.art.summary
  }));

  const answer = `Based on the **${top.softwareName}** documentation for **${top.title}**:\n\n${top.summary}\n\n${top.content ? top.content.slice(0, 450) + '...' : 'Please refer to the complete step-by-step instructions in the user guide.'}\n\nFor full verified screenshots and instructions, view the cited guide below.`;

  return { answer, citations };
}

// POST /api/chat - Grounded AI Chatbot Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], articlesContext = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Prepare context representation from current live website articles
    const contextSummary = (articlesContext as Array<any>)
      .slice(0, 50)
      .map(
        (a: any, idx: number) =>
          `[Document #${idx + 1}]
Software: ${a.softwareName} (Slug: ${a.softwareSlug || a.softwareId})
Article Title: ${a.title}
Article ID: ${a.id}
Summary: ${a.summary}
Details/Steps: ${a.content ? a.content.slice(0, 600) : 'N/A'}`
      )
      .join('\n\n');

    if (!ai || !apiKey) {
      // Smart local fallback if API key is not yet set
      const fallback = generateFallbackAnswer(message, articlesContext);
      return res.json(fallback);
    }

    const systemInstruction = `You are the friendly, expert AI Assistant for the Falgoon Software Documentation & User Guide Hub.
Your ENTIRE knowledge base is the live software documentation website provided below.
The software portals include:
1. Falgoon Nursery Admin System (Multi-tenant AI Assistant, Knowledge Base, IAM, Inbox, Handoff)
2. Falgoon Nursery Parent Portal (Daily logs, milestones, photos, online invoice payments)
3. Falgoon Executive Nursery Portal (Occupancy KPIs, EYFS ratios, fee auditing, compliance)
4. Falgoon Corporate Website (Admissions, room curriculums, tours)
and any newly added custom software guides created by administrators.

RULES:
- Answer the user's question clearly, accurately, and in plain English for non-technical users.
- Provide numbered step-by-step instructions where applicable.
- Ground your answer strictly in the provided documentation context.
- If information is not in the knowledge base, state that politely and suggest asking the organization tenant administrator.
- Always cite the exact matching articles in the citations array so users can click directly to the user guide chapter.

KNOWLEDGE BASE CONTEXT:
${contextSummary}`;

    // Prompt Gemini 3.8 Flash
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        ...history.slice(-6).map((h: any) => ({
          role: h.role === 'bot' ? 'model' : 'user',
          parts: [{ text: h.text }],
        })),
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            answer: {
              type: Type.STRING,
              description: 'The helpful, grounded answer to the user query formatted with markdown and numbered steps if helpful.',
            },
            citations: {
              type: Type.ARRAY,
              description: 'List of specific articles cited in this answer.',
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: 'Title of the article' },
                  softwareName: { type: Type.STRING, description: 'Name of the software application' },
                  articleId: { type: Type.STRING, description: 'ID of the article' },
                  softwareSlug: { type: Type.STRING, description: 'Slug of the software' },
                  relevanceSnippet: { type: Type.STRING, description: 'Brief 1-sentence note on why this article is relevant' },
                },
                required: ['title', 'softwareName'],
              },
            },
          },
          required: ['answer', 'citations'],
        },
      },
    });

    const responseText = response.text;
    if (!responseText) {
      const fallback = generateFallbackAnswer(message, articlesContext);
      return res.json(fallback);
    }

    try {
      const parsed = JSON.parse(responseText.trim());
      return res.json(parsed);
    } catch (parseErr) {
      return res.json({
        answer: responseText,
        citations: [],
      });
    }
  } catch (err: any) {
    console.error('Error in /api/chat:', err);
    // Graceful fallback on network/quota error
    const fallback = generateFallbackAnswer(req.body?.message || '', req.body?.articlesContext || []);
    return res.json(fallback);
  }
});

// Vite middleware or static serving
async function setupServer() {
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT} (Mode: ${isProd ? 'production' : 'development'})`);
  });
}

setupServer();
