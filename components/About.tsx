import React, { useRef } from 'react';
import { ArrowUpRight, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: 'Clear first screen',
    copy: 'I design the first interaction around what matters: who the product is for, what it does, and what the user should trust next.',
    icon: Sparkles,
  },
  {
    title: 'Systems over decoration',
    copy: 'I use reusable components, layout rules, and clean state boundaries so the interface can grow without becoming fragile.',
    icon: Layers3,
  },
  {
    title: 'Engineering that holds up',
    copy: 'I care about reliable APIs, readable data contracts, and implementation details that stay manageable after launch.',
    icon: ShieldCheck,
  },
];

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.about-reveal',
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
    <section id="about" aria-labelledby="about-heading" className="section-shell bg-paper-50/78" ref={containerRef}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="about-reveal">
          <span className="section-label">About</span>
          <h2 id="about-heading" className="section-title mt-6">
            A full stack developer with a product designer&apos;s eye for flow.
          </h2>
          <p className="section-copy mt-6">
            I am {siteConfig.name}, based in {siteConfig.location}. I enjoy building web products that feel composed on the surface and disciplined underneath: clean UI, strong data handling, practical backend structure, and AI features that fit the workflow instead of feeling pasted on.
          </p>
          <a href="#contact" className="button-primary mt-8">
            Start a project conversation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-4">
          {principles.map(({ title, copy, icon: Icon }) => (
            <article key={title} className="about-reveal surface-panel rounded-lg p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-paper-50">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink-950">{title}</h3>
                  <p className="mt-3 text-base leading-8 text-ink-700">{copy}</p>
                </div>
              </div>
            </article>
          ))}

          <div className="about-reveal grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-ink-950/12 bg-night-950 p-5 text-paper-50">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-teal">Best fit</p>
              <p className="mt-4 text-lg font-extrabold leading-7">
                Product teams that need a developer who can reason through UI, APIs, and user workflows together.
              </p>
            </div>
            <div className="rounded-lg border border-ink-950/12 bg-white/72 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-600">Current interest</p>
              <p className="mt-4 text-lg font-extrabold leading-7 text-ink-950">
                AI-assisted product experiences, data-heavy tools, and SaaS dashboards with excellent usability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
