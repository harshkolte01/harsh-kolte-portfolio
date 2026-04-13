import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.about-header',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.about-card',
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'expo.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo('.about-text',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-card',
          start: 'top 85%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-3xl mx-auto">
        <div className="about-header flex items-center gap-4 mb-12 opacity-0 translate-y-10">
          <h2 id="about-heading" className="text-3xl md:text-4xl font-display font-bold text-slate-200">
            About Harsh Kolte
          </h2>
          <div className="h-[1px] bg-navy-700/50 flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="about-card glass-card p-8 md:p-10 rounded-2xl opacity-0 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(189,52,254,0.1)] transition-all duration-500">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] group-hover:bg-accent-purple/20 transition-colors duration-700"></div>

          <div className="relative z-10">
            <p className="about-text text-lg leading-relaxed mb-6 opacity-0 text-slate-300">
              I am {siteConfig.name}, a full stack developer based in {siteConfig.location}. My work sits at the intersection of strong backend architecture, polished frontend execution, and clear product thinking.
            </p>
            <p className="about-text text-lg leading-relaxed mb-6 opacity-0 text-slate-300">
              I specialize in building with React, Next.js, Node.js, Express, and modern databases. Over the last few years I have focused heavily on <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple font-medium">AI integration</span>, authentication flows, data-heavy dashboards, and applications that need both speed and maintainability.
            </p>
            <p className="about-text text-lg leading-relaxed opacity-0 text-slate-300">
              Whether the challenge is designing APIs, shaping analytics experiences, or improving frontend performance, I focus on useful software that solves real user problems and can scale cleanly over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
