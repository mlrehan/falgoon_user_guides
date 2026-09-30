import React, { useEffect } from 'react';
import { useDocs } from '../context/DocsContext';
import { VisualScreenshotCard } from './VisualScreenshotCard';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen
} from 'lucide-react';

export const MediaLightboxModal: React.FC = () => {
  const { 
    activeScreenshot, 
    closeScreenshot, 
    mediaAssets, 
    openScreenshot,
    selectSoftware,
    selectArticle
  } = useDocs();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeScreenshot) return;
      if (e.key === 'Escape') closeScreenshot();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeScreenshot]);

  if (!activeScreenshot) return null;

  const currentIndex = mediaAssets.findIndex(m => m.id === activeScreenshot.id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      openScreenshot(mediaAssets[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < mediaAssets.length - 1) {
      openScreenshot(mediaAssets[currentIndex + 1]);
    }
  };

  const handleGoToRelatedArticle = () => {
    if (activeScreenshot.relatedChapterId) {
      selectSoftware('falgoon-admin');
      selectArticle(activeScreenshot.relatedChapterId);
      closeScreenshot();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 md:p-10 flex flex-col justify-center items-center animate-in fade-in duration-200"
      onClick={closeScreenshot}
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full border border-slate-700/50 overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <span className="bg-teal-600 text-white font-mono text-xs font-bold px-2.5 py-1 rounded-md">
              {activeScreenshot.figureLabel}
            </span>
            <div>
              <h3 className="font-bold text-base text-slate-100">
                {activeScreenshot.title}
              </h3>
              <p className="text-xs text-slate-400">
                Figure {currentIndex + 1} of {mediaAssets.length} in System Documentation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {activeScreenshot.relatedChapterId && (
              <button
                onClick={handleGoToRelatedArticle}
                className="hidden sm:flex items-center gap-1.5 text-xs bg-teal-500/20 text-teal-300 hover:bg-teal-500/30 px-3 py-1.5 rounded-lg border border-teal-500/30 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Open Guide
              </button>
            )}
            <button
              onClick={closeScreenshot}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image / Simulated View */}
        <div className="p-4 sm:p-6 bg-slate-900/95 flex items-center justify-center min-h-[360px] max-h-[68vh] overflow-y-auto">
          <div className="w-full max-w-4xl">
            <VisualScreenshotCard 
              screenshotId={activeScreenshot.id} 
              caption={activeScreenshot.description}
            />
          </div>
        </div>

        {/* Bottom Caption & Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 max-w-xl">
            <strong className="text-slate-900">Figure Caption: </strong>
            {activeScreenshot.description}
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {mediaAssets.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex >= mediaAssets.length - 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
