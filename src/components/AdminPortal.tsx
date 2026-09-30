import React, { useState } from 'react';
import { useDocs } from '../context/DocsContext';
import { SoftwareApp, Category, Article, ArticleContentBlock } from '../types/docs';
import { slugify, getSoftwareSlug, getGuideShareUrls, copyToClipboard } from '../utils/urlRouter';
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
  Sliders,
  Link2,
  Copy,
  Share2
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
  const [newAppSlug, setNewAppSlug] = useState('');
  const [newAppUrl, setNewAppUrl] = useState('https://');
  const [newAppCategory, setNewAppCategory] = useState('Business Application');
  const [newAppAudience, setNewAppAudience] = useState('Staff & Users');
  const [newAppDesc, setNewAppDesc] = useState('');
  const [newAppTheme, setNewAppTheme] = useState<'teal' | 'orange' | 'violet' | 'sky' | 'emerald' | 'amber' | 'rose'>('teal');
  const [newAppIcon, setNewAppIcon] = useState('Bot');
  const [copiedAppId, setCopiedAppId] = useState<string | null>(null);

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

    const finalSlug = newAppSlug.trim().toLowerCase() || slugify(newAppShort || newAppName) || `app-${Date.now()}`;

    const newApp: SoftwareApp = {
      id: `app-${Date.now()}`,
      slug: finalSlug,
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
    setNewAppSlug('');
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
      slug: slugify(articleTitle),
      title: articleTitle,
      summary: articleSummary || 'Clear instructions for this operation.',
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
      version: '1.0',
      exportDate: new Date().toISOString(),
      softwareApps,
      categories,
      articles
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `falgoon_documentation_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyAppDirectLink = async (app: SoftwareApp) => {
    const { primaryUrl } = getGuideShareUrls(app);
    await copyToClipboard(primaryUrl);
    setCopiedAppId(app.id);
    setTimeout(() => setCopiedAppId(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner */}
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/30">
            <Sliders className="w-3.5 h-3.5" />
            <span>Admin Documentation CMS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Knowledge &amp; Application Management
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
            Add new software application cards, configure custom dedicated slugs, create step-by-step guides, upload screenshots, and manage versions without changing source code.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors cursor-pointer"
            title="Download JSON backup"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>
          <button
            onClick={() => setIsAdminMode(false)}
            className="flex items-center gap-1.5 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View User Portal</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-t-2xl border-x border-t border-slate-200 p-2 flex items-center gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab('apps')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'apps'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Software Cards ({softwareApps.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('articles')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'articles'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Articles &amp; Guides ({articles.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('media')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'media'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Image className="w-4 h-4" />
          <span>Media &amp; Screenshots ({mediaAssets.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
            activeTab === 'settings'
              ? 'bg-teal-700 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Portal Settings</span>
        </button>
      </div>

      {/* Tab 1: Software Apps Manager */}
      {activeTab === 'apps' && (
        <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Software Product Cards</h3>
              <p className="text-xs text-slate-500">Each card appears on the homepage hub with its own dedicated permanent slug.</p>
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
              <div key={app.id} className="p-5 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-300 transition-colors bg-white">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {app.categoryTag} · {app.audience}
                      </span>
                      <h4 className="font-bold text-slate-900 text-base">{app.name}</h4>
                      <span className="text-xs font-mono text-teal-700 truncate block mt-0.5">{app.portalUrl}</span>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0">
                      {app.version}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">{app.description}</p>
                </div>

                {/* Direct Slug Display */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Link2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="text-[11px] text-slate-500 font-semibold shrink-0">Dedicated Slug:</span>
                      <code className="text-[11px] font-mono font-bold text-teal-900 truncate">
                        /?app={getSoftwareSlug(app)}
                      </code>
                    </div>
                    <button
                      onClick={() => handleCopyAppDirectLink(app)}
                      className="text-[11px] font-bold text-teal-800 hover:text-teal-950 bg-white border border-slate-200 px-2 py-0.5 rounded cursor-pointer shrink-0 flex items-center gap-1"
                    >
                      {copiedAppId === app.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
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
                  <th className="px-4 py-3">Direct Slug Link</th>
                  <th className="px-4 py-3">Difficulty</th>
                  <th className="px-4 py-3">Read Time</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {articles.map((art) => {
                  const soft = softwareApps.find((s) => s.id === art.softwareId);
                  const softSlug = soft ? getSoftwareSlug(soft) : 'app';
                  const directSlug = `/?app=${softSlug}&article=${art.slug || art.id}`;
                  return (
                    <tr key={art.id} className="hover:bg-slate-50/60">
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {art.title}
                      </td>
                      <td className="px-4 py-3 text-slate-500">
                        {soft?.shortName || 'Unknown'}
                      </td>
                      <td className="px-4 py-3 font-mono text-[11px] text-teal-800">
                        {directSlug}
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                          {art.difficulty}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-500 font-mono">
                        {art.estimatedMinutes} min
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`Delete article "${art.title}"?`)) {
                              deleteArticle(art.id);
                            }
                          }}
                          className="text-rose-600 hover:text-rose-800 font-semibold p-1 cursor-pointer"
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

      {/* Tab 3: Media & Screenshots */}
      {activeTab === 'media' && (
        <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-base font-bold text-slate-900">System Screenshot Assets ({mediaAssets.length})</h3>
            <p className="text-xs text-slate-500">All registered UI screenshots, figure labels, and descriptive captions available for use in article steps.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {mediaAssets.map((asset) => (
              <div key={asset.id} className="p-3 border border-slate-200 rounded-xl bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] font-bold bg-teal-100 text-teal-800 px-2 py-0.5 rounded">
                      {asset.figureLabel}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">{asset.category}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{asset.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">{asset.description}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/80 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>ID: {asset.id}</span>
                  <span className="text-emerald-700 font-semibold">Available</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Settings & Data Reset */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-b-2xl border-x border-b border-slate-200 p-6 shadow-sm space-y-6">
          <div>
            <h3 className="text-base font-bold text-slate-900">Data Management &amp; System Reset</h3>
            <p className="text-xs text-slate-500">Backup documentation data or reset to factory defaults.</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Export Full Knowledge Database</h4>
            <p className="text-xs text-slate-600">Download the entire database including all 4 initial software portals, chapters, and custom user guides.</p>
            <button
              onClick={handleExportJSON}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON Database</span>
            </button>
          </div>

          <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-200 space-y-3">
            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider">Reset to Factory Defaults</h4>
            <p className="text-xs text-rose-700">Clear any test data added in this browser session and restore default Falgoon Nursery portals.</p>
            <button
              onClick={() => {
                if (confirm('Are you sure you want to reset all documentation data to factory defaults? Any custom cards will be restored.')) {
                  resetToDefaults();
                  alert('Portal reset to factory defaults.');
                }
              }}
              className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Portal Data</span>
            </button>
          </div>
        </div>
      )}

      {/* Modal: Add New Software Card with Dedicated Slug */}
      {showNewAppModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-xl border border-slate-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">Custom Software Card</span>
                <h3 className="text-lg font-bold text-slate-900">Add New Software Application</h3>
              </div>
              <button onClick={() => setShowNewAppModal(false)} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
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
                  onChange={(e) => {
                    setNewAppName(e.target.value);
                    if (!newAppSlug) {
                      setNewAppSlug(slugify(e.target.value));
                    }
                  }}
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
                    onChange={(e) => {
                      setNewAppShort(e.target.value);
                      if (!newAppSlug) {
                        setNewAppSlug(slugify(e.target.value));
                      }
                    }}
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

              {/* Dedicated Slug Field */}
              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Dedicated URL Slug (for direct email &amp; website links) *
                </label>
                <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs">
                  <span className="text-slate-400 font-mono">/?app=</span>
                  <input
                    type="text"
                    placeholder="e.g. staff-attendance"
                    value={newAppSlug}
                    onChange={(e) => setNewAppSlug(slugify(e.target.value))}
                    className="flex-1 bg-transparent focus:outline-none font-mono font-bold text-teal-800"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Direct shareable link: <code className="text-teal-700 font-mono">/?app={newAppSlug || 'slug-name'}</code>
                </p>
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
                    <option value="Bot">Bot (AI Assistant)</option>
                    <option value="Smile">Smile (Parent & Family)</option>
                    <option value="BarChart3">BarChart (Executive & BI)</option>
                    <option value="Globe">Globe (Public Website)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewAppModal(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold shadow-xs cursor-pointer"
                >
                  Create &amp; Publish Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Create New Article */}
      {showNewArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="text-lg font-bold text-slate-900">Create New Article</h3>
              <button onClick={() => setShowNewArticleModal(false)} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateArticle} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Target Software *</label>
                <select
                  value={selectedSoftwareForArticle}
                  onChange={(e) => setSelectedSoftwareForArticle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600 cursor-pointer"
                >
                  {softwareApps.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How to Approve Photo Permissions"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Plain-English Summary</label>
                <textarea
                  rows={2}
                  placeholder="Brief summary explaining what the user will achieve..."
                  value={articleSummary}
                  onChange={(e) => setArticleSummary(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
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
                  <label className="font-bold text-slate-700 block mb-1">Estimated Minutes</label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={articleMinutes}
                    onChange={(e) => setArticleMinutes(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:outline-teal-600"
                  />
                </div>
              </div>

              {/* Step 1 */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">Step 1 Instructions</span>
                <input
                  type="text"
                  placeholder="Step 1 Title (e.g. Open Parent Profile)"
                  value={articleStep1Title}
                  onChange={(e) => setArticleStep1Title(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                />
                <textarea
                  rows={2}
                  placeholder="Step 1 details..."
                  value={articleStep1Text}
                  onChange={(e) => setArticleStep1Text(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                />
              </div>

              {/* Step 2 */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">Step 2 Instructions (Optional)</span>
                <input
                  type="text"
                  placeholder="Step 2 Title (e.g. Toggle Permissions Switch)"
                  value={articleStep2Title}
                  onChange={(e) => setArticleStep2Title(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                />
                <textarea
                  rows={2}
                  placeholder="Step 2 details..."
                  value={articleStep2Text}
                  onChange={(e) => setArticleStep2Text(e.target.value)}
                  className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewArticleModal(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold shadow-xs cursor-pointer"
                >
                  Save &amp; Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
