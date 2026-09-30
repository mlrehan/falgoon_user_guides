export interface GlossaryEntry {
  term: string;
  definition: string;
  category: string;
  seeAlso?: string[];
}

export const GLOSSARY_DATA: GlossaryEntry[] = [
  {
    term: 'Tenant',
    category: 'Architecture',
    definition: 'Your organisation\'s own private, strictly isolated space in the portal. Your documents, conversations, members, and settings are inaccessible to any other organisation.'
  },
  {
    term: 'AI Assistant / Chatbot',
    category: 'AI & Bot',
    definition: 'The artificial intelligence software that sits on your website and answers visitor questions 24/7, answering strictly from information in your knowledge base.'
  },
  {
    term: 'Assistant Type',
    category: 'AI & Bot',
    definition: 'The industry profile of your organisation (e.g., UK Nursery, Early Years, Training Academy). It determines baseline safety regulations and domain-specific vocabulary.'
  },
  {
    term: 'Knowledge Base',
    category: 'Content',
    definition: 'The organized repository of documents, spreadsheets, and web pages that your chatbot reads, indexes, and draws from when formulating answers.'
  },
  {
    term: 'Source',
    category: 'Content',
    definition: 'A single uploaded document or crawled web page inside your knowledge base. When an answer is given, the exact source URLs or document titles are cited.'
  },
  {
    term: 'Passage (Chunk)',
    category: 'Content',
    definition: 'A small section of text extracted from a source document. Splitting files into short passages allows the AI to pinpoint the exact sentence that answers a question.'
  },
  {
    term: 'Retrieval',
    category: 'AI & Bot',
    definition: 'The search stage where the system scans your knowledge base for the most relevant passages before generating an answer. Test search lets you inspect this directly.'
  },
  {
    term: 'Citation',
    category: 'AI & Bot',
    definition: 'The small reference number (e.g. [1], [2]) placed after facts in an answer, allowing visitors and staff to click through and verify the source evidence.'
  },
  {
    term: 'Token',
    category: 'Billing & Usage',
    definition: 'The standard computational unit used to measure AI usage, roughly equivalent to 3/4 of an English word (or 100 tokens ≈ 75 words). Monthly allowances are measured in tokens.'
  },
  {
    term: 'Human Handoff',
    category: 'Support',
    definition: 'The process of transferring an ongoing chat from the AI assistant to a human staff member in the Inbox when requested or when complex judgement is required.'
  },
  {
    term: 'Support Team',
    category: 'Support',
    definition: 'A named group of colleagues (e.g. "Admissions Enquiries" or "Fee Support") who receive and answer handed-off conversations in real time.'
  },
  {
    term: 'Embed Code',
    category: 'Integration',
    definition: 'A single HTML <script> line that your web developer copies and pastes into your website template to display the floating chat widget.'
  },
  {
    term: 'Allowed Website',
    category: 'Security',
    definition: 'A domain name explicitly authorised to load your chatbot. If pasted on an unauthorized website, the widget automatically remains hidden for security.'
  },
  {
    term: 'Multi-Factor Authentication (MFA)',
    category: 'Security',
    definition: 'An extra security verification requiring a 6-digit code from an authenticator app on your smartphone in addition to your password during sign in.'
  },
  {
    term: 'Audit Trail',
    category: 'Security',
    definition: 'An immutable, permanent log recording sensitive administrator actions, such as opening visitor conversation threads or deleting a knowledge base.'
  }
];
