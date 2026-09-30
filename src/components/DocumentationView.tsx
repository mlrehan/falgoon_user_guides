import React, { useState } from 'react';
import { useDocs } from '../context/DocsContext';
import { ArticleRenderer } from './ArticleRenderer';
import { ShareGuideModal } from './ShareGuideModal';
import { getSoftwareSlug, getGuideShareUrls, copyToClipboard } from '../utils/urlRouter';
import { 
  Search, 
  ChevronRight, 
  BookOpen, 
  Menu, 
  X, 
  ExternalLink, 
  Layers, 
  ArrowLeft, 
  Bot, 
  Compass, 
  LineChart, 
  ShieldCheck, 
  Smile, 
  BarChart3, 
  Globe,
  Share2,
  Link2,
  Copy,
  Check,
  Mail
} from 'lucide-react';

interface DocumentationViewProps {
  onBackToHub: () => void;
}

export const DocumentationView: React.FC<DocumentationViewProps> = ({ onBackToHub }) => {
  const { 
    softwareApps, 
    categories, 
    articles, 
    selectedSoftwareId, 
    selectedArticleId, 
    selectSoftware, 
    selectArticle 
  } = useDocs();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedLinkFeedback, setCopiedLinkFeedback] = useState(false);

  // Find active software
  const currentSoftware = softwareApps.find((s) => s.id === selectedSoftwareId) || softwareApps[0];
  
  // Filter categories and articles for this software
  const currentCategories = categories
    .filter((c) => c.softwareId === currentSoftware?.id)
    .sort((a, b) => a.order - b.order);

  const currentArticles = articles.filter((a) => a.softwareId === currentSoftware?.id);

  // Active article
  const activeArticle = currentArticles.find((a) => a.id === selectedArticleId) || currentArticles[0];

  const handleQuickCopySoftwareLink = async () => {
    if (!currentSoftware) return;
    const { primaryUrl } = getGuideShareUrls(currentSoftware, activeArticle);
    const success = await copyToClipboard(primaryUrl);
    if (success) {
      setCopiedLinkFeedback(true);
      setTimeout(() => setCopiedLinkFeedback(false), 2500);
    }
  };

  const getCategoryIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-4 h-4 text-teal-600" />;
      case 'Bot':
        return <Bot className="w-4 h-4 text-teal-600" />;
      case 'LineChart':
        return <LineChart className="w-4 h-4 text-teal-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-teal-600" />;
      case 'Smile':
        return <Smile className="w-4 h-4 text-amber-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-indigo-600" />;
      case 'Globe':
        return <Globe className="w-4 h-4 text-sky-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sub-header Bar (Software Switcher, Direct Slug & Share Actions) */}
      <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-2.5 flex items-center justify-between no-print gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToHub}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 transition-colors shrink-0 cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Hub</span>
          </button>

          {/* Software Switcher dropdown */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-xs text-slate-400 font-medium hidden lg:inline shrink-0">Active App:</span>
            <select
              value={currentSoftware?.id}
              onChange={(e) => selectSoftware(e.target.value)}
              className="text-xs font-bold text-slate-900 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-teal-600 cursor-pointer shadow-2xs max-w-[220px] sm:max-w-none truncate"
            >
              {softwareApps.map((app) => (
                <option key={app.id} value={app.id}>
                  {app.name} ({app.shortName})
                </option>
              ))}
            </select>
          </div>

          {/* Direct Slug Indicator & One-Click Copy */}
          {currentSoftware && (
            <div className="hidden xl:flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-lg px-2.5 py-1 text-xs shadow-2xs">
              <Link2 className="w-3 h-3 text-teal-600 shrink-0" />
              <span className="text-[11px] text-slate-400 font-medium">Slug:</span>
              <code className="text-[11px] font-mono font-bold text-teal-900 truncate max-w-[140px]">
                /?app={getSoftwareSlug(currentSoftware)}
              </code>
              <button
                onClick={handleQuickCopySoftwareLink}
                className="ml-1 text-[11px] font-bold text-teal-700 hover:text-teal-950 flex items-center gap-1 cursor-pointer"
                title="Copy shareable link for emails or external websites"
              >
                {copiedLinkFeedback ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400 hover:text-teal-600" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Right side actions: Share, Launch, Mobile menu */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Share Guide Modal Trigger */}
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors cursor-pointer"
            title="Share dedicated guide link, email, or embed code"
          >
            <Share2 className="w-3.5 h-3.5 text-teal-600" />
            <span className="hidden sm:inline">Share Guide</span>
          </button>

          <a
            href={currentSoftware?.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg border border-teal-200 transition-colors"
          >
            <span>Launch Web App</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-1.5 text-slate-600 bg-white rounded-lg border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar Navigation */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-72 bg-slate-50 border-r border-slate-200 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 overflow-y-auto ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-0 hidden md:block'
          } no-print`}
        >
          <div className="p-4 border-b border-slate-200 bg-white">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Guide Navigation
              </span>
              <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                {currentArticles.length} guides
              </span>
            </div>

            {/* Quick in-sidebar filter */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <input
                type="text"
                placeholder="Filter this guide..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs placeholder:text-slate-400 focus:outline-teal-600"
              />
            </div>
          </div>

          {/* Categorized Article Links */}
          <div className="p-3 space-y-6">
            {currentCategories.map((cat) => {
              const catArticles = currentArticles
                .filter((a) => a.categoryId === cat.id)
                .filter((a) => 
                  !filterQuery || 
                  a.title.toLowerCase().includes(filterQuery.toLowerCase()) || 
                  a.summary.toLowerCase().includes(filterQuery.toLowerCase())
                );

              if (catArticles.length === 0 && filterQuery) return null;

              return (
                <div key={cat.id}>
                  <div className="flex items-center gap-2 px-2 mb-2 text-xs font-bold text-slate-800 tracking-wide">
                    {getCategoryIcon(cat.iconName)}
                    <span>{cat.name}</span>
                  </div>

                  <div className="space-y-0.5">
                    {catArticles.map((art) => {
                      const isSelected = art.id === activeArticle?.id;
                      return (
                        <button
                          key={art.id}
                          onClick={() => {
                            selectArticle(art.id);
                            setSidebarOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between group cursor-pointer ${
                            isSelected
                              ? 'bg-teal-700 text-white font-semibold shadow-xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                          }`}
                        >
                          <span className="truncate pr-2">{art.title}</span>
                          <span className={`text-[10px] shrink-0 font-mono ${
                            isSelected ? 'text-teal-200' : 'text-slate-400'
                          }`}>
                            {art.estimatedMinutes}m
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-white min-h-[calc(100vh-4rem)]">
          {activeArticle ? (
            <ArticleRenderer 
              article={activeArticle} 
              onNavigateArticle={(artId) => selectArticle(artId)} 
            />
          ) : (
            <div className="p-12 text-center text-slate-500">
              <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
              <h3 className="text-base font-bold text-slate-700">No article selected</h3>
              <p className="text-xs text-slate-400 mt-1">Please select an article from the left navigation.</p>
            </div>
          )}
        </main>
      </div>

      {/* Share Guide Modal */}
      <ShareGuideModal
        software={currentSoftware}
        article={activeArticle}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
};
