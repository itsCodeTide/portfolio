import React, { useState } from 'react';
import Section from '../components/Section';
import ScrollReveal from '../components/ScrollReveal';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, X, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <Section id="projects">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg mb-6 max-w-2xl mx-auto md:mx-0">A selection of scalable backend systems and AI integrations I've built.</p>
          <div className="w-20 h-1 bg-primary-500 mx-auto md:mx-0"></div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, index) => (
          <ScrollReveal 
            key={index} 
            animation="slide-up" 
            delay={index * 150}
            className="h-full"
          >
            <div 
              className="group relative border border-slate-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 flex flex-col h-full cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              onClick={() => setSelectedProject(project)}
            >
              {/* Creative Background spanning the entire card */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 z-0" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-slate-900/0 to-slate-900/0 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
              
              {/* Content taking full size */}
              <div className="relative z-10 p-6 sm:p-8 flex flex-col flex-grow h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 text-xs font-mono rounded-full border border-primary-500/20 group-hover:border-primary-500/50 transition-colors">
                    {project.category.toUpperCase()}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white text-slate-400 transition-colors transform group-hover:rotate-45 duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                  {project.techStack?.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
                      {tech}
                    </span>
                  ))}
                  {project.techStack && project.techStack.length > 4 && (
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/30 px-2 py-1 rounded-md border border-slate-800/50">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-fade-in">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8 md:p-10 relative z-10 mt-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium">
                    <Github size={16} /> Source Code
                  </a>
                )}
              </div>

              <div className="prose prose-invert max-w-none mb-8">
                <h4 className="text-lg font-semibold text-white mb-2">Problem</h4>
                <p className="text-slate-300 leading-relaxed mb-6">{selectedProject.problem}</p>
                
                <h4 className="text-lg font-semibold text-white mb-2">Architecture</h4>
                <p className="text-slate-300 leading-relaxed mb-6">{selectedProject.architecture}</p>

                <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                <p className="text-slate-300 leading-relaxed mb-6">{selectedProject.impact}</p>
              </div>

              <div>
                <h4 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack?.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800 text-primary-400 text-sm rounded-md border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
