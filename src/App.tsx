/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DocsProvider, useDocs } from './context/DocsContext';
import { Navbar } from './components/Navbar';
import { HomeHub } from './components/HomeHub';
import { DocumentationView } from './components/DocumentationView';
import { AdminPortal } from './components/AdminPortal';
import { TroubleshootingView } from './components/TroubleshootingView';
import { ChecklistView } from './components/ChecklistView';
import { GlossaryView } from './components/GlossaryView';
import { ScreenshotGalleryView } from './components/ScreenshotGalleryView';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { MediaLightboxModal } from './components/MediaLightboxModal';
import { ChatbotSimulatorModal } from './components/ChatbotSimulatorModal';
import { Footer } from './components/Footer';
import { parseCurrentRoute, updateBrowserUrl } from './utils/urlRouter';
import { 
  BookOpen, 
  ExternalLink, 
  ShieldCheck, 
  Heart, 
  ArrowUp,
  Bot
} from 'lucide-react';

type TabType = 'hub' | 'docs' | 'ops' | 'troubleshoot' | 'glossary' | 'gallery';

function AppContent() {
  const { 
    softwareApps,
    articles,
    selectedSoftwareId, 
    selectSoftware, 
    selectedArticleId,
    selectArticle,
    searchOpen, 
    setSearchOpen,
    isAdminMode,
    setIsAdminMode,
    setIsSimulatorOpen
  } = useDocs();

  const [currentTab, setCurrentTab] = useState<TabType>('hub');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 1. Initial route check on page load: handles links opened from email or external websites
  useEffect(() => {
    const route = parseCurrentRoute(softwareApps, articles);
    if (route.softwareId) {
      selectSoftware(route.softwareId);
      if (route.articleId) {
        selectArticle(route.articleId);
      }
      setCurrentTab('docs');
    } else if (route.tab) {
      setCurrentTab(route.tab);
    }
  }, []);

  // 2. Browser Back / Forward and Hash Navigation Listener
  useEffect(() => {
    const handleRouteChange = () => {
      const route = parseCurrentRoute(softwareApps, articles);
      if (route.softwareId) {
        selectSoftware(route.softwareId);
        if (route.articleId) {
          selectArticle(route.articleId);
        }
        setCurrentTab('docs');
      } else if (route.tab) {
        setCurrentTab(route.tab);
      } else {
        setCurrentTab('hub');
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, [softwareApps, articles, selectSoftware, selectArticle]);

  // 3. Keep Browser URL Address Bar synchronized with current software slug & article
  useEffect(() => {
    if (isAdminMode) return;
    const currentSoftware = softwareApps.find((s) => s.id === selectedSoftwareId);
    updateBrowserUrl(
      currentTab === 'docs' ? currentSoftware : null,
      currentTab === 'docs' ? selectedArticleId : null,
      articles,
      currentTab
    );
  }, [currentTab, selectedSoftwareId, selectedArticleId, softwareApps, articles, isAdminMode]);

  // If user selects software from hub, switch to docs
  useEffect(() => {
    if (selectedSoftwareId && currentTab === 'hub') {
      setCurrentTab('docs');
    }
  }, [selectedSoftwareId]);

  // Global keyboard shortcut for search (/ or Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === '/' && (e.target as HTMLElement).tagName !== 'INPUT' && (e.target as HTMLElement).tagName !== 'TEXTAREA') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchOpen]);

  // Track scroll for "Back to top"
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDocs = (softwareId: string) => {
    selectSoftware(softwareId);
    setCurrentTab('docs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 selection:bg-teal-500 selection:text-white">
      {/* Top Bar Contract compliant Navbar */}
      <Navbar 
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {isAdminMode ? (
          <AdminPortal />
        ) : (
          <>
            {currentTab === 'hub' && (
              <HomeHub 
                onOpenDocs={handleOpenDocs}
                onOpenChecklist={() => setCurrentTab('ops')}
                onOpenTroubleshooting={() => setCurrentTab('troubleshoot')}
              />
            )}

            {currentTab === 'docs' && (
              <DocumentationView onBackToHub={() => setCurrentTab('hub')} />
            )}

            {currentTab === 'ops' && (
              <ChecklistView />
            )}

            {currentTab === 'troubleshoot' && (
              <TroubleshootingView />
            )}

            {currentTab === 'glossary' && (
              <GlossaryView />
            )}

            {currentTab === 'gallery' && (
              <ScreenshotGalleryView />
            )}
          </>
        )}
      </main>

      {/* Global Modals */}
      <GlobalSearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
      <MediaLightboxModal />
      <ChatbotSimulatorModal />

      {/* Floating Buttons: AI Assistant and Back-to-Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Floating Scroll to Top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all animate-in fade-in cursor-pointer border border-slate-700"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating AI Assistant Trigger Button */}
        <button
          onClick={() => setIsSimulatorOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white shadow-2xl transition-all group cursor-pointer border-2 border-white ring-4 ring-teal-500/20 hover:scale-105 active:scale-95"
          title="Open Falgoon AI Assistant (Grounded in Website Knowledge Base)"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 ring-2 ring-teal-700 animate-pulse" />
          </div>
          <span className="font-bold text-xs">Ask AI Assistant</span>
        </button>
      </div>

      {/* Lucrative Enterprise Footer modeled after falgoon.com with official copyright */}
      <Footer 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenAssistant={() => setIsSimulatorOpen(true)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <DocsProvider>
      <AppContent />
    </DocsProvider>
  );
}
