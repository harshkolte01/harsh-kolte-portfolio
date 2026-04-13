import React, { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.education-block',
      { y: 45, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 84%', once: true } }
    );
  }, { scope: containerRef });

  return (
    <section id="education" aria-labelledby="education-heading" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="education-block max-w-3xl opacity-0">
          <span className="section-kicker">Education</span>
          <h2 id="education-heading" className="section-heading mt-6">
            Computer engineering foundation with a focus on practical application.
          </h2>
        </div>

        <article className="education-block mt-12 grid gap-8 rounded-[2rem] border border-ink-950/8 bg-white/80 p-8 opacity-0 shadow-[0_28px_64px_rgba(34,40,50,0.06)] lg:grid-cols-[0.34fr_1fr] sm:p-10">
          <div className="glass-card flex flex-col items-start justify-between rounded-[1.8rem] p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-orange/12 text-accent-orange">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Duration</p>
              <p className="mt-2 text-sm font-semibold text-ink-900">2022 - 2026</p>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">CGPA</p>
              <p className="mt-2 text-sm font-semibold text-ink-900">8.09</p>
            </div>
          </div>

          <div className="rounded-[1.8rem] bg-white/74 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Degree</p>
            <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] text-ink-950">
              Bachelor of Engineering in Computer Engineering
            </h3>
            <p className="mt-3 text-lg font-semibold text-ink-800">
              SAL Institute of Technology and Engineering Research (GTU)
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-ink-700">
              The academic base gave me the engineering fundamentals, while projects and internships shaped how I apply those skills in real products and web systems.
            </p>

            <div className="mt-6 chip-row">
              <span className="chip">Computer engineering</span>
              <span className="chip">Systems thinking</span>
              <span className="chip">Practical development</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
