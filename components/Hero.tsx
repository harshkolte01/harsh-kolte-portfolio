import React, { useRef } from 'react';
import { ArrowRight, BriefcaseBusiness, Sparkles } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { siteConfig } from '../data/site';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-animate-1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1 })
      .fromTo('.hero-animate-2', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-animate-3', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.45')
      .fromTo('.hero-animate-4', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, '-=0.45')
      .fromTo('.hero-animate-5', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }, '-=0.35');
  }, { scope: containerRef });

  return (
    <section id="home" aria-labelledby="hero-heading" className="px-6 pb-20 pt-16 sm:pt-20" ref={containerRef}>
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <span className="section-kicker hero-animate-1">{siteConfig.heroEyebrow}</span>
          <h1 id="hero-heading" className="hero-animate-2 mt-6 font-display text-5xl leading-[0.95] tracking-[-0.06em] text-ink-950 sm:text-6xl lg:text-[5.4rem]">
            {siteConfig.name}
          </h1>
          <p className="hero-animate-3 mt-5 max-w-2xl font-display text-2xl leading-snug tracking-[-0.04em] text-ink-800 sm:text-[2.2rem]">
            {siteConfig.heroHeadline}
          </p>
          <p className="hero-animate-4 mt-6 max-w-2xl text-lg leading-8 text-ink-700">
            I help teams turn product ideas into modern interfaces, reliable APIs, and thoughtful user experiences. My best work sits where strong design taste meets practical engineering.
          </p>

          <div className="hero-animate-5 mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="button-primary">
              See selected work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="button-secondary">
              Start a conversation
            </a>
          </div>

          <div className="hero-animate-5 mt-10 chip-row">
            {siteConfig.primaryFocus.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-animate-5 mt-10 grid gap-4 sm:grid-cols-3">
            {siteConfig.heroProof.map((item, index) => (
              <div key={item} className="feature-outline rounded-[1.5rem] bg-white/62 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500">Proof 0{index + 1}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink-900">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-animate-5 relative xl:pb-28">
          <div className="glass-card rounded-[2rem] p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.7rem] bg-ink-950 p-6 text-paper-50 shadow-[0_40px_100px_rgba(23,25,31,0.18)] sm:p-7">
              <div className="absolute -right-14 top-0 h-44 w-44 rounded-full bg-accent-blue/25 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-accent-teal/25 blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/35"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/55"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/75"></span>
                  </div>
                  <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-paper-100/80">
                    Interface Canvas
                  </span>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-paper-100/70">
                      <span>Signature approach</span>
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.04em]">
                      Clean systems, polished visuals, and product-minded builds.
                    </h2>
                    <div className="mt-6 space-y-3">
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-paper-100/70">Frontend</p>
                        <p className="mt-2 text-sm text-paper-100/90">Editorial layouts, premium UI, strong responsiveness.</p>
                      </div>
                      <div className="rounded-2xl bg-white/10 p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-paper-100/70">Backend</p>
                        <p className="mt-2 text-sm text-paper-100/90">Authentication, APIs, analytics pipelines, and integrations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/92 p-5 text-ink-900">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Currently focused</p>
                      <p className="mt-3 font-display text-2xl leading-tight tracking-[-0.04em]">AI-driven SaaS and data-heavy dashboards</p>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-accent-blue/18 p-5">
                      <div className="flex items-center justify-between text-sm font-semibold text-paper-50">
                        <span>Open for opportunities</span>
                        <BriefcaseBusiness className="h-4 w-4" />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-paper-50/86">
                        Full-time roles, product engineering teams, and select freelance builds where UI quality matters.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-paper-100/70">Stack</p>
                    <p className="mt-2 text-sm font-semibold">React | Node.js | TypeScript</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-paper-100/70">Location</p>
                    <p className="mt-2 text-sm font-semibold">{siteConfig.location}</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/8 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-paper-100/70">Best fit</p>
                    <p className="mt-2 text-sm font-semibold">Product teams that care about UX quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 hidden rounded-[1.5rem] border border-ink-950/8 bg-white/92 px-5 py-4 shadow-[0_18px_40px_rgba(23,25,31,0.07)] sm:block xl:absolute xl:bottom-0 xl:left-3 xl:right-3 xl:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Working style</p>
            <p className="mt-2 text-sm font-semibold text-ink-900">Fast iteration, clean implementation, and details that hold up in production.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
