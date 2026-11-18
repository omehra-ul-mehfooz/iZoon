import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Fingerprint,
  Info,
  Lock,
  MessageSquare,
  PhoneCall,
  Share2,
  Shield,
  ShieldAlert,
} from 'lucide-react';
import { StopNciiPrivacyDiagram } from '../Illustrations';
import { SectionMetaNotice } from '../SectionMetaNotice';

const EVIDENCE_ITEMS = [
  'Account name, username or profile URL.',
  'Link to the post or content, if available.',
  'Date and time.',
  'Threatening messages and non-explicit comments.',
  'Report confirmations and relevant transaction details, if applicable.',
];

const STOPNCII_LINKS = [
  { label: 'StopNCII.org', url: 'https://stopncii.org/' },
  { label: 'How It Works', url: 'https://stopncii.org/how-it-works/?lang=en' },
  { label: 'Frequently Asked Questions', url: 'https://stopncii.org/faq/?lang=en-gb' },
  { label: 'Create Your Case', url: 'https://stopncii.org/create-your-case/' },
];

const TAKEITDOWN_LINKS = [
  { label: 'Take It Down (NCMEC)', url: 'https://takeitdown.ncmec.org/' },
  { label: 'Take It Down FAQ', url: 'https://takeitdown.ncmec.org/faq/' },
];

const INDIA_SUPPORT_HIGHLIGHTS = [
  {
    number: '112',
    title: 'Emergency assistance',
    detail: 'Contact emergency services immediately if you face urgent danger or physical threats.',
  },
  {
    number: '1930',
    title: 'Cyber financial fraud',
    detail:
      'For cyber financial fraud reporting — not a general helpline for intimate-image removal.',
  },
  {
    number: '181',
    title: 'Women Helpline',
    detail: 'Support helpline connecting women experiencing violence or threats to assistance.',
  },
  {
    number: '1098',
    title: 'Child Helpline',
    detail: 'Support and protection assistance for anyone under 18.',
  },
];

const CHAPTER_SOURCES = [
  {
    number: '1',
    title: 'Meta Safety Center – Non-Consensual Intimate Images (NCII)',
    url: 'https://www.meta.com/safety/topics/bullying-harassment/ncii/',
  },
  {
    number: '2',
    title: 'WhatsApp Help Center – How to block and report contacts (including View Once media)',
    url: 'https://faq.whatsapp.com/1142481766359885/',
  },
  {
    number: '3',
    title: 'WhatsApp Help Center – How to report WhatsApp Channels',
    url: 'https://faq.whatsapp.com/3440358352849077/',
  },
  {
    number: '4',
    title: 'StopNCII.org',
    url: 'https://stopncii.org/',
  },
  {
    number: '5',
    title: 'StopNCII – How It Works',
    url: 'https://stopncii.org/how-it-works/?lang=en',
  },
  {
    number: '6',
    title: 'StopNCII – Frequently Asked Questions',
    url: 'https://stopncii.org/faq/?lang=en-gb',
  },
  {
    number: '7',
    title: 'StopNCII – Create Your Case',
    url: 'https://stopncii.org/create-your-case/',
  },
  {
    number: '8',
    title: 'Take It Down – National Center for Missing & Exploited Children (NCMEC)',
    url: 'https://takeitdown.ncmec.org/',
  },
  {
    number: '9',
    title: 'Take It Down – Frequently Asked Questions',
    url: 'https://takeitdown.ncmec.org/faq/',
  },
];

export const ImageRemovalSection: React.FC = () => {
  const handleNavigateToChapter03 = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.location.pathname !== '/all-the-numbers') {
      window.history.pushState({}, '', '/all-the-numbers');
    }
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-enter bg-[#FFFFFF] text-[#2A233D]">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SectionMetaNotice />

        {/* Privacy & Digital-Rights Header */}
        <header className="pb-10 border-b border-[#DDD6EA] space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#6E5A94] font-semibold">
              <Lock className="w-4 h-4" aria-hidden="true" />
              <span>iZoon | Chapter 06 · Privacy &amp; Digital Rights</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2A233D] leading-tight">
              Getting an Image Removed
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#474957] max-w-prose">
              Practical guidance for reporting non-consensual intimate imagery on Instagram,
              Facebook and WhatsApp, and understanding hash-based removal-support services such as
              StopNCII and Take It Down.
            </p>
          </div>

          <div className="space-y-2.5">
            <StopNciiPrivacyDiagram className="w-full h-auto" />
            <p className="text-xs font-serif italic text-[#5E5A70]">
              How local hash-matching services work — eligible digital fingerprints are generated on
              your device so private files are not uploaded through the hashing step. Participation
              and eligibility requirements apply, and removal across the whole internet cannot be
              guaranteed.
            </p>
          </div>
        </header>

        {/* 1. Start here: You are not to blame */}
        <section
          aria-labelledby="start-here-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-5"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              Section 01
            </div>
            <h2
              id="start-here-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              1. Start here: You are not to blame
            </h2>
          </div>

          <div className="rounded-xl border border-[#DDD6EA] bg-[#F7F5FA] p-6 sm:p-7 space-y-3 text-sm sm:text-base leading-relaxed text-[#2A233D]">
            <p className="font-medium">
              Sharing or threatening to share someone&apos;s intimate images without consent is
              never the targeted person&apos;s fault.
            </p>
            <p className="text-[#474957]">
              Reporting content to a platform or using removal-support tools can help limit spread
              and trigger review, though removal cannot be guaranteed in every case.
            </p>
            <p className="text-[#474957]">
              Platform interfaces, menu paths and policies change over time, so button names and
              available options may vary across devices and app versions.
            </p>
            <div className="rounded-lg border border-[#C7BBE0] bg-[#ECE7F5] p-4 font-medium text-[#2A233D]">
              Nobody should send intimate images to iZoon, ChatGPT, public verification websites or
              other people for checking.
            </div>
          </div>
        </section>

        {/* 2. Preserve non-explicit evidence safely */}
        <section
          aria-labelledby="evidence-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              Section 02
            </div>
            <h2
              id="evidence-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              2. Preserve non-explicit evidence safely
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#474957]">
              Reporting or takedown action can remove a public post or profile. If it is safe to do
              so, a person may keep a record of non-explicit details before or while reporting:
            </p>
          </div>

          <div className="rounded-xl border border-[#DDD6EA] bg-[#FFFFFF] p-6 space-y-3 max-w-3xl">
            <ul className="space-y-2 text-sm sm:text-base text-[#2A233D] list-disc pl-5">
              {EVIDENCE_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pt-3 border-t border-[#ECE7F5] text-sm font-medium text-[#382D54]">
              Evidence can be helpful, but collecting evidence is never a requirement before seeking
              help, support or protection.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#6E5A94] bg-[#F2EEF9] p-6 space-y-3 text-sm sm:text-base leading-relaxed text-[#2A233D]">
            <div className="flex items-center gap-2 font-semibold text-[#382D54]">
              <ShieldAlert className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h3>Important minor-safety rule (under 18)</h3>
            </div>
            <p>
              If the person depicted is under 18, do not download, screenshot, copy, save, forward
              or ask anyone to send an intimate image or video.
            </p>
            <p>
              Preserve non-explicit details and threatening or abusive messages only, and seek help
              from a trusted adult and appropriate official support.
            </p>
          </div>
        </section>

        {/* 3. Report on Instagram */}
        <section
          aria-labelledby="instagram-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-5"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              <Share2 className="w-4 h-4" aria-hidden="true" />
              <span>Section 03</span>
            </div>
            <h2
              id="instagram-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              3. Report on Instagram
            </h2>
          </div>

          <div className="rounded-xl border border-[#DDD6EA] bg-[#F7F5FA] p-6 sm:p-7 space-y-4 text-sm sm:text-base leading-relaxed text-[#474957]">
            <p className="text-[#2A233D]">
              Use Instagram&apos;s in-app reporting options directly on the relevant post, reel,
              story, message or profile for:
            </p>
            <ul className="space-y-2 list-disc pl-5 text-[#2A233D]">
              <li>A specific intimate image or post shared without consent.</li>
              <li>An account threatening to share intimate imagery.</li>
              <li>Harassment, blackmail or related abusive behaviour.</li>
            </ul>
            <p>
              Because Instagram updates its menus and reporting labels over time, select the closest
              available reporting reason (for example, nudity or sexual activity, non-consensual
              intimate content, harassment, or threats/extortion) and follow the on-screen
              instructions.
            </p>
            <p className="text-xs sm:text-sm text-[#5E5A70]">
              Submitting a report triggers platform review; it does not guarantee that content will
              be removed or that an account will be suspended.
            </p>
            <div className="pt-1">
              <a
                href="https://www.meta.com/safety/topics/bullying-harassment/ncii/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
              >
                <span>
                  Meta Safety Center: Non-Consensual Intimate Images
                  (https://www.meta.com/safety/topics/bullying-harassment/ncii/)
                </span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* 4. Report on Facebook */}
        <section
          aria-labelledby="facebook-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-5"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              <Share2 className="w-4 h-4" aria-hidden="true" />
              <span>Section 04</span>
            </div>
            <h2
              id="facebook-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              4. Report on Facebook
            </h2>
          </div>

          <div className="rounded-xl border border-[#DDD6EA] bg-[#F7F5FA] p-6 sm:p-7 space-y-4 text-sm sm:text-base leading-relaxed text-[#474957]">
            <ul className="space-y-2.5 list-disc pl-5 text-[#2A233D]">
              <li>
                Report the specific post, photo, video, message or threat using Facebook&apos;s
                current in-app reporting flow, choosing the closest available reporting category and
                following the on-screen prompts.
              </li>
              <li>
                Check Facebook&apos;s Support Inbox or available support/report-status feature to
                review updates on a report where available (available status screens and wording can
                vary).
              </li>
            </ul>
            <p className="rounded-lg border border-[#C7BBE0] bg-[#FFFFFF] p-4 text-xs sm:text-sm text-[#2A233D]">
              <strong>Privacy note:</strong> Facebook&apos;s standard reporting process does not
              ordinarily identify the reporter to the person whose content is reported. However, do
              not assume complete anonymity in every legal, technical or safety circumstance, and
              remember that reporting does not guarantee removal.
            </p>
            <div className="pt-1">
              <a
                href="https://www.meta.com/safety/topics/bullying-harassment/ncii/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
              >
                <span>
                  Meta Safety Center: Non-Consensual Intimate Images
                  (https://www.meta.com/safety/topics/bullying-harassment/ncii/)
                </span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* 5. Report on WhatsApp */}
        <section
          aria-labelledby="whatsapp-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Section 05</span>
            </div>
            <h2
              id="whatsapp-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              5. Report on WhatsApp
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#474957]">
              Follow current official WhatsApp Help Center options depending on whether abuse
              occurs in a direct chat or group, View Once media, or a WhatsApp Channel. Menu labels
              may vary slightly by device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* A. Report a contact or chat */}
            <div className="rounded-xl border border-[#DDD6EA] bg-[#FFFFFF] p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-[#6E5A94]">SUBSECTION A</div>
                <h3 className="font-serif text-xl font-medium text-[#2A233D]">
                  Report a contact or chat
                </h3>
                <ul className="space-y-2 text-sm leading-relaxed text-[#474957] list-disc pl-4">
                  <li>
                    You can report a contact or group through WhatsApp&apos;s current in-app
                    reporting options.
                  </li>
                  <li>
                    WhatsApp states that a report may include up to five of the most recent messages
                    sent by the reported contact or group.
                  </li>
                  <li>
                    Reporting alone does not block further contact; blocking is a separate option if
                    you want to stop messages and calls.
                  </li>
                  <li>Reporting does not guarantee that an account will be removed.</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-[#ECE7F5]">
                <a
                  href="https://faq.whatsapp.com/1142481766359885/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
                >
                  <span>WhatsApp Help Center</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* B. Report View Once media */}
            <div className="rounded-xl border border-[#DDD6EA] bg-[#FFFFFF] p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-[#6E5A94]">SUBSECTION B</div>
                <h3 className="font-serif text-xl font-medium text-[#2A233D]">
                  Report View Once media
                </h3>
                <p className="text-sm leading-relaxed text-[#474957]">
                  WhatsApp&apos;s current Help Center provides a report option directly from the
                  View Once media viewer.
                </p>
                <p className="text-sm leading-relaxed text-[#474957]">
                  Open the in-viewer menu/options to submit a report before closing if safe to do
                  so. The exact interface and button placement can vary across app versions and
                  devices.
                </p>
              </div>
              <div className="pt-3 border-t border-[#ECE7F5]">
                <a
                  href="https://faq.whatsapp.com/1142481766359885/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
                >
                  <span>WhatsApp Help Center</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* C. Report a WhatsApp Channel */}
            <div className="rounded-xl border border-[#DDD6EA] bg-[#FFFFFF] p-6 flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-[#6E5A94]">SUBSECTION C</div>
                <h3 className="font-serif text-xl font-medium text-[#2A233D]">
                  Report a WhatsApp Channel
                </h3>
                <p className="text-sm leading-relaxed text-[#474957]">
                  You can report an individual Channel update or the Channel itself through
                  WhatsApp&apos;s current in-app reporting options.
                </p>
                <p className="text-sm leading-relaxed text-[#474957]">
                  Follow the in-app prompts shown for the update or Channel info screen; procedures
                  may differ depending on your device and WhatsApp version.
                </p>
              </div>
              <div className="pt-3 border-t border-[#ECE7F5]">
                <a
                  href="https://faq.whatsapp.com/3440358352849077/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
                >
                  <span>WhatsApp Channel Reporting FAQ</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Removal-support services: StopNCII and Take It Down */}
        <section
          aria-labelledby="hash-services-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              <Fingerprint className="w-4 h-4" aria-hidden="true" />
              <span>Section 06</span>
            </div>
            <h2
              id="hash-services-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              6. Removal-support services: StopNCII and Take It Down
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* StopNCII.org */}
            <div className="rounded-2xl border border-[#DDD6EA] bg-[#F7F5FA] p-6 sm:p-7 flex flex-col justify-between gap-5">
              <div className="space-y-3">
                <div className="font-mono text-xs font-semibold text-[#6E5A94]">
                  FOR ADULTS (18 OR OLDER IN THE IMAGERY)
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#2A233D]">StopNCII.org</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-[#474957] list-disc pl-5">
                  <li>
                    Intended for people who were <strong>18 or older</strong> in the intimate image
                    or video.
                  </li>
                  <li>
                    Accepts eligible non-consensual intimate imagery, including synthetic or
                    AI-generated intimate imagery.
                  </li>
                  <li>
                    Creates a digital hash (fingerprint) directly on your device; the image itself
                    is not uploaded through the hashing process.
                  </li>
                  <li>
                    Participating platforms can use those hashes to detect matching content on
                    their services.
                  </li>
                  <li>
                    It cannot remove content from the entire internet, and eligibility requirements
                    apply — not every image or file qualifies.
                  </li>
                  <li>StopNCII is a support tool, not a guaranteed removal service.</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#DDD6EA] space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#5E5A70]">
                  Official StopNCII Links
                </div>
                <ul className="space-y-1.5 text-xs font-mono">
                  {STOPNCII_LINKS.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
                      >
                        <span>
                          {item.label}: {item.url}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Take It Down – NCMEC */}
            <div className="rounded-2xl border border-[#DDD6EA] bg-[#F7F5FA] p-6 sm:p-7 flex flex-col justify-between gap-5">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="font-mono text-xs font-semibold text-[#6E5A94]">
                    FOR IMAGERY DEPICTING UNDER-18s
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#2A233D]">
                    Take It Down – NCMEC
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-[#474957] list-disc pl-5">
                    <li>
                      For images or videos taken when the person depicted was{' '}
                      <strong>under 18</strong>.
                    </li>
                    <li>It can be used even if that person is now an adult.</li>
                    <li>
                      Creates a digital hash on the device; the image itself is not uploaded to
                      NCMEC through this process.
                    </li>
                    <li>Works with participating public or unencrypted online platforms.</li>
                    <li>It cannot guarantee that every copy will be found or removed.</li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-[#6E5A94] bg-[#FFFFFF] p-4 space-y-2 text-xs sm:text-sm leading-relaxed text-[#2A233D]">
                  <div className="flex items-center gap-2 font-semibold text-[#382D54]">
                    <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Critical safety rule</span>
                  </div>
                  <p>
                    Never tell a minor to download, copy, forward, request or obtain an intimate
                    image to submit it. If the image is not already on their device, they should
                    not obtain another copy. Seek help from a trusted adult and official guidance.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDD6EA] space-y-2">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#5E5A70]">
                  Official Take It Down Links
                </div>
                <ul className="space-y-1.5 text-xs font-mono">
                  {TAKEITDOWN_LINKS.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
                      >
                        <span>
                          {item.label}: {item.url}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. India support and further help */}
        <section
          aria-labelledby="india-support-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Section 07</span>
            </div>
            <h2
              id="india-support-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#2A233D]"
            >
              7. India support and further help
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#474957]">
              Alongside platform reporting and hash-matching services, support helplines can help
              with safety, protection and reporting guidance. No single helpline directly removes
              online content from platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDIA_SUPPORT_HIGHLIGHTS.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-[#DDD6EA] bg-[#F7F5FA] p-5 space-y-2"
              >
                <div className="font-mono text-xl font-semibold tabular-nums text-[#382D54]">
                  {item.number}
                </div>
                <h3 className="font-serif text-base font-medium text-[#2A233D]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#474957]">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[#DDD6EA] bg-[#FFFFFF] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm leading-relaxed text-[#2A233D]">
              For full details, reporting portals (such as{' '}
              <span className="font-mono text-xs">cybercrime.gov.in</span>), legal aid and mental
              health support contacts across India and Jammu &amp; Kashmir, visit{' '}
              <a
                href="/all-the-numbers"
                onClick={handleNavigateToChapter03}
                className="inline-flex items-center gap-1 font-semibold text-[#5A4682] hover:text-[#2A233D] underline underline-offset-4 cursor-pointer"
              >
                <span>Chapter 03 – All the Numbers</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
              .
            </p>
          </div>
        </section>

        {/* 8. Important reminders */}
        <section
          aria-labelledby="reminders-heading"
          className="py-10 border-b border-[#DDD6EA] space-y-4"
        >
          <div className="rounded-xl border border-[#C7BBE0] bg-[#ECE7F5] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#382D54]">
              <Shield className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h2 id="reminders-heading" className="font-serif text-2xl font-medium text-[#2A233D]">
                8. Important reminders
              </h2>
            </div>

            <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-[#2A233D] list-disc pl-5">
              <li>
                Platform reporting, StopNCII and Take It Down can help limit spread, but neither
                platforms nor tools can guarantee removal, anonymity in every circumstance or
                complete takedown across the internet.
              </li>
              <li>
                Never send intimate images to iZoon, ChatGPT, public verification websites or other
                people for checking.
              </li>
              <li>
                If the person depicted may be under 18, never download, copy, screenshot, save,
                forward or request the imagery; involve a trusted adult and official child-safety
                support.
              </li>
              <li>
                Platform menus, features and participating services change over time — always follow
                current on-screen prompts and official Help Center pages.
              </li>
            </ul>

            <div className="pt-3 border-t border-[#C7BBE0] flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#3E3A4F]">
              <Info className="w-4 h-4 text-[#5A4682] shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong>
                  This website provides general awareness information only. It is not legal advice,
                  an investigation or content-removal service, or a guarantee of platform removal or
                  legal outcomes.
                </strong>
              </p>
            </div>

            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-[#474957]">
              <AlertTriangle className="w-4 h-4 text-[#6E5A94] shrink-0 mt-0.5" aria-hidden="true" />
              <p>This guide does not ask visitors to submit incident reports or upload files.</p>
            </div>
          </div>
        </section>

        {/* 9. Sources and further reading */}
        <section aria-labelledby="sources-heading" className="pt-10 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#6E5A94] font-semibold">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>References</span>
          </div>
          <h2 id="sources-heading" className="font-serif text-2xl font-medium text-[#2A233D]">
            9. Sources and further reading
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#DDD6EA] pt-6 text-sm">
            {CHAPTER_SOURCES.map((source) => (
              <li
                key={source.number}
                className="rounded-xl border border-[#DDD6EA] bg-[#F7F5FA] p-4 flex items-start gap-3"
              >
                <span className="font-mono text-xs font-semibold tabular-nums text-[#6E5A94] pt-0.5 shrink-0">
                  {source.number}.
                </span>
                <div className="space-y-1">
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#2A233D] hover:text-[#6E5A94] underline underline-offset-2"
                    >
                      {source.title}
                    </a>
                  </div>
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#5A4682] hover:text-[#2A233D] underline underline-offset-2 break-all"
                    >
                      <span>{source.url}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </div>
  );
};
