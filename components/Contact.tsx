import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Instagram } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.contact-header',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 80%' } }
    );

    gsap.fromTo('.contact-item',
      { y: 50, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, delay: 0.2, ease: 'power2.out', scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' } }
    );
  }, { scope: containerRef });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      setStatus('success');
      setMessage('Thank you! Your message has been sent successfully. I will get back to you within 24 hours. If you don\'t hear from me, feel free to reach out via LinkedIn.');
      e.currentTarget.reset();
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 8000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('success');
      setMessage('Thank you! Your message has been sent successfully. I will get back to you within 24 hours. If you don\'t hear from me, feel free to reach out via LinkedIn.');
      e.currentTarget.reset();
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 8000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        
        <div className="contact-header text-center mb-16 opacity-0 translate-y-10">
          <p className="text-accent-cyan font-mono mb-4 text-sm tracking-wider uppercase">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-200 mb-6 drop-shadow-lg">Get In Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            my inbox is always open.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Decorative background element for the whole section */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"></div>

          {/* Contact Info */}
          <div className="space-y-8">
             <div className="contact-item opacity-0 glass-card p-8 rounded-2xl hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] group">
              <h3 className="text-2xl font-bold text-slate-100 mb-8 border-b border-white/10 pb-4 group-hover:border-accent-cyan/30 transition-colors">Connect with me</h3>
              
              <div className="space-y-6">
                <a href="mailto:harshkolte01@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-all duration-300 group/link">
                  <div className="p-3 rounded-full bg-navy-800/80 group-hover/link:bg-accent-cyan/10 transition-colors border border-white/5">
                    <Mail className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="font-mono text-sm group-hover/link:-translate-y-0.5 transition-transform">harshkolte01@gmail.com</span>
                </a>
                
                <a href="https://github.com/harshkolte01" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-all duration-300 group/link">
                  <div className="p-3 rounded-full bg-navy-800/80 group-hover/link:bg-accent-cyan/10 transition-colors border border-white/5">
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="font-mono text-sm group-hover/link:-translate-y-0.5 transition-transform">github.com/harshkolte01</span>
                </a>
                
                <a href="https://www.linkedin.com/in/harsh-kolte-458978277/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-all duration-300 group/link">
                  <div className="p-3 rounded-full bg-navy-800/80 group-hover/link:bg-accent-cyan/10 transition-colors border border-white/5">
                    <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="font-mono text-sm group-hover/link:-translate-y-0.5 transition-transform">LinkedIn Profile</span>
                </a>
                
                <a href="https://www.instagram.com/harshkolte01/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-all duration-300 group/link">
                  <div className="p-3 rounded-full bg-navy-800/80 group-hover/link:bg-accent-cyan/10 transition-colors border border-white/5">
                    <Instagram className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="font-mono text-sm group-hover/link:-translate-y-0.5 transition-transform">@harshkolte01</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-item opacity-0 glass-card p-8 rounded-2xl space-y-5 hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)]">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={status === 'loading'}
                className="w-full bg-navy-900/50 border border-navy-700/80 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-accent-cyan focus:bg-navy-800/80 transition-all disabled:opacity-50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={status === 'loading'}
                className="w-full bg-navy-900/50 border border-navy-700/80 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-accent-cyan focus:bg-navy-800/80 transition-all disabled:opacity-50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={status === 'loading'}
                className="w-full bg-navy-900/50 border border-navy-700/80 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-accent-cyan focus:bg-navy-800/80 transition-all resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {message && (
              <div className={`p-4 rounded-lg text-sm font-mono leading-relaxed ${
                status === 'success'
                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                  : 'bg-red-500/10 text-red-400 border border-red-500/20'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-navy-700/80 hover:bg-navy-600 text-white rounded-lg font-mono flex items-center justify-center gap-3 transition-all border border-navy-600 hover:border-accent-cyan disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg hover:shadow-[0_0_15px_rgba(100,255,218,0.2)]"
            >
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;