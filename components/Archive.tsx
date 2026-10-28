import React, { useRef, useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { archiveProjects, siteConfig } from '../data/site';
import { ScrollTrigger, useReveal } from '../lib/motion';

const INITIAL = 8;

const Archive: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);
  useReveal(scope);

  const rows = expanded ? archiveProjects : archiveProjects.slice(0, INITIAL);

  const toggle = () => {
    setExpanded((value) => !value);
    // Section height changes, so pinned/scrubbed triggers further down need new positions.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  };

  return (
    <section ref={scope} aria-labelledby="archive-heading" className="pb-28 lg:pb-40">
      <div className="container-x">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">More builds</p>
            <h2 id="archive-heading" className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-[-0.04em]">
              The rest of the workbench.
            </h2>
          </div>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5 text-[15px] text-muted hover:text-fg">
            Everything on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 border-t border-line" role="table" aria-label="Other projects">
          <div role="row" className="hidden grid-cols-[72px_1.1fr_1fr_1.4fr_88px] gap-6 border-b border-line py-3 font-mono text-[11.5px] uppercase text-faint md:grid">
            <span role="columnheader">Year</span>
            <span role="columnheader">Project</span>
            <span role="columnheader">Type</span>
            <span role="columnheader">Built with</span>
            <span role="columnheader" className="text-right">Links</span>
          </div>

          {rows.map((project) => (
            <div
              role="row"
              key={project.title}
              data-reveal
              className="group relative grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 border-b border-line py-5 transition-colors duration-300 hover:bg-white/[0.015] md:grid-cols-[72px_1.1fr_1fr_1.4fr_88px] md:items-center md:gap-6 md:py-4"
            >
              <span role="cell" className="order-3 font-mono text-[12px] text-faint md:order-none">
                {project.year}
              </span>
              <span role="cell" className="col-start-1 row-start-1 flex items-center gap-2.5 text-[17px] font-medium tracking-[-0.02em] md:col-start-auto md:row-start-auto md:text-[16px]">
                <span className="transition-transform duration-500 ease-[var(--ease-out-expo)] md:group-hover:translate-x-1.5">{project.title}</span>
                {project.note ? (
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10.5px] font-normal text-accent">{project.note}</span>
                ) : null}
              </span>
              <span role="cell" className="col-span-2 text-[14px] text-muted md:col-span-1">
                {project.kind}
              </span>
              <span role="cell" className="col-span-2 font-mono text-[12px] text-faint md:col-span-1">
                {project.stack}
              </span>
              <span role="cell" className="col-start-2 row-start-1 flex items-center justify-end gap-1 md:col-start-auto md:row-start-auto">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-fg hover:text-bg"
                    aria-label={`${project.title} live site`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full text-muted transition-colors hover:bg-fg hover:text-bg"
                  aria-label={`${project.title} source code`}
                >
                  <GithubMark className="h-4 w-4" />
                </a>
              </span>
            </div>
          ))}
        </div>

        {archiveProjects.length > INITIAL ? (
          <button type="button" onClick={toggle} className="btn btn-ghost mt-8 h-11 px-5 text-[14px]" aria-expanded={expanded}>
            <Plus className={`h-4 w-4 transition-transform duration-500 ${expanded ? 'rotate-45' : ''}`} />
            {expanded ? 'Show fewer' : `Show all ${archiveProjects.length}`}
          </button>
        ) : null}
      </div>
    </section>
  );
};

export const GithubMark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export default Archive;
