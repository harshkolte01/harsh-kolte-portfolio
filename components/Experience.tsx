import React, { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    if (!containerRef.current) return;
    
    // Header animation
    gsap.fromTo(".experience-header", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    // Card animation
    gsap.fromTo(".experience-card",
      { y: 80, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: "expo.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
    
    // Stagger list items inside card
    gsap.fromTo(".experience-item",
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-card",
          start: "top 85%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="experience" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-16 experience-header opacity-0 translate-y-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-200">
            Experience
          </h2>
          <div className="h-[1px] bg-navy-700/50 flex-grow max-w-xs ml-4"></div>
        </div>

        <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden experience-card opacity-0 group hover:shadow-[0_0_30px_rgba(100,255,218,0.15)] transition-all duration-500">
          {/* Glowing accent orb inside card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-cyan/20 rounded-full blur-[60px] group-hover:bg-accent-cyan/30 transition-colors duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8">
            {/* Icon Column */}
            <div className="flex-shrink-0 hidden md:block mt-2">
              <div className="w-14 h-14 rounded-full bg-navy-800/80 border border-accent-cyan/30 flex items-center justify-center shadow-[0_0_15px_rgba(100,255,218,0.2)]">
                <Briefcase className="w-6 h-6 text-accent-cyan" />
              </div>
            </div>
            
            {/* Content Column */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-accent-cyan transition-colors duration-300">
                    Trainee
                  </h3>
                  <h4 className="text-lg text-slate-300 font-medium mt-1">
                    SPACE APPLICATION CENTER, ISRO
                  </h4>
                </div>
                
                <div className="flex flex-col gap-2 md:items-end text-sm font-mono text-accent-cyan/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Jan - Mar 2026 (3 Months)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ahmedabad</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 inline-block px-3 py-1 rounded-full bg-navy-800/60 border border-slate-700/50 text-xs text-slate-300 font-mono">
                Payload Checkout Software & Vision Control Dept.
              </div>

              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3 experience-item opacity-0">
                  <span className="text-accent-cyan mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Developed details Web-based project for the <strong>HDF Viewer (Data Analytics)</strong> integrated into the overall SAC Web Portal.
                  </span>
                </li>
                <li className="flex items-start gap-3 experience-item opacity-0">
                  <span className="text-accent-cyan mt-1 flex-shrink-0">▹</span>
                  <span className="leading-relaxed">
                    Engineered satellite data pipelines to parse, analyze, and visualize complex large-scale HDF5 file formats within the browser.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
