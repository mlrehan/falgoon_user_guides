import React, { useState, useRef, useEffect } from 'react';
import { useDocs } from '../context/DocsContext';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ThumbsUp, 
  ThumbsDown, 
  BookOpen, 
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Database,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface CitationItem {
  title: string;
  softwareName: string;
  articleId?: string;
  softwareSlug?: string;
  relevanceSnippet?: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  citations?: CitationItem[];
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'bot',
    text: "Hello! I am the Falgoon Software AI Assistant. My entire knowledge base is grounded in the live documentation on this website.\n\nYou can ask me how to perform any task across our Nursery Admin System, Parent Portal, Executive Portal, or Corporate Website. Any updates you make in the Admin CMS are automatically synced to my knowledge base in real-time.",
    timestamp: 'Just now'
  }
];

export const ChatbotSimulatorModal: React.FC = () => {
  const { 
    isSimulatorOpen, 
    setIsSimulatorOpen, 
    softwareApps, 
    articles, 
    selectSoftware, 
    selectArticle,
    selectedSoftwareId
  } = useDocs();

  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeCitationDrawer, setActiveCitationDrawer] = useState<CitationItem[] | null>(null);
  const [scopeSoftwareId, setScopeSoftwareId] = useState<string>('all');
  const [ratedMessages, setRatedMessages] = useState<Record<string, 'up' | 'down'>>({});

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSimulatorOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isSimulatorOpen]);

  if (!isSimulatorOpen) return null;

  // Filter articles for context
  const targetArticles = scopeSoftwareId === 'all'
    ? articles
    : articles.filter(a => a.softwareId === scopeSoftwareId);

  // Dynamic preset prompts based on available software
  const presetQuestions = [
    "How do I add a new document or web link to the knowledge base?",
    "How does live human handoff work when confidence is low?",
    "How can parents settle monthly childcare invoices in the parent portal?",
    "How do I invite a new team member and assign staff permissions?"
  ];

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    try {
      // Build knowledge base context from the website's live articles
      const articlesContext = targetArticles.map(art => {
        const soft = softwareApps.find(s => s.id === art.softwareId);
        
        // Extract plain text instructions from steps
        const stepTexts = art.blocks
          ?.flatMap(b => {
            if (b.steps) {
              return b.steps.map(s => `Step ${s.stepNumber}: ${s.title}. ${s.instruction}`);
            }
            return [b.lead, b.body];
          })
          .filter(Boolean)
          .join('\n');

        return {
          id: art.id,
          title: art.title,
          softwareName: soft?.name || 'Falgoon Software',
          softwareSlug: soft?.slug || art.softwareId,
          summary: art.summary,
          content: stepTexts || art.summary
        };
      });

      // Prepare conversation history
      const history = messages.slice(-5).map(m => ({
        role: m.sender,
        text: m.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: text,
          history,
          articlesContext
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();

      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: data.answer || "I have analyzed your request based on our software documentation.",
        citations: data.citations || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error('Failed to get answer from AI Chatbot:', err);
      // Fallback
      const fallbackMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        sender: 'bot',
        text: "I am having trouble connecting to the AI service right now. However, you can browse all articles using the Global Search (press '/') or check the Troubleshooting Wizard in the navigation menu.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleOpenCitation = (cit: CitationItem) => {
    // Find matching software
    let softId = cit.softwareSlug;
    const foundSoft = softwareApps.find(
      s => (s.slug && s.slug === cit.softwareSlug) || s.id === cit.softwareSlug || s.name.toLowerCase() === cit.softwareName.toLowerCase()
    );
    if (foundSoft) {
      softId = foundSoft.id;
    }

    if (softId) {
      selectSoftware(softId);
      if (cit.articleId) {
        selectArticle(cit.articleId);
      }
      setIsSimulatorOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setActiveCitationDrawer(null);
  };

  const handleRate = (msgId: string, rating: 'up' | 'down') => {
    setRatedMessages(prev => ({ ...prev, [msgId]: rating }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 text-white p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-teal-600 border-2 border-teal-400 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 ring-2 ring-teal-800 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-sm flex items-center gap-1.5 text-white">
                Falgoon AI Assistant
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
                  Grounded AI
                </span>
              </h3>
              <p className="text-[11px] text-teal-200 flex items-center gap-1">
                <Database className="w-3 h-3" />
                <span>{targetArticles.length} Live Guides in Knowledge Base</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              className="p-1.5 text-teal-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsSimulatorOpen(false)}
              className="p-1.5 text-teal-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              title="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Knowledge Base Scoping Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1 text-slate-500 font-medium">
            <Filter className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-[11px]">Knowledge Scope:</span>
          </div>
          <select
            value={scopeSoftwareId}
            onChange={(e) => setScopeSoftwareId(e.target.value)}
            className="text-xs font-semibold text-slate-800 bg-white border border-slate-300 rounded-lg px-2 py-1 focus:outline-teal-600 cursor-pointer shadow-2xs"
          >
            <option value="all">Entire Website ({articles.length} guides)</option>
            {softwareApps.map(app => (
              <option key={app.id} value={app.id}>
                {app.shortName} only
              </option>
            ))}
          </select>
        </div>

        {/* Preset Prompt Suggestions */}
        <div className="bg-teal-50/50 border-b border-teal-100 p-2.5 overflow-x-auto text-xs flex gap-2">
          {presetQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="bg-white hover:bg-teal-50 text-teal-900 border border-teal-200/90 px-2.5 py-1 rounded-full whitespace-nowrap text-[11px] font-medium transition-colors flex-shrink-0 shadow-2xs cursor-pointer"
            >
              "{q.slice(0, 32)}..."
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70">
          {messages.map(msg => (
            <div 
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[90%] rounded-2xl p-4 text-xs leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-teal-700 text-white rounded-tr-xs shadow-sm font-medium'
                  : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200 shadow-xs'
              }`}>
                {/* Render formatted message */}
                <div className="whitespace-pre-line font-normal space-y-2">
                  {msg.text}
                </div>

                {/* Grounded Citations with direct links */}
                {msg.citations && msg.citations.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                      Grounded Sources from User Guides:
                    </span>
                    <div className="space-y-1.5">
                      {msg.citations.map((cit, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleOpenCitation(cit)}
                          className="w-full text-left bg-teal-50/80 hover:bg-teal-100 border border-teal-200/80 p-2 rounded-xl text-teal-900 flex items-center justify-between gap-2 transition-colors cursor-pointer group"
                        >
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider block">
                              {cit.softwareName}
                            </span>
                            <span className="font-semibold text-xs text-slate-900 group-hover:text-teal-800 truncate block">
                              {cit.title}
                            </span>
                          </div>
                          <div className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-white px-2 py-1 rounded-lg border border-teal-200">
                            <span>Open Guide</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Timestamp & Helpful Feedback */}
              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                {msg.sender === 'bot' && (
                  <div className="flex items-center gap-1 text-slate-400">
                    <button 
                      onClick={() => handleRate(msg.id, 'up')}
                      className={`p-1 rounded hover:bg-slate-200 transition-colors ${
                        ratedMessages[msg.id] === 'up' ? 'text-teal-600 font-bold' : ''
                      }`}
                      title="Helpful answer"
                    >
                      <ThumbsUp className="w-3 h-3" />
                    </button>
                    <button 
                      onClick={() => handleRate(msg.id, 'down')}
                      className={`p-1 rounded hover:bg-slate-200 transition-colors ${
                        ratedMessages[msg.id] === 'down' ? 'text-rose-600 font-bold' : ''
                      }`}
                      title="Unhelpful"
                    >
                      <ThumbsDown className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-xs max-w-[140px] shadow-xs">
              <span className="text-xs text-slate-400 font-medium mr-1">Searching docs</span>
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about the software guides..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="bg-teal-700 text-white p-2.5 rounded-xl hover:bg-teal-800 disabled:opacity-40 transition-colors shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mt-2 px-1">
            <span>Powered by Gemini 3.8 Flash • Strictly Grounded</span>
            <span>Edits in Admin CMS sync instantly</span>
          </div>
        </div>
      </div>
    </div>
  );
};
