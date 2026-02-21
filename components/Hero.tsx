import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-text-1', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.2 })
      .fromTo('.hero-text-2', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-text-3', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-text-4', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
      .fromTo('.hero-btn', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 }, '-=0.2');
  }, { scope: containerRef });

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-4xl w-full z-10 relative">
        <p className="hero-text-1 text-accent-cyan font-mono mb-5 text-lg opacity-0">Hi, my name is</p>
        
        <h1 className="hero-text-2 text-5xl md:text-7xl font-display font-bold text-slate-200 mb-4 opacity-0 tracking-tight">
          Harsh Kolte.
        </h1>
        
        <h2 className="hero-text-3 text-4xl md:text-6xl font-display font-bold text-slate-400 mb-8 opacity-0 leading-tight">
          I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">AI-driven</span> web apps.
        </h2>
        
        <p className="hero-text-4 max-w-xl text-lg text-slate-400 mb-12 leading-relaxed opacity-0">
          I'm a Full Stack Developer specializing in building exceptional digital experiences. 
          Currently, I'm focused on integrating Artificial Intelligence into modern web applications 
          to create smarter, more efficient solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <a 
            href="#projects" 
            className="hero-btn opacity-0 px-8 py-4 border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.3)] transition-all duration-300 font-mono flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          
          <a 
            href="#contact" 
            className="hero-btn opacity-0 px-8 py-4 bg-navy-700/80 backdrop-blur-md border border-slate-700 hover:border-slate-500 text-white rounded hover:bg-navy-600 transition-all duration-300 font-mono flex items-center justify-center hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;