import React from 'react';
import Section from '../components/Section';
import ScrollReveal from '../components/ScrollReveal';
import { ACTIVITIES } from '../constants';
import { Trophy, Globe, Users, Code } from 'lucide-react';

const Activity: React.FC = () => {
  return (
    <Section id="activity">
      <div className="mb-12 md:mb-16">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hackathons & Activity</h2>
          <p className="text-slate-400 text-lg mb-6 max-w-2xl">Building innovative AI solutions in competitive environments.</p>
          <div className="w-20 h-1 bg-primary-500"></div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ACTIVITIES.map((activity, index) => (
          <ScrollReveal 
            key={index} 
            animation="slide-up" 
            delay={index * 150}
            className="h-full"
          >
            <div className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-primary-500/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-primary-500/20 group-hover:text-primary-400 text-slate-400 transition-colors border border-slate-700 group-hover:border-primary-500/30">
                    <Trophy size={24} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{activity.title}</h3>
                
                <div className="flex items-center gap-4 mb-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Globe size={14} />
                    <span>{activity.location}</span>
                  </div>
                  {/* @ts-ignore */}
                  {activity.stats && (
                    <div className="flex items-center gap-1.5 text-indigo-400">
                      <Users size={14} />
                      {/* @ts-ignore */}
                      <span>{activity.stats}</span>
                    </div>
                  )}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                  {activity.description}
                </p>

                {activity.highlights && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    {activity.highlights.map((highlight, i) => (
                      <span key={i} className="px-2.5 py-1 text-[10px] sm:text-xs font-mono text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};

export default Activity;
