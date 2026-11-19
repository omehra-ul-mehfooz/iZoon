import React from 'react';
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ExternalLink,
  EyeOff,
  FileWarning,
  Info,
  MessageSquareWarning,
  ShieldAlert,
  UserX,
  XCircle,
} from 'lucide-react';
import type { SectionSlug } from '../../types/content';
import { EditorialImage } from '../EditorialImage';
import { SectionMetaNotice } from '../SectionMetaNotice';

interface AwarenessSectionProps {
  onNavigate: (route: SectionSlug) => void;
}

const INFO_DISORDER_TYPES = [
  {
    type: 'Misinformation',
    meaning: 'False information shared without an intention to deceive',
    description:
      'False or misleading information shared by someone who believes it is true, without intending to deceive or cause harm.',
    example: 'Sharing an incorrect news claim because you believe it is true',
  },
  {
    type: 'Disinformation',
    meaning: 'False information deliberately shared to mislead',
    description:
      'False information that is deliberately created or shared to deceive people, manipulate opinions or cause harm.',
    example: "Creating a fabricated story to damage someone's reputation",
  },
  {
    type: 'Malinformation',
    meaning: 'Genuine information shared to cause harm',
    description:
      'Genuine information shared with the intention of causing harm, often by exposing private or personal information that should remain private.',
    example: "Sharing someone's private personal information without consent",
  },
];

const GENDER_DISINFO_ASPECTS = [
  "Attacking a woman's personal life, character or reputation.",
  'Using gender stereotypes to question her credibility or abilities.',
  'Manipulating images or spreading misleading claims about her.',
  'Targeting women who participate in journalism, activism, politics or other public roles.',
];

const COMMON_TACTICS = [
  {
    number: '1',
    icon: UserX,
    title: 'Attacks on personal life and character',
    description:
      "Instead of discussing a woman's ideas or work, misleading narratives focus on her private life, appearance, relationships or personal choices.",
  },
  {
    number: '2',
    icon: EyeOff,
    title: 'Manipulated images and misleading content',
    description:
      "Images, videos or other media may be edited, taken out of context or presented with misleading captions to damage someone's reputation.",
  },
  {
    number: '3',
    icon: AlertTriangle,
    title: 'Questioning abilities and credibility',
    description:
      'False claims may portray women as incapable, unqualified or unsuitable for positions of responsibility.',
  },
  {
    number: '4',
    icon: MessageSquareWarning,
    title: 'Coordinated or coded attacks',
    description:
      'Similar messages, hashtags or narratives may appear across multiple accounts. In some cases, this can indicate organised activity, although repetition alone does not prove coordination.',
  },
  {
    number: '5',
    icon: ShieldAlert,
    title: 'Reinforcing restrictive gender stereotypes',
    description:
      'Content may promote the idea that women should remain within traditional roles or should not participate in leadership, public discussion or decision-making.',
  },
];

const RED_FLAGS = [
  {
    number: '1',
    icon: UserX,
    title: 'Unnecessary focus on private life',
    question:
      "Does the content focus more on someone's personal life, appearance or relationships than on the actual issue?",
  },
  {
    number: '2',
    icon: MessageSquareWarning,
    title: 'Repeated claims across similar accounts',
    question:
      'Are multiple accounts repeating the same allegation without providing reliable evidence or independent sources?',
  },
  {
    number: '3',
    icon: Clock,
    title: 'Images or videos without an original source',
    question:
      'Is an image being shared without its original source, date, context or explanation?',
  },
  {
    number: '4',
    icon: FileWarning,
    title: 'Emotionally manipulative language',
    question:
      'Does the post use exaggerated, insulting or outrage-driven language to encourage immediate reactions?',
  },
  {
    number: '5',
    icon: AlertTriangle,
    title: 'Sweeping statements about women',
    question:
      'Does the content make broad claims about what women can or cannot do, based on stereotypes rather than evidence?',
  },
];

const WHAT_YOU_CAN_DO = [
  'Pause before reacting or sharing.',
  'Check who originally published the information.',
  'Look for reliable reporting or independent confirmation.',
  'Search for the original image or video context.',
  "Avoid spreading content that exposes someone's private information.",
];

const MYTHS_VS_FACTS = [
  {
    myth: 'Gender disinformation only affects politicians and celebrities.',
    fact: 'Women in different professions and communities may also be targeted.',
  },
  {
    myth: 'Online attacks are only trolling and cannot cause real harm.',
    fact: 'Online abuse and misleading narratives can affect confidence, reputation and participation.',
  },
  {
    myth: 'If thousands of people share something, it must be true.',
    fact: 'Popularity does not establish accuracy. Information still needs verification.',
  },
  {
    myth: 'Fake or manipulated images are always easy to recognise.',
    fact: 'Manipulated and AI-generated media can appear convincing. Visual inspection alone is not enough.',
  },
  {
    myth: 'If a woman is being attacked online, there must be some truth behind the claims.',
    fact: 'An attack is not evidence that an allegation is true. Claims should be assessed using reliable evidence.',
  },
];

const PARTICIPATION_IMPACTS = [
  {
    domain: 'Education',
    description:
      "Misleading rumours, online humiliation and gender-based attacks may affect a student's confidence and willingness to participate in academic or public activities.",
  },
  {
    domain: 'Work and professional life',
    description:
      "False narratives about a woman's competence or credibility may undermine how her work and contributions are perceived.",
  },
  {
    domain: 'Public participation',
    description:
      'Repeated online attacks can discourage women from expressing opinions, participating in discussions or maintaining a public presence. Research by UN Women documents self-censorship among surveyed women journalists and media workers.',
  },
];

const SOURCES = [
  {
    number: '1',
    citation:
      'Wardle, C. and Derakhshan, H. (2017). Information Disorder: Toward an Interdisciplinary Framework for Research and Policy Making. Council of Europe.',
    url: 'https://rm.coe.int/information-disorder-toward-an-interdisciplinary-framework-for-researc/168076277c',
  },
  {
    number: '2',
    citation:
      'UNESCO (2018). Journalism, “Fake News” and Disinformation: Handbook for Journalism Education and Training.',
    url: 'https://unesdoc.unesco.org/ark:/48223/pf0000265552',
  },
  {
    number: '3',
    citation:
      'Wilson Center. "Malign Creativity: How Gender, Sex, and Lies Are Weaponized Against Women Online" (2021).',
    url: 'https://www.wilsoncenter.org/publication/malign-creativity-how-gender-sex-and-lies-are-weaponized-against-women-online',
  },
  {
    number: '4',
    citation:
      'UN Women (2025). Tipping Point: The Chilling Escalation of Online Violence Against Women in the Public Sphere.',
    url: 'https://chile.unwomen.org/en/digital-library/publications/2025/12/tipping-point-the-chilling-escalation-of-online-violence-against-women-in-the-public-sphere',
  },
  {
    number: '5',
    citation:
      'UN Women (2026). Tipping Point: Online Violence Impacts, Manifestations and Redress in the AI Age.',
    url: 'https://chile.unwomen.org/sites/default/files/2026-04/tipping-point-online-violence-impacts-manifestations-and-redress-en.pdf',
  },
];

export const AwarenessSection: React.FC<AwarenessSectionProps> = ({ onNavigate }) => {
  return (
    <div className="page-enter bg-[#FBF6EE] text-[#1F1B18]">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SectionMetaNotice />

        {/* Broadsheet Newspaper Masthead Hero */}
        <header className="pb-12 border-b-2 border-[#1F1B18]">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#DFD2C2] text-xs font-mono uppercase tracking-[0.18em] text-[#A63D26]">
            <span>Chapter 01 · Awareness Guide</span>
            <span>Research-Informed Edition</span>
          </div>

          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.08] text-[#1F1B18]">
                Awareness
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#7D2B19] leading-snug">
                Understanding Misinformation, Disinformation, Malinformation and Gender
                Disinformation
              </p>
              <p className="text-base leading-relaxed text-[#433A34] max-w-prose">
                A grounded guide to the three forms of information disorder, how gender
                disinformation operates, warning signs to look for, and documented research on its
                impact on public participation.
              </p>
            </div>

            <div className="lg:col-span-6">
              <EditorialImage
                src="/assets/aistudio/dyd-digital-awareness.jpg_b24a35b9.jpg"
                alt="Three female students seated together at a wooden conference table with an open laptop during a digital awareness discussion"
                caption="Fig. 1.1 — Examining digital information together supports informed learning and safer participation online."
                aspectClass="aspect-[4/3]"
                imgClassName="object-[50%_80%]"
                className="text-[#5C4E45]"
                fallbackBg="bg-[#EFE3D5]"
              />
            </div>
          </div>
        </header>

        {/* Subsection 1: Understanding the Three Types of Information Disorder */}
        <section
          aria-labelledby="info-disorder-heading"
          className="py-12 border-b border-[#DFD2C2] space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A63D26]">
              01 · Information Disorder Framework
            </div>
            <h2
              id="info-disorder-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1B18]"
            >
              1. Understanding the Three Types of Information Disorder
            </h2>
            <p className="text-base leading-relaxed text-[#2F2823]">
              Not all harmful information is created or shared in the same way. Researchers Claire
              Wardle and Hossein Derakhshan describe three important forms of information disorder:
              misinformation, disinformation and malinformation.
            </p>
          </div>

          {/* Three Definition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INFO_DISORDER_TYPES.map((item) => (
              <div
                key={item.type}
                className="border border-[#DFD2C2] bg-[#FFFFFF] p-6 space-y-2.5"
              >
                <h3 className="font-serif text-xl font-medium text-[#A63D26]">{item.type}</h3>
                <p className="text-sm leading-relaxed text-[#2F2823]">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="border border-[#DFD2C2] bg-[#FFFFFF] overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#1F1B18] bg-[#F6EFE6] text-xs font-mono uppercase tracking-wider text-[#7D2B19]">
                  <th scope="col" className="py-3.5 px-5">
                    Type
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Meaning
                  </th>
                  <th scope="col" className="py-3.5 px-5">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DFD2C2] text-sm">
                {INFO_DISORDER_TYPES.map((row) => (
                  <tr key={row.type}>
                    <th scope="row" className="py-4 px-5 font-serif text-base font-medium text-[#1F1B18] whitespace-nowrap">
                      {row.type}
                    </th>
                    <td className="py-4 px-5 text-[#2F2823]">{row.meaning}</td>
                    <td className="py-4 px-5 text-[#433A34]">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why does the distinction matter? */}
          <div className="border border-[#DFD2C2] bg-[#F6EFE6] p-6 space-y-2 max-w-3xl">
            <h3 className="font-serif text-lg font-medium text-[#1F1B18]">
              Why does the distinction matter?
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#2F2823]">
              The intention behind creating or sharing information matters. Someone may deliberately
              create false information, while another person may share it believing it is true. The
              same content can therefore be involved in different forms of information disorder
              depending on the intention behind each action.
            </p>
          </div>
        </section>

        {/* Subsection 2: What Is Gender Disinformation? */}
        <section
          aria-labelledby="what-is-gender-disinfo-heading"
          className="py-12 border-b border-[#DFD2C2] grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-7 space-y-5 text-base leading-[1.75] text-[#2F2823] max-w-prose">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A63D26]">
              02 · Definition &amp; Research Context
            </div>
            <h2
              id="what-is-gender-disinfo-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1B18]"
            >
              2. What Is Gender Disinformation?
            </h2>
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-medium first-letter:text-[#A63D26] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Gender disinformation refers to false or misleading narratives that use gender-based
              stereotypes and harmful claims to target women and discourage their participation in
              public life.
            </p>
            <p>
              The Wilson Center’s research describes gendered disinformation as a form of online
              abuse that uses false or misleading gender- and sex-based narratives against women,
              often through coordinated activity, with the aim of discouraging their participation
              in public spaces.
            </p>

            <div className="pt-2 space-y-2.5">
              <p className="font-medium text-[#1F1B18]">It can involve:</p>
              <ul className="space-y-2 text-sm sm:text-base text-[#2F2823] list-disc pl-5">
                {GENDER_DISINFO_ASPECTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm sm:text-base text-[#433A34] pt-2 border-t border-[#DFD2C2]">
              Gender disinformation can overlap with online harassment and hate speech. However, not
              every sexist comment or online insult is necessarily disinformation.
            </p>
          </div>

          {/* Right Rail: Why is this an important issue? (UN Women Survey Data) */}
          <aside className="lg:col-span-5">
            <div className="border border-[#DFD2C2] bg-[#FFFFFF] p-6 space-y-5">
              <div className="pb-3 border-b border-[#EFE5D8] space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#A63D26]">
                  Research Evidence · UN Women
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1F1B18]">
                  Why is this an important issue?
                </h3>
                <p className="text-xs leading-relaxed text-[#433A34]">
                  Research by UN Women highlights the scale and impact of technology-facilitated
                  violence against women.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#F6EFE6] border border-[#E5D7C7] space-y-1.5">
                  <div className="font-mono text-2xl font-medium tabular-nums text-[#A63D26]">
                    Approximately 70%
                  </div>
                  <p className="text-xs leading-relaxed text-[#2F2823]">
                    In a 2025 UN Women survey, <strong className="font-mono tabular-nums">69.9%</strong>{' '}
                    of <strong className="font-mono tabular-nums">641</strong> respondents working in
                    human rights, activism and/or journalism who answered the relevant question
                    reported experiencing online violence in the course of their work.
                  </p>
                </div>

                <div className="p-4 bg-[#F6EFE6] border border-[#E5D7C7] space-y-1.5">
                  <div className="font-mono text-2xl font-medium tabular-nums text-[#7D2B19]">
                    Approximately 45%
                  </div>
                  <p className="text-xs leading-relaxed text-[#2F2823]">
                    A separate 2026 UN Women report found that{' '}
                    <strong className="font-mono tabular-nums">45.3%</strong> of surveyed women
                    journalists and media workers (<strong className="font-mono tabular-nums">351</strong>{' '}
                    respondents) reported self-censoring on social media because of online violence.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EFE5D8] flex items-start gap-2 text-xs leading-relaxed text-[#5C4E45]">
                <Info className="w-4 h-4 text-[#A63D26] shrink-0 mt-0.5" aria-hidden="true" />
                <p>
                  These figures come from different surveys and different respondent groups. They
                  should not be interpreted as estimates for all women worldwide.
                </p>
              </div>
            </div>
          </aside>
        </section>

        {/* Subsection 3: Common Tactics Used in Gender Disinformation */}
        <section
          aria-labelledby="common-tactics-heading"
          className="py-12 border-b border-[#DFD2C2] space-y-8"
        >
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A63D26]">
              03 · Observed Patterns
            </div>
            <h2
              id="common-tactics-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1B18]"
            >
              3. Common Tactics Used in Gender Disinformation
            </h2>
            <p className="text-base text-[#433A34]">
              Gender disinformation can appear in different forms. Some common tactics include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {COMMON_TACTICS.map((tactic, idx) => {
              const IconComponent = tactic.icon;
              return (
                <div
                  key={tactic.number}
                  className={`pt-5 border-t border-[#D7C7B4] flex items-start gap-4 ${
                    idx === COMMON_TACTICS.length - 1 ? 'md:col-span-2 max-w-2xl' : ''
                  }`}
                >
                  <div className="w-9 h-9 bg-[#F3E1D7] text-[#A63D26] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-mono text-xs tabular-nums text-[#7D2B19]">
                      Tactic 0{tactic.number}
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#1F1B18]">
                      {tactic.number}. {tactic.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#433A34]">{tactic.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-[#DFD2C2] bg-[#FFFFFF] p-5 flex items-start gap-2.5 text-xs sm:text-sm text-[#433A34]">
            <Info className="w-4 h-4 text-[#A63D26] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              These are examples of possible tactics. Their presence alone does not establish that
              a coordinated disinformation campaign is taking place.
            </p>
          </div>
        </section>

        {/* Subsection 4: Red Flags: How to Recognise Potentially Misleading Content */}
        <section
          aria-labelledby="red-flags-heading"
          className="py-12 border-b border-[#DFD2C2] space-y-8"
        >
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A63D26]">
              04 · Recognition Signals
            </div>
            <h2
              id="red-flags-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1B18]"
            >
              4. Red Flags: How to Recognise Potentially Misleading Content
            </h2>
            <p className="text-base text-[#433A34]">
              Before believing or sharing information about a woman or a gender-related issue, pause
              and look for warning signs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RED_FLAGS.map((flag) => {
              const IconComponent = flag.icon;
              return (
                <div
                  key={flag.number}
                  className="border border-[#DFD2C2] bg-[#FFFFFF] p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tabular-nums text-[#A63D26] font-semibold">
                      Red Flag 0{flag.number}
                    </span>
                    <IconComponent className="w-4 h-4 text-[#7D2B19]" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1F1B18]">
                    {flag.number}. {flag.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#433A34]">{flag.question}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 border border-[#DFD2C2] bg-[#FFFFFF] p-6 space-y-3">
              <h3 className="font-serif text-xl font-medium text-[#1F1B18]">What can you do?</h3>
              <ul className="space-y-2 text-sm text-[#2F2823] list-disc pl-5 leading-relaxed">
                {WHAT_YOU_CAN_DO.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('fact-checking')}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#A63D26] hover:text-[#7D2B19] underline underline-offset-4 cursor-pointer"
                >
                  <span>Go to How to Fact-check Wrong Information</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 border border-[#DFD2C2] bg-[#F6EFE6] p-6 flex flex-col justify-center space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#A63D26] font-semibold">
                Remember
              </div>
              <p className="font-serif text-lg text-[#1F1B18] leading-snug">
                A warning sign is a reason to investigate further, not proof that something is
                disinformation.
              </p>
            </div>
          </div>
        </section>

        {/* Subsection 5: Myths vs. Facts */}
        <section
          aria-labelledby="myth-fact-heading"
          className="py-12 border-b border-[#DFD2C2] space-y-6"
        >
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A63D26]">
              05 · Clarifying Misconceptions
            </div>
            <h2
              id="myth-fact-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1B18]"
            >
              5. Myths vs. Facts
            </h2>
            <p className="text-base text-[#433A34]">
              Misunderstandings about gender disinformation can make it harder to recognise and
              respond to it.
            </p>
          </div>

          <div className="border-t-2 border-[#1F1B18] divide-y divide-[#DFD2C2]">
            {MYTHS_VS_FACTS.map((pair) => (
              <div
                key={pair.myth}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-6 space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#A63D26]">
                    <XCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Myth</span>
                  </div>
                  <p className="font-serif text-lg text-[#1F1B18] leading-snug">{pair.myth}</p>
                </div>
                <div className="md:col-span-6 space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#254B46]">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Fact</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#2F2823]">{pair.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subsection 6: How Gender Disinformation Can Affect Participation */}
        <section
          aria-labelledby="participation-heading"
          className="py-12 border-b border-[#DFD2C2] space-y-8"
        >
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A63D26]">
              06 · Broader Impact
            </div>
            <h2
              id="participation-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1F1B18]"
            >
              6. How Gender Disinformation Can Affect Participation
            </h2>
            <p className="text-base leading-relaxed text-[#2F2823]">
              Gender disinformation is not limited to misleading posts or online arguments. It can
              also discourage women from participating in education, professional life and public
              discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PARTICIPATION_IMPACTS.map((item) => (
              <div
                key={item.domain}
                className="border border-[#DFD2C2] bg-[#FFFFFF] p-6 space-y-2.5"
              >
                <h3 className="font-serif text-xl font-medium text-[#1F1B18]">{item.domain}</h3>
                <p className="text-sm leading-relaxed text-[#433A34]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="border border-[#DFD2C2] bg-[#F6EFE6] p-6 sm:p-8 space-y-3">
            <h3 className="font-serif text-xl font-medium text-[#1F1B18]">Why awareness matters</h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#2F2823] max-w-prose">
              Recognising misleading narratives, checking sources and responding responsibly can
              help create safer and more informed digital spaces.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#433A34] max-w-prose">
              You do not have to share, forward or engage with content that appears harmful.
              Pausing, verifying and protecting someone’s privacy are important steps.
            </p>
          </div>
        </section>

        {/* Sources and Further Reading + Editorial Note & Disclaimer */}
        <section aria-labelledby="sources-heading" className="pt-12 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A63D26]">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>References</span>
          </div>
          <h2 id="sources-heading" className="font-serif text-2xl font-medium text-[#1F1B18]">
            Sources and Further Reading
          </h2>

          <ol className="space-y-3 text-sm leading-relaxed text-[#2F2823] border-t border-[#DFD2C2] pt-5">
            {SOURCES.map((source) => (
              <li key={source.number} className="flex items-start gap-3">
                <span className="font-mono text-xs tabular-nums text-[#A63D26] pt-1 shrink-0">
                  {source.number}.
                </span>
                <div className="space-y-1">
                  <span>{source.citation}</span>
                  {source.url && (
                    <div>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#7D2B19] hover:text-[#A63D26] underline underline-offset-2 break-all"
                      >
                        <span>{source.url}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <div className="border-t border-[#DFD2C2] pt-6 space-y-3 text-xs leading-relaxed text-[#433A34]">
            <p>
              <strong className="text-[#1F1B18]">Editorial note:</strong> Statistics in this
              document refer to their respective survey populations and should not be generalised to
              all women. Examples of tactics and warning signs are educational illustrations, not
              proof of a coordinated campaign.
            </p>
            <p>
              <strong className="text-[#1F1B18]">iZoon Disclaimer:</strong> This material is
              intended for awareness and educational purposes. It does not constitute legal advice.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};
