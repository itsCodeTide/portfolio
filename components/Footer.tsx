import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-slate-400">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm font-mono">&copy; {new Date().getFullYear()} {PROFILE.name}.</p>
          <p className="text-xs text-slate-600 mt-1">Built with React, TypeScript & Tailwind.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">
            <Github size={20} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">
            <Linkedin size={20} />
          </a>
          {PROFILE.twitter && (
            <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="hover:text-primary-400 transition-colors">
              {/* X Logo SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          )}
          <a href={`mailto:${PROFILE.email}`} className="hover:text-primary-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;