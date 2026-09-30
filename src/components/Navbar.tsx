import React from 'react';
import { useDocs } from '../context/DocsContext';
import { 
  Search, 
  Settings, 
  Bot, 
  BookOpen, 
  ExternalLink, 
  CheckSquare, 
  HelpCircle, 
  Sparkles,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentTab: 'hub' | 'docs' | 'ops' | 'troubleshoot' | 'glossary' | 'gallery';
  setCurrentTab: (tab: 'hub' | 'docs' | 'ops' | 'troubleshoot' | 'glossary' | 'gallery') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const { 
    setSearchOpen, 
    isAdminMode, 
    setIsAdminMode, 
    setIsSimulatorOpen, 
    selectSoftware,
    softwareApps,
    selectedSoftwareId
  } = useDocs();

  const handleHomeClick = () => {
    selectSoftware(null);
    setCurrentTab('hub');
  };

  const handleDocsClick = () => {
    if (!selectedSoftwareId && softwareApps.length > 0) {
      selectSoftware(softwareApps[0].id);
    }
    setCurrentTab('docs');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleHomeClick}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-teal-600 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-teal-700 transition-colors">
                F
              </div>
              <div>
                <span className="text-base font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
                  Falgoon Docs Hub
                </span>
                <span className="block text-[11px] text-slate-500 font-medium">
                  Multi-App User Guidelines &amp; Portal
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
            <button
              onClick={handleHomeClick}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                currentTab === 'hub' && !isAdminMode 
                  ? 'text-teal-700 font-semibold bg-teal-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Software Hub
            </button>
            <button
              onClick={handleDocsClick}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                currentTab === 'docs' && !isAdminMode 
                  ? 'text-teal-700 font-semibold bg-teal-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              User Guides
            </button>
            <button
              onClick={() => setCurrentTab('ops')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                currentTab === 'ops' && !isAdminMode 
                  ? 'text-teal-700 font-semibold bg-teal-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <CheckSquare className="w-3.5 h-3.5" />
              <span>Operations Checklist</span>
            </button>
            <button
              onClick={() => setCurrentTab('troubleshoot')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                currentTab === 'troubleshoot' && !isAdminMode 
                  ? 'text-teal-700 font-semibold bg-teal-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Troubleshooting
            </button>
            <button
              onClick={() => setCurrentTab('glossary')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                currentTab === 'glossary' && !isAdminMode 
                  ? 'text-teal-700 font-semibold bg-teal-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Glossary
            </button>
            <button
              onClick={() => setCurrentTab('gallery')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                currentTab === 'gallery' && !isAdminMode 
                  ? 'text-teal-700 font-semibold bg-teal-50/60' 
                  : 'hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              Screenshots (38)
            </button>
          </nav>

          {/* Zone 3: Primary interactive actions */}
          <div className="flex items-center gap-2.5">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200/80"
              aria-label="Search documentation"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline font-normal">Search guides...</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                /
              </kbd>
            </button>

            {/* Live Assistant Simulator */}
            <button
              onClick={() => setIsSimulatorOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-lg transition-colors"
              title="Experience live chatbot widget"
            >
              <Bot className="w-3.5 h-3.5 text-teal-600" />
              <span>Test Chatbot</span>
            </button>

            {/* Admin CMS Mode Toggle */}
            <button
              onClick={() => setIsAdminMode(!isAdminMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                isAdminMode
                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm ring-2 ring-amber-400/50'
                  : 'text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{isAdminMode ? 'Exit Admin CMS' : 'Admin CMS'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
