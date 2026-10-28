import React, { useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import HeroField from './HeroField';
import { EASE, SplitWords, gsap, prefersReducedMotion, useGSAP, useLocalTime, useMagnetic } from '../lib/motion';

const facts = [
  { label: 'Currently', value: siteConfig.currently, href: '#work' },
  { label: 'Previously', value: 'Trainee at ISRO SAC' },
  { label: 'Public repos', value: '75+ on GitHub', href: siteConfig.githubUrl },
  { label: 'Based in', value: `${siteConfig.location}` },
];

const Hero: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  const cta = useMagnetic<HTMLAnchorElement>(0.2);
  const time = useLocalTime(siteConfig.timeZone);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from('.hero-meta', { y: 16, opacity: 0, duration: 1, stagger: 0.06 })
        .from('.hero-title .split-word', { yPercent: 110, duration: 1.4, stagger: 0.05 }, 0.1)
        .from('.hero-fade', { y: 24, opacity: 0, duration: 1.2, stagger: 0.08 }, 0.6)
        .from('.hero-fact', { y: 20, opacity: 0, duration: 1, stagger: 0.06 }, 0.85)
        .from('.hero-rule', { scaleX: 0, transformOrigin: 'left center', duration: 1.6, ease: 'expo.inOut' }, 0.5);

      // Content drifts up and dims slightly as the hero scrolls away.
      gsap.to('.hero-inner', {
        yPercent: -8,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: { trigger: scope.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} aria-labelledby="hero-heading" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16 md:pt-[72px]">
      <HeroField />

      <div className="hero-inner container-x relative flex flex-1 flex-col">
        <div className="flex items-center justify-between pt-8 font-mono text-[12px] uppercase tracking-[0.04em] text-muted md:pt-12">
          <span className="hero-meta">Portfolio ’26</span>
          <span className="hero-meta hidden sm:block">{siteConfig.role}</span>
          <span className="hero-meta">{time} IST</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 md:py-20">
          <p className="hero-fade mb-8 inline-flex items-center gap-3 text-[14px] text-muted md:mb-10">
            <span className="status-dot" aria-hidden="true" />
            {siteConfig.availability}
          </p>

          <h1 id="hero-heading" className="hero-title display max-w-[15ch] text-[clamp(3rem,9.2vw,9.5rem)]">
            <SplitWords text="I build AI agents," />{' '}
            <SplitWords text="desktop apps" wordClassName="serif-em text-accent" />{' '}
            <SplitWords text="& the web around them." />
          </h1>

          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr_auto] md:items-end">
            <p className="hero-fade lede max-w-[46ch]">
              I’m Harsh Kolte, a full-stack engineer who takes products from an empty repository to something people install,
              sign into and rely on. Lately: an agent workspace, a screen-capture app, and satellite data tooling at ISRO.
            </p>
            <div className="hero-fade flex flex-wrap gap-3">
              <a ref={cta} href="#contact" className="btn btn-primary">
                Start a project
                <ArrowUpRight className="btn-arrow h-4 w-4" />
              </a>
              <a href="#work" className="btn btn-ghost">
                Selected work
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-8 md:pb-10">
          <div className="hero-rule hairline" />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 pt-6 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label} className="hero-fact">
                <dt className="font-mono text-[11.5px] uppercase tracking-[0.04em] text-faint">{fact.label}</dt>
                <dd className="mt-1.5 text-[15px] text-fg">
                  {fact.href ? (
                    <a
                      href={fact.href}
                      className="link-underline"
                      {...(fact.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
