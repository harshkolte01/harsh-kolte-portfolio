import React, { useRef } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Calendar, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.experience-block',
      { y: 45, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 82%', once: true } }
    );
  }, { scope: containerRef });

  return (
    <section id="experience" aria-labelledby="experience-heading" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="experience-block opacity-0">
          <span className="section-kicker">Experience</span>
          <h2 id="experience-heading" className="section-heading mt-6">
            Hands-on experience with data-heavy tooling and real product constraints.
          </h2>
          <p className="section-copy mt-6">
            My experience at ISRO pushed me toward structured systems, data workflows, and interfaces that have to stay usable even when the underlying logic is highly technical.
          </p>
        </div>

        <article className="experience-block glass-card rounded-[2rem] p-8 opacity-0 sm:p-10">
          <div className="flex flex-col gap-6 border-b border-ink-950/8 pb-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue">
                <BriefcaseBusiness className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-[-0.04em] text-ink-950">SPACE APPLICATION CENTER, ISRO</h3>
              <p className="mt-2 text-lg font-semibold text-ink-800">Trainee</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-ink-700">
                Worked on data analytics tooling for the SAC web portal, focusing on browser-based exploration of complex HDF5 data and frontend experiences for technical users.
              </p>
            </div>

            <div className="grid gap-3 text-sm font-semibold text-ink-700">
              <div className="feature-outline flex items-center gap-3 rounded-2xl px-4 py-3">
                <Calendar className="h-4 w-4 text-accent-blue" />
                Jan 2026 - Mar 2026
              </div>
              <div className="feature-outline flex items-center gap-3 rounded-2xl px-4 py-3">
                <MapPin className="h-4 w-4 text-accent-teal" />
                Ahmedabad
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="feature-outline rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Project</p>
              <p className="mt-3 text-sm font-semibold leading-7 text-ink-900">Web-based HDF Viewer integrated into the SAC portal.</p>
            </div>
            <div className="feature-outline rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Technical challenge</p>
              <p className="mt-3 text-sm font-semibold leading-7 text-ink-900">Parsing and visualizing large HDF5 data directly in the browser.</p>
            </div>
            <div className="feature-outline rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Takeaway</p>
              <p className="mt-3 text-sm font-semibold leading-7 text-ink-900">Make complex technical systems accessible through better UI structure.</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="feature-outline flex items-start gap-4 rounded-[1.5rem] px-5 py-4">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-blue"></span>
              <p className="text-sm leading-7 text-ink-700">
                Built a browser-based <strong className="text-ink-900">HDF Viewer</strong> for data analytics and integrated it into the SAC web portal to improve access to scientific payload data.
              </p>
            </div>
            <div className="feature-outline flex items-start gap-4 rounded-[1.5rem] px-5 py-4">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-teal"></span>
              <p className="text-sm leading-7 text-ink-700">
                Engineered satellite data pipelines that parse, analyze, and visualize complex large-scale HDF5 file formats directly in the browser.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-paper-100 px-4 py-2 text-sm font-semibold text-ink-700">
              Payload Checkout Software and Vision Control Department
              <ArrowUpRight className="h-4 w-4 text-ink-500" />
            </div>
            <a
              href={siteConfig.hdfViewerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary text-sm"
            >
              View HDF Viewer
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
