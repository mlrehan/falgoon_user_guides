import React, { useState } from 'react';
import { GLOSSARY_DATA, GlossaryEntry } from '../data/glossaryData';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Sparkles,
  ExternalLink,
  Tag
} from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Architecture', 'AI & Knowledge', 'Security & Access', 'Chatbot & Messaging', 'Operations'];
  
  // Get available starting letters
  const letters = ['All', ...Array.from(new Set(GLOSSARY_DATA.map(g => g.term[0].toUpperCase()))).sort()];

  const filteredEntries = GLOSSARY_DATA.filter(entry => {
    const matchesSearch = searchTerm === '' || 
      entry.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLetter = selectedLetter === 'All' || entry.term.toUpperCase().startsWith(selectedLetter);
    const matchesCategory = selectedCategory === 'All' || entry.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesLetter && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
          <BookOpen className="w-3.5 h-3.5" />
          Plain-English Jargon Buster
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          System Glossary & Terminology
        </h1>
        <p className="text-sm text-violet-100 mt-1 max-w-2xl">
          Demystifying technical terms so you can manage your software with total confidence. No engineering degree required!
        </p>

        {/* Search */}
        <div className="mt-6 max-w-xl relative">
          <Search className="w-4 h-4 text-violet-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search term or meaning (e.g. 'Chunking', 'Tenant', 'Grounding', 'Handoff')..."
            className="w-full pl-10 pr-4 py-2.5 bg-white text-slate-800 placeholder-slate-400 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 shadow-sm font-medium"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-3 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-semibold mr-1 flex-shrink-0">Category:</span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* A-Z Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {letters.map(letter => (
            <button
              key={letter}
              onClick={() => setSelectedLetter(letter)}
              className={`px-2.5 py-1 rounded-md font-bold transition-all min-w-[28px] text-center ${
                selectedLetter === letter
                  ? 'bg-white text-violet-700 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Cards Grid */}
      {filteredEntries.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <p className="font-bold text-slate-700">No definitions found</p>
          <p className="text-xs text-slate-400 mt-1">Try another search term or reset filters.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredEntries.map(entry => (
            <div 
              key={entry.term}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-violet-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-violet-50 text-violet-700 border border-violet-100">
                    {entry.category}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">
                  {entry.term}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {entry.definition}
                </p>
              </div>

              {entry.seeAlso && entry.seeAlso.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] text-slate-400 font-semibold">See also:</span>
                  {entry.seeAlso.map(item => (
                    <button
                      key={item}
                      onClick={() => setSearchTerm(item)}
                      className="text-[10px] bg-slate-100 hover:bg-violet-100 hover:text-violet-700 text-slate-600 px-2 py-0.5 rounded font-medium transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
