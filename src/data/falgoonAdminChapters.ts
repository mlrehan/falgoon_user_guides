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
    "id": "art-welcome",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-start",
    "slug": "welcome",
    "title": "Welcome to the AI Assistant Portal",
    "summary": "What the AI Assistant Portal is, how your organisation uses it, and what you are responsible for as its administrator.",
    "difficulty": "Beginner",
    "estimatedMinutes": 5,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "welcome-blk-1",
        "type": "paragraph",
        "lead": "What the AI Assistant Portal is, how your organisation uses it, and what you are responsible for as its administrator."
      },
      {
        "id": "welcome-blk-2",
        "type": "paragraph",
        "title": "What is the AI Assistant Portal?",
        "body": "The AI Assistant Portal is where your organisation runs its own AI chatbot : a helpful assistant that sits on your website and answers visitors' questions around the clock, in plain language.\n\nUnlike a general-purpose AI, your chatbot answers only from information you give it — your documents and your web pages. Every factual answer shows which of your sources it came from, so you and your visitors can check it. If your content doesn't cover a question, the chatbot says so honestly instead of guessing, and the question appears on your dashboard so you can fill the gap.\n\nYour organisation is one tenant of the portal. Your content, conversations and settings are completely separate from every other organisation's: no other tenant can see your data, and your chatbot never uses theirs."
      },
      {
        "id": "welcome-blk-3",
        "type": "steps",
        "title": "How it works, in four steps",
        "steps": [
          {
            "stepNumber": 1,
            "title": "You teach it.",
            "instruction": "Upload documents (PDF, Word, Excel and more) or point it at pages of your website. The portal reads them and makes them searchable."
          },
          {
            "stepNumber": 2,
            "title": "You shape it.",
            "instruction": "Give it a name, a role, a tone of voice, and a list of topics it must avoid."
          },
          {
            "stepNumber": 3,
            "title": "You publish it.",
            "instruction": "Paste one line of code into your website, and the chat bubble appears for your visitors."
          },
          {
            "stepNumber": 4,
            "title": "You look after it.",
            "instruction": "Watch the dashboard, read conversations, act on ratings and unanswered questions, and keep your content up to date."
          }
        ]
      },
      {
        "id": "welcome-blk-4",
        "type": "paragraph",
        "title": "Benefits for your organisation",
        "body": "Visitors get accurate answers at any hour, without waiting for your team.\n\nAnswers come from your own approved content, with sources shown — never invented.\n\nVisitors can ask for a colleague; the conversation passes to your team's Inbox.\n\nThe dashboard shows exactly which questions your content doesn't answer yet."
      },
      {
        "id": "welcome-blk-5",
        "type": "paragraph",
        "title": "Your responsibilities as Tenant Administrator",
        "lead": "The Tenant Administrator controls what the AI assistant knows, monitors its conversations, manages who can use the portal, and makes sure visitors receive accurate answers."
      },
      {
        "id": "welcome-blk-6",
        "type": "table",
        "title": "Your responsibilities as Tenant Administrator",
        "table": {
          "headers": [
            "Area",
            "What you do",
            "Where"
          ],
          "rows": [
            [
              "Knowledge",
              "Add, update and remove the documents and web pages the chatbot answers from.",
              "Knowledge bases"
            ],
            [
              "Chatbot behaviour",
              "Set its name, greeting, role, restrictions, tone and when it hands over to a person.",
              "AI Chatbot"
            ],
            [
              "Quality",
              "Test answers, review ratings and fix unanswered questions.",
              "Testing , Answer feedback"
            ],
            [
              "Conversations",
              "Review what visitors ask and make sure handed-over conversations get a reply.",
              "Conversations , Inbox"
            ],
            [
              "People & access",
              "Decide who in your organisation can use the portal, and what they can do.",
              "Members, Roles & permissions"
            ],
            [
              "Usage",
              "Keep an eye on daily questions and your monthly AI allowance.",
              "Dashboard"
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "art-first-day",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-start",
    "slug": "first-day",
    "title": "Your First Day (45-Minute Quick-Start)",
    "summary": "Five practical steps from first sign-in to a chatbot ready for visitors, plus what can safely wait.",
    "difficulty": "Beginner",
    "estimatedMinutes": 8,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "first-day-blk-1",
        "type": "paragraph",
        "lead": "Five steps, about an hour in total, from your first sign-in to a chatbot you're happy to show parents. Everything else in this guide can wait."
      },
      {
        "id": "first-day-blk-2",
        "type": "steps",
        "title": "Step-by-Step Instructions",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Sign in and secure your account",
            "instruction": "(10 minutes) . Sign in, then turn on two-step sign-in in My identity . How to sign in"
          },
          {
            "stepNumber": 2,
            "title": "Check what your chatbot knows",
            "instruction": "(15 minutes) . Open Knowledge bases → Documents . Make sure the documents your visitors need are there and marked Ready : fees and funding, opening hours and closures, admissions and visits, and your main policies. Upload anything missing."
          },
          {
            "stepNumber": 3,
            "title": "Tell it about your organisation",
            "instruction": "(10 minutes) . On the AI Chatbot page, fill in the Company tab and read the Behaviour tab. The defaults are sensible; add only what's specific to you."
          },
          {
            "stepNumber": 4,
            "title": "Ask it your ten most common questions",
            "instruction": "(15 minutes) . Use Ask in the portal, then try the same questions on your website in a private window. Fix anything it gets wrong in your documents, not in its settings. Improving answers"
          },
          {
            "stepNumber": 5,
            "title": "Decide who helps visitors",
            "instruction": "(10 minutes) . Create a team in the Inbox and add the people who will answer when a parent asks to speak to someone."
          }
        ]
      },
      {
        "id": "first-day-blk-3",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Then go live When those five steps are done, the dashboard's setup checklist disappears. Follow the first-week plan to launch with confidence."
        }
      },
      {
        "id": "first-day-blk-4",
        "type": "paragraph",
        "title": "What can wait",
        "body": "• Roles, hierarchy and overrides. The built-in roles suit most organisations. See Roles when you need something different.\n• Tone, quick replies and the chatbot's name. The defaults work; adjust them once you've seen real conversations.\n• Time zone and retention. Check them once ( Handoff & limits ); you rarely need to change them again."
      },
      {
        "id": "first-day-blk-5",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Stuck? Press / to search this guide, or look in Troubleshooting . Problems are listed by what you see, not by error code."
        }
      }
    ]
  },
  {
    "id": "art-getting-started",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-start",
    "slug": "getting-started",
    "title": "Getting Started: Sign In & Navigation",
    "summary": "How to sign in, complete first-time security setup, navigate portal zones, and apply security best practices.",
    "difficulty": "Beginner",
    "estimatedMinutes": 6,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "getting-started-blk-1",
        "type": "paragraph",
        "lead": "Sign in, find your way around, and secure your account."
      },
      {
        "id": "getting-started-blk-2",
        "type": "screenshot",
        "screenshotId": "01-login",
        "imageUrl": "/screenshots/01-login.webp",
        "caption": "Figure 4.1 The sign-in page."
      },
      {
        "id": "getting-started-blk-3",
        "type": "steps",
        "title": "Signing in",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Open the portal address",
            "instruction": "in your web browser. Any modern browser works: Chrome, Edge, Firefox or Safari."
          },
          {
            "stepNumber": 2,
            "title": "Enter your email address",
            "instruction": "in the Email box — the one your administrator registered for you."
          },
          {
            "stepNumber": 3,
            "title": "Enter your password",
            "instruction": "in the Password box."
          },
          {
            "stepNumber": 4,
            "title": "Click Sign in .",
            "instruction": "If you have turned on an authenticator app (see My identity ), you'll be asked for the six-digit code it shows."
          }
        ]
      },
      {
        "id": "getting-started-blk-4",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Signing in with Google or Facebook The Google and Facebook buttons work only if your provider has enabled them and your social account uses the same email address as your portal account. If you're not sure, use your email and password."
        }
      },
      {
        "id": "getting-started-blk-5",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Forgot your password? Click Forgot password? on the sign-in page and follow the steps. If the reset email doesn't arrive within a few minutes (check your spam folder), contact your platform administrator — they can help you get back in."
        }
      },
      {
        "id": "getting-started-blk-6",
        "type": "paragraph",
        "title": "Your first sign-in",
        "body": "After signing in, you land on your organisation's Dashboard . If you belong to more than one organisation, use the organisation switcher at the top right to move between them. Everything you see — content, conversations, members — always belongs to the organisation shown there."
      },
      {
        "id": "getting-started-blk-7",
        "type": "screenshot",
        "screenshotId": "02-tenant-switcher",
        "imageUrl": "/screenshots/02-tenant-switcher.webp",
        "caption": "Figure 4.2 The organisation switcher (top right) shows which organisation you are working in."
      },
      {
        "id": "getting-started-blk-8",
        "type": "paragraph",
        "title": "Your first sign-in",
        "body": "We recommend doing these five things in your first session:"
      },
      {
        "id": "getting-started-blk-9",
        "type": "steps",
        "title": "Your first sign-in",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Secure your account.",
            "instruction": "Turn on an authenticator app in My identity ."
          },
          {
            "stepNumber": 2,
            "title": "Follow the setup checklist",
            "instruction": "at the top of the Dashboard . It shows exactly what is left to do. Your first day walks you through it."
          },
          {
            "stepNumber": 3,
            "title": "Check what your chatbot knows",
            "instruction": "in Knowledge bases , and add anything missing."
          },
          {
            "stepNumber": 4,
            "title": "Describe your organisation",
            "instruction": "on the Company and Behaviour tabs of the AI Chatbot page."
          },
          {
            "stepNumber": 5,
            "title": "Test it",
            "instruction": "with the questions your customers ask most (see Testing your chatbot )."
          }
        ]
      },
      {
        "id": "getting-started-blk-10",
        "type": "paragraph",
        "title": "Finding your way around",
        "body": "The dark menu on the left takes you to every part of the portal. Click the panel icon at the very top of the page to hide or show it."
      },
      {
        "id": "getting-started-blk-11",
        "type": "table",
        "title": "Finding your way around",
        "table": {
          "headers": [
            "Menu item",
            "What it's for"
          ],
          "rows": [
            [
              "Dashboard",
              "How your chatbot is doing today, and anything that needs you. Chapter 5"
            ],
            [
              "Members",
              "The people in your organisation who can use the portal. Chapter 11"
            ],
            [
              "Roles & permissions",
              "What each person is allowed to do. Chapter 11"
            ],
            [
              "AI Chatbot",
              "Your chatbot's name, behaviour, tone, website installation and limits. Chapter 6"
            ],
            [
              "Inbox",
              "Conversations where a visitor asked to speak to a person, and your teams. Chapter 9"
            ],
            [
              "Knowledge bases",
              "The documents and web pages your chatbot answers from. Chapter 7"
            ],
            [
              "Conversations",
              "The full history of chats with your chatbot. Chapter 9"
            ],
            [
              "Answer feedback",
              "Every 👍 and 👎 visitors and staff gave to answers. Chapter 9"
            ],
            [
              "My identity",
              "Your own account: password, two-step sign-in and sessions. Chapter 12"
            ],
            [
              "Help → User guide",
              "This guide. It opens in a new tab; the link icon beside it copies a link you can email to anyone. Sharing this guide"
            ],
            [
              "Data analysis",
              "If your provider has set one up, a link to an external analytics tool. It opens in a new tab."
            ]
          ]
        }
      },
      {
        "id": "getting-started-blk-12",
        "type": "screenshot",
        "screenshotId": "12-help-menu",
        "imageUrl": "/screenshots/12-help-menu.webp",
        "caption": "Figure 4.3 The menu. Help → User guide opens this guide; the link icon copies a shareable link."
      },
      {
        "id": "getting-started-blk-13",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Some menu items may be missing You only see the pages your role allows. If a colleague can see a page you can't, ask your organisation's owner to review your role (see Roles )."
        }
      },
      {
        "id": "getting-started-blk-14",
        "type": "paragraph",
        "title": "Security recommendations",
        "body": "• Use a long, unique password — at least 12 characters, and never one you use elsewhere.\n• Turn on two-step sign-in with an authenticator app ( My identity ).\n• Never share your account. Give each colleague their own membership instead ( Members ).\n• Sign out on shared computers, and use Sign out everywhere if you think your password may have been seen.\n• Remove access promptly when someone leaves your organisation ( Revoke access )."
      }
    ]
  },
  {
    "id": "art-dashboard",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-bot",
    "slug": "dashboard",
    "title": "Tenant Admin Dashboard",
    "summary": "Master the setup checklist, needs attention alerts, four key figures, activity chart, unanswered questions, and knowledge summary.",
    "difficulty": "Beginner",
    "estimatedMinutes": 7,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "dashboard-blk-1",
        "type": "paragraph",
        "lead": "Your home page: how the chatbot is doing, and anything that needs your attention."
      },
      {
        "id": "dashboard-blk-2",
        "type": "screenshot",
        "screenshotId": "02-dashboard-full",
        "imageUrl": "/screenshots/02-dashboard-full.webp",
        "caption": "Figure 5.1 The complete dashboard, top to bottom."
      },
      {
        "id": "dashboard-blk-3",
        "type": "paragraph",
        "title": "Get your chatbot ready (setup checklist)",
        "body": "Until setup is complete, a checklist sits at the top of the dashboard. Each finished step is ticked and crossed through; click any unfinished step to go straight to the page that completes it."
      },
      {
        "id": "dashboard-blk-4",
        "type": "table",
        "title": "Get your chatbot ready (setup checklist)",
        "table": {
          "headers": [
            "Step",
            "What \"done\" means"
          ],
          "rows": [
            [
              "1. Teach your chatbot",
              "At least one document or web page is ready to use. See Knowledge bases ."
            ],
            [
              "2. Tell it about your organisation",
              "You've described your organisation on the chatbot's Company tab."
            ],
            [
              "3. Put it on your website",
              "A real page on your website has loaded the chatbot. See Putting it on your website ."
            ],
            [
              "4. Choose who helps visitors",
              "A team exists with at least one person in it, so visitors can be handed to a colleague. See Teams ."
            ]
          ]
        }
      },
      {
        "id": "dashboard-blk-5",
        "type": "paragraph",
        "title": "Needs attention",
        "body": "This amber panel lists problems that affect your visitors, most important first. When there's nothing to fix it tells you everything is fine. Typical items:\n\n• \"Your chatbot is hidden on <website>\" — a page tried to show your chatbot, but that website address isn't in your allowed list. If it's your site, allow it (see Putting it on your website ).\n• \"1 team with no one in it\" — visitors aren't offered that team until you add someone to it (see Teams ).\n• Usage warnings — you're approaching today's question limit or this month's AI allowance (see Usage and allowances ).\n• Documents that couldn't be read — see Processing status ."
      },
      {
        "id": "dashboard-blk-6",
        "type": "paragraph",
        "title": "Key figures",
        "body": "Four cards summarise recent activity. Under each number, a small line compares it with the previous period, and a mini chart shows the trend."
      },
      {
        "id": "dashboard-blk-7",
        "type": "screenshot",
        "screenshotId": "02-dashboard",
        "imageUrl": "/screenshots/02-dashboard.webp",
        "caption": "Figure 5.2 Setup checklist, Needs attention and the four key figures."
      },
      {
        "id": "dashboard-blk-8",
        "type": "table",
        "title": "Key figures",
        "table": {
          "headers": [
            "Figure",
            "What it means",
            "What to look for"
          ],
          "rows": [
            [
              "Questions asked · 7 days",
              "How many questions visitors asked your chatbot in the last 7 days.",
              "Growth means your chatbot is being used. A sudden drop may mean it was removed from your website."
            ],
            [
              "Conversations · 7 days",
              "How many separate chats started in the last 7 days. One conversation can contain several questions.",
              "Compare with questions: many questions per conversation usually means visitors are engaged."
            ],
            [
              "Passed to your team · 7 days",
              "How many conversations were handed to a person, plus how many are with your team right now.",
              "A rising number can mean your content is missing something visitors need."
            ],
            [
              "Helpful answers · 30 days",
              "Of all the 👍 and 👎 ratings in the last 30 days, the percentage that were 👍.",
              "Read the 👎 ratings in Answer feedback to see what went wrong."
            ]
          ]
        }
      },
      {
        "id": "dashboard-blk-9",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Looking for token usage, AI cost or user activity? Token usage appears as AI usage this month on the chatbot card below, as a percentage of your allowance. AI cost isn't shown in money, because your AI usage is included in your plan (see AI cost ). Visitor activity is shown by the questions and conversations figures."
        }
      },
      {
        "id": "dashboard-blk-10",
        "type": "paragraph",
        "title": "Key figures",
        "body": "Shows questions and new conversations for each of the last 14 days. Hover over (or tap) a day to see its exact numbers."
      },
      {
        "id": "dashboard-blk-11",
        "type": "table",
        "title": "Your chatbot card",
        "table": {
          "headers": [
            "Item",
            "What it means"
          ],
          "rows": [
            [
              "On / Off",
              "Whether the AI is currently answering visitors (see Turning it on or off )."
            ],
            [
              "Last opened on…",
              "The website where your chatbot was last loaded, and when. Confirms it's live on your site."
            ],
            [
              "Questions answered today",
              "Today's AI answers against your daily limit, for example 14 of 50 . When the limit is reached, visitors are told to try again later or to speak to a person."
            ],
            [
              "AI usage this month",
              "How much of this month's AI allowance you've used, as a percentage. Longer answers use more."
            ],
            [
              "Change how it behaves",
              "A shortcut to the AI Chatbot page."
            ]
          ]
        }
      },
      {
        "id": "dashboard-blk-12",
        "type": "paragraph",
        "title": "Questions your chatbot couldn't answer",
        "body": "This is the most useful list on the dashboard. It shows questions from the last 30 days that your content didn't answer, most frequently asked first, with how often each was asked."
      },
      {
        "id": "dashboard-blk-13",
        "type": "screenshot",
        "screenshotId": "02-dashboard-unanswered",
        "imageUrl": "/screenshots/02-dashboard-unanswered.webp",
        "caption": "Figure 5.3 Questions your chatbot couldn't answer, with how often each was asked."
      },
      {
        "id": "dashboard-blk-14",
        "type": "steps",
        "title": "Questions your chatbot couldn't answer",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Read the top few questions.",
            "instruction": "Ask yourself: should our chatbot be able to answer this?"
          },
          {
            "stepNumber": 2,
            "title": "If yes, add the answer",
            "instruction": "to a document or web page, and add it to your knowledge base ( Add to what your chatbot knows )."
          },
          {
            "stepNumber": 3,
            "title": "Test the question again",
            "instruction": "in a new chat (see Testing ). Once it's answered from your sources, it stops appearing here."
          },
          {
            "stepNumber": 4,
            "title": "If no",
            "instruction": "(for example, \"What is the capital of Australia?\"), you don't need to do anything: the chatbot correctly declined to answer from general knowledge."
          }
        ]
      },
      {
        "id": "dashboard-blk-15",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "What isn't listed here Greetings, small talk and questions about the chatbot itself (\"who are you?\") are left out, and so are questions it declined because of your own Avoid rules, since those were refused on purpose."
        }
      },
      {
        "id": "dashboard-blk-16",
        "type": "paragraph",
        "title": "What your chatbot knows",
        "body": "A summary of your content: how many documents are ready to use , how many are web pages and files , and how many couldn't be read . It also shows how many tokens reading your documents used this month, which doesn't count against your AI allowance . Click Manage knowledge to open Knowledge bases ."
      }
    ]
  },
  {
    "id": "art-chatbot",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-bot",
    "slug": "ai-chatbot",
    "title": "Your AI Chatbot Configuration",
    "summary": "Configure identity, role & guardrails, tone, company profile, quick replies, handoff limits, and website embed snippet.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 12,
    "requiredPermissions": [
      "chatbot.view",
      "chatbot.manage"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "chatbot-blk-1",
        "type": "paragraph",
        "lead": "Decide who your chatbot is, how it behaves, where it appears, and when it fetches a colleague."
      },
      {
        "id": "chatbot-blk-2",
        "type": "screenshot",
        "screenshotId": "05-chatbot",
        "imageUrl": "/screenshots/05-chatbot.webp",
        "caption": "Figure 6.1 The AI Chatbot page. The preview on the right shows how your chatbot will look."
      },
      {
        "id": "chatbot-blk-3",
        "type": "paragraph",
        "title": "Who controls what",
        "body": "Your chatbot is shaped by two parties. Knowing who controls what saves time when something needs changing.\n\nName, title, avatar and greeting · role and topics to avoid · personality and answer length · company description · quick replies and location · handoff to your team · your own daily limit · time zone · how long conversations are kept · what it knows.\n\nThe AI model and how it's powered · the core safety rules (answering only from your sources, citations, privacy) · your assistant type (the kind of organisation it speaks for) · your plan limits (knowledge bases, chatbots, daily and monthly usage)."
      },
      {
        "id": "chatbot-blk-4",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Why there's no \"AI model\" setting The AI model, its version and its safety rules are chosen and maintained by your platform provider, so every organisation benefits from improvements without having to reconfigure anything. Your settings sit on top of those rules: they can make your chatbot more careful, but can't switch off grounding, citations or privacy protections."
        }
      },
      {
        "id": "chatbot-blk-5",
        "type": "paragraph",
        "title": "Turning your chatbot on or off",
        "body": "The AI Chatbot switch at the top of the page turns the AI on or off for all your visitors, immediately.\n\n• On — the AI answers visitors' questions.\n• Off — visitors go straight to a person. The chat bubble still works and conversations still arrive in your Inbox , but no AI answers are given and no allowance is used."
      },
      {
        "id": "chatbot-blk-6",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Before turning the AI off Make sure a team with people in it is ready to answer (see Teams ), otherwise visitors will be waiting for a reply."
        }
      },
      {
        "id": "chatbot-blk-7",
        "type": "paragraph",
        "title": "Putting your chatbot on your website",
        "body": "The On your website card shows whether your chatbot is really on your site and gives you the code to add it."
      },
      {
        "id": "chatbot-blk-8",
        "type": "table",
        "title": "Putting your chatbot on your website",
        "table": {
          "headers": [
            "Item",
            "What it means"
          ],
          "rows": [
            [
              "Status badge",
              "Installed (a page loaded it recently) · Not seen recently · Not installed · Turned off . Click Check again to refresh."
            ],
            [
              "Where it can appear",
              "The website addresses allowed to show your chatbot, and its daily question limit. For security, it stays hidden on any other website. Click Change to edit the list."
            ],
            [
              "Add this to your website",
              "One line of code to paste into your website. It isn't secret."
            ],
            [
              "Copy code",
              "Copies the line so you can paste it."
            ],
            [
              "Copy instructions for your web developer",
              "Copies ready-written instructions you can email to whoever looks after your website."
            ],
            [
              "Hide from website",
              "Stops the chatbot appearing on your website, without deleting anything."
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-9",
        "type": "steps",
        "title": "Putting your chatbot on your website",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check the allowed address.",
            "instruction": "Under Where it can appear , make sure your website's address is listed (for example https://www.yourcompany.com ). If not, click Change and add it."
          },
          {
            "stepNumber": 2,
            "title": "Copy the code.",
            "instruction": "Click Copy code , or Copy instructions for your web developer if someone else manages your site."
          },
          {
            "stepNumber": 3,
            "title": "Paste it into every page",
            "instruction": "just before the closing </body> tag. Most website builders have a \"custom code\" or \"footer scripts\" setting for this."
          },
          {
            "stepNumber": 4,
            "title": "Open your website",
            "instruction": "and look for the round chat button in the bottom-right corner."
          },
          {
            "stepNumber": 5,
            "title": "Back in the portal, click Check again .",
            "instruction": "The status changes to Installed , and the dashboard's setup step 3 is ticked."
          }
        ]
      },
      {
        "id": "chatbot-blk-10",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "\"A page on … tried to show your chatbot\" If this appears, a website not in your list tried to load your chatbot and it stayed hidden there. If that address is yours (for example a new domain or a staging site), click Allow <address> . If you don't recognise it, leave it: your chatbot stays hidden there."
        }
      },
      {
        "id": "chatbot-blk-11",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Changes reach your website within an hour Visitors' browsers keep a copy of the chatbot for up to an hour. Also, the chat window remembers a visitor's ongoing conversation. To see a change straight away, open your website in a private (incognito) window."
        }
      },
      {
        "id": "chatbot-blk-12",
        "type": "paragraph",
        "title": "Identity tab",
        "body": "How your chatbot introduces itself on your website."
      },
      {
        "id": "chatbot-blk-13",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab1-identity",
        "imageUrl": "/screenshots/05-chatbot-tab1-identity.webp",
        "caption": "Figure 6.2 The Identity tab."
      },
      {
        "id": "chatbot-blk-14",
        "type": "table",
        "title": "Identity tab",
        "table": {
          "headers": [
            "Field",
            "Purpose",
            "Recommended setting"
          ],
          "rows": [
            [
              "Chatbot name",
              "The name shown at the top of the chat window, for example \"Bramble\" or \"Nursery Helper\".",
              "Short and friendly. Say it's an assistant, so visitors know they're talking to an AI."
            ],
            [
              "Chatbot title",
              "A short line under the name describing what it helps with.",
              "Three to five words, such as \"Places, fees & sessions\"."
            ],
            [
              "Avatar",
              "The small picture next to the name: Assistant, Bear, Star or Leaf.",
              "Pick the one that best suits your brand. Images are built in, for your visitors' privacy."
            ],
            [
              "Greeting",
              "The first message visitors see when they open the chat.",
              "One welcoming sentence and a hint of what to ask, e.g. \"Hello! Ask me about places, fees, sessions or a typical day at the nursery.\""
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-15",
        "type": "paragraph",
        "title": "Identity tab",
        "body": "Click Save identity . The Preview panel on the right shows the result straight away."
      },
      {
        "id": "chatbot-blk-16",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "About the preview The preview is illustrative: its sample conversation isn't generated by the AI (that would use your allowance every time you changed a setting). To see real answers, test your chatbot ."
        }
      },
      {
        "id": "chatbot-blk-17",
        "type": "paragraph",
        "title": "Behaviour tab",
        "body": "Your chatbot's job description: what it's for, and what it must never do."
      },
      {
        "id": "chatbot-blk-18",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab2-behaviour",
        "imageUrl": "/screenshots/05-chatbot-tab2-behaviour.webp",
        "caption": "Figure 6.3 The Behaviour tab."
      },
      {
        "id": "chatbot-blk-19",
        "type": "table",
        "title": "Behaviour tab",
        "table": {
          "headers": [
            "Field",
            "Purpose",
            "Recommended setting"
          ],
          "rows": [
            [
              "Role",
              "What your chatbot helps with, and who it helps. It starts pre-filled with a sensible default for your type of organisation.",
              "Keep the default, then add the specific topics your visitors ask about (for example \"places, fees, funded hours, sessions and how to book a visit\")."
            ],
            [
              "Avoid",
              "Topics and actions it must refuse or pass to a person.",
              "List anything your staff must decide, e.g. \"Never promise a place or confirm a start date — direct parents to the office.\""
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-20",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Writing good instructions Write in plain sentences, as you would brief a new receptionist. Be specific: \"Don't discuss staff salaries\" works better than \"Be careful with sensitive topics\". Don't put facts here (prices, dates, phone numbers). Put facts in your knowledge base , where they can be cited and kept up to date."
        }
      },
      {
        "id": "chatbot-blk-21",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "These rules can only add caution Your Role and Avoid instructions are added to the platform's own rules; they never replace them. So your chatbot always answers only from your sources and always shows where each answer came from, whatever you write here."
        }
      },
      {
        "id": "chatbot-blk-22",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab3-tone-style",
        "imageUrl": "/screenshots/05-chatbot-tab3-tone-style.webp",
        "caption": "Figure 6.4 The Tone & style tab."
      },
      {
        "id": "chatbot-blk-23",
        "type": "table",
        "title": "Tone & style tab",
        "table": {
          "headers": [
            "Setting",
            "Options",
            "Recommended setting"
          ],
          "rows": [
            [
              "Personality",
              "Neutral — plain and even · Friendly — warm and conversational · Reassuring — calm and supportive · Professional — formal, like written correspondence.",
              "Friendly for most public websites; Professional for business customers; Reassuring if visitors are often anxious."
            ],
            [
              "Response length",
              "Concise — two or three sentences · Balanced — a short paragraph with key detail · Detailed — thorough, with bullet points where useful.",
              "Balanced . Choose Detailed if visitors often ask for lists or comparisons, such as every room's fees side by side."
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-24",
        "type": "paragraph",
        "title": "Tone & style tab",
        "body": "These are fixed options rather than free text on purpose, so a tone setting can never change your chatbot's rules. Click Save tone & style ."
      },
      {
        "id": "chatbot-blk-25",
        "type": "paragraph",
        "title": "Company tab",
        "body": "Background your chatbot draws on to understand who it speaks for."
      },
      {
        "id": "chatbot-blk-26",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab4-company",
        "imageUrl": "/screenshots/05-chatbot-tab4-company.webp",
        "caption": "Figure 6.5 The Company tab, including the assistant type chosen by your provider."
      },
      {
        "id": "chatbot-blk-27",
        "type": "table",
        "title": "Company tab",
        "table": {
          "headers": [
            "Field",
            "Purpose",
            "Recommended setting"
          ],
          "rows": [
            [
              "Assistant type (read-only)",
              "The kind of organisation your chatbot answers for, for example UK nursery / early years or Education & training provider . It sets which industry-specific rules apply and the defaults you start from.",
              "Set by your platform provider. If it doesn't match your organisation, ask them to change it — see troubleshooting ."
            ],
            [
              "Company name",
              "What the chatbot calls your organisation. It doesn't rename your account.",
              "Your public trading name."
            ],
            [
              "Industry",
              "Your sector, in a few words.",
              "Keep the default unless it's clearly wrong."
            ],
            [
              "Company description",
              "A short description of your organisation (up to 2,000 characters), used as background.",
              "Two to four short paragraphs: who you are, who you serve, what you offer. Leave facts like prices to your knowledge base."
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-28",
        "type": "paragraph",
        "title": "Company tab",
        "body": "Click Save company context . Saving this completes setup step 2 on the dashboard."
      },
      {
        "id": "chatbot-blk-29",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab5-reply-experience",
        "imageUrl": "/screenshots/05-chatbot-tab5-reply-experience.webp",
        "caption": "Figure 6.6 The Reply experience tab."
      },
      {
        "id": "chatbot-blk-30",
        "type": "table",
        "title": "Reply experience tab",
        "table": {
          "headers": [
            "Setting",
            "Purpose",
            "Recommended setting"
          ],
          "rows": [
            [
              "Quick reply suggestions",
              "Shows buttons with common questions (for example \"Admissions\", \"Fees & funding\", \"Opening hours\") so visitors can start with one click. \"Speak to a person\" is added only when a transfer is really possible.",
              "On. Visitors ask more questions when they have a starting point."
            ],
            [
              "Use visitor location",
              "Lets the chatbot use a visitor's approximate country or city when relevant. Precise location is never collected.",
              "On only if location matters to your answers (for example regional prices). Otherwise off."
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-31",
        "type": "paragraph",
        "title": "Handoff & limits tab",
        "body": "When your chatbot should fetch a colleague, how many AI answers it may give each day, and how long conversations are kept."
      },
      {
        "id": "chatbot-blk-32",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab6-handoff-limits",
        "imageUrl": "/screenshots/05-chatbot-tab6-handoff-limits.webp",
        "caption": "Figure 6.7 The Handoff & limits tab."
      },
      {
        "id": "chatbot-blk-33",
        "type": "table",
        "title": "Handoff & limits tab",
        "table": {
          "headers": [
            "Setting",
            "Purpose",
            "Recommended setting"
          ],
          "rows": [
            [
              "Allow transfer to a colleague",
              "Lets the chatbot offer a transfer to a person when a visitor asks, or when a question needs staff judgement.",
              "On , as long as someone checks the Inbox ."
            ],
            [
              "AI summary as an internal comment",
              "On transfer, writes a staff-only summary of the conversation so your colleague doesn't have to read it all. Visitors never see it.",
              "On if your team handles many transfers."
            ],
            [
              "AI answers unassigned conversations",
              "Lets the chatbot keep answering while a transferred conversation waits for a colleague. Once someone takes over, the AI stays quiet until handed back.",
              "On , so visitors aren't left waiting in silence."
            ],
            [
              "Teams available for transfer",
              "The teams visitors can choose between. Manage them in Inbox → Teams .",
              "At least one team with at least one person in it."
            ],
            [
              "Daily AI message limit",
              "Your own cap on AI answers per day. Leave blank to use your plan's maximum; a value above it is refused. Below the box you'll see the limit being enforced and how many were used today.",
              "Blank, unless you want to hold usage below your plan's maximum."
            ],
            [
              "Your day starts at midnight in",
              "The time zone your daily limit resets in. Use my time zone fills in your computer's time zone.",
              "Your organisation's local time zone, for example London (Europe) ."
            ],
            [
              "Keep conversation history for",
              "How long conversations (including what visitors wrote) are kept before they're deleted automatically.",
              "As short as your records policy allows; 30 days suits most organisations."
            ]
          ]
        }
      },
      {
        "id": "chatbot-blk-34",
        "type": "paragraph",
        "title": "Handoff & limits tab",
        "body": "Click Save handoff & limits ."
      },
      {
        "id": "chatbot-blk-35",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Deleted conversations can't be recovered Shortening the retention period deletes older conversations at the next automatic clean-up. Ratings and the audit trail are kept."
        }
      }
    ]
  },
  {
    "id": "art-knowledge-bases",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-bot",
    "slug": "knowledge-bases",
    "title": "Knowledge Base Management",
    "summary": "Create knowledge bases, upload PDFs and documents, crawl website pages, add written text, check processing status, and test search.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 14,
    "requiredPermissions": [
      "kb.view",
      "kb.manage"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "knowledge-blk-1",
        "type": "paragraph",
        "lead": "The most important part of running a good chatbot: giving it accurate, up-to-date content."
      },
      {
        "id": "knowledge-blk-2",
        "type": "paragraph",
        "title": "What is a knowledge base?",
        "lead": "The knowledge base contains the information your AI assistant uses to answer customer questions.",
        "body": "Think of it as a library you build for your chatbot. When a visitor asks a question, the chatbot searches your library, finds the most relevant passages, and writes an answer from them, showing numbered references to the pages it used. If the library doesn't contain the answer, the chatbot says so instead of guessing.\n\nFiles (PDF, Word, Excel, PowerPoint…) and web pages.\n\nReads each one, splits it into short passages, and makes them searchable.\n\nFinds the best passages for each question and answers from them, with sources."
      },
      {
        "id": "knowledge-blk-3",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Your content stays yours Each knowledge base is searched on its own and is never mixed with another organisation's content."
        }
      },
      {
        "id": "knowledge-blk-4",
        "type": "screenshot",
        "screenshotId": "07-kb-list",
        "imageUrl": "/screenshots/07-kb-list.webp",
        "caption": "Figure 7.1 The knowledge base list."
      },
      {
        "id": "knowledge-blk-5",
        "type": "table",
        "title": "The knowledge base list",
        "table": {
          "headers": [
            "Action",
            "What it does"
          ],
          "rows": [
            [
              "Documents",
              "Add, check and remove files and web pages. Upload documents"
            ],
            [
              "Ask",
              "Ask this knowledge base a question from the portal. Ask from the portal"
            ],
            [
              "Embed",
              "See the website chatbot that answers from this knowledge base, and its embed code. Putting it on your website"
            ],
            [
              "Test search",
              "See which pages the chatbot would use for a question, without generating an answer. Test search"
            ],
            [
              "Bin icon",
              "Delete the knowledge base. Delete a knowledge base"
            ]
          ]
        }
      },
      {
        "id": "knowledge-blk-6",
        "type": "screenshot",
        "screenshotId": "07-kb-embed",
        "imageUrl": "/screenshots/07-kb-embed.webp",
        "caption": "Figure 7.2 Embed shows the website chatbot that answers from this knowledge base, with Turn off , Edit and its embed code. Your plan sets how many website chatbots you can have."
      },
      {
        "id": "knowledge-blk-7",
        "type": "paragraph",
        "title": "Create a knowledge base",
        "body": "Most organisations need only one knowledge base. Create another if you want to keep a separate set of content, for example for a different website."
      },
      {
        "id": "knowledge-blk-8",
        "type": "screenshot",
        "screenshotId": "07-kb-new",
        "imageUrl": "/screenshots/07-kb-new.webp",
        "caption": "Figure 7.3 Creating a knowledge base."
      },
      {
        "id": "knowledge-blk-9",
        "type": "steps",
        "title": "Create a knowledge base",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Click New knowledge base",
            "instruction": "at the top right of the Knowledge bases page."
          },
          {
            "stepNumber": 2,
            "title": "Enter a name",
            "instruction": "you'll recognise, such as \"Parent information\" or \"Policies\"."
          },
          {
            "stepNumber": 3,
            "title": "Add a short description",
            "instruction": "(optional) saying what it contains."
          },
          {
            "stepNumber": 4,
            "title": "Leave Visibility as Tenant — everyone",
            "instruction": "so everyone in your organisation can use it (see Who can see a knowledge base )."
          },
          {
            "stepNumber": 5,
            "title": "Click Create and add documents .",
            "instruction": "The documents window opens straight away so you can add content."
          }
        ]
      },
      {
        "id": "knowledge-blk-10",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Plan limits Your plan sets how many knowledge bases you can have. At the limit, the New knowledge base button is disabled with an explanation. Ask your platform provider to raise the limit, or delete one you no longer need."
        }
      },
      {
        "id": "knowledge-blk-11",
        "type": "paragraph",
        "title": "Who can see a knowledge base",
        "body": "Visibility decides which people in your organisation can see and use a knowledge base in the portal . It does not affect your website: a website chatbot always answers from the knowledge base it's connected to, whatever its visibility."
      },
      {
        "id": "knowledge-blk-12",
        "type": "table",
        "title": "Who can see a knowledge base",
        "table": {
          "headers": [
            "Visibility",
            "Who can see and use it in the portal",
            "When to use it"
          ],
          "rows": [
            [
              "Tenant — everyone",
              "Every member of your organisation.",
              "Almost always. This is the right choice for content your chatbot answers from."
            ],
            [
              "Restricted",
              "Only the person who created it, and administrators who can manage every knowledge base.",
              "Content you're still preparing, or a test knowledge base."
            ],
            [
              "Department / Team",
              "Members your platform provider has placed in that department or team, plus the creator and administrators.",
              "Only if your provider has set departments up for you. These options ask for an ID that only your provider can give you."
            ]
          ]
        }
      },
      {
        "id": "knowledge-blk-13",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "If in doubt, choose \"Tenant — everyone\" You can't yet place members into departments or teams from the portal, so a Department or Team knowledge base is usually visible only to you and your administrators. Colleagues will find it missing from their list."
        }
      },
      {
        "id": "knowledge-blk-14",
        "type": "screenshot",
        "screenshotId": "07-kb-documents",
        "imageUrl": "/screenshots/07-kb-documents.webp",
        "caption": "Figure 7.4 The documents window: drop files at the top, follow each one's progress below."
      },
      {
        "id": "knowledge-blk-15",
        "type": "steps",
        "title": "Upload documents",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Open the documents window.",
            "instruction": "On the Knowledge bases page, click Documents next to your knowledge base."
          },
          {
            "stepNumber": 2,
            "title": "Add your files.",
            "instruction": "Drag them onto the area marked Drop files here , or click browse to choose them. You can add several at once."
          },
          {
            "stepNumber": 3,
            "title": "Watch them process.",
            "instruction": "Each file appears in the list immediately with its own progress bar, and an overall bar tracks the whole batch. You can close the window: processing carries on."
          },
          {
            "stepNumber": 4,
            "title": "Check they're ready.",
            "instruction": "Each file should end with a green tick, Ready , and a number of passages searchable ."
          }
        ]
      },
      {
        "id": "knowledge-blk-16",
        "type": "table",
        "title": "Upload documents",
        "table": {
          "headers": [
            "Supported",
            "Details"
          ],
          "rows": [
            [
              "File types",
              "PDF, Word, Excel, PowerPoint, HTML, email, CSV, JSON, XML, plain text and images (scanned pages and photos are read with text recognition)."
            ],
            [
              "Size",
              "Up to 50 MB per file."
            ],
            [
              "Uploading",
              "Files upload two at a time. You can cancel a file while it's still sending."
            ]
          ]
        }
      },
      {
        "id": "knowledge-blk-17",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "What makes a good document Clear headings and one topic per section. Real text rather than pictures of text (text files are faster and more accurate than scans). Up-to-date facts only. Remove old price lists instead of adding new ones beside them. Not password-protected."
        }
      },
      {
        "id": "knowledge-blk-18",
        "type": "paragraph",
        "title": "Add web pages",
        "body": "Instead of uploading files, you can point the portal at pages on your website. It fetches each page, keeps the text and makes it searchable, just like a file."
      },
      {
        "id": "knowledge-blk-19",
        "type": "screenshot",
        "screenshotId": "07-kb-add-from-web",
        "imageUrl": "/screenshots/07-kb-add-from-web.webp",
        "caption": "Figure 7.5 Adding web pages: choose a mode, paste the addresses and click Start ."
      },
      {
        "id": "knowledge-blk-20",
        "type": "steps",
        "title": "Add web pages",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Open the documents window",
            "instruction": "and scroll down to Add from the web ."
          },
          {
            "stepNumber": 2,
            "title": "Choose a mode:",
            "instruction": "Specific URLs — fetch exactly these pages. Paste one or more page addresses, separated by spaces or commas. No links are followed. Best for full control."
          },
          {
            "stepNumber": 3,
            "title": "Entire website — follow links from one page.",
            "instruction": "Paste one starting address; the portal follows links within the same site, up to your platform's page and depth limits."
          },
          {
            "stepNumber": 4,
            "title": "Click Start .",
            "instruction": "The source appears below with its progress, for example \"25 of 25 pages\", and the date it was last fetched."
          },
          {
            "stepNumber": 5,
            "title": "Check the result.",
            "instruction": "Each fetched page appears in the document list and should become Ready ."
          }
        ]
      },
      {
        "id": "knowledge-blk-21",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Choose pages that answer questions Fees and sessions pages, admissions information, FAQs, opening hours and contact pages are ideal. Leave out blogs, news archives and legal boilerplate unless visitors ask about them: extra pages can make answers less precise."
        }
      },
      {
        "id": "knowledge-blk-22",
        "type": "paragraph",
        "title": "Add written text",
        "body": "There's no box to type text straight into the knowledge base. To add information that isn't on your website or in an existing document (for example a new FAQ), write it in a document and upload it:"
      },
      {
        "id": "knowledge-blk-23",
        "type": "steps",
        "title": "Add written text",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Write the content",
            "instruction": "in Word, Google Docs or a plain text file. Use a heading for each question or topic."
          },
          {
            "stepNumber": 2,
            "title": "Save it",
            "instruction": "as .docx , .pdf or .txt , with a clear name such as \"Frequently asked questions 2026\"."
          },
          {
            "stepNumber": 3,
            "title": "Upload it",
            "instruction": "as described in Upload documents ."
          }
        ]
      },
      {
        "id": "knowledge-blk-24",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "A question-and-answer document works best Write each entry as the question visitors actually ask, followed by a short, complete answer. This is the fastest way to fix items on the dashboard's couldn't answer list."
        }
      },
      {
        "id": "knowledge-blk-25",
        "type": "paragraph",
        "title": "Check processing status",
        "body": "Every file and web page goes through the same stages. The documents window shows the current stage and a percentage for each one."
      },
      {
        "id": "knowledge-blk-26",
        "type": "table",
        "title": "Check processing status",
        "table": {
          "headers": [
            "Stage",
            "What's happening"
          ],
          "rows": [
            [
              "Uploading",
              "The file is being sent from your computer (you can still cancel it)."
            ],
            [
              "Queued",
              "Received, and waiting its turn to be read."
            ],
            [
              "Extracting",
              "Reading the text out of the file."
            ],
            [
              "Chunking",
              "Splitting the text into short passages."
            ],
            [
              "Embedding",
              "Making each passage searchable by meaning, shown as \"64 of 114 passages\"."
            ],
            [
              "Indexing",
              "Adding the passages to your knowledge base's search."
            ],
            [
              "Ready",
              "Done. The chatbot can now answer from it. The number of passages searchable is shown."
            ],
            [
              "Failed",
              "It couldn't be processed. The stage where it failed and the reason are shown, with a Retry button."
            ]
          ]
        }
      },
      {
        "id": "knowledge-blk-27",
        "type": "paragraph",
        "title": "Check processing status",
        "body": "Most documents are ready in under a minute. Very large or scanned documents can take a few minutes."
      },
      {
        "id": "knowledge-blk-28",
        "type": "paragraph",
        "title": "See exactly what was read",
        "body": "Click a document's name in the list to see the passages the portal extracted from it. This is the quickest way to find out why a document isn't helping, for example if a web page captured a cookie banner instead of the article."
      },
      {
        "id": "knowledge-blk-29",
        "type": "screenshot",
        "screenshotId": "07-kb-document-detail",
        "imageUrl": "/screenshots/07-kb-document-detail.webp",
        "caption": "Figure 7.6 The passages extracted from one document."
      },
      {
        "id": "knowledge-blk-30",
        "type": "table",
        "title": "Update content",
        "table": {
          "headers": [
            "To update…",
            "Do this"
          ],
          "rows": [
            [
              "A file whose content changed",
              "Upload the new version, check it's Ready , then delete the old one (see below). Keeping both lets the chatbot find conflicting facts."
            ],
            [
              "Web pages that changed",
              "In Add from the web , click the refresh icon next to the web source to fetch it again. Pages are refreshed in place, not duplicated. If a page has disappeared from your site, its old copy is kept until you delete it."
            ],
            [
              "A document that failed or reads badly",
              "Click the refresh icon on the document's row to process it again. For a failure, fix the cause first (see troubleshooting )."
            ]
          ]
        }
      },
      {
        "id": "knowledge-blk-31",
        "type": "steps",
        "title": "Delete a document",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Open the documents window",
            "instruction": "for the knowledge base."
          },
          {
            "stepNumber": 2,
            "title": "Click the bin icon",
            "instruction": "on the document's row."
          },
          {
            "stepNumber": 3,
            "title": "Confirm.",
            "instruction": "The document is removed from search immediately, and the chatbot stops using it for new answers."
          }
        ]
      },
      {
        "id": "knowledge-blk-32",
        "type": "paragraph",
        "title": "Test search",
        "body": "Test search shows which of your pages the chatbot would draw on for a question, without generating an answer. It's the quickest way to check whether your content covers a topic."
      },
      {
        "id": "knowledge-blk-33",
        "type": "screenshot",
        "screenshotId": "07-kb-test-search",
        "imageUrl": "/screenshots/07-kb-test-search.webp",
        "caption": "Figure 7.7 Test search: the most relevant pages come first."
      },
      {
        "id": "knowledge-blk-34",
        "type": "steps",
        "title": "Test search",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Click Test search",
            "instruction": "next to the knowledge base."
          },
          {
            "stepNumber": 2,
            "title": "Type a question",
            "instruction": "the way a visitor would, and click Search ."
          },
          {
            "stepNumber": 3,
            "title": "Read the results.",
            "instruction": "The best-matching pages come first. The number beside each is a relevance score; only compare scores within one search."
          }
        ]
      },
      {
        "id": "knowledge-blk-35",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Reading the results If the right page is at or near the top, the chatbot has what it needs. If it's missing, add a page or document that covers the topic. Test searches don't use your AI allowance."
        }
      },
      {
        "id": "knowledge-blk-36",
        "type": "screenshot",
        "screenshotId": "07-kb-delete-confirm",
        "imageUrl": "/screenshots/07-kb-delete-confirm.webp",
        "caption": "Figure 7.8 Deleting a knowledge base asks you to type its name."
      },
      {
        "id": "knowledge-blk-37",
        "type": "steps",
        "title": "Delete a knowledge base",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Click the bin icon",
            "instruction": "on the knowledge base's row."
          },
          {
            "stepNumber": 2,
            "title": "Read what will be removed:",
            "instruction": "the window says exactly how many documents and passages go, and what is kept (answer ratings and the audit trail)."
          },
          {
            "stepNumber": 3,
            "title": "Type the knowledge base's name",
            "instruction": "to confirm, then click Delete knowledge base ."
          }
        ]
      },
      {
        "id": "knowledge-blk-38",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "This can't be undone Deleting a knowledge base removes all its documents and web pages permanently. The portal refuses to delete one that your website chatbot still answers from, or while anything in it is still processing, and tells you why."
        }
      }
    ]
  },
  {
    "id": "art-testing",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-bot",
    "slug": "testing-assistant",
    "title": "Testing Your AI Assistant",
    "summary": "How to ask questions from the portal, test exactly as a visitor on your website, verify source citations, and refine answers.",
    "difficulty": "Beginner",
    "estimatedMinutes": 6,
    "requiredPermissions": [
      "testing.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "testing-blk-1",
        "type": "paragraph",
        "lead": "Check your chatbot's answers before your visitors do, and after every change to its content."
      },
      {
        "id": "testing-blk-2",
        "type": "paragraph",
        "title": "Ask from the portal",
        "body": "The quickest test: ask a knowledge base a question without leaving the portal."
      },
      {
        "id": "testing-blk-3",
        "type": "screenshot",
        "screenshotId": "07-kb-ask",
        "imageUrl": "/screenshots/07-kb-ask.webp",
        "caption": "Figure 8.1 The Ask window. Answers come only from this knowledge base, with sources."
      },
      {
        "id": "testing-blk-4",
        "type": "steps",
        "title": "Ask from the portal",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Go to Knowledge bases",
            "instruction": "and click Ask next to your knowledge base."
          },
          {
            "stepNumber": 2,
            "title": "Type a question",
            "instruction": "and press Enter ( Shift + Enter adds a new line)."
          },
          {
            "stepNumber": 3,
            "title": "Read the answer and its sources.",
            "instruction": "You can copy it, generate it again, or rate it."
          }
        ]
      },
      {
        "id": "testing-blk-5",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Good to know In the Ask window, each question is answered on its own; it doesn't remember earlier questions. Questions asked here count towards your daily limit and AI allowance, just like your visitors' questions."
        }
      },
      {
        "id": "testing-blk-6",
        "type": "paragraph",
        "title": "Test it exactly as a visitor sees it",
        "body": "The most realistic test is the chatbot on your own website (or a test page your provider gives you)."
      },
      {
        "id": "testing-blk-7",
        "type": "screenshot",
        "screenshotId": "11-widget-closed",
        "imageUrl": "/screenshots/11-widget-closed.webp",
        "caption": "Figure 8.2 The chat button on a website."
      },
      {
        "id": "testing-blk-8",
        "type": "screenshot",
        "screenshotId": "11-widget-open",
        "imageUrl": "/screenshots/11-widget-open.webp",
        "caption": "Figure 8.3 The chat window, with greeting and quick replies."
      },
      {
        "id": "testing-blk-9",
        "type": "steps",
        "title": "Test it exactly as a visitor sees it",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Open your website in a private (incognito) window.",
            "instruction": "This makes sure you see your latest settings and start a fresh conversation."
          },
          {
            "stepNumber": 2,
            "title": "Click the round chat button",
            "instruction": "in the bottom-right corner."
          },
          {
            "stepNumber": 3,
            "title": "Ask a real question,",
            "instruction": "for example: \"How much is a full day for a 2 year old?\""
          },
          {
            "stepNumber": 4,
            "title": "Check the answer",
            "instruction": "using the steps below."
          }
        ]
      },
      {
        "id": "testing-blk-10",
        "type": "screenshot",
        "screenshotId": "11-widget-sources",
        "imageUrl": "/screenshots/11-widget-sources.webp",
        "caption": "Figure 8.4 A good answer: facts from your content, numbered citations, and the pages they came from."
      },
      {
        "id": "testing-blk-11",
        "type": "paragraph",
        "title": "Test it exactly as a visitor sees it",
        "body": "Question: \"How much is a full day for a 2 year old?\"\n\nExpected behaviour: the assistant answers using your knowledge only: \"A full day for a 2-year-old in the Saplings toddler room is £74, for 7:30 to 18:00\", with a citation number ( 1 ) after the fact and 1 document underneath. Click that to see which part of your fees document it used.\n\nGood to know: visitors see the titles of web pages, but an uploaded file is shown only as \"Document\" and the part used (for example \"Daily fees (table)\"). That's deliberate: a file name can reveal internal information."
      },
      {
        "id": "testing-blk-12",
        "type": "steps",
        "title": "Checking an answer",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Is it correct?",
            "instruction": "Compare it with your own information."
          },
          {
            "stepNumber": 2,
            "title": "Does it cite sources?",
            "instruction": "Factual answers carry small numbers such as 1 . Click N web pages or N documents to see them."
          },
          {
            "stepNumber": 3,
            "title": "Are the sources right?",
            "instruction": "Open them: are they the pages you'd expect?"
          },
          {
            "stepNumber": 4,
            "title": "Is it the right length and tone?",
            "instruction": "If not, adjust Tone & style ."
          },
          {
            "stepNumber": 5,
            "title": "Rate it",
            "instruction": "with 👍 or 👎. Ratings appear in Answer feedback ."
          }
        ]
      },
      {
        "id": "testing-blk-13",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "When the chatbot says it can't confirm something This is correct behaviour when your content doesn't contain the answer: the chatbot never fills gaps with general knowledge. The question is added to the dashboard's couldn't answer list so you can add the missing information."
        }
      },
      {
        "id": "testing-blk-14",
        "type": "table",
        "title": "Improving answers",
        "table": {
          "headers": [
            "If the answer…",
            "Do this"
          ],
          "rows": [
            [
              "says it can't confirm, but the answer is in your content",
              "Run a test search . If the right page isn't near the top, make it clearer (headings, question-style wording) or add a focused FAQ document. If the chatbot says your sources belong to a different organisation, see this troubleshooting entry ."
            ],
            [
              "is wrong or out of date",
              "Find the source it cited, correct or replace it ( Update content ), then ask again in a new chat."
            ],
            [
              "cites unhelpful pages",
              "Remove pages that add noise (for example blogs or legal pages), or add a page dedicated to the topic."
            ],
            [
              "is too long or too short",
              "Change Response length on the Tone & style tab."
            ],
            [
              "strays into a topic it shouldn't",
              "Add a rule to Avoid on the Behaviour tab."
            ]
          ]
        }
      },
      {
        "id": "testing-blk-15",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Keep a test list Write down the 10–20 questions your customers ask most. Ask them all after every significant content change. It takes five minutes and catches most problems before your visitors do."
        }
      }
    ]
  },
  {
    "id": "art-conversations-inbox",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-monitor",
    "slug": "conversations-inbox",
    "title": "Conversation Management & Inbox",
    "summary": "Review conversation transcripts, search chat history, monitor visitor feedback ratings, manage human handoff, and assign teams.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 9,
    "requiredPermissions": [
      "conversations.view",
      "inbox.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "conversations-blk-1",
        "type": "paragraph",
        "lead": "Review what visitors ask, how your chatbot answered, how it was rated, and handle requests for a person."
      },
      {
        "id": "conversations-blk-2",
        "type": "paragraph",
        "title": "Conversation history",
        "body": "The page opens on Only mine (your own conversations). To review visitors' chats, click Show all conversations , or the All conversations button."
      },
      {
        "id": "conversations-blk-3",
        "type": "screenshot",
        "screenshotId": "08-conversations-all",
        "imageUrl": "/screenshots/08-conversations-all.webp",
        "caption": "Figure 9.1 All conversations in your organisation."
      },
      {
        "id": "conversations-blk-4",
        "type": "table",
        "title": "Conversation history",
        "table": {
          "headers": [
            "Column",
            "What it means"
          ],
          "rows": [
            [
              "Title",
              "The conversation's first question."
            ],
            [
              "Who",
              "Website visitor (anonymous visitors to your site) or the member who asked."
            ],
            [
              "Handled by",
              "AI chatbot , or the team or colleague it was handed to."
            ],
            [
              "Status",
              "Whether the conversation is active or finished."
            ],
            [
              "Last message",
              "When the most recent message was sent."
            ]
          ]
        }
      },
      {
        "id": "conversations-blk-5",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Viewing conversations is recorded Conversations contain what visitors wrote. Opening one records an entry in your organisation's audit trail, naming you and the conversation. Only open conversations you have a reason to review."
        }
      },
      {
        "id": "conversations-blk-6",
        "type": "paragraph",
        "title": "Searching conversations",
        "body": "Type a word or phrase into Search what was said… to find conversations containing it, for example \"allergy\" or \"funding\"."
      },
      {
        "id": "conversations-blk-7",
        "type": "screenshot",
        "screenshotId": "08-conversations-search",
        "imageUrl": "/screenshots/08-conversations-search.webp",
        "caption": "Figure 9.2 Searching conversations for a word."
      },
      {
        "id": "conversations-blk-8",
        "type": "paragraph",
        "title": "Reading a conversation",
        "body": "Click Open on a row to read the full conversation, oldest message first. You'll see the visitor's questions, the AI's answers with their citation numbers, and any messages from your team after a handoff."
      },
      {
        "id": "conversations-blk-9",
        "type": "screenshot",
        "screenshotId": "08-conversation-thread",
        "imageUrl": "/screenshots/08-conversation-thread.webp",
        "caption": "Figure 9.3 An open conversation that was handed to the Office team. The yellow Internal note is the AI's summary for staff; the parent never sees it."
      },
      {
        "id": "conversations-blk-10",
        "type": "paragraph",
        "title": "Reading a conversation",
        "body": "The pencil and bin icons on each row rename and delete a conversation. Only the person who owns a conversation can rename or delete it; visitors' conversations are deleted automatically after your retention period ."
      },
      {
        "id": "conversations-blk-11",
        "type": "screenshot",
        "screenshotId": "09-feedback",
        "imageUrl": "/screenshots/09-feedback.webp",
        "caption": "Figure 9.4 Answer feedback: totals at the top, each rating below."
      },
      {
        "id": "conversations-blk-12",
        "type": "paragraph",
        "title": "Answer feedback",
        "body": "• Ratings, Helpful, Not helpful and Satisfaction at the top summarise all ratings. Satisfaction is helpful ratings divided by all ratings.\n• Filters show only helpful or not-helpful ratings, and only those from your website or the portal.\n• Click a rating to see the exact question and the exact answer that was rated, plus any comment the visitor left."
      },
      {
        "id": "conversations-blk-13",
        "type": "screenshot",
        "screenshotId": "09-feedback-detail",
        "imageUrl": "/screenshots/09-feedback-detail.webp",
        "caption": "Figure 9.5 The detail of one rating: the question and the answer that was rated."
      },
      {
        "id": "conversations-blk-14",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Why 👍 and 👎 matter Ratings are the voice of your visitors. A 👎 is the clearest signal that an answer was wrong, unclear or unhelpful. Review every 👎 weekly: read the answer, find the source it used, and fix the content. A rising satisfaction score shows your improvements are working."
        }
      },
      {
        "id": "conversations-blk-15",
        "type": "screenshot",
        "screenshotId": "06-inbox",
        "imageUrl": "/screenshots/06-inbox.webp",
        "caption": "Figure 9.6 The Inbox: a parent is waiting for Admissions. Click Claim to take the conversation."
      },
      {
        "id": "conversations-blk-16",
        "type": "paragraph",
        "title": "Inbox and human handoff",
        "body": "How a handoff works:"
      },
      {
        "id": "conversations-blk-17",
        "type": "steps",
        "title": "Inbox and human handoff",
        "steps": [
          {
            "stepNumber": 1,
            "title": "A visitor asks for a person,",
            "instruction": "or asks something that needs staff judgement. The chatbot offers the teams that have people in them."
          },
          {
            "stepNumber": 2,
            "title": "The visitor picks a team.",
            "instruction": "The conversation appears in the Inbox of that team's members, live, with a sound if Sound on is enabled."
          },
          {
            "stepNumber": 3,
            "title": "A colleague claims it",
            "instruction": "and replies. Only one person can claim a conversation, so two colleagues never answer the same visitor. Colleagues can also add internal notes that the visitor never sees."
          },
          {
            "stepNumber": 4,
            "title": "When finished,",
            "instruction": "the colleague can hand the conversation back to the AI."
          }
        ]
      },
      {
        "id": "conversations-blk-18",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Don't miss a waiting visitor Keep Sound on , and allow notifications if your browser asks. If the page says notifications are blocked, enable them in your browser's site settings."
        }
      },
      {
        "id": "conversations-blk-19",
        "type": "paragraph",
        "title": "Teams",
        "body": "Teams are the options visitors are offered when they ask for a person, for example \"Admissions\" or \"Support\". A team is only offered once it has at least one person in it."
      },
      {
        "id": "conversations-blk-20",
        "type": "screenshot",
        "screenshotId": "06-inbox-new-team",
        "imageUrl": "/screenshots/06-inbox-new-team.webp",
        "caption": "Figure 9.7 Creating a team."
      },
      {
        "id": "conversations-blk-21",
        "type": "steps",
        "title": "Teams",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Go to Inbox",
            "instruction": "and click New team (or click an existing team to edit it)."
          },
          {
            "stepNumber": 2,
            "title": "Enter a name",
            "instruction": "visitors will understand, such as \"Admissions\", and a short description."
          },
          {
            "stepNumber": 3,
            "title": "Leave Offered to visitors on.",
            "instruction": "Turning it off stops the team being offered but keeps its conversations."
          },
          {
            "stepNumber": 4,
            "title": "Tick the people",
            "instruction": "who will answer this team's conversations."
          },
          {
            "stepNumber": 5,
            "title": "Click Save team .",
            "instruction": "Setup step 4 on the dashboard is now ticked."
          }
        ]
      },
      {
        "id": "conversations-blk-22",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Who sees which conversations Team members see their own teams' conversations. Owners and administrators see every team's conversations."
        }
      }
    ]
  },
  {
    "id": "art-analytics",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-monitor",
    "slug": "analytics-usage",
    "title": "Analytics & Usage Monitoring",
    "summary": "Track question volumes, resolution rates, token allowances, AI cost breakdown, and seasonal inquiry trends.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 6,
    "requiredPermissions": [
      "analytics.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "analytics-blk-1",
        "type": "paragraph",
        "lead": "Understand how much your chatbot is used, how well it answers, and how close you are to your limits.",
        "body": "All analytics live on the Dashboard , with detail in Answer feedback and Conversations ."
      },
      {
        "id": "analytics-blk-2",
        "type": "table",
        "title": "Every figure explained",
        "table": {
          "headers": [
            "Figure",
            "Where",
            "What it tells you",
            "Act when…"
          ],
          "rows": [
            [
              "Questions asked (7 days)",
              "Dashboard card",
              "How much visitors use your chatbot.",
              "It drops suddenly: check the chatbot is still on your website."
            ],
            [
              "Conversations (7 days)",
              "Dashboard card",
              "How many visitors started a chat.",
              "It's high but questions are low: visitors may not be getting useful first answers."
            ],
            [
              "Passed to your team (7 days)",
              "Dashboard card",
              "How often visitors needed a person.",
              "It rises: look for a pattern and add that content."
            ],
            [
              "Helpful answers (30 days)",
              "Dashboard card",
              "Share of ratings that were 👍.",
              "It falls: review 👎 ratings in Answer feedback."
            ],
            [
              "Activity (14 days)",
              "Dashboard chart",
              "Daily questions and new conversations.",
              "You see unusual peaks: for example after a marketing campaign."
            ],
            [
              "Questions answered today",
              "Chatbot card",
              "AI answers today against your daily limit.",
              "It regularly reaches the limit: raise your limit or ask for a larger plan."
            ],
            [
              "AI usage this month",
              "Chatbot card",
              "Share of this month's AI allowance used.",
              "It passes 80% early in the month."
            ],
            [
              "Couldn't answer",
              "Dashboard list",
              "Questions your content doesn't cover.",
              "A question is asked several times."
            ],
            [
              "Ready / Web pages / Files / Couldn't be read",
              "What your chatbot knows",
              "The state of your content.",
              "\"Couldn't be read\" is above zero."
            ],
            [
              "Satisfaction",
              "Answer feedback",
              "Helpful ratings ÷ all ratings.",
              "It trends down."
            ]
          ]
        }
      },
      {
        "id": "analytics-blk-3",
        "type": "paragraph",
        "title": "Usage and allowances",
        "body": "Your plan includes two allowances:\n\nHow many questions the AI answers per day. It resets at midnight in the time zone you choose . You can set a lower limit yourself.\n\nHow much AI processing your answers can use each month, measured in tokens . It resets on the first of each month.\n\nThe dashboard warns you as you approach each limit, at 80%, 90%, 95% and 100% . When a limit is reached, visitors are told politely that the chatbot can't answer right now and can still ask for a person. Your content and settings are unaffected."
      },
      {
        "id": "analytics-blk-4",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "What doesn't count against your AI allowance Reading your documents and web pages, and test searches. The dashboard shows how many tokens reading your documents used, for information only."
        }
      },
      {
        "id": "analytics-blk-5",
        "type": "paragraph",
        "title": "AI cost",
        "body": "The portal shows your AI use as a percentage of your allowance , not in money, because AI usage is included in your plan. You won't be charged extra for normal use within your allowance. For billing questions, or to change your plan, contact your platform provider."
      },
      {
        "id": "analytics-blk-6",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Keeping usage efficient Choose Balanced rather than Detailed answers unless visitors need detail: shorter answers use less. Remove content visitors never ask about, so answers draw on fewer, more relevant pages. Use your own daily limit if you want predictable usage."
        }
      },
      {
        "id": "analytics-blk-7",
        "type": "paragraph",
        "title": "Reading the trends",
        "body": "• Week on week: each key figure compares the last 7 days with the 7 days before (\"None in the previous 7 days\" means there was no activity then).\n• Day by day: the activity chart shows the last 14 days, so you can spot quiet days, busy days and the effect of changes.\n• Quality over time: the satisfaction score compares the last 30 days of ratings."
      }
    ]
  },
  {
    "id": "art-users-permissions",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-admin",
    "slug": "users-permissions",
    "title": "User & Permission Management",
    "summary": "Invite staff members, assign roles, manage permission overrides, and reference the complete system permission catalogue.",
    "difficulty": "Admin",
    "estimatedMinutes": 10,
    "requiredPermissions": [
      "members.view",
      "roles.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "people-blk-1",
        "type": "paragraph",
        "lead": "Decide who in your organisation can use the portal, and what each person can do."
      },
      {
        "id": "people-blk-2",
        "type": "screenshot",
        "screenshotId": "03-members",
        "imageUrl": "/screenshots/03-members.webp",
        "caption": "Figure 11.1 The Members page."
      },
      {
        "id": "people-blk-3",
        "type": "paragraph",
        "title": "Members",
        "body": "There are two ways to add a colleague:\n\n• Add member adds someone who already has a portal account, straight away, with the role you choose.\n• Invite member creates an invitation for a new person, with a role pre-selected."
      },
      {
        "id": "people-blk-4",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "\"Your plan doesn't include adding members\" If you see this message, the buttons are disabled because your plan doesn't include extra members. Ask your platform provider to enable it."
        }
      },
      {
        "id": "people-blk-5",
        "type": "paragraph",
        "title": "Managing a member",
        "body": "Click the pencil next to a member's job title to edit it. Open the … menu on a member's row for these actions:"
      },
      {
        "id": "people-blk-6",
        "type": "screenshot",
        "screenshotId": "03-members-edit",
        "imageUrl": "/screenshots/03-members-edit.webp",
        "caption": "Figure 11.2 Editing a member's job title."
      },
      {
        "id": "people-blk-7",
        "type": "table",
        "title": "Managing a member",
        "table": {
          "headers": [
            "Action",
            "What it does",
            "When to use it"
          ],
          "rows": [
            [
              "Suspend",
              "Temporarily blocks the person's access to your organisation.",
              "Extended leave, or while you check a concern."
            ],
            [
              "Reactivate",
              "Restores a suspended member's access.",
              "When they return."
            ],
            [
              "Revoke access",
              "Removes the person from your organisation.",
              "When someone leaves. Do it on their last day."
            ],
            [
              "Restore access",
              "Brings back a revoked member.",
              "If access was removed by mistake."
            ]
          ]
        }
      },
      {
        "id": "people-blk-8",
        "type": "screenshot",
        "screenshotId": "04-roles-tab1-roles",
        "imageUrl": "/screenshots/04-roles-tab1-roles.webp",
        "caption": "Figure 11.3 The Roles tab."
      },
      {
        "id": "people-blk-9",
        "type": "paragraph",
        "title": "Roles",
        "body": "Every organisation has three built-in roles:"
      },
      {
        "id": "people-blk-10",
        "type": "table",
        "title": "Roles",
        "table": {
          "headers": [
            "Role",
            "Who it's for"
          ],
          "rows": [
            [
              "Tenant Owner",
              "The person ultimately responsible for your organisation's account. Can do everything."
            ],
            [
              "Tenant Administrator",
              "People who run the chatbot and manage colleagues day to day."
            ],
            [
              "Member",
              "Colleagues who use the portal with basic access, for example to ask the knowledge base questions."
            ]
          ]
        }
      },
      {
        "id": "people-blk-11",
        "type": "paragraph",
        "title": "Roles",
        "body": "If your plan includes it, New custom role lets you create a role with exactly the permissions you choose. You can only give a role permissions you hold yourself."
      },
      {
        "id": "people-blk-12",
        "type": "screenshot",
        "screenshotId": "04-roles-tab2-hierarchy",
        "imageUrl": "/screenshots/04-roles-tab2-hierarchy.webp",
        "caption": "Figure 11.4 Hierarchy."
      },
      {
        "id": "people-blk-13",
        "type": "screenshot",
        "screenshotId": "04-roles-tab3-overrides",
        "imageUrl": "/screenshots/04-roles-tab3-overrides.webp",
        "caption": "Figure 11.5 Overrides."
      },
      {
        "id": "people-blk-14",
        "type": "table",
        "title": "Hierarchy, overrides, your permissions and the catalogue",
        "table": {
          "headers": [
            "Tab",
            "What it's for"
          ],
          "rows": [
            [
              "Hierarchy",
              "Makes one role inherit everything another role can do (for example, \"Senior advisor\" inherits \"Advisor\")."
            ],
            [
              "Overrides",
              "Grants or denies one permission to one member, regardless of their roles. A deny always wins. A reason is required, for your records."
            ],
            [
              "My permissions",
              "Everything you can do, combining your roles, inherited roles and overrides."
            ],
            [
              "Catalog",
              "Every permission that exists, with a description and a risk level."
            ]
          ]
        }
      },
      {
        "id": "people-blk-15",
        "type": "screenshot",
        "screenshotId": "04-roles-tab4-my-permissions",
        "imageUrl": "/screenshots/04-roles-tab4-my-permissions.webp",
        "caption": "Figure 11.6 My permissions: what you can do, grouped by area, with risk levels."
      },
      {
        "id": "people-blk-16",
        "type": "table",
        "title": "Permission reference",
        "table": {
          "headers": [
            "Permission",
            "What it allows",
            "Risk"
          ],
          "rows": [
            [
              "Ask the chatbot (conversations.create)",
              "Ask questions from the portal.",
              "Low"
            ],
            [
              "Read conversations (conversations.view)",
              "Read every conversation in full, including website visitors' messages and ratings.",
              "High"
            ],
            [
              "See every queue (conversations.view_all)",
              "See every team's handoff queue, not only the teams you're in.",
              "High"
            ],
            [
              "Add documents (documents.upload)",
              "Add documents and web pages; also allows changing chatbot settings.",
              "Low"
            ],
            [
              "Create knowledge bases",
              "Create new knowledge bases.",
              "Low"
            ],
            [
              "Manage knowledge bases",
              "Change or delete any knowledge base.",
              "Medium"
            ],
            [
              "Search knowledge bases",
              "Run test searches.",
              "Low"
            ],
            [
              "Manage roles",
              "Create roles and assign them to members.",
              "High"
            ],
            [
              "Invite members",
              "Invite new people to your organisation.",
              "Medium"
            ],
            [
              "Manage members",
              "Suspend, reactivate and revoke memberships.",
              "Medium"
            ]
          ]
        }
      },
      {
        "id": "people-blk-17",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Security best practice Give each person the smallest role that lets them do their job. Limit high-risk permissions, especially reading all conversations, to people who need them. Review your member list every month, and revoke access on the day someone leaves. Keep at least two people who can manage roles, so you're never locked out."
        }
      }
    ]
  },
  {
    "id": "art-settings-account",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-admin",
    "slug": "settings-management",
    "title": "Settings Management",
    "summary": "Manage personal profile and 2FA in My Identity, review all tenant settings at a glance, and understand provider-managed controls.",
    "difficulty": "Admin",
    "estimatedMinutes": 7,
    "requiredPermissions": [
      "settings.view",
      "settings.manage"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "settings-blk-1",
        "type": "paragraph",
        "lead": "Your personal account settings, and every setting for your organisation in one place."
      },
      {
        "id": "settings-blk-2",
        "type": "screenshot",
        "screenshotId": "10-account-full",
        "imageUrl": "/screenshots/10-account-full.webp",
        "caption": "Figure 12.1 The My identity page."
      },
      {
        "id": "settings-blk-3",
        "type": "table",
        "title": "My identity (your account)",
        "table": {
          "headers": [
            "Section",
            "Purpose",
            "Recommended"
          ],
          "rows": [
            [
              "Profile",
              "Your email, account status and last sign-in (read-only).",
              "Check Last sign-in occasionally. If it wasn't you, change your password."
            ],
            [
              "Password",
              "Change your password. This signs you out everywhere, including this browser.",
              "Change it if you think it may have been seen, and at least once a year."
            ],
            [
              "Multi-factor authentication",
              "Adds a second step at sign-in: a six-digit code from an authenticator app on your phone.",
              "Turn this on. Click Enroll authenticator app , scan the code with an app such as Microsoft Authenticator or Google Authenticator, and enter the code shown."
            ],
            [
              "Linked sign-in providers",
              "Google or Facebook accounts that can sign in as you.",
              "Only link accounts you control and protect."
            ],
            [
              "Sessions",
              "Sign out everywhere immediately signs you out of every other browser and device.",
              "Use it after signing in on a shared computer, or if your phone is lost."
            ]
          ]
        }
      },
      {
        "id": "settings-blk-4",
        "type": "paragraph",
        "title": "All tenant settings at a glance",
        "body": "Every setting you control for your organisation, where to find it, and what we recommend."
      },
      {
        "id": "settings-blk-5",
        "type": "table",
        "title": "All tenant settings at a glance",
        "table": {
          "headers": [
            "Setting",
            "Where",
            "Purpose",
            "Recommended"
          ],
          "rows": [
            [
              "AI Chatbot on/off",
              "AI Chatbot (top)",
              "Whether the AI answers visitors.",
              "On"
            ],
            [
              "Allowed websites",
              "AI Chatbot → On your website",
              "Where your chatbot may appear.",
              "Only your own sites"
            ],
            [
              "Chatbot name, title, avatar, greeting",
              "AI Chatbot → Identity",
              "How it introduces itself.",
              "Friendly and clear"
            ],
            [
              "Role, Avoid",
              "AI Chatbot → Behaviour",
              "What it's for, and what it must never do.",
              "Specific, plain sentences"
            ],
            [
              "Personality, Response length",
              "AI Chatbot → Tone & style",
              "How it sounds, and how much it says.",
              "Friendly, Balanced"
            ],
            [
              "Company name, Industry, Description",
              "AI Chatbot → Company",
              "Who it speaks for.",
              "Complete and current"
            ],
            [
              "Quick reply suggestions",
              "AI Chatbot → Reply experience",
              "Starter buttons for visitors.",
              "On"
            ],
            [
              "Use visitor location",
              "AI Chatbot → Reply experience",
              "Approximate location in answers.",
              "Off unless needed"
            ],
            [
              "Allow transfer to a colleague",
              "AI Chatbot → Handoff & limits",
              "Lets visitors reach a person.",
              "On, with a staffed team"
            ],
            [
              "AI summary as an internal comment",
              "AI Chatbot → Handoff & limits",
              "Staff-only summary on transfer.",
              "On"
            ],
            [
              "AI answers unassigned conversations",
              "AI Chatbot → Handoff & limits",
              "AI keeps helping until someone takes over.",
              "On"
            ],
            [
              "Daily AI message limit",
              "AI Chatbot → Handoff & limits",
              "Your own daily cap.",
              "Blank (plan maximum)"
            ],
            [
              "Time zone",
              "AI Chatbot → Handoff & limits",
              "When the daily limit resets.",
              "Your local time zone"
            ],
            [
              "Conversation retention",
              "AI Chatbot → Handoff & limits",
              "How long conversations are kept.",
              "As short as your policy allows"
            ],
            [
              "Teams",
              "Inbox → Teams",
              "Who visitors can be handed to.",
              "At least one staffed team"
            ],
            [
              "Members and roles",
              "Members, Roles & permissions",
              "Who can use the portal, and what they can do.",
              "Smallest role needed"
            ]
          ]
        }
      },
      {
        "id": "settings-blk-6",
        "type": "paragraph",
        "title": "Settings your platform provider manages",
        "body": "These are part of your plan or service. You can see their effects, but only your platform provider can change them:\n\n• Assistant type — the kind of organisation your chatbot speaks for (shown on the Company tab).\n• The AI model and the platform's safety rules.\n• How many knowledge bases and website chatbots you can have.\n• Your plan's maximum daily questions and monthly AI allowance .\n• Whether you can add members and create custom roles ."
      },
      {
        "id": "settings-blk-7",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Controls your plan doesn't include Buttons for features your plan doesn't include are shown disabled, with a message explaining why, so you always know what to ask your provider for."
        }
      }
    ]
  },
  {
    "id": "art-safeguarding",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-admin",
    "slug": "safeguarding-data",
    "title": "Safeguarding & Data Protection",
    "summary": "Emergency safeguarding responses, designated leads, automated telephone overrides, GDPR compliance, and PII protection.",
    "difficulty": "Admin",
    "estimatedMinutes": 8,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "safeguarding-blk-1",
        "type": "paragraph",
        "lead": "How your chatbot responds when a child's safety is mentioned, what you must put in place, and what happens to the information visitors type."
      },
      {
        "id": "safeguarding-blk-2",
        "type": "paragraph",
        "title": "How your chatbot handles safeguarding",
        "body": "For nurseries and other organisations that work with children, the platform gives your chatbot strict safeguarding rules that you can't switch off. When a message suggests a child may be at risk, your chatbot:\n\n• points the person to your Designated Safeguarding Lead (DSL) using the contact details in your knowledge base, and to 999 if a child is in immediate danger;\n• never investigates, assesses or decides anything about a concern, and never asks a child, parent or member of staff probing questions;\n• never confirms anything about a named child , such as whether they attend, are in today or have been collected, whoever claims to be asking;\n• doesn't give medical advice about a specific child, such as whether to give medicine or what a symptom means."
      },
      {
        "id": "safeguarding-blk-3",
        "type": "screenshot",
        "screenshotId": "11-widget-safeguarding",
        "imageUrl": "/screenshots/11-widget-safeguarding.webp",
        "caption": "Figure 13.1 A safeguarding question answered from the nursery's own safeguarding statement: the DSL, how to reach them, and 999 for emergencies."
      },
      {
        "id": "safeguarding-blk-4",
        "type": "paragraph",
        "title": "What you need to put in place",
        "body": "• Upload your safeguarding policy or a short statement that says who your DSL and deputy DSL are (by role is fine) and how to contact them. Without it, the chatbot can only say \"contact the nursery\".\n• Include emergency and out-of-hours contacts, such as your local children's services and the NSPCC helpline.\n• Test it. Ask \"I'm worried about a child, who should I talk to?\" on your website and check the answer names the right person.\n• Brief the staff who read conversations on what to do if they find a concern in a chat (see below)."
      },
      {
        "id": "safeguarding-blk-5",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "The chatbot is not a way to report a concern Nobody watches conversations as they happen. A parent may still type a worry into the chat, so check Conversations and the Inbox every day. If you find a disclosure or a concern, follow your safeguarding procedure straight away , exactly as you would for a concern raised any other way. Don't reply in the chat with questions about it."
        }
      },
      {
        "id": "safeguarding-blk-6",
        "type": "paragraph",
        "title": "Data protection",
        "body": "Your chatbot keeps a record of conversations so you can review and improve it. Here is what that means in practice."
      },
      {
        "id": "safeguarding-blk-7",
        "type": "table",
        "title": "Data protection",
        "table": {
          "headers": [
            "Question",
            "Answer"
          ],
          "rows": [
            [
              "What is stored?",
              "What visitors type, the chatbot's replies, any replies from your team, and the date and time. Visitors don't sign in, so they aren't identified unless they type their own details."
            ],
            [
              "Is location stored?",
              "No. If Use visitor location is on, an approximate area may be used to answer, but it isn't saved with the conversation."
            ],
            [
              "Who can read conversations?",
              "Only members whose role includes reading conversations. Every time someone opens a visitor's conversation, the audit trail records who and when."
            ],
            [
              "How long is it kept?",
              "For your retention period (30 days unless you change it). After that it is deleted automatically and can't be recovered."
            ],
            [
              "Can I delete one visitor's conversation?",
              "Not from the portal. If someone asks you to delete their conversation, contact your platform provider, who can remove it. Shortening the retention period also removes older conversations."
            ],
            [
              "Can I give someone a copy of their conversation?",
              "There's no export button. Open the conversation and copy its text, or ask your platform provider for help."
            ]
          ]
        }
      },
      {
        "id": "safeguarding-blk-8",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Info",
          "content": "Good practice Mention the chatbot in your website's privacy notice: that conversations are kept, for how long, and why. Ask visitors not to share personal details about their child in the chat. A line in the greeting works well, for example \"Please don't share personal details here.\" Keep the retention period as short as your records policy allows. Give \"read conversations\" only to people who need it (see the permission reference )."
        }
      },
      {
        "id": "safeguarding-blk-9",
        "type": "paragraph",
        "title": "Data protection",
        "body": "This section explains how the portal works; it isn't legal advice. Your organisation is usually the \"data controller\" for what visitors tell your chatbot, so check your arrangements with whoever handles data protection for you."
      }
    ]
  },
  {
    "id": "art-best-practices",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-ref",
    "slug": "best-practices",
    "title": "Best Practices: 10 Golden Rules",
    "summary": "Proven guidelines for clear document structuring, prompt hygiene, transparent visitor communication, and ongoing quality assurance.",
    "difficulty": "Beginner",
    "estimatedMinutes": 5,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "best-practices-lead",
        "type": "paragraph",
        "lead": "The habits of organisations whose chatbots answer well.",
        "body": "High-performing AI assistants are built on clean source documents, continuous review of unanswered questions, prompt human handoffs, and strong security governance."
      },
      {
        "id": "best-practices-cards",
        "type": "cards",
        "title": "Four Pillars of Chatbot Excellence",
        "cards": [
          {
            "title": "Knowledge base",
            "description": "• Keep documents up to date.\n• Remove outdated information instead of adding new versions beside it.\n• Use clear documents with headings and one topic per section.\n• Prefer real text to scans or images of text.\n• Add a question-and-answer document for common questions.\n• Check that every document is Ready and none couldn't be read ."
          },
          {
            "title": "AI quality",
            "description": "• Test your most common questions after every change.\n• Review the couldn't answer list and fill the gaps.\n• Read every 👎 rating and fix its cause.\n• Improve your Role and Avoid instructions as you learn.\n• Test in a private window, so you see what visitors see.\n• Keep facts in the knowledge base, not in instructions."
          },
          {
            "title": "Visitor experience",
            "description": "• Keep at least one staffed team for handoffs.\n• Answer handed-over conversations promptly.\n• Use a warm greeting and quick replies.\n• Make sure the chatbot shows as Installed on your site."
          },
          {
            "title": "Security",
            "description": "• Manage user access and use the smallest role needed.\n• Protect credentials, and turn on two-step sign-in.\n• Revoke access on the day someone leaves.\n• Only allow your own websites to show the chatbot.\n• Keep conversations only as long as you need them."
          }
        ]
      }
    ]
  },
  {
    "id": "art-troubleshooting",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-ref",
    "slug": "troubleshooting",
    "title": "Troubleshooting Guide",
    "summary": "Comprehensive problem, cause, and solution matrix for chatbot visibility, answer accuracy, uploads, and human handoff.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 15,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "troubleshooting-blk-1",
        "type": "paragraph",
        "lead": "Common problems, what usually causes them, and how to fix them step by step."
      },
      {
        "id": "troubleshooting-blk-2",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Answers] The AI can't answer questions it should know",
          "content": "Causes:\n• The information isn't in your knowledge base, or is worded very differently.\n• The document or page is still processing, or failed.\n• The website chatbot answers from a different knowledge base."
        }
      },
      {
        "id": "troubleshooting-blk-3",
        "type": "steps",
        "title": "Fix for: The AI can't answer questions it should know",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Run a test search",
            "instruction": "with the visitor's exact words."
          },
          {
            "stepNumber": 2,
            "title": "If the right page isn't listed,",
            "instruction": "add a page or document containing the answer ( Add written text )."
          },
          {
            "stepNumber": 3,
            "title": "Check every document is Ready",
            "instruction": "in the documents window."
          },
          {
            "stepNumber": 4,
            "title": "Ask again in a new, private chat.",
            "instruction": ""
          }
        ]
      },
      {
        "id": "troubleshooting-blk-4",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Answers] The chatbot says your sources belong to another organisation",
          "content": "Causes:\n• Your assistant type doesn't match your organisation (for example, it's set to UK nursery but you run a training academy).\n• Your Company name is different from the name used in your documents."
        }
      },
      {
        "id": "troubleshooting-blk-5",
        "type": "steps",
        "title": "Fix for: The chatbot says your sources belong to another organisation",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check the assistant type",
            "instruction": "on the AI Chatbot → Company tab."
          },
          {
            "stepNumber": 2,
            "title": "If it's wrong,",
            "instruction": "ask your platform provider to change it. It takes effect on the next answer."
          },
          {
            "stepNumber": 3,
            "title": "Make sure your Company description",
            "instruction": "mentions the name your documents use (for example, \"trading as Bramble Lane Nursery\")."
          },
          {
            "stepNumber": 4,
            "title": "Test in a new, private chat;",
            "instruction": "an old conversation remembers earlier answers."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-6",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Answers] My changes don't show on the website",
          "content": "Causes:\n• The chat window resumed an earlier conversation.\n• Your browser is still using its saved copy of the chatbot (for up to an hour).\n• You didn't click the tab's Save button."
        }
      },
      {
        "id": "troubleshooting-blk-7",
        "type": "steps",
        "title": "Fix for: My changes don't show on the website",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check you saved",
            "instruction": "the tab you changed."
          },
          {
            "stepNumber": 2,
            "title": "Open your website in a private window",
            "instruction": "and start a new chat."
          },
          {
            "stepNumber": 3,
            "title": "Still old after an hour?",
            "instruction": "Contact your platform provider."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-8",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Website] The chatbot doesn't appear on my website",
          "content": "Causes:\n• The embed code isn't on the page, or was pasted in the wrong place.\n• The website's address isn't in Where it can appear .\n• The chatbot was hidden from the website, or the AI Chatbot switch is off."
        }
      },
      {
        "id": "troubleshooting-blk-9",
        "type": "steps",
        "title": "Fix for: The chatbot doesn't appear on my website",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Look at the On your website card.",
            "instruction": "Is the status Installed , Not installed or Turned off ?"
          },
          {
            "stepNumber": 2,
            "title": "Check the address",
            "instruction": "exactly matches your site, including https:// and www. ."
          },
          {
            "stepNumber": 3,
            "title": "Ask your web developer",
            "instruction": "to confirm the code is just before </body> on every page."
          },
          {
            "stepNumber": 4,
            "title": "Click Check again",
            "instruction": "after reloading your website."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-10",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Website] \"Your chatbot is hidden on <address>\"",
          "content": "Causes:\n• Your site moved to a new address, or you use more than one domain.\n• Someone copied your embed code to a site that isn't yours."
        }
      },
      {
        "id": "troubleshooting-blk-11",
        "type": "steps",
        "title": "Fix for: \"Your chatbot is hidden on <address>\"",
        "steps": [
          {
            "stepNumber": 1,
            "title": "If the address is yours,",
            "instruction": "click Allow <address> on the AI Chatbot page."
          },
          {
            "stepNumber": 2,
            "title": "If you don't recognise it,",
            "instruction": "do nothing: your chatbot stays hidden there."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-12",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Content] A document is stuck processing",
          "content": "Causes:\n• It's large or scanned, and still being read.\n• Many documents are queued at once.\n• A background service needs attention."
        }
      },
      {
        "id": "troubleshooting-blk-13",
        "type": "steps",
        "title": "Fix for: A document is stuck processing",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Wait a few minutes.",
            "instruction": "The percentage shows it's still moving."
          },
          {
            "stepNumber": 2,
            "title": "If there's no progress after 30 minutes,",
            "instruction": "contact your platform provider with the document's name."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-14",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Content] A document failed or \"couldn't be read\"",
          "content": "Causes:\n• The file is password-protected, damaged, or not really the type its name says.\n• It's a scan of very poor quality.\n• It contains no readable text (for example only images of charts)."
        }
      },
      {
        "id": "troubleshooting-blk-15",
        "type": "steps",
        "title": "Fix for: A document failed or \"couldn't be read\"",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Read the reason",
            "instruction": "shown under the document, and the stage where it failed."
          },
          {
            "stepNumber": 2,
            "title": "Fix the file:",
            "instruction": "remove the password, re-save it from its original program, or export it as PDF or Word."
          },
          {
            "stepNumber": 3,
            "title": "Upload it again,",
            "instruction": "or click Retry , then delete the failed copy."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-16",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Content] An upload is refused",
          "content": "Causes:\n• The file type isn't supported.\n• The file is larger than 50 MB."
        }
      },
      {
        "id": "troubleshooting-blk-17",
        "type": "steps",
        "title": "Fix for: An upload is refused",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check the file type",
            "instruction": "against the supported list ."
          },
          {
            "stepNumber": 2,
            "title": "Split large files",
            "instruction": "into smaller documents, or compress images inside them."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-18",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Content] Web pages weren't all added",
          "content": "Causes:\n• An Entire website fetch reached the platform's page or depth limit.\n• Some pages need a login, or block automated access.\n• A page address was mistyped."
        }
      },
      {
        "id": "troubleshooting-blk-19",
        "type": "steps",
        "title": "Fix for: Web pages weren't all added",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check the source's page count",
            "instruction": "(for example \"25 of 25 pages\")."
          },
          {
            "stepNumber": 2,
            "title": "Add missing pages",
            "instruction": "using Specific URLs , listing exactly the pages you need."
          },
          {
            "stepNumber": 3,
            "title": "For login-only pages,",
            "instruction": "save the content as a document and upload it instead."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-20",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Answers] Answers are out of date",
          "content": "Causes:\n• Your website changed but its pages weren't fetched again.\n• An old document is still in the knowledge base alongside a new one."
        }
      },
      {
        "id": "troubleshooting-blk-21",
        "type": "steps",
        "title": "Fix for: Answers are out of date",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Fetch web pages again",
            "instruction": "with the refresh icon on the web source ( Update content )."
          },
          {
            "stepNumber": 2,
            "title": "Delete old versions",
            "instruction": "of documents."
          },
          {
            "stepNumber": 3,
            "title": "Test again",
            "instruction": "in a new chat."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-22",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Answers] Answers cite the wrong pages",
          "content": "Causes:\n• Several pages talk about the same topic, some only in passing.\n• Pages contain a lot of repeated menus, cookie banners or footer text."
        }
      },
      {
        "id": "troubleshooting-blk-23",
        "type": "steps",
        "title": "Fix for: Answers cite the wrong pages",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Run a test search",
            "instruction": "and note which pages rank highest."
          },
          {
            "stepNumber": 2,
            "title": "Open the unhelpful ones",
            "instruction": "( See what was read ) and delete pages that add nothing."
          },
          {
            "stepNumber": 3,
            "title": "Add one clear page",
            "instruction": "dedicated to the topic."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-24",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Handoff] Visitors aren't offered \"Speak to a person\"",
          "content": "Causes:\n• No team has anyone in it.\n• Allow transfer to a colleague is off.\n• Every team is set not to be offered to visitors."
        }
      },
      {
        "id": "troubleshooting-blk-25",
        "type": "steps",
        "title": "Fix for: Visitors aren't offered \"Speak to a person\"",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Add at least one person",
            "instruction": "to a team in Inbox → Teams ."
          },
          {
            "stepNumber": 2,
            "title": "Turn on Allow transfer to a colleague",
            "instruction": "on the Handoff & limits tab."
          },
          {
            "stepNumber": 3,
            "title": "Check the team's Offered to visitors",
            "instruction": "switch is on."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-26",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Handoff] Handed-over conversations are waiting too long",
          "content": "Causes:\n• Team members aren't watching the Inbox, or notifications are blocked.\n• The team is too small for the volume."
        }
      },
      {
        "id": "troubleshooting-blk-27",
        "type": "steps",
        "title": "Fix for: Handed-over conversations are waiting too long",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Turn on Sound on",
            "instruction": "and allow browser notifications."
          },
          {
            "stepNumber": 2,
            "title": "Add more people",
            "instruction": "to the team, or create teams by topic."
          },
          {
            "stepNumber": 3,
            "title": "Keep AI answers unassigned conversations on,",
            "instruction": "so visitors get help while they wait."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-28",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Usage] The chatbot stops answering part-way through the day",
          "content": "Causes:\n• Today's AI question limit was reached.\n• The limit resets at midnight in a different time zone from yours."
        }
      },
      {
        "id": "troubleshooting-blk-29",
        "type": "steps",
        "title": "Fix for: The chatbot stops answering part-way through the day",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check Questions answered today",
            "instruction": "on the dashboard."
          },
          {
            "stepNumber": 2,
            "title": "Raise your own daily limit",
            "instruction": "(up to your plan's maximum) on the Handoff & limits tab."
          },
          {
            "stepNumber": 3,
            "title": "Set the time zone",
            "instruction": "to your local time."
          },
          {
            "stepNumber": 4,
            "title": "If you regularly need more,",
            "instruction": "ask your platform provider about a larger plan."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-30",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Usage] The monthly AI allowance is used up",
          "content": "Causes:\n• Higher-than-usual traffic, or long answers."
        }
      },
      {
        "id": "troubleshooting-blk-31",
        "type": "steps",
        "title": "Fix for: The monthly AI allowance is used up",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Contact your platform provider",
            "instruction": "to raise your allowance; it resets on the first of the month."
          },
          {
            "stepNumber": 2,
            "title": "Choose shorter answers",
            "instruction": "( Response length ) to use less in future."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-32",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Access] A button is disabled (\"Your plan doesn't include…\")",
          "content": "Causes:\n• You've reached a plan limit (for example knowledge bases or chatbots), or the feature isn't in your plan (adding members, custom roles)."
        }
      },
      {
        "id": "troubleshooting-blk-33",
        "type": "steps",
        "title": "Fix for: A button is disabled (\"Your plan doesn't include…\")",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Read the message",
            "instruction": "next to the button; it names the limit."
          },
          {
            "stepNumber": 2,
            "title": "Free up space",
            "instruction": "(for example delete an unused knowledge base), or ask your platform provider to change your plan."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-34",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Content] A knowledge base can't be deleted",
          "content": "Causes:\n• Your website chatbot still answers from it.\n• A document in it is still processing, or a web source is still being fetched."
        }
      },
      {
        "id": "troubleshooting-blk-35",
        "type": "steps",
        "title": "Fix for: A knowledge base can't be deleted",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Read the message",
            "instruction": "in the delete window; it names the chatbot or the cause."
          },
          {
            "stepNumber": 2,
            "title": "Wait for processing to finish,",
            "instruction": "or point your chatbot at a different knowledge base first."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-36",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Access] I can't see visitors' conversations",
          "content": "Causes:\n• The page is showing Only mine .\n• Your role doesn't include reading all conversations."
        }
      },
      {
        "id": "troubleshooting-blk-37",
        "type": "steps",
        "title": "Fix for: I can't see visitors' conversations",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Click Show all conversations .",
            "instruction": ""
          },
          {
            "stepNumber": 2,
            "title": "If you don't have permission,",
            "instruction": "ask your organisation's owner to review your role."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-38",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Access] I was signed out unexpectedly",
          "content": "Causes:\n• Your password was changed, or Sign out everywhere was used.\n• Your membership was suspended, or you were away for a long time."
        }
      },
      {
        "id": "troubleshooting-blk-39",
        "type": "steps",
        "title": "Fix for: I was signed out unexpectedly",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Sign in again.",
            "instruction": ""
          },
          {
            "stepNumber": 2,
            "title": "If you didn't change anything,",
            "instruction": "change your password straight away and turn on two-step sign-in."
          },
          {
            "stepNumber": 3,
            "title": "If you can't sign in,",
            "instruction": "contact your organisation's owner."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-40",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[Access] The password-reset email doesn't arrive",
          "content": "Causes:\n• It went to your spam or junk folder.\n• Email sending isn't set up for your portal yet."
        }
      },
      {
        "id": "troubleshooting-blk-41",
        "type": "steps",
        "title": "Fix for: The password-reset email doesn't arrive",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check your spam folder,",
            "instruction": "and wait a few minutes."
          },
          {
            "stepNumber": 2,
            "title": "Contact your platform administrator,",
            "instruction": "who can help you back in."
          }
        ]
      },
      {
        "id": "troubleshooting-blk-42",
        "type": "callout",
        "callout": {
          "type": "warning",
          "title": "[General] A page shows \"This page could not be found\" or won't load",
          "content": "Causes:\n• The portal was being updated.\n• An old bookmark points to a page that has moved."
        }
      },
      {
        "id": "troubleshooting-blk-43",
        "type": "steps",
        "title": "Fix for: A page shows \"This page could not be found\" or won't load",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Refresh the page",
            "instruction": "after a minute."
          },
          {
            "stepNumber": 2,
            "title": "Use the menu",
            "instruction": "rather than a bookmark."
          },
          {
            "stepNumber": 3,
            "title": "If it persists,",
            "instruction": "contact your platform provider with the page name and the time."
          }
        ]
      }
    ]
  },
  {
    "id": "art-operations-checklist",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-ref",
    "slug": "go-live-operations",
    "title": "Go-Live & Daily Operations",
    "summary": "Day-by-day launch schedule for your first week and repeatable daily, weekly, and monthly maintenance checklists.",
    "difficulty": "Intermediate",
    "estimatedMinutes": 8,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "operations-lead",
        "type": "paragraph",
        "lead": "A plan for your first week, then a routine that keeps your chatbot accurate and your visitors happy.",
        "body": "Launch quietly, watch closely, and fix gaps while traffic is low. Repeatable daily, weekly, and monthly checklists ensure your assistant remains dependable."
      },
      {
        "id": "operations-checklist-1",
        "type": "steps",
        "title": "First week Checklist",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Day 1: finish Your first day",
            "instruction": "Day 1: finish Your first day: All five steps, and the setup checklist has gone from the dashboard."
          },
          {
            "stepNumber": 2,
            "title": "Day 1: put the chatbot on your website",
            "instruction": "Day 1: put the chatbot on your website: The On your website card shows Installed."
          },
          {
            "stepNumber": 3,
            "title": "Day 2: tell your team",
            "instruction": "Day 2: tell your team: Who answers the Inbox, and what to do if a chat raises a safeguarding concern."
          },
          {
            "stepNumber": 4,
            "title": "Days 2 to 5: read every conversation",
            "instruction": "Days 2 to 5: read every conversation: While numbers are small, read them all. Fix each wrong or missing answer in your documents."
          },
          {
            "stepNumber": 5,
            "title": "Day 5: clear the \"couldn't answer\" list",
            "instruction": "Day 5: clear the \"couldn't answer\" list: Add a short FAQ document covering the questions that came up."
          },
          {
            "stepNumber": 6,
            "title": "End of week: switch to the daily routine below",
            "instruction": "End of week: switch to the daily routine below"
          }
        ]
      },
      {
        "id": "operations-checklist-2",
        "type": "steps",
        "title": "Daily Checklist",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Check Needs attention on the dashboard",
            "instruction": "Check Needs attention on the dashboard: Fix anything listed there first."
          },
          {
            "stepNumber": 2,
            "title": "Review unanswered questions",
            "instruction": "Review unanswered questions: Dashboard → Questions your chatbot couldn't answer."
          },
          {
            "stepNumber": 3,
            "title": "Check new feedback",
            "instruction": "Check new feedback: Answer feedback → filter by Not helpful."
          },
          {
            "stepNumber": 4,
            "title": "Make sure no visitor is waiting in the Inbox",
            "instruction": "Make sure no visitor is waiting in the Inbox"
          },
          {
            "stepNumber": 5,
            "title": "Monitor usage",
            "instruction": "Monitor usage: Questions answered today, and AI usage this month."
          }
        ]
      },
      {
        "id": "operations-checklist-3",
        "type": "steps",
        "title": "Weekly Checklist",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Update the knowledge base",
            "instruction": "Update the knowledge base: Add answers for recurring unanswered questions; refresh changed web pages."
          },
          {
            "stepNumber": 2,
            "title": "Review a sample of conversations",
            "instruction": "Review a sample of conversations: Conversations → All conversations. Look for poor or incomplete answers."
          },
          {
            "stepNumber": 3,
            "title": "Fix every 👎 rating from the week",
            "instruction": "Fix every 👎 rating from the week"
          },
          {
            "stepNumber": 4,
            "title": "Run your test questions in a private window",
            "instruction": "Run your test questions in a private window"
          },
          {
            "stepNumber": 5,
            "title": "Check no documents are failed or stuck",
            "instruction": "Check no documents are failed or stuck"
          },
          {
            "stepNumber": 6,
            "title": "Confirm the chatbot shows as Installed",
            "instruction": "Confirm the chatbot shows as Installed"
          }
        ]
      },
      {
        "id": "operations-checklist-4",
        "type": "steps",
        "title": "Monthly Checklist",
        "steps": [
          {
            "stepNumber": 1,
            "title": "Analyse performance",
            "instruction": "Analyse performance: Compare questions, handoffs and satisfaction with last month."
          },
          {
            "stepNumber": 2,
            "title": "Review AI usage against your allowance",
            "instruction": "Review AI usage against your allowance: Ask your provider about your plan if you're regularly near the limit."
          },
          {
            "stepNumber": 3,
            "title": "Remove outdated content",
            "instruction": "Remove outdated content"
          },
          {
            "stepNumber": 4,
            "title": "Review members and roles",
            "instruction": "Review members and roles: Revoke access for leavers; check high-risk permissions."
          },
          {
            "stepNumber": 5,
            "title": "Review Role, Avoid and tone settings",
            "instruction": "Review Role, Avoid and tone settings"
          },
          {
            "stepNumber": 6,
            "title": "Check your teams are staffed for the month ahead",
            "instruction": "Check your teams are staffed for the month ahead"
          }
        ]
      }
    ]
  },
  {
    "id": "art-glossary",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-ref",
    "slug": "glossary",
    "title": "Glossary of Terms",
    "summary": "Clear, non-technical definitions of all multi-tenant portal, AI, RAG, and permissions terminology.",
    "difficulty": "Beginner",
    "estimatedMinutes": 5,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "glossary-lead",
        "type": "paragraph",
        "lead": "Plain-English meanings of the terms used in the portal and this guide.",
        "body": "A quick-reference dictionary of technical, AI, and administrative terminology used throughout the Falgoon Nursery Admin System."
      },
      {
        "id": "glossary-table",
        "type": "table",
        "title": "Complete Terms & Meanings Dictionary",
        "table": {
          "headers": [
            "Term",
            "Plain-English Meaning"
          ],
          "rows": [
            [
              "Tenant",
              "Your organisation's own private space in the portal. Your content, conversations, settings and members are completely separate from every other organisation's."
            ],
            [
              "Assistant / AI chatbot",
              "The AI that answers your visitors' questions on your website, using only your content."
            ],
            [
              "Assistant type",
              "The kind of organisation your chatbot speaks for (for example UK nursery, or education and training provider). It decides which industry rules apply. Set by your platform provider."
            ],
            [
              "Knowledge base",
              "The collection of documents and web pages your chatbot answers from."
            ],
            [
              "Source",
              "A single document or web page in your knowledge base. Answers show which sources they used."
            ],
            [
              "Passage",
              "A short piece of a source. The portal splits each source into passages so the chatbot can find exactly the relevant part."
            ],
            [
              "Retrieval",
              "The search step: finding the passages that best match a question before the answer is written. Test search shows you this step."
            ],
            [
              "Citation",
              "The small number after a fact in an answer (such as 1 ), linking it to the source it came from."
            ],
            [
              "Token",
              "The unit AI usage is measured in, roughly three-quarters of a word. Longer questions, sources and answers use more tokens. Your monthly allowance is measured in tokens."
            ],
            [
              "AI model",
              "The AI engine that writes answers. It's chosen and maintained by your platform provider."
            ],
            [
              "Conversation",
              "One chat between a visitor (or member) and your chatbot, possibly including a colleague after a handoff."
            ],
            [
              "Handoff",
              "Passing a conversation from the AI to a person on one of your teams."
            ],
            [
              "Team",
              "A group of your colleagues who take handed-over conversations, such as \"Admissions\"."
            ],
            [
              "Allowance",
              "How much your plan lets your chatbot answer: a daily number of questions, and a monthly amount of AI usage."
            ],
            [
              "Embed code",
              "The single line you paste into your website to show the chatbot. It isn't secret."
            ],
            [
              "Allowed website",
              "A website address where your chatbot may appear. It stays hidden everywhere else."
            ],
            [
              "Role",
              "A named set of permissions given to members, such as Tenant Administrator."
            ],
            [
              "Permission",
              "One specific thing a person may do, such as \"read conversations\"."
            ],
            [
              "Two-step sign-in (MFA)",
              "Signing in with your password plus a code from an app on your phone, so a stolen password alone isn't enough."
            ],
            [
              "Designated Safeguarding Lead (DSL)",
              "The person in your organisation responsible for child protection. Your chatbot directs safeguarding concerns to them, so your knowledge base should say who they are and how to reach them."
            ],
            [
              "Visibility",
              "Which people in your organisation can see a knowledge base in the portal. It doesn't affect what your website chatbot answers from."
            ],
            [
              "Retention period",
              "How long conversations are kept before they are deleted automatically. Set on the AI Chatbot page's Handoff & limits tab."
            ],
            [
              "Audit trail",
              "A permanent record of important actions, such as opening a visitor's conversation or deleting a knowledge base."
            ]
          ]
        }
      }
    ]
  },
  {
    "id": "art-about-guide",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-ref",
    "slug": "about-guide",
    "title": "About This Guide & Version History",
    "summary": "Guide version details, sharing options, accessibility features, and recent portal updates.",
    "difficulty": "Beginner",
    "estimatedMinutes": 4,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "about-guide-blk-1",
        "type": "paragraph",
        "lead": "How to share it, what has changed, and how it supports different needs."
      },
      {
        "id": "about-guide-blk-2",
        "type": "paragraph",
        "title": "Sharing this guide",
        "body": "This guide lives inside the portal at /help , for example https://portal.yourcompany.com/help . Anyone with the link can read it, with no account needed, so you can send it to a new colleague before their account exists."
      },
      {
        "id": "about-guide-blk-3",
        "type": "steps",
        "title": "Sharing this guide",
        "steps": [
          {
            "stepNumber": 1,
            "title": "In the portal's left-hand menu, find Help → User guide .",
            "instruction": "In the portal's left-hand menu, find Help → User guide ."
          },
          {
            "stepNumber": 2,
            "title": "Click the link icon",
            "instruction": "beside it. The guide's address is copied."
          },
          {
            "stepNumber": 3,
            "title": "Paste it",
            "instruction": "into an email or a message."
          }
        ]
      },
      {
        "id": "about-guide-blk-4",
        "type": "callout",
        "callout": {
          "type": "info",
          "title": "Link straight to a section",
          "content": "Add a section name to the end of the link, for example /help#troubleshooting or /help#first-day ."
        }
      },
      {
        "id": "about-guide-blk-whats-new",
        "type": "table",
        "title": "What's new in this guide",
        "table": {
          "headers": [
            "Version",
            "Release Date & Changes"
          ],
          "rows": [
            [
              "Version 1.1",
              "1 October 2026. New chapters: Your first day, Safeguarding and data protection, and About this guide. New sections: who can see a knowledge base, the first-week plan, and the Help menu. Screenshots retaken with a fictional nursery. Easier to read on small phones: tap a screenshot, then tap again to see it at reading size."
            ],
            [
              "Version 1.0",
              "30 September 2026. First edition."
            ]
          ]
        }
      },
      {
        "id": "about-guide-blk-5",
        "type": "paragraph",
        "title": "Accessibility",
        "body": "• Every screenshot has a text description for screen readers, and the steps never rely on the picture alone.\n• Keyboard: / opens search, Tab moves between links, and Esc closes an enlarged screenshot.\n• Reduced motion: if your device is set to reduce motion, the guide jumps instead of scrolling smoothly.\n• Dark mode follows your device, or use the button at the bottom of the menu.\n• Printing: print from your browser for a paper copy; the menu and buttons are left out and each chapter starts on a new page.\n\nIf something in this guide is hard to use, tell your platform provider so it can be fixed."
      }
    ]
  },
  {
    "id": "art-gallery",
    "softwareId": "falgoon-admin",
    "categoryId": "cat-ref",
    "slug": "screenshot-gallery",
    "title": "Screenshot Gallery Walkthrough",
    "summary": "Full-fidelity visual reference gallery of all 41 administrative screens, modals, and website widget states.",
    "difficulty": "Beginner",
    "estimatedMinutes": 6,
    "requiredPermissions": [
      "tenant.view"
    ],
    "versionTag": "v1.0 (Flagship)",
    "status": "published",
    "lastUpdated": "01 Oct 2026",
    "blocks": [
      {
        "id": "gallery-blk-1",
        "type": "paragraph",
        "lead": "All the screenshots in this guide. Click one to enlarge it; use the arrow keys to move between them."
      },
      {
        "id": "gallery-intro",
        "type": "paragraph",
        "lead": "Explore all 41 high-resolution visual cards, interface screenshots, and step-by-step illustrations from the Falgoon Nursery Admin System.",
        "body": "Every visual is captured directly from the live multi-tenant portal and website widget, showing actual controls, badge indicators, and operational views."
      },
      {
        "id": "gallery-shot-1",
        "type": "screenshot",
        "screenshotId": "02-dashboard",
        "imageUrl": "/screenshots/02-dashboard.webp",
        "caption": "The tenant dashboard of the AI Assistant Portal"
      },
      {
        "id": "gallery-shot-2",
        "type": "screenshot",
        "screenshotId": "01-login",
        "imageUrl": "/screenshots/01-login.webp",
        "caption": "The sign-in page with Email and Password fields, a Sign in button and Google and Facebook options"
      },
      {
        "id": "gallery-shot-3",
        "type": "screenshot",
        "screenshotId": "02-tenant-switcher",
        "imageUrl": "/screenshots/02-tenant-switcher.webp",
        "caption": "The organisation switcher opened at the top right of the portal"
      },
      {
        "id": "gallery-shot-4",
        "type": "screenshot",
        "screenshotId": "12-help-menu",
        "imageUrl": "/screenshots/12-help-menu.webp",
        "caption": "The left-hand menu with the Tenant, Account, Help and Data analysis groups; Help contains User guide with a link icon beside it"
      },
      {
        "id": "gallery-shot-5",
        "type": "screenshot",
        "screenshotId": "02-dashboard-full",
        "imageUrl": "/screenshots/02-dashboard-full.webp",
        "caption": "The full dashboard: setup checklist, needs attention panel, four key figures, activity chart, chatbot card, unanswered questions and knowledge summary"
      },
      {
        "id": "gallery-shot-6",
        "type": "screenshot",
        "screenshotId": "02-dashboard",
        "imageUrl": "/screenshots/02-dashboard.webp",
        "caption": "The top of the dashboard with the four key figure cards"
      },
      {
        "id": "gallery-shot-7",
        "type": "screenshot",
        "screenshotId": "02-dashboard-unanswered",
        "imageUrl": "/screenshots/02-dashboard-unanswered.webp",
        "caption": "The list of questions the chatbot couldn't answer, each with a count and when it was last asked"
      },
      {
        "id": "gallery-shot-8",
        "type": "screenshot",
        "screenshotId": "05-chatbot",
        "imageUrl": "/screenshots/05-chatbot.webp",
        "caption": "The AI Chatbot page with the on/off switch, the On your website card and a live preview panel"
      },
      {
        "id": "gallery-shot-9",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab1-identity",
        "imageUrl": "/screenshots/05-chatbot-tab1-identity.webp",
        "caption": "The Identity tab with Chatbot name, Chatbot title, Avatar and Greeting fields"
      },
      {
        "id": "gallery-shot-10",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab2-behaviour",
        "imageUrl": "/screenshots/05-chatbot-tab2-behaviour.webp",
        "caption": "The Behaviour tab with Role and Avoid text boxes"
      },
      {
        "id": "gallery-shot-11",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab3-tone-style",
        "imageUrl": "/screenshots/05-chatbot-tab3-tone-style.webp",
        "caption": "The Tone and style tab with Personality and Response length options"
      },
      {
        "id": "gallery-shot-12",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab4-company",
        "imageUrl": "/screenshots/05-chatbot-tab4-company.webp",
        "caption": "The Company tab showing the assistant type, Company name, Industry and Company description"
      },
      {
        "id": "gallery-shot-13",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab5-reply-experience",
        "imageUrl": "/screenshots/05-chatbot-tab5-reply-experience.webp",
        "caption": "The Reply experience tab with Quick reply suggestions and Use visitor location switches"
      },
      {
        "id": "gallery-shot-14",
        "type": "screenshot",
        "screenshotId": "05-chatbot-tab6-handoff-limits",
        "imageUrl": "/screenshots/05-chatbot-tab6-handoff-limits.webp",
        "caption": "The Handoff and limits tab with transfer switches, teams, daily limit, time zone and conversation retention"
      },
      {
        "id": "gallery-shot-15",
        "type": "screenshot",
        "screenshotId": "07-kb-list",
        "imageUrl": "/screenshots/07-kb-list.webp",
        "caption": "The Knowledge bases page listing one knowledge base with Documents, Ask, Embed, Test search and delete actions"
      },
      {
        "id": "gallery-shot-16",
        "type": "screenshot",
        "screenshotId": "07-kb-embed",
        "imageUrl": "/screenshots/07-kb-embed.webp",
        "caption": "The Embed window showing the website chatbot, its allowed address and daily limit, its status Live, and the embed code"
      },
      {
        "id": "gallery-shot-17",
        "type": "screenshot",
        "screenshotId": "07-kb-new",
        "imageUrl": "/screenshots/07-kb-new.webp",
        "caption": "The New knowledge base dialog with Name, Description and Visibility fields and a Create and add documents button"
      },
      {
        "id": "gallery-shot-18",
        "type": "screenshot",
        "screenshotId": "07-kb-documents",
        "imageUrl": "/screenshots/07-kb-documents.webp",
        "caption": "The documents window: a drop area for files and a list of documents, each marked Ready with a number of searchable passages"
      },
      {
        "id": "gallery-shot-19",
        "type": "screenshot",
        "screenshotId": "07-kb-add-from-web",
        "imageUrl": "/screenshots/07-kb-add-from-web.webp",
        "caption": "The Add from the web section with a mode selector, a box for URLs, a Start button and a web source showing Last crawled and 25 of 25 pages"
      },
      {
        "id": "gallery-shot-20",
        "type": "screenshot",
        "screenshotId": "07-kb-document-detail",
        "imageUrl": "/screenshots/07-kb-document-detail.webp",
        "caption": "A document's detail window listing its numbered passages with their text and size"
      },
      {
        "id": "gallery-shot-21",
        "type": "screenshot",
        "screenshotId": "07-kb-test-search",
        "imageUrl": "/screenshots/07-kb-test-search.webp",
        "caption": "The Test search window for the question full day fees for toddlers, listing the fees document first, then admissions, the handbook and term dates, each with a score"
      },
      {
        "id": "gallery-shot-22",
        "type": "screenshot",
        "screenshotId": "07-kb-delete-confirm",
        "imageUrl": "/screenshots/07-kb-delete-confirm.webp",
        "caption": "The delete confirmation stating how many documents and passages will be removed, asking you to type the name to confirm"
      },
      {
        "id": "gallery-shot-23",
        "type": "screenshot",
        "screenshotId": "07-kb-ask",
        "imageUrl": "/screenshots/07-kb-ask.webp",
        "caption": "The Ask window with an empty question box"
      },
      {
        "id": "gallery-shot-24",
        "type": "screenshot",
        "screenshotId": "11-widget-closed",
        "imageUrl": "/screenshots/11-widget-closed.webp",
        "caption": "A website with the round chat button in the bottom-right corner"
      },
      {
        "id": "gallery-shot-25",
        "type": "screenshot",
        "screenshotId": "11-widget-open",
        "imageUrl": "/screenshots/11-widget-open.webp",
        "caption": "The open chat window with a greeting and quick reply buttons"
      },
      {
        "id": "gallery-shot-26",
        "type": "screenshot",
        "screenshotId": "11-widget-sources",
        "imageUrl": "/screenshots/11-widget-sources.webp",
        "caption": "The chatbot answering that a full day for a 2-year-old is £74, with a citation number and the fees document listed below as its source"
      },
      {
        "id": "gallery-shot-27",
        "type": "screenshot",
        "screenshotId": "08-conversations-all",
        "imageUrl": "/screenshots/08-conversations-all.webp",
        "caption": "The conversation list showing title, who, handled by, status and last message date for each conversation"
      },
      {
        "id": "gallery-shot-28",
        "type": "screenshot",
        "screenshotId": "08-conversations-search",
        "imageUrl": "/screenshots/08-conversations-search.webp",
        "caption": "The conversation list filtered by the word allergy, showing the matching conversation"
      },
      {
        "id": "gallery-shot-29",
        "type": "screenshot",
        "screenshotId": "08-conversation-thread",
        "imageUrl": "/screenshots/08-conversation-thread.webp",
        "caption": "An opened conversation: the parent's question, the AI's cited answer, the request for a person, and a staff-only AI handoff summary"
      },
      {
        "id": "gallery-shot-30",
        "type": "screenshot",
        "screenshotId": "09-feedback",
        "imageUrl": "/screenshots/09-feedback.webp",
        "caption": "The Answer feedback page with totals for ratings, helpful, not helpful and satisfaction, filters, and a list of rated answers"
      },
      {
        "id": "gallery-shot-31",
        "type": "screenshot",
        "screenshotId": "09-feedback-detail",
        "imageUrl": "/screenshots/09-feedback-detail.webp",
        "caption": "A rating's detail window showing the question and the answer that was rated"
      },
      {
        "id": "gallery-shot-32",
        "type": "screenshot",
        "screenshotId": "06-inbox",
        "imageUrl": "/screenshots/06-inbox.webp",
        "caption": "The Inbox with one parent waiting for the Admissions team and a Claim button, and the Teams section listing Admissions and Office team"
      },
      {
        "id": "gallery-shot-33",
        "type": "screenshot",
        "screenshotId": "06-inbox-new-team",
        "imageUrl": "/screenshots/06-inbox-new-team.webp",
        "caption": "The New team window with Name, Description, an Offered to visitors switch and a list of people to add"
      },
      {
        "id": "gallery-shot-34",
        "type": "screenshot",
        "screenshotId": "03-members",
        "imageUrl": "/screenshots/03-members.webp",
        "caption": "The Members page listing each person with status, roles and the date they joined"
      },
      {
        "id": "gallery-shot-35",
        "type": "screenshot",
        "screenshotId": "03-members-edit",
        "imageUrl": "/screenshots/03-members-edit.webp",
        "caption": "The Edit job title window"
      },
      {
        "id": "gallery-shot-36",
        "type": "screenshot",
        "screenshotId": "04-roles-tab1-roles",
        "imageUrl": "/screenshots/04-roles-tab1-roles.webp",
        "caption": "The Roles tab listing the Tenant Owner, Tenant Administrator and Member system roles and a custom Front office role"
      },
      {
        "id": "gallery-shot-37",
        "type": "screenshot",
        "screenshotId": "04-roles-tab2-hierarchy",
        "imageUrl": "/screenshots/04-roles-tab2-hierarchy.webp",
        "caption": "The Hierarchy tab for making one role inherit another"
      },
      {
        "id": "gallery-shot-38",
        "type": "screenshot",
        "screenshotId": "04-roles-tab3-overrides",
        "imageUrl": "/screenshots/04-roles-tab3-overrides.webp",
        "caption": "The Overrides tab for granting or denying one permission to one member"
      },
      {
        "id": "gallery-shot-39",
        "type": "screenshot",
        "screenshotId": "04-roles-tab4-my-permissions",
        "imageUrl": "/screenshots/04-roles-tab4-my-permissions.webp",
        "caption": "The My permissions tab listing permissions grouped by area with their risk level"
      },
      {
        "id": "gallery-shot-40",
        "type": "screenshot",
        "screenshotId": "10-account-full",
        "imageUrl": "/screenshots/10-account-full.webp",
        "caption": "The My identity page with Profile, Password, Multi-factor authentication, Linked sign-in providers and Sessions sections"
      },
      {
        "id": "gallery-shot-41",
        "type": "screenshot",
        "screenshotId": "11-widget-safeguarding",
        "imageUrl": "/screenshots/11-widget-safeguarding.webp",
        "caption": "On the nursery website, a parent says they are worried about a child, and the chatbot directs them to the Designated Safeguarding Lead, gives the office phone number, and says to call 999 if a child is in immediate danger"
      }
    ]
  }
];
