import React, { createContext, useContext, useState, useEffect } from 'react';
import { SoftwareApp, Category, Article, MediaAsset } from '../types/docs';
import { INITIAL_SOFTWARE_APPS } from '../data/defaultSoftware';
import { ADMIN_CATEGORIES, FALGOON_ADMIN_ARTICLES } from '../data/falgoonAdminChapters';
import { OTHER_SOFTWARE_CATEGORIES, OTHER_SOFTWARE_ARTICLES } from '../data/otherSoftwareDocs';
import { MEDIA_ASSETS } from '../data/mediaAssets';

interface DocsContextType {
  softwareApps: SoftwareApp[];
  categories: Category[];
  articles: Article[];
  mediaAssets: MediaAsset[];
  selectedSoftwareId: string | null;
  selectedArticleId: string | null;
  searchOpen: boolean;
  isAdminMode: boolean;
  activeScreenshot: MediaAsset | null;
  isSimulatorOpen: boolean;
  completedSteps: Record<string, boolean>;
  checklistState: Record<string, boolean>;

  // Actions
  selectSoftware: (id: string | null) => void;
  selectArticle: (id: string | null) => void;
  setSearchOpen: (open: boolean) => void;
  setIsAdminMode: (admin: boolean) => void;
  openScreenshot: (assetIdOrAsset: string | MediaAsset) => void;
  closeScreenshot: () => void;
  setIsSimulatorOpen: (open: boolean) => void;
  toggleStepComplete: (articleId: string, stepIndex: number) => void;
  toggleChecklistItem: (itemId: string) => void;
  resetChecklist: (frequency: 'daily' | 'weekly' | 'monthly') => void;
  rateArticle: (articleId: string, helpful: boolean) => void;

  // CMS Actions
  addSoftwareApp: (app: SoftwareApp) => void;
  updateSoftwareApp: (app: SoftwareApp) => void;
  deleteSoftwareApp: (id: string) => void;
  addCategory: (category: Category) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  addArticle: (article: Article) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
  resetToDefaults: () => void;
}

const DocsContext = createContext<DocsContextType | undefined>(undefined);

export const DocsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [softwareApps, setSoftwareApps] = useState<SoftwareApp[]>(() => {
    const saved = localStorage.getItem('falgoon_software_apps');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return INITIAL_SOFTWARE_APPS;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem('falgoon_categories');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [...ADMIN_CATEGORIES, ...OTHER_SOFTWARE_CATEGORIES];
  });

  const [articles, setArticles] = useState<Article[]>(() => {
    const saved = localStorage.getItem('falgoon_articles');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [...FALGOON_ADMIN_ARTICLES, ...OTHER_SOFTWARE_ARTICLES];
  });

  const [selectedSoftwareId, setSelectedSoftwareId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState<MediaAsset | null>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('falgoon_completed_steps');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return {};
  });

  const [checklistState, setChecklistState] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('falgoon_ops_checklist');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return {};
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('falgoon_software_apps', JSON.stringify(softwareApps));
  }, [softwareApps]);

  useEffect(() => {
    localStorage.setItem('falgoon_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('falgoon_articles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('falgoon_completed_steps', JSON.stringify(completedSteps));
  }, [completedSteps]);

  useEffect(() => {
    localStorage.setItem('falgoon_ops_checklist', JSON.stringify(checklistState));
  }, [checklistState]);

  // Global keyboard shortcut for search (/ and Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement))) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const selectSoftware = (id: string | null) => {
    setSelectedSoftwareId(id);
    if (id) {
      // Pick first article of that software if any
      const firstArticle = articles.find((a) => a.softwareId === id && a.status === 'published');
      setSelectedArticleId(firstArticle ? firstArticle.id : null);
    } else {
      setSelectedArticleId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectArticle = (id: string | null) => {
    setSelectedArticleId(id);
    if (id) {
      const art = articles.find((a) => a.id === id);
      if (art && art.softwareId !== selectedSoftwareId) {
        setSelectedSoftwareId(art.softwareId);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openScreenshot = (assetIdOrAsset: string | MediaAsset) => {
    if (typeof assetIdOrAsset === 'string') {
      const found = MEDIA_ASSETS.find((m) => m.id === assetIdOrAsset);
      if (found) setActiveScreenshot(found);
    } else {
      setActiveScreenshot(assetIdOrAsset);
    }
  };

  const closeScreenshot = () => {
    setActiveScreenshot(null);
  };

  const toggleStepComplete = (articleId: string, stepIndex: number) => {
    const key = `${articleId}-step-${stepIndex}`;
    setCompletedSteps((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleChecklistItem = (itemId: string) => {
    setChecklistState((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const resetChecklist = (frequency: 'daily' | 'weekly' | 'monthly') => {
    setChecklistState((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((key) => {
        if (key.includes(frequency.charAt(0))) {
          delete next[key];
        }
      });
      return next;
    });
  };

  const rateArticle = (articleId: string, helpful: boolean) => {
    setArticles((prev) =>
      prev.map((a) => {
        if (a.id === articleId) {
          return {
            ...a,
            helpfulCount: helpful ? (a.helpfulCount || 0) + 1 : a.helpfulCount || 0,
            unhelpfulCount: !helpful ? (a.unhelpfulCount || 0) + 1 : a.unhelpfulCount || 0
          };
        }
        return a;
      })
    );
  };

  // CMS functions
  const addSoftwareApp = (app: SoftwareApp) => {
    setSoftwareApps((prev) => [...prev, app]);
  };

  const updateSoftwareApp = (app: SoftwareApp) => {
    setSoftwareApps((prev) => prev.map((a) => (a.id === app.id ? app : a)));
  };

  const deleteSoftwareApp = (id: string) => {
    setSoftwareApps((prev) => prev.filter((a) => a.id !== id));
    setArticles((prev) => prev.filter((a) => a.softwareId !== id));
    setCategories((prev) => prev.filter((c) => c.softwareId !== id));
    if (selectedSoftwareId === id) {
      setSelectedSoftwareId(null);
      setSelectedArticleId(null);
    }
  };

  const addCategory = (category: Category) => {
    setCategories((prev) => [...prev, category]);
  };

  const updateCategory = (category: Category) => {
    setCategories((prev) => prev.map((c) => (c.id === category.id ? category : c)));
  };

  const deleteCategory = (id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const addArticle = (article: Article) => {
    setArticles((prev) => [article, ...prev]);
  };

  const updateArticle = (article: Article) => {
    setArticles((prev) => prev.map((a) => (a.id === article.id ? article : a)));
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    if (selectedArticleId === id) {
      setSelectedArticleId(null);
    }
  };

  const resetToDefaults = () => {
    localStorage.removeItem('falgoon_software_apps');
    localStorage.removeItem('falgoon_categories');
    localStorage.removeItem('falgoon_articles');
    localStorage.removeItem('falgoon_completed_steps');
    localStorage.removeItem('falgoon_ops_checklist');
    setSoftwareApps(INITIAL_SOFTWARE_APPS);
    setCategories([...ADMIN_CATEGORIES, ...OTHER_SOFTWARE_CATEGORIES]);
    setArticles([...FALGOON_ADMIN_ARTICLES, ...OTHER_SOFTWARE_ARTICLES]);
    setCompletedSteps({});
    setChecklistState({});
  };

  return (
    <DocsContext.Provider
      value={{
        softwareApps,
        categories,
        articles,
        mediaAssets: MEDIA_ASSETS,
        selectedSoftwareId,
        selectedArticleId,
        searchOpen,
        isAdminMode,
        activeScreenshot,
        isSimulatorOpen,
        completedSteps,
        checklistState,
        selectSoftware,
        selectArticle,
        setSearchOpen,
        setIsAdminMode,
        openScreenshot,
        closeScreenshot,
        setIsSimulatorOpen,
        toggleStepComplete,
        toggleChecklistItem,
        resetChecklist,
        rateArticle,
        addSoftwareApp,
        updateSoftwareApp,
        deleteSoftwareApp,
        addCategory,
        updateCategory,
        deleteCategory,
        addArticle,
        updateArticle,
        deleteArticle,
        resetToDefaults
      }}
    >
      {children}
    </DocsContext.Provider>
  );
};

export const useDocs = () => {
  const context = useContext(DocsContext);
  if (!context) {
    throw new Error('useDocs must be used within a DocsProvider');
  }
  return context;
};
