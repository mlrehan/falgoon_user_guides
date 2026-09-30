/**
 * URL Routing & Link Sharing Utilities
 * Ensures each software application and article has a unique, dedicated,
 * shareable slug for linking from external websites, emails, or chat.
 */

import { SoftwareApp, Article } from '../types/docs';

export interface ParsedRoute {
  softwareId: string | null;
  articleId: string | null;
  tab: 'hub' | 'docs' | 'ops' | 'troubleshoot' | 'glossary' | 'gallery' | null;
}

/**
 * Normalizes text to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Returns the public slug for a software application
 */
export function getSoftwareSlug(app: SoftwareApp): string {
  return app.slug || slugify(app.shortName) || app.id;
}

/**
 * Returns the public slug for an article
 */
export function getArticleSlug(article: Article): string {
  return article.slug || slugify(article.title) || article.id;
}

/**
 * Generates both direct URL formats (Query Parameter and Hash-based)
 * for maximum compatibility across email clients, external websites, and static web servers.
 */
export function getGuideShareUrls(
  software: SoftwareApp,
  article?: Article | { id: string; title?: string } | null
) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const baseUrl = `${origin}${cleanPath}`;

  const softSlug = getSoftwareSlug(software);
  const articleParam = article ? (('slug' in article && article.slug) ? article.slug : article.id) : null;

  // Query parameter format: ?app=nursery-admin&article=art-dashboard
  // (Safest for email and website links)
  const queryUrl = articleParam
    ? `${baseUrl}/?app=${encodeURIComponent(softSlug)}&article=${encodeURIComponent(articleParam)}`
    : `${baseUrl}/?app=${encodeURIComponent(softSlug)}`;

  // Hash route format: #/guide/nursery-admin/art-dashboard
  const hashUrl = articleParam
    ? `${baseUrl}/#/guide/${encodeURIComponent(softSlug)}/${encodeURIComponent(articleParam)}`
    : `${baseUrl}/#/guide/${encodeURIComponent(softSlug)}`;

  // Relative display slug (e.g., /?app=nursery-admin)
  const relativeSlug = articleParam
    ? `?app=${softSlug}&article=${articleParam}`
    : `?app=${softSlug}`;

  return {
    queryUrl,
    hashUrl,
    relativeSlug,
    // Primary URL recommended for external links and emails:
    primaryUrl: queryUrl,
  };
}

/**
 * Parses the current window URL (Search query params, hash routes, or pathname)
 * to immediately locate the corresponding software and article.
 */
export function parseCurrentRoute(
  softwareApps: SoftwareApp[],
  articles: Article[]
): ParsedRoute {
  if (typeof window === 'undefined') {
    return { softwareId: null, articleId: null, tab: null };
  }

  const searchParams = new URLSearchParams(window.location.search);
  const hash = window.location.hash;

  let targetSoftwareSlug: string | null = null;
  let targetArticleSlug: string | null = null;
  let targetTab: ParsedRoute['tab'] = null;

  // 1. Check Query Parameters (?app=..., ?guide=..., ?software=...)
  const queryApp = searchParams.get('app') || searchParams.get('guide') || searchParams.get('software');
  const queryArticle = searchParams.get('article') || searchParams.get('chapter') || searchParams.get('doc');
  const queryTab = searchParams.get('tab');

  if (queryApp) {
    targetSoftwareSlug = queryApp.trim().toLowerCase();
  }
  if (queryArticle) {
    targetArticleSlug = queryArticle.trim().toLowerCase();
  }
  if (queryTab) {
    const validTabs: ParsedRoute['tab'][] = ['hub', 'docs', 'ops', 'troubleshoot', 'glossary', 'gallery'];
    if (validTabs.includes(queryTab as any)) {
      targetTab = queryTab as ParsedRoute['tab'];
    }
  }

  // 2. Check Hash Route (#/guide/:slug, #/guide/:slug/:articleId)
  if (hash) {
    const cleanHash = hash.replace(/^#\/?/, ''); // e.g. "guide/nursery-admin/art-dashboard"
    const parts = cleanHash.split('/').filter(Boolean);

    if (parts[0] === 'guide' && parts[1]) {
      targetSoftwareSlug = parts[1].toLowerCase();
      if (parts[2]) {
        targetArticleSlug = parts[2].toLowerCase();
      }
    } else if (['ops', 'troubleshoot', 'glossary', 'gallery', 'hub', 'docs'].includes(parts[0])) {
      targetTab = parts[0] as ParsedRoute['tab'];
    }
  }

  // 3. Match Software Application by slug or id
  let matchedSoftwareId: string | null = null;
  if (targetSoftwareSlug) {
    const foundApp = softwareApps.find(
      (a) =>
        (a.slug && a.slug.toLowerCase() === targetSoftwareSlug) ||
        a.id.toLowerCase() === targetSoftwareSlug ||
        slugify(a.shortName) === targetSoftwareSlug
    );
    if (foundApp) {
      matchedSoftwareId = foundApp.id;
    }
  }

  // 4. Match Article by slug or id
  let matchedArticleId: string | null = null;
  if (targetArticleSlug) {
    const foundArticle = articles.find(
      (a) =>
        (a.slug && a.slug.toLowerCase() === targetArticleSlug) ||
        a.id.toLowerCase() === targetArticleSlug ||
        slugify(a.title) === targetArticleSlug
    );
    if (foundArticle) {
      matchedArticleId = foundArticle.id;
      // If software wasn't in URL, infer it from the article
      if (!matchedSoftwareId) {
        matchedSoftwareId = foundArticle.softwareId;
      }
    }
  }

  return {
    softwareId: matchedSoftwareId,
    articleId: matchedArticleId,
    tab: targetTab,
  };
}

/**
 * Updates the browser's address bar without reloading the page,
 * ensuring users can copy the URL directly from the address bar.
 */
export function updateBrowserUrl(
  software?: SoftwareApp | null,
  articleId?: string | null,
  articles?: Article[],
  tab?: string
) {
  if (typeof window === 'undefined' || !window.history) return;

  const url = new URL(window.location.href);

  if (software) {
    const slug = getSoftwareSlug(software);
    url.searchParams.set('app', slug);

    if (articleId) {
      const art = articles?.find((a) => a.id === articleId);
      const artSlug = art?.slug || articleId;
      url.searchParams.set('article', artSlug);
      url.hash = `/guide/${slug}/${artSlug}`;
    } else {
      url.searchParams.delete('article');
      url.hash = `/guide/${slug}`;
    }
    url.searchParams.delete('tab');
  } else if (tab && tab !== 'hub' && tab !== 'docs') {
    url.searchParams.delete('app');
    url.searchParams.delete('article');
    url.searchParams.set('tab', tab);
    url.hash = `/${tab}`;
  } else {
    url.searchParams.delete('app');
    url.searchParams.delete('article');
    url.searchParams.delete('tab');
    url.hash = '';
  }

  window.history.replaceState({}, '', url.toString());
}

/**
 * Copies text to user's clipboard with fallback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    return false;
  }
}

/**
 * Pre-populates an email mailto: link to share a software guide
 */
export function createEmailShareLink(
  software: SoftwareApp,
  articleTitle?: string,
  shareUrl?: string
): string {
  const url = shareUrl || getGuideShareUrls(software).primaryUrl;
  const subject = articleTitle
    ? `User Guide: ${articleTitle} (${software.shortName})`
    : `User Guide & Instructions: ${software.name}`;

  const body = `Hi,\n\nPlease find the step-by-step user guide and instructions for ${software.name} at the link below:\n\n${url}\n\nThis guide contains verified walkthroughs, system screenshots, and troubleshooting solutions.\n\nBest regards,\nFalgoon System Administrator`;

  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
