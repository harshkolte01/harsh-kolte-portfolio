import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-6" ref={elementRef}>
      <div className={`max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-200">
            About Me
          </h2>
          <div className="h-[1px] bg-navy-700 flex-grow max-w-xs"></div>
        </div>

        <div className="glass-card p-8 rounded-xl">
          <p className="text-lg leading-relaxed mb-6">
            Hello! My name is Harsh Kolte. I am a passionate Full Stack Software Developer with a deep interest 
            in bridging the gap between complex backend logic and intuitive frontend design.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My journey in software engineering has led me to explore the cutting edge of <span className="text-accent-cyan">AI integration</span> in web platforms. 
            I thrive in challenging environments where I can leverage my adaptability to learn new tools quickly 
            and deliver high-quality code.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it's architecting a robust backend with NodeJS or crafting a pixel-perfect interface with React, 
            I bring a problem-solving mindset and a commitment to excellence to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;