import React, { useRef } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../data/site';
import SectionHeader from './SectionHeader';
import { useReveal, useSplitReveal } from '../lib/motion';

const Faq: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);
  useSplitReveal(scope);

  return (
    <section ref={scope} id="faq" aria-labelledby="faq-heading" className="section pb-0 lg:pb-0">
      <div className="container-x">
        <SectionHeader index="04" label="FAQ" id="faq-heading" title="Questions clients usually ask first." />

        <div className="mt-16 border-t border-line md:mt-24">
          {faqs.map((faq, index) => (
            <details key={faq.q} data-reveal className="group border-b border-line" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[clamp(1.125rem,2vw,1.5rem)] font-medium tracking-[-0.025em]">{faq.q}</h3>
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-transform duration-500 ease-[var(--ease-out-expo)] group-open:rotate-45 group-open:text-fg"
                  aria-hidden="true"
                >
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="max-w-[68ch] pb-8 text-[16px] leading-relaxed text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
