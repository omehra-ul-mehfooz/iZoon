import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  Phone,
  Search,
  Users,
} from 'lucide-react';
import { contentRepository } from '../../services/contentRepository';
import type { HelplineEntry } from '../../types/content';
import { DirectoryRoutingDiagram } from '../Illustrations';
import { SectionMetaNotice } from '../SectionMetaNotice';

type CategoryFilter = 'all' | HelplineEntry['category'];

const FILTER_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Contacts' },
  { id: 'emergency', label: 'Emergency & Cyber' },
  { id: 'jammu-kashmir', label: 'Jammu & Kashmir' },
  { id: 'women-youth', label: 'Women & Youth' },
  { id: 'support-legal', label: 'Mental Health & Legal Aid' },
];

export const NumbersSection: React.FC = () => {
  const helplines = contentRepository.getHelplines();
  const communityOrganisations = contentRepository.getCommunityOrganisations();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const verifiedCount = helplines.filter((h) => h.verificationStatus === 'verified-public').length;
  const pendingCount = helplines.filter((h) => h.verificationStatus === 'verification-needed').length;
  const verified247LinesCount = helplines.filter(
    (h) => h.verificationStatus === 'verified-public' && h.isPhone && h.hours.includes('24/7'),
  ).length;

  const filteredHelplines = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return helplines.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery =
        query.length === 0 ||
        item.name.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query) ||
        item.purpose.toLowerCase().includes(query) ||
        item.numberOrPortal.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [helplines, activeCategory, searchTerm]);

  const filteredOrganisations = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (query.length === 0) return communityOrganisations;
    return communityOrganisations.filter(
      (org) =>
        org.name.toLowerCase().includes(query) ||
        org.location.toLowerCase().includes(query) ||
        org.description.toLowerCase().includes(query) ||
        org.phones.some((phone) => phone.toLowerCase().includes(query)) ||
        (org.email && org.email.toLowerCase().includes(query)),
    );
  }, [communityOrganisations, searchTerm]);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 2000);
    } catch {
      // Clipboard unavailable in restricted browser context
    }
  };

  return (
    <div className="page-enter bg-[#F6F9F7] text-[#19211D]">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SectionMetaNotice />

        {/* Operational Resource Directory Header */}
        <header className="pb-8 border-b border-[#CFDDD4] space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#1D4D3A] font-semibold">
                Chapter 03 · Verified-First Resource Directory
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#19211D]">
                All the Numbers
              </h1>
              <p className="text-base leading-relaxed text-[#536159] max-w-2xl">
                Searchable national emergency, cybercrime, and support lines alongside transparent
                Jammu &amp; Kashmir regional entries awaiting direct local verification.
              </p>
            </div>

            {/* Dashboard Metrics Strip */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#CFDDD4] bg-[#FFFFFF] p-4">
                <div className="font-mono text-2xl font-medium tabular-nums text-[#1D4D3A]">
                  0{verifiedCount}
                </div>
                <div className="text-[11px] text-[#536159] mt-1">National Public</div>
              </div>
              <div className="rounded-lg border border-[#D9CFC0] bg-[#FAF7F0] p-4">
                <div className="font-mono text-2xl font-medium tabular-nums text-[#8C4A1C]">
                  0{pendingCount}
                </div>
                <div className="text-[11px] text-[#536159] mt-1">Pending Verification</div>
              </div>
              <div className="rounded-lg border border-[#CFDDD4] bg-[#DCE7E0] p-4">
                <div className="font-mono text-2xl font-medium tabular-nums text-[#19211D]">
                  0{verified247LinesCount}
                </div>
                <div className="text-[11px] text-[#2B3A32] mt-1">
                  Officially Listed 24/7 Services
                </div>
              </div>
            </div>
          </div>

          {/* Routing Decision Diagram */}
          <div className="pt-2">
            <DirectoryRoutingDiagram className="w-full h-auto" />
          </div>
        </header>

        {/* Filter Controls & Search Toolbar */}
        <section aria-label="Filter and search contacts" className="py-6 border-b border-[#CFDDD4] space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div
              role="tablist"
              aria-label="Filter helplines by category"
              className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg bg-[#E9F0EC] border border-[#CFDDD4]"
            >
              {FILTER_TABS.map((tab) => {
                const active = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#1D4D3A] text-[#F6F9F7]'
                        : 'text-[#3B4A42] hover:text-[#19211D] hover:bg-[#FFFFFF]/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full lg:w-72">
              <Search
                className="w-4 h-4 text-[#536159] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <label htmlFor="helpline-search" className="sr-only">
                Search helplines by name, region, or number
              </label>
              <input
                id="helpline-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search number, district, or topic..."
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-[#C3D3C9] bg-[#FFFFFF] text-[#19211D] placeholder:text-[#74837A]"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#536159]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4D3A]" aria-hidden="true" />
              <strong className="text-[#19211D]">Public National Helpline:</strong> Standard GoI
              number/portal (confirm local routing).
            </span>
            <span className="inline-flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-[#8C4A1C]" aria-hidden="true" />
              <strong className="text-[#19211D]">Verification Needed:</strong> Regional J&amp;K
              placeholder awaiting direct confirmation.
            </span>
          </div>
        </section>

        {/* Directory Contact Grid */}
        <section aria-label="Helpline directory results" className="pt-8">
          {filteredHelplines.length === 0 ? (
            <div className="rounded-xl border border-[#CFDDD4] bg-[#FFFFFF] p-10 text-center space-y-2">
              <p className="font-serif text-xl text-[#19211D]">No matching contacts found</p>
              <p className="text-sm text-[#536159]">
                Clear your search or select “All Contacts” to view every entry.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredHelplines.map((entry) => {
                const isVerified = entry.verificationStatus === 'verified-public';
                const isCopied = copiedId === entry.id;

                return (
                  <div
                    key={entry.id}
                    className={`rounded-xl border p-6 flex flex-col justify-between gap-4 ${
                      isVerified
                        ? 'border-[#CFDDD4] bg-[#FFFFFF]'
                        : 'border-[#DDD2C2] bg-[#FAF7F0]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        {isVerified ? (
                          <span className="inline-flex items-center gap-1.5 font-semibold text-[#1D4D3A]">
                            <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                            {entry.isPhone ? 'Public National Helpline' : 'Official National Portal'}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 font-semibold text-[#8C4A1C]">
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            Verification Needed
                          </span>
                        )}
                        <span className="font-mono text-[11px] text-[#536159]">{entry.hours}</span>
                      </div>

                      <div>
                        <h2 className="font-serif text-xl font-medium text-[#19211D] leading-snug">
                          {entry.name}
                        </h2>
                        <div className="text-xs text-[#536159] mt-0.5">{entry.region}</div>
                      </div>

                      <p className="text-sm leading-relaxed text-[#3B4A42]">{entry.purpose}</p>

                      {entry.verificationNote && (
                        <p className="text-xs leading-relaxed text-[#536159] pt-2 border-t border-[#E6EDE8]">
                          {entry.verificationNote}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#E3ECE6] flex flex-wrap items-center justify-between gap-3">
                      <div
                        className={`font-mono font-medium tabular-nums ${
                          isVerified ? 'text-xl text-[#1D4D3A]' : 'text-xs text-[#8C4A1C]'
                        }`}
                      >
                        {entry.numberOrPortal}
                      </div>

                      {isVerified && (
                        <div className="flex flex-wrap items-center gap-2">
                          {entry.isPhone && (
                            <a
                              href={`tel:${entry.numberOrPortal.split('/')[0].replace(/[^0-9+]/g, '')}`}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-md bg-[#1D4D3A] hover:bg-[#143729] text-[#F6F9F7] text-xs font-medium transition-colors"
                            >
                              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Call</span>
                            </a>
                          )}
                          {entry.websiteUrl && (
                            <a
                              href={entry.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-md text-xs font-medium transition-colors ${
                                entry.isPhone
                                  ? 'border border-[#C3D3C9] bg-[#F6F9F7] hover:border-[#1D4D3A] text-[#19211D]'
                                  : 'bg-[#1D4D3A] hover:bg-[#143729] text-[#F6F9F7]'
                              }`}
                            >
                              <span>{entry.websiteLabel || 'Website'}</span>
                              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>
                          )}
                          {entry.secondaryUrl && (
                            <a
                              href={entry.secondaryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-md border border-[#C3D3C9] bg-[#F6F9F7] hover:border-[#1D4D3A] text-[#19211D] text-xs font-medium transition-colors"
                            >
                              <span>{entry.secondaryLabel || 'FAQ'}</span>
                              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>
                          )}
                          <button
                            type="button"
                            onClick={() => handleCopy(entry.id, entry.numberOrPortal)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-md border border-[#C3D3C9] bg-[#F6F9F7] hover:border-[#1D4D3A] text-[#19211D] text-xs font-medium transition-colors cursor-pointer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#1D4D3A]" aria-hidden="true" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Separate Section: Women-Centred Organisations in Jammu & Kashmir */}
        <section
          aria-labelledby="jk-organisations-heading"
          className="mt-14 pt-10 border-t border-[#CFDDD4] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-[#1D4D3A] font-semibold">
              <Users className="w-4 h-4" aria-hidden="true" />
              <span>Community Organisations / Support and Referral</span>
            </div>
            <h2
              id="jk-organisations-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#19211D]"
            >
              Women-Centred Organisations in Jammu &amp; Kashmir
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#536159]">
              Organisations working in areas such as women&apos;s empowerment, rehabilitation,
              community support, health and legal assistance. Contact each organisation directly to
              confirm its current services and availability.
            </p>
          </div>

          <div className="rounded-lg border border-[#D9CFC0] bg-[#FAF7F0] p-4 flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-[#3B4A42]">
            <Info className="w-4 h-4 text-[#8C4A1C] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Important notice:</strong> These community organisations are listed separately
              from emergency helplines and 24/7 response lines. Services, eligibility, contact details
              and availability may change. Please confirm directly with the organisation.
            </p>
          </div>

          {filteredOrganisations.length === 0 ? (
            <div className="rounded-xl border border-[#CFDDD4] bg-[#FFFFFF] p-8 text-center space-y-1.5">
              <p className="font-serif text-lg text-[#19211D]">
                No matching community organisations found
              </p>
              <p className="text-sm text-[#536159]">
                Clear your search to view all four organisations in Jammu &amp; Kashmir.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredOrganisations.map((org) => (
                <div
                  key={org.id}
                  className="rounded-xl border border-[#CFDDD4] bg-[#FFFFFF] p-6 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[#1D4D3A]">
                        <Users className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{org.categoryLabel}</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#8C4A1C]">
                        {org.verificationLabel}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-xl font-medium text-[#19211D] leading-snug">
                        {org.name}
                      </h3>
                      <div className="flex items-start gap-1.5 text-xs text-[#536159]">
                        <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{org.location}</span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[#3B4A42]">{org.description}</p>

                    <div className="space-y-1.5 pt-2 border-t border-[#E6EDE8] text-xs leading-relaxed text-[#536159]">
                      <p>{org.note}</p>
                      <p className="font-mono text-[11px] text-[#536159]">{org.sourceLabel}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E3ECE6] space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {org.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-md bg-[#1D4D3A] hover:bg-[#143729] text-[#F6F9F7] font-mono text-xs font-medium transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{phone}</span>
                        </a>
                      ))}
                      {org.email && (
                        <a
                          href={`mailto:${org.email}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[36px] rounded-md border border-[#C3D3C9] bg-[#F6F9F7] hover:border-[#1D4D3A] text-[#19211D] font-mono text-xs font-medium transition-colors break-all"
                        >
                          <Mail className="w-3.5 h-3.5 shrink-0 text-[#1D4D3A]" aria-hidden="true" />
                          <span>{org.email}</span>
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={org.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[34px] rounded-md border border-[#C3D3C9] bg-[#FFFFFF] hover:border-[#1D4D3A] text-[#1D4D3A] text-xs font-medium transition-colors"
                      >
                        <span>{org.websiteLabel}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      </a>
                      {org.contactPageUrl && (
                        <a
                          href={org.contactPageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[34px] rounded-md border border-[#C3D3C9] bg-[#FFFFFF] hover:border-[#1D4D3A] text-[#1D4D3A] text-xs font-medium transition-colors"
                        >
                          <span>{org.contactPageLabel || 'Contact Page'}</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </article>
    </div>
  );
};
