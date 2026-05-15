import React, { useRef } from 'react';
import { ArrowRight, BrainCircuit, Code2, Database, Gauge, MapPin, Sparkles, Terminal, Zap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { siteConfig } from '../data/site';

const buildStats = [
  { value: '03+', label: 'shipped product builds' },
  { value: '2026', label: 'ISRO SAC technical work' },
  { value: '4x', label: 'UI, API, data, AI coverage' },
];

const liveSignals = [
  { label: 'Frontend', value: 'React systems', icon: Code2 },
  { label: 'Backend', value: 'Node APIs', icon: Terminal },
  { label: 'Data', value: 'HDF5 + analytics', icon: Database },
  { label: 'AI', value: 'Claude + OpenAI', icon: BrainCircuit },
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-reveal', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.78, stagger: 0.09, delay: 0.08 })
      .fromTo('.hero-console', { y: 28, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.8 }, '-=0.48')
      .fromTo('.signal-bar', { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.65, stagger: 0.08 }, '-=0.36');
  }, { scope: containerRef });

  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-night-950 px-6 pb-20 pt-14 text-paper-50 sm:pt-20" ref={containerRef}>
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="max-w-4xl">
          <span className="hero-reveal section-label border-white/16 bg-white/8 text-paper-50/78">
            {siteConfig.heroEyebrow}
          </span>

          <h1 id="hero-heading" className="hero-reveal mt-7 font-display text-5xl font-bold leading-none text-white sm:text-7xl lg:text-8xl">
            {siteConfig.name}
          </h1>

          <p className="hero-reveal mt-6 max-w-3xl text-2xl font-extrabold leading-tight text-paper-50 sm:text-4xl">
            {siteConfig.heroHeadline}
          </p>

          <p className="hero-reveal mt-6 max-w-2xl text-base leading-8 text-paper-50/72 sm:text-lg">
            I turn rough product ideas into clean interfaces, working data flows, and production-ready full stack systems. The focus is simple: make the product feel clear, fast, and worth trusting.
          </p>

          <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary border-accent-teal bg-accent-teal text-night-950 shadow-[0_18px_42px_rgba(19,184,166,0.22)]">
              View work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="button-secondary border-white/14 bg-white/8 text-paper-50 hover:bg-white/14 hover:text-white">
              Build together
              <Sparkles className="h-4 w-4" />
            </a>
          </div>

          <div className="hero-reveal mt-8 chip-row">
            {siteConfig.primaryFocus.map((item) => (
              <span key={item} className="chip border-white/12 bg-white/8 text-paper-50/82">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-console surface-panel-dark rounded-lg p-4 sm:p-5">
          <div className="flex flex-col gap-4 border-b border-white/12 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent-teal">Build desk</p>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-white">Product system snapshot</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/8 px-3 py-2 text-sm font-extrabold text-paper-50/84">
              <span className="h-2 w-2 rounded-full bg-accent-lime" />
              Available
            </div>
          </div>

          <div className="grid gap-3 border-b border-white/12 py-5 sm:grid-cols-3">
            {buildStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/12 bg-white/7 p-4">
                <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-paper-50/56">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 py-5 sm:grid-cols-2">
            {liveSignals.map(({ label, value, icon: Icon }, index) => (
              <div key={label} className="rounded-lg border border-white/12 bg-white/7 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper-50/52">{label}</p>
                    <p className="mt-2 text-sm font-extrabold text-white">{value}</p>
                  </div>
                  <Icon className="h-5 w-5 text-accent-teal" />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`signal-bar h-full rounded-full ${
                      index === 0 ? 'w-[92%] bg-accent-teal' : index === 1 ? 'w-[84%] bg-accent-blue' : index === 2 ? 'w-[76%] bg-accent-orange' : 'w-[88%] bg-accent-lime'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 border-t border-white/12 pt-5 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-white/12 bg-white/7 p-4">
              <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                <MapPin className="h-4 w-4 text-accent-orange" />
                {siteConfig.location}
              </div>
              <p className="mt-3 text-sm leading-6 text-paper-50/68">
                Open to full-time product teams and selective freelance builds where design quality matters.
              </p>
            </div>

            <div className="rounded-lg border border-white/12 bg-white/7 p-4">
              <div className="flex items-center gap-2 text-sm font-extrabold text-white">
                <Gauge className="h-4 w-4 text-accent-teal" />
                Operating proof
              </div>
              <div className="mt-3 space-y-2">
                {siteConfig.heroProof.map((item) => (
                  <p key={item} className="flex items-start gap-2 text-sm leading-6 text-paper-50/68">
                    <Zap className="mt-1 h-3.5 w-3.5 shrink-0 text-accent-lime" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
