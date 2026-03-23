import React from 'react';
import Section from '../components/Section';
import ScrollReveal from '../components/ScrollReveal';
import { EXPERIENCE } from '../constants';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="mb-12 md:mb-16">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-slate-400 text-lg mb-6 max-w-2xl">My journey building robust backend systems and integrating AI technologies.</p>
          <div className="w-20 h-1 bg-primary-500"></div>
        </ScrollReveal>
      </div>

      <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <ScrollReveal 
            key={index} 
            animation="slide-left" 
            delay={index * 150}
          >
            <div className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-slate-800 border border-primary-500 group-hover:bg-primary-500 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-300"></div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">{exp.title}</h3>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-700"></div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-400 text-xs font-mono font-medium border border-primary-500/20 w-fit">
                  <Calendar size={12} />
                  {exp.year}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-5 max-w-3xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills?.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md group-hover:border-primary-500/50 group-hover:text-primary-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
