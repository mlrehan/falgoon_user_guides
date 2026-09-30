import { TroubleshootingItem } from '../types/docs';

export const TROUBLESHOOTING_DATA: TroubleshootingItem[] = [
  {
    id: 't-cant-answer',
    category: 'Answers',
    problem: 'The AI cannot answer questions it should know',
    causes: [
      'The information is not in your knowledge base, or is phrased very differently.',
      'The document or web page is still processing in the background, or failed.',
      'The website chatbot is configured to answer from a different knowledge base.'
    ],
    steps: [
      'Run a Test search with the visitor\'s exact wording in Knowledge bases → Test search.',
      'If the right page is not listed near the top, add a clear FAQ document or update the page with question-style headers.',
      'Check that every document shows a green tick with "Ready" in the documents window.',
      'Ask the question again in a fresh, private (incognito) chat window.'
    ]
  },
  {
    id: 't-wrong-type',
    category: 'Answers',
    problem: 'The chatbot says your sources belong to another organisation',
    causes: [
      'Your Assistant Type in the portal does not match your organization (e.g. set to UK nursery while you are an IT academy).',
      'The Company Name configured in the portal differs significantly from the trading name used throughout your documents.'
    ],
    steps: [
      'Check the Assistant type on the AI Chatbot → Company tab.',
      'If incorrect, contact your platform provider to switch it to the appropriate domain type.',
      'Ensure the Company description clearly mentions your trading name (e.g. "trading as London Academy of IT").',
      'Test again in a brand new chat session to avoid reading cached thread context.'
    ]
  },
  {
    id: 't-old-answers',
    category: 'Answers',
    problem: 'My changes do not show up on the website chatbot',
    causes: [
      'The chat window resumed an ongoing earlier visitor session.',
      'The visitor\'s web browser cached the chatbot script (cached for up to 60 minutes).',
      'You did not click the tab\'s specific Save button after making changes.'
    ],
    steps: [
      'Verify you clicked the "Save" button on the exact tab you modified.',
      'Open your website in an incognito/private browser window to force a fresh session.',
      'If changes still do not reflect after one hour, click "Check again" on the On your website card.'
    ]
  },
  {
    id: 't-not-on-site',
    category: 'Website',
    problem: 'The chat bubble does not appear on my website',
    causes: [
      'The embed script tag is missing from the HTML or pasted in the wrong location.',
      'The website domain URL is not listed under "Where it can appear".',
      'The chatbot was hidden or the master AI Chatbot switch is turned off.'
    ],
    steps: [
      'Check the "On your website" card status: does it read "Installed", "Not installed", or "Turned off"?',
      'Ensure your website domain exactly matches including "https://" and any "www." prefix.',
      'Ask your web developer to ensure the snippet is placed just before the closing </body> tag.',
      'Reload your website and click "Check again" on the AI Chatbot page.'
    ]
  },
  {
    id: 't-hidden-on',
    category: 'Website',
    problem: '"Your chatbot is hidden on <address>" notice appears on dashboard',
    causes: [
      'Your website moved to a new domain name, or you are testing on a staging environment.',
      'An external website copied your public embed snippet without authorization.'
    ],
    steps: [
      'If the address is your legitimate domain, click "Allow <address>" on the AI Chatbot page.',
      'If you do not recognize the domain, take no action: the chatbot will remain safely hidden there.'
    ]
  },
  {
    id: 't-doc-stuck',
    category: 'Content',
    problem: 'A document is stuck in processing',
    causes: [
      'The document is exceptionally large or contains complex image scans being read with OCR.',
      'A high volume of documents were uploaded simultaneously.',
      'A background worker queue requires a restart.'
    ],
    steps: [
      'Wait 3 to 5 minutes; check the percentage progress counter.',
      'If there is no progress after 30 minutes, retry uploading or contact support with the filename.'
    ]
  },
  {
    id: 't-doc-failed',
    category: 'Content',
    problem: 'A document failed or says "couldn\'t be read"',
    causes: [
      'The file is password-protected, encrypted, or corrupted.',
      'The document contains purely scanned graphics with unreadable contrast.',
      'The file extension does not match the actual binary format.'
    ],
    steps: [
      'Read the error message and failed stage shown under the document row.',
      'Remove password locks, open and re-export the document as a clean PDF or Word file.',
      'Click the "Retry" button on the document row, or delete the failed copy and upload the re-exported file.'
    ]
  },
  {
    id: 't-upload-refused',
    category: 'Content',
    problem: 'An upload is immediately refused by the portal',
    causes: [
      'The file format is unsupported (e.g. video files, executable archives).',
      'The file size exceeds the 50 MB per file limit.'
    ],
    steps: [
      'Check the supported formats list: PDF, Word, Excel, PowerPoint, Text, HTML, CSV, JSON, and common images.',
      'Split oversized documents into smaller chapters or compress large embedded photos.'
    ]
  },
  {
    id: 't-no-person',
    category: 'Handoff',
    problem: 'Visitors are not offered "Speak to a person"',
    causes: [
      'No team has active members assigned to it.',
      '"Allow transfer to a colleague" toggle is switched off.',
      'All teams have "Offered to visitors" switched off.'
    ],
    steps: [
      'Go to Inbox → Teams and ensure at least one team has at least one active staff member.',
      'Ensure "Allow transfer to a colleague" is toggled ON in AI Chatbot → Handoff & limits.',
      'Verify that the team\'s "Offered to visitors" toggle is enabled.'
    ]
  },
  {
    id: 't-daily-limit',
    category: 'Usage',
    problem: 'The chatbot stops answering part-way through the day',
    causes: [
      'Today\'s daily AI question limit was reached (e.g. 50/50 answered).',
      'The reset time zone is set to a different time zone from your local business hours.'
    ],
    steps: [
      'Check the "Questions answered today" counter on the dashboard.',
      'If you have a lower custom cap set, increase it up to your plan limit in AI Chatbot → Handoff & limits.',
      'Confirm the time zone is set to your local region (e.g. Europe/London).',
      'Contact your provider if you consistently exceed your tier limit.'
    ]
  },
  {
    id: 't-plan-disabled',
    category: 'Access',
    problem: 'A button is disabled ("Your plan doesn\'t include…")',
    causes: [
      'You have reached a package quota (e.g. maximum knowledge bases or chatbots).',
      'The feature (e.g. custom roles or additional staff seats) is restricted on your plan tier.'
    ],
    steps: [
      'Hover over or read the adjacent notification for the exact plan limit named.',
      'Delete unused knowledge bases or ask your administrator to upgrade your plan tier.'
    ]
  },
  {
    id: 't-signed-out',
    category: 'Access',
    problem: 'I was signed out unexpectedly',
    causes: [
      'Your password was changed, or "Sign out everywhere" was clicked.',
      'Your administrator temporarily suspended your account, or your session reached inactivity timeout.'
    ],
    steps: [
      'Sign in again with your credentials.',
      'If you suspect unauthorized access, immediately change your password and enroll an authenticator app.',
      'If login fails, contact your organisation\'s Tenant Owner.'
    ]
  }
];
