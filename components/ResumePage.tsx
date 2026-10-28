import React, { useRef, useState } from 'react';
import { ArrowUpRight, Check, Download, Link2 } from 'lucide-react';
import { featuredProjects, siteConfig, stackGroups, timeline } from '../data/site';
import { SplitWords, gsap, prefersReducedMotion, useGSAP } from '../lib/motion';

const Block: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="resume-reveal grid gap-6 border-t border-line py-10 md:grid-cols-[200px_1fr] md:gap-10 print:border-black/20 print:py-5">
    <h2 className="eyebrow pt-1 print:text-black">{title}</h2>
    <div>{children}</div>
  </section>
);

const ResumePage: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  const [shared, setShared] = useState(false);

  useGSAP(
    () => {
      const release = () => document.documentElement.classList.remove('js-anim');
      if (prefersReducedMotion()) return release();
      gsap.fromTo('.resume-title .split-word', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.3, ease: 'expo.out', stagger: 0.05 });
      gsap.fromTo(
        '.resume-reveal',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.07, delay: 0.25 }
      );
      release();
    },
    { scope }
  );

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${siteConfig.name} — Résumé`, url });
      } catch {
        /* dismissed */
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setShared(true);
    window.setTimeout(() => setShared(false), 1800);
  };

  return (
    <article ref={scope} className="container-x pb-24 pt-32 md:pt-40 print:pt-0">
      <header className="flex flex-col gap-10 pb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="resume-reveal eyebrow">Résumé · updated 2026</p>
          <h1 className="resume-title display mt-6 text-[clamp(3rem,8vw,7rem)]">
            <SplitWords text={siteConfig.name} />
          </h1>
          <p className="resume-reveal lede mt-6 max-w-[52ch]">
            Full-stack engineer building AI agents, desktop apps and web products. Former trainee at Space Applications Centre, ISRO.
          </p>
          <ul className="resume-reveal mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12.5px] text-muted">
            <li>{siteConfig.location}</li>
            <li>
              <a className="link-underline hover:text-fg" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a className="link-underline hover:text-fg" href={siteConfig.githubUrl}>
                github.com/{siteConfig.githubUser}
              </a>
            </li>
          </ul>
        </div>
        <div className="resume-reveal no-print flex shrink-0 gap-2.5">
          <button type="button" onClick={handleShare} className="btn btn-ghost h-11 px-5 text-[14px]">
            {shared ? <Check className="h-4 w-4 text-ok" /> : <Link2 className="h-4 w-4" />}
            {shared ? 'Link copied' : 'Share'}
          </button>
          <a href={siteConfig.resumePdfHref} download="Harsh_Kolte_Resume.pdf" className="btn btn-primary h-11 px-5 text-[14px]">
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </header>

      <Block title="Summary">
        <p className="max-w-[62ch] text-[17px] leading-relaxed text-fg/90">
          Engineer who takes products end to end — data model, API, interface, packaging and deployment. Recent work spans an AI coding
          agent with sandboxed execution and human approvals, cross-platform desktop apps with auto-updates, and browser-based tooling for
          satellite payload data. Available for freelance and contract work.
        </p>
      </Block>

      <Block title="Experience">
        <ol className="space-y-8">
          {timeline
            .filter((entry) => !entry.title.startsWith('B.E.'))
            .map((entry) => (
              <li key={entry.title + entry.period}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                    {entry.title} <span className="text-muted">· {entry.org}</span>
                  </h3>
                  <span className="font-mono text-[12px] text-faint">{entry.period}</span>
                </div>
                <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted">{entry.copy}</p>
              </li>
            ))}
        </ol>
      </Block>

      <Block title="Selected projects">
        <ol className="space-y-8">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[19px] font-medium tracking-[-0.02em]">
                  {project.title} <span className="text-muted">· {project.kind}</span>
                </h3>
                <span className="font-mono text-[12px] text-faint">{project.year}</span>
              </div>
              <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-muted">{project.description}</p>
              <p className="mt-2 font-mono text-[12px] text-faint">{project.stack.join(' · ')}</p>
              <div className="mt-2 flex gap-5 text-[13.5px]">
                {project.liveUrl ? (
                  <a href={project.liveUrl} className="link-underline inline-flex items-center gap-1 text-fg">
                    {project.liveLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a href={project.repoUrl} className="link-underline inline-flex items-center gap-1 text-muted hover:text-fg">
                    Source <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Block>

      <Block title="Skills">
        <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.label}>
              <dt className="font-mono text-[11.5px] uppercase text-faint">{group.label}</dt>
              <dd className="mt-1.5 text-[15px] text-fg/90">{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Education">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="text-[19px] font-medium tracking-[-0.02em]">B.E. Computer Engineering</h3>
          <span className="font-mono text-[12px] text-faint">2022 — 2026</span>
        </div>
        <p className="mt-2 text-[15px] text-muted">SAL Institute of Technology &amp; Engineering Research, Ahmedabad (GTU) · CGPA 8.09</p>
      </Block>

      <Block title="Languages">
        <p className="text-[15px] text-fg/90">English, Hindi, Gujarati, Marathi</p>
      </Block>
    </article>
  );
};

export default ResumePage;
