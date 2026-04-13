import React, { useRef } from 'react';
import { Briefcase, Code2, Download, ExternalLink, GraduationCap, Share2 } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { featuredProjects, siteConfig } from '../data/site';

const ResumePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.resume-header',
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    .fromTo('.resume-section',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
      '-=0.4'
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
    <article className="min-h-screen py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="resume-header flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-navy-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-2">{siteConfig.name}</h1>
            <p className="text-accent-cyan font-mono text-sm group-hover:text-accent-cyan transition-colors">{siteConfig.email} | Ahmedabad, India</p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button
              type="button"
              onClick={handleShare}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg font-mono transition-colors border border-navy-600"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <a
              href={siteConfig.resumePdfHref}
              download="Harsh_Kolte_Resume.pdf"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 rounded-lg font-mono transition-colors border border-accent-cyan/30"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        <div className="space-y-8">
          <section className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><Code2 className="w-5 h-5 text-accent-cyan" /></span>
              Professional Summary
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Full stack software developer specialized in building robust, AI-driven web applications with React, Node.js, and modern data platforms. Focused on turning complex technical workflows into reliable products with strong user experience and maintainable architecture.
            </p>
          </section>

          <section className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><Briefcase className="w-5 h-5 text-accent-cyan" /></span>
              Experience
            </h2>

            <div className="relative pl-8 border-l-2 border-navy-700 space-y-8">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-navy-900 border-2 border-accent-cyan"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-200">SPACE APPLICATION CENTER, ISRO</h3>
                    <p className="text-accent-cyan font-medium">Trainee</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500 mt-1 md:mt-0">Jan 2026 - Mar 2026</span>
                </div>
                <p className="text-sm text-slate-500 mb-4 font-mono">Payload Checkout Software and Vision Control Department</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0"></span>
                    <span>Built a web-based HDF Viewer for data analytics and integrated it into the SAC web portal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-accent-cyan flex-shrink-0"></span>
                    <span>Engineered browser-side parsing, analysis, and visualization workflows for large HDF5 data files.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><Code2 className="w-5 h-5 text-accent-cyan" /></span>
              Key Projects
            </h2>

            <div className="space-y-6">
              {featuredProjects.slice(0, 2).map((project) => (
                <div key={project.title} className="bg-navy-800/30 p-5 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-200">{project.title}</h3>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-accent-cyan"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><GraduationCap className="w-5 h-5 text-accent-cyan" /></span>
              Education
            </h2>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Bachelor of Engineering in Computer Engineering</h3>
                  <p className="text-accent-cyan text-sm mt-1">SAL Institute of Technology and Engineering Research (GTU)</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="block text-sm font-mono text-slate-400 mb-1">2022 - 2026</span>
                  <span className="inline-block px-2 py-1 bg-navy-800 rounded text-xs text-slate-300 font-mono">CGPA: 7.83</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default ResumePage;
