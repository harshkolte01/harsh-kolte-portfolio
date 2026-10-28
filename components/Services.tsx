import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { engagementModels, processSteps, services } from '../data/site';
import SectionHeader from './SectionHeader';
import { gsap, prefersReducedMotion, useGSAP, useMagnetic, useReveal, useSplitReveal } from '../lib/motion';

const Services: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  const cta = useMagnetic<HTMLAnchorElement>(0.2);
  useReveal(scope);
  useSplitReveal(scope);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        '.process-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: '.process-list', start: 'top 80%', end: 'bottom 60%', scrub: true },
        }
      );
    },
    { scope }
  );

  return (
    <section ref={scope} id="services" aria-labelledby="services-heading" className="section bg-bg-2">
      <div className="container-x">
        <SectionHeader
          index="02"
          label="Freelance & contract"
          id="services-heading"
          title="Have something to build? Let’s make it real."
          aside={
            <>
              I take on a small number of projects at a time so each one gets proper attention — from founders validating an idea
              to teams that need an extra engineer for a quarter.
            </>
          }
        />

        <ul className="mt-16 border-t border-line md:mt-24">
          {services.map((service, index) => (
            <li
              key={service.title}
              data-reveal
              className="group grid gap-5 border-b border-line py-9 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8 lg:py-12"
            >
              <span className="font-mono text-[12px] text-faint transition-colors duration-300 group-hover:text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[clamp(1.625rem,2.6vw,2.5rem)] font-medium leading-[1.05] tracking-[-0.04em]">{service.title}</h3>
              <div>
                <p className="text-[16px] leading-relaxed text-muted">{service.copy}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid gap-14 lg:mt-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow">Ways to work together</p>
            <ul className="mt-6 space-y-3">
              {engagementModels.map((model) => (
                <li key={model.label} className="rounded-2xl border border-line p-5 transition-colors duration-300 hover:border-line-strong">
                  <p className="text-[17px] font-medium tracking-[-0.02em]">{model.label}</p>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{model.copy}</p>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="flex flex-col">
            <p className="eyebrow">How a project runs</p>
            <ol className="process-list relative mt-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
              <span className="process-line absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-accent xl:block" aria-hidden="true" />
              <span className="absolute left-0 right-0 top-[5px] hidden h-px bg-line xl:block" aria-hidden="true" />
              {processSteps.map((step) => (
                <li key={step.step} className="relative">
                  <span className="relative z-10 block h-[11px] w-[11px] rounded-full border border-accent bg-bg-2" aria-hidden="true" />
                  <p className="mt-5 font-mono text-[12px] text-faint">{step.step}</p>
                  <p className="mt-1 text-[19px] font-medium tracking-[-0.02em]">{step.title}</p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{step.copy}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col gap-6 rounded-[24px] border border-line bg-bg p-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
              <p className="max-w-[34ch] text-[17px] leading-snug tracking-[-0.015em]">
                Send a short brief — what you’re building, who it’s for and when you need it.
              </p>
              <a ref={cta} href="#contact" className="btn btn-primary shrink-0">
                Get a quote
                <ArrowUpRight className="btn-arrow h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
