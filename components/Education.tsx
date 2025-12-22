import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-6 bg-navy-800/30" ref={elementRef}>
      <div className={`max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-200">
            Education
          </h2>
          <div className="h-[1px] bg-navy-700 flex-grow max-w-xs"></div>
        </div>

        <div className="glass-card p-8 rounded-xl relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="flex flex-col md:flex-row gap-6 relative z-10">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-navy-800 rounded-lg flex items-center justify-center border border-white/5">
                <GraduationCap className="w-8 h-8 text-accent-cyan" />
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-slate-200 mb-1">
                Bachelor of Engineering in Computer Engineering
              </h3>
              <p className="text-accent-cyan font-mono text-sm mb-4">
                SAL Institute of Technology And Engineering Research (GTU)
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                  2022 - 2026
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-purple rounded-full"></span>
                  CGPA: 7.83
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;