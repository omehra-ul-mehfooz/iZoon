export type SectionSlug =
  | 'awareness'
  | 'blackmail-support'
  | 'all-the-numbers'
  | 'deepfakes'
  | 'fact-checking'
  | 'image-removal';

export type VerificationStatus = 'verified-public' | 'verification-needed';

export interface SectionSummary {
  id: string;
  order: number;
  slug: SectionSlug;
  title: string;
  shortLabel: string;
  summary: string;
  readingNote: string;
}

export interface HelplineEntry {
  id: string;
  name: string;
  numberOrPortal: string;
  isPhone: boolean;
  category: 'emergency' | 'jammu-kashmir' | 'women-youth' | 'support-legal';
  region: string;
  hours: string;
  purpose: string;
  verificationStatus: VerificationStatus;
  verificationNote?: string;
  websiteUrl?: string;
  websiteLabel?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
}

export interface CommunityOrganisation {
  id: string;
  name: string;
  categoryLabel: string;
  verificationLabel: string;
  location: string;
  description: string;
  phones: string[];
  email?: string;
  websiteUrl: string;
  websiteLabel: string;
  contactPageUrl?: string;
  contactPageLabel?: string;
  note: string;
  sourceLabel: string;
}

export interface InstitutionalResource {
  id: string;
  group: 'police-women' | 'university-campus';
  name: string;
  categoryLabel: string;
  statusLabel: string;
  description: string;
  officialUrl: string;
  officialLinkLabel: string;
  publishedContactNote?: string;
  phones?: { label: string; number: string }[];
  email?: { label: string; address: string };
  institutionalNote: string;
}

export interface RemovalPathway {
  id: string;
  platform: string;
  scope: string;
  steps: string[];
  evidenceTip: string;
  verificationStatus: VerificationStatus;
  verificationNote: string;
}

export interface SiteMetadata {
  brandName: string;
  lastCheckedDate: string;
  disclaimerText: string;
  quickExitNote: string;
  quickExitUrl: string;
  correctionsEmailPlaceholder: string;
  regionalFocusNote: string;
}
