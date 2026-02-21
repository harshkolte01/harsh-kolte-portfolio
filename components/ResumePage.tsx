import React, { useRef } from 'react';
import { Download, Share2, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
          title: 'Harsh Kolte - Resume',
          text: 'Check out Harsh Kolte\'s resume!',
          url: resumeUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(resumeUrl);
      alert('Resume link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        
        {/* Header Actions */}
        <div className="resume-header flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-navy-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-200 mb-2">Harsh Kolte</h1>
            <p className="text-accent-cyan font-mono text-sm group-hover:text-accent-cyan transition-colors">harshkolte01@gmail.com • Ahmedabad, India</p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={handleShare}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-navy-700 hover:bg-navy-600 text-white rounded-lg font-mono transition-colors border border-navy-600"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <a 
              href="/resume_harshkolte.pdf" 
              download="Harsh_Kolte_Resume.pdf"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 rounded-lg font-mono transition-colors border border-accent-cyan/30"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-8">
          
          {/* Summary Section */}
          <div className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-4 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><Code2 className="w-5 h-5 text-accent-cyan" /></span>
              Professional Summary
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Passionate Full Stack Software Developer specialized in building robust, AI-driven web applications. 
              Proficient in React, NodeJS, and modern database technologies. Committed to bridging the gap between 
              complex backend logic and intuitive frontend design to deliver exceptional digital experiences.
            </p>
          </div>

          {/* Experience Section */}
          <div className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
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
                <p className="text-sm text-slate-500 mb-4 font-mono">Payload Checkout Software & Vision Control Dept.</p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li className="flex items-start gap-2"><span className="text-accent-cyan">▹</span> Developed detailed Web-based HDF Viewer (Data Analytics) integrated into SAC Web Portal.</li>
                  <li className="flex items-start gap-2"><span className="text-accent-cyan">▹</span> Engineered satellite data pipelines to parse, analyze, and visualize complex large-scale HDF5 file formats within the browser.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><Code2 className="w-5 h-5 text-accent-cyan" /></span>
              Key Projects
            </h2>
            
            <div className="space-y-6">
              <div className="bg-navy-800/30 p-5 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-200">Linksht (Link Shortener)</h3>
                  <a href="https://linksht.me" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan"><ExternalLink className="w-4 h-4" /></a>
                </div>
                <p className="text-sm text-slate-400 mb-3">A full-stack subscription-based platform where users can shorten links and track performance via an analytics dashboard.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">NodeJS</span>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">React</span>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">MongoDB</span>
                </div>
              </div>

              <div className="bg-navy-800/30 p-5 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-slate-200">Tournament Management System</h3>
                </div>
                <p className="text-sm text-slate-400 mb-3">Comprehensive Esports platform for organizations to conduct events with role-based access for Admins and Gamers.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">NextJS</span>
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded">Firebase</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent-cyan/20 transition-colors">
            <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
              <span className="p-2 bg-navy-800 rounded-lg"><GraduationCap className="w-5 h-5 text-accent-cyan" /></span>
              Education
            </h2>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Bachelor of Engineering in Computer Engineering</h3>
                  <p className="text-accent-cyan text-sm mt-1">SAL Institute of Technology And Engineering Research (GTU)</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="block text-sm font-mono text-slate-400 mb-1">2022 - 2026</span>
                  <span className="inline-block px-2 py-1 bg-navy-800 rounded text-xs text-slate-300 font-mono">CGPA: 7.83</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumePage;
