import React, { useState, useEffect, useRef } from 'react';
import { useDocs } from '../context/DocsContext';
import { Article, SoftwareApp } from '../types/docs';
import { 
  Search, 
  X, 
  BookOpen, 
  ChevronRight, 
  Clock, 
  ArrowRight
} from 'lucide-react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const THEME_COLORS: Record<string, string> = {
  teal: '#0d9488',
  orange: '#ea580c',
  violet: '#7c3aed',
  sky: '#0284c7',
  emerald: '#059669',
  amber: '#d97706',
  rose: '#e11d48',
};

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const { 
    softwareApps, 
    articles,
    categories,
    selectSoftware, 
    selectArticle 
  } = useDocs();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSoftwareFilter, setSelectedSoftwareFilter] = useState<string>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter articles based on query
  const query = searchQuery.trim().toLowerCase();
  const searchResults: { article: Article; software: SoftwareApp | undefined; categoryName: string }[] = query === '' 
    ? [] 
    : articles
        .filter(article => {
          if (selectedSoftwareFilter !== 'all' && article.softwareId !== selectedSoftwareFilter) {
            return false;
          }
          const inTitle = article.title.toLowerCase().includes(query);
          const inSummary = article.summary.toLowerCase().includes(query);
          const inBlocks = article.blocks?.some(b => 
            (b.title && b.title.toLowerCase().includes(query)) ||
            (b.body && b.body.toLowerCase().includes(query)) ||
            (b.steps && b.steps.some(s => s.title.toLowerCase().includes(query) || s.instruction.toLowerCase().includes(query)))
          );
          return inTitle || inSummary || inBlocks;
        })
        .map(article => {
          const software = softwareApps.find(a => a.id === article.softwareId);
          const category = categories.find(c => c.id === article.categoryId);
          return {
            article,
            software,
            categoryName: category?.name || 'General'
          };
        });

  const handleSelectResult = (softwareId: string, articleId: string) => {
    selectSoftware(softwareId);
    selectArticle(articleId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 md:p-20 flex justify-center items-start animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search instructions, articles, features (e.g. 'reset bot', 'knowledge base', 'invite team')..."
            className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base focus:outline-none font-medium"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 rounded">
            ESC
          </kbd>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-100 overflow-x-auto bg-white text-xs">
          <span className="text-slate-400 font-medium mr-1 flex-shrink-0">Filter by Software:</span>
          <button
            onClick={() => setSelectedSoftwareFilter('all')}
            className={`px-2.5 py-1 rounded-full font-medium transition-colors flex-shrink-0 ${
              selectedSoftwareFilter === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Products
          </button>
          {softwareApps.map(app => {
            const color = app.colorHex || THEME_COLORS[app.themeColor] || '#0d9488';
            return (
              <button
                key={app.id}
                onClick={() => setSelectedSoftwareFilter(app.id)}
                className={`px-2.5 py-1 rounded-full font-medium transition-colors flex-shrink-0 flex items-center gap-1 ${
                  selectedSoftwareFilter === app.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                {app.shortName}
              </button>
            );
          })}
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-slate-100 p-2">
          {searchQuery.trim() === '' ? (
            <div className="p-8 text-center text-slate-500">
              <BookOpen className="w-10 h-10 mx-auto text-teal-500 mb-3 opacity-60" />
              <p className="font-medium text-slate-700">Instant Documentation Search</p>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                Type any keyword or task you are trying to complete. We'll search across all Falgoon software manuals simultaneously.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {['Add knowledge source', 'Invite admin member', 'Configure chatbot tone', 'Export conversation log', 'Parent photo permissions'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="text-xs bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 px-2.5 py-1 rounded-lg transition-colors border border-slate-200/60"
                  >
                    "{tag}"
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="font-semibold text-slate-700">No matching guides found</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for broader keywords or clear your software filter.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Found {searchResults.length} relevant {searchResults.length === 1 ? 'article' : 'articles'}
              </div>
              {searchResults.map(({ article, software, categoryName }) => {
                const color = software?.colorHex || (software ? THEME_COLORS[software.themeColor] : '#0d9488');
                return (
                  <button
                    key={article.id}
                    onClick={() => handleSelectResult(article.softwareId, article.id)}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group flex items-start justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        {software && (
                          <span 
                            className="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider text-white"
                            style={{ backgroundColor: color }}
                          >
                            {software.shortName}
                          </span>
                        )}
                        <span className="text-xs text-slate-500 font-medium">
                          {categoryName}
                        </span>
                        {article.difficulty && (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase ${
                            article.difficulty.toLowerCase() === 'beginner' ? 'bg-emerald-100 text-emerald-700' :
                            article.difficulty.toLowerCase() === 'intermediate' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {article.difficulty}
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 font-normal">
                        {article.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 text-slate-400 group-hover:text-teal-700 pt-1">
                      {article.estimatedMinutes && (
                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.estimatedMinutes}m
                        </span>
                      )}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span>Navigate using search keywords across all software</span>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
