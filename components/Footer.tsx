import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { siteConfig } from '../data/site';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm font-mono">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="hover:text-accent-cyan transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="hover:text-accent-cyan transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="hover:text-accent-cyan transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
      <p className="hover:text-accent-cyan transition-colors cursor-default">
        Designed and built by {siteConfig.name}
      </p>
    </footer>
  );
};

export default Footer;
