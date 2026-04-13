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
      <div className="relative z-10 min-h-screen font-sans text-ink-800 selection:bg-accent-blue/18 selection:text-ink-950 flex flex-col">
        <Navbar currentPage={currentPage} />
        <main id="main-content" className="w-full flex-grow pt-4">
          {children}
        </main>
        <Footer currentPage={currentPage} />
      </div>
    </>
  );
};

export default SiteShell;
