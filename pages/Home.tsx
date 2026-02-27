import React, { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { PROFILE } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const words = "Architecting Scalable Backends.".split(" ");

  return (
    <section 
      id="home" 
      ref={targetRef}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="text-center relative z-10 max-w-6xl mx-auto px-4 w-full"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight overflow-hidden">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ y: 100, opacity: 0, rotate: 5 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.2, 0.65, 0.3, 0.9],
                  delay: i * 0.15
                }}
                className={i >= 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-primary-200 to-slate-400 drop-shadow-sm" : ""}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am <strong className="text-white">{PROFILE.name}</strong>, a {PROFILE.title}. 
          I specialize in architecting robust APIs, high-throughput distributed systems, and cloud-native infrastructure. 
          I leverage AI integration to build and scale complex systems, while continuously advancing my expertise in artificial intelligence technologies.
        </motion.p>

        {/* 3D Floating Code Snippet Visual */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, z: -100 }}
          animate={{ opacity: 1, rotateX: 0, z: 0 }}
          transition={{ delay: 0.6, duration: 1, type: "spring" }}
          className="mt-20 perspective-1000 hidden md:block"
        >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative max-w-3xl mx-auto"
          >
             {/* Glowing backdrop behind the code card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl blur opacity-20 animate-pulse"></div>
            
            <div className="relative p-6 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transform transition-transform hover:scale-[1.01] text-left">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-red-500/50 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-yellow-500/50 shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-green-500/50 shadow-sm"></div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-mono">AIIntegratedService.java</span>
                </div>
              </div>
              <div className="font-mono text-sm text-slate-400 space-y-1 overflow-x-auto">
                <p><span className="text-purple-400">@Service</span></p>
                <p><span className="text-purple-400">@RequiredArgsConstructor</span></p>
                <p><span className="text-purple-400">public class</span> <span className="text-yellow-400">IntelligentOrderService</span> {'{'}</p>
                <p className="pl-4"><span className="text-purple-400">private final</span> VectorStore vectorStore;</p>
                <p className="pl-4"><span className="text-purple-400">private final</span> LLMClient llmClient;</p>
                
                <p className="pl-4 mt-2 text-slate-500">// RAG-enhanced processing</p>
                <p className="pl-4"><span className="text-purple-400">public</span> <span className="text-blue-400">AnalysisResult</span> <span className="text-yellow-400">analyzeOrder</span>(String context) {'{'}</p>
                <p className="pl-8"><span className="text-slate-500">var</span> embeddings = vectorStore.similaritySearch(context);</p>
                <p className="pl-8"><span className="text-purple-400">return</span> llmClient.generate(embeddings, context);</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll to Explore</span>
        <ArrowDown size={16} className="animate-bounce text-primary-500" />
      </motion.div>
    </section>
  );
};

export default Home;