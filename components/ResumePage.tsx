import React, { useRef } from 'react';
import { ArrowUpRight, Briefcase, Code2, Download, GraduationCap, Mail, MapPin, Share2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { featuredProjects, siteConfig } from '../data/site';

const ResumePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.resume-reveal',
      { y: 34, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.72, stagger: 0.08, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  const handleShare = async () => {
    const resumeUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.resumeTitle,
          text: 'Check out Harsh Kolte resume.',
          url: resumeUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      await navigator.clipboard.writeText(resumeUrl);
      alert('Resume link copied to clipboard.');
    }
  };

  return (
    <article className="section-shell pt-12 sm:pt-16" ref={containerRef}>
      <div className="mx-auto max-w-6xl">
        <header className="resume-reveal rounded-lg border border-white/14 bg-night-950 p-5 text-paper-50 shadow-[0_28px_80px_rgba(5,7,13,0.26)] sm:p-7">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="section-label border-white/14 bg-white/8 text-paper-50/74">Resume</span>
              <h1 className="mt-6 font-display text-5xl font-bold leading-none text-white sm:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-paper-50/68">
                Full stack developer focused on React product interfaces, Node.js APIs, data-heavy workflows, and AI-enabled product experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-paper-50/76">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/7 px-3 py-2">
                  <MapPin className="h-4 w-4 text-accent-orange" />
                  {siteConfig.location}
                </span>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/7 px-3 py-2 transition hover:border-accent-teal/46 hover:text-white">
                  <Mail className="h-4 w-4 text-accent-teal" />
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={handleShare} className="button-secondary border-white/14 bg-white/8 text-paper-50 hover:bg-white/14 hover:text-white">
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <a href={siteConfig.resumePdfHref} download="Harsh_Kolte_Resume.pdf" className="button-primary border-accent-teal bg-accent-teal text-night-950">
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.38fr_0.62fr]">
          <aside className="space-y-6">
            <section className="resume-reveal rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Profile</p>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                Product-minded full stack developer comfortable moving from interface structure to backend logic while keeping usability clear.
              </p>
            </section>

            <section className="resume-reveal rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Core stack</p>
              <div className="mt-4 chip-row">
                {siteConfig.primaryFocus.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="resume-reveal rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)]">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">Education</p>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink-950">B.E. in Computer Engineering</h2>
              <p className="mt-2 text-sm font-bold text-ink-800">SAL Institute of Technology and Engineering Research (GTU)</p>
              <p className="mt-3 text-sm leading-7 text-ink-700">2022 - 2026 | CGPA 8.09</p>
            </section>
          </aside>

          <div className="space-y-6">
            <section className="resume-reveal rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)] sm:p-6">
              <h2 className="flex items-center gap-3 font-display text-3xl font-bold text-ink-950">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-950 text-paper-50">
                  <Briefcase className="h-5 w-5" />
                </span>
                Experience
              </h2>
              <div className="mt-6 rounded-lg border border-ink-950/12 bg-paper-50/68 p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-ink-950">Space Applications Centre, ISRO</h3>
                    <p className="mt-1 text-sm font-extrabold text-accent-teal">Trainee</p>
                    <p className="mt-2 text-sm text-ink-600">Payload Checkout Software and Vision Control Department</p>
                  </div>
                  <p className="text-sm font-extrabold text-ink-600">Jan 2026 - Mar 2026</p>
                </div>
                <div className="mt-5 grid gap-3">
                  <p className="rounded-lg border border-ink-950/10 bg-white/70 px-4 py-3 text-sm leading-7 text-ink-700">
                    Built a web-based HDF Viewer for data analytics and integrated it into the SAC web portal.
                  </p>
                  <p className="rounded-lg border border-ink-950/10 bg-white/70 px-4 py-3 text-sm leading-7 text-ink-700">
                    Engineered browser-side parsing, analysis, and visualization workflows for large HDF5 data files.
                  </p>
                </div>
                <a href={siteConfig.hdfViewerUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-accent-blue">
                  View HDF Viewer
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section className="resume-reveal rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)] sm:p-6">
              <h2 className="flex items-center gap-3 font-display text-3xl font-bold text-ink-950">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-teal text-night-950">
                  <Code2 className="h-5 w-5" />
                </span>
                Selected Projects
              </h2>
              <div className="mt-6 grid gap-4">
                {featuredProjects.map((project) => (
                  <article key={project.title} className="rounded-lg border border-ink-950/12 bg-paper-50/68 p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ink-500">{project.category}</p>
                        <h3 className="mt-2 font-display text-2xl font-bold text-ink-950">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-ink-700">{project.description}</p>
                      </div>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-extrabold text-accent-blue">
                          Open
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-lg bg-white/80 px-3 py-1.5 text-xs font-extrabold text-ink-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-reveal rounded-lg border border-ink-950/12 bg-white/72 p-5 shadow-[0_18px_50px_rgba(17,24,39,0.07)] sm:p-6">
              <h2 className="flex items-center gap-3 font-display text-3xl font-bold text-ink-950">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-orange text-night-950">
                  <GraduationCap className="h-5 w-5" />
                </span>
                Summary
              </h2>
              <p className="mt-5 text-base leading-8 text-ink-700">
                I enjoy building products where usability, performance, and technical clarity all matter. My strongest fit is modern web application development with React, Node.js, data workflows, and AI-enabled product thinking.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResumePage;
