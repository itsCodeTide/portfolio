import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Profile Picture Section - Creative & Professional */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end pr-0 md:pr-8">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
             className="relative w-64 h-64 md:w-80 md:h-80 group"
          >
             {/* Glowing Background Blob */}
             <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
             
             {/* Animated Tech Rings */}
             <div className="absolute -inset-4 border border-primary-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute -inset-1 border border-primary-400/10 rounded-full"></div>
             <div className="absolute -inset-8 border border-slate-700/50 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]"></div>

             {/* Image Container */}
             <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl z-10 bg-slate-800">
               {/* 
                 TODO: Replace with actual professional headshot. 
               */}
                <img 
                  src="media\WhatsApp Image 2026-01-04 at 10.20.56.jpeg" 
                  alt="Labh Jethe" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-105"
                />
                
                {/* Overlay Glint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             </div>

             {/* Floating Tech Badge */}
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="absolute bottom-6 -right-6 bg-slate-900/95 backdrop-blur border border-primary-500/30 p-3 rounded-lg shadow-xl z-20 flex items-center gap-3"
             >
               <div className="relative">
                 <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse z-10 relative"></div>
                 <div className="absolute inset-0 bg-green-500 blur-sm animate-pulse"></div>
               </div>
               <div className="flex flex-col">
                 <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider leading-none mb-1">System Status</span>
                 <span className="text-xs font-bold text-slate-200">Online & Active</span>
               </div>
             </motion.div>
          </motion.div>
        </div>

        {/* Text Section - ATS Optimized */}
        <div className="md:col-span-7 space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 relative inline-block">
               Cloud-Native <span className="text-primary-500">Backend Engineer</span>
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary-500/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
               </svg>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a <strong>Cloud-Native Backend Engineer</strong> focused on building <strong>scalable, reliable, and maintainable backend systems</strong>. I design production-ready services with an emphasis on clean architecture, API consistency, and long-term system scalability.
              </p>
              <p>
                My primary expertise is in backend development using <strong>Java</strong> and <strong>Spring Boot</strong>, with strong foundations in RESTful API design, SQL databases, data structures, algorithms, and object-oriented programming. I work in <strong>Linux-based environments</strong>, use <strong>Git</strong> for version control, and follow modern software engineering and system design principles.
              </p>
              <p>
                I actively use <strong>AI</strong> as an engineering tool to automate infrastructure, accelerate development workflows, and improve system reliability. This includes AI-assisted infrastructure automation, code generation, refactoring, debugging, testing, and documentation, as well as designing backend services that integrate AI-powered components where they add practical value.
              </p>
              <p>
                My engineering approach is system-oriented and pragmatic, with a focus on performance, reliability, and maintainability. I aim to build cloud-native backend solutions that scale efficiently, adapt to changing requirements, and remain robust in real-world production environments.
              </p>
            </div>

            {/* Tech Stack Mini-Bar */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
               {['Java', 'Spring Boot', 'Python', 'FastAPI', 'Microservices', 'AWS', 'Kafka', 'Redis', 'LangChain'].map((tag) => (
                 <span key={tag} className="px-3 py-1 bg-slate-800 rounded text-sm text-primary-400 font-mono border border-primary-500/20">
                   #{tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;