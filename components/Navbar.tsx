import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'resume';
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = currentPage === 'home';
  const homeHref = isHomePage ? '#home' : '../';
  const resumeHref = isHomePage ? 'resume/' : '../resume_harshkolte.pdf';
  const resumeLabel = isHomePage ? 'Resume' : 'Download PDF';

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      aria-label="Primary"
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href={homeHref} className="text-2xl font-display font-bold text-accent-cyan" aria-label="Harsh Kolte home">
          HK
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ol className="flex gap-8 font-mono text-sm">
            {isHomePage &&
              navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-300 hover:text-accent-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            {!isHomePage && (
              <li>
                <a href="../" className="text-slate-300 hover:text-accent-cyan transition-colors">
                  Back to Portfolio
                </a>
              </li>
            )}
          </ol>
          <a
            href={resumeHref}
            className="px-4 py-2 border border-accent-cyan text-accent-cyan rounded text-sm font-mono hover:bg-accent-cyan/10 transition-colors"
            {...(!isHomePage ? { download: 'Harsh_Kolte_Resume.pdf' } : {})}
          >
            {resumeLabel}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-accent-cyan"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`fixed inset-0 bg-navy-900 z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ol className="flex flex-col gap-8 font-mono text-lg text-center">
          {isHomePage &&
            navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-accent-cyan"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          {!isHomePage && (
            <li>
              <a
                href="../"
                className="text-slate-300 hover:text-accent-cyan"
                onClick={() => setIsOpen(false)}
              >
                Back to Portfolio
              </a>
            </li>
          )}
        </ol>
        <a
          href={resumeHref}
          className="mt-12 px-8 py-4 border border-accent-cyan text-accent-cyan rounded font-mono hover:bg-accent-cyan/10 transition-colors"
          onClick={() => setIsOpen(false)}
          {...(!isHomePage ? { download: 'Harsh_Kolte_Resume.pdf' } : {})}
        >
          {resumeLabel}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
