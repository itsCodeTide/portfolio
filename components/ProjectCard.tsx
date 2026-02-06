import React, { useRef, useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Server, Database, Box } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotX = -((y - rect.height / 2) / rect.height) * 10;
    const rotY = ((x - rect.width / 2) / rect.width) * 10;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-primary-500/50 transition-colors duration-300 shadow-xl group relative overflow-hidden h-full"
    >
      {/* Glossy overlay effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ transform: "translateZ(20px)" }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-800 rounded-lg text-primary-400">
               {project.category === 'api' ? <Server size={20} /> : project.category === 'system' ? <Box size={20} /> : <Database size={20} />}
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="View Source">
              <Github size={20} />
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 mb-6 leading-relaxed text-sm">
          {project.shortDescription}
        </p>

        <div className="bg-slate-950/50 rounded-lg p-4 mb-6 border border-slate-800/50">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">The Challenge</h4>
          <p className="text-sm text-slate-300 italic">"{project.problem}"</p>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Architecture</h4>
          <p className="text-sm text-slate-300">{project.architecture}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-mono px-3 py-1 bg-primary-900/20 text-primary-300 rounded-full border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;