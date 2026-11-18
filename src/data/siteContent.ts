import type {
  CommunityOrganisation,
  HelplineEntry,
  RemovalPathway,
  SectionSummary,
  SiteMetadata,
} from '../types/content';

export const SITE_METADATA: SiteMetadata = {
  brandName: 'iZoon',
  lastCheckedDate: '17 November 2026',
  disclaimerText:
    'This website provides general digital safety and awareness information only. It does not constitute legal, medical, or law-enforcement advice.',
  quickExitNote:
    'Quick Exit navigates away immediately to a neutral page (Wikipedia). It does not erase your browser history or guarantee device privacy.',
  quickExitUrl: 'https://en.wikipedia.org/wiki/Main_Page',
  correctionsEmailPlaceholder: 'corrections-placeholder@izoon-guide.org',
  regionalFocusNote:
    'Prepared for readers across India with specific context for Jammu and Kashmir.',
};

export const MAIN_SECTIONS: SectionSummary[] = [
  {
    id: 'sec-1',
    order: 1,
    slug: 'awareness',
    title: 'Awareness',
    shortLabel: 'Awareness',
    summary:
      'Understand what gender disinformation is, how targeted narratives work, and why online falsehoods carry real-world consequences.',
    readingNote: 'Foundational context',
  },
  {
    id: 'sec-2',
    order: 2,
    slug: 'blackmail-support',
    title: 'If Someone Blackmails or Threatens You',
    shortLabel: 'Blackmail Help',
    summary:
      'Calm, practical first steps if you face online extortion, leaked-image threats, or coercion—focused on safety and preserving proof.',
    readingNote: 'Immediate safety steps',
  },
  {
    id: 'sec-3',
    order: 3,
    slug: 'all-the-numbers',
    title: 'All the Numbers',
    shortLabel: 'All the Numbers',
    summary:
      'National public helplines, reporting portals, and clearly marked regional Jammu & Kashmir placeholders awaiting local verification.',
    readingNote: 'Contacts directory',
  },
  {
    id: 'sec-4',
    order: 4,
    slug: 'deepfakes',
    title: 'Deepfakes',
    shortLabel: 'Deepfakes',
    summary:
      'How synthetic photos, videos, and cloned voices are used in gender-based harassment, common visual cues, and how to respond.',
    readingNote: 'Synthetic media guide',
  },
  {
    id: 'sec-5',
    order: 5,
    slug: 'fact-checking',
    title: 'How to Fact-check Wrong Information',
    shortLabel: 'Fact-checking',
    summary:
      'A practical verification routine for checking suspicious forwards, cropped screenshots, and out-of-context clips before sharing.',
    readingNote: 'Verification checklist',
  },
  {
    id: 'sec-6',
    order: 6,
    slug: 'image-removal',
    title: 'Getting an Image Removed',
    shortLabel: 'Image Removal',
    summary:
      'Structured steps for reporting non-consensual images, using hash-matching tools like StopNCII.org, and requesting platform takedowns.',
    readingNote: 'Takedown pathways',
  },
];

export const HELPLINE_ENTRIES: HelplineEntry[] = [
  {
    id: 'hl-112',
    name: 'National Emergency Response (ERSS)',
    numberOrPortal: '112',
    isPhone: true,
    category: 'emergency',
    region: 'All India (including Jammu & Kashmir)',
    hours: '24/7',
    purpose:
      'Immediate police, safety, or physical emergency response if threats escalate offline or you feel in physical danger.',
    verificationStatus: 'verified-public',
    verificationNote: 'Standard Government of India emergency helpline.',
  },
  {
    id: 'hl-1930',
    name: 'National Cyber Financial Fraud Helpline',
    numberOrPortal: '1930',
    isPhone: true,
    category: 'emergency',
    region: 'All India (including Jammu & Kashmir)',
    hours: '24/7',
    purpose:
      'Dedicated helpline for immediate reporting of cyber financial fraud. For other categories of cybercrime (such as blackmail, impersonation, deepfakes, or online harassment), use the National Cyber Crime Reporting Portal.',
    verificationStatus: 'verified-public',
    verificationNote: 'Ministry of Home Affairs national financial cyber-fraud helpline.',
  },
  {
    id: 'hl-cyber-portal',
    name: 'National Cyber Crime Reporting Portal',
    numberOrPortal: 'cybercrime.gov.in',
    isPhone: false,
    category: 'emergency',
    region: 'All India',
    hours: 'Online Portal',
    purpose:
      'Official Government of India portal that accepts reports about different kinds of cybercrime. Anonymous reporting is limited to specified sexually explicit content categories; other reporting routes may require registration and contact details.',
    verificationStatus: 'verified-public',
    verificationNote: 'Confirm current reporting categories and instructions directly on cybercrime.gov.in.',
    websiteUrl: 'https://cybercrime.gov.in/',
    websiteLabel: 'Visit Portal',
    secondaryUrl: 'https://cybercrime.gov.in/Webform/FAQ.aspx',
    secondaryLabel: 'Portal FAQ',
  },
  {
    id: 'hl-181',
    name: 'Women Helpline',
    numberOrPortal: '181',
    isPhone: true,
    category: 'women-youth',
    region: 'All India (state/UT routed)',
    hours: '24/7',
    purpose:
      'Toll-free support connecting women facing violence, threats, or distress to emergency response and support services.',
    verificationStatus: 'verified-public',
    verificationNote: 'Routing in specific J&K districts should be confirmed locally.',
  },
  {
    id: 'hl-1098',
    name: 'Child Helpline',
    numberOrPortal: '1098',
    isPhone: true,
    category: 'women-youth',
    region: 'All India',
    hours: '24/7',
    purpose:
      'Emergency assistance and protection support for anyone under 18 facing online exploitation, coercion, or abuse.',
    verificationStatus: 'verified-public',
  },
  {
    id: 'hl-mental-health',
    name: 'Tele-MANAS',
    numberOrPortal: '14416 / 1800-891-4416',
    isPhone: true,
    category: 'support-legal',
    region: 'All India (including J&K)',
    hours: '24/7',
    purpose:
      'Government tele-mental health support offering confidential emotional and mental-health assistance.',
    verificationStatus: 'verified-public',
    verificationNote: 'Confirm regional language availability when calling.',
  },
  {
    id: 'hl-nalsa',
    name: 'National Legal Services Authority (NALSA) – Legal Aid Helpline',
    numberOrPortal: '15100',
    isPhone: true,
    category: 'support-legal',
    region: 'All India',
    hours: 'Confirm operating hours',
    purpose:
      'Provides information and access to legal aid. Women and children are among the categories eligible for free legal aid, subject to applicable rules.',
    verificationStatus: 'verified-public',
    verificationNote: 'Confirm current eligibility rules and operating hours on nalsa.gov.in.',
    websiteUrl: 'https://nalsa.gov.in/',
    websiteLabel: 'nalsa.gov.in',
  },
  {
    id: 'hl-jk-kashmir-cyber',
    name: 'Cyber Police Station – Kashmir Zone',
    numberOrPortal: '[Verification Needed — Confirm Direct Desk Number]',
    isPhone: false,
    category: 'jammu-kashmir',
    region: 'Kashmir Division, J&K',
    hours: 'Confirm office hours',
    purpose:
      'Regional police unit handling cybercrime complaints in the Kashmir Division.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Unverified placeholder: Verify official telephone number, email, address, and working hours from the official J&K Police directory.',
  },
  {
    id: 'hl-jk-jammu-cyber',
    name: 'Cyber Police Station – Jammu Zone',
    numberOrPortal: '[Verification Needed — Confirm Direct Desk Number]',
    isPhone: false,
    category: 'jammu-kashmir',
    region: 'Jammu Division, J&K',
    hours: 'Confirm office hours',
    purpose:
      'Regional police unit handling cybercrime complaints in the Jammu Division.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Unverified placeholder: Verify official telephone number, email, address, and working hours from the official J&K Police directory.',
  },
  {
    id: 'hl-jk-osc',
    name: 'Sakhi One Stop Centres – District Offices, J&K',
    numberOrPortal: '[Verification Needed — Add District-Wise Contacts]',
    isPhone: false,
    category: 'jammu-kashmir',
    region: 'Jammu & Kashmir Districts',
    hours: 'Confirm district schedules',
    purpose:
      'Government-supported centres offering integrated medical, legal, counselling, and temporary shelter guidance for women.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Unverified placeholder: Confirm verified district telephone numbers, addresses, and schedules before publication.',
  },
  {
    id: 'hl-jk-legal-aid',
    name: 'J&K Legal Services Authority – Local Contact Details',
    numberOrPortal: '[Verification Needed — Confirm Local JKLSA Desk]',
    isPhone: false,
    category: 'jammu-kashmir',
    region: 'Jammu & Kashmir',
    hours: 'Confirm office hours',
    purpose:
      'Regional legal-services authority office handling local legal-aid applications and assistance in Jammu & Kashmir.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Unverified placeholder: Verify local J&K Legal Services Authority telephone numbers, address, and working hours before publication.',
  },
];

export const JK_WOMEN_CENTRED_ORGANISATIONS: CommunityOrganisation[] = [
  {
    id: 'org-mehram',
    name: "Mehram – Women's Cell, Kashmir",
    categoryLabel: 'Community Organisations / Support and Referral',
    verificationLabel: 'Directory-published (confirm directly)',
    location: 'Kashmir Valley / Srinagar.',
    description:
      'A women-led collective publicly described as supporting women experiencing gender-based violence, including legal assistance and referrals.',
    phones: ['+91 88996 38150'],
    email: 'mehramkashmir@gmail.com',
    websiteUrl: 'https://www.facebook.com/MehramKashmir/',
    websiteLabel: 'Facebook Page',
    note: 'Contact details are published in a support-services directory rather than independently confirmed. Current operating status, contact hours and services must be confirmed directly before relying on them.',
    sourceLabel: 'Source: Support-services directory listing & public social page',
  },
  {
    id: 'org-the-sara',
    name: 'THE-SARA',
    categoryLabel: 'Community Organisations / Support and Referral',
    verificationLabel: 'Organisation website (confirm directly)',
    location: '106 Apna Vihar Housing Colony, Kunjwani, Jammu Tawi – 180010.',
    description:
      'A Jammu & Kashmir non-profit whose published work includes mental-health awareness, crisis support, health and education.',
    phones: ['+91 94191 91666', '+91 90860 91666'],
    websiteUrl: 'https://thesara.org.in/',
    websiteLabel: 'Website',
    contactPageUrl: 'https://thesara.org.in/contact/',
    contactPageLabel: 'Contact Page',
    note: 'Do not assume or treat this organisation as a specialist GBV or legal-aid provider without direct confirmation.',
    sourceLabel: 'Source: thesara.org.in & official contact page',
  },
  {
    id: 'org-nazakat',
    name: 'Nazakat Mahila Mandal',
    categoryLabel: 'Community Organisations / Support and Referral',
    verificationLabel: 'Organisation website (confirm directly)',
    location: 'Main Chowk, Sopore, Baramulla, Kashmir – 193201.',
    description:
      "Its website describes work in women's empowerment, childcare, health, education, advocacy, relief and rehabilitation, including support for people affected by violence.",
    phones: ['+91 99064 50362'],
    email: 'nazakatngo@gmail.com',
    websiteUrl: 'https://nazakatngo.weebly.com/',
    websiteLabel: 'Website',
    note: 'Specialist legal representation, shelter or formal GBV case management are not confirmed; confirm current services directly with the organisation.',
    sourceLabel: 'Source: nazakatngo.weebly.com',
  },
  {
    id: 'org-help-foundation',
    name: 'HELP Foundation J&K',
    categoryLabel: 'Community Organisations / Support and Referral',
    verificationLabel: 'Organisation website (confirm directly)',
    location: '#50, Tulsibagh, Srinagar, Jammu & Kashmir – 190008.',
    description:
      "A community-based organisation whose published programmes include women's empowerment, vocational skills, livelihood support, education, healthcare, child protection and rehabilitation.",
    phones: ['+91 194 231 0256'],
    email: 'info@helpfoundation.live',
    websiteUrl: 'https://www.helpfoundation.live/',
    websiteLabel: 'Website',
    contactPageUrl: 'https://www.helpfoundation.live/contact-us',
    contactPageLabel: 'Contact Page',
    note: 'Livelihood and empowerment programmes should not be treated as equivalent to legal representation or specialist GBV case management.',
    sourceLabel: 'Source: helpfoundation.live & official contact page',
  },
];

export const REMOVAL_PATHWAYS: RemovalPathway[] = [
  {
    id: 'stopncii',
    platform: 'StopNCII.org (Hash-Based Prevention)',
    scope: 'Non-consensual intimate images across participating platforms',
    steps: [
      'Visit StopNCII.org from a safe, private browser session on the device that holds the image or video.',
      'The tool generates a cryptographic digital fingerprint (hash) directly on your device—the image itself is not uploaded.',
      'Participating platforms receive the hash and block matching uploads automatically when detected.',
      'Save your StopNCII case number and PIN securely in case you need to check status or withdraw a hash later.',
    ],
    evidenceTip:
      'Take screenshots of any posts or threats before using removal tools, since takedowns remove the public record.',
    verificationStatus: 'verified-public',
    verificationNote:
      'Check the current list of participating platforms directly on StopNCII.org.',
  },
  {
    id: 'meta',
    platform: 'Instagram & Facebook (Meta)',
    scope: 'Impersonation, deepfakes, harassment, and non-consensual photos',
    steps: [
      'Capture the profile URL and post link before reporting or blocking.',
      'Use the in-app "Report" option on the specific post, reel, or profile—select "Harassment or bullying", "Pretending to be someone", or "Nudity / intimate images".',
      'If an account is impersonating you, submit the dedicated impersonation report through the official Help Center.',
      'If an intimate image is involved, check whether StopNCII.org is applicable for proactive blocking.',
    ],
    evidenceTip:
      'Record the exact Instagram handle (username), because display names can be changed quickly.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Verify direct Meta Help Center / Grievance Officer India form URLs before publishing.',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    scope: 'Extortion messages, abusive groups, and forwarded falsehoods',
    steps: [
      'Export or screenshot full chat logs showing the sender’s phone number (with country code), message timestamps, and any threats.',
      'Use "Report" inside the chat or group settings—this shares the last five messages with WhatsApp for review.',
      'Block the sender only after preserving the evidence you need for a complaint.',
      'Adjust Privacy Settings so unknown accounts cannot add you to groups or view your profile photo and "About" text.',
    ],
    evidenceTip:
      'Keep the phone number visible in screenshots rather than only a saved contact name.',
    verificationStatus: 'verified-public',
    verificationNote:
      'Confirm current WhatsApp India Grievance Officer contact details on whatsapp.com before linking.',
  },
  {
    id: 'x-youtube',
    platform: 'X (Twitter) & YouTube',
    scope: 'Doctored videos, deepfake clips, doxxing, and targeted abuse',
    steps: [
      'Copy the direct URL of the video, tweet, or channel and note the timestamp of any harmful clip.',
      'Use the platform’s Privacy Complaint or Non-Consensual Media / Synthetic Media reporting workflow.',
      'On YouTube, check the "Privacy Complaint Process" if your likeness or private details appear without consent.',
      'Keep confirmation emails or ticket IDs from the platform for follow-up or cybercrime complaints.',
    ],
    evidenceTip:
      'Archive the channel ID and upload date; reposted clips often use slightly altered titles.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Verify current India Grievance Officer links for X and Google/YouTube before publishing.',
  },
  {
    id: 'search-telegram',
    platform: 'Google Search De-indexing & Telegram',
    scope: 'Removing personal details or non-consensual imagery from search results and channels',
    steps: [
      'For Google Search: use Google’s "Remove select personally identifiable information (PII) or doxxing content" and "Non-consensual explicit or intimate personal images" request forms.',
      'Note that removing a link from Google Search hides it from search results; the underlying website must still be addressed separately.',
      'For Telegram: forward abusive public channel links or messages to Telegram’s abuse reporting desk inside the app or via their official abuse email.',
      'If content persists and constitutes an offence, attach platform ticket numbers to a complaint on cybercrime.gov.in.',
    ],
    evidenceTip:
      'For Telegram, copy the public t.me message link and channel username before the channel disappears or renames.',
    verificationStatus: 'verification-needed',
    verificationNote:
      'Verify direct Google Search removal form URLs and Telegram India compliance contacts prior to release.',
  },
];
