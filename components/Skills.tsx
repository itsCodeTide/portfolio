import React, { useMemo } from 'react';
import Section from '../components/Section';
import ScrollReveal from '../components/ScrollReveal';
import { SKILLS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  const groupedSkills = useMemo(() => {
    const groups: Record<string, typeof SKILLS> = {};
    SKILLS.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    return groups;
  }, []);

  return (
    <Section id="skills">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto md:mx-0"></div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Object.entries(groupedSkills).map(([category, skills], index) => (
          <ScrollReveal 
            key={index} 
            animation="slide-up" 
            delay={index * 100}
            className="h-full"
          >
            <div 
              className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-primary-500/30 hover:-translate-y-1 transition-all duration-300 h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => {
                  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
                  return (
                    <span 
                      key={i} 
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 text-slate-300 text-sm rounded-md border border-slate-700/50 hover:border-primary-500/50 hover:text-primary-400 hover:scale-105 transition-all cursor-default"
                    >
                      <IconComponent size={14} />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
