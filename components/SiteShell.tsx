import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface SiteShellProps {
  children: React.ReactNode;
  currentPage: 'home' | 'resume';
}

const SiteShell: React.FC<SiteShellProps> = ({ children, currentPage }) => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>
      <div className="relative z-10 min-h-screen text-slate-400 font-sans selection:bg-accent-cyan/30 selection:text-white flex flex-col">
        <Navbar currentPage={currentPage} />
        <main id="main-content" className="max-w-7xl mx-auto w-full flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SiteShell;
