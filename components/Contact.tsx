import React, { useRef, useState } from 'react';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}`, value: siteConfig.email, icon: Mail },
  { label: 'GitHub', href: siteConfig.githubUrl, value: 'github.com/harshkolte01', icon: Github },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, value: 'Connect professionally', icon: Linkedin },
  { label: 'Instagram', href: siteConfig.instagramUrl, value: '@harshkolte01', icon: Instagram },
];

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo('.contact-block',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.85, stagger: 0.14, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 84%', once: true } }
    );
  }, { scope: containerRef });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Unable to send the message.');
      }

      setStatus('success');
      setMessage('Thanks for reaching out. Your message has been sent successfully and I will reply as soon as possible.');
      event.currentTarget.reset();
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 7000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setMessage('The form could not be sent right now. Please email me directly or connect on LinkedIn.');
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 7000);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="contact-block max-w-3xl opacity-0">
          <span className="section-kicker">Contact</span>
          <h2 id="contact-heading" className="section-heading mt-6">
            If the product needs both strong engineering and a refined interface, let&apos;s talk.
          </h2>
          <p className="section-copy mt-6">
            I am open to full stack roles, product engineering teams, and select freelance work where the interface quality matters as much as the implementation.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="contact-block space-y-6 opacity-0">
            <div className="glass-card rounded-[2rem] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Preferred collaborations</p>
              <div className="mt-5 chip-row">
                <span className="chip">Frontend-heavy products</span>
                <span className="chip">Full stack web apps</span>
                <span className="chip">AI-enabled features</span>
                <span className="chip">Dashboards and portals</span>
              </div>
              <p className="mt-6 text-base leading-8 text-ink-700">
                Send a message with the problem you&apos;re solving, the product stage, and what kind of help you need. That usually makes the conversation productive immediately.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map(({ label, href, value, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-block glass-card rounded-[1.7rem] p-5 opacity-0 transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-paper-100 text-ink-900">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-500" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">{label}</p>
                  <p className="mt-2 text-sm font-semibold text-ink-900">{value}</p>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-block glass-card rounded-[2rem] p-8 opacity-0 sm:p-10">
            <div className="grid gap-5">
              <input type="hidden" name="subject" value="New portfolio inquiry" />
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-[1.2rem] border border-ink-950/10 bg-white/86 px-4 py-3.5 text-sm text-ink-900 outline-none transition focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  disabled={status === 'loading'}
                  className="w-full rounded-[1.2rem] border border-ink-950/10 bg-white/86 px-4 py-3.5 text-sm text-ink-900 outline-none transition focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  disabled={status === 'loading'}
                  className="w-full resize-none rounded-[1.2rem] border border-ink-950/10 bg-white/86 px-4 py-3.5 text-sm text-ink-900 outline-none transition focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 disabled:opacity-50"
                ></textarea>
              </div>

              {message && (
                <div
                  aria-live="polite"
                  className={`rounded-[1.4rem] px-4 py-3 text-sm font-semibold leading-7 ${
                    status === 'success'
                      ? 'border border-accent-teal/20 bg-accent-teal/10 text-accent-teal'
                      : 'border border-accent-orange/20 bg-accent-orange/10 text-accent-orange'
                  }`}
                >
                  {message}
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="button-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-60">
                <span>{status === 'loading' ? 'Sending...' : 'Send message'}</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
