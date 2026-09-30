import React, { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  sources?: { title: string; docName: string; page?: number }[];
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'm1',
    sender: 'bot',
    text: "Hello! I am your Falgoon Nursery AI Assistant. How can I help you today? You can ask me questions about nursery policies, daily routines, billing, or system access.",
    timestamp: 'Just now'
  }
];

const PRESET_QUESTIONS = [
  "What are the staff-to-child EYFS ratios for 2-year-olds?",
  "How do parents pay their monthly nursery invoices?",
  "How do I add a new PDF policy to the knowledge base?",
  "How does live handoff to human staff work?"
];

const KNOWLEDGE_RESPONSES: Record<string, { answer: string; sources: { title: string; docName: string }[] }> = {
  ratio: {
    answer: "Under statutory EYFS requirements, the standard ratio for two-year-old children is 1 adult to 5 children (or 1:4 depending on qualification level). For children aged 3 and over with an EYFS teacher, it is 1:13. All staff must be verified in the Falgoon Executive Nursery Portal.",
    sources: [
      { title: "EYFS Statutory Framework 2024", docName: "eyfs-guidelines.pdf" },
      { title: "Staff Ratios and Group Sizes", docName: "nursery-handbook-sec4.docx" }
    ]
  },
  invoice: {
    answer: "Parents can review and settle their monthly childcare fees via the Falgoon Nursery Parent Portal (https://nursery1.falgoon.co.uk/). They can navigate to the 'Finance & Payments' tab to make instantaneous debit/credit card or childcare voucher payments with instant receipts.",
    sources: [
      { title: "Parent Portal User Guide Chapter 2", docName: "parent-fee-guide.pdf" },
      { title: "Finance Policy & Tax-Free Childcare", docName: "falgoon-terms-2025.pdf" }
    ]
  },
  pdf: {
    answer: "To add a new PDF to your chatbot's knowledge base:\n1. Open Falgoon Nursery Admin System.\n2. Navigate to 'Knowledge Base' from the left sidebar.\n3. Click '+ Add Document' or 'Add from Web'.\n4. Select your file and click 'Upload & Ingest'.\nThe AI will automatically process and ground all upcoming responses on the document contents.",
    sources: [
      { title: "Tenant Administrator Guide - Chapter 7: Knowledge Bases", docName: "admin-manual-ch7.html" }
    ]
  },
  handoff: {
    answer: "When a parent asks for human assistance or a topic reaches a confidence limit, the bot triggers Human Handoff. The conversation moves to the Staff Inbox (Falgoon Admin -> Inbox), notifying duty team managers immediately so staff can type back in real-time.",
    sources: [
      { title: "Tenant Administrator Guide - Chapter 8: Conversations & Handoff", docName: "admin-manual-ch8.html" }
    ]
  }
};

export const ChatbotSimulatorModal: React.FC = () => {
  const { isSimulatorOpen, setIsSimulatorOpen, selectSoftware, selectArticle } = useDocs();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeSources, setActiveSources] = useState<{ title: string; docName: string }[] | null>(null);

  if (!isSimulatorOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputVal.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let responseKey = 'ratio';
      if (lower.includes('invoice') || lower.includes('pay') || lower.includes('bill') || lower.includes('fee')) {
        responseKey = 'invoice';
      } else if (lower.includes('pdf') || lower.includes('document') || lower.includes('knowledge') || lower.includes('upload')) {
        responseKey = 'pdf';
      } else if (lower.includes('handoff') || lower.includes('human') || lower.includes('staff') || lower.includes('inbox')) {
        responseKey = 'handoff';
      }

      const match = KNOWLEDGE_RESPONSES[responseKey];
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: match ? match.answer : "Thank you for asking! According to the Falgoon Nursery knowledge base, all nursery operational policies and guardian updates are synchronized in real-time across your executive and parent dashboards.",
        sources: match ? match.sources : [{ title: "Falgoon General Policy", docName: "general-policies.pdf" }],
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setActiveSources(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-teal-600 border-2 border-teal-400 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 ring-2 ring-teal-800" />
            </div>
            <div>
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                Falgoon Assistant Simulator
                <span className="bg-teal-600/80 text-[10px] px-1.5 py-0.2 rounded font-mono font-medium">LIVE</span>
              </h3>
              <p className="text-[11px] text-teal-200">Grounded in Nursery Knowledge Base</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              className="p-1.5 text-teal-200 hover:text-white rounded-lg hover:bg-teal-600 transition-colors"
              title="Reset test conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsSimulatorOpen(false)}
              className="p-1.5 text-teal-200 hover:text-white rounded-lg hover:bg-teal-600 transition-colors"
              title="Close simulator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preset Prompt Suggestions */}
        <div className="bg-teal-50/70 border-b border-teal-100 p-2.5 overflow-x-auto text-xs flex gap-2">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="bg-white hover:bg-teal-100 text-teal-900 border border-teal-200/80 px-2.5 py-1 rounded-full whitespace-nowrap text-[11px] font-medium transition-colors flex-shrink-0 shadow-2xs"
            >
              "{q.slice(0, 32)}..."
            </button>
          ))}
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60">
          {messages.map(msg => (
            <div 
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs ${
                msg.sender === 'user'
                  ? 'bg-teal-600 text-white rounded-tr-xs shadow-sm'
                  : 'bg-white text-slate-800 rounded-tl-xs border border-slate-200 shadow-xs'
              }`}>
                <p className="whitespace-pre-line leading-relaxed font-normal">{msg.text}</p>

                {/* Sources pill if bot */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => setActiveSources(msg.sources || null)}
                      className="text-[10px] text-teal-700 bg-teal-50 hover:bg-teal-100 font-semibold px-2 py-0.5 rounded flex items-center gap-1 transition-colors"
                    >
                      <BookOpen className="w-3 h-3" />
                      View {msg.sources.length} Grounded Citations
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                {msg.sender === 'bot' && (
                  <div className="flex items-center gap-1 text-slate-400">
                    <button className="hover:text-teal-600 p-0.5"><ThumbsUp className="w-3 h-3" /></button>
                    <button className="hover:text-rose-600 p-0.5"><ThumbsDown className="w-3 h-3" /></button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-xs max-w-[120px] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        {/* Citations Overlay Drawer */}
        {activeSources && (
          <div className="bg-white border-t border-slate-200 p-3 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Verified Knowledge Sources
              </span>
              <button onClick={() => setActiveSources(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-1.5 max-h-32 overflow-y-auto">
              {activeSources.map((s, idx) => (
                <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-[11px] flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-slate-800">{s.title}</div>
                    <div className="text-slate-500 text-[10px] font-mono">{s.docName}</div>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                    100% Match
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

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
              placeholder="Ask a question about nursery systems..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="bg-teal-600 text-white p-2 rounded-xl hover:bg-teal-700 disabled:opacity-40 transition-colors shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] text-slate-400 text-center mt-2">
            Testing simulated widget experience for Falgoon Nursery websites.
          </p>
        </div>
      </div>
    </div>
  );
};
