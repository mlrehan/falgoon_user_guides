import React from 'react';
import { 
  BarChart3, 
  Bot, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  ChevronRight, 
  Globe, 
  Mail, 
  FileText, 
  Layers, 
  CheckCircle2, 
  HelpCircle, 
  Lock,
  Headphones,
  Database
} from 'lucide-react';
import { FalgoonLogo } from './FalgoonLogo';
import { useDocs } from '../context/DocsContext';
import { getSoftwareSlug } from '../utils/urlRouter';

interface FooterProps {
  currentTab: 'hub' | 'docs' | 'ops' | 'troubleshoot' | 'glossary' | 'gallery';
  setCurrentTab: (tab: 'hub' | 'docs' | 'ops' | 'troubleshoot' | 'glossary' | 'gallery') => void;
  onOpenAssistant?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onOpenAssistant }) => {
  const { softwareApps, selectSoftware, setIsAdminMode } = useDocs();

  const handleNavigate = (tab: FooterProps['currentTab'], softwareId?: string) => {
    setIsAdminMode(false);
    if (softwareId) {
      selectSoftware(softwareId);
    }
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 overflow-hidden font-sans no-print">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      {/* Top Lucrative Banner: Falgoon USA Enterprise Solutions & Power BI Consultation */}
      <div className="relative border-b border-slate-800/90 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Data Analytics • Business Intelligence • AI Assistant Consultancy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Falgoon USA LLC — Enterprise Intelligence &amp; User Portals
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                Empowering businesses with production-ready Power BI reporting, interactive executive dashboards, 
                and verified AI assistants tailored for operational excellence.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.falgoon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg shadow-teal-900/40 transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Visit Main Website (falgoon.com)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenAssistant}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer"
              >
                <Bot className="w-4 h-4 text-teal-400" />
                <span>Ask AI Knowledge Base</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Lucrative Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Identity (Normal/Dark Logo) */}
          <div className="lg:col-span-2 space-y-4">
            <FalgoonLogo variant="dark" size="lg" />
            
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              The official centralized documentation, video walkthroughs, and knowledge center for Falgoon software ecosystems. 
              Designed specifically so non-technical team members, parents, and administrative staff can succeed effortlessly.
            </p>

            {/* Trust & Enterprise Badges */}
            <div className="grid grid-cols-2 gap-2 pt-2 pr-6">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-medium">SOC-2 Type II Standards</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">99.99% Portal Uptime</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-300">
                <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium">End-to-End Privacy</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-300">
                <Database className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium">Direct Guide Slugs</span>
              </div>
            </div>

            {/* Direct Link to Corporate Portal */}
            <div className="pt-1">
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block mb-1">
                Corporate Headquarters
              </span>
              <p className="text-xs text-slate-300 font-mono">
                Falgoon USA LLC • United States
              </p>
              <a 
                href="https://www.falgoon.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-teal-400 hover:text-teal-300 font-semibold mt-1 transition-colors"
              >
                <span>https://www.falgoon.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Software Applications & Direct Slugs */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              <span>Software Apps</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {softwareApps.map((app) => {
                const slug = getSoftwareSlug(app);
                return (
                  <li key={app.id}>
                    <button
                      onClick={() => handleNavigate('docs', app.id)}
                      className="group flex flex-col text-left hover:text-white transition-colors cursor-pointer w-full"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-300 group-hover:text-teal-300">
                          {app.shortName}
                        </span>
                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">
                        /?app={slug}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Documentation Sections & Tools */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Documentation Hub</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNavigate('hub')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Software Cards &amp; Grid</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('ops')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Daily Operations Checklist</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('troubleshoot')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Emergency Fixes &amp; FAQ</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('glossary')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Early Years System Glossary</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('gallery')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Visual Screenshots Archive (38)</span>
                </button>
              </li>
              <li className="pt-1 border-t border-slate-800">
                <button
                  onClick={() => {
                    setIsAdminMode(true);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Admin CMS &amp; Card Manager</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Falgoon USA Services (from falgoon.com) */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Falgoon Services</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.falgoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-300 group-hover:text-teal-300 flex items-center gap-1">
                    Power BI Dashboards
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Interactive SMB metrics &amp; KPIs
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.falgoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-300 group-hover:text-teal-300 flex items-center gap-1">
                    Executive Reporting
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Data-driven leadership summaries
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.falgoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-300 group-hover:text-teal-300 flex items-center gap-1">
                    Custom AI Assistants
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    Automated parent tour bookings &amp; Q&amp;A
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.falgoon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block hover:text-white transition-colors"
                >
                  <span className="font-medium text-slate-300 group-hover:text-teal-300 flex items-center gap-1">
                    Analytics Consulting
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    SQL, Python &amp; vector intelligence
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Knowledge Base Live AI Card */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-teal-950/30 to-slate-900 border border-teal-800/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Dynamic Site-Wide AI Knowledge Base</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Fully Interactive
                </span>
              </h5>
              <p className="text-xs text-slate-400">
                Every user guide, step-by-step procedure, and admin modification updates the AI assistant instantly.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAssistant}
            className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer shrink-0"
          >
            Launch Assistant
          </button>
        </div>

        {/* Bottom Bar with Required Copyright & Links */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-semibold text-slate-300">
              Copyright © 2026 Falgoon USA LLC. All rights reserved.
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-400">
              Data Analytics, BI &amp; AI Assistant Consultancy
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a 
              href="https://www.falgoon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              falgoon.com
            </a>
            <span className="text-slate-700">•</span>
            <button 
              onClick={() => handleNavigate('docs')} 
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              User Guidelines
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={() => handleNavigate('ops')} 
              className="hover:text-teal-400 transition-colors cursor-pointer"
            >
              Operations
            </button>
            <span className="text-slate-700">•</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
