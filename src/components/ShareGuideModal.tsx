import React, { useState } from 'react';
import { SoftwareApp, Article } from '../types/docs';
import { 
  getGuideShareUrls, 
  copyToClipboard, 
  createEmailShareLink, 
  getSoftwareSlug 
} from '../utils/urlRouter';
import { 
  X, 
  Link2, 
  Copy, 
  Check, 
  Mail, 
  Globe, 
  ExternalLink, 
  Code2, 
  BookOpen,
  Share2,
  Sparkles
} from 'lucide-react';

interface ShareGuideModalProps {
  software: SoftwareApp | null;
  article?: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareGuideModal: React.FC<ShareGuideModalProps> = ({
  software,
  article,
  isOpen,
  onClose,
}) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!isOpen || !software) return null;

  const { queryUrl, hashUrl, relativeSlug, primaryUrl } = getGuideShareUrls(software, article);
  const emailLink = createEmailShareLink(software, article?.title, primaryUrl);

  const handleCopy = async (text: string, type: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  // HTML snippet for embedding on other websites / intranets
  const htmlSnippet = `<a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;background:#0d9488;color:#ffffff;padding:8px 14px;border-radius:8px;text-decoration:none;font-family:sans-serif;font-weight:600;font-size:13px;">
  <span>📖 View ${article ? article.title : `${software.shortName} User Guide`}</span>
</a>`;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6 md:p-12 flex justify-center items-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-slate-900 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-200 block">
                  Dedicated Software Link
                </span>
                <h3 className="text-lg font-bold text-white">
                  Share {article ? article.title : `${software.shortName} Guide`}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-teal-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-teal-100/90 mt-3 leading-relaxed">
            This dedicated link will take any user, employee, or parent directly to this software's user guide from other websites, emails, or messages.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Main Direct Link */}
          <div>
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-teal-600" />
                Dedicated Guide Link (Slug: <code className="text-teal-700 font-mono font-bold lowercase">{getSoftwareSlug(software)}</code>)
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Direct Landing
              </span>
            </label>

            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-mono truncate select-all">
                {primaryUrl}
              </div>

              <button
                onClick={() => handleCopy(primaryUrl, 'primary')}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs shrink-0"
              >
                {copiedType === 'primary' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Anyone opening this link will immediately see this guide without having to search or navigate the homepage.
            </p>
          </div>

          {/* Quick Actions Grid: Email & Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Email Link */}
            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 hover:border-teal-400 bg-white hover:bg-teal-50/50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 group-hover:text-teal-800">
                  Email to User or Colleague
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  Opens email with instructions
                </div>
              </div>
            </a>

            {/* Test Link in New Tab */}
            <a
              href={primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 transition-all text-left group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 group-hover:text-slate-800">
                  Test Direct Link
                </div>
                <div className="text-[11px] text-slate-500 truncate">
                  Verify landing experience
                </div>
              </div>
            </a>
          </div>

          {/* External Website Integration Snippet */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-slate-500" />
                Add Link to Your External Portal or Website
              </span>
              <button
                onClick={() => handleCopy(htmlSnippet, 'html')}
                className="text-[11px] font-semibold text-teal-700 hover:text-teal-800"
              >
                {copiedType === 'html' ? 'Snippet Copied!' : 'Copy HTML'}
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-300 p-3 rounded-xl text-[11px] font-mono overflow-x-auto border border-slate-800 leading-relaxed">
              {htmlSnippet}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Slug format: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700 font-mono font-semibold">{relativeSlug}</code></span>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 hover:text-slate-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
