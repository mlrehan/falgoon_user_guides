import { MediaAsset } from '../types/docs';

export const MEDIA_ASSETS: MediaAsset[] = [
  {
    id: '01-login',
    title: 'Sign in to IAM Control Center',
    figureLabel: 'Figure 3.1',
    description: 'The sign-in page with Email and Password fields, Sign in button, and Google and Facebook options.',
    category: 'Getting Started',
    tags: ['login', 'authentication', 'password', 'oauth'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'IAM Control Center · Sign In',
      summary: 'Clean login card centered with green branded shield, email input, password input, and social logins.'
    }
  },
  {
    id: '02-tenant-switcher',
    title: 'Organisation Switcher',
    figureLabel: 'Figure 3.2',
    description: 'The organisation switcher dropdown at the top right of the portal showing Falgoon Little Star.',
    category: 'Navigation',
    tags: ['tenant', 'switcher', 'organisation', 'multi-tenant'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Top Bar · Tenant Switcher',
      activeTab: 'Falgoon Little Star',
      summary: 'Dropdown showing active tenant falgoon-little-star and Manage tenants option.'
    }
  },
  {
    id: '02-dashboard-full',
    title: 'Complete Tenant Admin Dashboard',
    figureLabel: 'Figure 4.1',
    description: 'The complete dashboard: setup checklist, needs attention panel, four key figures, activity chart, chatbot card, unanswered questions, and knowledge summary.',
    category: 'Dashboard',
    tags: ['dashboard', 'kpi', 'checklist', 'activity', 'overview'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Tenant Admin Dashboard · Full View',
      summary: 'Complete executive overview with 4 KPI cards (32 questions, 14 conversations, 1 handoff, 50% helpful).'
    }
  },
  {
    id: '02-dashboard',
    title: 'Dashboard KPI Figures & Setup Progress',
    figureLabel: 'Figure 4.2',
    description: 'Setup checklist, Needs attention panel and the four key performance figures.',
    category: 'Dashboard',
    tags: ['kpis', 'checklist', 'attention', 'metrics'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Dashboard · Key Figures',
      summary: 'Setup checklist: 3 of 4 done (Next: choose who helps visitors).'
    }
  },
  {
    id: '02-dashboard-unanswered',
    title: 'Questions Chatbot Couldn\'t Answer',
    figureLabel: 'Figure 4.3',
    description: 'Questions your chatbot couldn\'t answer, with how often each was asked and when last asked.',
    category: 'Dashboard',
    tags: ['unanswered', 'content gaps', 'queries', 'knowledge gaps'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Dashboard · Questions your chatbot couldn\'t answer',
      summary: 'Top queries: "what is the price of python course?" (Asked 8x), "What is the capital city of Australia?" (Asked 2x).'
    }
  },
  {
    id: '03-members',
    title: 'Members Management Page',
    figureLabel: 'Figure 10.1',
    description: 'The Members page listing each person with status, roles and the date they joined.',
    category: 'Users & Permissions',
    tags: ['members', 'users', 'roles', 'staff'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Members Directory',
      summary: 'Member table showing user tenant_007@lait.co.uk (Active, Tenant Owner).'
    }
  },
  {
    id: '03-members-edit',
    title: 'Editing a Member\'s Job Title',
    figureLabel: 'Figure 10.2',
    description: 'The modal dialog for editing a member\'s job title.',
    category: 'Users & Permissions',
    tags: ['members', 'edit', 'job title'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Edit Job Title Modal',
      summary: 'Simple dialog with text field for optional job title and Save button.'
    }
  },
  {
    id: '04-roles-tab1-roles',
    title: 'Built-in & Custom Roles Tab',
    figureLabel: 'Figure 10.3',
    description: 'The Roles tab listing Tenant Owner (1000), Tenant Administrator (500), and Member (10).',
    category: 'Users & Permissions',
    tags: ['roles', 'permissions', 'rbac', 'security'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Roles & Permissions · Roles Tab',
      activeTab: 'Roles',
      summary: 'List of system roles with ranking and kind.'
    }
  },
  {
    id: '04-roles-tab2-hierarchy',
    title: 'Role Inheritance & Hierarchy',
    figureLabel: 'Figure 10.4',
    description: 'The Hierarchy tab for making parent roles inherit permissions from child roles.',
    category: 'Users & Permissions',
    tags: ['hierarchy', 'inheritance', 'roles'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Roles & Permissions · Hierarchy Tab',
      activeTab: 'Hierarchy',
      summary: 'Form to select Parent role (inherits) and Child role (inherited from).'
    }
  },
  {
    id: '04-roles-tab3-overrides',
    title: 'Permission Overrides Tab',
    figureLabel: 'Figure 10.5',
    description: 'The Overrides tab for granting or denying a single permission to one member with required reason.',
    category: 'Users & Permissions',
    tags: ['overrides', 'exceptions', 'deny-always-wins'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Roles & Permissions · Overrides Tab',
      activeTab: 'Overrides',
      summary: 'Granular grant/deny rules with audit trail reason field.'
    }
  },
  {
    id: '04-roles-tab4-my-permissions',
    title: 'My Permissions Catalogue',
    figureLabel: 'Figure 10.6',
    description: 'My permissions: what you can do, grouped by area with risk levels (Low, Medium, High).',
    category: 'Users & Permissions',
    tags: ['catalog', 'audit', 'permissions', 'risk levels'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Roles & Permissions · My Permissions',
      activeTab: 'My permissions',
      summary: 'Effective permissions resolved with risk chips (HIGH, MEDIUM, LOW).'
    }
  },
  {
    id: '05-chatbot',
    title: 'AI Chatbot Management & Live Preview',
    figureLabel: 'Figure 5.1',
    description: 'The AI Chatbot page with the on/off switch, website status, embed code, and interactive preview panel.',
    category: 'AI Chatbot',
    tags: ['chatbot', 'assistant', 'embed', 'preview'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Assistant Configuration',
      summary: 'Main configuration dashboard with live widget simulator on the right.'
    }
  },
  {
    id: '05-chatbot-tab1-identity',
    title: 'Chatbot Identity Configuration',
    figureLabel: 'Figure 5.2',
    description: 'The Identity tab with Chatbot name, title, avatar selection, and greeting message.',
    category: 'AI Chatbot',
    tags: ['identity', 'avatar', 'greeting', 'branding'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Identity Tab',
      activeTab: 'Identity',
      summary: 'Fields: Course Enquiries Assistant, Courses & Enrolment Support, Avatar (Assistant, Bear, Star, Leaf).'
    }
  },
  {
    id: '05-chatbot-tab2-behaviour',
    title: 'Chatbot Behaviour & Avoid Rules',
    figureLabel: 'Figure 5.3',
    description: 'The Behaviour tab with Role and Avoid text boxes for plain-language boundaries.',
    category: 'AI Chatbot',
    tags: ['behaviour', 'rules', 'avoid', 'guardrails'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Behaviour Tab',
      activeTab: 'Behaviour',
      summary: 'Specific instructions on what the assistant should answer and strict prohibitions.'
    }
  },
  {
    id: '05-chatbot-tab3-tone-style',
    title: 'Tone and Style Settings',
    figureLabel: 'Figure 5.4',
    description: 'The Tone and style tab with Personality (Neutral, Friendly, Reassuring, Professional) and Response length.',
    category: 'AI Chatbot',
    tags: ['tone', 'style', 'personality', 'response length'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Tone & style Tab',
      activeTab: 'Tone & style',
      summary: '4 Personality options + 3 Response lengths (Concise, Balanced, Detailed).'
    }
  },
  {
    id: '05-chatbot-tab4-company',
    title: 'Company Context & Assistant Type',
    figureLabel: 'Figure 5.5',
    description: 'The Company tab showing assistant type, company name, industry, and description.',
    category: 'AI Chatbot',
    tags: ['company', 'assistant type', 'context', 'nursery'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Company Tab',
      activeTab: 'Company',
      summary: 'Assistant type: Education & training provider (or UK nursery). Company name: Falgoon Little Star.'
    }
  },
  {
    id: '05-chatbot-tab5-reply-experience',
    title: 'Reply Experience & Quick Replies',
    figureLabel: 'Figure 5.6',
    description: 'The Reply experience tab with Quick reply suggestions and Use visitor location switches.',
    category: 'AI Chatbot',
    tags: ['quick replies', 'location', 'visitor experience'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Reply experience Tab',
      activeTab: 'Reply experience',
      summary: 'Toggle quick reply starter buttons and visitor location.'
    }
  },
  {
    id: '05-chatbot-tab6-handoff-limits',
    title: 'Handoff and Daily Message Limits',
    figureLabel: 'Figure 5.7',
    description: 'The Handoff and limits tab with transfer switches, team choices, daily limit, time zone, and retention.',
    category: 'AI Chatbot',
    tags: ['handoff', 'limits', 'retention', 'time zone'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'AI Chatbot · Handoff & limits Tab',
      activeTab: 'Handoff & limits',
      summary: 'Transfer toggles, team list, 50 messages/day limit, UTC time zone, 30 days retention.'
    }
  },
  {
    id: '06-inbox',
    title: 'Staff Inbox & Waiting Queue',
    figureLabel: 'Figure 8.6',
    description: 'The Inbox showing Nothing waiting, live sound toggle, and the Teams section.',
    category: 'Inbox & Handoff',
    tags: ['inbox', 'handoff', 'teams', 'human support'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Staff Inbox · Live Queue',
      summary: 'Real-time handoff queue with sound alerts and team assignment.'
    }
  },
  {
    id: '06-inbox-new-team',
    title: 'Create a Staff Support Team',
    figureLabel: 'Figure 8.7',
    description: 'The New team modal with Name, Description, Offered to visitors switch, and member checklist.',
    category: 'Inbox & Handoff',
    tags: ['new team', 'handoff', 'staffing'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Inbox · New Team Modal',
      summary: 'Modal to configure support teams like Admissions enquiries or Fee support.'
    }
  },
  {
    id: '07-kb-list',
    title: 'Knowledge Bases Directory',
    figureLabel: 'Figure 6.1',
    description: 'The Knowledge bases page listing Falgoon_Data_Source with Documents, Ask, Embed, and Test search.',
    category: 'Knowledge Bases',
    tags: ['knowledge base', 'documents', 'library', 'sources'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Knowledge Bases Directory',
      summary: 'Table showing Falgoon_Data_Source with 5 action buttons.'
    }
  },
  {
    id: '07-kb-embed',
    title: 'Embed Code for Knowledge Base',
    figureLabel: 'Figure 6.2',
    description: 'The Embed window showing the website chatbot, allowed domain, live status, and embed code snippet.',
    category: 'Knowledge Bases',
    tags: ['embed code', 'widget', 'script', 'website'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Knowledge Base · Embed Code Modal',
      summary: 'Code snippet with public key and status: Live.'
    }
  },
  {
    id: '07-kb-new',
    title: 'Create New Knowledge Base Modal',
    figureLabel: 'Figure 6.3',
    description: 'The New knowledge base dialog with Name, Description, and Visibility options.',
    category: 'Knowledge Bases',
    tags: ['new kb', 'create', 'visibility'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'New Knowledge Base Dialog',
      summary: 'Creation modal with name input and Create and add documents button.'
    }
  },
  {
    id: '07-kb-documents',
    title: 'Document Upload & Processing List',
    figureLabel: 'Figure 6.4',
    description: 'The documents window with drag-and-drop zone and list of 25 ready documents with passage counts.',
    category: 'Knowledge Bases',
    tags: ['documents', 'upload', 'pdf', 'excel', 'word'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Knowledge Base · Documents & Web Sources',
      summary: 'Drop files area + 25 of 25 ready documents with searchable passage counters.'
    }
  },
  {
    id: '07-kb-add-from-web',
    title: 'Add Web Pages & Crawl Status',
    figureLabel: 'Figure 6.5',
    description: 'The Add from the web section with Specific URLs vs Entire website modes and fetch progress.',
    category: 'Knowledge Bases',
    tags: ['web crawler', 'urls', 'fetch', 'sync'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Knowledge Base · Add From Web',
      summary: 'URL input box with mode dropdown and Start crawling button.'
    }
  },
  {
    id: '07-kb-document-detail',
    title: 'Inspecting Extracted Passages',
    figureLabel: 'Figure 6.6',
    description: 'A document\'s detail window listing its numbered chunks/passages with text and token counts.',
    category: 'Knowledge Bases',
    tags: ['inspection', 'passages', 'chunks', 'tokens'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Document Inspection · Chunks View',
      summary: 'Detail view showing chunk 1 with 700 tokens extracted from URL.'
    }
  },
  {
    id: '07-kb-test-search',
    title: 'Test Search with Relevance Scores',
    figureLabel: 'Figure 6.7',
    description: 'The Test search window showing query "price of the Python course" and ranked matching pages.',
    category: 'Knowledge Bases',
    tags: ['test search', 'relevance', 'scoring', 'retrieval'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Knowledge Base · Test Search',
      summary: 'Ranked results with cosine similarity scores: 0.562, 0.559, 0.536.'
    }
  },
  {
    id: '07-kb-delete-confirm',
    title: 'Safe Knowledge Base Deletion Confirmation',
    figureLabel: 'Figure 6.8',
    description: 'The delete confirmation stating how many documents and passages will be removed, requiring typed name.',
    category: 'Knowledge Bases',
    tags: ['delete', 'safety', 'confirmation', 'audit'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Delete Knowledge Base Confirmation',
      summary: 'Warning stating 25 documents and 470 searchable passages will be removed.'
    }
  },
  {
    id: '07-kb-ask',
    title: 'Internal Ask Console',
    figureLabel: 'Figure 7.1',
    description: 'The Ask window in the portal for querying the knowledge base with source verification.',
    category: 'Testing',
    tags: ['testing', 'ask', 'qa', 'internal'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Knowledge Base · Ask Modal',
      summary: 'Direct question testing modal without visiting external website.'
    }
  },
  {
    id: '08-conversations-all',
    title: 'All Conversations Log & Audit Trail',
    figureLabel: 'Figure 8.1',
    description: 'The conversation list showing title, who asked, handled by, status, and last message timestamp.',
    category: 'Conversations',
    tags: ['conversations', 'history', 'audit log', 'visitor threads'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Conversations Directory · All Threads',
      summary: 'Full list of chats from website visitors with Active status and timestamps.'
    }
  },
  {
    id: '08-conversations-search',
    title: 'Searching Conversation Transcripts',
    figureLabel: 'Figure 8.2',
    description: 'The conversation list filtered by the search term "python".',
    category: 'Conversations',
    tags: ['search', 'transcripts', 'filter'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Conversations · Search Filtered',
      summary: 'Instant search filtering 10+ matching conversation threads.'
    }
  },
  {
    id: '08-conversation-thread',
    title: 'Open Conversation Thread with Citations',
    figureLabel: 'Figure 8.3',
    description: 'An open conversation modal showing visitor question and AI answer with prices and citations [1], [2].',
    category: 'Conversations',
    tags: ['transcript', 'citations', 'open thread', 'q&a'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Conversation Detail Modal',
      summary: 'Visitor asked for prices; AI answered with £420, batch prices £360, citing sources [1] and [2].'
    }
  },
  {
    id: '09-feedback',
    title: 'Answer Feedback Summary & Breakdown',
    figureLabel: 'Figure 8.4',
    description: 'The Answer feedback page with totals for ratings (2), helpful (1), not helpful (1), and satisfaction (50%).',
    category: 'Conversations',
    tags: ['feedback', 'satisfaction', 'ratings', 'thumbs up/down'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Answer Feedback · Ratings Overview',
      summary: '4 stat cards: 2 ratings, 1 helpful (50%), 1 not helpful (50%), 50% satisfaction.'
    }
  },
  {
    id: '09-feedback-detail',
    title: 'Feedback Detail with Visitor Comment',
    figureLabel: 'Figure 8.5',
    description: 'A rating\'s detail window showing the question "Can I bring my pet dog?" and answer rated Helpful.',
    category: 'Conversations',
    tags: ['feedback detail', 'comments', 'review'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Feedback Detail Modal',
      summary: 'Detailed inspection of rated answer with source contact number +44 0749 461 6045.'
    }
  },
  {
    id: '10-account-full',
    title: 'My Identity & Security Management',
    figureLabel: 'Figure 11.1',
    description: 'The My identity page with Profile, Password, Multi-factor authentication, Linked providers, and Sessions.',
    category: 'Settings',
    tags: ['mfa', 'security', 'password', 'sessions'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Account Settings · My Identity',
      summary: 'Security center with MFA enrollment button and Sign out everywhere button.'
    }
  },
  {
    id: '11-widget-closed',
    title: 'Website Chat Widget Closed',
    figureLabel: 'Figure 7.2',
    description: 'A website with the round floating green chat button in the bottom-right corner.',
    category: 'Website Widget',
    tags: ['widget', 'chat button', 'website', 'public'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Website View · Closed Chat Bubble',
      summary: 'Clean circular teal chat bubble floating at bottom right of client website.'
    }
  },
  {
    id: '11-widget-open',
    title: 'Website Chat Widget Open with Quick Replies',
    figureLabel: 'Figure 7.3',
    description: 'The open chat window with greeting and quick reply buttons (Courses, Fees & payment, How to enrol).',
    category: 'Website Widget',
    tags: ['widget', 'chat window', 'quick replies', 'open'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Website View · Open Widget',
      summary: 'Chat window with Course Enquiries Assistant header and 4 quick suggestion pills.'
    }
  },
  {
    id: '11-widget-sources',
    title: 'Website Chat Widget Answering with Citations',
    figureLabel: 'Figure 7.4',
    description: 'The chatbot answering Python course prices with citation numbers and 2 web pages listed below.',
    category: 'Website Widget',
    tags: ['widget', 'answer', 'citations', 'source links'],
    aspectRatio: '16:9',
    type: 'screenshot',
    previewDetails: {
      screenName: 'Website View · Answer with Sources',
      summary: 'Complete answer showing prices £420, [1], [2], expandable "2 web pages" source list.'
    }
  }
];
