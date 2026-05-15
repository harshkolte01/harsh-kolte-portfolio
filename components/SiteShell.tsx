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
      <div className="site-backdrop" aria-hidden="true" />
      <div className="relative z-10 flex min-h-screen flex-col font-sans text-ink-800 selection:bg-accent-teal/22 selection:text-ink-950">
        <Navbar currentPage={currentPage} />
        <main id="main-content" className="w-full flex-grow">
          {children}
        </main>
        <Footer currentPage={currentPage} />
      </div>
    </>
  );
};

export default SiteShell;
