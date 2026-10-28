import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';
import { gsap, prefersReducedMotion, setScrollLocked, useLocalTime } from '../lib/motion';

interface NavbarProps {
  currentPage: 'home' | 'resume';
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const isHome = currentPage === 'home';
  const base = isHome ? '' : siteConfig.resumeHomeHref;
  const links = [
    { label: 'Work', href: `${base}#work` },
    { label: 'Services', href: `${base}#services` },
    { label: 'About', href: `${base}#about` },
    { label: 'Résumé', href: isHome ? siteConfig.homeResumeHref : './', current: !isHome },
  ];

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const time = useLocalTime(siteConfig.timeZone);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setScrollLocked(open);
    const menu = menuRef.current;
    if (!menu) return;

    if (open && !prefersReducedMotion()) {
      gsap.fromTo(
        menu.querySelectorAll('.menu-item'),
        { yPercent: 100 },
        { yPercent: 0, duration: 0.9, ease: 'expo.out', stagger: 0.05, delay: 0.1 }
      );
    }

    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-[var(--ease-out-expo)] ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`absolute inset-0 -z-10 border-b transition-colors duration-500 ${
            scrolled || open ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent'
          }`}
        />
        <nav className="container-x flex h-16 items-center justify-between gap-6 md:h-[72px]" aria-label="Primary">
          <a href={isHome ? '#top' : siteConfig.resumeHomeHref} className="group flex items-center gap-3" aria-label="Harsh Kolte — home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-fg font-mono text-[12px] font-semibold text-bg transition-colors duration-300 group-hover:bg-accent">
              {siteConfig.initials}
            </span>
            <span className="hidden text-[15px] font-medium tracking-tight sm:block">{siteConfig.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-[14px] transition-colors duration-300 hover:text-fg ${
                    link.current ? 'text-fg' : 'text-muted'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2.5 font-mono text-[12px] text-muted lg:flex">
              <span className="status-dot" aria-hidden="true" />
              Available · {time} IST
            </span>
            <a href={`${base}#contact`} className="btn btn-primary hidden h-10 px-5 text-[14px] md:inline-flex">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="relative grid h-10 w-10 place-items-center rounded-full border border-line-strong md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              <span className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
              <span className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-[var(--ease-out-expo)] ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-40 flex flex-col bg-bg px-5 pb-8 pt-24 transition-[opacity,visibility] duration-500 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col">
          {[...links, { label: 'Contact', href: `${base}#contact` }].map((link, index) => (
            <li key={link.label} className="overflow-hidden border-b border-line">
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="menu-item flex items-baseline justify-between py-4 text-[2.5rem] font-medium tracking-[-0.04em]"
              >
                {link.label}
                <span className="font-mono text-[12px] text-faint">0{index + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-4">
          <span className="flex items-center gap-2.5 font-mono text-[12px] text-muted">
            <span className="status-dot" aria-hidden="true" />
            {siteConfig.availability}
          </span>
          <a href={`mailto:${siteConfig.email}`} tabIndex={open ? 0 : -1} className="inline-flex items-center gap-2 text-lg">
            {siteConfig.email}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
