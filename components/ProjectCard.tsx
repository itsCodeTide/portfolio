import React, { useState } from 'react';
import { Project } from '../types';
import { Github, ExternalLink, TrendingUp, X, Activity, Server, Shield, Database, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex flex-col h-full hover:border-primary-500/30 transition-colors group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full">
            {project.category}
          </span>
          <div className="flex gap-3 text-slate-400" onClick={(e) => e.stopPropagation()}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 flex-grow">
          {project.shortDescription}
        </p>

        <div className="bg-primary-900/10 border border-primary-500/10 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <TrendingUp className="text-primary-400 shrink-0 mt-1" size={16} />
            <p className="text-sm text-slate-300">
              <strong className="text-slate-200">Impact:</strong> {project.impact}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map(tech => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-10 custom-scrollbar"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4 inline-block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h2>
                  <p className="text-xl text-slate-300">{project.shortDescription}</p>
                </div>

                <div className="flex flex-wrap gap-4 mb-12">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-white/5"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-lg transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <section className="space-y-4">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Activity className="text-red-400" size={20} />
                      The Problem
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Server className="text-blue-400" size={20} />
                      Architecture & Solution
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {project.architecture}
                    </p>
                  </section>

                  <section className="space-y-4 bg-slate-800/50 p-6 rounded-xl border border-white/5">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Shield className="text-amber-400" size={18} />
                      Challenges Overcome
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {project.challenges}
                    </p>
                  </section>
                  
                  <section className="space-y-4 bg-slate-800/50 p-6 rounded-xl border border-white/5">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <Database className="text-emerald-400" size={18} />
                      Scaling & Performance
                    </h4>
                    <p className="text-slate-400 leading-relaxed">
                      {project.scaling}
                    </p>
                  </section>
                </div>

                <section className="mb-12">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-4">
                    <Cpu className="text-purple-400" size={20} />
                    AI Integration & DevOps
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-white/5">
                      <strong className="text-slate-200 block mb-2">AI Integration:</strong> 
                      <p className="text-slate-400">{project.aiIntegration}</p>
                    </div>
                    <div className="bg-slate-800/30 p-6 rounded-xl border border-white/5">
                      <strong className="text-slate-200 block mb-2">DevOps:</strong> 
                      <p className="text-slate-400">{project.devops}</p>
                    </div>
                  </div>
                </section>

                <div className="bg-primary-900/20 border border-primary-500/20 p-8 rounded-2xl relative overflow-hidden mb-12">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full"></div>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10">Measurable Impact</h4>
                  <p className="text-primary-100 text-lg leading-relaxed relative z-10">
                    {project.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-lg border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;