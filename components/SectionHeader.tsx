import React from 'react';
import { SplitWords } from '../lib/motion';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  id: string;
  aside?: React.ReactNode;
}

/** Shared section opener: mono index + label on a hairline, a split-reveal heading, optional side note. */
const SectionHeader: React.FC<SectionHeaderProps> = ({ index, label, title, id, aside }) => (
  <header>
    <div data-reveal className="flex items-center gap-4 border-t border-line pt-5">
      <span className="eyebrow text-accent">({index})</span>
      <span className="eyebrow">{label}</span>
    </div>
    <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
      <h2 id={id} data-split className="h-section max-w-[16ch]">
        <SplitWords text={title} />
      </h2>
      {aside ? (
        <p data-reveal className="lede max-w-[42ch] lg:justify-self-end lg:pb-2">
          {aside}
        </p>
      ) : null}
    </div>
  </header>
);

export default SectionHeader;
