import React, { useRef } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';
import { featuredProjects } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const toneMap: Record<NonNullable<Project['tone']>, { shell: string; pill: string; glow: string }> = {
  blue: {
    shell: 'from-accent-blue/18 via-white to-accent-blue/8',
    pill: 'bg-accent-blue/10 text-accent-blue',
    glow: 'bg-accent-blue/25',
  },
  teal: {
    shell: 'from-accent-teal/16 via-white to-accent-teal/8',
    pill: 'bg-accent-teal/10 text-accent-teal',
    glow: 'bg-accent-teal/25',
  },
  orange: {
    shell: 'from-accent-orange/18 via-white to-accent-orange/10',
    pill: 'bg-accent-orange/12 text-accent-orange',
    glow: 'bg-accent-orange/25',
  },
};

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.projects-header',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true } }
    );

    gsap.fromTo(
      '.project-row',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.18, ease: 'power2.out', scrollTrigger: { trigger: '.project-list', start: 'top 85%', once: true } }
    );
  }, { scope: containerRef });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="projects-header max-w-3xl opacity-0">
          <span className="section-kicker">Selected Work</span>
          <h2 id="projects-heading" className="section-heading mt-6">
            Project case studies designed to feel more like products than portfolio cards.
          </h2>
          <p className="section-copy mt-6">
            Each project balances structure, usability, and implementation detail. I focused this redesign on giving the work more presence, clearer storytelling, and a stronger visual identity.
          </p>
        </div>

        <div className="project-list mt-16 space-y-10">
          {featuredProjects.map((project, index) => {
            const tone = toneMap[project.tone ?? 'blue'];
            const isReverse = index % 2 === 1;

            return (
              <article
                key={project.title}
                className="project-row grid gap-10 rounded-[2.25rem] border border-ink-950/8 bg-white/78 p-6 opacity-0 shadow-[0_28px_64px_rgba(34,40,50,0.06)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-8"
              >
                <div className={isReverse ? 'lg:order-2' : ''}>
                  <div className="glass-card rounded-[2rem] p-4">
                    <div className={`relative min-h-[360px] overflow-hidden rounded-[1.65rem] border border-white/50 bg-gradient-to-br ${tone.shell} p-6`}>
                      <div className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-3xl ${tone.glow}`}></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-ink-950/25"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-ink-950/18"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-ink-950/10"></span>
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${tone.pill}`}>
                            {project.category}
                          </span>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                          <div className="rounded-[1.5rem] bg-ink-950 p-5 text-paper-50 shadow-[0_20px_50px_rgba(23,25,31,0.18)]">
                            <p className="text-xs uppercase tracking-[0.2em] text-paper-100/72">Project focus</p>
                            <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em]">{project.title}</h3>
                            <p className="mt-4 text-sm leading-6 text-paper-100/80">{project.impact}</p>
                            <div className="mt-6 space-y-3">
                              {project.features?.slice(0, 2).map((feature) => (
                                <div key={feature} className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-paper-100/86">
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="rounded-[1.4rem] bg-white/84 p-4 shadow-[0_12px_40px_rgba(34,40,50,0.06)]">
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Role</p>
                              <p className="mt-3 text-sm font-semibold leading-6 text-ink-900">{project.role}</p>
                            </div>
                            <div className="rounded-[1.4rem] bg-white/84 p-4 shadow-[0_12px_40px_rgba(34,40,50,0.06)]">
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Core stack</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {project.techStack.slice(0, 3).map((tech) => (
                                  <span key={tech} className="rounded-full bg-paper-100 px-3 py-1 text-xs font-semibold text-ink-800">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="rounded-[1.4rem] border border-dashed border-ink-950/10 bg-white/56 px-4 py-4">
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Outcome</p>
                              <p className="mt-3 text-sm leading-6 text-ink-700">{project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={isReverse ? 'lg:order-1' : ''}>
                  <span className="section-kicker">{project.year}</span>
                  <h3 className="mt-6 font-display text-4xl leading-tight tracking-[-0.05em] text-ink-950 sm:text-[2.8rem]">
                    {project.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-ink-700">
                    {project.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="feature-outline rounded-[1.5rem] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Role</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-ink-900">{project.role}</p>
                    </div>
                    <div className="feature-outline rounded-[1.5rem] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Impact</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-ink-900">{project.impact}</p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {project.features?.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-7 text-ink-700">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-blue"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 chip-row">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                        Visit live project
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">
                        View source
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
