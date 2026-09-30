export type CalloutType = 'info' | 'warning' | 'tip' | 'best' | 'danger';

export interface Callout {
  type: CalloutType;
  title: string;
  content: string | string[];
}

export interface InstructionStep {
  stepNumber: number;
  title: string;
  instruction: string;
  screenshotId?: string;
  caption?: string;
  callout?: Callout;
}

export interface TableRowItem {
  text: string;
  isCode?: boolean;
  badge?: string;
  subtext?: string;
}

export interface TableData {
  headers: string[];
  rows: (string | TableRowItem)[][];
}

export interface CardItem {
  title: string;
  description: string;
  badge?: string;
  linkArticleId?: string;
}

export interface ArticleContentBlock {
  id: string;
  type: 'paragraph' | 'steps' | 'callout' | 'table' | 'cards' | 'screenshot' | 'video' | 'worked-example';
  title?: string;
  lead?: string;
  body?: string;
  steps?: InstructionStep[];
  callout?: Callout;
  table?: TableData;
  cards?: CardItem[];
  screenshotId?: string;
  caption?: string;
  videoUrl?: string;
  videoTitle?: string;
  workedExample?: {
    question: string;
    expectedBehavior: string;
    citations?: string[];
  };
}

export interface Article {
  id: string;
  softwareId: string;
  categoryId: string;
  slug: string;
  title: string;
  summary: string;
  difficulty: 'beginner' | 'intermediate' | 'admin' | 'Beginner' | 'Intermediate' | 'Admin';
  estimatedMinutes: number;
  requiredPermissions?: string[];
  blocks: ArticleContentBlock[];
  relatedArticleIds?: string[];
  versionTag: string;
  status: 'published' | 'draft';
  lastUpdated: string;
  viewsCount?: number;
  helpfulCount?: number;
  unhelpfulCount?: number;
}

export interface Category {
  id: string;
  softwareId: string;
  name: string;
  description?: string;
  order: number;
  iconName?: string;
}

export interface SoftwareApp {
  id: string;
  name: string;
  shortName: string;
  portalUrl: string;
  categoryTag: string;
  audience: string;
  description: string;
  themeColor: 'teal' | 'orange' | 'violet' | 'sky' | 'emerald' | 'amber' | 'rose';
  colorHex?: string;
  icon: string;
  version: string;
  cardOrder: number;
  popularGuides: { title: string; articleId: string }[];
  status: 'Active' | 'Updated' | 'Beta';
}

export interface MediaAsset {
  id: string;
  title: string;
  figureLabel: string;
  description: string;
  category: string;
  tags: string[];
  aspectRatio: string;
  type: 'screenshot' | 'diagram' | 'photo';
  relatedChapterId?: string;
  previewDetails: {
    screenName: string;
    activeTab?: string;
    highlightedElements?: string[];
    summary: string;
  };
}

export interface TroubleshootingItem {
  id: string;
  category: 'Answers' | 'Website' | 'Content' | 'Handoff' | 'Usage' | 'Access' | 'General' | string;
  problem: string;
  causes: string[];
  steps?: string[];
  fixes?: string[];
  relatedChapterId?: string;
}

export interface ChecklistItem {
  id: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  task: string;
  subtext?: string;
  location?: string;
  relatedChapterId?: string;
}
