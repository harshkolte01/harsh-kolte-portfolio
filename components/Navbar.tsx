import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-accent-cyan">HK</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex gap-8 font-mono text-sm">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="text-slate-300 hover:text-accent-cyan transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="https://drive.google.com/file/d/1cGf5B0_za3xozFuJUehkC2nCqijSWngX/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-accent-cyan text-accent-cyan rounded text-sm font-mono hover:bg-accent-cyan/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent-cyan"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-navy-900 z-40 flex flex-col justify-center items-center transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ol className="flex flex-col gap-8 font-mono text-lg text-center">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-accent-cyan"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ol>
        <a
          href="https://drive.google.com/file/d/1cGf5B0_za3xozFuJUehkC2nCqijSWngX/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="mt-12 px-8 py-4 border border-accent-cyan text-accent-cyan rounded font-mono hover:bg-accent-cyan/10 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;