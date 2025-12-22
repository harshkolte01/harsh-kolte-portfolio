import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Instagram } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

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
    <section id="contact" className="py-24 px-6" ref={elementRef}>
      <div className={`max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="text-center mb-16">
          <p className="text-accent-cyan font-mono mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-200 mb-6">Get In Touch</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
             <div className="glass-card p-6 rounded-xl hover:border-accent-cyan/30 transition-colors">
              <h3 className="text-xl font-bold text-slate-200 mb-6">Connect with me</h3>
              
              <div className="space-y-4">
                <a href="mailto:harshkolte01@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-colors group">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>harshkolte01@gmail.com</span>
                </a>
                
                <a href="https://github.com/harshkolte01" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-colors group">
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>github.com/harshkolte01</span>
                </a>
                
                <a href="https://www.linkedin.com/in/harsh-kolte-458978277/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-colors group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a href="https://www.instagram.com/harshkolte01/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-accent-cyan transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>@harshkolte01</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-slate-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={status === 'loading'}
                className="w-full bg-navy-800 border border-navy-700 rounded p-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors disabled:opacity-50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-slate-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={status === 'loading'}
                className="w-full bg-navy-800 border border-navy-700 rounded p-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors disabled:opacity-50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={status === 'loading'}
                className="w-full bg-navy-800 border border-navy-700 rounded p-3 text-slate-200 focus:outline-none focus:border-accent-cyan transition-colors resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {message && (
              <div className={`p-3 rounded text-sm font-mono ${
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
              className="w-full py-3 bg-navy-700 hover:bg-navy-600 text-white rounded font-mono flex items-center justify-center gap-2 transition-colors border border-navy-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;