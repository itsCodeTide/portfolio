import React, { useRef } from 'react';
import { Terminal, Server, Cpu } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col items-center animate-fade-in"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs sm:text-sm font-mono mb-6 sm:mb-8 animate-slide-up">
          <Terminal size={16} />
          <span>System Architecture & AI Integration</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1] animate-slide-up" style={{ animationDelay: '100ms' }}>
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-primary-300 to-indigo-400">Scalable</span><br />
          Distributed Systems.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
          I'm <strong className="text-white">{PROFILE.name}</strong>, a Cloud-Native Backend Engineer. I specialize in high-throughput APIs, DevOps pipelines, and integrating AI/ML models into production-ready architectures.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 animate-slide-up w-full sm:w-auto px-4" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-center gap-2 text-slate-300 bg-slate-900/50 px-5 py-3 rounded-xl border border-white/5 w-full sm:w-auto hover:bg-slate-800/80 transition-colors duration-300">
            <Server className="text-emerald-400 shrink-0" size={20} />
            <span className="font-medium text-sm sm:text-base">Backend & Microservices</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-300 bg-slate-900/50 px-5 py-3 rounded-xl border border-white/5 w-full sm:w-auto hover:bg-slate-800/80 transition-colors duration-300">
            <Cpu className="text-indigo-400 shrink-0" size={20} />
            <span className="font-medium text-sm sm:text-base">AI/ML Integration</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up w-full sm:w-auto px-4 mt-8 sm:mt-10" style={{ animationDelay: '400ms' }}>
          <a href="#projects" className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
            View Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 border border-slate-700 transition-colors flex items-center justify-center gap-2">
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
