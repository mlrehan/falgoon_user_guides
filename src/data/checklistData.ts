import { ChecklistItem } from '../types/docs';

export const CHECKLIST_DATA: ChecklistItem[] = [
  // Daily
  {
    id: 'chk-d1',
    frequency: 'daily',
    task: 'Check "Needs attention" panel on Dashboard',
    subtext: 'Resolve any alerts such as empty teams, quota warnings, or hidden domains.',
    location: 'Dashboard'
  },
  {
    id: 'chk-d2',
    frequency: 'daily',
    task: 'Review "Questions your chatbot couldn\'t answer"',
    subtext: 'Identify missing customer answers and upload updated FAQ documents.',
    location: 'Dashboard → Questions couldn\'t answer'
  },
  {
    id: 'chk-d3',
    frequency: 'daily',
    task: 'Check new Answer Feedback ratings',
    subtext: 'Filter by "Not helpful" (thumbs down) and inspect why the answer was marked down.',
    location: 'Answer feedback'
  },
  {
    id: 'chk-d4',
    frequency: 'daily',
    task: 'Ensure no customer is waiting in the Staff Inbox',
    subtext: 'Confirm all transferred conversations have been claimed by team members.',
    location: 'Inbox'
  },
  {
    id: 'chk-d5',
    frequency: 'daily',
    task: 'Monitor daily AI message usage against your quota',
    subtext: 'Ensure usage stays safely within your daily allotment.',
    location: 'Dashboard → Your chatbot card'
  },

  // Weekly
  {
    id: 'chk-w1',
    frequency: 'weekly',
    task: 'Update the Knowledge Base with new FAQs',
    subtext: 'Add answers for recurring queries; trigger a web crawl refresh for changed pages.',
    location: 'Knowledge bases'
  },
  {
    id: 'chk-w2',
    frequency: 'weekly',
    task: 'Audit a sample of full conversation transcripts',
    subtext: 'Look for customer friction points, confusion, or incomplete answers.',
    location: 'Conversations → All conversations'
  },
  {
    id: 'chk-w3',
    frequency: 'weekly',
    task: 'Rectify every thumbs-down rating logged during the week',
    subtext: 'Correct outdated source facts and verify with test questions.',
    location: 'Answer feedback'
  },
  {
    id: 'chk-w4',
    frequency: 'weekly',
    task: 'Run the 10 core customer test questions in incognito mode',
    subtext: 'Simulate the public visitor experience to verify citations and responses.',
    location: 'Website Chat Widget'
  },
  {
    id: 'chk-w5',
    frequency: 'weekly',
    task: 'Verify all documents show "Ready" status',
    subtext: 'Confirm no documents are stuck in processing or marked as failed.',
    location: 'Knowledge bases → Documents'
  },
  {
    id: 'chk-w6',
    frequency: 'weekly',
    task: 'Confirm the chatbot status reads "Installed"',
    subtext: 'Verify the embed snippet continues loading properly on your live website.',
    location: 'AI Chatbot → On your website'
  },

  // Monthly
  {
    id: 'chk-m1',
    frequency: 'monthly',
    task: 'Analyze month-over-month performance trends',
    subtext: 'Compare total questions asked, handoff ratios, and satisfaction scores.',
    location: 'Dashboard KPIs'
  },
  {
    id: 'chk-m2',
    frequency: 'monthly',
    task: 'Review token consumption against monthly allowance',
    subtext: 'Evaluate if plan tier upgrade is required before next billing period.',
    location: 'Dashboard → AI usage this month'
  },
  {
    id: 'chk-m3',
    frequency: 'monthly',
    task: 'Purge obsolete and deprecated knowledge files',
    subtext: 'Delete expired term dates, old fee structures, and outdated staffing lists.',
    location: 'Knowledge bases'
  },
  {
    id: 'chk-m4',
    frequency: 'monthly',
    task: 'Audit user memberships and permission assignments',
    subtext: 'Immediately revoke access for former staff; verify high-risk permissions.',
    location: 'Members & Roles'
  },
  {
    id: 'chk-m5',
    frequency: 'monthly',
    task: 'Refine Role and Avoid prompt instructions',
    subtext: 'Incorporate new organizational policies or seasonal announcements.',
    location: 'AI Chatbot → Behaviour'
  },
  {
    id: 'chk-m6',
    frequency: 'monthly',
    task: 'Verify support teams are properly staffed for the month ahead',
    subtext: 'Ensure coverage during holiday periods and term breaks.',
    location: 'Inbox → Teams'
  }
];
