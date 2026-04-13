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

    gsap.fromTo('.edu-header',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

    gsap.fromTo('.edu-card',
      { y: 80, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: 'expo.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } }
    );
  }, { scope: containerRef });

  return (
    <section id="education" aria-labelledby="education-heading" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-3xl mx-auto">
        <div className="edu-header flex items-center gap-4 mb-16 opacity-0 translate-y-10">
          <h2 id="education-heading" className="text-3xl md:text-4xl font-display font-bold text-slate-200">
            Education
          </h2>
          <div className="h-[1px] bg-navy-700/50 flex-grow max-w-xs ml-4"></div>
        </div>

        <article className="edu-card opacity-0 glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(189,52,254,0.1)] transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-purple/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 group-hover:bg-accent-purple/20 transition-colors duration-700"></div>

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="flex-shrink-0 mt-2">
              <div className="w-14 h-14 bg-navy-800/80 rounded-full flex items-center justify-center border border-accent-purple/30 shadow-[0_0_15px_rgba(189,52,254,0.2)]">
                <GraduationCap className="w-6 h-6 text-accent-cyan" />
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-accent-cyan transition-colors duration-300">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-accent-cyan/90 font-mono text-[15px] mb-6 inline-block px-3 py-1 bg-navy-800/50 rounded flex gap-2 border border-slate-700/30">
                SAL Institute of Technology and Engineering Research (GTU)
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-slate-400 font-mono bg-navy-900/40 p-3 rounded-lg border border-white/5 inline-flex w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-purple rounded-full shadow-[0_0_5px_#bd34fe]"></span>
                  <time dateTime="2022">2022</time> - <time dateTime="2026">2026</time>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-purple rounded-full shadow-[0_0_5px_#bd34fe]"></span>
                  CGPA: 7.83
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
