import React, { useRef } from 'react';
import Section from '../components/Section';
import ScrollReveal from '../components/ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Section id="about">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Picture Section */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end pr-0 lg:pr-8">
          <ScrollReveal animation="scale" className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 group">
             {/* Glowing Background Blob */}
             <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
             
             {/* Animated Tech Rings - Native CSS */}
             <div className="absolute -inset-4 border border-primary-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute -inset-1 border border-primary-400/20 rounded-full" />
             <div className="absolute -inset-8 border border-slate-700/50 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]" />

             {/* Image Container */}
             <motion.div style={{ y }} className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl z-10 bg-slate-800">
                <img 
                  src="/profile.jpeg" 
                  alt="Labh Jethe" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
             </motion.div>

             {/* Floating Tech Badge */}
             <div className="absolute bottom-2 -right-2 sm:bottom-6 sm:-right-6 bg-slate-900/95 backdrop-blur border border-primary-500/30 p-2 sm:p-3 rounded-lg shadow-xl z-20 flex items-center gap-2 sm:gap-3 transition-transform duration-300 group-hover:-translate-y-2">
               <div className="relative">
                 <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse z-10 relative"></div>
                 <div className="absolute inset-0 bg-green-500 blur-sm animate-pulse"></div>
               </div>
               <div className="flex flex-col">
                 <span className="text-[8px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-wider leading-none mb-1">System Status</span>
                 <span className="text-[10px] sm:text-xs font-bold text-slate-200">Online & Active</span>
               </div>
             </div>
          </ScrollReveal>
        </div>

        {/* Text Section */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
          <div>
            <ScrollReveal animation="slide-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 relative inline-block">
                 Cloud-Native <span className="text-primary-500">Backend Engineer</span>
                 <svg className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-primary-500/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                 </svg>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={150}>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed">
                <p>
                  I am a <strong>Cloud-Native Backend Engineer</strong> focused on building <strong>scalable, reliable, and maintainable distributed systems</strong>. Alongside my core backend expertise, I am actively <strong>learning and focusing on AI/ML</strong> to build intelligent, data-driven applications.
                </p>
                <p>
                  My engineering approach is system-oriented and pragmatic. I specialize in architecting high-throughput microservices, designing robust data pipelines, and implementing resilient cloud infrastructure. I thrive in complex environments where performance, fault tolerance, and observability are critical.
                </p>
                <p>
                  I actively leverage <strong>AI integration to build and scale systems</strong>. By incorporating advanced AI tools into my workflow, I accelerate development, automate complex infrastructure tasks, and enhance system reliability.
                </p>
              </div>
            </ScrollReveal>

            {/* Tech Stack Mini-Bar */}
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="mt-6 sm:mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2 sm:gap-4">
                 {['Distributed Systems', 'Microservices', 'Cloud Infrastructure', 'DevOps', 'AI Integration', 'System Design', 'Observability'].map((tag) => (
                   <span key={tag} className="px-2 py-1 sm:px-3 sm:py-1 bg-slate-800 rounded text-xs sm:text-sm text-primary-400 font-mono border border-primary-500/20 hover:bg-primary-500/10 transition-colors cursor-default">
                     #{tag}
                   </span>
                 ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
