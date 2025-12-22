import React from 'react';
import { Code, Database, Server, PenTool, Layout, Terminal } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SkillCategory } from '../types';

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
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-6 bg-navy-800/30" ref={elementRef}>
      <div className={`max-w-5xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-200">
            <span className="text-accent-cyan font-mono text-xl mr-2">02.</span>
            Skills & Technologies
          </h2>
          <div className="h-[1px] bg-navy-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-navy-800 rounded-lg group-hover:bg-navy-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">{category.name}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-sm font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full"></span>
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