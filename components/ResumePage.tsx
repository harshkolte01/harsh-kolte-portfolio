import React, { useRef } from 'react';
import { ArrowUpRight, Briefcase, Code2, Download, GraduationCap, Share2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { featuredProjects, siteConfig } from '../data/site';

const ResumePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.resume-block',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  const handleShare = async () => {
    const resumeUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: siteConfig.resumeTitle,
          text: 'Check out Harsh Kolte\'s resume.',
          url: resumeUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(resumeUrl);
      alert('Resume link copied to clipboard.');
    }
  };

  return (
    <article className="px-6 py-16 sm:py-20" ref={containerRef}>
      <div className="mx-auto max-w-6xl">
        <div className="resume-block glass-card rounded-[2rem] p-8 opacity-0 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="section-kicker">Resume</span>
              <h1 className="mt-6 font-display text-5xl tracking-[-0.06em] text-ink-950 sm:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-700">
                Full stack developer focused on modern frontend systems, API-driven products, and AI-enabled workflows with strong attention to usability, including integrations built with Claude and OpenAI models.
              </p>
              <div className="mt-8 chip-row">
                <span className="chip">{siteConfig.location}</span>
                <span className="chip">{siteConfig.email}</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <button type="button" onClick={handleShare} className="button-secondary">
                Share
                <Share2 className="h-4 w-4" />
              </button>
              <a href={siteConfig.resumePdfHref} download="Harsh_Kolte_Resume.pdf" className="button-primary">
                Download PDF
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-6">
            <section className="resume-block glass-card rounded-[1.8rem] p-6 opacity-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Profile</p>
              <p className="mt-4 text-sm leading-8 text-ink-700">
                Product-minded full stack developer comfortable moving from UI structure to backend logic while keeping the user experience clean, with practical experience using Claude Code and Codex in development workflows.
              </p>
            </section>

            <section className="resume-block glass-card rounded-[1.8rem] p-6 opacity-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteConfig.primaryFocus.map((item) => (
                  <span key={item} className="rounded-full bg-paper-100 px-3 py-2 text-xs font-semibold text-ink-800">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="resume-block glass-card rounded-[1.8rem] p-6 opacity-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Education</p>
              <h2 className="mt-4 font-display text-2xl tracking-[-0.04em] text-ink-950">B.E. in Computer Engineering</h2>
              <p className="mt-2 text-sm font-semibold text-ink-800">SAL Institute of Technology and Engineering Research (GTU)</p>
              <p className="mt-3 text-sm leading-7 text-ink-700">2022 - 2026 | CGPA 8.09</p>
            </section>
          </aside>

          <div className="space-y-6">
            <section className="resume-block glass-card rounded-[1.8rem] p-8 opacity-0">
              <h2 className="flex items-center gap-3 font-display text-3xl tracking-[-0.04em] text-ink-950">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue">
                  <Briefcase className="h-5 w-5" />
                </span>
                Experience
              </h2>
              <div className="mt-8 rounded-[1.5rem] border border-ink-950/8 bg-white/70 p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-ink-950">SPACE APPLICATION CENTER, ISRO</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-blue">Trainee</p>
                    <p className="mt-2 text-sm text-ink-600">Payload Checkout Software and Vision Control Department</p>
                  </div>
                  <p className="text-sm font-semibold text-ink-600">Jan 2026 - Mar 2026</p>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="feature-outline flex items-start gap-4 rounded-[1.2rem] px-4 py-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-blue"></span>
                    <p className="text-sm leading-7 text-ink-700">Built a web-based HDF Viewer for data analytics and integrated it into the SAC web portal.</p>
                  </div>
                  <div className="feature-outline flex items-start gap-4 rounded-[1.2rem] px-4 py-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-teal"></span>
                    <p className="text-sm leading-7 text-ink-700">Engineered browser-side parsing, analysis, and visualization workflows for large HDF5 data files.</p>
                  </div>
                </div>
                <a
                  href={siteConfig.hdfViewerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-blue"
                >
                  View HDF Viewer
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </section>

            <section className="resume-block glass-card rounded-[1.8rem] p-8 opacity-0">
              <h2 className="flex items-center gap-3 font-display text-3xl tracking-[-0.04em] text-ink-950">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-teal/10 text-accent-teal">
                  <Code2 className="h-5 w-5" />
                </span>
                Selected Projects
              </h2>
              <div className="mt-8 space-y-5">
                {featuredProjects.map((project) => (
                  <article key={project.title} className="rounded-[1.5rem] border border-ink-950/8 bg-white/72 p-6">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{project.category}</p>
                        <h3 className="mt-2 font-display text-2xl tracking-[-0.04em] text-ink-950">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-ink-700">{project.description}</p>
                      </div>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue">
                          Open
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-full bg-paper-100 px-3 py-1.5 text-xs font-semibold text-ink-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-block glass-card rounded-[1.8rem] p-8 opacity-0">
              <h2 className="flex items-center gap-3 font-display text-3xl tracking-[-0.04em] text-ink-950">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-orange/12 text-accent-orange">
                  <GraduationCap className="h-5 w-5" />
                </span>
                Summary
              </h2>
              <p className="mt-6 text-base leading-8 text-ink-700">
                I enjoy building products where usability, performance, and technical clarity all matter. My focus is modern web application development with React, Node.js, and AI-enabled product thinking.
              </p>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ResumePage;
