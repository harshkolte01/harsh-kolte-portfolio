import React, { useRef } from 'react';
import { Database, Layout, Server, Workflow } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Frontend systems',
    description: 'Responsive layouts, strong visual hierarchy, reusable components, and interfaces that feel sharp on desktop and mobile.',
    icon: Layout,
    accent: 'bg-accent-blue/10 text-accent-blue',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'UI architecture'],
  },
  {
    title: 'Backend foundations',
    description: 'APIs, authentication, product logic, and system structure that keeps complex flows reliable and readable.',
    icon: Server,
    accent: 'bg-accent-teal/10 text-accent-teal',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT / OAuth'],
  },
  {
    title: 'Data and AI flows',
    description: 'Data-heavy web tools, search and filtering, analytics views, and AI integration where product behavior needs intelligence, including applications powered by Claude and OpenAI models.',
    icon: Database,
    accent: 'bg-accent-orange/12 text-accent-orange',
    items: ['MongoDB', 'PostgreSQL', 'Claude / OpenAI APIs', 'AI integration'],
  },
  {
    title: 'Delivery workflow',
    description: 'Practical execution from Git workflow to iteration speed, debugging discipline, and keeping the UX stable while shipping, including AI-assisted development workflows.',
    icon: Workflow,
    accent: 'bg-paper-100 text-ink-900',
    items: ['Claude Code', 'Codex', 'Git & GitHub', 'Postman'],
  },
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.skills-block',
      { y: 45, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true } }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" aria-labelledby="skills-heading" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="skills-block max-w-3xl opacity-0">
          <span className="section-kicker">Capabilities</span>
          <h2 id="skills-heading" className="section-heading mt-6">
            The stack matters, but the real value is how the pieces work together.
          </h2>
          <p className="section-copy mt-6">
            I like building systems where the interface, the product logic, and the data layer reinforce each other. That usually creates cleaner products and a better experience for users.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map(({ title, description, icon: Icon, accent, items }) => (
            <article key={title} className="skills-block glass-card rounded-[2rem] p-7 opacity-0">
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Core area
                </span>
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-[-0.04em] text-ink-950">{title}</h3>
              <p className="mt-4 text-base leading-8 text-ink-700">{description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span key={item} className="rounded-full bg-paper-100 px-4 py-2 text-sm font-semibold text-ink-800">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
