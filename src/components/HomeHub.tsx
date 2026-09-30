import React, { useState } from 'react';
import { useDocs } from '../context/DocsContext';
import { SoftwareApp } from '../types/docs';
import { ShareGuideModal } from './ShareGuideModal';
import { getSoftwareSlug, getGuideShareUrls, copyToClipboard } from '../utils/urlRouter';
import { 
  Bot, 
  Smile, 
  BarChart3, 
  Globe, 
  ExternalLink, 
  ArrowRight, 
  Search, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  ShieldCheck,
  Plus,
  Link2,
  Copy,
  Check,
  Share2,
  Mail
} from 'lucide-react';

interface HomeHubProps {
  onOpenDocs: (softwareId: string) => void;
  onOpenChecklist: () => void;
  onOpenTroubleshooting: () => void;
}

export const HomeHub: React.FC<HomeHubProps> = ({ 
  onOpenDocs, 
  onOpenChecklist, 
  onOpenTroubleshooting 
}) => {
  const { softwareApps, articles, setSearchOpen, setIsAdminMode, selectArticle } = useDocs();
  const [localSearch, setLocalSearch] = useState('');
  const [shareModalApp, setShareModalApp] = useState<SoftwareApp | null>(null);
  const [copiedAppId, setCopiedAppId] = useState<string | null>(null);

  const handleQuickCopyLink = async (e: React.MouseEvent, app: SoftwareApp) => {
    e.stopPropagation();
    const { primaryUrl } = getGuideShareUrls(app);
    const success = await copyToClipboard(primaryUrl);
    if (success) {
      setCopiedAppId(app.id);
      setTimeout(() => setCopiedAppId(null), 2500);
    }
  };

  const handleOpenShareModal = (e: React.MouseEvent, app: SoftwareApp) => {
    e.stopPropagation();
    setShareModalApp(app);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-7 h-7 text-white" />;
      case 'Smile':
        return <Smile className="w-7 h-7 text-white" />;
      case 'BarChart3':
        return <BarChart3 className="w-7 h-7 text-white" />;
      case 'Globe':
        return <Globe className="w-7 h-7 text-white" />;
      default:
        return <BookOpen className="w-7 h-7 text-white" />;
    }
  };

  const getThemeStyles = (color: string) => {
    switch (color) {
      case 'teal':
        return {
          banner: 'bg-teal-700 text-white',
          badge: 'bg-teal-100 text-teal-800',
          border: 'border-teal-200 hover:border-teal-400',
          accent: 'text-teal-700',
          bgTint: 'bg-teal-50/40',
          button: 'bg-teal-700 hover:bg-teal-800 text-white shadow-teal-700/20'
        };
      case 'orange':
        return {
          banner: 'bg-amber-600 text-white',
          badge: 'bg-amber-100 text-amber-800',
          border: 'border-amber-200 hover:border-amber-400',
          accent: 'text-amber-700',
          bgTint: 'bg-amber-50/40',
          button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
        };
      case 'violet':
        return {
          banner: 'bg-indigo-700 text-white',
          badge: 'bg-indigo-100 text-indigo-800',
          border: 'border-indigo-200 hover:border-indigo-400',
          accent: 'text-indigo-700',
          bgTint: 'bg-indigo-50/40',
          button: 'bg-indigo-700 hover:bg-indigo-800 text-white shadow-indigo-700/20'
        };
      case 'sky':
        return {
          banner: 'bg-sky-600 text-white',
          badge: 'bg-sky-100 text-sky-800',
          border: 'border-sky-200 hover:border-sky-400',
          accent: 'text-sky-700',
          bgTint: 'bg-sky-50/40',
          button: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20'
        };
      case 'rose':
        return {
          banner: 'bg-rose-600 text-white',
          badge: 'bg-rose-100 text-rose-800',
          border: 'border-rose-200 hover:border-rose-400',
          accent: 'text-rose-700',
          bgTint: 'bg-rose-50/40',
          button: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/20'
        };
      case 'emerald':
        return {
          banner: 'bg-emerald-700 text-white',
          badge: 'bg-emerald-100 text-emerald-800',
          border: 'border-emerald-200 hover:border-emerald-400',
          accent: 'text-emerald-700',
          bgTint: 'bg-emerald-50/40',
          button: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20'
        };
      default:
        return {
          banner: 'bg-slate-700 text-white',
          badge: 'bg-slate-100 text-slate-800',
          border: 'border-slate-200 hover:border-slate-400',
          accent: 'text-slate-700',
          bgTint: 'bg-slate-50/40',
          button: 'bg-slate-700 hover:bg-slate-800 text-white shadow-slate-700/20'
        };
    }
  };

  const getArticleCount = (softwareId: string) => {
    return articles.filter((a) => a.softwareId === softwareId && a.status === 'published').length;
  };

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      {/* Top Graphic Showcase Header (Inspired directly by user_guide_template.jpg) */}
      <section className="relative overflow-hidden pt-10 pb-12 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Top Row: Playful Sticky Note (Left) + Main Typography Title */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            
            {/* Playful Paper Note (Inspired by top-left note in user_guide_template.jpg) */}
            <div className="order-2 lg:order-1 self-center lg:self-start w-full sm:w-auto">
              <div className="paper-note bg-purple-50 border border-purple-200/90 rounded-2xl p-5 shadow-sm max-w-xs rotate-[-2deg] hover:rotate-0 transition-transform cursor-default">
                <div className="flex items-center gap-1.5 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-2">
                  <span>Non-Technical Guide</span>
                  <span>💜</span>
                </div>
                <p className="text-sm font-medium text-purple-950 leading-relaxed">
                  "Documentation is not just for software engineers — it's a real-world tool for managers, parents, and administrators."
                </p>
                <div className="mt-3 text-[11px] text-purple-700 font-semibold flex items-center justify-between">
                  <span>100% Plain English</span>
                  <span>Zero jargon</span>
                </div>
              </div>
            </div>

            {/* Central Title Lockup */}
            <div className="order-1 lg:order-2 flex-1 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span>Enterprise Documentation Portal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Falgoon Software <span className="text-teal-700 underline decoration-teal-300 decoration-wavy underline-offset-8">User Guides</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Step-by-step instructions with verified system screenshots for every Falgoon web application. Click a software card below to solve any task effortlessly.
              </p>
            </div>

            {/* Quick Helper Links / Admin Callout */}
            <div className="order-3 hidden xl:flex flex-col gap-2.5 w-64">
              <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block mb-1">⚡ Quick Admin Actions</span>
                <p className="text-slate-500 mb-2">Administrators can add software cards dynamically without touching code.</p>
                <button
                  onClick={() => setIsAdminMode(true)}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold rounded-lg border border-amber-200 transition-colors text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Software Card</span>
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Global Search Bar on Hub */}
          <div className="max-w-2xl mx-auto mt-6">
            <div 
              onClick={() => setSearchOpen(true)}
              className="group cursor-pointer flex items-center gap-3 w-full bg-white px-4 py-3.5 rounded-2xl border-2 border-slate-200 hover:border-teal-500 shadow-sm transition-all"
            >
              <Search className="w-5 h-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
              <span className="text-sm text-slate-400 flex-1">
                Search guides, answers, screenshots, and steps (e.g., "Python price", "Add documents")...
              </span>
              <kbd className="hidden sm:inline-block font-mono text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md border border-slate-200">
                /
              </kbd>
            </div>

            {/* Popular Search Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500">
              <span className="font-medium text-slate-600">Popular queries:</span>
              <button 
                onClick={() => setSearchOpen(true)} 
                className="hover:text-teal-700 hover:underline cursor-pointer"
              >
                Upload documents
              </button>
              <span>·</span>
              <button 
                onClick={() => setSearchOpen(true)} 
                className="hover:text-teal-700 hover:underline cursor-pointer"
              >
                Questions couldn't answer
              </button>
              <span>·</span>
              <button 
                onClick={() => setSearchOpen(true)} 
                className="hover:text-teal-700 hover:underline cursor-pointer"
              >
                Human handoff
              </button>
              <span>·</span>
              <button 
                onClick={() => setSearchOpen(true)} 
                className="hover:text-teal-700 hover:underline cursor-pointer"
              >
                Two-step sign in (MFA)
              </button>
              <span>·</span>
              <button 
                onClick={onOpenChecklist} 
                className="hover:text-teal-700 hover:underline cursor-pointer font-semibold text-teal-700"
              >
                Operations checklist
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Section: The Vibrant Card Grid (Inspiration from user_guide_template.jpg) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Software Application Guides
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Select a software portal to browse its categorized chapters, screenshot walkthroughs, and FAQs.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{softwareApps.length} Software Systems Online</span>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softwareApps.map((app, index) => {
            const styles = getThemeStyles(app.themeColor);
            const articleCount = getArticleCount(app.id);

            return (
              <div 
                key={app.id}
                className={`flex flex-col bg-white rounded-3xl border-2 ${styles.border} shadow-sm hover:shadow-md transition-all overflow-hidden group`}
              >
                {/* Distinct Colored Top Banner (Modeled after user_guide_template.jpg header strips) */}
                <div className={`${styles.banner} px-6 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold tracking-wider uppercase opacity-90">
                      {index + 1}. {app.shortName.toUpperCase()}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-medium">
                      {app.version}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleOpenShareModal(e, app)}
                      className="text-xs flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white font-medium transition-colors cursor-pointer"
                      title="Share or email this user guide link"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>Share</span>
                    </button>
                    <a
                      href={app.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs flex items-center gap-1 opacity-90 hover:opacity-100 hover:underline font-medium px-2 py-1"
                      title={`Open live portal at ${app.portalUrl}`}
                    >
                      <span>Launch</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Identity Row */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${styles.badge}`}>
                          {app.audience}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-teal-700 transition-colors">
                          {app.name}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mt-0.5 truncate max-w-sm">
                          {app.portalUrl}
                        </p>
                      </div>

                      <div className={`w-14 h-14 rounded-2xl ${styles.banner} flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                        {getIcon(app.icon)}
                      </div>
                    </div>

                    {/* Direct Slug Pill (For emailing or linking from other sites) */}
                    <div className="mb-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Link2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="text-[11px] text-slate-500 font-semibold shrink-0">Direct Slug:</span>
                        <code className="text-[11px] font-mono font-bold text-teal-900 bg-white px-1.5 py-0.5 rounded border border-slate-200 truncate select-all">
                          /?app={getSoftwareSlug(app)}
                        </code>
                      </div>
                      <button
                        onClick={(e) => handleQuickCopyLink(e, app)}
                        className="text-[11px] font-bold text-teal-800 hover:text-teal-950 bg-teal-50 hover:bg-teal-100 px-2.5 py-1 rounded-lg border border-teal-200 transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                        title="Copy direct link to send to users or embed on websites"
                      >
                        {copiedAppId === app.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Link</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Plain Language Summary */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {app.description}
                    </p>

                    {/* Quick Popular Guides (Interactive Direct Links) */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">
                        Popular Walkthroughs in this guide:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {app.popularGuides.map((guide, gIdx) => (
                          <button
                            key={gIdx}
                            onClick={() => {
                              onOpenDocs(app.id);
                              selectArticle(guide.articleId);
                            }}
                            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 transition-colors border border-slate-200/80 font-medium text-left cursor-pointer"
                          >
                            {guide.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Action Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-slate-400" />
                      <span>{articleCount} Complete Articles &amp; Walkthroughs</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleOpenShareModal(e, app)}
                        className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer flex items-center gap-1"
                        title="Email or copy shareable link"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Share</span>
                      </button>
                      <button
                        onClick={() => onOpenDocs(app.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${styles.button}`}
                      >
                        <span>Explore User Guide</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Did You Know? Paper Note + Operations Callouts */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Paper-clipped Did You Know note (Modeled after bottom right note in user_guide_template.jpg) */}
          <div className="paper-note paper-clip-note bg-amber-50 border border-amber-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-amber-900 font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
                <span>DID YOU KNOW?</span>
                <span>💡</span>
              </div>
              <h4 className="text-base font-bold text-amber-950 mb-2">
                Answers Come Only From Your Verified Sources
              </h4>
              <p className="text-xs text-amber-900/90 leading-relaxed font-normal">
                Unlike general AI tools that might guess or invent details, Falgoon AI Chatbot answers only from information in your uploaded documents and website. Every factual response shows numbered citations you can inspect with one click!
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-200/70 text-[11px] text-amber-800 font-semibold flex items-center justify-between">
              <span>Grounded &amp; Cited</span>
              <span>Zero Hallucinations</span>
            </div>
          </div>

          {/* Daily Operations Routine Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Admin Routine</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Interactive Operations Checklist
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Keep your assistant 100% accurate with our 3-minute morning routine: check Dashboard alerts, review unanswered questions, and clear handed-off conversations.
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={onOpenChecklist}
                className="w-full py-2 px-3 text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-xl border border-teal-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open Operations Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Troubleshooting Hub Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Problem Solver</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                Interactive Troubleshooting Wizard
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Encountering an issue? Easily diagnose why answers are missing, why a document failed to upload, or how to handle daily question limits.
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={onOpenTroubleshooting}
                className="w-full py-2 px-3 text-xs font-bold text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-xl border border-indigo-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Troubleshoot an Issue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* Share Guide Modal */}
      <ShareGuideModal 
        software={shareModalApp} 
        isOpen={!!shareModalApp} 
        onClose={() => setShareModalApp(null)} 
      />
    </div>
  );
};
