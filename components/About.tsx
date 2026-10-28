import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig, stackGroups, timeline } from '../data/site';
import SectionHeader from './SectionHeader';
import GitHubActivity from './GitHubActivity';
import { useReveal, useSplitReveal } from '../lib/motion';

const About: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);
  useSplitReveal(scope);

  return (
    <section ref={scope} id="about" aria-labelledby="about-heading" className="section">
      <div className="container-x">
        <SectionHeader index="03" label="About" id="about-heading" title="Engineer first, with an eye for the details people feel." />

        <div className="mt-16 grid gap-16 md:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <div className="space-y-6 text-[clamp(1.125rem,1.6vw,1.375rem)] leading-[1.55] tracking-[-0.015em] text-muted">
            <p data-reveal>
              <span className="text-fg">I’ve been pushing code to GitHub since 2020</span> — Discord bots first, then web apps, and now AI
              agents and desktop software that people install on their own machines.
            </p>
            <p data-reveal>
              I studied Computer Engineering, but most of what I know came from shipping: an esports tournament platform with live updates, team
              builds where I led the work, and three months at ISRO turning satellite payload files into something you can explore in a
              browser tab.
            </p>
            <p data-reveal>
              I care about the unglamorous parts — approval flows, empty and error states, auto-updates, the installer that just works.
              That is usually where software earns its trust.
            </p>
            <div data-reveal className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-[15px]">
              <a href={siteConfig.homeResumeHref} className="link-underline inline-flex items-center gap-1.5 text-fg">
                Read the résumé <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5 text-fg">
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p data-reveal className="eyebrow">Experience &amp; education</p>
            <ol className="mt-6 border-t border-line">
              {timeline.map((entry) => (
                <li key={entry.title + entry.period} data-reveal className="grid gap-2 border-b border-line py-7 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <span className="font-mono text-[12px] text-faint sm:pt-1.5">{entry.period}</span>
                  <div>
                    <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                      {entry.title}
                      <span className="text-muted"> · {entry.org}</span>
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{entry.copy}</p>
                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline mt-3 inline-flex items-center gap-1 font-mono text-[12px] text-fg"
                      >
                        {new URL(entry.href).hostname}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24 grid gap-6 lg:mt-32 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div data-reveal className="rounded-[24px] border border-line p-5 sm:p-6">
            <p className="eyebrow">Toolbox</p>
            <dl className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {stackGroups.map((group) => (
                <div key={group.label} className="border-t border-line py-4">
                  <dt className="font-mono text-[11.5px] uppercase text-faint">{group.label}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-fg/90">{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div data-reveal>
            <GitHubActivity />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
