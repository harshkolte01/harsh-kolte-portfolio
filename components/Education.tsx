import React, { useRef } from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationSignals = [
  { label: 'Degree', value: 'Bachelor of Engineering in Computer Engineering', icon: GraduationCap },
  { label: 'Duration', value: '2022 - 2026', icon: BookOpen },
  { label: 'CGPA', value: '8.09', icon: Award },
];

const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.education-reveal',
      { y: 42, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.82,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 84%', once: true },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="education" aria-labelledby="education-heading" className="section-shell" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="education-reveal grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <span className="section-label">Education</span>
            <h2 id="education-heading" className="section-title mt-6">
              Engineering foundation built through projects and practical systems.
            </h2>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            Computer engineering gave me the fundamentals. The practical learning came from building full stack products, debugging real workflows, and applying the same discipline to interface quality.
          </p>
        </div>

        <article className="education-reveal mt-12 grid gap-6 rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_22px_60px_rgba(17,24,39,0.08)] lg:grid-cols-[0.44fr_0.56fr] sm:p-7">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Institution</p>
            <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-950">
              SAL Institute of Technology and Engineering Research
            </h3>
            <p className="mt-3 text-base font-bold text-ink-700">Gujarat Technological University</p>
            <p className="mt-5 text-base leading-8 text-ink-700">
              The academic base supports the practical direction of my portfolio: web systems, product thinking, data workflows, and reliable implementation.
            </p>
          </div>

          <div className="grid gap-4">
            {educationSignals.map(({ label, value, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-ink-950/12 bg-paper-50/74 p-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink-950 text-paper-50">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">{label}</p>
                    <p className="mt-2 text-base font-extrabold leading-7 text-ink-950">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
