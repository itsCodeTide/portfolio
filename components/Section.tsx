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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Consistent premium easing
      className={`py-20 md:py-32 relative ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;