import React, { useState } from 'react';
import { useDocs } from '../context/DocsContext';
import { MediaAsset } from '../types/docs';
import { VisualScreenshotCard } from './VisualScreenshotCard';
import { 
  Image, 
  Search, 
  Maximize2, 
  BookOpen, 
  Layers, 
  Filter,
  ArrowRight
} from 'lucide-react';

export const ScreenshotGalleryView: React.FC = () => {
  const { mediaAssets, openScreenshot, selectSoftware, selectArticle } = useDocs();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const allTags = ['All', 'Dashboard', 'Members', 'Roles', 'Chatbot', 'Inbox', 'Knowledge Base', 'Conversations', 'Feedback', 'Widget'];

  const filteredAssets = mediaAssets.filter(asset => {
    const matchesTag = selectedTag === 'All' || asset.tags?.some(t => t.toLowerCase() === selectedTag.toLowerCase()) || asset.category.toLowerCase().includes(selectedTag.toLowerCase());
    const matchesSearch = searchTerm === '' ||
      asset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.figureLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const handleOpenGuide = (e: React.MouseEvent, chapterId?: string) => {
    e.stopPropagation();
    if (chapterId) {
      selectSoftware('falgoon-admin');
      selectArticle(chapterId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2 border border-teal-500/30">
              <Image className="w-3.5 h-3.5" />
              Visual Documentation Index
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Screenshot &amp; UI Figures Gallery
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              All 38 user guide figures and interface screenshots from the Falgoon Nursery Admin system. Click any card to inspect in high-resolution or jump directly into the step-by-step instructions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center min-w-[130px]">
            <div className="text-3xl font-black text-teal-400">{filteredAssets.length}</div>
            <div className="text-[11px] text-slate-300 uppercase font-semibold">
              Figures Found
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search figure by title or number (e.g. 'Figure 5.2', 'Knowledge Base', 'Handoff')..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/90 text-white border border-slate-700 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedTag === tag
                    ? 'bg-teal-500 text-slate-900 font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map(asset => (
          <div
            key={asset.id}
            onClick={() => openScreenshot(asset)}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Figure Preview Frame */}
              <div className="relative bg-slate-100 p-2 border-b border-slate-200 overflow-hidden min-h-[180px] flex items-center justify-center">
                <div className="w-full pointer-events-none transform group-hover:scale-[1.02] transition-transform duration-300">
                  <VisualScreenshotCard 
                    screenshotId={asset.id} 
                    caption={asset.description} 
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-slate-900/80 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Click to Zoom
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200/80 px-2 py-0.5 rounded">
                    {asset.figureLabel}
                  </span>
                  <span className="text-[11px] text-slate-500 uppercase font-semibold">
                    {asset.category}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors line-clamp-1">
                  {asset.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {asset.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">
                {asset.previewDetails?.screenName || 'System Interface'}
              </span>

              {asset.relatedChapterId && (
                <button
                  onClick={(e) => handleOpenGuide(e, asset.relatedChapterId)}
                  className="font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 group-hover:underline"
                >
                  <BookOpen className="w-3 h-3" />
                  View Guide
                  <ArrowRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
