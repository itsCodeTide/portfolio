import React from 'react';
import { Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import { PROFILE } from '../constants';
import ScrollReveal from './ScrollReveal';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8 mt-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-primary-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-slate-400 relative z-10">
        <div className="lg:col-span-2">
          <ScrollReveal animation="slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-primary-500" size={24} />
              <h3 className="text-2xl font-bold text-white tracking-tight">{PROFILE.name}</h3>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-md">
              A passionate Backend Engineer specializing in scalable microservices, AI integrations, and high-performance cloud architectures. Building systems that empower businesses to grow seamlessly.
            </p>
            <div className="flex space-x-4">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 hover:-translate-y-1">
                <Github size={18} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              {PROFILE.twitter && (
                <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:-translate-y-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
        
        <div>
          <ScrollReveal animation="slide-up" delay={150}>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary-400 hover:translate-x-1 inline-block transition-transform duration-300">Overview</a></li>
              <li><a href="#about" className="hover:text-primary-400 hover:translate-x-1 inline-block transition-transform duration-300">About Me</a></li>
              <li><a href="#projects" className="hover:text-primary-400 hover:translate-x-1 inline-block transition-transform duration-300">Featured Work</a></li>
              <li><a href="#experience" className="hover:text-primary-400 hover:translate-x-1 inline-block transition-transform duration-300">Experience</a></li>
            </ul>
          </ScrollReveal>
        </div>
        
        <div>
          <ScrollReveal animation="slide-up" delay={300}>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <a href={`mailto:${PROFILE.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {PROFILE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span>{PROFILE.location}</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
      
      <ScrollReveal animation="fade" delay={400}>
        <div className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm font-mono text-slate-500">&copy; {new Date().getFullYear()} {PROFILE.name}.</p>
            <p className="text-xs text-slate-600 mt-1">All rights reserved.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for new opportunities
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;