import React from 'react';
import Section from '../components/Section';
import { JOURNEY } from '../constants';
import { motion } from 'framer-motion';

const Journey: React.FC = () => {
  return (
    <Section id="journey">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Professional <span className="text-primary-500">Timeline</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          My technical progression from foundational computer science to architectural execution in distributed systems.
        </p>
      </div>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
        {JOURNEY.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative pl-8 md:pl-12 group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-primary-500 ring-4 ring-slate-950 transition-colors duration-300"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
              <span className="text-primary-400 font-mono text-sm font-bold">{item.year}</span>
              <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">{item.title}</h3>
            </div>
            
            <p className="text-slate-400 mb-4 max-w-xl leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Journey;