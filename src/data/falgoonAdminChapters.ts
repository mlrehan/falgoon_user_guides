import { Article, Category } from '../types/docs';

export const ADMIN_CATEGORIES: Category[] = [
  { id: 'cat-start', softwareId: 'falgoon-admin', name: 'Start Here', order: 1, iconName: 'Compass' },
  { id: 'cat-bot', softwareId: 'falgoon-admin', name: 'Run Your Chatbot', order: 2, iconName: 'Bot' },
  { id: 'cat-monitor', softwareId: 'falgoon-admin', name: 'Monitor & Insights', order: 3, iconName: 'LineChart' },
  { id: 'cat-admin', softwareId: 'falgoon-admin', name: 'Administer & Access', order: 4, iconName: 'ShieldCheck' },
  { id: 'cat-ref', softwareId: 'falgoon-admin', name: 'Reference & Routine', order: 5, iconName: 'BookOpen' }
];

export const FALGOON_ADMIN_ARTICLES: Article[] = [
  {
    id: 'art-welcome',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-start',
    slug: 'welcome',
    title: 'Welcome to the AI Assistant Portal',
    summary: 'What the AI Assistant Portal is, how your organisation uses it, and what you are responsible for as its administrator.',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    requiredPermissions: ['tenant.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'w-1',
        type: 'paragraph',
        title: 'What is the AI Assistant Portal?',
        lead: 'The AI Assistant Portal is where your organisation runs its own AI chatbot: a helpful assistant that sits on your website and answers visitors\' questions around the clock, in plain language.',
        body: 'Unlike a general-purpose AI, your chatbot answers only from information you give it — your documents and your web pages. Every factual answer shows which of your sources it came from, so you and your visitors can check it. If your content doesn\'t cover a question, the chatbot says so honestly instead of guessing, and the question appears on your dashboard so you can fill the gap.\n\nYour organisation is one tenant of the portal. Your content, conversations and settings are completely separate from every other organisation\'s: no other tenant can see your data, and your chatbot never uses theirs.'
      },
      {
        id: 'w-2',
        type: 'steps',
        title: 'How It Works in Four Steps',
        steps: [
          {
            stepNumber: 1,
            title: 'You teach it',
            instruction: 'Upload documents (PDF, Word, Excel and more) or point it at pages of your website. The portal reads them and makes them searchable.'
          },
          {
            stepNumber: 2,
            title: 'You shape it',
            instruction: 'Give it a name, a role, a tone of voice, and a list of topics it must avoid.'
          },
          {
            stepNumber: 3,
            title: 'You publish it',
            instruction: 'Paste one line of code into your website, and the chat bubble appears for your visitors.'
          },
          {
            stepNumber: 4,
            title: 'You look after it',
            instruction: 'Watch the dashboard, read conversations, act on ratings and unanswered questions, and keep your content up to date.'
          }
        ]
      },
      {
        id: 'w-3',
        type: 'cards',
        title: 'Key Benefits for Your Organisation',
        cards: [
          { title: 'Always Available', description: 'Visitors get accurate answers at any hour, without waiting for your team.' },
          { title: 'Trustworthy & Grounded', description: 'Answers come from your own approved content, with sources shown — never invented.' },
          { title: 'A Person When Needed', description: 'Visitors can ask for a colleague; the conversation passes smoothly to your team\'s Inbox.' },
          { title: 'Always Improving', description: 'The dashboard shows exactly which questions your content doesn\'t answer yet.' }
        ]
      },
      {
        id: 'w-4',
        type: 'table',
        title: 'Your Responsibilities as Tenant Administrator',
        table: {
          headers: ['Area', 'What You Do', 'Where in Portal'],
          rows: [
            ['Knowledge', 'Add, update and remove the documents and web pages the chatbot answers from.', 'Knowledge bases'],
            ['Chatbot behaviour', 'Set its name, greeting, role, restrictions, tone and when it hands over to a person.', 'AI Chatbot'],
            ['Quality', 'Test answers, review ratings and fix unanswered questions.', 'Testing & Answer feedback'],
            ['Conversations', 'Review what visitors ask and make sure handed-over conversations get a reply.', 'Conversations & Inbox'],
            ['People & access', 'Decide who in your organisation can use the portal, and what they can do.', 'Members, Roles & permissions'],
            ['Usage', 'Keep an eye on daily questions and your monthly AI allowance.', 'Dashboard']
          ]
        }
      }
    ]
  },
  {
    id: 'art-getting-started',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-start',
    slug: 'getting-started',
    title: 'Getting Started: Sign In & First Steps',
    summary: 'How to sign in, navigate the portal effortlessly, complete your initial setup, and secure your account.',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    requiredPermissions: ['tenant.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'gs-1',
        type: 'paragraph',
        title: 'Signing In to IAM Control Center',
        body: 'Navigate to the portal address provided by your administrator (e.g. portal.yourcompany.com). The sign-in page confirms your identity before presenting your organisation\'s data.'
      },
      {
        id: 'gs-shot1',
        type: 'screenshot',
        screenshotId: '01-login',
        caption: 'Figure 3.1: The sign-in page with Email and Password fields, Sign in button, and Google and Facebook options.'
      },
      {
        id: 'gs-2',
        type: 'steps',
        title: 'Step-by-Step Sign In Procedure',
        steps: [
          {
            stepNumber: 1,
            title: 'Open portal address',
            instruction: 'Open your web browser (Chrome, Edge, Firefox, or Safari) and navigate to the portal address. Bookmark this page.'
          },
          {
            stepNumber: 2,
            title: 'Enter registered email',
            instruction: 'Enter your email address in the Email box — the one registered by your administrator.'
          },
          {
            stepNumber: 3,
            title: 'Enter password',
            instruction: 'Enter your password in the Password box.'
          },
          {
            stepNumber: 4,
            title: 'Sign in & complete MFA',
            instruction: 'Click Sign in. If you have enrolled an authenticator app, enter the 6-digit code shown on your phone.'
          }
        ]
      },
      {
        id: 'gs-callout1',
        type: 'callout',
        callout: {
          type: 'tip',
          title: 'Signing in with Google or Facebook',
          content: 'The Google and Facebook buttons work only if your provider enabled them and your social account uses the same email address as your portal account. When in doubt, use email and password.'
        }
      },
      {
        id: 'gs-shot2',
        type: 'screenshot',
        screenshotId: '02-tenant-switcher',
        caption: 'Figure 3.2: The organisation switcher (top right) indicates which tenant organization you are currently administering.'
      },
      {
        id: 'gs-checklist',
        type: 'steps',
        title: 'Recommended Actions in Your First Session',
        steps: [
          { stepNumber: 1, title: 'Secure your account', instruction: 'Turn on an authenticator app under My Identity (Chapter 11).' },
          { stepNumber: 2, title: 'Follow setup checklist', instruction: 'Check the 4 setup steps pinned to the top of your Dashboard.' },
          { stepNumber: 3, title: 'Inspect what chatbot knows', instruction: 'Open Knowledge bases and verify initial documents or web sources.' },
          { stepNumber: 4, title: 'Describe your company', instruction: 'Fill in Company name and description on the AI Chatbot page.' },
          { stepNumber: 5, title: 'Test common questions', instruction: 'Run top customer enquiries through the Ask tester.' }
        ]
      }
    ]
  },
  {
    id: 'art-dashboard',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-bot',
    slug: 'dashboard',
    title: 'Tenant Admin Dashboard',
    summary: 'Your home command centre: track chatbot health, resolve setup warnings, monitor activity trends, and fill content gaps.',
    difficulty: 'Beginner',
    estimatedMinutes: 6,
    requiredPermissions: ['tenant.dashboard.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'db-1',
        type: 'paragraph',
        title: 'Dashboard Overview',
        lead: 'The Dashboard gives you an immediate single-page overview of setup progress, warnings affecting your visitors, activity figures, usage limits, and gaps in your content.',
        body: 'The dashboard refreshes automatically, showing the last update timestamp in the top right header.'
      },
      {
        id: 'db-shot1',
        type: 'screenshot',
        screenshotId: '02-dashboard-full',
        caption: 'Figure 4.1: The complete Tenant Admin Dashboard layout, top to bottom.'
      },
      {
        id: 'db-table1',
        type: 'table',
        title: 'Setup Checklist Steps',
        table: {
          headers: ['Step', 'What Done Means', 'Action Link'],
          rows: [
            ['1. Teach your chatbot', 'At least one document or web page is Ready to use.', 'Knowledge bases'],
            ['2. Tell it about your organisation', 'You described your organisation on the chatbot Company tab.', 'AI Chatbot → Company'],
            ['3. Put it on your website', 'A real page on your website has loaded the chatbot snippet.', 'AI Chatbot → On your website'],
            ['4. Choose who helps visitors', 'A support team exists with at least one person in it.', 'Inbox → Teams']
          ]
        }
      },
      {
        id: 'db-shot2',
        type: 'screenshot',
        screenshotId: '02-dashboard',
        caption: 'Figure 4.2: Setup checklist, Needs attention alert box, and the four primary KPI cards.'
      },
      {
        id: 'db-kpis',
        type: 'table',
        title: 'Key Figures Explained',
        table: {
          headers: ['Figure', 'What It Means', 'What to Look For'],
          rows: [
            ['Questions asked · 7 days', 'How many questions visitors asked your chatbot in the last 7 days.', 'Steady growth indicates healthy user adoption.'],
            ['Conversations · 7 days', 'How many separate chats started. One conversation can have multiple questions.', 'Ratio of questions per conversation highlights user engagement.'],
            ['Passed to your team · 7 days', 'How many conversations were handed to a person, plus ongoing chats.', 'A sudden spike means your content might lack something visitors need.'],
            ['Helpful answers · 30 days', 'Percentage of positive thumbs-up ratings among all submitted feedback.', 'Target >= 85%. Investigate negative ratings in Answer Feedback.']
          ]
        }
      },
      {
        id: 'db-shot3',
        type: 'screenshot',
        screenshotId: '02-dashboard-unanswered',
        caption: 'Figure 4.3: Questions your chatbot couldn\'t answer, with frequency count and timestamp.'
      },
      {
        id: 'db-unanswered-steps',
        type: 'steps',
        title: 'How to Resolve Unanswered Questions',
        steps: [
          { stepNumber: 1, title: 'Review top questions', instruction: 'Read the highest frequency questions on the list. Ask: should our chatbot know this?' },
          { stepNumber: 2, title: 'Add missing information', instruction: 'If yes, add the information to a document or webpage, and upload or refresh your Knowledge Base.' },
          { stepNumber: 3, title: 'Verify answer', instruction: 'Ask the question again in a fresh chat. Once answered from sources, it disappears from this gap list.' },
          { stepNumber: 4, title: 'Dismiss irrelevant queries', instruction: 'If visitors asked off-topic questions (e.g. "Capital of Australia"), no action is needed; the bot correctly declined.' }
        ]
      }
    ]
  },
  {
    id: 'art-chatbot',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-bot',
    slug: 'chatbot-management',
    title: 'Configuring Your AI Chatbot',
    summary: 'Customise your assistant name, avatar, greeting, strict behaviour boundaries, tone of voice, website embed, and human handoff.',
    difficulty: 'Intermediate',
    estimatedMinutes: 8,
    requiredPermissions: ['tenant.chatbot.manage'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'cb-1',
        type: 'paragraph',
        title: 'Overview of Assistant Management',
        lead: 'The AI Chatbot page is your single control centre for configuring how your assistant introduces itself, what topics it handles, what it refuses, and when it fetches a human colleague.',
        body: 'Settings are organised into six clean tabs: Identity, Behaviour, Tone & style, Company, Reply experience, and Handoff & limits. Each tab has its own Save button. Changes take effect on the very next visitor query.'
      },
      {
        id: 'cb-shot1',
        type: 'screenshot',
        screenshotId: '05-chatbot',
        caption: 'Figure 5.1: The AI Chatbot management page with the live preview simulator panel on the right.'
      },
      {
        id: 'cb-tabs',
        type: 'steps',
        title: 'Step-by-Step Tab Configuration',
        steps: [
          {
            stepNumber: 1,
            title: 'Configure Identity',
            instruction: 'Set the Chatbot Name (e.g. "Course Enquiries Assistant"), Chatbot Title ("Courses & Enrolment Support"), select an Avatar (Assistant, Bear, Star, or Leaf), and write a welcoming Greeting.'
          },
          {
            stepNumber: 2,
            title: 'Set Behaviour & Avoid Rules',
            instruction: 'In Role, describe what topics your bot helps with. In Avoid, list strict guardrails (e.g. "Never confirm discounts or refunds without staff approval; never ask for credit card numbers").'
          },
          {
            stepNumber: 3,
            title: 'Select Tone & Style',
            instruction: 'Choose a Personality (Neutral, Friendly, Reassuring, or Professional) and Response Length (Concise, Balanced, or Detailed).'
          },
          {
            stepNumber: 4,
            title: 'Company Context',
            instruction: 'Enter your official Company Name, Sector/Industry, and a concise 2-4 paragraph overview of your organization.'
          },
          {
            stepNumber: 5,
            title: 'Embed on Website',
            instruction: 'Add your website domain under "Where it can appear". Copy the 1-line script tag and paste it just before </body> on your site.'
          }
        ]
      },
      {
        id: 'cb-shot2',
        type: 'screenshot',
        screenshotId: '05-chatbot-tab1-identity',
        caption: 'Figure 5.2: The Identity tab with Name, Title, Avatar options, and Greeting message.'
      },
      {
        id: 'cb-shot3',
        type: 'screenshot',
        screenshotId: '05-chatbot-tab2-behaviour',
        caption: 'Figure 5.3: The Behaviour tab with Role and Avoid boundary inputs.'
      },
      {
        id: 'cb-shot4',
        type: 'screenshot',
        screenshotId: '05-chatbot-tab3-tone-style',
        caption: 'Figure 5.4: The Tone & style tab with 4 Personality choices and 3 Response length options.'
      },
      {
        id: 'cb-shot5',
        type: 'screenshot',
        screenshotId: '05-chatbot-tab6-handoff-limits',
        caption: 'Figure 5.7: The Handoff & limits tab configuring human transfer, daily quota, time zone, and retention.'
      }
    ]
  },
  {
    id: 'art-knowledge-bases',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-bot',
    slug: 'knowledge-bases',
    title: 'Knowledge Base Management: Teaching Your Chatbot',
    summary: 'The cornerstone of an accurate assistant: uploading files, adding web pages, understanding processing stages, and testing searches.',
    difficulty: 'Intermediate',
    estimatedMinutes: 9,
    requiredPermissions: ['tenant.documents.upload', 'tenant.knowledge_bases.manage'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'kb-1',
        type: 'paragraph',
        title: 'What is a Knowledge Base?',
        lead: 'A Knowledge Base is the library of verified facts your chatbot searches before answering any question.',
        body: 'When a user asks a question, the assistant finds the most relevant passages from your uploaded documents or web pages, combines them into a friendly plain-language answer, and cites the exact source numbers. If your content does not contain the answer, the assistant states it cannot confirm the information instead of inventing hallucinated facts.'
      },
      {
        id: 'kb-shot1',
        type: 'screenshot',
        screenshotId: '07-kb-list',
        caption: 'Figure 6.1: The Knowledge bases directory listing Falgoon_Data_Source with Documents, Ask, Embed, and Test Search.'
      },
      {
        id: 'kb-upload-steps',
        type: 'steps',
        title: 'How to Upload Documents',
        steps: [
          {
            stepNumber: 1,
            title: 'Open Documents view',
            instruction: 'Click the "Documents" button next to your Knowledge Base.'
          },
          {
            stepNumber: 2,
            title: 'Drop files or browse',
            instruction: 'Drag files into the dashed drop area, or click "browse". Supports PDF, Word, Excel, PowerPoint, CSV, Text, HTML, and Images (up to 50 MB each).'
          },
          {
            stepNumber: 3,
            title: 'Monitor processing pipeline',
            instruction: 'Each file advances through Uploading → Queued → Extracting → Chunking → Embedding → Indexing → Ready.'
          },
          {
            stepNumber: 4,
            title: 'Verify searchable passages',
            instruction: 'Confirm the document shows a green tick with "Ready" and the count of searchable passages.'
          }
        ]
      },
      {
        id: 'kb-shot2',
        type: 'screenshot',
        screenshotId: '07-kb-documents',
        caption: 'Figure 6.4: The documents modal with file drop area and status listing 25 of 25 ready documents.'
      },
      {
        id: 'kb-shot3',
        type: 'screenshot',
        screenshotId: '07-kb-add-from-web',
        caption: 'Figure 6.5: Adding web pages using Specific URLs or Entire website crawler modes.'
      },
      {
        id: 'kb-shot4',
        type: 'screenshot',
        screenshotId: '07-kb-test-search',
        caption: 'Figure 6.7: Test Search ranking sources for "price of the Python course" with relevance scores.'
      },
      {
        id: 'kb-callout1',
        type: 'callout',
        callout: {
          type: 'best',
          title: 'Document Best Practice',
          content: 'Keep documents focused on one subject with clear descriptive headings. When updating prices or schedules, delete old documents after the new one is Ready to avoid conflicting information.'
        }
      }
    ]
  },
  {
    id: 'art-testing',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-bot',
    slug: 'testing-assistant',
    title: 'Testing Your AI Chatbot & Verifying Citations',
    summary: 'How to verify answers using the internal Ask tool, test the live website widget, inspect citations, and fix bad answers.',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    requiredPermissions: ['tenant.conversations.create'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 't-1',
        type: 'paragraph',
        title: 'Testing Strategy',
        lead: 'Always test answers before your customers ask them. Testing takes only a few minutes and ensures complete confidence in what your chatbot communicates.',
        body: 'You have two testing environments: the internal Ask window in the portal (instant, isolated queries) and the live website widget in an incognito window (tests the full visitor experience including quick replies, tone, and citation popups).'
      },
      {
        id: 't-shot1',
        type: 'screenshot',
        screenshotId: '07-kb-ask',
        caption: 'Figure 7.1: The Ask window inside the portal for querying a knowledge base without visiting your website.'
      },
      {
        id: 't-shot2',
        type: 'screenshot',
        screenshotId: '11-widget-sources',
        caption: 'Figure 7.4: A verified answer on the website showing exact course prices, citations [1], [2], and source links.'
      },
      {
        id: 't-worked-example',
        type: 'worked-example',
        workedExample: {
          question: 'What is the price of the Python course?',
          expectedBehavior: 'The assistant answers strictly from your approved sources. It lists regular price £420, batch price £360, group discounts from £240/person, and 1-to-1 training £420. Each fact has a numbered footnote citation [1], [2], linking to source pages.',
          citations: ['Python Programming for Beginners | London Academy of IT', 'Python Intermediate to Advanced | London Academy of IT']
        }
      },
      {
        id: 't-steps',
        type: 'steps',
        title: '5-Point Answer Verification Checklist',
        steps: [
          { stepNumber: 1, title: 'Accuracy', instruction: 'Compare numbers, dates, and terms against your official pricing or policy.' },
          { stepNumber: 2, title: 'Citations present', instruction: 'Check that every factual statement has a numbered superscript citation.' },
          { stepNumber: 3, title: 'Correct source links', instruction: 'Click the source link to verify it opens the expected document or page.' },
          { stepNumber: 4, title: 'Tone and length', instruction: 'Verify the reply is polite, professional, and properly balanced in length.' },
          { stepNumber: 5, title: 'Submit rating', instruction: 'Click thumbs up or down. Ratings appear in your Answer Feedback dashboard.' }
        ]
      }
    ]
  },
  {
    id: 'art-conversations-inbox',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-monitor',
    slug: 'conversations-and-inbox',
    title: 'Conversations, Answer Feedback & Staff Inbox',
    summary: 'Monitor live chats, search historical transcripts, review customer ratings, and handle human handoffs seamlessly.',
    difficulty: 'Intermediate',
    estimatedMinutes: 7,
    requiredPermissions: ['tenant.conversations.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'ci-1',
        type: 'paragraph',
        title: 'Full Visibility into Customer Interactions',
        lead: 'The Conversations and Inbox pages provide complete transparency into every customer enquiry, satisfaction ratings, and requests to speak with a human team member.',
        body: 'All conversations are logged in an immutable audit trail. When staff open an anonymous visitor\'s conversation, an audit entry is recorded with the staff member\'s name and timestamp.'
      },
      {
        id: 'ci-shot1',
        type: 'screenshot',
        screenshotId: '08-conversations-all',
        caption: 'Figure 8.1: All conversations log showing title, visitor identifier, handler (AI vs team), and timestamps.'
      },
      {
        id: 'ci-shot2',
        type: 'screenshot',
        screenshotId: '08-conversation-thread',
        caption: 'Figure 8.3: An opened conversation modal showing visitor questions, AI responses, and citations.'
      },
      {
        id: 'ci-shot3',
        type: 'screenshot',
        screenshotId: '09-feedback',
        caption: 'Figure 8.4: Answer feedback metrics: 2 ratings, 1 helpful (50%), 1 not helpful (50%), and filterable table.'
      },
      {
        id: 'ci-shot4',
        type: 'screenshot',
        screenshotId: '06-inbox',
        caption: 'Figure 8.6: Staff Inbox showing real-time queue, sound alert toggle, and team assignment.'
      },
      {
        id: 'ci-steps',
        type: 'steps',
        title: 'How Human Handoff Works',
        steps: [
          { stepNumber: 1, title: 'Visitor requests a human', instruction: 'The visitor clicks "Speak to a person" or asks a question requiring human judgement.' },
          { stepNumber: 2, title: 'Team selection', instruction: 'The chatbot offers teams that have active members assigned (e.g. "Admissions" or "Support").' },
          { stepNumber: 3, title: 'Live Inbox alert', instruction: 'The enquiry arrives live in the Inbox with an audio chime. Only assigned team members see it.' },
          { stepNumber: 4, title: 'Claim and reply', instruction: 'A staff member clicks "Claim" to prevent duplicate replies, talks with the visitor, and adds private internal notes.' },
          { stepNumber: 5, title: 'Handoff back to AI', instruction: 'Once finished, the staff member can return the conversation to the AI assistant.' }
        ]
      }
    ]
  },
  {
    id: 'art-users-permissions',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-admin',
    slug: 'users-and-permissions',
    title: 'User Access, Roles & Permissions Governance',
    summary: 'Manage members, configure roles (Owner, Admin, Member), set up role inheritance, and manage permission overrides safely.',
    difficulty: 'Admin',
    estimatedMinutes: 6,
    requiredPermissions: ['tenant.roles.manage', 'tenant.members.manage'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'up-1',
        type: 'paragraph',
        title: 'Role-Based Access Control (RBAC)',
        lead: 'The portal enforces strict separation of duties, ensuring every staff member has exactly the access needed to perform their job without unnecessary privileges.',
        body: 'Every organisation includes three built-in system roles: Tenant Owner (full administrative ownership), Tenant Administrator (day-to-day bot and member manager), and Member (standard user).'
      },
      {
        id: 'up-shot1',
        type: 'screenshot',
        screenshotId: '03-members',
        caption: 'Figure 10.1: The Members directory displaying active memberships, assigned roles, and join dates.'
      },
      {
        id: 'up-shot2',
        type: 'screenshot',
        screenshotId: '04-roles-tab1-roles',
        caption: 'Figure 10.3: The Roles tab listing Tenant Owner (Rank 1000), Tenant Administrator (500), and Member (10).'
      },
      {
        id: 'up-shot3',
        type: 'screenshot',
        screenshotId: '04-roles-tab3-overrides',
        caption: 'Figure 10.5: Permission Overrides tab allowing granular grant or deny exceptions with mandatory audit reasons.'
      },
      {
        id: 'up-table',
        type: 'table',
        title: 'Core Permission Reference',
        table: {
          headers: ['Permission Code', 'What It Allows', 'Risk Level'],
          rows: [
            ['tenant.conversations.create', 'Ask questions from the portal tester', 'Low'],
            ['tenant.conversations.view', 'Read all conversations in full, including visitor chats', 'High'],
            ['tenant.conversations.view_all', 'See every team handoff queue, even unassigned teams', 'High'],
            ['tenant.documents.upload', 'Add documents and web pages; adjust bot settings', 'Low'],
            ['tenant.knowledge_bases.manage', 'Modify or delete any knowledge base', 'Medium'],
            ['tenant.roles.manage', 'Create roles and assign permissions to members', 'High'],
            ['tenant.members.manage', 'Suspend, reactivate, or revoke memberships', 'Medium']
          ]
        }
      },
      {
        id: 'up-callout',
        type: 'callout',
        callout: {
          type: 'best',
          title: 'Security Best Practice',
          content: 'Always apply the principle of least privilege. When an employee leaves the company, revoke their membership on their final day to immediately terminate all active sessions.'
        }
      }
    ]
  },
  {
    id: 'art-settings-account',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-admin',
    slug: 'settings-and-identity',
    title: 'Account Settings & Two-Step Sign-In (MFA)',
    summary: 'Manage your personal profile, update password, enroll authenticator apps (MFA), and terminate remote sessions.',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    requiredPermissions: ['user.identity.manage'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'st-1',
        type: 'paragraph',
        title: 'Protecting Your Administrator Identity',
        lead: 'Your administrator account has access to organizational knowledge and visitor conversations. Securing it with multi-factor authentication (MFA) is essential.',
        body: 'Under My Identity, you can review your last sign-in timestamp, update your password, link social logins, enroll an authenticator app, or invalidate all active sessions immediately.'
      },
      {
        id: 'st-shot1',
        type: 'screenshot',
        screenshotId: '10-account-full',
        caption: 'Figure 11.1: The My Identity page showing Profile, Password, Multi-factor authentication, and Sessions.'
      },
      {
        id: 'st-mfa-steps',
        type: 'steps',
        title: 'How to Enroll Multi-Factor Authentication',
        steps: [
          { stepNumber: 1, title: 'Open My Identity', instruction: 'Click "My identity" in the left sidebar menu.' },
          { stepNumber: 2, title: 'Click Enroll', instruction: 'In the Multi-factor authentication panel, click "Enroll authenticator app".' },
          { stepNumber: 3, title: 'Scan QR code', instruction: 'Open Google Authenticator, Microsoft Authenticator, or Apple Passwords on your phone and scan the displayed QR code.' },
          { stepNumber: 4, title: 'Verify 6-digit code', instruction: 'Enter the 6-digit code generated by the app to finalize enrollment.' }
        ]
      }
    ]
  },
  {
    id: 'art-operations-checklist',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-ref',
    slug: 'operations-checklist',
    title: 'Tenant Admin Operations Checklist',
    summary: 'Daily, weekly, and monthly maintenance routines that keep your chatbot accurate, your content updated, and your users satisfied.',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    requiredPermissions: ['tenant.dashboard.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'op-1',
        type: 'paragraph',
        title: 'Structured Operational Cadence',
        lead: 'Running an outstanding AI Assistant does not take hours of technical maintenance — just 3 to 5 minutes of focused daily habits.',
        body: 'Follow this checklist to proactively resolve customer questions, improve answering satisfaction, and ensure smooth handoffs to human staff. Progress is automatically saved in your browser.'
      },
      {
        id: 'op-callout',
        type: 'callout',
        callout: {
          type: 'info',
          title: 'Interactive Checklist',
          content: 'Use the interactive operations tool tab in this documentation portal to tick tasks off as you complete them each morning!'
        }
      }
    ]
  },
  {
    id: 'art-troubleshooting',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-ref',
    slug: 'troubleshooting-guide',
    title: 'Comprehensive Troubleshooting Guide',
    summary: 'Step-by-step diagnostic solutions for missing answers, embed issues, document failures, handoff delays, and plan limits.',
    difficulty: 'Intermediate',
    estimatedMinutes: 8,
    requiredPermissions: ['tenant.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'tb-1',
        type: 'paragraph',
        title: 'Diagnosing Common Scenarios',
        lead: 'When something does not behave as expected, this guide provides the exact causes and immediate step-by-step remedies.',
        body: 'Use the dedicated Troubleshooting tool in this portal to filter by area (Answers, Website, Content, Handoff, Usage, Access) and find fast solutions.'
      }
    ]
  },
  {
    id: 'art-glossary',
    softwareId: 'falgoon-admin',
    categoryId: 'cat-ref',
    slug: 'glossary-jargon-buster',
    title: 'Glossary & Plain-English Jargon Buster',
    summary: 'Clear, non-technical definitions for all terms used across the portal: Tenant, Knowledge Base, Retrieval, Citation, Token, Handoff, and MFA.',
    difficulty: 'Beginner',
    estimatedMinutes: 4,
    requiredPermissions: ['tenant.view'],
    versionTag: 'v1.0',
    status: 'published',
    lastUpdated: '30 Sep 2026',
    blocks: [
      {
        id: 'gl-1',
        type: 'paragraph',
        title: 'Plain-English Terminology',
        lead: 'We believe enterprise software should be easy to understand for everyone, not just programmers or IT specialists.',
        body: 'Review these fundamental concepts to understand how the AI Assistant and Multi-Tenant portal work together.'
      }
    ]
  }
];
