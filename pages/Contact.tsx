import React, { useState } from 'react';
import Section from '../components/Section';
import ScrollReveal from '../components/ScrollReveal';
import { PROFILE } from '../constants';
import { Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSuccessMessage('Message sent successfully! I will get back to you soon.');
      setTimeout(() => setSuccessMessage(''), 5000);
    }, 1000);
  };

  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="slide-up">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Connect With Me</h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Have a project in mind or want to discuss backend architecture? Fill out the form below or reach out directly.
            </p>
            <div className="w-20 h-1 bg-primary-500 mt-6"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal animation="slide-right" delay={200}>
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Email</p>
                      <a href={`mailto:${PROFILE.email}`} className="text-slate-200 hover:text-primary-400 transition-colors">
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">Location</p>
                      <p className="text-slate-200">{PROFILE.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <ScrollReveal animation="slide-left" delay={400}>
              <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone No.</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                {successMessage && (
                  <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm text-center animate-fade-in">
                    {successMessage}
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
