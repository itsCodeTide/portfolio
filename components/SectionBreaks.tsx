import React, { useRef } from 'react';
import { Activity, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion, useScroll, useTransform } from 'framer-motion';

export const EngineeringPrinciples: React.FC = () => (
  <div className="w-full py-12 md:py-16 border-y border-white/5 bg-slate-900/20 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-primary-500/5 blur-[120px] pointer-events-none"></div>
    
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5 relative z-10">
      <ScrollReveal animation="slide-up" delay={100}>
        <div className="flex flex-col items-center p-4 sm:p-6 group">
          <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Zap className="text-primary-400" size={24} />
          </div>
          <h4 className="text-white font-bold text-lg mb-2">High Performance</h4>
          <p className="text-slate-400 text-sm leading-relaxed">Optimized for low latency and high throughput under heavy computational loads.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="slide-up" delay={200}>
        <div className="flex flex-col items-center p-4 sm:p-6 group">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <ShieldCheck className="text-emerald-400" size={24} />
          </div>
          <h4 className="text-white font-bold text-lg mb-2">Secure & Reliable</h4>
          <p className="text-slate-400 text-sm leading-relaxed">Built with fault tolerance, zero-trust security, and 99.99% high availability in mind.</p>
        </div>
      </ScrollReveal>
      <ScrollReveal animation="slide-up" delay={300}>
        <div className="flex flex-col items-center p-4 sm:p-6 group">
          <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Activity className="text-indigo-400" size={24} />
          </div>
          <h4 className="text-white font-bold text-lg mb-2">Scalable Architecture</h4>
          <p className="text-slate-400 text-sm leading-relaxed">Designed as decoupled microservices to grow seamlessly from zero to millions of users.</p>
        </div>
      </ScrollReveal>
    </div>
  </div>
);

export const TechEcosystemBanner: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className="w-full py-12 bg-slate-950 border-y border-white/5 overflow-hidden relative">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />
      <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
        <ScrollReveal animation="slide-up">
          <h4 className="text-slate-300 font-mono text-sm uppercase tracking-widest mb-6">Core Technologies & Ecosystem</h4>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['Java 21', 'Python', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Docker', 'Kubernetes', 'LangChain', 'Pinecone'].map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg text-slate-300 text-sm font-medium hover:border-primary-500/50 hover:text-primary-400 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export const ArchitectureSnippet: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <div ref={ref} className="w-full py-16 flex justify-center px-4 overflow-hidden bg-slate-950/50 relative">
      <motion.div style={{ y }} className="w-full max-w-3xl relative z-10">
        <ScrollReveal animation="scale">
          <div className="relative w-full bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl p-4 sm:p-6 text-xs sm:text-sm font-mono text-slate-300 overflow-x-auto group hover:border-primary-500/30 transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Mac-style window controls */}
            <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <div className="text-slate-500 text-xs">SystemController.java</div>
            </div>

            <pre className="leading-relaxed">
              <span className="text-pink-400">@RestController</span><br/>
              <span className="text-pink-400">@RequestMapping</span>(<span className="text-green-400">"/api/v1/systems"</span>)<br/>
              <span className="text-blue-400">public class</span> <span className="text-yellow-300">SystemController</span> {'{'}<br/>
              <br/>
              {'  '}<span className="text-slate-500">/**</span><br/>
              {'  '}<span className="text-slate-500"> * Health check endpoint for Kubernetes readiness probes.</span><br/>
              {'  '}<span className="text-slate-500"> * Ensures 99.99% uptime and system reliability.</span><br/>
              {'  '}<span className="text-slate-500"> */</span><br/>
              {'  '}<span className="text-pink-400">@GetMapping</span>(<span className="text-green-400">"/health"</span>)<br/>
              {'  '}<span className="text-blue-400">public</span> ResponseEntity&lt;HealthStatus&gt; <span className="text-yellow-300">checkHealth</span>() {'{'}<br/>
              {'    '}<span className="text-blue-400">return</span> ResponseEntity.ok(SystemMonitor.getStatus());<br/>
              {'  '}{'}'}<br/>
              {'}'}
            </pre>
          </div>
        </ScrollReveal>
      </motion.div>
    </div>
  );
};
