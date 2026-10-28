import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSmoothScroll } from '../lib/motion';

interface SiteShellProps {
  children: React.ReactNode;
  currentPage: 'home' | 'resume';
}

const SiteShell: React.FC<SiteShellProps> = ({ children, currentPage }) => {
  useSmoothScroll();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="grain no-print" aria-hidden="true" />
      <div id="top" className="relative flex min-h-screen flex-col">
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
