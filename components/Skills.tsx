import React, { useState } from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { 
  Coffee, Leaf, Globe, Network, Database, Table, Container, Repeat, 
  GitBranch, Activity, Layers, Bot, Terminal, Share2, ArrowRightLeft, 
  Files, Search, Box, RefreshCw, BarChart3, Server, FileCode,
  Sparkles, BrainCircuit, DatabaseZap, Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  Coffee, Leaf, Globe, Network, Database, Table, Container, Repeat, 
  GitBranch, Activity, Layers, Bot, Terminal, Share2, ArrowRightLeft, 
  Files, Search, Box, RefreshCw, BarChart3, Server, FileCode,
  Sparkles, BrainCircuit, DatabaseZap, Zap
};

const SkillCard: React.FC<{ skill: typeof SKILLS[0] }> = ({ skill }) => {
  const Icon = iconMap[skill.icon] || Globe;
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D Rotation (increased limit to +/- 25 deg for more pronounced effect)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -25; 
    const rotateYValue = ((x - centerX) / centerX) * 25;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: rotateX !== 0 ? 1.1 : 1, // Slightly increased scale on hover for better 3D feel
        }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }} // Adjusted for snappier response
        className="relative group bg-slate-900/40 backdrop-blur-md border border-white/5 p-4 rounded-xl cursor-default h-full overflow-hidden"
      >
        {/* Dynamic Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/5 group-hover:from-primary-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
        
        {/* Border Glow */}
        <div className="absolute inset-0 border border-white/5 rounded-xl group-hover:border-primary-500/30 transition-colors duration-300" />

        <div className="relative z-10 flex items-center gap-4">
          <div className="p-2.5 bg-slate-800/80 rounded-lg text-slate-400 group-hover:text-primary-400 group-hover:bg-slate-800 shadow-inner transition-all duration-300">
            <Icon size={22} />
          </div>
          <span className="font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 tracking-wide">
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  // Custom sort to put AI first or specific order if needed, otherwise keeps array order
  const sortedCategories = categories.sort((a, b) => {
    if (a.includes('AI')) return -1;
    if (b.includes('AI')) return 1;
    return 0;
  });

  return (
    <Section id="skills">
      <div className="mb-16 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Arsenal</span>
        </h2>
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <p className="text-slate-400 max-w-2xl text-lg relative z-10">
          My toolkit is specialized for building robust, scalable backend architectures and integrating modern AI capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedCategories.map((category, index) => (
          <div key={category} className="space-y-4 flex flex-col">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-2 pl-1 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-500 rounded-full inline-block"></span>
              {category}
            </h3>
            
            <div className="flex flex-col gap-3">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;