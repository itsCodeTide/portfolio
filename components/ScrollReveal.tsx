import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  animation = 'slide-up',
  delay = 0,
  duration = 700
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'slide-up': return 'opacity-0 translate-y-12';
        case 'slide-left': return 'opacity-0 -translate-x-12';
        case 'slide-right': return 'opacity-0 translate-x-12';
        case 'scale': return 'opacity-0 scale-95';
        case 'fade': return 'opacity-0';
        default: return 'opacity-0 translate-y-12';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
