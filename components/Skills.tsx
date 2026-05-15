import React, { useRef, useState } from 'react';
import { BrainCircuit, Code2, Database, Server, Workflow } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tracks = [
  {
    id: 'frontend',
    label: 'Frontend',
    title: 'Interfaces that feel built, not themed.',
    description: 'Responsive React screens, reusable UI systems, animation restraint, accessibility details, and product pages that stay readable under real content.',
    icon: Code2,
    color: 'bg-accent-blue text-white',
    stack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Responsive UI'],
    proof: ['Dashboard layouts', 'Case-study pages', 'State-driven components'],
  },
  {
    id: 'backend',
    label: 'Backend',
    title: 'APIs and product logic with clean boundaries.',
    description: 'Node.js services, authentication flows, REST APIs, database modeling, and integrations that support user-facing features without adding avoidable complexity.',
    icon: Server,
    color: 'bg-ink-950 text-paper-50',
    stack: ['Node.js', 'Express.js', 'JWT', 'OAuth', 'REST APIs', 'Nodemailer'],
    proof: ['Auth workflows', 'Subscription flows', 'Admin-user permissions'],
  },
  {
    id: 'data',
    label: 'Data',
    title: 'Data workflows shaped into usable screens.',
    description: 'Search, filtering, analytics, HDF5 browser-side tooling, and database-backed product views that make information easier to inspect and act on.',
    icon: Database,
    color: 'bg-accent-teal text-night-950',
    stack: ['MongoDB', 'PostgreSQL', 'Firebase DB', 'Analytics', 'HDF5 data', 'Filtering'],
    proof: ['Click analytics', 'Realtime tracking', 'Scientific data exploration'],
  },
  {
    id: 'ai',
    label: 'AI',
    title: 'AI features that fit the product workflow.',
    description: 'Claude and OpenAI integrations, AI-assisted development with Claude Code and Codex, and product thinking around where model output actually helps users.',
    icon: BrainCircuit,
    color: 'bg-accent-orange text-night-950',
    stack: ['Claude', 'OpenAI APIs', 'Claude Code', 'Codex', 'Prompt workflows', 'AI UX'],
    proof: ['AI-enabled apps', 'Workflow automation', 'Model-assisted iteration'],
  },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTrack, setActiveTrack] = useState(tracks[0].id);
  const selected = tracks.find((track) => track.id === activeTrack) ?? tracks[0];
  const SelectedIcon = selected.icon;

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.skills-reveal',
      { y: 42, opacity: 0 },
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
    <section id="skills" aria-labelledby="skills-heading" className="section-shell" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div className="skills-reveal">
            <span className="section-label">Stack</span>
            <h2 id="skills-heading" className="section-title mt-6">
              Skills arranged around the product problems they solve.
            </h2>
          </div>
          <p className="skills-reveal section-copy max-w-3xl lg:justify-self-end">
            The technical stack is strongest when it supports a clear user flow. I work across frontend, backend, data, and AI so product decisions can move without waiting on handoffs between layers.
          </p>
        </div>

        <div className="skills-reveal mt-12 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="grid gap-3" role="tablist" aria-label="Skill tracks">
            {tracks.map(({ id, label, icon: Icon }) => {
              const isActive = activeTrack === id;

              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`track-panel-${id}`}
                  className={`flex items-center justify-between rounded-lg border px-4 py-4 text-left transition ${
                    isActive
                      ? 'border-ink-950 bg-ink-950 text-paper-50 shadow-[0_18px_44px_rgba(17,24,39,0.18)]'
                      : 'border-ink-950/12 bg-white/62 text-ink-800 hover:border-accent-teal/42 hover:bg-white/82'
                  }`}
                  onClick={() => setActiveTrack(id)}
                >
                  <span className="flex items-center gap-3 text-sm font-extrabold">
                    <Icon className="h-5 w-5" />
                    {label}
                  </span>
                  <Workflow className={`h-4 w-4 ${isActive ? 'text-accent-lime' : 'text-ink-500'}`} />
                </button>
              );
            })}
          </div>

          <div id={`track-panel-${selected.id}`} role="tabpanel" className="surface-panel rounded-lg p-5 sm:p-7">
            <div className="flex flex-col gap-5 border-b border-ink-950/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${selected.color}`}>
                  <SelectedIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl">
                  {selected.title}
                </h3>
              </div>
              <span className="rounded-lg border border-ink-950/12 bg-paper-100 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-ink-600">
                {selected.label}
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-ink-700">{selected.description}</p>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Tools</p>
                <div className="mt-4 chip-row">
                  {selected.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Proof points</p>
                <div className="mt-4 grid gap-3">
                  {selected.proof.map((item) => (
                    <div key={item} className="rounded-lg border border-ink-950/10 bg-white/68 px-4 py-3 text-sm font-bold text-ink-800">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
