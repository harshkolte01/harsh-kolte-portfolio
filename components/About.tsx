import React, { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  'Design systems that feel intentional instead of generic.',
  'Backend structure that stays maintainable after launch.',
  'Interfaces that make complex workflows feel straightforward.',
];

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.about-block',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true } }
    );
  }, { scope: containerRef });

  return (
    <section id="about" aria-labelledby="about-heading" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="about-block opacity-0">
          <span className="section-kicker">About</span>
          <h2 id="about-heading" className="section-heading mt-6">
            Building polished web experiences without losing engineering rigor.
          </h2>
          <p className="section-copy mt-6">
            I am {siteConfig.name}, a full stack developer based in {siteConfig.location}. I care about products that feel calm, useful, and sharp on the surface while still being cleanly engineered underneath.
          </p>
        </div>

        <div className="space-y-6">
          <div className="about-block glass-card rounded-[2rem] p-8 opacity-0 sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-paper-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-600">
                How I work
              </span>
              <Sparkles className="h-5 w-5 text-accent-blue" />
            </div>
            <p className="mt-6 text-lg leading-8 text-ink-800">
              My best work usually happens where product clarity, interface quality, and full stack execution need to come together. I enjoy moving from system design to UI detail without dropping quality in either layer, and I also have practical experience working with Claude Code and Codex inside modern AI-assisted development workflows.
            </p>
            <div className="mt-8 space-y-4">
              {principles.map((item) => (
                <div key={item} className="feature-outline flex items-start gap-4 rounded-[1.4rem] px-5 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent-teal"></span>
                  <p className="text-sm font-semibold leading-7 text-ink-800">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block grid gap-6 opacity-0 md:grid-cols-2">
            <div className="glass-card rounded-[1.8rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">What I enjoy most</p>
              <p className="mt-4 text-base leading-8 text-ink-700">
                Product dashboards, AI features, collaborative tools, and interfaces where information density needs strong visual order. I also enjoy building AI-integrated applications using Claude and OpenAI models where product UX matters as much as the model output.
              </p>
            </div>
            <div className="glass-card rounded-[1.8rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Looking for</p>
              <p className="mt-4 text-base leading-8 text-ink-700">
                Teams that care about product quality, user experience, and developers who can think across the full stack.
              </p>
              <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue">
                Let&apos;s connect
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
