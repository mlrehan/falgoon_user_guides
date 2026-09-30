import { SoftwareApp } from '../types/docs';

export const INITIAL_SOFTWARE_APPS: SoftwareApp[] = [
  {
    id: 'falgoon-admin',
    name: 'Falgoon Nursery Admin System',
    shortName: 'Admin System',
    portalUrl: 'https://nursery-admin1.falgoon.co.uk',
    categoryTag: 'Multi-Tenant AI Assistant',
    audience: 'Admins & Management',
    description: 'The core administrative console to manage your AI assistant, upload knowledge documents, review conversations, assign staff roles, and monitor customer satisfaction.',
    themeColor: 'teal',
    icon: 'Bot',
    version: 'v1.0 (Flagship)',
    cardOrder: 1,
    popularGuides: [
      { title: 'Dashboard Overview', articleId: 'art-dashboard' },
      { title: 'Teaching Your Chatbot', articleId: 'art-knowledge-bases' },
      { title: 'Configuring AI Chatbot', articleId: 'art-chatbot' },
      { title: 'Staff Inbox & Handoff', articleId: 'art-conversations-inbox' },
      { title: 'Daily Operations Checklist', articleId: 'art-operations-checklist' }
    ],
    status: 'Active'
  },
  {
    id: 'falgoon-parent',
    name: 'Falgoon Nursery Parent Portal',
    shortName: 'Parent Portal',
    portalUrl: 'https://nursery1.falgoon.co.uk/',
    categoryTag: 'Family & Guardians',
    audience: 'Parents & Guardians',
    description: 'A friendly, mobile-optimized hub where parents check daily sleep & meal logs, view milestone photo galleries, message room key workers, and pay nursery invoices online.',
    themeColor: 'orange',
    icon: 'Smile',
    version: 'v3.0',
    cardOrder: 2,
    popularGuides: [
      { title: 'Parent Getting Started', articleId: 'art-parent-welcome' },
      { title: 'Invoices & Online Payments', articleId: 'art-parent-payments' }
    ],
    status: 'Active'
  },
  {
    id: 'falgoon-exec',
    name: 'Falgoon Executive Nursery Portal',
    shortName: 'Executive Portal',
    portalUrl: 'https://nursery.falgoon.co.uk/m/executive',
    categoryTag: 'Leadership & Oversight',
    audience: 'Directors & Trustees',
    description: 'High-level business intelligence console tracking real-time nursery occupancy percentages, statutory EYFS ratios, fee debt collection, and regulatory compliance audits.',
    themeColor: 'violet',
    icon: 'BarChart3',
    version: 'v2.1',
    cardOrder: 3,
    popularGuides: [
      { title: 'Executive KPI Dashboard', articleId: 'art-exec-kpi-dashboard' },
      { title: 'Fee Auditing & Funding', articleId: 'art-exec-financial-auditing' }
    ],
    status: 'Active'
  },
  {
    id: 'falgoon-corp',
    name: 'Falgoon Corporate Website',
    shortName: 'Corporate Website',
    portalUrl: 'https://www.falgoon.com/',
    categoryTag: 'Public & Admissions',
    audience: 'Public & Prospective Families',
    description: 'The public digital storefront showcasing Falgoon nursery philosophies, facility virtual tours, nursery room curriculums, tour booking scheduler, and staff careers.',
    themeColor: 'sky',
    icon: 'Globe',
    version: 'v1.2',
    cardOrder: 4,
    popularGuides: [
      { title: 'Website Navigation & Tours', articleId: 'art-corp-overview' }
    ],
    status: 'Active'
  }
];
