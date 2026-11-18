import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, ExternalLink, Menu, ShieldAlert, X } from 'lucide-react';
import { contentRepository } from '../services/contentRepository';
import type { SectionSlug } from '../types/content';

export type ActiveRoute = 'home' | SectionSlug;

interface LayoutProps {
  activeRoute: ActiveRoute;
  onNavigate: (route: ActiveRoute) => void;
  onNavigateAbout: () => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  activeRoute,
  onNavigate,
  onNavigateAbout,
  children,
}) => {
  const metadata = contentRepository.getSiteMetadata();
  const sections = contentRepository.getSections();

  const [guidesMenuOpen, setGuidesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setGuidesMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setGuidesMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleQuickExit = () => {
    window.location.replace(metadata.quickExitUrl);
  };

  const handleSelectRoute = (route: ActiveRoute) => {
    setGuidesMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  const currentSectionIndex = sections.findIndex((s) => s.slug === activeRoute);
  const currentSection = currentSectionIndex >= 0 ? sections[currentSectionIndex] : null;
  const prevSection = currentSectionIndex > 0 ? sections[currentSectionIndex - 1] : null;
  const nextSection =
    currentSectionIndex >= 0 && currentSectionIndex < sections.length - 1
      ? sections[currentSectionIndex + 1]
      : null;

  const handleAboutClick = () => {
    setGuidesMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigateAbout();
  };

  const CHAPTER_BAR_STYLES: Record<
    SectionSlug,
    { wrapper: string; accentText: string; barTrack: string; barFill: string }
  > = {
    awareness: {
      wrapper: 'border-b border-[#DFD2C2] bg-[#F6EFE6]',
      accentText: 'text-[#A63D26]',
      barTrack: 'bg-[#E5D7C7]',
      barFill: 'bg-[#A63D26]',
    },
    'blackmail-support': {
      wrapper: 'border-b border-[#E5CFD6] bg-[#F8EFF2]',
      accentText: 'text-[#4D1933]',
      barTrack: 'bg-[#E7D3DA]',
      barFill: 'bg-[#4D1933]',
    },
    'all-the-numbers': {
      wrapper: 'border-b border-[#CFDDD4] bg-[#EEF4F0]',
      accentText: 'text-[#1D4D3A]',
      barTrack: 'bg-[#D5E2DA]',
      barFill: 'bg-[#1D4D3A]',
    },
    deepfakes: {
      wrapper: 'border-b border-[#1E2A45] bg-[#0B1222] text-[#D8E0F0]',
      accentText: 'text-[#8FA8FF]',
      barTrack: 'bg-[#1F2C4A]',
      barFill: 'bg-[#4361EE]',
    },
    'fact-checking': {
      wrapper: 'border-b border-[#E2D6B5] bg-[#F7F1DF]',
      accentText: 'text-[#9F6B0F]',
      barTrack: 'bg-[#E6DBBD]',
      barFill: 'bg-[#9F6B0F]',
    },
    'image-removal': {
      wrapper: 'border-b border-[#DDD6EA] bg-[#F2EEF9]',
      accentText: 'text-[#5A4682]',
      barTrack: 'bg-[#DFD7ED]',
      barFill: 'bg-[#6E5A94]',
    },
  };

  const chapterTheme = currentSection ? CHAPTER_BAR_STYLES[currentSection.slug] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1518]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#68182C] focus:text-[#FAF7F2] focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Top Navigation Bar: Unified iZoon 3-zone single-row contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E5D9CA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
          {/* Zone 1: iZoon Brand / Logo */}
          <button
            type="button"
            onClick={() => handleSelectRoute('home')}
            className="inline-flex items-center gap-2.5 font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#1C1518] hover:text-[#68182C] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <svg
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6 shrink-0"
            >
              <path
                d="M14 2.5L23.5 6.5V13.8C23.5 19.6 19.5 24.3 14 26C8.5 24.3 4.5 19.6 4.5 13.8V6.5L14 2.5Z"
                stroke="#68182C"
                strokeWidth="1.75"
                fill="#F4ECE2"
              />
              <circle cx="14" cy="13.5" r="3.25" stroke="#68182C" strokeWidth="1.6" />
            </svg>
            <span>{metadata.brandName}</span>
          </button>

          {/* Zone 2: Clean Primary Navigation (Home, Resources dropdown, About) */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4C3F44]"
          >
            <button
              type="button"
              onClick={() => handleSelectRoute('home')}
              aria-current={activeRoute === 'home' ? 'page' : undefined}
              className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
                activeRoute === 'home'
                  ? 'text-[#68182C] border-[#68182C]'
                  : 'border-transparent hover:text-[#1C1518] hover:border-[#C8BCB0]'
              }`}
            >
              Home
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={guidesMenuOpen}
                aria-haspopup="true"
                onClick={() => setGuidesMenuOpen((prev) => !prev)}
                className={`flex items-center gap-1 whitespace-nowrap shrink-0 py-1 border-b transition-colors cursor-pointer ${
                  currentSection
                    ? 'text-[#68182C] border-[#68182C]'
                    : 'border-transparent text-[#4C3F44] hover:text-[#1C1518] hover:border-[#C8BCB0]'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    guidesMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {guidesMenuOpen && (
                <div
                  role="menu"
                  aria-label="Resources — all six sections"
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 bg-[#FFFFFF] border border-[#E5D9CA] rounded-lg shadow-lg py-2 z-50"
                >
                  {sections.map((section) => {
                    const isActive = activeRoute === section.slug;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        role="menuitem"
                        onClick={() => handleSelectRoute(section.slug)}
                        className={`w-full text-left px-4 py-2.5 flex items-start gap-3 transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[#F4ECE2] text-[#68182C]'
                            : 'text-[#1C1518] hover:bg-[#FAF7F2]'
                        }`}
                      >
                        <span className="font-mono text-xs tabular-nums text-[#68182C] pt-0.5 shrink-0">
                          0{section.order}
                        </span>
                        <span className="text-sm font-medium leading-snug">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleAboutClick}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent text-[#4C3F44] hover:text-[#1C1518] hover:border-[#C8BCB0] transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>

          {/* Zone 3: Quick Exit Primary Action (+ mobile menu toggle) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleQuickExit}
              aria-label="Quick Exit: navigate immediately to Wikipedia. Does not erase browser history."
              title="Leaves immediately to Wikipedia (does not clear browser history)"
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-md bg-[#68182C] hover:bg-[#4A1020] text-[#FAF7F2] text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Quick Exit</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-md border border-[#E5D9CA] bg-[#FFFFFF] text-[#1C1518] hover:bg-[#F4ECE2] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden border-t border-[#E5D9CA] bg-[#FFFFFF] px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => handleSelectRoute('home')}
              className={`w-full text-left px-3 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                activeRoute === 'home'
                  ? 'bg-[#F4ECE2] text-[#68182C]'
                  : 'text-[#1C1518] hover:bg-[#FAF7F2]'
              }`}
            >
              Home
            </button>
            <div className="pt-2 pb-1 px-3 text-xs font-medium text-[#6B5B61]">
              Resources
            </div>
            {sections.map((section) => {
              const isActive = activeRoute === section.slug;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSelectRoute(section.slug)}
                  className={`w-full text-left px-3 py-3 rounded-md flex items-baseline gap-3 text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#F4ECE2] text-[#68182C] font-medium'
                      : 'text-[#1C1518] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span className="font-mono text-xs tabular-nums text-[#68182C] shrink-0">
                    0{section.order}
                  </span>
                  <span>{section.title}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={handleAboutClick}
              className="w-full text-left px-3 py-3 rounded-md text-sm font-medium text-[#1C1518] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {currentSection && chapterTheme && (
          <div className={chapterTheme.wrapper}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <nav
                  aria-label="Breadcrumb"
                  className={`flex items-center gap-2 text-xs ${
                    currentSection.slug === 'deepfakes' ? 'text-[#A9B7D6]' : 'text-[#5E5256]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleSelectRoute('home')}
                    className={`transition-colors cursor-pointer ${
                      currentSection.slug === 'deepfakes'
                        ? 'hover:text-[#FFFFFF]'
                        : 'hover:text-[#1C1518]'
                    }`}
                  >
                    Home
                  </button>
                  <span aria-hidden="true">/</span>
                  <span
                    aria-current="page"
                    className={`font-medium ${
                      currentSection.slug === 'deepfakes' ? 'text-[#FFFFFF]' : 'text-[#1C1518]'
                    }`}
                  >
                    {currentSection.title}
                  </span>
                </nav>

                <div className={`font-mono text-xs tabular-nums font-medium ${chapterTheme.accentText}`}>
                  0{currentSection.order} of 0{sections.length}
                </div>
              </div>

              <div
                role="progressbar"
                aria-label="Guide reading progress"
                aria-valuemin={1}
                aria-valuemax={sections.length}
                aria-valuenow={currentSection.order}
                className={`h-1 w-full rounded-full overflow-hidden ${chapterTheme.barTrack}`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-200 ${chapterTheme.barFill}`}
                  style={{ width: `${(currentSection.order / sections.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {children}

        {/* Sequential Prev / Next Navigation on Section Pages */}
        {activeRoute !== 'home' && (
          <div className="border-t border-[#E5D9CA] bg-[#FAF7F2]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevSection ? (
                <button
                  type="button"
                  onClick={() => handleSelectRoute(prevSection.slug)}
                  className="group text-left p-5 rounded-xl border border-[#E5D9CA] bg-[#FFFFFF] hover:border-[#68182C]/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs text-[#6B5B61] mb-1">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Previous · Chapter 0{prevSection.order}</span>
                  </div>
                  <div className="font-serif text-base font-medium text-[#1C1518] group-hover:text-[#68182C] transition-colors">
                    {prevSection.title}
                  </div>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSelectRoute('home')}
                  className="group text-left p-5 rounded-xl border border-[#E5D9CA] bg-[#FFFFFF] hover:border-[#68182C]/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 text-xs text-[#6B5B61] mb-1">
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Return</span>
                  </div>
                  <div className="font-serif text-base font-medium text-[#1C1518] group-hover:text-[#68182C] transition-colors">
                    Homepage Overview
                  </div>
                </button>
              )}

              {nextSection ? (
                <button
                  type="button"
                  onClick={() => handleSelectRoute(nextSection.slug)}
                  className="group text-left sm:text-right p-5 rounded-xl border border-[#E5D9CA] bg-[#FFFFFF] hover:border-[#68182C]/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center sm:justify-end gap-1.5 text-xs text-[#6B5B61] mb-1">
                    <span>Next · Chapter 0{nextSection.order}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-base font-medium text-[#1C1518] group-hover:text-[#68182C] transition-colors">
                    {nextSection.title}
                  </div>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleSelectRoute('all-the-numbers')}
                  className="group text-left sm:text-right p-5 rounded-xl border border-[#E5D9CA] bg-[#FFFFFF] hover:border-[#68182C]/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center sm:justify-end gap-1.5 text-xs text-[#6B5B61] mb-1">
                    <span>Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-base font-medium text-[#1C1518] group-hover:text-[#68182C] transition-colors">
                    Review All the Numbers
                  </div>
                </button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Consistent Global Footer */}
      <footer className="border-t border-[#E5D9CA] bg-[#F4ECE2] text-[#1E181A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#DED3C2]">
            {/* Col 1: Brand, Disclaimer & Quick Exit Note */}
            <div className="md:col-span-5 space-y-4">
              <div className="font-serif text-xl font-semibold text-[#1E181A]">
                {metadata.brandName}
              </div>
              <p className="text-sm leading-relaxed text-[#4E4246] max-w-md">
                {metadata.regionalFocusNote}
              </p>
              <div className="p-4 rounded-lg border border-[#DED3C2] bg-[#FAF7F2] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#68182C]">
                  <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Awareness Information Only — Not Legal Advice</span>
                </div>
                <p className="text-xs leading-relaxed text-[#4E4246]">
                  {metadata.disclaimerText}
                </p>
              </div>
            </div>

            {/* Col 2: Exact Ordered Six Sections */}
            <div className="md:col-span-4 space-y-3">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#5A4D52]">
                Guide Sections
              </h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectRoute('home')}
                    className="text-[#4E4246] hover:text-[#68182C] transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectRoute(section.slug)}
                      className="text-left text-[#4E4246] hover:text-[#68182C] transition-colors flex items-baseline gap-2 cursor-pointer"
                    >
                      <span className="font-mono text-xs tabular-nums text-[#68182C]">
                        0{section.order}
                      </span>
                      <span>{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Verification, Corrections & Quick Exit Transparency */}
            <div className="md:col-span-3 space-y-4 text-xs leading-relaxed text-[#4E4246]">
              <div>
                <div className="font-semibold text-[#1E181A] mb-1">Last Checked</div>
                <time dateTime="2026-11-17" className="font-mono tabular-nums text-[#1E181A]">
                  {metadata.lastCheckedDate}
                </time>
              </div>

              <div>
                <div className="font-semibold text-[#1E181A] mb-1">
                  Corrections &amp; Local Updates
                </div>
                <p className="mb-1">
                  To report an outdated number or suggest a verified regional listing:
                </p>
                <a
                  href={`mailto:${metadata.correctionsEmailPlaceholder}`}
                  className="font-mono text-[#68182C] underline underline-offset-2 break-all hover:text-[#4A1020]"
                >
                  {metadata.correctionsEmailPlaceholder}
                </a>
                <p className="mt-1 text-[11px] text-[#5A4D52]">
                  [Placeholder contact email — replace with verified editorial inbox before launch]
                </p>
              </div>

              <div>
                <div className="font-semibold text-[#1E181A] mb-1">About Quick Exit</div>
                <p>{metadata.quickExitNote}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#5A4D52]">
            <p>
              No user tracking, personal data forms, or external analytics are used on this site.
            </p>
            <button
              type="button"
              onClick={handleQuickExit}
              className="self-start sm:self-auto inline-flex items-center gap-1.5 font-medium text-[#68182C] hover:text-[#4A1020] underline underline-offset-2 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Quick Exit to Wikipedia</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
