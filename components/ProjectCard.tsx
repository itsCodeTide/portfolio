import React, { useRef } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Server, Database, Box } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth mouse tracking
  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="group relative border border-slate-800 bg-slate-900 overflow-hidden rounded-xl hover:border-slate-700 transition-colors duration-500 h-full flex flex-col"
    >
      {/* Spotlight Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-6 sm:p-8 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-800/50 rounded-lg text-primary-400 border border-slate-700/50 group-hover:border-primary-500/30 transition-colors">
               {project.category === 'api' ? <Server size={20} /> : project.category === 'system' ? <Box size={20} /> : <Database size={20} />}
            </div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded" title="View Source">
              <Github size={18} />
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded" title="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 mb-6 leading-relaxed text-sm">
          {project.shortDescription}
        </p>

        <div className="bg-slate-950/50 rounded-lg p-4 mb-6 border border-slate-800/50 group-hover:border-slate-700/50 transition-colors">
          <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-1 h-1 bg-red-500 rounded-full"></span> The Challenge
          </h4>
          <p className="text-sm text-slate-300 italic">"{project.problem}"</p>
        </div>

        <div className="mb-6 flex-grow">
          <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
            <span className="w-1 h-1 bg-green-500 rounded-full"></span> Architecture
          </h4>
          <p className="text-sm text-slate-300">{project.architecture}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-mono px-2.5 py-1 bg-primary-900/10 text-primary-300/80 rounded border border-primary-500/10 group-hover:border-primary-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;