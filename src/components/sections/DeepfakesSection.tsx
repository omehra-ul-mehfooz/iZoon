import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Info,
  LifeBuoy,
  PhoneCall,
  ScanFace,
  Shield,
  ShieldAlert,
  Wrench,
} from 'lucide-react';
import { contentRepository } from '../../services/contentRepository';
import type { SectionSlug } from '../../types/content';
import { EditorialImage } from '../EditorialImage';
import { SectionMetaNotice } from '../SectionMetaNotice';

interface DeepfakesSectionProps {
  onNavigate: (route: SectionSlug) => void;
}

const DEEPFAKE_TYPES = [
  {
    number: '1',
    title: 'Face-swap',
    description: "One person's face is digitally placed onto another person's body or face.",
  },
  {
    number: '2',
    title: 'Lip-sync manipulation',
    description:
      "A person's mouth movements are altered to make it appear that they are saying different words.",
  },
  {
    number: '3',
    title: 'Voice cloning',
    description: "Artificial intelligence creates a synthetic copy of someone's voice.",
  },
  {
    number: '4',
    title: 'Fully synthetic media',
    description:
      'An image, voice or video is generated using AI rather than recorded from a real event.',
  },
];

const MISUSE_WAYS = [
  {
    label: 'Impersonation:',
    detail: 'Making someone appear to say or do something they never did.',
  },
  {
    label: 'Financial scams:',
    detail:
      'Fake voice notes or video calls pretending to come from a family member or trusted person.',
  },
  {
    label: 'Blackmail and harassment:',
    detail:
      'Using fabricated or manipulated intimate content to threaten or humiliate someone.',
  },
  {
    label: 'Gender disinformation:',
    detail:
      "Creating false content to damage a woman's reputation, dignity or public participation.",
  },
  {
    label: 'Political and communal misinformation:',
    detail: 'Making fabricated media appear to show an event or statement that never happened.',
  },
];

const WARNING_SIGNS = [
  'Unnatural facial movements or blinking.',
  'Blurry or inconsistent edges around a face.',
  'Unusual shadows, reflections or lighting.',
  'Mouth movements that do not seem to match the audio.',
  'Distorted hands, teeth or background objects.',
  'A voice that sounds unusually flat or inconsistent.',
  'A message demanding secrecy, immediate action or money.',
  'No traceable original source or credible context.',
];

const RECEIVED_DEEPFAKE_STEPS = [
  {
    number: '1',
    title: 'Do not forward it.',
    detail:
      'Do not repost, quote-post, comment on or publicly expose the content. Sharing it again can increase the harm.',
  },
  {
    number: '2',
    title: 'Do not rush to investigate publicly.',
    detail:
      'Avoid confronting the sender or spreading the content to ask others whether it is real.',
  },
  {
    number: '3',
    title: 'Note non-explicit information.',
    detail:
      "If it is safe, note the sender's account name, profile link, message URL, date and time. Do not circulate the media itself.",
  },
  {
    number: '4',
    title: 'Report the content.',
    detail:
      "Use the platform's reporting option for manipulated media, harassment, impersonation or non-consensual intimate content, whichever is most appropriate.",
  },
];

const EVIDENCE_ITEMS = [
  'Post or message URL.',
  "Sender's username and profile link.",
  'Date and time.',
  'Text of threats or messages.',
  'Platform complaint or report reference, if available.',
];

const VERIFICATION_TOOLS = [
  {
    name: 'Google Lens',
    paragraphs: [
      'Google Lens can find visually similar images and webpages containing an image.',
      'It may help locate earlier appearances or additional context, but reverse-image search cannot establish whether an image is AI-generated or authentic.',
    ],
    url: 'https://lens.google.com/',
  },
  {
    name: 'TinEye',
    paragraphs: [
      'TinEye is a reverse-image search service. It can find matching or modified versions of an image in its index.',
      'A match does not prove who created the image or whether its caption is accurate, and no result does not prove that an image is genuine.',
    ],
    url: 'https://tineye.com/',
  },
  {
    name: 'InVID-WeVerify',
    paragraphs: [
      'InVID-WeVerify is a verification toolkit that can help examine publicly available online video and image material.',
      'It includes features for examining video keyframes and other contextual clues. It supports investigation but cannot provide a guaranteed authenticity verdict.',
      'Use the official project page or official browser-store listing. Avoid unofficial downloads.',
    ],
    url: 'https://www.invid-project.eu/tools-and-services/invid-verification-plugin/',
  },
  {
    name: 'FotoForensics',
    paragraphs: [
      'FotoForensics offers image-analysis features such as Error Level Analysis (ELA).',
      'ELA results are technical clues, not proof that an image has been edited or is genuine. Compression, resizing and images that were never camera photographs can make interpretation unreliable.',
    ],
    warning:
      'Privacy warning: Never upload private, intimate or sensitive images to FotoForensics or any other public image-analysis service.',
    url: 'https://fotoforensics.com/',
  },
];

const CHAPTER_SOURCES = [
  {
    number: '1',
    title: 'Google Lens',
    url: 'https://lens.google.com/',
  },
  {
    number: '2',
    title: 'TinEye',
    url: 'https://tineye.com/',
  },
  {
    number: '3',
    title: 'InVID-WeVerify',
    url: 'https://www.invid-project.eu/tools-and-services/invid-verification-plugin/',
  },
  {
    number: '4',
    title: 'FotoForensics',
    url: 'https://fotoforensics.com/',
  },
  {
    number: '5',
    title: 'Deepfakes Analysis Unit',
    url: 'https://dau.trustedinfoalliance.in/',
  },
  {
    number: '6',
    title: 'Meta announcement on the MCA WhatsApp tipline (2024)',
    url: 'https://about.fb.com/news/2024/02/mcas-whatsapp-helpline-curbing-the-spread-of-ai-generated-misinformation/',
  },
  {
    number: '7',
    title: 'National Cyber Crime Reporting Portal',
    url: 'https://cybercrime.gov.in/',
  },
  {
    number: '8',
    title: 'StopNCII',
    url: 'https://stopncii.org/',
  },
  {
    number: '9',
    title: 'Take It Down',
    url: 'https://takeitdown.ncmec.org/',
  },
];

export const DeepfakesSection: React.FC<DeepfakesSectionProps> = ({ onNavigate }) => {
  const metadata = contentRepository.getSiteMetadata();

  return (
    <div className="page-enter bg-[#F4F6FA] text-[#171E2E]">
      {/* Dark Midnight-Blue Technology Publication Hero */}
      <section className="bg-[#0E172B] text-[#F4F6FA] border-b border-[#253252]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <div className="border-y border-[#253252] py-3 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#A9B7D6]">
            <span>
              Last Checked:{' '}
              <time dateTime="2026-11-17" className="font-mono tabular-nums text-[#FFFFFF]">
                {metadata.lastCheckedDate}
              </time>
            </span>
            <span>Awareness information only — not legal advice.</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#8FA8FF]">
                iZoon | Chapter 04
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#FFFFFF] leading-tight">
                Deepfakes: Awareness, Safety and Verification Tools
              </h1>
              <p className="rounded-xl border border-[#2F3F63] bg-[#16223D] p-4 text-sm sm:text-base font-medium leading-relaxed text-[#FFFFFF]">
                A deepfake may be fabricated. The harm it causes can be real. It is never the
                targeted person&apos;s fault.
              </p>
              <p className="text-base leading-relaxed text-[#C7D2EB] max-w-prose">
                This guide explains what deepfakes are, how they can be misused, how to respond
                safely and where to find verification and support resources.
              </p>
              <p className="font-mono text-xs text-[#A9B7D6]">
                India-focused awareness resource | Prepared November 2026
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl border border-[#2A395E] bg-[#16223D] p-3">
                <EditorialImage
                  src="/src/assets/images/deepfakes_studio_lens_1794853691300.jpg"
                  alt="An optical glass prism and camera lens resting on dark slate, refracting subtle blue and violet light rays"
                  caption="Optical framing and digital identity — manipulated media alters likeness without changing the reality of who was harmed."
                  aspectClass="aspect-[16/9]"
                  className="text-[#A9B7D6]"
                  fallbackBg="bg-[#16223D]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* 1. Understanding deepfakes */}
        <section
          aria-labelledby="understanding-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-8"
        >
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#4361EE]">
              <ScanFace className="w-4 h-4" aria-hidden="true" />
              <span>Section 01</span>
            </div>
            <h2
              id="understanding-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              1. Understanding deepfakes
            </h2>

            <div className="space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#171E2E]">What are deepfakes?</h3>
              <p className="text-base leading-relaxed text-[#333D54]">
                Deepfakes are images, audio or videos that have been generated or altered using
                artificial intelligence to make a person appear to say or do something they never
                actually said or did.
              </p>
              <p className="text-base leading-relaxed text-[#333D54]">
                They can look or sound convincing. It is becoming increasingly difficult to identify
                manipulated media just by looking at it.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#171E2E]">
              Common types of deepfakes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DEEPFAKE_TYPES.map((type) => (
                <div
                  key={type.number}
                  className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-5 space-y-2"
                >
                  <div className="font-mono text-xs font-semibold tabular-nums text-[#4361EE]">
                    0{type.number}
                  </div>
                  <h4 className="font-serif text-lg font-medium text-[#171E2E]">
                    {type.number}. {type.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[#3E4963]">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 sm:p-7 space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#171E2E]">
              How can deepfakes be misused?
            </h3>
            <p className="text-sm sm:text-base text-[#333D54]">Deepfakes can be used for:</p>
            <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-[#333D54] list-disc pl-5">
              {MISUSE_WAYS.map((item) => (
                <li key={item.label}>
                  <strong className="text-[#171E2E]">{item.label}</strong> {item.detail}
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-[#C7C1E3] bg-[#ECEAF7] p-4 text-sm sm:text-base text-[#171E2E]">
              <strong>Remember:</strong> The person depicted is not responsible for someone
              else&apos;s decision to create, threaten or circulate fabricated content.
            </div>
          </div>
        </section>

        {/* 2. Warning signs: clues, not proof */}
        <section
          aria-labelledby="warnings-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#5B4B8A]">
              Section 02
            </div>
            <h2
              id="warnings-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              2. Warning signs: clues, not proof
            </h2>
            <p className="text-base leading-relaxed text-[#333D54]">
              Some manipulated media may contain unusual features. These can include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {WARNING_SIGNS.map((sign) => (
              <div
                key={sign}
                className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] px-5 py-3.5 text-sm sm:text-base text-[#171E2E]"
              >
                {sign}
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[#C7C1E3] bg-[#ECEAF7] p-6 space-y-3 text-sm sm:text-base leading-relaxed text-[#171E2E]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#5B4B8A] font-semibold">
              <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Limitations of visual cues</span>
            </div>
            <p>
              <strong>Important:</strong> These signs are not reliable proof. Genuine recordings can
              also look unusual because of poor lighting, compression, low quality or ordinary
              editing. Modern deepfakes may not show obvious visual errors.
            </p>
            <p className="text-[#3E3958]">
              Do not accuse someone or label media as fake based only on appearance. Check the
              source, context and available evidence.
            </p>
          </div>
        </section>

        {/* 3. If someone sends you a suspected deepfake */}
        <section
          aria-labelledby="received-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#4361EE]">
              Section 03
            </div>
            <h2
              id="received-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              3. If someone sends you a suspected deepfake
            </h2>
            <p className="text-base leading-relaxed text-[#333D54]">
              You may receive a suspicious image, video or voice note in a group chat, private
              message or social-media post. Here is how to respond safely:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECEIVED_DEEPFAKE_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2"
              >
                <div className="font-mono text-xs font-semibold text-[#4361EE]">
                  STEP 0{step.number}
                </div>
                <h3 className="font-serif text-lg font-medium text-[#171E2E]">
                  {step.number}. {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#3E4963]">{step.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-3">
            <h3 className="font-serif text-lg font-medium text-[#171E2E]">
              5. Support the person targeted.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
              If you know the person depicted, contact them privately and respectfully. Do not send
              them the file or repeat the allegation.
            </p>
            <p className="text-xs font-mono uppercase tracking-wider text-[#5B4B8A]">You can say:</p>
            <blockquote className="rounded-lg border border-[#D4DCEB] bg-[#F4F6FA] p-4 font-serif italic text-base text-[#171E2E]">
              “I do not believe this content. I will not share it, and I am here to help you find
              support.”
            </blockquote>
          </div>

          <div className="rounded-xl border-2 border-[#4361EE] bg-[#EAEFFC] p-6 space-y-3 text-sm sm:text-base leading-relaxed text-[#171E2E]">
            <div className="flex items-center gap-2 font-semibold text-[#1D2C56]">
              <ShieldAlert className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h3>If the content may involve someone under 18</h3>
            </div>
            <p>
              Never download, screenshot, save, copy, forward or upload intimate imagery involving
              someone under 18.
            </p>
            <p>Never ask anyone to send such imagery.</p>
            <p>
              Preserve only non-explicit information such as the sender, account name, URL and time,
              and seek help from a trusted adult and appropriate official support.
            </p>
          </div>
        </section>

        {/* 4. If a deepfake targets you (with integrated evidence subsection) */}
        <section
          aria-labelledby="targets-you-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-6"
        >
          <div className="space-y-3 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#4361EE]">
              Section 04
            </div>
            <h2
              id="targets-you-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              4. If a deepfake targets you
            </h2>
            <p className="rounded-xl border border-[#C7C1E3] bg-[#ECEAF7] p-4 text-base font-medium text-[#171E2E]">
              First, remember:{' '}
              <strong>It is not your fault. You do not have to handle this alone.</strong>
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2">
              <h3 className="font-serif text-lg font-medium text-[#171E2E]">
                1. Do not engage with threats.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
                You do not have to reply, pay, negotiate or prove yourself to the person threatening
                you.
              </p>
            </div>

            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2">
              <h3 className="font-serif text-lg font-medium text-[#171E2E]">
                2. Seek trusted support.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
                Speak to someone you trust, such as a family member, teacher, counsellor or another
                responsible adult. If viewing the content feels overwhelming, ask someone trusted to
                help with the reporting process.
              </p>
            </div>

            {/* Integrated Subsection: Preserving non-explicit evidence safely */}
            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-3.5">
              <h3 className="font-serif text-lg font-medium text-[#171E2E]">
                3. Preserving non-explicit evidence safely
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
                Safety comes first. Collecting evidence is not a requirement before asking for help.
                Where safe, useful non-explicit information may include:
              </p>
              <ul className="space-y-1.5 text-sm sm:text-base text-[#171E2E] list-disc pl-5">
                {EVIDENCE_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="space-y-2.5 pt-2 border-t border-[#E5EBF5] text-sm sm:text-base leading-relaxed text-[#3E4963]">
                <p>
                  Do not edit or publicly repost messages, links or content to prove what happened.
                  Never circulate intimate or sensitive material.
                </p>
                <p className="rounded-lg border border-[#C7C1E3] bg-[#ECEAF7] p-3.5 text-[#171E2E]">
                  Never upload private, intimate or sensitive material to public search engines, AI
                  detectors, forensic websites or social-media groups.
                </p>
                <div className="rounded-lg border border-[#4361EE]/30 bg-[#EAEFFC] p-3.5 text-sm font-medium text-[#1D2C56] space-y-1">
                  <p>
                    Never download, screenshot, save, copy, forward or upload intimate imagery
                    involving someone under 18, and never ask anyone to send such imagery.
                  </p>
                  <p>
                    Preserve only non-explicit information and seek help from a trusted adult and
                    appropriate official support.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2">
              <h3 className="font-serif text-lg font-medium text-[#171E2E]">
                4. Report the content on the platform.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
                Use the closest available reporting category, such as manipulated media,
                impersonation, harassment or non-consensual intimate imagery. Platforms have their
                own review processes and outcomes cannot be guaranteed.
              </p>
            </div>

            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2">
              <h3 className="font-serif text-lg font-medium text-[#171E2E]">
                5. Seek official support when needed.
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
                You can use official reporting and support services when needed. If there is
                immediate danger, contact emergency services.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Verification tools */}
        <section
          aria-labelledby="tools-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#4361EE]">
              <Wrench className="w-4 h-4" aria-hidden="true" />
              <span>Section 05</span>
            </div>
            <h2
              id="tools-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              5. Verification tools
            </h2>
            <p className="text-base leading-relaxed text-[#333D54]">
              The following tools may help examine publicly available media or find additional
              context. They are not final judges of authenticity.
            </p>
            <p className="text-sm font-medium text-[#171E2E]">
              Use them only with non-sensitive material that you are allowed to examine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VERIFICATION_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-3"
              >
                <h3 className="font-serif text-xl font-medium text-[#171E2E]">{tool.name}</h3>
                {tool.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-[#3E4963]">
                    {paragraph}
                  </p>
                ))}
                {tool.warning && (
                  <p className="rounded-lg border border-[#C7C1E3] bg-[#ECEAF7] p-3 text-xs sm:text-sm text-[#171E2E]">
                    {tool.warning}
                  </p>
                )}
                <div className="pt-1">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#2B3E78] hover:text-[#4361EE] underline underline-offset-2 break-all"
                  >
                    <span>{tool.url}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Deepfakes Analysis Unit (DAU) */}
          <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 sm:p-7 space-y-3">
            <h3 className="font-serif text-xl font-medium text-[#171E2E]">
              Deepfakes Analysis Unit (DAU)
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
              The Deepfakes Analysis Unit was established by the Misinformation Combat Alliance to
              examine suspected synthetic media.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
              A public announcement in 2024 described a WhatsApp tipline for submitting suspected
              synthetic audio and video for assessment.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#3E4963]">
              However, the current availability and submission arrangements have not been
              independently confirmed for this guide. Check the official DAU website before relying
              on the service.
            </p>
            <p className="text-sm font-medium text-[#171E2E]">
              Do not send private, intimate or sensitive material.
            </p>
            <div>
              <a
                href="https://dau.trustedinfoalliance.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs sm:text-sm text-[#2B3E78] hover:text-[#4361EE] underline underline-offset-2 break-all"
              >
                <span>https://dau.trustedinfoalliance.in/</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
            <div className="rounded-lg border border-[#C7C1E3] bg-[#ECEAF7] p-4 text-xs sm:text-sm leading-relaxed text-[#171E2E]">
              <strong>Important note about the DAU number:</strong> The number +91 9999025044
              appeared in the 2024 launch announcement. This guide does not present it as a
              guaranteed, continuously available helpline. Check the official DAU website for
              current information.
            </div>
          </div>

          {/* A reminder about verification tools */}
          <div className="rounded-xl border border-[#C7C1E3] bg-[#ECEAF7] p-6 space-y-3 text-sm sm:text-base text-[#171E2E]">
            <h3 className="font-serif text-xl font-medium text-[#171E2E]">
              A reminder about verification tools
            </h3>
            <p>No single tool can establish the truth in every case.</p>
            <ul className="space-y-1.5 list-disc pl-5 text-sm sm:text-base text-[#3E3958]">
              <li>A detector may miss manipulated media.</li>
              <li>A genuine image may receive a misleading result.</li>
              <li>Reverse-image search may find no matches.</li>
              <li>A technical analysis result may be difficult to interpret.</li>
            </ul>
            <p className="text-sm sm:text-base text-[#171E2E]">
              Use tools as supporting clues, not final proof. Combine source checking, context and
              independent evidence.
            </p>
            <p className="text-sm sm:text-base font-medium text-[#171E2E]">
              Never upload intimate or sensitive material to test a detector.
            </p>
          </div>
        </section>

        {/* 6. Reporting and support (Concise cross-reference to Chapter 03) */}
        <section
          aria-labelledby="reporting-support-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-5"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#4361EE]">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Section 06</span>
            </div>
            <h2
              id="reporting-support-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              6. Reporting and support
            </h2>
          </div>

          <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 sm:p-8 space-y-4 text-sm sm:text-base leading-relaxed text-[#333D54]">
            <p className="text-[#171E2E]">
              For emergency assistance, women&apos;s support, child protection, cybercrime
              reporting, mental-health support and legal aid contacts, visit{' '}
              <button
                type="button"
                onClick={() => onNavigate('all-the-numbers')}
                className="inline-flex items-center gap-1 font-medium text-[#2B3E78] hover:text-[#4361EE] underline underline-offset-4 cursor-pointer"
              >
                <span>Chapter 03 – All the Numbers</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              .
            </p>
            <p>If there is immediate danger, contact 112.</p>
            <p>
              For cyber financial fraud, contact 1930 promptly. It is not a general deepfake or
              image-removal helpline.
            </p>
            <p className="rounded-lg border border-[#4361EE]/30 bg-[#EAEFFC] p-3.5 font-medium text-[#1D2C56]">
              If you are under 18, speak with a trusted adult and seek appropriate child-protection
              support.
            </p>
          </div>
        </section>

        {/* 7. Intimate-image support services (Brief cross-reference to Chapter 06) */}
        <section
          aria-labelledby="intimate-support-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#5B4B8A]">
              <LifeBuoy className="w-4 h-4" aria-hidden="true" />
              <span>Section 07</span>
            </div>
            <h2
              id="intimate-support-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#171E2E]"
            >
              7. Intimate-image support services
            </h2>
            <p className="text-base leading-relaxed text-[#333D54]">
              StopNCII and Take It Down are specialist non-government services that use on-device
              digital fingerprints (hashes) to help limit the spread of intimate imagery on
              participating platforms. Each service has specific eligibility requirements and
              limitations — neither covers the entire internet or guarantees that every copy will be
              found or removed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2.5">
              <h3 className="font-serif text-xl font-medium text-[#171E2E]">StopNCII</h3>
              <p className="text-sm leading-relaxed text-[#3E4963]">
                Specialist service for eligible adults affected by non-consensual intimate-image
                abuse. Check current eligibility requirements and terms on the official website
                before relying on it.
              </p>
              <a
                href="https://stopncii.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-[#2B3E78] hover:text-[#4361EE] underline underline-offset-2 break-all"
              >
                <span>https://stopncii.org/</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-6 space-y-2.5">
              <h3 className="font-serif text-xl font-medium text-[#171E2E]">Take It Down</h3>
              <p className="text-sm leading-relaxed text-[#3E4963]">
                Specialist service by the National Center for Missing &amp; Exploited Children for
                intimate images or videos taken when the person depicted was under 18. Subject to
                official eligibility requirements and platform participation.
              </p>
              <a
                href="https://takeitdown.ncmec.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-[#2B3E78] hover:text-[#4361EE] underline underline-offset-2 break-all"
              >
                <span>https://takeitdown.ncmec.org/</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-xl border-2 border-[#4361EE] bg-[#EAEFFC] p-5 space-y-2 text-sm text-[#171E2E]">
            <p>
              <strong>Important safety guidance:</strong> Nobody should download, copy, request or
              forward intimate imagery involving a minor. If you are under 18, seek help from a
              trusted adult and appropriate official support.
            </p>
            <p>
              For platform reporting and image-removal guidance, visit{' '}
              <button
                type="button"
                onClick={() => onNavigate('image-removal')}
                className="inline-flex items-center gap-1 font-medium text-[#1D2C56] hover:text-[#4361EE] underline underline-offset-4 cursor-pointer"
              >
                <span>Chapter 06 – Getting an Image Removed</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
              .
            </p>
          </div>
        </section>

        {/* 8. Important reminder */}
        <section
          aria-labelledby="reminder-heading"
          className="pb-12 border-b border-[#D9DFEC] space-y-4"
        >
          <div className="rounded-xl border border-[#C7C1E3] bg-[#ECEAF7] p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2 text-[#5B4B8A]">
              <Shield className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h2 id="reminder-heading" className="font-serif text-2xl font-medium text-[#171E2E]">
                8. Important reminder
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#171E2E]">
              A deepfake detector, reverse-image search or forensic tool cannot provide a guaranteed
              verdict.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#171E2E]">
              A person should not be blamed, questioned or publicly shamed because fabricated
              content targets them.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#171E2E]">
              Do not forward suspected deepfakes. Do not upload private or intimate material to
              public tools. Seek trusted support and use appropriate reporting channels.
            </p>
            <div className="pt-3 border-t border-[#C7C1E3] flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#3E3958]">
              <Info className="w-4 h-4 text-[#5B4B8A] shrink-0 mt-0.5" aria-hidden="true" />
              <p>
                <strong>
                  This website provides general awareness information only. It is not legal advice,
                  a forensic investigation service, medical advice or a guarantee of content
                  removal. Legal details and support listings should be reviewed by a qualified
                  lawyer or established support organisation before publication.
                </strong>
              </p>
            </div>
          </div>
        </section>

        {/* Sources and further reading */}
        <section aria-labelledby="sources-heading" className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#4361EE]">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>References</span>
          </div>
          <h2 id="sources-heading" className="font-serif text-2xl font-medium text-[#171E2E]">
            Sources and further reading
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#D9DFEC] pt-6 text-sm">
            {CHAPTER_SOURCES.map((source) => (
              <li
                key={source.number}
                className="rounded-xl border border-[#D4DCEB] bg-[#FFFFFF] p-4 flex items-start gap-3"
              >
                <span className="font-mono text-xs font-semibold tabular-nums text-[#4361EE] pt-0.5 shrink-0">
                  {source.number}.
                </span>
                <div className="space-y-1">
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#171E2E] hover:text-[#4361EE] underline underline-offset-2"
                    >
                      {source.title}
                    </a>
                  </div>
                  <div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[#2B3E78] hover:text-[#4361EE] underline underline-offset-2 break-all"
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

        <div className="mt-10">
          <SectionMetaNotice />
        </div>
      </article>
    </div>
  );
};
