import React, { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { featuredProjects } from '../data/site';
import ProjectVisualFrame from './ProjectVisuals';
import SectionHeader from './SectionHeader';
import { ScrollTrigger, gsap, prefersReducedMotion, useGSAP, useReveal, useSplitReveal } from '../lib/motion';

const STACK_QUERY = '(min-width: 1024px) and (min-height: 760px)';

const Projects: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  useReveal(scope);
  useSplitReveal(scope);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const cards = gsap.utils.toArray<HTMLElement>('.stack-card');

      // Visual content drifts against the scroll for a sense of depth.
      cards.forEach((card) => {
        gsap.fromTo(
          card.querySelector('.visual-parallax'),
          { yPercent: 5 },
          { yPercent: -5, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } }
        );
      });

      // On tall desktop viewports the cards stack: each one recedes as the next slides over it.
      const mm = gsap.matchMedia();
      mm.add(STACK_QUERY, () => {
        // A card taller than the viewport would stick before its bottom is ever seen, so such
        // cards stick by their bottom edge instead: scroll fully into view, then hold.
        const setTops = () =>
          cards.forEach((card, index) => {
            const ideal = 88 + index * 14;
            card.style.top = `${Math.min(ideal, window.innerHeight - card.offsetHeight - 24)}px`;
          });
        setTops();
        ScrollTrigger.addEventListener('refreshInit', setTops);

        cards.slice(0, -1).forEach((card, index) => {
          const next = cards[index + 1];
          gsap.to(card.querySelector('.card-body'), {
            scale: 0.93,
            ease: 'none',
            scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 15%', scrub: true },
          });
          gsap.to(card.querySelector('.card-shade'), {
            opacity: 0.65,
            ease: 'none',
            scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 15%', scrub: true },
          });
        });

        return () => {
          ScrollTrigger.removeEventListener('refreshInit', setTops);
          cards.forEach((card) => card.style.removeProperty('top'));
        };
      });

      ScrollTrigger.refresh();
    },
    { scope }
  );

  const total = String(featuredProjects.length).padStart(2, '0');

  return (
    <section ref={scope} id="work" aria-labelledby="work-heading" className="section">
      <div className="container-x">
        <SectionHeader
          index="01"
          label="Selected work"
          id="work-heading"
          title="Software I’ve designed, built and shipped."
          aside={
            <>
              A mix of my own products, client tools and the ISRO traineeship. Each one went from an empty repo to something people
              can download, open or sign into.
            </>
          }
        />

        <ol className="mt-16 flex flex-col gap-6 md:mt-24 lg:gap-10">
          {featuredProjects.map((project, index) => (
            <li
              key={project.slug}
              className="stack-card [@media(min-width:1024px)_and_(min-height:760px)]:sticky"
            >
              <article
                aria-labelledby={`project-${project.slug}`}
                className="card-body relative origin-top overflow-hidden rounded-[28px] border border-line bg-bg-2 will-change-transform"
              >
                <div className="grid gap-8 p-4 sm:p-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 lg:p-8">
                  <div className="flex flex-col px-1 pt-2 sm:px-2 lg:py-2">
                    <div className="flex items-center justify-between font-mono text-[12px] text-faint">
                      <span>
                        {String(index + 1).padStart(2, '0')} / {total}
                      </span>
                      <span>
                        {project.kind} · {project.year}
                      </span>
                    </div>

                    <h3 id={`project-${project.slug}`} className="mt-8 text-[clamp(2rem,3.6vw,3.5rem)] font-medium leading-[1] tracking-[-0.045em] lg:mt-auto">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-[clamp(1.0625rem,1.3vw,1.25rem)] leading-snug tracking-[-0.015em] text-fg/90">
                      {project.summary}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>

                    <ul className="mt-6 border-t border-line">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3 border-b border-line py-3 text-[14px] leading-snug text-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tech stack">
                      {project.stack.map((tech) => (
                        <li key={tech} className="tag">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {project.liveUrl ? (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary h-11 px-5 text-[14px]">
                          {project.liveLabel ?? 'Visit'}
                          <ArrowUpRight className="btn-arrow h-4 w-4" />
                        </a>
                      ) : null}
                      {project.repoUrl ? (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-11 px-5 text-[14px]">
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <ProjectVisualFrame visual={project.visual} label={`Illustration of the ${project.title} interface`} />
                </div>
                <div className="card-shade pointer-events-none absolute inset-0 bg-bg opacity-0" aria-hidden="true" />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
