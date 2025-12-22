import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Folder, Eye, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Linksht (Link Shortener)',
    description: 'A full-stack subscription-based platform where users can shorten links and track performance via an analytics dashboard. Features robust OTP email-based authentication.',
    techStack: ['NodeJS', 'ExpressJS', 'MongoDB', 'React', 'Nodemailer'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://linksht.me',
    features: ['Link analytics dashboard', 'OTP email authentication', 'Subscription system']
  },
  {
    title: 'Tournament Management System',
    description: 'A comprehensive Esports platform for organizations to conduct events and users to register. Features role-based access for Admins and Gamers with real-time updates.',
    techStack: ['NextJS', 'TailwindCSS', 'Firebase Auth', 'Realtime DB'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://infamousesports.vercel.app',
    features: ['Google OAuth Integration', 'Real-time event tracking', 'Role-based access control']
  },
  {
    title: 'Todo Web Application',
    description: 'A robust task management application with advanced filtering, pagination, and user profile management. secure authentication using JWT.',
    techStack: ['MERN Stack', 'JWT', 'Cloudinary', 'REST API'],
    githubUrl: 'https://github.com/harshkolte01',
    liveUrl: 'https://todo-app-main-gules-nine.vercel.app',
    features: ['Advanced search & filter', 'Secure JWT Auth', 'Profile image upload']
  }
];

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const hasValidLiveUrl = (url?: string) => url && url !== '#' && url !== '';

  return (
    <section id="projects" className="py-24 px-6" ref={elementRef}>
      <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-200">
            <span className="text-accent-cyan font-mono text-xl mr-2">03.</span>
            Some Things I've Built
          </h2>
          <div className="h-[1px] bg-navy-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-xl p-8 flex flex-col h-full hover:border-accent-cyan/30 transition-colors duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-accent-cyan" />
                <div className="flex gap-4">
                  {hasValidLiveUrl(project.liveUrl) && (
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="text-slate-400 hover:text-accent-cyan transition-colors"
                      title="Preview Project"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors" title="View Code">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {hasValidLiveUrl(project.liveUrl) && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors" title="Open Live Site">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              
              <div className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
                <ul className="mt-3 space-y-1">
                  {project.features?.map((feature, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-500">• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-accent-purple bg-accent-purple/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-navy-900/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="w-full h-full max-w-7xl bg-navy-800 rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/5 bg-navy-900">
              <div className="flex items-center gap-4">
                <h3 className="text-lg md:text-xl font-bold text-slate-200">{activeProject.title}</h3>
                <span className="hidden md:inline-block px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-xs rounded font-mono">Live Preview</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href={activeProject.liveUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hidden md:flex items-center gap-2 text-sm text-slate-400 hover:text-accent-cyan transition-colors font-mono"
                >
                  Open in new tab
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button 
                  onClick={() => setActiveProject(null)}
                  className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Body (Iframe) */}
            <div className="flex-grow bg-white relative">
              <div className="absolute inset-0 flex items-center justify-center text-navy-900/50">
                <div className="text-center p-4">
                  <p className="mb-2">Loading Preview...</p>
                  <p className="text-sm">If the preview doesn't load, the site may not allow embedding.</p>
                </div>
              </div>
              <iframe 
                src={activeProject.liveUrl} 
                className="w-full h-full border-0 relative z-10 bg-white" 
                title={`${activeProject.title} Preview`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;