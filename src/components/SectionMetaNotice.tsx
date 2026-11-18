import React from 'react';
import { Info } from 'lucide-react';
import { contentRepository } from '../services/contentRepository';

interface SectionMetaNoticeProps {
  sectionNumber?: number;
  totalSections?: number;
  titleContext?: string;
}

export const SectionMetaNotice: React.FC<SectionMetaNoticeProps> = ({
  titleContext,
}) => {
  const metadata = contentRepository.getSiteMetadata();

  return (
    <div className="border-y border-[#E5D9CA] py-3 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#6B5B61]">
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        {titleContext && (
          <>
            <span>{titleContext}</span>
            <span aria-hidden="true">·</span>
          </>
        )}
        <span>
          Last Checked:{' '}
          <time dateTime="2026-11-17" className="font-mono tabular-nums text-[#1C1518]">
            {metadata.lastCheckedDate}
          </time>
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-[#6B5B61]">
        <Info className="w-3.5 h-3.5 text-[#68182C] shrink-0" aria-hidden="true" />
        <span>Awareness information only — not legal advice.</span>
      </div>
    </div>
  );
};
