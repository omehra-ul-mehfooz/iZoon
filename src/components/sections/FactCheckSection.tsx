import React, { useState } from 'react';
import {
  AlertCircle,
  AlertTriangle,
  Archive,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Info,
  RotateCcw,
  ScanFace,
  SearchCheck,
  ShieldAlert,
} from 'lucide-react';
import { EditorialImage } from '../EditorialImage';
import { SectionMetaNotice } from '../SectionMetaNotice';

type AnswerOption = 'yes' | 'not-sure' | 'no';

interface FactCheckQuestion {
  number: number;
  question: string;
  guidance: string;
}

const FACT_CHECK_QUESTIONS: FactCheckQuestion[] = [
  {
    number: 1,
    question: 'Can you trace the claim to its original source?',
    guidance:
      'Look for the original statement, report, document, recording or account rather than relying only on a forwarded screenshot.',
  },
  {
    number: 2,
    question: 'Do the date and place match the claim?',
    guidance:
      'An old photograph or video may be presented as if it happened recently or somewhere else.',
  },
  {
    number: 3,
    question: 'Do independent, credible sources report the same key facts?',
    guidance: 'Look for original reporting and evidence, not websites copying one another.',
  },
  {
    number: 4,
    question: 'Have you checked whether the image appeared earlier or in a different context?',
    guidance:
      'Reverse image search may find matches or earlier appearances; it cannot prove that an image is original or authentic.',
  },
  {
    number: 5,
    question: "Have you checked whether the post uses panic, anger, shame or 'share fast' pressure?",
    guidance:
      'Emotional language does not automatically mean a claim is false, but it is a reason to pause and verify.',
  },
  {
    number: 6,
    question:
      'Have you checked the evidence provided against original documents, named sources or full context?',
    guidance:
      'Look for named sources, full documents, dates, direct quotations and links that actually support the claim.',
  },
  {
    number: 7,
    question: 'Have you read a relevant fact-check and examined the evidence behind its conclusion?',
    guidance:
      'Examine the evidence and reasoning given. Finding no fact-check does not mean a claim is true.',
  },
  {
    number: 8,
    question: 'Have you checked the media in context rather than relying on appearance alone?',
    guidance:
      'Cropping, captions, missing context or edits can mislead. Visual inspection cannot reliably identify every manipulation.',
  },
];

const SCORE_BANDS = [
  {
    id: 'high-credibility',
    range: '13–16',
    label: 'More verification checks have been satisfied',
    guidance:
      'More verification checks have been satisfied. The claim may be more credible, but verify the key evidence before sharing.',
    tone: 'border-[#C5D8CD] bg-[#EEF5F1] text-[#1D4D3A]',
  },
  {
    id: 'unverified',
    range: '7–12',
    label: 'Unverified',
    guidance:
      'Unverified. Important details may still be missing or uncertain. Do not share it as fact.',
    tone: 'border-[#DFCA94] bg-[#FBF4DE] text-[#8A5B0B]',
  },
  {
    id: 'high-risk',
    range: '0–6',
    label: 'High risk',
    guidance: 'High risk. Stop, look for stronger evidence and avoid forwarding it.',
    tone: 'border-[#E2C2BA] bg-[#FAF0ED] text-[#8E3520]',
  },
];

const FACT_CHECKING_RESOURCES = [
  {
    name: 'Google Fact Check Explorer',
    description:
      'Helps you find existing fact-checks about a claim, person or topic. Finding no result does not establish that a claim is true.',
    url: 'https://toolbox.google.com/factcheck/explorer',
  },
  {
    name: 'PIB Fact Check',
    description:
      'Focuses on claims concerning the Union Government, its ministries, departments and related bodies. It does not cover every kind of misinformation.',
    url: 'https://factcheck.pib.gov.in/',
  },
  {
    name: 'PIB Fact Check FAQ',
    description:
      'Official answers explaining what PIB Fact Check covers, how it reviews Union Government claims and how queries are handled.',
    url: 'https://www.pib.gov.in/FAQ_fact.aspx?lang=9&reg=1',
  },
  {
    name: 'Alt News',
    description:
      'An independent Indian fact-checking organisation examining claims in public discussion and online media. Read the evidence and methodology behind each report.',
    url: 'https://www.altnews.in/',
  },
  {
    name: 'BOOM',
    description:
      'An independent Indian fact-checking organisation examining viral claims and online media. Review the supporting evidence and methodology in each fact-check.',
    url: 'https://www.boomlive.in/',
  },
  {
    name: 'Vishvas News',
    description:
      'An independent Indian fact-checking organisation with a searchable Message Check resource for previously examined claims. Examine the evidence and methodology behind each conclusion.',
    url: 'https://factchecker.vishvasnews.com/',
  },
];

const SAFER_SHARING_CHECKLIST = [
  'Pause. Read beyond the headline or caption.',
  'Trace the original source and check the date, place and context.',
  'Search for independent reporting and relevant fact-checks.',
  'Check images or video with more than one appropriate method where safe.',
  'Do not treat an AI detector, reverse-image search or forensic tool as final proof.',
  'If the content targets or exposes a woman or girl, do not amplify it.',
  'If you remain unsure, do not share it as fact.',
];

const SOURCES_AND_TOOLS = [
  {
    label: 'Google Fact Check Explorer',
    url: 'https://toolbox.google.com/factcheck/explorer',
  },
  {
    label: 'PIB Fact Check',
    url: 'https://factcheck.pib.gov.in/',
  },
  {
    label: 'PIB Fact Check FAQ',
    url: 'https://www.pib.gov.in/FAQ_fact.aspx?lang=9&reg=1',
  },
  {
    label: 'Alt News',
    url: 'https://www.altnews.in/',
  },
  {
    label: 'BOOM',
    url: 'https://www.boomlive.in/',
  },
  {
    label: 'Vishvas News Message Check',
    url: 'https://factchecker.vishvasnews.com/',
  },
  {
    label: 'Wayback Machine',
    url: 'https://web.archive.org/',
  },
];

const ANSWER_CHOICES: { value: AnswerOption; label: string; points: number }[] = [
  { value: 'yes', label: 'Yes', points: 2 },
  { value: 'not-sure', label: 'Not sure', points: 1 },
  { value: 'no', label: 'No', points: 0 },
];

export const FactCheckSection: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, AnswerOption>>({});
  const [genderSafetyAnswer, setGenderSafetyAnswer] = useState<AnswerOption | null>(null);

  const selectAnswer = (questionNumber: number, value: AnswerOption) => {
    setAnswers((prev) => ({ ...prev, [questionNumber]: value }));
  };

  const handleNavigateToChapter04 = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.location.pathname !== '/deepfakes') {
      window.history.pushState({}, '', '/deepfakes');
    }
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = FACT_CHECK_QUESTIONS.length;
  const maxScore = totalQuestions * 2;

  const totalScore = FACT_CHECK_QUESTIONS.reduce((sum, q) => {
    const choice = answers[q.number];
    if (choice === 'yes') return sum + 2;
    if (choice === 'not-sure') return sum + 1;
    return sum;
  }, 0);

  const progressPercent = (answeredCount / totalQuestions) * 100;

  let activeBand = SCORE_BANDS[2];
  if (totalScore >= 13) {
    activeBand = SCORE_BANDS[0];
  } else if (totalScore >= 7) {
    activeBand = SCORE_BANDS[1];
  }

  return (
    <div className="page-enter bg-[#FCFBF7] text-[#1E1E1C]">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <SectionMetaNotice />

        {/* Investigative Research Desk Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-12 border-b border-[#E2D6B5]">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#9F6B0F] font-semibold">
              <SearchCheck className="w-4 h-4" aria-hidden="true" />
              <span>iZoon | Chapter 05</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#1E1E1C] leading-tight">
              How to Fact-check Wrong Information
            </h1>
            <div className="space-y-2">
              <h2 className="font-mono text-xs uppercase tracking-wider text-[#9F6B0F] font-semibold">
                Purpose
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#4C4A43] max-w-prose">
                This guide helps readers pause, examine a claim and look for reliable evidence
                before believing or sharing it. It is an awareness resource, not a legal service and
                not an automated truth detector.
              </p>
            </div>
            <div className="pt-1 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#5A5852]">
              <span>India-focused awareness resource</span>
              <span>Prepared 17 November 2026</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl border border-[#E2D6B5] bg-[#F7F1DF] p-3.5">
              <EditorialImage
                src="/src/assets/images/factcheck_research_desk_1794853691809.jpg"
                alt="Overhead view of an investigative research desk with archival cards, a brass magnifying loupe, fountain pen, and warm desk lamp"
                caption="Research desk verification — checking source provenance, dates, and independent corroboration."
                aspectClass="aspect-[4/3]"
                className="text-[#5A5852]"
                fallbackBg="bg-[#EFE5C9]"
              />
            </div>
          </div>
        </header>

        {/* Section 1: Pause before you share */}
        <section
          aria-labelledby="pause-heading"
          className="py-10 border-b border-[#E2D6B5] space-y-4"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
            Section 01
          </div>
          <h2 id="pause-heading" className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]">
            1. Pause before you share
          </h2>
          <div className="max-w-3xl space-y-3 text-base leading-relaxed text-[#363530]">
            <p>
              False or misleading information can spread quickly through forwarded messages, edited
              images, short videos, fake accounts and posts designed to provoke fear or anger.
            </p>
            <p className="rounded-xl border border-[#E2D6B5] bg-[#F7F1DF] p-4 text-[#1E1E1C]">
              Do not let urgency pressure you into sharing. A message saying “share immediately” or
              “the media is hiding this” is a reason to slow down, not proof that the claim is true.
            </p>
          </div>
        </section>

        {/* Section 2: The eight-question fact-check */}
        <section
          aria-labelledby="eight-question-heading"
          className="py-12 border-b border-[#E2D6B5] space-y-8"
        >
          <div className="max-w-3xl space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
              Section 02 · Interactive Reflection Aid
            </div>
            <h2
              id="eight-question-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]"
            >
              2. The eight-question fact-check
            </h2>
            <p className="text-base leading-relaxed text-[#363530]">
              Use these questions to organise your thinking. For each question, choose{' '}
              <strong>Yes (2 points)</strong>, <strong>Not sure (1 point)</strong> or{' '}
              <strong>No (0 points)</strong>. The score is only a reflection aid. It cannot establish
              whether a claim is true.
            </p>
          </div>

          <div className="rounded-2xl border border-[#DFD2B0] bg-[#FFFFFF] p-5 sm:p-8 space-y-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#EFE6CD]">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1E1E1C]">
                  The questions
                </h3>
                <p className="text-xs text-[#5A5852] mt-1">
                  Local browser session only — no links or answers are recorded or transmitted.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="font-mono tabular-nums font-semibold text-[#1E1E1C]">
                  Answered: {answeredCount}/{totalQuestions}
                </span>
                {answeredCount === totalQuestions && (
                  <span className="font-mono tabular-nums font-semibold text-[#9F6B0F]">
                    Score: {totalScore}/{maxScore}
                  </span>
                )}
                {answeredCount > 0 && (
                  <button
                    type="button"
                    onClick={() => setAnswers({})}
                    className="inline-flex items-center gap-1 text-[#5A5852] hover:text-[#9F6B0F] cursor-pointer underline underline-offset-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            <div
              role="progressbar"
              aria-label="Checklist completion"
              aria-valuemin={0}
              aria-valuemax={totalQuestions}
              aria-valuenow={answeredCount}
              className="h-1.5 w-full bg-[#EFE7D1] rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-[#B87D14] rounded-full transition-all duration-200"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <ol className="space-y-4">
              {FACT_CHECK_QUESTIONS.map((item) => {
                const selected = answers[item.number];
                return (
                  <li
                    key={item.number}
                    className={`rounded-xl border p-4 sm:p-5 space-y-3 transition-colors ${
                      selected
                        ? 'border-[#B87D14]/60 bg-[#FBF8EE]'
                        : 'border-[#E6DEC8] bg-[#FCFBF7]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-semibold tabular-nums px-2 py-0.5 bg-[#F7EED4] text-[#8A5B0B] shrink-0 mt-0.5">
                        0{item.number}
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm sm:text-base font-semibold text-[#1E1E1C] leading-snug">
                          {item.number}. {item.question}
                        </p>
                        <p className="text-sm leading-relaxed text-[#4C4A43]">{item.guidance}</p>
                      </div>
                    </div>

                    <div
                      role="radiogroup"
                      aria-label={`Question ${item.number}: ${item.question}`}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:pl-10"
                    >
                      {ANSWER_CHOICES.map((choice) => {
                        const isSelected = selected === choice.value;
                        return (
                          <button
                            key={choice.value}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => selectAnswer(item.number, choice.value)}
                            className={`min-h-[44px] px-3.5 py-2 rounded-lg border text-left sm:text-center text-xs sm:text-sm font-medium flex items-center justify-between sm:justify-center gap-2 transition-colors cursor-pointer ${
                              isSelected
                                ? 'border-[#9F6B0F] bg-[#9F6B0F] text-[#FFFFFF]'
                                : 'border-[#DFD2B0] bg-[#FFFFFF] text-[#363530] hover:border-[#9F6B0F]'
                            }`}
                          >
                            <span>{choice.label}</span>
                            <span
                              className={`font-mono text-[11px] tabular-nums ${
                                isSelected ? 'text-[#F7EED4]' : 'text-[#6E6A5E]'
                              }`}
                            >
                              ({choice.points} {choice.points === 1 ? 'pt' : 'pts'})
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Live Score Guidance Result */}
            <div className="pt-2 space-y-4">
              {answeredCount < totalQuestions ? (
                <div className="rounded-xl border border-[#E2D6B5] bg-[#F7F1DF] p-5 flex items-start gap-3.5">
                  <Info className="w-5 h-5 text-[#9F6B0F] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-1">
                    <div className="font-serif text-lg font-medium text-[#1E1E1C]">
                      Complete all eight questions to see your reflection result.
                    </div>
                    <p className="text-sm leading-relaxed text-[#4C4A43]">
                      {answeredCount === 0
                        ? 'Select Yes, Not sure, or No for each question above.'
                        : `${answeredCount} of ${totalQuestions} questions answered. Answer the remaining ${totalQuestions - answeredCount} to calculate your reflection score.`}
                    </p>
                  </div>
                </div>
              ) : (
                <div className={`rounded-xl border p-5 flex items-start gap-3.5 ${activeBand.tone}`}>
                  {activeBand.id === 'high-credibility' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  )}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-mono text-sm font-semibold tabular-nums">
                        Score: {totalScore} / {maxScore}
                      </span>
                      <span className="text-xs font-mono opacity-80">
                        ({answeredCount} of {totalQuestions} questions answered)
                      </span>
                    </div>
                    <div className="font-serif text-lg font-medium text-[#1E1E1C]">
                      {activeBand.range}: {activeBand.label}
                    </div>
                    <p className="text-sm leading-relaxed text-[#363530]">{activeBand.guidance}</p>
                  </div>
                </div>
              )}

              {/* How to read the score */}
              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-xl font-medium text-[#1E1E1C]">
                  How to read the score
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SCORE_BANDS.map((band) => {
                    const isCurrent =
                      answeredCount === totalQuestions && activeBand.id === band.id;
                    return (
                      <div
                        key={band.id}
                        className={`rounded-xl border p-4 space-y-1.5 transition-all ${band.tone} ${
                          isCurrent ? 'ring-2 ring-[#9F6B0F] ring-offset-2 ring-offset-[#FFFFFF]' : ''
                        }`}
                      >
                        <div className="font-mono text-sm font-semibold tabular-nums">
                          {band.range}
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#1E1E1C]">
                          {band.guidance}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-[#DFD2B0] bg-[#FCFBF7] p-4 flex items-start gap-3 text-sm leading-relaxed text-[#363530]">
                <AlertTriangle className="w-4 h-4 text-[#9F6B0F] shrink-0 mt-1" aria-hidden="true" />
                <p>
                  <strong>Important:</strong> Even a score of 16 is not proof. A convincing false
                  claim can pass some checks, and a true claim may have limited available
                  documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: A gender-safety check (Independent of numerical score) */}
        <section
          aria-labelledby="gender-safety-heading"
          className="py-12 border-b border-[#E2D6B5] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8E3520] font-semibold">
              <ShieldAlert className="w-4 h-4" aria-hidden="true" />
              <span>Section 03 · Separate from Numerical Score</span>
            </div>
            <h2
              id="gender-safety-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]"
            >
              3. A gender-safety check
            </h2>
            <p className="text-base leading-relaxed text-[#363530]">
              Ask one additional question, separate from the score:{' '}
              <strong>
                Does the content target a specific woman or girl through claims about her body,
                sexuality, honour, family or private life?
              </strong>
            </p>
          </div>

          <div className="rounded-2xl border border-[#E2C2BA] bg-[#FFFFFF] p-5 sm:p-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8E3520] font-semibold">
                Independent Gender-Safety Check (Not Included in Score)
              </div>
              {genderSafetyAnswer !== null && (
                <button
                  type="button"
                  onClick={() => setGenderSafetyAnswer(null)}
                  className="inline-flex items-center gap-1 text-xs text-[#5A5852] hover:text-[#8E3520] cursor-pointer underline underline-offset-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <div
              role="radiogroup"
              aria-label="Does the content target a specific woman or girl through claims about her body, sexuality, honour, family or private life?"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl"
            >
              {(
                [
                  { value: 'yes', label: 'Yes' },
                  { value: 'not-sure', label: 'Not sure' },
                  { value: 'no', label: 'No' },
                ] as const
              ).map((option) => {
                const selected = genderSafetyAnswer === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setGenderSafetyAnswer(option.value)}
                    className={`min-h-[44px] px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                      selected
                        ? option.value === 'no'
                          ? 'border-[#1E1E1C] bg-[#1E1E1C] text-[#FFFFFF]'
                          : 'border-[#8E3520] bg-[#8E3520] text-[#FFFFFF]'
                        : 'border-[#E2C2BA] bg-[#FCFBF7] text-[#363530] hover:border-[#8E3520]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {(genderSafetyAnswer === 'yes' || genderSafetyAnswer === 'not-sure') && (
              <div className="rounded-xl border-2 border-[#8E3520] bg-[#FAF0ED] p-5 space-y-3 text-sm sm:text-base leading-relaxed text-[#1E1E1C]">
                <div className="flex items-center gap-2 font-semibold text-[#8E3520]">
                  <ShieldAlert className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>
                    {genderSafetyAnswer === 'yes'
                      ? 'Safety Guidance — Do Not Amplify or Share'
                      : 'Precautionary Guidance — If Unsure, Treat with Safety First'}
                  </span>
                </div>
                <p>
                  If yes, do not forward, repost, quote-post or amplify it. Avoid adding comments
                  that repeat the allegation. If there is harassment or a threat, report the content
                  through the platform and seek trusted support. Keep only non-explicit evidence
                  such as the post URL, account details, dates and threatening text.
                </p>
                <p className="font-medium">
                  Never download, copy, forward or upload intimate images. Do not send private or
                  intimate material to fact-checking tools, AI detectors or public websites. If a
                  child may be involved, seek help from a trusted adult and appropriate official
                  support.
                </p>
              </div>
            )}

            {genderSafetyAnswer === 'no' && (
              <div className="rounded-xl border border-[#E2D6B5] bg-[#F7F1DF] p-4 text-sm text-[#363530]">
                You selected <strong>No</strong>. Even if content does not appear to target a
                specific woman or girl, verify evidence carefully and avoid sharing private or
                unverified claims.
              </div>
            )}

            {/* Complete PDF Guidance Always Preserved & Visible */}
            <div className="rounded-xl border border-[#E2C2BA] bg-[#FAF0ED]/60 p-5 space-y-3 text-sm sm:text-base leading-relaxed text-[#363530]">
              <p>
                If yes, do not forward, repost, quote-post or amplify it. Avoid adding comments that
                repeat the allegation. If there is harassment or a threat, report the content
                through the platform and seek trusted support. Keep only non-explicit evidence such
                as the post URL, account details, dates and threatening text.
              </p>
              <p>
                Never download, copy, forward or upload intimate images. Do not send private or
                intimate material to fact-checking tools, AI detectors or public websites. If a
                child may be involved, seek help from a trusted adult and appropriate official
                support.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Fact-checking resources */}
        <section
          aria-labelledby="fact-checking-resources-heading"
          className="py-12 border-b border-[#E2D6B5] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
              Section 04
            </div>
            <h2
              id="fact-checking-resources-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]"
            >
              4. Fact-checking resources
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FACT_CHECKING_RESOURCES.map((resource) => (
              <div
                key={resource.name}
                className="rounded-xl border border-[#E2D6B5] bg-[#FFFFFF] p-6 space-y-3"
              >
                <h3 className="font-serif text-xl font-medium text-[#1E1E1C]">{resource.name}</h3>
                <p className="text-sm leading-relaxed text-[#4C4A43]">{resource.description}</p>
                <div className="pt-1 text-xs font-mono">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#9F6B0F] hover:text-[#1E1E1C] underline underline-offset-2 break-all"
                  >
                    <span>{resource.url}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Wayback Machine */}
        <section
          aria-labelledby="wayback-heading"
          className="py-12 border-b border-[#E2D6B5] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
              <Archive className="w-4 h-4" aria-hidden="true" />
              <span>Section 05</span>
            </div>
            <h2
              id="wayback-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]"
            >
              5. Wayback Machine
            </h2>
          </div>

          <div className="rounded-xl border border-[#E2D6B5] bg-[#FFFFFF] p-6 sm:p-8 space-y-3 max-w-3xl">
            <h3 className="font-serif text-xl font-medium text-[#1E1E1C]">
              Checking archived versions of webpages
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#4C4A43]">
              The Wayback Machine can help locate archived versions of webpages and compare how a
              page appeared at an earlier time. This can be useful when checking whether a webpage
              was changed, deleted or quoted out of context.
            </p>
            <p className="text-sm leading-relaxed text-[#4C4A43]">
              Not every webpage is archived, and archived snapshots may be incomplete. An archived
              copy shows what appeared at a particular time, not whether the claims on the page are
              true.
            </p>
            <div className="pt-1">
              <a
                href="https://web.archive.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs sm:text-sm text-[#9F6B0F] hover:text-[#1E1E1C] underline underline-offset-2 break-all"
              >
                <span>https://web.archive.org/</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 6: Checking Images, Videos and Manipulated Media */}
        <section
          aria-labelledby="media-checks-heading"
          className="py-12 border-b border-[#E2D6B5] space-y-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
              <ScanFace className="w-4 h-4" aria-hidden="true" />
              <span>Section 06</span>
            </div>
            <h2
              id="media-checks-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]"
            >
              6. Checking Images, Videos and Manipulated Media
            </h2>
          </div>

          <div className="rounded-xl border border-[#E2D6B5] bg-[#FFFFFF] p-6 sm:p-8 space-y-4 max-w-3xl">
            <p className="text-sm sm:text-base leading-relaxed text-[#363530]">
              Image, video and AI-detection checks have important limitations. Reverse-image search,
              keyframe inspection and technical analysis tools can miss manipulation, return no
              matches or produce misleading clues — they are never final proof that media is
              authentic or fabricated.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#363530]">
              Never upload private, intimate or sensitive imagery — and never download, copy, forward
              or upload imagery involving anyone under 18 — to public search engines, detectors or
              forensic websites.
            </p>
            <div className="rounded-xl border border-[#E2D6B5] bg-[#F7F1DF] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm leading-relaxed text-[#1E1E1C]">
                For detailed guidance on deepfakes, verification tools and safe evidence handling,
                read{' '}
                <a
                  href="/deepfakes"
                  onClick={handleNavigateToChapter04}
                  className="inline-flex items-center gap-1 font-semibold text-[#9F6B0F] hover:text-[#1E1E1C] underline underline-offset-4 cursor-pointer"
                >
                  <span>Chapter 04 – Deepfakes</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: A safer sharing checklist + Important reminder */}
        <section
          aria-labelledby="safer-sharing-heading"
          className="py-12 border-b border-[#E2D6B5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-7 rounded-2xl border border-[#E2D6B5] bg-[#FFFFFF] p-6 sm:p-8 space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
              Section 07
            </div>
            <h2
              id="safer-sharing-heading"
              className="font-serif text-2xl sm:text-3xl font-medium text-[#1E1E1C]"
            >
              7. A safer sharing checklist
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base leading-relaxed text-[#1E1E1C] list-disc pl-5">
              {SAFER_SHARING_CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-[#E2D6B5] bg-[#F7F1DF] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-[#9F6B0F]">
              <Info className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h2 className="font-serif text-2xl font-medium text-[#1E1E1C]">Important reminder</h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#363530]">
              No single website, reverse-image search, AI detector or forensic tool can establish
              the truth in every case. Tools can miss material, return incomplete matches or produce
              misleading results. Combine source checking, context, independent reporting and careful
              judgement.
            </p>
            <p className="text-sm leading-relaxed text-[#4C4A43] pt-2 border-t border-[#E2D6B5]">
              This website provides general awareness information, not legal advice, an
              investigation service or a guarantee that content is authentic.
            </p>
          </div>
        </section>

        {/* Sources and tools */}
        <section aria-labelledby="sources-tools-heading" className="pt-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#9F6B0F] font-semibold">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            <span>References</span>
          </div>
          <h2
            id="sources-tools-heading"
            className="font-serif text-2xl font-medium text-[#1E1E1C]"
          >
            Sources and tools
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-[#E2D6B5] pt-6 text-sm">
            {SOURCES_AND_TOOLS.map((source) => (
              <li
                key={source.url}
                className="rounded-xl border border-[#E2D6B5] bg-[#FFFFFF] p-4 space-y-1"
              >
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1E1E1C] hover:text-[#9F6B0F] underline underline-offset-2"
                  >
                    {source.label}
                  </a>
                </div>
                <div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#9F6B0F] hover:text-[#1E1E1C] underline underline-offset-2 break-all"
                  >
                    <span>{source.url}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};
