import React, { useRef } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const ParallaxCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax: different columns move at slightly different speeds
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 3 === 1 ? -30 : 0]);

  return (
    <motion.div ref={ref} style={{ y }} className="h-full">
      {children}
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Featured <span className="text-primary-500">Projects</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          Real-world problems solved with clean architecture. These projects highlight my ability to design APIs, manage databases, and implement security.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project, index) => (
           <motion.div key={project.id} variants={item} className="h-full">
             <ParallaxCard index={index}>
               <ProjectCard project={project} />
             </ParallaxCard>
           </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;