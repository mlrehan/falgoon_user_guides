import React, { useState } from 'react';
import { useDocs } from '../context/DocsContext';
import { SoftwareApp, Category, Article, ArticleContentBlock } from '../types/docs';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Save, 
  Layers, 
  FileText, 
  Image, 
  Download, 
  Upload, 
  RotateCcw, 
  Check, 
  X, 
  ExternalLink,
  Shield,
  Eye,
  Sliders
} from 'lucide-react';

export const AdminPortal: React.FC = () => {
  const { 
    softwareApps, 
    categories, 
    articles, 
    mediaAssets,
    addSoftwareApp, 
    updateSoftwareApp, 
    deleteSoftwareApp,
    addCategory,
    addArticle,
    updateArticle,
    deleteArticle,
    resetToDefaults,
    setIsAdminMode
  } = useDocs();

  const [activeTab, setActiveTab] = useState<'apps' | 'articles' | 'media' | 'settings'>('apps');

  // New App Form State
  const [showNewAppModal, setShowNewAppModal] = useState(false);
  const [newAppName, setNewAppName] = useState('');
  const [newAppShort, setNewAppShort] = useState('');
  const [newAppUrl, setNewAppUrl] = useState('https://');
  const [newAppCategory, setNewAppCategory] = useState('Business Application');
  const [newAppAudience, setNewAppAudience] = useState('Staff & Users');
  const [newAppDesc, setNewAppDesc] = useState('');
  const [newAppTheme, setNewAppTheme] = useState<'teal' | 'orange' | 'violet' | 'sky' | 'emerald' | 'amber' | 'rose'>('teal');
  const [newAppIcon, setNewAppIcon] = useState('Bot');

  // New Article Form State
  const [showNewArticleModal, setShowNewArticleModal] = useState(false);
  const [selectedSoftwareForArticle, setSelectedSoftwareForArticle] = useState(softwareApps[0]?.id || '');
  const [selectedCategoryForArticle, setSelectedCategoryForArticle] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleSummary, setArticleSummary] = useState('');
  const [articleDifficulty, setArticleDifficulty] = useState<'Beginner' | 'Intermediate' | 'Admin'>('Beginner');
  const [articleMinutes, setArticleMinutes] = useState(5);
  const [articleLead, setArticleLead] = useState('');
  const [articleStep1Title, setArticleStep1Title] = useState('');
  const [articleStep1Text, setArticleStep1Text] = useState('');
  const [articleStep2Title, setArticleStep2Title] = useState('');
  const [articleStep2Text, setArticleStep2Text] = useState('');
  const [articleVersion, setArticleVersion] = useState('v1.0');

  // JSON Import notification
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleCreateApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAppName || !newAppUrl) return;

    const newApp: SoftwareApp = {
      id: `app-${Date.now()}`,
      name: newAppName,
      shortName: newAppShort || newAppName.slice(0, 15),
      portalUrl: newAppUrl,
      categoryTag: newAppCategory,
      audience: newAppAudience,
      description: newAppDesc || 'User guidelines and step-by-step instructions for this application.',
      themeColor: newAppTheme,
      icon: newAppIcon,
      version: 'v1.0',
      cardOrder: softwareApps.length + 1,
      popularGuides: [],
      status: 'Active'
    };

    addSoftwareApp(newApp);

    // Create a default category and welcome article for this software
    const defaultCat: Category = {
      id: `cat-${Date.now()}`,
      softwareId: newApp.id,
      name: 'Getting Started',
      order: 1,
      iconName: 'Compass'
    };
    addCategory(defaultCat);

    const welcomeArt: Article = {
      id: `art-${Date.now()}`,
      softwareId: newApp.id,
      categoryId: defaultCat.id,
      slug: 'welcome',
      title: `Welcome to ${newApp.name}`,
      summary: `Getting started guide and overview for ${newApp.name}.`,
      difficulty: 'Beginner',
      estimatedMinutes: 3,
      versionTag: 'v1.0',
      status: 'published',
      lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      blocks: [
        {
          id: 'b-1',
          type: 'paragraph',
          title: 'Introduction',
          lead: `Welcome to the official user guide for ${newApp.name}.`,
          body: `This application is available at ${newApp.portalUrl}. Follow the step-by-step instructions below to get started.`
        },
        {
          id: 'b-2',
          type: 'steps',
          title: 'Initial Setup',
          steps: [
            { stepNumber: 1, title: 'Open the portal', instruction: `Navigate to ${newApp.portalUrl} in your web browser.` },
            { stepNumber: 2, title: 'Sign in', instruction: 'Enter your credentials or contact your administrator for an invitation.' },
            { stepNumber: 3, title: 'Explore key features', instruction: 'Review the menu options and start utilizing the tools.' }
          ]
        }
      ]
    };
    addArticle(welcomeArt);

    setShowNewAppModal(false);
    setNewAppName('');
    setNewAppShort('');
    setNewAppUrl('https://');
    setNewAppDesc('');
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleTitle || !selectedSoftwareForArticle) return;

    let targetCatId = selectedCategoryForArticle;
    if (!targetCatId) {
      const existing = categories.find((c) => c.softwareId === selectedSoftwareForArticle);
      if (existing) {
        targetCatId = existing.id;
      } else {
        const newCat: Category = {
          id: `cat-${Date.now()}`,
          softwareId: selectedSoftwareForArticle,
          name: 'General Guides',
          order: 1
        };
        addCategory(newCat);
        targetCatId = newCat.id;
      }
    }

    const blocks: ArticleContentBlock[] = [
      {
        id: 'blk-lead',
        type: 'paragraph',
        title: 'Overview',
        lead: articleLead || articleSummary,
        body: 'Follow the verified step-by-step instructions below.'
      }
    ];

    if (articleStep1Title) {
      blocks.push({
        id: 'blk-steps',
        type: 'steps',
        title: 'Step-by-Step Procedure',
        steps: [
          {
            stepNumber: 1,
            title: articleStep1Title,
            instruction: articleStep1Text || 'Complete this task step as instructed.'
          },
          ...(articleStep2Title ? [{
            stepNumber: 2,
            title: articleStep2Title,
            instruction: articleStep2Text || 'Confirm and finalize the operation.'
          }] : [])
        ]
      });
    }

    const newArticle: Article = {
      id: `art-${Date.now()}`,
      softwareId: selectedSoftwareForArticle,
      categoryId: targetCatId,
      slug: articleTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: articleTitle,
      summary: articleSummary || 'Step-by-step procedure guide.',
      difficulty: articleDifficulty,
      estimatedMinutes: Number(articleMinutes) || 5,
      versionTag: articleVersion || 'v1.0',
      status: 'published',
      lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      blocks
    };

    addArticle(newArticle);
    setShowNewArticleModal(false);
    setArticleTitle('');
    setArticleSummary('');
    setArticleLead('');
    setArticleStep1Title('');
    setArticleStep1Text('');
    setArticleStep2Title('');
    setArticleStep2Text('');
  };

  const handleExportJSON = () => {
    const data = {
      softwareApps,
      categories,
      articles,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `falgoon_docs_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (json.softwareApps && json.articles) {
          localStorage.setItem('falgoon_software_apps', JSON.stringify(json.softwareApps));
          if (json.categories) localStorage.setItem('falgoon_categories', JSON.stringify(json.categories));
          localStorage.setItem('falgoon_articles', JSON.stringify(json.articles));
          setImportStatus('Backup successfully imported! Refreshing...');
          setTimeout(() => window.location.reload(), 1500);
        } else {
          setImportStatus('Invalid backup file format.');
        }
      } catch (err) {
        setImportStatus('Error parsing JSON backup file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Shield className="w-4 h-4 text-amber-600" />
              <span>Admin Management Dashboard (CMS)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Documentation CMS &amp; Card Manager
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dynamically add new software cards, create articles, attach screenshots, and control published versions without modifying source code.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAdminMode(false)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
            >
              Exit CMS &amp; View Portal
            </button>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase text-slate-400">Software Portals</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">{softwareApps.length}</div>
            <span className="text-[11px] text-emerald-600 font-medium">All active on Hub</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase text-slate-400">Total Articles</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">{articles.length}</div>
            <span className="text-[11px] text-teal-600 font-medium">Fully indexed</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase text-slate-400">Categories</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">{categories.length}</div>
            <span className="text-[11px] text-slate-500 font-medium">Hierarchical</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] font-bold uppercase text-slate-400">System Screenshots</span>
            <div className="text-2xl font-extrabold text-slate-900 mt-1">{mediaAssets.length}</div>
            <span className="text-[11px] text-indigo-600 font-medium">High-resolution</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white rounded-t-2xl px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('apps')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'apps'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Software Cards ({softwareApps.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'articles'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Articles &amp; Guides ({articles.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'media'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Image className="w-4 h-4" />
            <span>Screenshot Assets ({mediaAssets.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'settings'
                ? 'border-amber-600 text-amber-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Backup &amp; Versions</span>
          </button>
        </div>

        {/* Tab 1: Software Cards Manager */}
        {activeTab === 'apps' && (
          <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Manage Software Cards</h3>
                <p className="text-xs text-slate-500">Every card here is instantly reflected on the user-facing Software Hub.</p>
              </div>
              <button
                onClick={() => setShowNewAppModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Software Card</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareApps.map((app) => (
                <div key={app.id} className="p-4 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-300 transition-colors">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {app.categoryTag} · {app.audience}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{app.name}</h4>
                        <span className="text-xs font-mono text-teal-700 truncate block">{app.portalUrl}</span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {app.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-2">{app.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Theme: {app.themeColor}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete "${app.name}" and its guides?`)) {
                          deleteSoftwareApp(app.id);
                        }
                      }}
                      className="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Articles & Guides Manager */}
        {activeTab === 'articles' && (
          <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Manage Articles &amp; Walkthroughs</h3>
                <p className="text-xs text-slate-500">Edit existing documentation or add new step-by-step guides.</p>
              </div>
              <button
                onClick={() => setShowNewArticleModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Article</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-y border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="px-4 py-3">Article Title</th>
                    <th className="px-4 py-3">Software</th>
                    <th className="px-4 py-3">Difficulty</th>
                    <th className="px-4 py-3">Read Time</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {articles.map((art) => {
                    const soft = softwareApps.find((s) => s.id === art.softwareId);
                    return (
                      <tr key={art.id} className="hover:bg-slate-50/60">
                        <td className="px-4 py-3 font-semibold text-slate-900">{art.title}</td>
                        <td className="px-4 py-3 text-slate-500">{soft?.shortName || art.softwareId}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                            {art.difficulty}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono">{art.estimatedMinutes} min</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            {art.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={() => {
                              if (confirm(`Delete article "${art.title}"?`)) {
                                deleteArticle(art.id);
                              }
                            }}
                            className="text-rose-600 hover:text-rose-800 font-semibold cursor-pointer p-1"
                            title="Delete article"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Screenshot Media Assets */}
        {activeTab === 'media' && (
          <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Screenshot Assets Catalogue ({mediaAssets.length})</h3>
                <p className="text-xs text-slate-500">All registered system screenshots attached to chapters and step walkthroughs.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mediaAssets.map((asset) => (
                <div key={asset.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-teal-800 mb-1">
                      <span>{asset.figureLabel}</span>
                      <span className="text-slate-400 font-mono">{asset.id}</span>
                    </div>
                    <div className="font-bold text-xs text-slate-900 mb-1">{asset.title}</div>
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">{asset.description}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Category: {asset.category}</span>
                    <span className="font-medium text-emerald-600">Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Backup, Version Control & Reset */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Backup &amp; Version Export</h3>
              <p className="text-xs text-slate-500">Download a full JSON backup of all software cards, categories, and articles.</p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={handleExportJSON}
                className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export Full Backup (JSON)</span>
              </button>

              <label className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 transition-colors cursor-pointer">
                <Upload className="w-4 h-4" />
                <span>Import Backup (JSON)</span>
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>
            </div>

            {importStatus && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
                {importStatus}
              </div>
            )}

            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold text-rose-800 mb-1">Danger Zone: Reset Defaults</h4>
              <p className="text-xs text-slate-500 mb-3">
                Reset all software cards and documentation back to the initial official release. Any custom additions will be cleared.
              </p>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all documentation data to official defaults?')) {
                    resetToDefaults();
                    alert('Documentation data reset to official defaults.');
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs rounded-lg border border-rose-200 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Official Initial Content</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal: Add New Software Card */}
        {showNewAppModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="text-lg font-bold text-slate-900">Add New Software Application</h3>
                <button onClick={() => setShowNewAppModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateApp} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Full Software Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Falgoon Staff Attendance Manager"
                    value={newAppName}
                    onChange={(e) => setNewAppName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Short Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Staff Portal"
                      value={newAppShort}
                      onChange={(e) => setNewAppShort(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Audience</label>
                    <input
                      type="text"
                      placeholder="e.g. Nursery Nurses & Staff"
                      value={newAppAudience}
                      onChange={(e) => setNewAppAudience(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Portal URL *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://staff.falgoon.co.uk"
                    value={newAppUrl}
                    onChange={(e) => setNewAppUrl(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600 font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Short Plain-Language Summary</label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of what this software helps non-technical users accomplish..."
                    value={newAppDesc}
                    onChange={(e) => setNewAppDesc(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Theme Color</label>
                    <select
                      value={newAppTheme}
                      onChange={(e) => setNewAppTheme(e.target.value as any)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600 cursor-pointer"
                    >
                      <option value="teal">Teal (Emerald Green)</option>
                      <option value="orange">Orange (Warm Sunset)</option>
                      <option value="violet">Violet (Royal Indigo)</option>
                      <option value="sky">Sky (Ocean Blue)</option>
                      <option value="rose">Rose (Crimson)</option>
                      <option value="emerald">Emerald</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Card Icon</label>
                    <select
                      value={newAppIcon}
                      onChange={(e) => setNewAppIcon(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600 cursor-pointer"
                    >
                      <option value="Bot">Bot / Assistant</option>
                      <option value="Smile">Smile / Parent</option>
                      <option value="BarChart3">Bar Chart / Executive</option>
                      <option value="Globe">Globe / Website</option>
                      <option value="BookOpen">Book / Guide</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNewAppModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold shadow-xs cursor-pointer"
                  >
                    Save &amp; Add Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Create New Article */}
        {showNewArticleModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <h3 className="text-lg font-bold text-slate-900">Create New User Guide Article</h3>
                <button onClick={() => setShowNewArticleModal(false)} className="text-slate-400 hover:text-slate-600 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateArticle} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Target Software Portal *</label>
                  <select
                    value={selectedSoftwareForArticle}
                    onChange={(e) => setSelectedSoftwareForArticle(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600 cursor-pointer"
                  >
                    {softwareApps.map((app) => (
                      <option key={app.id} value={app.id}>
                        {app.name} ({app.shortName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Article Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. How to Approve Staff Time-Off Requests"
                    value={articleTitle}
                    onChange={(e) => setArticleTitle(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Difficulty</label>
                    <select
                      value={articleDifficulty}
                      onChange={(e) => setArticleDifficulty(e.target.value as any)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600 cursor-pointer"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Minutes Read</label>
                    <input
                      type="number"
                      min={1}
                      max={60}
                      value={articleMinutes}
                      onChange={(e) => setArticleMinutes(Number(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Version</label>
                    <input
                      type="text"
                      value={articleVersion}
                      onChange={(e) => setArticleVersion(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Plain-Language Summary</label>
                  <textarea
                    rows={2}
                    placeholder="Clear 1-2 sentence explanation of what problem this guide solves..."
                    value={articleSummary}
                    onChange={(e) => setArticleSummary(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <span className="font-bold text-slate-800 block text-xs">Step 1 Instructions</span>
                  <input
                    type="text"
                    placeholder="Step 1 Title (e.g. Navigate to Request Queue)"
                    value={articleStep1Title}
                    onChange={(e) => setArticleStep1Title(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="Step 1 detailed instructions in plain English..."
                    value={articleStep1Text}
                    onChange={(e) => setArticleStep1Text(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <span className="font-bold text-slate-800 block text-xs">Step 2 Instructions (Optional)</span>
                  <input
                    type="text"
                    placeholder="Step 2 Title (e.g. Confirm Approval & Notify Staff)"
                    value={articleStep2Title}
                    onChange={(e) => setArticleStep2Title(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                  <textarea
                    rows={2}
                    placeholder="Step 2 detailed instructions in plain English..."
                    value={articleStep2Text}
                    onChange={(e) => setArticleStep2Text(e.target.value)}
                    className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNewArticleModal(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold shadow-xs cursor-pointer"
                  >
                    Publish Article
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
