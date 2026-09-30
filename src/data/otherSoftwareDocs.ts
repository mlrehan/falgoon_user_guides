import { Article, Category } from '../types/docs';

export const OTHER_SOFTWARE_CATEGORIES: Category[] = [
  // Executive Portal
  { id: 'cat-exec-core', softwareId: 'falgoon-exec', name: 'Executive Overview', order: 1, iconName: 'BarChart3' },
  { id: 'cat-exec-finance', softwareId: 'falgoon-exec', name: 'Finance & Forecasting', order: 2, iconName: 'PoundSterling' },
  { id: 'cat-exec-compliance', softwareId: 'falgoon-exec', name: 'Governance & Audits', order: 3, iconName: 'ShieldAlert' },

  // Parent Portal
  { id: 'cat-parent-start', softwareId: 'falgoon-parent', name: 'Getting Started', order: 1, iconName: 'Smile' },
  { id: 'cat-parent-feed', softwareId: 'falgoon-parent', name: 'Daily Activity Feed', order: 2, iconName: 'Calendar' },
  { id: 'cat-parent-billing', softwareId: 'falgoon-parent', name: 'Invoices & Payments', order: 3, iconName: 'CreditCard' },

  // Corporate Website
  { id: 'cat-corp-nav', softwareId: 'falgoon-corp', name: 'Website Navigation', order: 1, iconName: 'Globe' },
  { id: 'cat-corp-admissions', softwareId: 'falgoon-corp', name: 'Admissions & Inquiries', order: 2, iconName: 'FileText' }
];

export const OTHER_SOFTWARE_ARTICLES: Article[] = [
  // --- EXECUTIVE PORTAL ARTICLES ---
  {
    id: 'art-exec-kpi-dashboard',
    softwareId: 'falgoon-exec',
    categoryId: 'cat-exec-core',
    slug: 'executive-kpi-dashboard',
    title: 'Executive Multi-Branch KPI Dashboard',
    summary: 'How executive directors and trustees can monitor live child occupancy rates, staff-to-child ratios, and fee collection across all nursery branches.',
    difficulty: 'Intermediate',
    estimatedMinutes: 5,
    requiredPermissions: ['executive.view', 'financial.view'],
    versionTag: 'v2.1',
    status: 'published',
    lastUpdated: '28 Sep 2026',
    blocks: [
      {
        id: 'ex-1',
        type: 'paragraph',
        title: 'High-Level Management Summary',
        lead: 'The Executive Portal consolidates real-time operational data from all Falgoon nursery sites into an executive-level command dashboard.',
        body: 'Directors can inspect current morning/afternoon child occupancy percentages, track statutory staff-to-child ratios per age room (Under 2s, 2-3 years, and Preschool 3-5 years), and receive automatic alerts if ratios approach regulatory thresholds.'
      },
      {
        id: 'ex-cards',
        type: 'cards',
        title: 'Executive Metrics Monitored',
        cards: [
          { title: 'Live Occupancy %', description: 'Percentage of licensed capacity filled today across London, Surrey, and Essex branches.' },
          { title: 'EYFS Statutory Ratios', description: 'Real-time staff coverage: 1:3 for babies, 1:4 for toddlers, and 1:8 for preschool.' },
          { title: 'Fee Collection Run-rate', description: 'Monthly direct debit billing health and outstanding parent account arrears.' },
          { title: 'Safeguarding Incidents', description: 'Any recorded minor bumps, medication administration, or logged alerts.' }
        ]
      },
      {
        id: 'ex-steps',
        type: 'steps',
        title: 'Reviewing Weekly Performance Reports',
        steps: [
          { stepNumber: 1, title: 'Open Executive Console', instruction: 'Log in to https://nursery.falgoon.co.uk/m/executive using your executive credentials.' },
          { stepNumber: 2, title: 'Select Branch Filter', instruction: 'Use the branch dropdown to select an individual nursery location or "All Locations Combined".' },
          { stepNumber: 3, title: 'Export Financial Digest', instruction: 'Click "Export Executive Pack (PDF)" to generate an automated boardroom briefing summary.' }
        ]
      }
    ]
  },
  {
    id: 'art-exec-financial-auditing',
    softwareId: 'falgoon-exec',
    categoryId: 'cat-exec-finance',
    slug: 'financial-forecasting-and-debtors',
    title: 'Nursery Fee Audits & Government Funding Reconciliation',
    summary: 'Reconcile 15/30 hours Tax-Free Childcare and local council funding claims against parent co-payments and nursery fee invoices.',
    difficulty: 'Admin',
    estimatedMinutes: 7,
    requiredPermissions: ['financial.admin'],
    versionTag: 'v2.1',
    status: 'published',
    lastUpdated: '28 Sep 2026',
    blocks: [
      {
        id: 'ex-fin-1',
        type: 'paragraph',
        title: 'Funding Reconciliation Overview',
        body: 'Reconciling council funding allocations (early years entitlements) with parent balances is automated through the Financial Auditing module. The portal highlights variances between estimated headcounts and council remittance advices.'
      },
      {
        id: 'ex-fin-callout',
        type: 'callout',
        callout: {
          type: 'tip',
          title: 'Tax-Free Childcare Portal Matching',
          content: 'The portal automatically cross-references parent National Insurance childcare references with bank deposits to eliminate manual reconciliation errors.'
        }
      }
    ]
  },

  // --- PARENT PORTAL ARTICLES ---
  {
    id: 'art-parent-welcome',
    softwareId: 'falgoon-parent',
    categoryId: 'cat-parent-start',
    slug: 'parent-portal-getting-started',
    title: 'Parent Portal: Getting Started & Daily Highlights',
    summary: 'A friendly step-by-step guide for parents and guardians to access daily learning diaries, photos, meal logs, and nap schedules.',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    requiredPermissions: ['parent.account'],
    versionTag: 'v3.0',
    status: 'published',
    lastUpdated: '29 Sep 2026',
    blocks: [
      {
        id: 'pp-1',
        type: 'paragraph',
        title: 'Welcome to the Falgoon Nursery Family',
        lead: 'The Falgoon Nursery Parent Portal keeps you connected to your child\'s day with gentle updates, photos, and direct messaging with room key workers.',
        body: 'Accessible on any smartphone, tablet, or home computer at https://nursery1.falgoon.co.uk/, the parent portal is designed with intuitive, friendly controls requiring no tech experience.'
      },
      {
        id: 'pp-steps',
        type: 'steps',
        title: 'How to Access Your Child\'s Daily Timeline',
        steps: [
          { stepNumber: 1, title: 'Open the link', instruction: 'Navigate to https://nursery1.falgoon.co.uk/ on your phone or computer.' },
          { stepNumber: 2, title: 'Log in securely', instruction: 'Enter your registered email address and password provided in your enrolment pack.' },
          { stepNumber: 3, title: 'View Daily Timeline', instruction: 'Tap your child\'s photo on the home screen to see today\'s meals, nap times, nappy changes, and activities.' },
          { stepNumber: 4, title: 'Download Photos', instruction: 'Tap any activity picture to save high-resolution learning milestones to your camera roll.' }
        ]
      },
      {
        id: 'pp-callout',
        type: 'callout',
        callout: {
          type: 'info',
          title: 'Privacy Guarantee',
          content: 'Photos and updates of your child are strictly confidential and visible only to registered parents and authorized key staff. They are never shared publicly.'
        }
      }
    ]
  },
  {
    id: 'art-parent-payments',
    softwareId: 'falgoon-parent',
    categoryId: 'cat-parent-billing',
    slug: 'invoices-and-online-payments',
    title: 'Viewing Monthly Invoices & Paying Online',
    summary: 'How to download monthly nursery statements, apply Tax-Free Childcare vouchers, and pay fees via debit card or direct debit.',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    requiredPermissions: ['parent.billing'],
    versionTag: 'v3.0',
    status: 'published',
    lastUpdated: '29 Sep 2026',
    blocks: [
      {
        id: 'pp-pay-1',
        type: 'paragraph',
        title: 'Transparent, Itemised Billing',
        body: 'Invoices are issued on the 20th of each calendar month for the upcoming month\'s booked sessions. The portal provides itemized breakdowns of core morning/afternoon hours, meals, extra booked sessions, and voucher deductions.'
      },
      {
        id: 'pp-pay-steps',
        type: 'steps',
        title: 'Making a Fee Payment Online',
        steps: [
          { stepNumber: 1, title: 'Go to Payments tab', instruction: 'In the bottom menu, tap "Payments & Invoices".' },
          { stepNumber: 2, title: 'Review Current Balance', instruction: 'Check the outstanding balance and tap "View Invoice Breakdown" to inspect session details.' },
          { stepNumber: 3, title: 'Pay Securely', instruction: 'Click "Pay with Card / Apple Pay" to settle the invoice instantly with receipt confirmation.' }
        ]
      }
    ]
  },

  // --- CORPORATE WEBSITE ARTICLES ---
  {
    id: 'art-corp-overview',
    softwareId: 'falgoon-corp',
    categoryId: 'cat-corp-nav',
    slug: 'corporate-website-overview',
    title: 'Falgoon Group Corporate Website Guide',
    summary: 'How visitors, prospective parents, and partners navigate the Falgoon corporate portal to discover nursery philosophies, locations, and careers.',
    difficulty: 'Beginner',
    estimatedMinutes: 3,
    requiredPermissions: ['public.access'],
    versionTag: 'v1.2',
    status: 'published',
    lastUpdated: '25 Sep 2026',
    blocks: [
      {
        id: 'cw-1',
        type: 'paragraph',
        title: 'Public Digital Presence',
        lead: 'The official Falgoon website (https://www.falgoon.com/) introduces families to our early-years pedagogical curriculum, nursery spaces, and community initiatives.',
        body: 'The website is responsive, fast-loading, and features an interactive nursery branch locator, tour booking form, and career portal.'
      },
      {
        id: 'cw-steps',
        type: 'steps',
        title: 'Booking a Nursery Showaround Tour',
        steps: [
          { stepNumber: 1, title: 'Visit www.falgoon.com', instruction: 'Open the homepage in your web browser.' },
          { stepNumber: 2, title: 'Click "Our Nurseries"', instruction: 'Browse available branches in your area and view facility photos and virtual video walk-throughs.' },
          { stepNumber: 3, title: 'Select Date & Time', instruction: 'Click "Book a Tour" on your preferred branch, pick a convenient 30-minute slot, and enter your contact details.' },
          { stepNumber: 4, title: 'Receive Confirmation', instruction: 'You will immediately receive an email and SMS confirmation with directions and parking instructions.' }
        ]
      }
    ]
  }
];
