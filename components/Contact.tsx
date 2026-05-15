import React, { useRef } from 'react';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteConfig } from '../data/site';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  { label: 'Email', href: `mailto:${siteConfig.email}`, value: siteConfig.email, icon: Mail },
  { label: 'GitHub', href: siteConfig.githubUrl, value: 'github.com/harshkolte01', icon: Github },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, value: 'Professional updates', icon: Linkedin },
  { label: 'Instagram', href: siteConfig.instagramUrl, value: '@harshkolte01', icon: Instagram },
];

const intentTags = ['Full stack role', 'AI product build', 'Dashboard UI', 'SaaS MVP', 'Freelance sprint'];

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      '.contact-reveal',
      { y: 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.82,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 84%', once: true },
      }
    );
  }, { scope: containerRef });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const body = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'website visitor'}`);
    const message = encodeURIComponent(`${body}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${message}`;
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-shell bg-night-950 text-paper-50" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="contact-reveal grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <span className="section-label border-white/14 bg-white/8 text-paper-50/74">Contact</span>
            <h2 id="contact-heading" className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Bring me into the build when UI quality and full stack execution both matter.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-paper-50/68 lg:justify-self-end">
            I am open to full-time roles, product engineering teams, and selective freelance work. A useful first message includes the product goal, current stage, and where the build is stuck.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="contact-reveal space-y-6">
            <div className="rounded-lg border border-white/14 bg-white/7 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper-50/48">Good reasons to reach out</p>
              <div className="mt-4 chip-row">
                {intentTags.map((tag) => (
                  <span key={tag} className="chip border-white/12 bg-white/8 text-paper-50/78">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map(({ label, href, value, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="rounded-lg border border-white/14 bg-white/7 p-4 transition hover:-translate-y-1 hover:border-accent-teal/46 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-paper-50">
                      <Icon className="h-4 w-4" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-paper-50/48" />
                  </div>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-paper-50/48">{label}</p>
                  <p className="mt-2 break-words text-sm font-extrabold text-paper-50/86">{value}</p>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-reveal rounded-lg border border-white/14 bg-white/7 p-5 shadow-[0_28px_80px_rgba(5,7,13,0.34)] sm:p-7">
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-paper-50/52">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-lg border border-white/14 bg-night-950/72 px-4 py-3.5 text-sm text-paper-50 outline-none transition placeholder:text-paper-50/32 focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/12"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-paper-50/52">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-white/14 bg-night-950/72 px-4 py-3.5 text-sm text-paper-50 outline-none transition placeholder:text-paper-50/32 focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/12"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-paper-50/52">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full resize-none rounded-lg border border-white/14 bg-night-950/72 px-4 py-3.5 text-sm text-paper-50 outline-none transition placeholder:text-paper-50/32 focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/12"
                  placeholder="Tell me about the product, role, or build."
                />
              </div>

              <button type="submit" className="button-primary border-accent-teal bg-accent-teal text-night-950">
                <Send className="h-4 w-4" />
                <span>Open email draft</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
