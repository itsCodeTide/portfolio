import React from 'react';
import Section from '../components/Section';
import { PROFILE } from '../constants';
import { Mail, Github, Linkedin, Send, Phone, MapPin, User } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="!pb-0">
      <div className="mb-16">
         <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Connect <span className="text-primary-500">With Me</span>
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          Have a project in mind or want to discuss backend architecture? Fill out the form below or reach out directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info Side */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 space-y-8 backdrop-blur-sm">
                <div>
                    <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                    <div className="space-y-6">
                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <a 
                              href={`mailto:${PROFILE.email}`}
                              className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors cursor-pointer"
                            >
                                <Mail size={24} />
                            </a>
                            <div>
                                <h4 className="text-slate-200 font-medium mb-1">Email</h4>
                                <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-primary-400 transition-colors block break-all">{PROFILE.email}</a>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors cursor-pointer">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-slate-200 font-medium mb-1">Location</h4>
                                <p className="text-slate-400">{PROFILE.location}</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <a 
                              href={PROFILE.github} 
                              target="_blank" 
                              rel="noreferrer"
                              className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors cursor-pointer"
                            >
                                <Github size={24} />
                            </a>
                            <div>
                                <h4 className="text-slate-200 font-medium mb-1">GitHub</h4>
                                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">Check out my code</a>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                            <a 
                              href={PROFILE.linkedin} 
                              target="_blank" 
                              rel="noreferrer"
                              className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors cursor-pointer"
                            >
                                <Linkedin size={24} />
                            </a>
                            <div>
                                <h4 className="text-slate-200 font-medium mb-1">LinkedIn</h4>
                                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">Connect professionally</a>
                            </div>
                        </motion.div>

                        {PROFILE.twitter && (
                          <motion.div variants={itemVariants} className="flex items-start gap-4 group">
                              <a 
                                href={PROFILE.twitter} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors cursor-pointer"
                              >
                                  {/* X Logo SVG */}
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                  </svg>
                              </a>
                              <div>
                                  <h4 className="text-slate-200 font-medium mb-1">X / Twitter</h4>
                                  <a href={PROFILE.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">Follow me</a>
                              </div>
                          </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Form Side */}
        <motion.form 
          className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 space-y-6 backdrop-blur-sm" 
          onSubmit={(e) => e.preventDefault()}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Name</label>
                <div className="relative">
                    <User className="absolute left-4 top-3.5 text-slate-500" size={18} />
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                    />
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-slate-500" size={18} />
                        <input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                </motion.div>
                 <motion.div variants={itemVariants} className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Phone No.</label>
                    <div className="relative">
                        <Phone className="absolute left-4 top-3.5 text-slate-500" size={18} />
                        <input 
                            type="tel" 
                            placeholder="+91 98765 43210" 
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-3 px-4 text-slate-200 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
            </motion.div>

            <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 group"
            >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;