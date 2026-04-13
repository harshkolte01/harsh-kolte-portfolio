import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/site';

interface NavbarProps {
  currentPage: 'home' | 'resume';
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        const nextScrolled = window.scrollY > 24;
        setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const isHomePage = currentPage === 'home';
  const homeHref = isHomePage ? '#home' : '../';
  const resumeHref = isHomePage ? 'resume/' : '../resume_harshkolte.pdf';
  const resumeLabel = isHomePage ? 'Resume' : 'Download PDF';

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-ink-950/8 bg-white/94 shadow-[0_20px_44px_rgba(34,40,50,0.08)]'
            : 'border-transparent bg-white/72 shadow-[0_8px_24px_rgba(34,40,50,0.04)]'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a href={homeHref} className="flex items-center gap-3 min-w-0" aria-label="Harsh Kolte home">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink-950 text-sm font-extrabold text-paper-50 shadow-[0_16px_30px_rgba(23,25,31,0.18)]">
              {siteConfig.initials}
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-semibold text-ink-950">{siteConfig.name}</p>
              <p className="truncate text-xs text-ink-600">{siteConfig.jobTitle}</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {isHomePage ? (
              <ol className="flex items-center gap-6 text-sm font-semibold text-ink-700">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="transition-colors hover:text-ink-950">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ol>
            ) : (
              <a href="../" className="text-sm font-semibold text-ink-700 transition-colors hover:text-ink-950">
                Back to portfolio
              </a>
            )}

            <a
              href={resumeHref}
              className="button-secondary px-5 py-2.5 text-sm"
              {...(!isHomePage ? { download: 'Harsh_Kolte_Resume.pdf' } : {})}
            >
              {resumeLabel}
            </a>
            {isHomePage && (
              <a href="#contact" className="button-primary px-5 py-2.5 text-sm">
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-950/8 bg-white/80 text-ink-950 shadow-sm lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-ink-950/8 px-4 pb-4 pt-4 lg:hidden">
            <div className="glass-card rounded-[1.75rem] p-4">
              <div className="space-y-2">
                {isHomePage ? (
                  navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:bg-paper-100"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-4 w-4 text-ink-500" />
                    </a>
                  ))
                ) : (
                  <a
                    href="../"
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:bg-paper-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Back to portfolio</span>
                    <ArrowUpRight className="h-4 w-4 text-ink-500" />
                  </a>
                )}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={resumeHref}
                  className="button-secondary text-sm"
                  onClick={() => setIsOpen(false)}
                  {...(!isHomePage ? { download: 'Harsh_Kolte_Resume.pdf' } : {})}
                >
                  {resumeLabel}
                </a>
                {isHomePage && (
                  <a href="#contact" className="button-primary text-sm" onClick={() => setIsOpen(false)}>
                    Let&apos;s talk
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
