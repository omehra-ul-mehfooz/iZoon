import React from 'react';
import {
  AlertTriangle,
  ArrowDown,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  HeartHandshake,
  Info,
  Lock,
  PhoneCall,
  Scale,
  Shield,
  ShieldAlert,
} from 'lucide-react';
import type { SectionSlug } from '../../types/content';
import { EditorialImage } from '../EditorialImage';
import { SectionMetaNotice } from '../SectionMetaNotice';

interface BlackmailSectionProps {
  onNavigate: (route: SectionSlug) => void;
}

const IMPORTANT_THINGS_TO_REMEMBER = [
  'You deserve help, regardless of what happened before the threats began.',
  'Do not send more money or private content because of threats.',
  'Paying does not guarantee that the threats will stop.',
  'Do not blame yourself or let embarrassment prevent you from seeking support.',
  'If you are in immediate danger, contact emergency services.',
  'If you are under 18, involve a trusted adult or child-support service as soon as possible.',
];

const EVIDENCE_TABLE = [
  {
    info: 'Messages containing threats or demands',
    why: 'Helps establish what was communicated',
  },
  {
    info: 'Username and account profile link',
    why: 'Helps identify the account involved',
  },
  {
    info: 'Phone number or email address',
    why: 'May help investigators identify the account',
  },
  {
    info: 'Date and time of communication',
    why: 'Helps establish the sequence of events',
  },
  {
    info: 'Payment receipts and transaction IDs',
    why: 'May help trace financial transactions',
  },
  {
    info: 'Relevant webpage or post URLs',
    why: 'Helps locate reported content',
  },
  {
    info: 'Emails and platform notifications',
    why: 'May provide additional context',
  },
];

const BNS_PROVISIONS = [
  {
    section: 'Section 308',
    provision: 'Extortion',
    relevance: 'May apply when someone uses fear or threats to dishonestly obtain money or property.',
  },
  {
    section: 'Section 351',
    provision: 'Criminal intimidation',
    relevance: 'May apply to threats intended to cause alarm or compel someone to act or refrain from acting.',
  },
  {
    section: 'Section 77',
    provision: 'Voyeurism',
    relevance:
      'Covers specified conduct involving the capture or dissemination of images of a woman engaged in a private act.',
  },
  {
    section: 'Section 78',
    provision: 'Stalking',
    relevance:
      "Includes specified repeated unwanted contact and monitoring of a woman's electronic communications.",
  },
  {
    section: 'Section 319',
    provision: 'Cheating by personation',
    relevance: 'May apply where someone cheats by pretending to be another person or using a false identity.',
  },
  {
    section: 'Section 72',
    provision: 'Disclosure of identity of victims of certain offences',
    relevance: 'Protects the identity of victims of specified sexual offences under Sections 64–71.',
  },
];

const IT_ACT_PROVISIONS = [
  {
    section: 'Section 66C',
    provision: 'Identity theft',
    relevance:
      "Covers dishonest or fraudulent use of another person's electronic signature, password or unique identification feature.",
  },
  {
    section: 'Section 66D',
    provision: 'Cheating by personation using a computer resource',
    relevance: 'May apply to online impersonation used to cheat someone.',
  },
  {
    section: 'Section 66E',
    provision: 'Violation of privacy',
    relevance:
      "Covers specified non-consensual capture, publication or transmission of images of a person's private area in circumstances violating privacy.",
  },
  {
    section: 'Section 67',
    provision: 'Obscene material in electronic form',
    relevance: 'Covers specified obscene material published or transmitted electronically.',
  },
  {
    section: 'Section 67A',
    provision: 'Material containing sexually explicit acts',
    relevance: 'Covers specified sexually explicit material published or transmitted electronically.',
  },
  {
    section: 'Section 67B',
    provision: 'Material depicting children in sexually explicit acts',
    relevance: 'Contains provisions relating to child sexual exploitation material and related conduct.',
  },
];

const INDIA_CONTACTS = [
  {
    contact: '112',
    purpose: 'Emergency assistance',
  },
  {
    contact: '181',
    purpose: 'Women Helpline',
  },
  {
    contact: '1098',
    purpose: 'Child Helpline',
  },
  {
    contact: '1930',
    purpose: 'Financial cyber-fraud reporting assistance',
  },
  {
    contact: 'cybercrime.gov.in',
    purpose: 'National Cyber Crime Reporting Portal',
    url: 'https://cybercrime.gov.in/',
  },
];

const JK_CONTACTS = [
  {
    number: '112',
    service: 'Emergency assistance',
  },
  {
    number: '181',
    service: 'Women Helpline',
  },
  {
    number: '1098',
    service: 'Child Helpline',
  },
  {
    number: '1930',
    service: 'Cybercrime helpline – financial cyber-fraud assistance',
  },
];

const CHAPTER_SOURCES = [
  {
    number: '1',
    title: 'National Cyber Crime Reporting Portal – Government of India',
    url: 'https://cybercrime.gov.in/',
  },
  {
    number: '2',
    title: 'National Cyber Crime Reporting Portal – Official Website and FAQ Access',
    url: 'https://cybercrime.gov.in/',
  },
  {
    number: '3',
    title: 'Legislative Department – Government of India (Legislation Resources)',
    url: 'https://legislative.gov.in/',
  },
  {
    number: '4',
    title: 'Ministry of Electronics and Information Technology – Government of India',
    url: 'https://www.meity.gov.in/',
  },
  {
    number: '5',
    title: 'India Code – Official Central Legislation Repository (POCSO Act)',
    url: 'https://www.indiacode.nic.in/',
  },
  {
    number: '6',
    title: 'India Code – Official Central Legislation Repository (Jammu and Kashmir Reorganisation Act)',
    url: 'https://www.indiacode.nic.in/',
  },
  {
    number: '7',
    title: 'Ministry of Women and Child Development – Government of India',
    url: 'https://wcd.gov.in/',
  },
  {
    number: '8',
    title: 'Ministry of Women and Child Development – Government of India',
    url: 'https://wcd.gov.in/',
  },
  {
    number: '9',
    title: 'District Srinagar Administration – Helplines',
    url: 'https://srinagar.nic.in/helpline/',
  },
];

export const BlackmailSection: React.FC<BlackmailSectionProps> = ({ onNavigate }) => {
  return (
    <div className="page-enter bg-[#FCF9FA] text-[#241B20]">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SectionMetaNotice />

        {/* Calm Human-Centred Sanctuary Hero */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-12 border-b border-[#E5CFD6]">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#4D1933]">
              <HeartHandshake className="w-4 h-4 text-[#B57282]" aria-hidden="true" />
              <span>iZoon – Chapter 02</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#241B20] leading-[1.14]">
              If Someone Blackmails or Threatens You
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#4D1933] leading-snug">
              A guide to digital safety, reporting and support in India
            </p>

            <div className="rounded-xl border border-[#E5CFD6] bg-[#F6EAEE] px-4 py-2.5 text-xs font-medium text-[#4D1933] inline-flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Educational awareness only — not legal advice.</span>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-[#4C3841] max-w-prose">
              <p>
                If someone threatens to share your private information or images, demands money, or
                uses online threats to control you, you deserve support.
              </p>
              <p>
                You are not to blame for another person&apos;s threats or for sharing something
                privately in a relationship. Sharing something with one person does not give them
                permission to threaten you or distribute it without consent.
              </p>
              <p className="font-medium text-[#241B20]">
                You do not have to handle the situation alone.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-[#E5CFD6] bg-[#F6EAEE] p-4">
              <EditorialImage
                src="/src/assets/images/blackmail_support_sanctuary_1794853690262.jpg"
                alt="Two women sitting calmly across a wooden tea table in soft morning sunlight, having a supportive conversation"
                caption="Talking with a trusted person or support service helps reduce isolation when facing threats."
                aspectClass="aspect-[4/3]"
                className="text-[#5E4A53]"
                fallbackBg="bg-[#F3E3E9]"
              />
            </div>

            {/* Quick locate banner for Under-18 Safety Guidance */}
            <a
              href="#step-9-under-18"
              className="rounded-2xl border border-[#4D1933]/30 bg-[#FFFFFF] p-4 flex items-center justify-between gap-4 hover:bg-[#F6EAEE] transition-colors"
            >
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#4D1933] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold text-[#241B20]">
                    Under 18? Read child &amp; teenager safety guidance
                  </div>
                  <div className="text-xs text-[#57454E]">
                    Jump directly to Step 9 for POCSO &amp; Child Helpline 1098 guidance
                  </div>
                </div>
              </div>
              <ArrowDown className="w-4 h-4 text-[#4D1933] shrink-0" aria-hidden="true" />
            </a>
          </div>
        </header>

        {/* The Most Important Things to Remember */}
        <section aria-labelledby="most-important-heading" className="py-10 border-b border-[#E5CFD6]">
          <div className="rounded-2xl border border-[#4D1933]/25 bg-[#F6EAEE] p-6 sm:p-8 space-y-4">
            <h2
              id="most-important-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#241B20]"
            >
              The Most Important Things to Remember
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              {IMPORTANT_THINGS_TO_REMEMBER.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Steps 1 to 9 */}
        <section aria-label="Step-by-step guidance" className="py-12 border-b border-[#E5CFD6] space-y-8">
          {/* Step 1 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                01
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 1 – Stay Calm and Avoid Further Engagement
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              Threats can create pressure to respond immediately. Take a moment before making
              decisions.
            </p>

            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              <li>Do not send more money or private content.</li>
              <li>Do not agree to repeated demands or promises made by the person threatening you.</li>
              <li>Avoid arguing, threatening revenge or trying to investigate the person yourself.</li>
              <li>If you have already paid, do not blame yourself. You can still report what happened.</li>
              <li>Seek help from someone you trust.</li>
            </ul>

            <div className="rounded-xl border border-[#E5CFD6] bg-[#F6EAEE] p-4 text-sm sm:text-base text-[#241B20]">
              <strong>Remember:</strong> You do not need to negotiate with someone who is threatening
              you.
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                02
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 2 – Preserve Available Evidence Safely
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              If it is safe to do so, preserve information that may help explain what happened.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#241B20]">Useful information may include:</p>
              <div className="rounded-xl border border-[#E5CFD6] overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F6EAEE] border-b border-[#E5CFD6] text-xs font-mono uppercase tracking-wider text-[#4D1933]">
                      <th scope="col" className="py-3.5 px-5">
                        Information
                      </th>
                      <th scope="col" className="py-3.5 px-5">
                        Why it may help
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE3E7] text-sm">
                    {EVIDENCE_TABLE.map((row) => (
                      <tr key={row.info}>
                        <th scope="row" className="py-3.5 px-5 font-medium text-[#241B20]">
                          {row.info}
                        </th>
                        <td className="py-3.5 px-5 text-[#4C3841]">{row.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-[#E5CFD6] bg-[#FCF9FA] p-5 space-y-3">
              <h3 className="text-base font-semibold text-[#4D1933]">A few important precautions:</h3>
              <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
                <li>
                  Keep original non-explicit messages, account details, URLs and relevant
                  transaction records where safe.
                </li>
                <li>Avoid editing or altering evidence.</li>
                <li>
                  Store copies of non-explicit records securely and limit who can access them.
                </li>
                <li>Do not put yourself at risk to collect evidence.</li>
                <li>
                  Do not save, screenshot, download, copy, or forward intimate images. You can seek
                  help without retaining the image.
                </li>
                <li>Never upload intimate or sensitive images to iZoon or public verification websites.</li>
              </ul>
            </div>

            <p className="text-sm sm:text-base font-medium text-[#241B20]">
              You can report an incident even if you do not have every piece of evidence.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                03
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 3 – Do Not Delete Important Messages
              </h2>
            </div>

            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-[#4C3841]">
              <p>
                Where safe, avoid deleting relevant non-explicit messages, account details, URLs,
                emails, notifications or relevant transaction records before seeking advice about
                preserving them.
              </p>
              <p>
                Do not save, screenshot, download, copy, or forward intimate images. You can seek
                help without retaining the image.
              </p>
              <p>Such information may help investigators understand the incident.</p>
              <p>
                If you are concerned about your privacy, ask a trusted adult or appropriate authority
                for help preserving relevant records safely.
              </p>
              <p className="font-medium text-[#241B20]">
                You do not need to keep communicating with the person threatening you.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                04
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 4 – Protect Your Accounts and Privacy
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              Once you have preserved any available non-sensitive evidence, consider taking steps to
              protect your online accounts.
            </p>

            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              <li>Block or restrict the account if you feel safe doing so.</li>
              <li>Report threatening messages or accounts through the platform.</li>
              <li>Change passwords if you think an account may have been accessed.</li>
              <li>Enable two-step verification.</li>
              <li>Review account privacy and login settings.</li>
              <li>Avoid sharing additional personal information.</li>
            </ul>

            <div className="rounded-xl border border-[#E5CFD6] bg-[#F6EAEE] p-4 text-sm sm:text-base text-[#241B20]">
              <strong>Your safety comes first.</strong> You do not have to delay blocking someone if
              continued contact is making you feel unsafe.
            </div>
          </div>

          {/* Step 5 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                05
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 5 – Report the Incident
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              You can seek help through official reporting channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-[#E5CFD6] bg-[#FCF9FA] p-5 space-y-3">
                <h3 className="font-serif text-xl font-medium text-[#241B20]">
                  National Cyber Crime Reporting Portal
                </h3>
                <p className="text-sm text-[#241B20]">
                  <strong>Website:</strong>{' '}
                  <a
                    href="https://cybercrime.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[#4D1933] underline underline-offset-2 hover:text-[#241B20]"
                  >
                    <span>https://cybercrime.gov.in</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-[#4C3841]">
                  The portal accepts reports about different forms of cybercrime, including online
                  and social-media-related incidents.
                </p>
                <p className="text-sm leading-relaxed text-[#4C3841]">
                  You can select the appropriate reporting category and provide the information
                  requested.
                </p>
                <p className="text-sm leading-relaxed text-[#4C3841]">
                  The portal has a limited anonymous-reporting option for specified categories
                  involving women and children. Other cybercrime reports require registration.
                </p>
              </div>

              <div className="rounded-xl border border-[#E5CFD6] bg-[#FCF9FA] p-5 space-y-3">
                <h3 className="font-serif text-xl font-medium text-[#241B20]">
                  Cyber Crime Helpline – 1930
                </h3>
                <div className="rounded-lg border border-[#4D1933]/25 bg-[#F6EAEE] p-4 text-sm leading-relaxed text-[#241B20]">
                  <strong>Important:</strong> 1930 is primarily associated with reporting financial
                  cyber fraud. If money has been transferred because of an online threat, contact
                  this helpline promptly and also submit the relevant complaint through the official
                  portal.
                </div>
                <p className="text-sm leading-relaxed text-[#4C3841]">
                  For non-financial online blackmail or threats, use the National Cyber Crime
                  Reporting Portal or approach the police/cybercrime authorities.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#241B20]">
                Other reporting options
              </h3>
              <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
                <li>Visit your nearest police station or cybercrime unit.</li>
                <li>Contact the appropriate Women Helpline if you need support.</li>
                <li>Report the account or content through the relevant social-media platform.</li>
                <li>If you are in immediate danger, call 112.</li>
              </ul>
            </div>

            <p className="text-sm sm:text-base font-medium text-[#241B20]">
              You can report an incident even when the person behind an online account is not known
              to you.
            </p>
          </div>

          {/* Step 6 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                06
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 6 – If Private Content Has Already Been Shared
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              If private content has appeared online without your consent, you can seek help to
              report it and request action.
            </p>

            <div className="space-y-2.5">
              <p className="text-sm font-semibold text-[#241B20]">Consider these steps:</p>
              <ol className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-decimal pl-5">
                <li>
                  Note the webpage address, account username and other available non-sensitive
                  information.
                </li>
                <li>Preserve relevant messages and notifications where safe.</li>
                <li>Report the content through the platform&apos;s official reporting process.</li>
                <li>Submit a complaint through the National Cyber Crime Reporting Portal.</li>
                <li>Contact the police or cybercrime authorities for assistance.</li>
              </ol>
            </div>

            <div className="space-y-2 text-sm sm:text-base leading-relaxed text-[#4C3841]">
              <p>Do not repost, forward or circulate the content to prove what happened.</p>
              <p>
                If the content involves someone under 18, do not download, copy or forward it. Seek
                help from a trusted adult and the appropriate authorities.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5CFD6] bg-[#F6EAEE] p-4 text-sm sm:text-base text-[#241B20]">
              <strong>Important:</strong> Reporting content does not guarantee immediate removal.
              Platforms have their own review processes, and outcomes can vary.
            </div>
          </div>

          {/* Step 7 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                07
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 7 – If Money Has Already Been Transferred
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              If you transferred money because of threats:
            </p>

            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              <li>Do not blame yourself.</li>
              <li>Preserve payment receipts and transaction details.</li>
              <li>Contact your bank or payment provider promptly.</li>
              <li>Call 1930 for financial cyber-fraud assistance.</li>
              <li>
                Submit a complaint through{' '}
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[#4D1933] underline underline-offset-2 hover:text-[#241B20]"
                >
                  <span>https://cybercrime.gov.in</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
                .
              </li>
            </ul>

            <p className="text-sm sm:text-base leading-relaxed text-[#4C3841]">
              Prompt reporting may help authorities and financial institutions take action. However,
              recovery of transferred money is not guaranteed.
            </p>
          </div>

          {/* Step 8 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                08
              </span>
              <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                Step 8 – If You Are Unsure How to Approach the Police
              </h2>
            </div>

            <p className="text-base leading-relaxed text-[#4C3841]">
              If you are having difficulty getting a complaint addressed:
            </p>

            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              <li>
                Ask for guidance from the appropriate senior police officer or cybercrime authority.
              </li>
              <li>Keep a copy of any written complaint and its acknowledgement, if provided.</li>
              <li>Seek assistance from a qualified lawyer or legal-aid service.</li>
              <li>
                If necessary, ask a lawyer about the appropriate procedure for approaching a
                Magistrate.
              </li>
            </ul>

            <div className="space-y-2 text-sm sm:text-base leading-relaxed text-[#4C3841]">
              <p>
                An online incident, an unknown account holder or a person believed to be in another
                state should not discourage you from seeking official help.
              </p>
              <p>The appropriate procedure depends on the facts and applicable law.</p>
            </div>
          </div>

          {/* Step 9 – Under 18 (Prominent Highlighted Section) */}
          <div
            id="step-9-under-18"
            className="rounded-2xl border-2 border-[#4D1933] bg-[#F6EAEE] p-6 sm:p-8 space-y-5 scroll-mt-24"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#4D1933] text-[#FAF7F2] flex items-center justify-center font-mono text-xs font-semibold tabular-nums shrink-0">
                  09
                </span>
                <h2 className="font-serif text-2xl font-medium text-[#241B20]">
                  Step 9 – If the Person Affected Is Under 18
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4D1933]">
                <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                <span>Priority Child Protection</span>
              </span>
            </div>

            <p className="text-base leading-relaxed text-[#241B20]">
              Children and teenagers are entitled to special protection under Indian law.
            </p>

            <div className="space-y-2.5">
              <p className="text-sm font-semibold text-[#241B20]">
                If you are under 18 and someone is threatening you online:
              </p>
              <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
                <li>Tell a trusted adult as soon as possible.</li>
                <li>
                  If you do not feel safe telling a parent or guardian, approach another trusted
                  adult, teacher or appropriate support service.
                </li>
                <li>Contact the police or Child Helpline 1098.</li>
                <li>If there is immediate danger, call 112.</li>
                <li>Do not download, save, forward or circulate intimate images involving a child.</li>
                <li>Do not upload such images to websites or send them to other people as evidence.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-[#4D1933]/25 bg-[#FFFFFF] p-4 text-sm sm:text-base leading-relaxed text-[#241B20]">
              The Protection of Children from Sexual Offences (POCSO) Act, 2012 and the Information
              Technology Act, 2000 contain provisions relating to child sexual exploitation and the
              protection of children.
            </div>

            <p className="text-base font-semibold text-[#4D1933]">
              You are not alone. Asking for help is the right thing to do.
            </p>
          </div>
        </section>

        {/* Understanding the Laws That May Apply */}
        <section
          aria-labelledby="laws-heading"
          className="py-12 border-b border-[#E5CFD6] space-y-8"
        >
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#4D1933]">
              <Scale className="w-4 h-4" aria-hidden="true" />
              <span>Legal Framework Overview</span>
            </div>
            <h2 id="laws-heading" className="font-serif text-2xl sm:text-3xl font-medium text-[#241B20]">
              Understanding the Laws That May Apply
            </h2>
            <p className="text-base leading-relaxed text-[#4C3841]">
              Indian law contains provisions that may apply to threats, extortion, online
              harassment, privacy violations and the non-consensual sharing of private content.
            </p>
            <p className="text-base leading-relaxed text-[#4C3841]">
              The applicable provisions depend on the facts, the nature of the conduct, the people
              involved and the evidence.
            </p>
            <p className="text-sm font-medium text-[#241B20]">
              The following is a general educational overview, not a determination of which offence
              applies in an individual case.
            </p>
          </div>

          {/* A. BNS 2023 */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#241B20]">
              A. Bharatiya Nyaya Sanhita (BNS), 2023
            </h3>
            <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F6EAEE] border-b border-[#E5CFD6] text-xs font-mono uppercase tracking-wider text-[#4D1933]">
                    <th scope="col" className="py-3.5 px-5 whitespace-nowrap">
                      Section
                    </th>
                    <th scope="col" className="py-3.5 px-5">
                      Legal provision
                    </th>
                    <th scope="col" className="py-3.5 px-5">
                      General relevance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE3E7] text-sm">
                  {BNS_PROVISIONS.map((row) => (
                    <tr key={row.section}>
                      <th
                        scope="row"
                        className="py-4 px-5 font-mono text-xs sm:text-sm font-semibold text-[#4D1933] whitespace-nowrap align-top"
                      >
                        {row.section}
                      </th>
                      <td className="py-4 px-5 font-medium text-[#241B20] align-top">
                        {row.provision}
                      </td>
                      <td className="py-4 px-5 text-[#4C3841] leading-relaxed align-top">
                        {row.relevance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* B. IT Act 2000 */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#241B20]">
              B. Information Technology Act, 2000
            </h3>
            <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F6EAEE] border-b border-[#E5CFD6] text-xs font-mono uppercase tracking-wider text-[#4D1933]">
                    <th scope="col" className="py-3.5 px-5 whitespace-nowrap">
                      Section
                    </th>
                    <th scope="col" className="py-3.5 px-5">
                      Legal provision
                    </th>
                    <th scope="col" className="py-3.5 px-5">
                      General relevance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE3E7] text-sm">
                  {IT_ACT_PROVISIONS.map((row) => (
                    <tr key={row.section}>
                      <th
                        scope="row"
                        className="py-4 px-5 font-mono text-xs sm:text-sm font-semibold text-[#4D1933] whitespace-nowrap align-top"
                      >
                        {row.section}
                      </th>
                      <td className="py-4 px-5 font-medium text-[#241B20] align-top">
                        {row.provision}
                      </td>
                      <td className="py-4 px-5 text-[#4C3841] leading-relaxed align-top">
                        {row.relevance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* C. POCSO Act 2012 */}
          <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#241B20]">
              C. Protection of Children from Sexual Offences (POCSO) Act, 2012
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#4C3841]">
              The POCSO Act applies to children below 18 years of age.
            </p>
            <p className="text-sm sm:text-base font-semibold text-[#4D1933]">
              Section 23 – Procedure for media
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#4C3841]">
              This provision restricts disclosure of a child victim&apos;s identity in media
              reporting, subject to the statutory provisions and exceptions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#4C3841]">
              The law also contains special procedures and protections for children during
              investigation and legal proceedings.
            </p>
          </div>

          {/* Important legal clarification */}
          <div className="rounded-2xl border border-[#4D1933]/25 bg-[#F6EAEE] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#4D1933]">
              <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h3 className="font-serif text-xl font-medium text-[#241B20]">
                Important legal clarification
              </h3>
            </div>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              <li>Not every online threat automatically falls under the same legal section.</li>
              <li>
                A section should not be quoted as applicable to every case without examining the
                facts.
              </li>
              <li>
                Identity-protection provisions have specific legal scopes and do not guarantee
                complete anonymity during an investigation.
              </li>
              <li>The police and courts determine which provisions apply.</li>
            </ul>
            <p className="text-sm font-medium text-[#4D1933]">
              For the full wording of any legal provision, consult the original legislation or a
              qualified lawyer.
            </p>
          </div>
        </section>

        {/* Helplines and Reporting Contacts */}
        <section
          aria-labelledby="helplines-heading"
          className="py-12 border-b border-[#E5CFD6] space-y-8"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#4D1933]">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Support Directory</span>
            </div>
            <h2 id="helplines-heading" className="font-serif text-2xl sm:text-3xl font-medium text-[#241B20]">
              Helplines and Reporting Contacts
            </h2>
            <p className="text-base leading-relaxed text-[#4C3841]">
              You do not have to know exactly which service to contact before asking for help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* A. India-wide contacts */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#241B20]">
                A. India-wide contacts
              </h3>
              <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F6EAEE] border-b border-[#E5CFD6] text-xs font-mono uppercase tracking-wider text-[#4D1933]">
                      <th scope="col" className="py-3.5 px-5">
                        Number / Service
                      </th>
                      <th scope="col" className="py-3.5 px-5">
                        Purpose
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE3E7] text-sm">
                    {INDIA_CONTACTS.map((row) => (
                      <tr key={row.contact}>
                        <th scope="row" className="py-3.5 px-5 font-mono font-semibold text-[#4D1933]">
                          {row.url ? (
                            <a
                              href={row.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#241B20]"
                            >
                              <span>{row.contact}</span>
                              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            </a>
                          ) : (
                            row.contact
                          )}
                        </th>
                        <td className="py-3.5 px-5 text-[#241B20]">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* B. Jammu and Kashmir */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#241B20]">
                B. Jammu and Kashmir
              </h3>
              <p className="text-sm text-[#4C3841]">
                The District Srinagar Administration lists the following contacts:
              </p>
              <div className="rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F6EAEE] border-b border-[#E5CFD6] text-xs font-mono uppercase tracking-wider text-[#4D1933]">
                      <th scope="col" className="py-3.5 px-5">
                        Number
                      </th>
                      <th scope="col" className="py-3.5 px-5">
                        Service
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE3E7] text-sm">
                    {JK_CONTACTS.map((row) => (
                      <tr key={row.number}>
                        <th scope="row" className="py-3.5 px-5 font-mono font-semibold text-[#4D1933]">
                          {row.number}
                        </th>
                        <td className="py-3.5 px-5 text-[#241B20]">{row.service}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-[#E5CFD6] bg-[#FFFFFF] p-4 space-y-2 text-sm text-[#4C3841]">
                <p>
                  For the latest district contact information, consult the official Srinagar
                  District Administration helpline directory:
                </p>
                <a
                  href="https://srinagar.nic.in/helpline/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs sm:text-sm text-[#4D1933] underline underline-offset-2 break-all hover:text-[#241B20]"
                >
                  <span>https://srinagar.nic.in/helpline/</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
                <p className="text-xs text-[#57454E] pt-1">
                  <strong>Please note:</strong> Contact availability and procedures may vary. Check
                  the relevant official government directory for updated information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Is It Safe to Ask for Help? Will My Identity Remain Private? */}
        <section
          aria-labelledby="privacy-safety-heading"
          className="py-12 border-b border-[#E5CFD6] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#4D1933]">
              <Lock className="w-4 h-4" aria-hidden="true" />
              <span>Privacy &amp; Safety</span>
            </div>
            <h2
              id="privacy-safety-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#241B20]"
            >
              Is It Safe to Ask for Help? Will My Identity Remain Private?
            </h2>
            <p className="text-base leading-relaxed text-[#4C3841]">
              It is understandable to have questions about privacy before contacting a helpline or
              reporting an incident.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-7 space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#241B20]">What you should know</h3>
              <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
                <li>
                  You can ask a helpline operator how your information will be handled before sharing
                  personal details.
                </li>
                <li>
                  The Women Helpline 181 provides support and has an option for callers who wish to
                  remain anonymous.
                </li>
                <li>
                  Reporting through the National Cyber Crime Reporting Portal has different
                  requirements depending on the reporting category.
                </li>
                <li>
                  The anonymous option is limited to specified categories involving women and
                  children.
                </li>
                <li>Other cybercrime reports generally require registration and contact details.</li>
                <li>
                  If you make a police complaint, relevant personal details may be recorded for
                  investigation.
                </li>
              </ul>

              <div className="rounded-xl border border-[#E5CFD6] bg-[#F6EAEE] p-4 text-sm text-[#241B20]">
                <strong>Important:</strong> Do not assume that every service offers complete
                anonymity. Ask the service about its privacy procedures.
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-[#E5CFD6] bg-[#F6EAEE] p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-[#4D1933]">
                <Shield className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-xl font-medium text-[#241B20]">If You Feel Unsafe</h3>
              </div>
              <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
                <li>Seek help from a trusted person.</li>
                <li>Use a safe and private way to contact support, if possible.</li>
                <li>If you are in immediate danger, call 112.</li>
                <li>If you are under 18, you can contact Child Helpline 1098 or a trusted adult.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What You Should Never Feel Pressured to Do + Remember */}
        <section
          aria-labelledby="no-pressure-heading"
          className="py-12 border-b border-[#E5CFD6] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          <div className="lg:col-span-7 rounded-2xl border border-[#E5CFD6] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
            <h2
              id="no-pressure-heading"
              className="font-serif text-2xl font-medium text-[#241B20]"
            >
              What You Should Never Feel Pressured to Do
            </h2>
            <ul className="space-y-2 text-sm sm:text-base leading-relaxed text-[#241B20] list-disc pl-5">
              <li>Do not send more money because someone threatens you.</li>
              <li>Do not send additional private content.</li>
              <li>Do not blame yourself for trusting someone.</li>
              <li>Do not forward or circulate private images.</li>
              <li>Do not attempt revenge or unauthorised access to another person&apos;s accounts.</li>
              <li>Do not believe that you must handle the situation alone.</li>
              <li>Do not delay seeking help because you feel embarrassed.</li>
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-2xl bg-[#4D1933] text-[#FAF7F2] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#DFC5C8]">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>Remember</span>
              </div>
              <h2 className="font-serif text-2xl font-medium text-[#FAF7F2]">Remember</h2>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-[#FAF7F2]">
                Your privacy matters. Your safety matters. You deserve support.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#EADCE1]">
                A threat does not define you. You can seek help, report what happened and take steps
                to protect yourself.
              </p>
            </div>

            <div className="pt-4 border-t border-[#FAF7F2]/20 flex flex-wrap gap-4 text-sm">
              <button
                type="button"
                onClick={() => onNavigate('all-the-numbers')}
                className="inline-flex items-center gap-1.5 font-medium text-[#FAF7F2] underline underline-offset-4 hover:text-[#DFC5C8] cursor-pointer"
              >
                <span>All the Numbers</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('image-removal')}
                className="inline-flex items-center gap-1.5 font-medium text-[#FAF7F2] underline underline-offset-4 hover:text-[#DFC5C8] cursor-pointer"
              >
                <span>Getting an Image Removed</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* Sources and Further Reading + Editorial & Safety Note */}
        <section aria-labelledby="sources-heading" className="pt-12 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#4D1933]">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>References</span>
          </div>
          <h2 id="sources-heading" className="font-serif text-2xl font-medium text-[#241B20]">
            Sources and Further Reading
          </h2>

          <ol className="space-y-3 text-sm leading-relaxed text-[#241B20] border-t border-[#E5CFD6] pt-5">
            {CHAPTER_SOURCES.map((source) => (
              <li key={source.number} className="flex items-start gap-3">
                <span className="font-mono text-xs tabular-nums text-[#4D1933] pt-1 shrink-0">
                  {source.number}.
                </span>
                <div className="space-y-1">
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#241B20] hover:text-[#4D1933] underline underline-offset-2"
                    >
                      {source.title}
                    </a>
                  </div>
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#4D1933] hover:text-[#241B20] underline underline-offset-2 break-all"
                    >
                      <span>{source.url}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-[#E5CFD6] bg-[#F6EAEE] p-6 space-y-3 text-xs sm:text-sm leading-relaxed text-[#4C3841]">
            <p>
              <strong className="text-[#241B20]">Editorial and safety note:</strong> This chapter
              provides general digital safety and educational information. It does not constitute
              legal advice, emergency assistance or a guarantee of content removal, investigation or
              financial recovery. Legal provisions and reporting procedures may change. Verify
              official contact details before publication.
            </p>
            <p>
              <strong className="text-[#241B20]">iZoon Disclaimer:</strong> Awareness information
              only — not legal advice.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
