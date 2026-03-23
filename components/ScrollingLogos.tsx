import React from 'react';
import ScrollReveal from './ScrollReveal';

const LOGOS = [
  { name: 'Python', url: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Java', url: 'https://cdn.simpleicons.org/java/ED8B00' },
  { name: 'C++', url: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'JavaScript', url: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'HTML5', url: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', url: 'https://cdn.simpleicons.org/css3/1572B6' },
  { name: 'Tailwind CSS', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/white' },
  { name: 'Spring', url: 'https://cdn.simpleicons.org/spring/6DB33F' },
  { name: 'FastAPI', url: 'https://cdn.simpleicons.org/fastapi/009688' },
  { name: 'PostgreSQL', url: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'MongoDB', url: 'https://cdn.simpleicons.org/mongodb/47A248' },
  { name: 'Redis', url: 'https://cdn.simpleicons.org/redis/FF4438' },
  { name: 'Docker', url: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Kubernetes', url: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
  { name: 'Terraform', url: 'https://cdn.simpleicons.org/terraform/844FBA' },
  { name: 'Jenkins', url: 'https://cdn.simpleicons.org/jenkins/D24939' },
  { name: 'GitHub Actions', url: 'https://cdn.simpleicons.org/githubactions/2088FF' },
  { name: 'Prometheus', url: 'https://cdn.simpleicons.org/prometheus/E6522C' },
  { name: 'Grafana', url: 'https://cdn.simpleicons.org/grafana/F46800' },
  { name: 'LangChain', url: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Claude', url: 'https://cdn.simpleicons.org/anthropic/D97757' },
  { name: 'OpenAI', url: 'https://cdn.simpleicons.org/openai/white' },
];

// Split into two rows for the dual-marquee effect
const ROW1 = LOGOS.slice(0, Math.ceil(LOGOS.length / 2));
const ROW2 = LOGOS.slice(Math.ceil(LOGOS.length / 2));

const ScrollingLogos: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden w-screen left-1/2 -translate-x-1/2 bg-slate-950/50 border-y border-white/5 shadow-2xl">
      {/* Subtle edge fades to prevent hard cutoffs, but kept minimal for maximum visibility */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      
      <ScrollReveal animation="slide-up">
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center relative z-20">
          <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-slate-700"></span>
            Powered by Industry-Standard Technologies
            <span className="w-12 h-px bg-slate-700"></span>
          </h3>
        </div>
      </ScrollReveal>

      {/* Clean, clear scrolling effect with massive logos */}
      <ScrollReveal animation="fade" delay={200} duration={1000}>
        <div className="relative flex flex-col gap-16">
          {/* Row 1: Moves Left to Right */}
          <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused]">
            {[...ROW1, ...ROW1, ...ROW1].map((logo, i) => (
              <div 
                key={`${logo.name}-${i}`} 
                className="flex items-center gap-6 px-10 mx-6 group cursor-default"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="w-16 h-16 md:w-20 md:h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" 
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span className="text-slate-500 font-bold text-3xl md:text-5xl group-hover:text-white transition-colors whitespace-nowrap tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2: Moves Left to Right (slightly different speed for organic feel) */}
          <div className="flex w-max animate-marquee-ltr-slow hover:[animation-play-state:paused]">
            {[...ROW2, ...ROW2, ...ROW2].map((logo, i) => (
              <div 
                key={`${logo.name}-${i}`} 
                className="flex items-center gap-6 px-10 mx-6 group cursor-default"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="w-16 h-16 md:w-20 md:h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" 
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <span className="text-slate-500 font-bold text-3xl md:text-5xl group-hover:text-white transition-colors whitespace-nowrap tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 40s linear infinite;
        }
        .animate-marquee-ltr-slow {
          animation: marquee-ltr 50s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingLogos;
