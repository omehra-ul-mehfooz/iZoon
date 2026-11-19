import {
  HELPLINE_ENTRIES,
  JK_POLICE_AND_UNIVERSITY_RESOURCES,
  JK_WOMEN_CENTRED_ORGANISATIONS,
  MAIN_SECTIONS,
  REMOVAL_PATHWAYS,
  SITE_METADATA,
} from '../data/siteContent';
import type {
  CommunityOrganisation,
  HelplineEntry,
  InstitutionalResource,
  RemovalPathway,
  SectionSlug,
  SectionSummary,
  SiteMetadata,
} from '../types/content';

/**
 * Content Repository Layer
 *
 * Currently serves curated local data with zero backend dependencies.
 * Structured so each method can be swapped to a Supabase query later
 * (e.g., `await supabase.from('helplines').select('*')`) without changing UI components.
 */
export const contentRepository = {
  getSiteMetadata(): SiteMetadata {
    return SITE_METADATA;
  },

  getSections(): SectionSummary[] {
    return [...MAIN_SECTIONS].sort((a, b) => a.order - b.order);
  },

  getSectionBySlug(slug: SectionSlug): SectionSummary | undefined {
    return MAIN_SECTIONS.find((section) => section.slug === slug);
  },

  getHelplines(): HelplineEntry[] {
    return HELPLINE_ENTRIES;
  },

  getCommunityOrganisations(): CommunityOrganisation[] {
    return JK_WOMEN_CENTRED_ORGANISATIONS;
  },

  getPoliceAndUniversityResources(): InstitutionalResource[] {
    return JK_POLICE_AND_UNIVERSITY_RESOURCES;
  },

  getRemovalPathways(): RemovalPathway[] {
    return REMOVAL_PATHWAYS;
  },
};
