import React, { useRef } from 'react';
import { Database, Server, Layout, Terminal } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SkillCategory } from '../types';

gsap.registerPlugin(ScrollTrigger);

const skillCategories: (SkillCategory & { icon: React.ReactNode })[] = [
  {
    name: 'Frontend',
    icon: <Layout className="w-6 h-6 text-accent-cyan" />,
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
  },
  {
    name: 'Backend',
    icon: <Server className="w-6 h-6 text-accent-purple" />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication (JWT/OAuth)', 'AI Integration']
  },
  {
    name: 'Databases',
    icon: <Database className="w-6 h-6 text-accent-cyan" />,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase Realtime DB', 'Vector DB']
  },
  {
    name: 'Tools & Others',
    icon: <Terminal className="w-6 h-6 text-accent-purple" />,
    skills: ['Git & GitHub', 'Postman', 'VS Code', 'Electron.js']
  }
];

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.skills-header',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

    gsap.fromTo('.skill-card',
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' } }
    );

  }, { scope: containerRef });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-5xl mx-auto">
        <div className="skills-header flex items-center gap-4 mb-12 opacity-0 translate-y-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">
            Skills & Technologies
          </h2>
          <div className="h-[1px] bg-navy-700/50 flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="skill-card glass-card p-6 rounded-xl opacity-0 hover:-translate-y-2 group transition-all duration-300 hover:shadow-[0_0_25px_rgba(100,255,218,0.15)] border border-white/5 hover:border-accent-cyan/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-cyan/10 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 bg-navy-800/80 rounded-lg group-hover:bg-navy-700/80 transition-colors shadow-inner box-border border-white/5 border">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-accent-cyan transition-colors">{category.name}</h3>
              </div>
              
              <ul className="space-y-3 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-sm font-mono text-slate-400 group-hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full group-hover:shadow-[0_0_5px_#64ffda] transition-shadow"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;