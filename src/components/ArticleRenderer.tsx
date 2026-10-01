import React, { useState } from 'react';
import { Article, ArticleContentBlock, Callout } from '../types/docs';
import { useDocs } from '../context/DocsContext';
import { VisualScreenshotCard } from './VisualScreenshotCard';
import { ShareGuideModal } from './ShareGuideModal';
import { getGuideShareUrls, copyToClipboard } from '../utils/urlRouter';
import { 
  CheckCircle2, 
  Clock, 
  Shield, 
  Printer, 
  Share2, 
  ThumbsUp, 
  ThumbsDown, 
  Info, 
  AlertTriangle, 
  Lightbulb, 
  ShieldCheck, 
  AlertOctagon,
  Play,
  Video,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Link2
} from 'lucide-react';

interface ArticleRendererProps {
  article: Article;
  onNavigateArticle: (articleId: string) => void;
}

export const ArticleRenderer: React.FC<ArticleRendererProps> = ({ 
  article, 
  onNavigateArticle 
}) => {
  const { 
    softwareApps, 
    categories, 
    articles, 
    completedSteps, 
    toggleStepComplete,
    rateArticle 
  } = useDocs();

  const [copiedLink, setCopiedLink] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [rated, setRated] = useState<'helpful' | 'unhelpful' | null>(null);

  const software = softwareApps.find((s) => s.id === article.softwareId);
  const category = categories.find((c) => c.id === article.categoryId);

  const handleCopyLink = async () => {
    if (software) {
      const { primaryUrl } = getGuideShareUrls(software, article);
      const ok = await copyToClipboard(primaryUrl);
      if (ok) {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
        return;
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleRate = (helpful: boolean) => {
    if (!rated) {
      rateArticle(article.id, helpful);
      setRated(helpful ? 'helpful' : 'unhelpful');
    }
  };

  const renderCallout = (callout: Callout) => {
    switch (callout.type) {
      case 'warning':
        return (
          <div className="my-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex gap-3.5 shadow-2xs">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-amber-900 mb-1">{callout.title}</h5>
              <div className="text-xs text-amber-900/90 leading-relaxed font-normal">
                {Array.isArray(callout.content) ? (
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    {callout.content.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                ) : (
                  <p>{callout.content}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'tip':
        return (
          <div className="my-6 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 text-emerald-950 flex gap-3.5 shadow-2xs">
            <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-emerald-900 mb-1">{callout.title}</h5>
              <div className="text-xs text-emerald-900/90 leading-relaxed font-normal">
                {Array.isArray(callout.content) ? (
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    {callout.content.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                ) : (
                  <p>{callout.content}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'best':
        return (
          <div className="my-6 p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/90 text-indigo-950 flex gap-3.5 shadow-2xs">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-indigo-900 mb-1">{callout.title}</h5>
              <div className="text-xs text-indigo-900/90 leading-relaxed font-normal">
                {Array.isArray(callout.content) ? (
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    {callout.content.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                ) : (
                  <p>{callout.content}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'danger':
        return (
          <div className="my-6 p-4 rounded-2xl bg-rose-50/80 border border-rose-200/90 text-rose-950 flex gap-3.5 shadow-2xs">
            <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-rose-900 mb-1">{callout.title}</h5>
              <div className="text-xs text-rose-900/90 leading-relaxed font-normal">
                {Array.isArray(callout.content) ? (
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    {callout.content.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                ) : (
                  <p>{callout.content}</p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="my-6 p-4 rounded-2xl bg-teal-50/80 border border-teal-200/90 text-teal-950 flex gap-3.5 shadow-2xs">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-sm text-teal-900 mb-1">{callout.title}</h5>
              <div className="text-xs text-teal-900/90 leading-relaxed font-normal">
                {Array.isArray(callout.content) ? (
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    {callout.content.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                ) : (
                  <p>{callout.content}</p>
                )}
              </div>
            </div>
          </div>
        );
    }
  };

  const renderVideoBlock = (block: ArticleContentBlock) => {
    if (!block.videoUrl) return null;
    const url = block.videoUrl.trim();

    // Support YouTube, Loom, Vimeo, and direct MP4/WebM
    let embedUrl = '';
    const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w-]+)/i);
    const loomMatch = url.match(/loom\.com\/(?:share|embed)\/([\w-]+)/i);
    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/i);

    if (ytMatch && ytMatch[1]) {
      embedUrl = `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`;
    } else if (loomMatch && loomMatch[1]) {
      embedUrl = `https://www.loom.com/embed/${loomMatch[1]}`;
    } else if (vimeoMatch && vimeoMatch[1]) {
      embedUrl = `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    return (
      <figure key={block.id} className="my-8 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-rose-400" />
            <span className="font-semibold text-white">
              {block.videoTitle || 'Video Walkthrough & Tutorial'}
            </span>
          </div>
          <span className="text-[10px] text-teal-300 bg-teal-900/80 border border-teal-500/30 px-2 py-0.5 rounded font-mono font-bold">
            Interactive Video
          </span>
        </div>

        <div className="aspect-video w-full bg-black flex items-center justify-center">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={block.videoTitle || 'Video guide'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <video
              src={url}
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>

        {(block.caption || block.lead) && (
          <figcaption className="p-3.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 font-medium">
            {block.caption || block.lead}
          </figcaption>
        )}
      </figure>
    );
  };

  const renderBlock = (block: ArticleContentBlock) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <div key={block.id} className="my-6">
            {block.title && (
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {block.title}
              </h3>
            )}
            {block.lead && (
              <p className="text-base text-slate-700 font-medium leading-relaxed mb-3">
                {block.lead}
              </p>
            )}
            {block.body && (
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line font-normal">
                {block.body}
              </p>
            )}
          </div>
        );

      case 'steps':
        return (
          <div key={block.id} className="my-8">
            {block.title && (
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {block.title}
              </h3>
            )}
            <div className="space-y-4">
              {block.steps?.map((step, idx) => {
                const stepKey = `${article.id}-step-${idx}`;
                const isCompleted = !!completedSteps[stepKey];

                return (
                  <div 
                    key={idx}
                    className={`p-4 rounded-2xl border transition-all ${
                      isCompleted 
                        ? 'bg-emerald-50/40 border-emerald-200/90' 
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 text-white'
                        }`}>
                          {step.stepNumber}
                        </span>
                        <div>
                          <h4 className={`text-sm font-bold tracking-tight ${
                            isCompleted ? 'text-emerald-950 line-through' : 'text-slate-900'
                          }`}>
                            {step.title}
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${
                            isCompleted ? 'text-emerald-900/80' : 'text-slate-600'
                          }`}>
                            {step.instruction}
                          </p>
                        </div>
                      </div>

                      {/* Interactive Step Checkbox */}
                      <button
                        onClick={() => toggleStepComplete(article.id, idx)}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer shrink-0 flex items-center gap-1 ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                        }`}
                        title="Click to check off step"
                      >
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-700' : 'text-slate-400'}`} />
                        <span>{isCompleted ? 'Done' : 'Mark done'}</span>
                      </button>
                    </div>

                    {(step.screenshotId || step.imageUrl) && (
                      <div className="mt-4">
                        <VisualScreenshotCard 
                          screenshotId={step.screenshotId} 
                          imageUrl={step.imageUrl}
                          caption={step.caption} 
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'screenshot':
      case 'image':
        return (
          <div key={block.id} className="my-6">
            {(block.screenshotId || block.imageUrl) && (
              <VisualScreenshotCard 
                screenshotId={block.screenshotId} 
                imageUrl={block.imageUrl}
                caption={block.caption} 
              />
            )}
          </div>
        );

      case 'video':
        return renderVideoBlock(block);

      case 'callout':
        return block.callout ? (
          <div key={block.id}>{renderCallout(block.callout)}</div>
        ) : null;

      case 'cards':
        return (
          <div key={block.id} className="my-8">
            {block.title && (
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {block.title}
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {block.cards?.map((card, cIdx) => (
                <div key={cIdx} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-2xs">
                  <div className="font-bold text-sm text-slate-900 mb-1">{card.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'table':
        return (
          <div key={block.id} className="my-8">
            {block.title && (
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {block.title}
              </h3>
            )}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs bg-white">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    {block.table?.headers.map((h, i) => (
                      <th key={i} className="px-4 py-3">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {block.table?.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-3 leading-relaxed">
                          {typeof cell === 'string' ? cell : cell.text}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'worked-example':
        return (
          <div key={block.id} className="my-8 p-5 bg-teal-50/60 border border-teal-200/90 rounded-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block mb-1">
              🌟 Worked Real-World Example
            </span>
            <div className="font-bold text-sm text-slate-900 mb-2">
              Visitor Query: <span className="text-teal-800">"{block.workedExample?.question}"</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed mb-3">
              <strong>Expected Response:</strong> {block.workedExample?.expectedBehavior}
            </p>
            {block.workedExample?.citations && (
              <div className="text-[11px] text-slate-600">
                <span className="font-semibold text-slate-800">Verified Sources Cited: </span>
                {block.workedExample.citations.join(' · ')}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
        <span className="text-slate-400">{software?.name || 'Software'}</span>
        <span>/</span>
        <span className="text-slate-400">{category?.name || 'Category'}</span>
        <span>/</span>
        <span className="text-slate-700 font-semibold">{article.title}</span>
      </nav>

      {/* Article Title & Metadata Banner */}
      <header className="pb-6 border-b border-slate-200 mb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
          <span className={`px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px] ${
            article.difficulty === 'Beginner' 
              ? 'bg-emerald-100 text-emerald-800' 
              : article.difficulty === 'Intermediate' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-purple-100 text-purple-800'
          }`}>
            {article.difficulty}
          </span>
          <span className="flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.estimatedMinutes} min read</span>
          </span>
          <span>·</span>
          <span>Version {article.versionTag}</span>
          <span>·</span>
          <span>Updated {article.lastUpdated}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
          {article.summary}
        </p>

        {article.requiredPermissions && article.requiredPermissions.length > 0 && (
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-700">Required Permissions:</span>
            <div className="flex flex-wrap gap-1">
              {article.requiredPermissions.map((perm, pIdx) => (
                <code key={pIdx} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] border border-slate-200">
                  {perm}
                </code>
              ))}
            </div>
          </div>
        )}

        {/* Action Bar (Print, Share, Copy Link) */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Print user guide or save to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Copy direct shareable link for this specific article"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedLink ? 'Copied Article Link!' : 'Copy Link'}</span>
            </button>
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 border border-teal-200 text-xs font-bold text-teal-800 transition-colors cursor-pointer"
              title="Email or share direct link to this guide"
            >
              <Share2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Share Article</span>
            </button>
          </div>

          <a 
            href={software?.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-teal-700 font-bold hover:underline"
          >
            <span>Open {software?.shortName} App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Blocks */}
      <div className="article-body">
        {article.blocks.map((block) => renderBlock(block))}
      </div>

      {/* Helpful Rating Widget */}
      <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center no-print">
        <h4 className="text-sm font-bold text-slate-900 mb-1">
          Was this guide helpful?
        </h4>
        <p className="text-xs text-slate-500 mb-4">
          Your feedback helps us make instructions easier for everyone.
        </p>

        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => handleRate(true)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              rated === 'helpful'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border-slate-200'
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            <span>Yes, helpful ({article.helpfulCount || 1})</span>
          </button>

          <button
            onClick={() => handleRate(false)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              rated === 'unhelpful'
                ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-rose-50 hover:text-rose-800 border-slate-200'
            }`}
          >
            <ThumbsDown className="w-4 h-4" />
            <span>Could be improved</span>
          </button>
        </div>

        {rated && (
          <p className="text-xs font-semibold text-emerald-700 mt-3 animate-fade-in">
            Thank you for helping us improve our guides!
          </p>
        )}
      </div>

      {/* Related Guides Footer */}
      <footer className="mt-12 pt-8 border-t border-slate-200 no-print">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
          Related Walkthroughs in {software?.shortName}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {articles
            .filter((a) => a.softwareId === article.softwareId && a.id !== article.id)
            .slice(0, 2)
            .map((rel) => (
              <button
                key={rel.id}
                onClick={() => onNavigateArticle(rel.id)}
                className="p-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-left transition-colors cursor-pointer group flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors block">
                    {rel.title}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    {rel.summary}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 shrink-0 ml-2" />
              </button>
            ))}
        </div>
      </footer>

      {/* Share Modal */}
      <ShareGuideModal
        software={software || null}
        article={article}
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </article>
  );
};
