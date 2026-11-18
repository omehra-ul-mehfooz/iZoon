import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  HeartHandshake,
  ImageOff,
  Phone,
  PhoneCall,
  ScanFace,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react';
import { contentRepository } from '../services/contentRepository';
import type { SectionSlug } from '../types/content';
import { EditorialImage } from './EditorialImage';
import { SectionMetaNotice } from './SectionMetaNotice';

interface HomePageProps {
  onNavigate: (route: SectionSlug) => void;
}

const SECTION_CARD_THEME: Record<
  SectionSlug,
  {
    surface: string;
    iconBg: string;
    accentText: string;
    chapterType: string;
    icon: React.ReactNode;
  }
> = {
  awareness: {
    surface: 'bg-[#FBF6EE] border-[#E3CFC4] hover:border-[#A63D26]',
    iconBg: 'bg-[#F3E1D7] text-[#A63D26]',
    accentText: 'text-[#A63D26]',
    chapterType: 'Editorial Feature',
    icon: <Eye className="w-4 h-4" aria-hidden="true" />,
  },
  'blackmail-support': {
    surface: 'bg-[#FCF7F9] border-[#E5CFD6] hover:border-[#4D1933]',
    iconBg: 'bg-[#F4E3E9] text-[#4D1933]',
    accentText: 'text-[#4D1933]',
    chapterType: 'Calm Support Guide',
    icon: <ShieldAlert className="w-4 h-4" aria-hidden="true" />,
  },
  'all-the-numbers': {
    surface: 'bg-[#F6F9F7] border-[#CFDDD4] hover:border-[#1D4D3A]',
    iconBg: 'bg-[#E1ECE5] text-[#1D4D3A]',
    accentText: 'text-[#1D4D3A]',
    chapterType: 'Helpline Directory',
    icon: <Phone className="w-4 h-4" aria-hidden="true" />,
  },
  deepfakes: {
    surface: 'bg-[#F4F6FA] border-[#CFD6E8] hover:border-[#3E56C4]',
    iconBg: 'bg-[#E2E7F5] text-[#1D2C56]',
    accentText: 'text-[#2B3E78]',
    chapterType: 'Tech Explainer',
    icon: <ScanFace className="w-4 h-4" aria-hidden="true" />,
  },
  'fact-checking': {
    surface: 'bg-[#FCF9F0] border-[#E5D8B6] hover:border-[#9F6B0F]',
    iconBg: 'bg-[#F5E9C9] text-[#8A5B0B]',
    accentText: 'text-[#8A5B0B]',
    chapterType: 'Research Desk',
    icon: <CheckCircle2 className="w-4 h-4" aria-hidden="true" />,
  },
  'image-removal': {
    surface: 'bg-[#F7F5FA] border-[#DDD6EA] hover:border-[#6E5A94]',
    iconBg: 'bg-[#EAE3F5] text-[#5A4682]',
    accentText: 'text-[#5A4682]',
    chapterType: 'Digital Rights',
    icon: <ImageOff className="w-4 h-4" aria-hidden="true" />,
  },
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const sections = contentRepository.getSections();

  const handleExploreResources = () => {
    const target = document.getElementById('explore-resources');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page-enter">
      {/* Band 1: Editorial Publication Hero */}
      <section aria-labelledby="hero-heading" className="bg-[#FAF7F2] border-b border-[#E5D9CA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pb-20">
          <SectionMetaNotice titleContext="India & Jammu and Kashmir Digital Safety Publication" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#68182C]">
                iZoon · One Publication, Six Guided Chapters
              </p>

              <h1
                id="hero-heading"
                className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-medium leading-[1.12] text-[#1C1518]"
              >
                Standing against gender disinformation with clarity, dignity, and care.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#4C3F44] max-w-xl">
                iZoon is a digital safety and awareness platform built for readers across India—with
                particular relevance to Jammu and Kashmir—bringing together investigative context,
                calm blackmail guidance, verified helplines, and takedown tools.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleExploreResources}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 min-h-[46px] rounded-md bg-[#68182C] hover:bg-[#4A1020] text-[#FAF7F2] text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Explore Resources</span>
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('blackmail-support')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 min-h-[46px] rounded-md border border-[#D4C2B0] bg-[#FFFFFF] hover:border-[#68182C] text-[#1C1518] hover:text-[#68182C] text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Threat &amp; Blackmail Help</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E5D9CA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="font-semibold text-[#1C1518]">India &amp; J&amp;K Focus</div>
                  <div className="text-[#6B5B61] mt-0.5">Grounded regional context</div>
                </div>
                <div>
                  <div className="font-semibold text-[#1C1518]">Six Distinct Guides</div>
                  <div className="text-[#6B5B61] mt-0.5">Tailored to every situation</div>
                </div>
                <div>
                  <div className="font-semibold text-[#1C1518]">Private Reading</div>
                  <div className="text-[#6B5B61] mt-0.5">Zero logins or tracking</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#DFD1BF] bg-[#F4ECE2] p-4 sm:p-5">
                <EditorialImage
                  src="/src/assets/images/homepage_editorial_portrait_1794853690407.jpg"
                  alt="A young woman seated calmly by a sunlit wooden library window with an open notebook and lowered phone"
                  caption="Editorial portrait — stepping back from online noise to verify facts and protect personal dignity."
                  aspectClass="aspect-[16/10]"
                  className="text-[#5E4E54]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 2: Distinct Emergency Support Strip */}
      <section aria-labelledby="emergency-help-heading" className="bg-[#4A1020] text-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#DFC5C8]">
                <PhoneCall className="w-4 h-4" aria-hidden="true" />
                <span>Urgent Support &amp; Helplines</span>
              </div>
              <h2
                id="emergency-help-heading"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#FAF7F2] leading-snug"
              >
                If someone is threatening you right now
              </h2>
              <p className="text-sm leading-relaxed text-[#EBDDDF] max-w-prose">
                You do not have to pay or face intimidation alone. Pause, preserve screenshots of
                usernames and links, and contact a public helpline or someone you trust.
              </p>
              <div className="pt-1 flex flex-wrap gap-5 text-sm">
                <button
                  type="button"
                  onClick={() => onNavigate('all-the-numbers')}
                  className="inline-flex items-center gap-1.5 font-medium text-[#FAF7F2] hover:text-[#DFC5C8] underline underline-offset-4 cursor-pointer"
                >
                  <span>View All the Numbers</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('blackmail-support')}
                  className="inline-flex items-center gap-1.5 font-medium text-[#DFC5C8] hover:text-[#FAF7F2] underline underline-offset-4 cursor-pointer"
                >
                  <span>First Safety Steps</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
              <div className="rounded-xl border border-[#FAF7F2]/15 bg-[#FAF7F2]/8 p-4">
                <div className="font-mono text-xl font-medium tabular-nums text-[#FAF7F2]">112</div>
                <div className="text-xs font-semibold text-[#DFC5C8] mt-1">Emergency Police</div>
                <div className="text-[11px] text-[#EBDDDF]/85 mt-1">Immediate physical danger</div>
              </div>
              <div className="rounded-xl border border-[#FAF7F2]/15 bg-[#FAF7F2]/8 p-4">
                <div className="font-mono text-xl font-medium tabular-nums text-[#FAF7F2]">1930</div>
                <div className="text-xs font-semibold text-[#DFC5C8] mt-1">
                  Cyber Financial Fraud
                </div>
                <div className="text-[11px] text-[#EBDDDF]/85 mt-1">
                  Immediate financial fraud help
                </div>
              </div>
              <div className="rounded-xl border border-[#FAF7F2]/15 bg-[#FAF7F2]/8 p-4">
                <div className="font-mono text-xl font-medium tabular-nums text-[#FAF7F2]">181</div>
                <div className="text-xs font-semibold text-[#DFC5C8] mt-1">Women Helpline</div>
                <div className="text-[11px] text-[#EBDDDF]/85 mt-1">24/7 support &amp; guidance</div>
              </div>
              <div className="rounded-xl border border-[#FAF7F2]/15 bg-[#FAF7F2]/8 p-4">
                <div className="font-mono text-sm font-medium text-[#FAF7F2] pt-1">
                  cybercrime.gov.in
                </div>
                <div className="text-xs font-semibold text-[#DFC5C8] mt-1.5">Reporting Portal</div>
                <div className="text-[11px] text-[#EBDDDF]/85 mt-1">Online women/child desk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 3: Six Distinct Chapters Directory Grid */}
      <section
        id="explore-resources"
        aria-labelledby="sections-heading"
        className="bg-[#FAF7F2] border-b border-[#E5D9CA] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E5D9CA]">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#68182C]">
                Six Chapters
              </p>
              <h2
                id="sections-heading"
                className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1518]"
              >
                Explore resources by chapter
              </h2>
              <p className="text-base text-[#4C3F44] leading-relaxed">
                Each chapter has its own focused visual tools and format—from investigative
                awareness essays to practical directories and takedown guides.
              </p>
            </div>
            <div className="text-xs font-mono tabular-nums text-[#6B5B61]">
              Chapters 01 — 06
            </div>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const cardTheme = SECTION_CARD_THEME[section.slug];
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onNavigate(section.slug)}
                  className={`group text-left rounded-xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer ${cardTheme.surface}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${cardTheme.iconBg}`}
                        >
                          {cardTheme.icon}
                        </span>
                        <span className={`font-mono text-xs font-semibold tabular-nums ${cardTheme.accentText}`}>
                          0{section.order}
                        </span>
                      </div>
                      <span className="text-xs text-[#6B5B61]">{cardTheme.chapterType}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1518] group-hover:underline underline-offset-4 leading-snug mb-3">
                      {section.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4C3F44]">{section.summary}</p>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-sm font-medium ${cardTheme.accentText}`}
                  >
                    <span>Open chapter</span>
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Band 4: Why This Matters */}
      <section
        id="why-matters"
        aria-labelledby="why-matters-heading"
        className="bg-[#F4ECE2] border-b border-[#E5D9CA] scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#68182C]">
                Why This Matters
              </p>
              <h2
                id="why-matters-heading"
                className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1518] leading-tight"
              >
                Online falsehoods carry offline consequences.
              </h2>

              <blockquote className="py-5 border-y border-[#D8C7B4] font-serif italic text-xl leading-relaxed text-[#4A1020]">
                “When rumours, altered images, or intimidation are aimed at women, fear often
                silences the person targeted long before facts are checked.”
              </blockquote>

              <p className="text-sm leading-relaxed text-[#4C3F44]">
                Across India—and acutely within closely connected towns, campuses, and
                neighbourhoods in Jammu and Kashmir—social pressure can make it difficult to tell
                family or report abuse. Clear, calm knowledge restores room to breathe.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-[#DFD1BF] bg-[#FAF7F2] p-6 space-y-2.5">
                <div className="font-mono text-xs text-[#68182C]">01 · Reputational targeting</div>
                <h3 className="font-serif text-lg font-medium text-[#1C1518]">
                  Shaming used to silence voices
                </h3>
                <p className="text-sm leading-relaxed text-[#4C3F44]">
                  Gender disinformation relies on doctored screenshots, invented quotes, and moral
                  rumours to push women and gender-diverse people out of classrooms, workplaces,
                  and civic life.
                </p>
              </div>

              <div className="rounded-xl border border-[#DFD1BF] bg-[#FAF7F2] p-6 space-y-2.5">
                <div className="font-mono text-xs text-[#68182C]">02 · Regional urgency</div>
                <h3 className="font-serif text-lg font-medium text-[#1C1518]">
                  Rapid spread in tight-knit networks
                </h3>
                <p className="text-sm leading-relaxed text-[#4C3F44]">
                  In Jammu and Kashmir as across India, forwarded clips and screenshots circulate
                  rapidly on private messaging groups—often outrunning context or correction.
                </p>
              </div>

              <div className="rounded-xl border border-[#DFD1BF] bg-[#FAF7F2] p-6 space-y-2.5">
                <div className="font-mono text-xs text-[#68182C]">03 · Synthetic manipulation</div>
                <h3 className="font-serif text-lg font-medium text-[#1C1518]">
                  Ordinary photos turned into deepfakes
                </h3>
                <p className="text-sm leading-relaxed text-[#4C3F44]">
                  Public profile photos can be altered without consent using automated tools.
                  Understanding how synthetic media is made helps shift blame back onto abusers.
                </p>
              </div>

              <div className="rounded-xl border border-[#DFD1BF] bg-[#FAF7F2] p-6 space-y-2.5">
                <div className="font-mono text-xs text-[#68182C]">04 · Practical agency</div>
                <h3 className="font-serif text-lg font-medium text-[#1C1518]">
                  Actionable steps reduce panic
                </h3>
                <p className="text-sm leading-relaxed text-[#4C3F44]">
                  Knowing what screenshots to preserve, where to report, and how to use hash-based
                  removal tools gives individuals concrete options without panic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 5: How iZoon Helps */}
      <section aria-labelledby="how-izoon-helps-heading" className="bg-[#FAF7F2] border-b border-[#E5D9CA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl space-y-2.5 mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4D3A]">
              How iZoon Helps
            </p>
            <h2
              id="how-izoon-helps-heading"
              className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1518]"
            >
              Designed for calm clarity, never guesswork
            </h2>
            <p className="text-base text-[#4C3F44] leading-relaxed">
              Every chapter on iZoon follows three editorial commitments so you can trust what you
              read and protect your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-[#E5D9CA] bg-[#FFFFFF] p-7 space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#F7ECEE] text-[#68182C]">
                <BookOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1518]">
                Plain-language guidance
              </h3>
              <p className="text-sm leading-relaxed text-[#4C3F44]">
                Complex topics like deepfakes, evidence preservation, and image takedowns are broken
                into clear steps without legal jargon or technical intimidation.
              </p>
            </div>

            <div className="rounded-xl border border-[#CFDDD4] bg-[#F6F9F7] p-7 space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FFFFFF] text-[#1D4D3A] border border-[#CFDDD4]">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1518]">
                Honest verification standards
              </h3>
              <p className="text-sm leading-relaxed text-[#4C3F44]">
                Established Indian national helplines are separated clearly from local Jammu &amp;
                Kashmir entries that still need direct verification—never filled with guesses.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5D9CA] bg-[#FFFFFF] p-7 space-y-3">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#F4ECE2] text-[#68182C]">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1518]">
                Zero data collection
              </h3>
              <p className="text-sm leading-relaxed text-[#4C3F44]">
                Interactive checklists stay strictly inside your browser while the page is open. No
                accounts, personal forms, or uploaded images are collected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Band 6: Thoughtful Closing Call to Action */}
      <section aria-labelledby="supportive-message-heading" className="bg-[#FAF7F2] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#E5C8CD] bg-[#F7ECEE] px-6 py-10 sm:px-12 sm:py-14 text-center space-y-5">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#E5C8CD] text-[#68182C] mx-auto">
              <HeartHandshake className="w-5 h-5" aria-hidden="true" />
            </div>
            <h2
              id="supportive-message-heading"
              className="font-serif text-2xl sm:text-4xl font-medium text-[#1C1518]"
            >
              If you are navigating this, it is not your fault.
            </h2>
            <p className="text-base leading-relaxed text-[#4C3F44] max-w-prose mx-auto">
              Whether someone manipulated a photo, created a fake account, or threatened to share
              something private, responsibility belongs entirely to the person causing harm. Move at
              your own pace—help and practical next steps are available.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('blackmail-support')}
                className="px-6 py-3 min-h-[44px] rounded-md bg-[#68182C] hover:bg-[#4A1020] text-[#FAF7F2] text-sm font-medium transition-colors cursor-pointer"
              >
                Open Blackmail &amp; Threat Guide
              </button>
              <button
                type="button"
                onClick={() => onNavigate('image-removal')}
                className="px-6 py-3 min-h-[44px] rounded-md border border-[#D4B8BD] bg-[#FFFFFF] hover:border-[#68182C] text-[#1C1518] hover:text-[#68182C] text-sm font-medium transition-colors cursor-pointer"
              >
                Getting an Image Removed
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
