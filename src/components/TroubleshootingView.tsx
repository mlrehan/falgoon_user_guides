import React, { useState } from 'react';
import { TROUBLESHOOTING_DATA } from '../data/troubleshootingData';
import { useDocs } from '../context/DocsContext';
import { TroubleshootingItem } from '../types/docs';
import { 
  AlertTriangle, 
  HelpCircle, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen
} from 'lucide-react';

export const TroubleshootingView: React.FC = () => {
  const { selectSoftware, selectArticle } = useDocs();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(TROUBLESHOOTING_DATA[0]?.id || null);

  const categories = ['All', 'Answers', 'Website', 'Content', 'Hand-off', 'Limits', 'Access'];

  const filteredItems = TROUBLESHOOTING_DATA.filter((item: TroubleshootingItem) => {
    const itemCat = String(item.category).toLowerCase();
    const matchesCategory = selectedCategory === 'All' || itemCat === selectedCategory.toLowerCase();
    const fixesList = item.fixes || item.steps || [];
    const matchesSearch = searchTerm === '' || 
      item.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.causes.some(c => c.toLowerCase().includes(searchTerm.toLowerCase())) ||
      fixesList.some((f: string) => f.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNavigateChapter = (chapterId?: string) => {
    if (chapterId) {
      selectSoftware('falgoon-admin');
      selectArticle(chapterId);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-200/80 rounded-2xl p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              Interactive Problem Solver
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Troubleshooting &amp; Quick Fixes
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Experiencing an unexpected issue with your chatbot, nursery portals, or staff permissions? Select your problem below for step-by-step diagnostic checks.
            </p>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search problem symptoms (e.g. 'hallucinating', 'widget not showing', 'exceeded limits')..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Troubleshooting Accordions */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-700">No troubleshooting guides match your filter</p>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search term or selecting "All" categories.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-lg hover:bg-amber-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredItems.map(item => {
            const isExpanded = expandedId === item.id;
            const fixesList = item.fixes || item.steps || [];
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded ? 'border-amber-300 shadow-md ring-1 ring-amber-300/40' : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 flex-shrink-0">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.problem}
                    </h3>
                  </div>

                  <span className={`text-xs font-semibold px-2 py-1 rounded transition-colors ${
                    isExpanded ? 'bg-amber-100 text-amber-800' : 'text-slate-400'
                  }`}>
                    {isExpanded ? 'Hide Solution' : 'View Fix'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4">
                    {/* Likely Causes */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        Most Likely Causes:
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {item.causes.map((cause, idx) => (
                          <li key={idx} className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/80 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Step-by-Step Fixes */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        Recommended Step-by-Step Resolution:
                      </h4>
                      <div className="space-y-2">
                        {fixesList.map((fix: string, idx: number) => (
                          <div key={idx} className="text-xs text-slate-800 bg-emerald-50/60 border border-emerald-200/80 p-3 rounded-lg flex items-start gap-2.5">
                            <span className="font-bold text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5 text-[10px]">
                              Step {idx + 1}
                            </span>
                            <span className="font-medium">{fix}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deep Link to Article */}
                    {item.relatedChapterId && (
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => handleNavigateChapter(item.relatedChapterId)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          Read Complete User Guide Chapter &amp; View Screenshots
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
