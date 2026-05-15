import React, { useState } from 'react';
import { ArrowUpRight, FileText, Menu, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../data/site';

interface NavbarProps {
  currentPage: 'home' | 'resume';
}

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'Stack', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isHomePage = currentPage === 'home';
  const homeHref = isHomePage ? '#home' : '../';
  const resumeHref = isHomePage ? 'resume/' : '../resume_harshkolte.pdf';
  const resumeLabel = isHomePage ? 'Resume' : 'Download PDF';

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 border-b border-white/10 bg-night-950/96 px-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 py-3">
        <a href={homeHref} className="flex min-w-0 items-center gap-3" aria-label="Harsh Kolte home">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/14 bg-white/8 font-display text-sm font-bold text-paper-50">
            {siteConfig.initials}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold text-paper-50">{siteConfig.name}</span>
            <span className="hidden truncate text-xs font-semibold text-paper-50/58 sm:block">{siteConfig.jobTitle}</span>
          </span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {isHomePage ? (
            <ol className="mr-2 flex items-center gap-1 text-sm font-bold text-paper-50/66">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="rounded-md px-3 py-2 transition-colors hover:bg-white/8 hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
          ) : (
            <a href="../" className="rounded-md px-3 py-2 text-sm font-bold text-paper-50/66 transition-colors hover:bg-white/8 hover:text-white">
              Back to portfolio
            </a>
          )}

          <a
            href={resumeHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 bg-white/8 px-4 py-2.5 text-sm font-extrabold text-paper-50 transition hover:border-accent-teal/50 hover:bg-white/12"
            {...(!isHomePage ? { download: 'Harsh_Kolte_Resume.pdf' } : {})}
          >
            <FileText className="h-4 w-4" />
            {resumeLabel}
          </a>
          {isHomePage && (
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-accent-teal bg-accent-teal px-4 py-2.5 text-sm font-extrabold text-night-950 transition hover:bg-accent-lime hover:border-accent-lime">
              <MessageCircle className="h-4 w-4" />
              Talk
            </a>
          )}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/14 bg-white/8 text-paper-50 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="mx-auto grid max-w-7xl gap-2 border-t border-white/10 py-3 lg:hidden">
          {isHomePage ? (
            navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between rounded-lg bg-white/8 px-3 py-3 text-sm font-extrabold text-paper-50"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ))
          ) : (
            <a
              href="../"
              className="flex items-center justify-between rounded-lg bg-white/8 px-3 py-3 text-sm font-extrabold text-paper-50"
              onClick={() => setIsOpen(false)}
            >
              <span>Back to portfolio</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}

          <div className="grid gap-2 sm:grid-cols-2">
            <a
              href={resumeHref}
              className="button-secondary border-white/14 bg-white/8 text-sm text-paper-50 hover:bg-white/12 hover:text-white"
              onClick={() => setIsOpen(false)}
              {...(!isHomePage ? { download: 'Harsh_Kolte_Resume.pdf' } : {})}
            >
              <FileText className="h-4 w-4" />
              {resumeLabel}
            </a>
            {isHomePage && (
              <a href="#contact" className="button-primary border-accent-teal bg-accent-teal text-sm text-night-950" onClick={() => setIsOpen(false)}>
                <MessageCircle className="h-4 w-4" />
                Talk
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
