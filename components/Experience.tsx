import React, { useRef } from 'react';
import { ArrowUpRight, Calendar, Database, MapPin, Satellite, Workflow } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const outcomes = [
  'Built a web-based HDF Viewer for data analytics and integrated it into the SAC portal.',
  'Worked with browser-side parsing, analysis, and visualization of complex HDF5 data files.',
  'Learned how technical interfaces need careful hierarchy when the data is dense and specialized.',
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.experience-reveal',
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
    <section id="experience" aria-labelledby="experience-heading" className="section-shell bg-night-950 text-paper-50" ref={containerRef}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="experience-reveal">
          <span className="section-label border-white/14 bg-white/8 text-paper-50/74">Experience</span>
          <h2 id="experience-heading" className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Real technical work inside a high-context data environment.
          </h2>
          <p className="mt-6 text-base leading-8 text-paper-50/68">
            The ISRO SAC trainee experience shaped how I think about technical products: accuracy, hierarchy, and user confidence matter when the interface is sitting on top of complex data.
          </p>
        </div>

        <article className="experience-reveal rounded-lg border border-white/14 bg-white/7 p-5 shadow-[0_28px_80px_rgba(5,7,13,0.32)] sm:p-7">
          <div className="flex flex-col gap-6 border-b border-white/12 pb-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-teal text-night-950">
                <Satellite className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-3xl font-bold leading-tight text-white">Space Applications Centre, ISRO</h3>
              <p className="mt-2 text-lg font-extrabold text-accent-teal">Trainee | Payload Checkout Software and Vision Control Department</p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-paper-50/68">
                Focused on web-based data analytics tooling for HDF5 payload data, with an emphasis on making technical exploration possible directly inside the browser.
              </p>
            </div>

            <div className="grid gap-3 text-sm font-extrabold text-paper-50/76">
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/7 px-4 py-3">
                <Calendar className="h-4 w-4 text-accent-lime" />
                Jan 2026 - Mar 2026
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/7 px-4 py-3">
                <MapPin className="h-4 w-4 text-accent-orange" />
                Ahmedabad
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-white/12 bg-white/7 p-4">
              <Database className="h-5 w-5 text-accent-teal" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-paper-50/48">Project</p>
              <p className="mt-3 text-sm font-bold leading-6 text-paper-50/84">Web-based HDF Viewer for SAC portal workflows.</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/7 p-4">
              <Workflow className="h-5 w-5 text-accent-lime" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-paper-50/48">Challenge</p>
              <p className="mt-3 text-sm font-bold leading-6 text-paper-50/84">Make large scientific data easier to inspect through browser UI.</p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/7 p-4">
              <Satellite className="h-5 w-5 text-accent-orange" />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-paper-50/48">Takeaway</p>
              <p className="mt-3 text-sm font-bold leading-6 text-paper-50/84">Complex systems need simple visual structure to become usable.</p>
            </div>
          </div>

          <div className="mt-7 space-y-3">
            {outcomes.map((item) => (
              <div key={item} className="flex gap-4 rounded-lg border border-white/12 bg-white/7 px-4 py-4">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-teal" />
                <p className="text-sm leading-7 text-paper-50/72">{item}</p>
              </div>
            ))}
          </div>

          <a href={siteConfig.hdfViewerUrl} target="_blank" rel="noopener noreferrer" className="button-secondary mt-7 border-white/14 bg-white/8 text-paper-50 hover:bg-white/14 hover:text-white">
            View HDF Viewer
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Experience;
