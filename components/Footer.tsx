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
    { label: 'Stack', href: `${base}#skills` },
    { label: 'Experience', href: `${base}#experience` },
    { label: 'Contact', href: `${base}#contact` },
  ];

  const socialLinks = [
    { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: 'GitHub', href: siteConfig.githubUrl, icon: Github },
    { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: Linkedin },
    { label: 'Instagram', href: siteConfig.instagramUrl, icon: Instagram },
  ];

  return (
    <footer className="bg-night-950 px-6 pb-8 text-paper-50">
      <div className="mx-auto max-w-7xl border-t border-white/12 pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent-teal">Harsh Kolte</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-white">
              Full stack developer for polished AI, SaaS, dashboard, and data-heavy web products.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-paper-50/62">
              Built around React interfaces, Node.js backends, practical product thinking, and strong UX detail.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper-50/46">Navigation</p>
            <div className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="flex items-center gap-2 rounded-lg px-0 py-2 text-sm font-extrabold text-paper-50/72 transition hover:text-white">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper-50/46">Reach out</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between rounded-lg border border-white/12 bg-white/7 px-3 py-3 text-sm font-extrabold text-paper-50/76 transition hover:border-accent-teal/46 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4" />
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-paper-50/42" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-5 text-sm text-paper-50/52 sm:flex-row sm:items-center sm:justify-between">
          <p>Designed and built by {siteConfig.name}.</p>
          <p>{new Date().getFullYear()} | {siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
