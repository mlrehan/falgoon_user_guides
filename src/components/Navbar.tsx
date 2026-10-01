import React from 'react';
import { useDocs } from '../context/DocsContext';
import { FalgoonLogo } from './FalgoonLogo';
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
          {/* Zone 1: Brand Logo & Wordmark */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleHomeClick}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-teal-600 rounded-lg p-1 cursor-pointer"
            >
              <FalgoonLogo variant="normal" size="md" showSubtitle={true} />
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
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors border border-slate-200/80 cursor-pointer"
              aria-label="Search documentation"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline font-normal">Search guides...</span>
              <kbd className="hidden sm:inline-block font-mono text-[10px] bg-white text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                /
              </kbd>
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
