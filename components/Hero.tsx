import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      ref={elementRef}
    >
      <div className={`max-w-4xl w-full transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-accent-cyan font-mono mb-5 text-lg">Hi, my name is</p>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-200 mb-4">
          Harsh Kolte.
        </h1>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-400 mb-8">
          I build AI-driven web apps.
        </h2>
        
        <p className="max-w-xl text-lg text-slate-400 mb-12 leading-relaxed">
          I'm a Full Stack Developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on integrating Artificial Intelligence into modern web applications 
          to create smarter, more efficient solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#projects" 
            className="px-8 py-4 border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 transition-colors duration-300 font-mono flex items-center justify-center gap-2 group"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact" 
            className="px-8 py-4 bg-navy-700 text-white rounded hover:bg-navy-600 transition-colors duration-300 font-mono flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;