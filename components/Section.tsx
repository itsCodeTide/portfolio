import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2, margin: "-100px" }} 
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
      className={`py-20 md:py-32 relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;