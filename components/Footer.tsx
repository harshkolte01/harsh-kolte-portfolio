import React, { useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/site';
import { gsap, prefersReducedMotion, scrollToTarget, useGSAP } from '../lib/motion';

interface FooterProps {
  currentPage: 'home' | 'resume';
}

const Footer: React.FC<FooterProps> = ({ currentPage }) => {
  const scope = useRef<HTMLElement>(null);
  const base = currentPage === 'home' ? '' : siteConfig.resumeHomeHref;

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from('.footer-mark span', {
        yPercent: 100,
        ease: 'expo.out',
        duration: 1.4,
        stagger: 0.04,
        scrollTrigger: { trigger: '.footer-mark', start: 'top 95%', once: true },
      });
    },
    { scope }
  );

  const columns = [
    {
      title: 'Site',
      links: [
        { label: 'Work', href: `${base}#work` },
        { label: 'Services', href: `${base}#services` },
        { label: 'About', href: `${base}#about` },
        { label: 'Contact', href: `${base}#contact` },
      ],
    },
    {
      title: 'Elsewhere',
      links: [
        { label: 'GitHub', href: siteConfig.githubUrl },
        { label: 'LinkedIn', href: siteConfig.linkedinUrl },
        { label: 'Instagram', href: siteConfig.instagramUrl },
        {
          label: 'Résumé (PDF)',
          href: currentPage === 'home' ? siteConfig.homeResumePdfHref : siteConfig.resumePdfHref,
        },
      ],
    },
  ];

  return (
    <footer ref={scope} className="no-print relative overflow-hidden border-t border-line pt-16">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div>
            <p className="max-w-[28ch] text-[19px] leading-snug tracking-[-0.02em]">
              Full-stack engineer in {siteConfig.location}, building AI agents, desktop apps and web products.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="link-underline mt-5 inline-block text-[15px] text-muted hover:text-fg">
              {siteConfig.email}
            </a>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="eyebrow">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-[15px] text-muted transition-colors hover:text-fg"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <button
            type="button"
            onClick={() => scrollToTarget(0)}
            className="grid h-12 w-12 place-items-center self-start rounded-full border border-line-strong text-muted transition-colors hover:border-fg hover:bg-fg hover:text-bg"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-line py-6 font-mono text-[12px] text-faint">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>Designed &amp; built by hand · React, GSAP, Lenis</span>
        </div>
      </div>

      <p
        className="footer-mark pointer-events-none flex select-none justify-center overflow-hidden whitespace-nowrap pb-[1vw] text-[18vw] font-semibold leading-[0.78] tracking-[-0.07em] text-surface-2"
        aria-hidden="true"
      >
        {Array.from('Harsh Kolte').map((char, i) => (
          <span key={i} className="inline-block">
            {char === ' ' ? ' ' : char}
          </span>
        ))}
      </p>
    </footer>
  );
};

export default Footer;
