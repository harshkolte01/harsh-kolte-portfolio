import React from 'react';
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '../data/site';

interface FooterProps {
  currentPage: 'home' | 'resume';
}

const Footer: React.FC<FooterProps> = ({ currentPage }) => {
  const base = currentPage === 'home' ? '' : '../';

  const footerLinks = [
    { label: 'Work', href: `${base}#projects` },
    { label: 'About', href: `${base}#about` },
    { label: 'Capabilities', href: `${base}#skills` },
    { label: 'Contact', href: `${base}#contact` },
  ];

  const socialLinks = [
    { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: 'GitHub', href: siteConfig.githubUrl, icon: Github },
    { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: Linkedin },
    { label: 'Instagram', href: siteConfig.instagramUrl, icon: Instagram },
  ];

  return (
    <footer className="px-6 pb-8 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card rounded-[2rem] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
            <div>
              <span className="section-kicker">Built To Stand Out</span>
              <h2 className="mt-5 max-w-lg font-display text-3xl leading-tight tracking-[-0.04em] text-ink-950 sm:text-4xl">
                Thoughtful product design, modern frontend polish, and strong full stack execution.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink-700">
                This portfolio is designed to feel clean, intentional, and high signal. The same mindset carries into the interfaces I build for real products.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Navigation</p>
              <div className="mt-5 space-y-3">
                {footerLinks.map((link) => (
                  <a key={link.label} href={link.href} className="flex items-center gap-2 text-sm font-semibold text-ink-800 transition-colors hover:text-accent-blue">
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Reach Out</p>
              <div className="mt-5 grid gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="feature-outline flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-accent-blue/20 hover:bg-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-100 text-ink-900">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-ink-950/8 pt-6 text-sm text-ink-600 sm:flex-row sm:items-center sm:justify-between">
            <p>Designed and built by {siteConfig.name}.</p>
            <p>{new Date().getFullYear()} | {siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
