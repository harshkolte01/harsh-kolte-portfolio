import React, { useRef } from 'react';
import { ArrowUpRight, BarChart3, Github, MousePointerClick, Radar, ShieldCheck } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Project } from '../types';
import { featuredProjects } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const toneMap: Record<NonNullable<Project['tone']>, { accent: string; soft: string; text: string; border: string; bar: string }> = {
  blue: {
    accent: 'bg-accent-blue',
    soft: 'bg-accent-blue/10',
    text: 'text-accent-blue',
    border: 'border-accent-blue/32',
    bar: 'bg-accent-blue',
  },
  teal: {
    accent: 'bg-accent-teal',
    soft: 'bg-accent-teal/10',
    text: 'text-accent-teal',
    border: 'border-accent-teal/32',
    bar: 'bg-accent-teal',
  },
  orange: {
    accent: 'bg-accent-orange',
    soft: 'bg-accent-orange/12',
    text: 'text-accent-orange',
    border: 'border-accent-orange/36',
    bar: 'bg-accent-orange',
  },
};

const previewIcons = [BarChart3, ShieldCheck, MousePointerClick];

interface ProjectPreviewProps {
  project: Project;
  tone: (typeof toneMap)[NonNullable<Project['tone']>];
  index: number;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project, tone, index }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-white/12 bg-night-950 text-paper-50 shadow-[0_28px_80px_rgba(5,7,13,0.34)]">
      <div className="flex items-center justify-between border-b border-white/12 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-orange" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-teal" />
        </div>
        <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-paper-50/54">Case file 0{index + 1}</span>
      </div>

      <div className="p-5">
        <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <div className={`rounded-lg border ${tone.border} bg-white/7 p-4`}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper-50/54">Product surface</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-paper-50/68">{project.impact}</p>
            <div className="mt-5 space-y-3">
              {[86, 72, 64].map((width, lineIndex) => (
                <div key={width} className="h-2 rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${lineIndex === 1 ? 'bg-accent-lime' : tone.bar}`}
                    style={{ width: `${width - index * 4}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {project.features?.slice(0, 3).map((feature, featureIndex) => {
              const Icon = previewIcons[featureIndex] ?? Radar;

              return (
                <div key={feature} className="rounded-lg border border-white/12 bg-white/7 p-4">
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${featureIndex === 1 ? 'bg-accent-lime text-night-950' : tone.accent + ' text-white'}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-extrabold leading-6 text-paper-50/88">{feature}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-lg border border-white/12 bg-white/7 px-3 py-2 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-paper-50/68">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.projects-reveal',
      { y: 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.82,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell bg-paper-50" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="projects-reveal grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <span className="section-label">Selected work</span>
            <h2 id="projects-heading" className="section-title mt-6">
              Project stories with product intent, not just screenshots.
            </h2>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            The work is presented like product case files: problem shape, role, stack, and the user-facing pieces that had to feel clear. Each build sharpened a different part of the full stack.
          </p>
        </div>

        <div className="mt-12 border-y border-ink-950/12">
          {featuredProjects.map((project, index) => {
            const tone = toneMap[project.tone ?? 'blue'];

            return (
              <article key={project.title} className="projects-reveal grid gap-8 border-b border-ink-950/12 py-10 last:border-b-0 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <ProjectPreview project={project} tone={tone} index={index} />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`rounded-lg px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] ${tone.soft} ${tone.text}`}>
                      {project.category}
                    </span>
                    <span className="rounded-lg border border-ink-950/12 bg-white/62 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-ink-600">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-4xl font-bold leading-tight text-ink-950 sm:text-5xl">{project.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-ink-700">{project.description}</p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-ink-950/12 bg-white/68 p-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Role</p>
                      <p className="mt-3 text-sm font-bold leading-6 text-ink-900">{project.role}</p>
                    </div>
                    <div className="rounded-lg border border-ink-950/12 bg-white/68 p-4">
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Impact</p>
                      <p className="mt-3 text-sm font-bold leading-6 text-ink-900">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mt-7 chip-row">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary">
                        Live project
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button-secondary">
                        Source
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
