import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-slate-500 text-sm font-mono">
      <div className="flex justify-center gap-6 mb-4 md:hidden">
        <a href="https://github.com/harshkolte01" className="hover:text-accent-cyan transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/harsh-kolte/" className="hover:text-accent-cyan transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <p className="hover:text-accent-cyan transition-colors cursor-default">
        Designed & Built by Harsh Kolte
      </p>
    </footer>
  );
};

export default Footer;