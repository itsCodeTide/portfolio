import React, { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackgroundEffect from './BackgroundEffect';
import { motion, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  // Smooth progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects for blobs - they move opposite to scroll AND mouse
  // Blob 1 Movement
  const x1 = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const y1Mouse = useTransform(smoothMouseY, [-1, 1], [-50, 50]);
  const y1Scroll = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y1 = useTransform(() => y1Mouse.get() + y1Scroll.get());

  // Blob 2 Movement (Opposite direction)
  const x2 = useTransform(smoothMouseX, [-1, 1], [50, -50]);
  const y2Mouse = useTransform(smoothMouseY, [-1, 1], [50, -50]);
  const y2Scroll = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(() => y2Mouse.get() + y2Scroll.get());

  // Blob 3 Movement (Subtle)
  const x3 = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const y3Scroll = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-primary-500 selection:text-white flex flex-col overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 origin-left z-[60]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Noise Texture Overlay */}
         <div className="absolute inset-0 z-[50] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

         {/* Dynamic Particle Background */}
         <BackgroundEffect />

         {/* Background ambient light effects with Mouse & Scroll Parallax */}
        <motion.div 
          style={{ x: x1, y: y1 }} 
          className="absolute top-0 -left-4 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"
        />
        <motion.div 
          style={{ x: x2, y: y2 }} 
          className="absolute top-0 -right-4 w-96 h-96 bg-indigo-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"
        />
        <motion.div 
          style={{ x: x3, y: y3Scroll }} 
          className="absolute -bottom-8 left-20 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-4000"
        />
      </div>
      
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;