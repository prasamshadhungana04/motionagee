import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CalendarCheck, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const subject = encodeURIComponent(`New Project Consultation: ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Budget Range: ${budget}\n\n` +
      `Project Scope & Goals:\n${message}`
    );

    window.location.href = `mailto:info@motionage.com?subject=${subject}&body=${body}`;
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-[#050814] min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 transition-colors duration-500 font-sans">
      <SEO title="Book Consultation" description="Schedule a free digital strategy consultation with MotionAge." />
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <CalendarCheck size={14} /> Free Strategy Session
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.05]">
            Let's Architect <br/> Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Big Move.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Fill out the form to request a comprehensive consultation and project audit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-12 mb-16 md:mb-24">
          {/* Contact Details Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Headquarters Card */}
            <motion.div 
              initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0 }}
              className="p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-5 transition-shadow hover:shadow-md"
            >
              <div className="p-3.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl"><MapPin size={20}/></div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">Headquarters</h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light">Koteshwor - 32, Kathmandu, Nepal</p>
              </div>
            </motion.div>

            {/* Direct Line Card */}
            <motion.div 
              initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-5 transition-shadow hover:shadow-md"
            >
              <div className="p-3.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl"><Phone size={20}/></div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">Direct Line</h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light">+977 974-4595767</p>
              </div>
            </motion.div>

            {/* NEW SEPARATE BLOCK - Added between Business Inquiries and email */}
            <motion.div 
              initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.15 }}
              className="p-6 md:p-8 rounded-[1.5rem] bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-500/5 dark:to-indigo-500/5 border border-blue-200 dark:border-blue-500/20 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl">
                  <MessageCircle size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-slate-800 dark:text-slate-200 font-medium text-sm flex items-center gap-2">
                    <Clock size={14} className="text-blue-500" />
                    Response within <span className="font-bold text-blue-600 dark:text-blue-400">24 hours</span>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 flex items-center gap-2">
                    <CheckCircle size={14} className="text-green-500" />
                    We speak <span className="font-medium text-slate-700 dark:text-slate-300">English, Nepali & Hindi</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Inquiries Card - Now separate from the above block */}
            <motion.div 
              initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
              className="p-6 md:p-8 rounded-[1.5rem] bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800/80 shadow-sm flex items-start gap-5 transition-shadow hover:shadow-md"
            >
              <div className="p-3.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl"><Mail size={20}/></div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">Business Inquiries</h4>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light">info@motionage.com</p>
              </div>
            </motion.div>
          </div>

          {/* Premium Form */}
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.3 }} className="lg:col-span-3">
            <div className="bg-white dark:bg-[#0c1222] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 dark:border-slate-800/80 shadow-lg relative overflow-hidden h-full">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Request Consultation</h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" name="name" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                    <input type="email" name="email" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Project Budget Range</label>
                  <select name="budget" required className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 outline-none transition appearance-none text-sm">
                    <option value="">Select Range...</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $15k">$5k - $15k</option>
                    <option value="$15k+">$15k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Project Scope & Goals</label>
                  <textarea name="message" required rows="4" className="w-full bg-slate-50 dark:bg-[#050814] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-4 py-3 md:py-3.5 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition resize-none text-sm"></textarea>
                </div>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition shadow-lg hover:-translate-y-0.5 mt-2">
                  Launch Mail Client <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* PROFESSIONAL MAP SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-[#0c1222] p-2 md:p-3"
        >
          <div className="absolute top-6 left-6 z-20 hidden md:block">
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white shadow-lg">
              Visit our Studio
            </div>
          </div>
          
          <div className="relative w-full h-[350px] md:h-[450px] rounded-[1.5rem] overflow-hidden">
            {/* Map Iframe with styling */}
            <iframe 
             

             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.484065462707!2d85.34593128072099!3d27.671430014844603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4abcd08f73093d5b%3A0xd1c7468aa91ae070!2sMotion%20age!5e0!3m2!1sen!2snp!4v1776935895399!5m2!1sen!2snp" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale dark:invert-[0.9] dark:hue-rotate-[180deg] opacity-80 dark:opacity-70 transition-all duration-700 hover:grayscale-0 hover:opacity-100 dark:hover:invert-0"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}