import React from 'react';
import { useDocs } from '../context/DocsContext';
import { 
  Maximize2, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Search, 
  Shield, 
  MessageSquare, 
  Bot, 
  User, 
  FileText,
  Upload,
  Globe,
  Sliders,
  Bell,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Lock,
  Smartphone,
  ChevronRight
} from 'lucide-react';

interface VisualScreenshotCardProps {
  screenshotId: string;
  caption?: string;
}

export const VisualScreenshotCard: React.FC<VisualScreenshotCardProps> = ({ 
  screenshotId, 
  caption 
}) => {
  const { mediaAssets, openScreenshot } = useDocs();
  const asset = mediaAssets.find((m) => m.id === screenshotId);

  // Render simulated UI representation of the actual screenshot
  const renderSimulatedScreen = () => {
    switch (screenshotId) {
      case '01-login':
        return (
          <div className="bg-slate-100 p-8 flex items-center justify-center min-h-[300px]">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-md border border-slate-200 p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4 text-emerald-800 font-bold">
                <Shield className="w-5 h-5 text-emerald-700" />
                <span>IAM Control Center</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 text-left">Sign in</h4>
              <p className="text-xs text-slate-500 text-left mb-4">Enter your credentials to access the console.</p>
              
              <div className="space-y-3 text-left">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Email</label>
                  <div className="p-2 border-2 border-emerald-600 rounded-lg text-xs bg-white text-slate-900 font-mono">
                    tenant_007@lait.co.uk
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-semibold text-slate-700">Password</label>
                    <span className="text-[11px] text-teal-600">Forgot password?</span>
                  </div>
                  <div className="p-2 border border-slate-300 rounded-lg text-xs bg-slate-50 text-slate-400">
                    ••••••••••••
                  </div>
                </div>
                <button className="w-full py-2 bg-teal-800 text-white font-bold rounded-lg text-xs hover:bg-teal-900">
                  Sign in
                </button>
                <div className="text-[11px] text-slate-400 text-center my-2">or continue with</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-1.5 border border-slate-200 rounded text-center text-slate-700 font-medium">Google</div>
                  <div className="p-1.5 border border-slate-200 rounded text-center text-slate-700 font-medium">Facebook</div>
                </div>
              </div>
            </div>
          </div>
        );

      case '02-dashboard':
      case '02-dashboard-full':
        return (
          <div className="bg-slate-50 p-4 font-sans text-xs">
            {/* Setup Progress */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-800">Get your chatbot ready</span>
                <span className="text-slate-400 text-[11px]">3 of 4 done</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 mb-3">
                <div className="bg-emerald-600 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-500 line-through">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1. Teach your chatbot</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 line-through">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2. Tell it about your organisation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 line-through">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3. Put it on your website</span>
                </div>
                <div className="flex items-center justify-between text-slate-900 font-semibold p-1.5 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-slate-400"></div>
                    <span>4. Choose who helps visitors</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Needs Attention Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-amber-900">
              <div className="font-bold flex items-center justify-between">
                <span>Needs attention</span>
                <span className="text-[10px] bg-amber-200 px-1.5 py-0.5 rounded">1 item</span>
              </div>
              <p className="text-[11px] text-amber-800 mt-1">
                ⚠️ 1 team with no one in it — Visitors aren't offered "Support" until you add someone to it.
              </p>
            </div>

            {/* 4 KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              <div className="bg-white p-3 border border-slate-200 rounded-xl">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Questions · 7d</span>
                <div className="text-2xl font-bold text-slate-900 mt-1">32</div>
                <span className="text-[10px] text-slate-400">None in previous 7 days</span>
              </div>
              <div className="bg-white p-3 border border-slate-200 rounded-xl">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Conversations · 7d</span>
                <div className="text-2xl font-bold text-slate-900 mt-1">14</div>
                <span className="text-[10px] text-slate-400">None in previous 7 days</span>
              </div>
              <div className="bg-white p-3 border border-slate-200 rounded-xl">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Passed to Team · 7d</span>
                <div className="text-2xl font-bold text-slate-900 mt-1">1</div>
                <span className="text-[10px] text-slate-400">0 ongoing right now</span>
              </div>
              <div className="bg-white p-3 border border-slate-200 rounded-xl">
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Helpful Answers · 30d</span>
                <div className="text-2xl font-bold text-emerald-700 mt-1">50%</div>
                <span className="text-[10px] text-slate-400">From 2 ratings</span>
              </div>
            </div>

            {/* Unanswered Section */}
            <div className="bg-white p-4 border border-slate-200 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900">Questions your chatbot couldn't answer</span>
                <span className="text-[11px] text-teal-700 font-semibold">Add to knowledge →</span>
              </div>
              <div className="divide-y divide-slate-100 text-xs">
                <div className="py-1.5 flex justify-between">
                  <span>"what is the price of python course?"</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold">Asked 8×</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>"What is the capital city of Australia?"</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-bold">Asked 2×</span>
                </div>
                <div className="py-1.5 flex justify-between">
                  <span>"Do you teach Python?"</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-[10px]">Asked 15h ago</span>
                </div>
              </div>
            </div>
          </div>
        );

      case '05-chatbot':
      case '05-chatbot-tab1-identity':
      case '05-chatbot-tab2-behaviour':
      case '05-chatbot-tab3-tone-style':
      case '05-chatbot-tab6-handoff-limits':
        return (
          <div className="bg-slate-100 p-4 font-sans text-xs">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Left Config Column */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-white p-4 border border-slate-200 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-slate-900">AI Chatbot Switch</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold rounded-full text-[11px]">ON</span>
                  </div>
                  <p className="text-slate-500 text-[11px]">When off, visitors go straight to a human team without consuming tokens.</p>
                </div>

                <div className="bg-white p-4 border border-slate-200 rounded-xl">
                  <div className="flex gap-2 border-b border-slate-100 pb-2 mb-3 font-semibold text-slate-600">
                    <span className="text-teal-700 border-b-2 border-teal-700 pb-1">Identity</span>
                    <span>Behaviour</span>
                    <span>Tone &amp; style</span>
                    <span>Company</span>
                    <span>Handoff &amp; limits</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="font-medium text-slate-700 block mb-1">Chatbot name</label>
                      <input 
                        readOnly 
                        value="Course Enquiries Assistant" 
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-700 block mb-1">Avatar selection</label>
                      <div className="flex gap-2">
                        <div className="p-2 border-2 border-teal-600 rounded bg-teal-50 text-teal-800 font-bold">🤖 Assistant</div>
                        <div className="p-2 border border-slate-200 rounded">🐻 Bear</div>
                        <div className="p-2 border border-slate-200 rounded">⭐ Star</div>
                        <div className="p-2 border border-slate-200 rounded">🍃 Leaf</div>
                      </div>
                    </div>
                    <div>
                      <label className="font-medium text-slate-700 block mb-1">Greeting message</label>
                      <input 
                        readOnly 
                        value="Hello! I'm the Course Enquiries Assistant. How can I help?" 
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded text-xs text-slate-800"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Live Preview Column */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between h-[360px]">
                <div className="border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-teal-700 text-white flex items-center justify-center text-xs">
                      🤖
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">Course Enquiries Assistant</div>
                      <div className="text-[10px] text-slate-400">Courses &amp; Enrolment Support</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 my-2 overflow-y-auto">
                  <div className="bg-slate-100 p-2.5 rounded-2xl rounded-tl-sm text-xs text-slate-800 max-w-[85%]">
                    Hello! I'm the Course Enquiries Assistant. How can I help?
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] px-2 py-1 bg-teal-50 border border-teal-200 text-teal-800 rounded-full">Admissions</span>
                    <span className="text-[10px] px-2 py-1 bg-teal-50 border border-teal-200 text-teal-800 rounded-full">Fees &amp; funding</span>
                    <span className="text-[10px] px-2 py-1 bg-teal-50 border border-teal-200 text-teal-800 rounded-full">Speak to a person</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <input readOnly placeholder="Ask a question..." className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs" />
                </div>
              </div>
            </div>
          </div>
        );

      case '07-kb-documents':
      case '07-kb-list':
      case '07-kb-add-from-web':
      case '07-kb-test-search':
        return (
          <div className="bg-slate-50 p-4 font-sans text-xs">
            <div className="bg-white border-2 border-dashed border-teal-400/80 rounded-xl p-5 text-center mb-4">
              <Upload className="w-7 h-7 text-teal-600 mx-auto mb-2" />
              <span className="font-bold text-slate-800 block">Drop files here, or browse</span>
              <span className="text-[11px] text-slate-400">PDF, Word, Excel, PowerPoint, HTML, CSV, Images (up to 50 MB each)</span>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-slate-900">Documents (25 of 25 ready)</span>
                <span className="text-slate-400 text-[11px]">Indexed for semantic search</span>
              </div>

              <div className="space-y-2">
                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">SQL Intermediate to Advanced | London Academy of IT</span>
                      <span className="text-[10px] text-slate-400">51.3 KB · Ready · 22 passages searchable</span>
                    </div>
                  </div>
                  <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">Python Programming for Beginners | London Academy of IT</span>
                      <span className="text-[10px] text-slate-400">50.1 KB · Ready · 23 passages searchable</span>
                    </div>
                  </div>
                  <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 block">Generative AI and LLMs with Python | London Academy of IT</span>
                      <span className="text-[10px] text-slate-400">37.6 KB · Ready · 17 passages searchable</span>
                    </div>
                  </div>
                  <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        );

      case '11-widget-sources':
      case '11-widget-open':
      case '11-widget-closed':
        return (
          <div className="bg-slate-200 p-6 flex justify-end min-h-[360px] relative overflow-hidden rounded-xl">
            {/* Background Simulated Webpage Content */}
            <div className="absolute inset-0 p-6 opacity-30 select-none pointer-events-none">
              <h2 className="text-xl font-bold mb-2">Build faster with Bootstrap 5.3</h2>
              <p className="text-xs mb-4">A modern starter layout featuring dark mode support and responsive grid structure.</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 bg-slate-400 rounded"></div>
                <div className="h-16 bg-slate-400 rounded"></div>
                <div className="h-16 bg-slate-400 rounded"></div>
              </div>
            </div>

            {/* Floating Widget (Real look like 11-widget-sources.png) */}
            <div className="w-80 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col justify-between relative z-10 text-xs">
              <div className="p-3 bg-teal-800 text-white rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">🤖</div>
                  <div>
                    <span className="font-bold block text-xs">Course Enquiries Assistant</span>
                    <span className="text-[10px] text-teal-200">Courses &amp; Enrolment Support</span>
                  </div>
                </div>
                <span className="text-white/80 cursor-pointer">✕</span>
              </div>

              <div className="p-3 space-y-2 overflow-y-auto max-h-60">
                <div className="p-2.5 bg-slate-100 rounded-xl text-slate-800">
                  <p className="mb-2">
                    The <strong>Python Programming for Beginners</strong> course has a regular price of <strong>£420</strong>, with batch prices from <strong>£360</strong>. Group discounts from <strong>£240/person</strong>, and 1-to-1 training is <strong>£420</strong> <sup className="text-teal-700 font-bold">[1]</sup>.
                  </p>
                  <p>
                    There is also a <strong>Python Intermediate to Advanced</strong> course with the same listed prices <sup className="text-teal-700 font-bold">[2]</sup>.
                  </p>
                </div>

                <div className="p-2 bg-teal-50/70 border border-teal-200/80 rounded-lg text-[11px] text-teal-900">
                  <div className="font-bold flex items-center justify-between mb-1">
                    <span>📚 2 web pages cited</span>
                    <span className="text-[10px]">▲</span>
                  </div>
                  <div className="space-y-1 text-[10px] text-slate-600">
                    <div className="p-1 bg-white rounded border border-slate-200 truncate">1. Python Programming for Beginners · londonacademyofit.co.uk</div>
                    <div className="p-1 bg-white rounded border border-slate-200 truncate">2. Python Intermediate to Advanced · londonacademyofit.co.uk</div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 border-t border-slate-100 flex items-center gap-2">
                <input readOnly placeholder="Type your question..." className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-full text-xs" />
                <div className="w-7 h-7 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold">↑</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-slate-900 text-slate-100 p-6 flex flex-col items-center justify-center min-h-[220px] rounded-xl text-center">
            <Shield className="w-8 h-8 text-teal-400 mb-2" />
            <h4 className="font-bold text-sm text-white mb-1">{asset?.title || screenshotId}</h4>
            <p className="text-xs text-slate-400 max-w-md">{asset?.description || 'System view for this operational procedure.'}</p>
          </div>
        );
    }
  };

  return (
    <figure className="my-6 rounded-2xl border border-slate-200/90 bg-white shadow-sm overflow-hidden group">
      {/* Window Frame Bar */}
      <div className="bg-slate-100/90 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
          <span className="font-mono text-[11px] text-slate-600 ml-2 font-medium">
            {asset?.figureLabel || 'Figure'}: {asset?.title || screenshotId}
          </span>
        </div>

        <button
          onClick={() => asset && openScreenshot(asset)}
          className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-200/80 rounded-md text-[11px] font-semibold text-slate-700 shadow-2xs transition-colors cursor-pointer"
          title="Inspect full-size image"
        >
          <Maximize2 className="w-3 h-3 text-slate-500" />
          <span>Enlarge screenshot</span>
        </button>
      </div>

      {/* Screen Render */}
      <div 
        onClick={() => asset && openScreenshot(asset)}
        className="cursor-pointer hover:opacity-95 transition-opacity relative"
      >
        {renderSimulatedScreen()}
      </div>

      {/* Caption */}
      <figcaption className="p-3.5 bg-slate-50/70 border-t border-slate-100 text-xs text-slate-600 font-medium flex items-center justify-between">
        <span>{caption || asset?.description}</span>
        <span className="text-[11px] text-teal-700 font-semibold cursor-pointer shrink-0 ml-3">Click to zoom</span>
      </figcaption>
    </figure>
  );
};
