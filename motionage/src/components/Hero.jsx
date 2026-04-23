import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Cpu, Globe, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// =====================================================================
// CUSTOM CURSOR COMPONENT
// =====================================================================
const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 150 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 150 });
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);
  
  return (
    <>
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-50 hidden lg:block mix-blend-difference"
        style={{ left: cursorXSpring, top: cursorYSpring }}
      />
      <motion.div
        className="fixed w-32 h-32 rounded-full bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/30 pointer-events-none z-40 hidden lg:block"
        style={{ 
          left: cursorXSpring, 
          top: cursorYSpring,
          x: -48,
          y: -48
        }}
      />
    </>
  );
};

// =====================================================================
// VIDEO BACKGROUND COMPONENT WITH WORKING URLS
// =====================================================================
const VideoBackground = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
      
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
        videoRef.current.play().catch(e => console.log('Playback prevented:', e));
      };
      
      const handleError = () => {
        console.log('Video failed to load');
        setVideoError(true);
      };
      
      videoRef.current.addEventListener('canplay', handleCanPlay);
      videoRef.current.addEventListener('error', handleError);
      
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
          videoRef.current.removeEventListener('error', handleError);
        }
      };
    }
  }, []);
  
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Fallback animated gradient if video fails */}
      {(!isVideoLoaded || videoError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 via-purple-500/30 to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(0,255,255,0.15)_50%,transparent_70%)] animate-shine" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-float-delayed" />
        </div>
      )}
      
      {/* Video Element - Using Pixabay's reliable CDN */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
          isVideoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Digital Network / Tech Background */}
        <source src="https://videos.splitshire.com/videos/1749476223_rSKLu.mp4" />
        
        {/* Futuristic Technology Background */}
        <source src="https://www.pexels.com/download/video/5439027/" />
        
        {/* Digital Data Stream */}
        <source src="https://cdn.pixabay.com/video/2019/05/29/23637-339109007_large.mp4" type="video/mp4" />
        
        {/* Code Matrix Background */}
        <source src="https://cdn.pixabay.com/video/2023/01/13/146999-796522650_large.mp4" type="video/mp4" />
      </video>
      
      {/* Multiple overlay layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_80%)] opacity-70" />
      
     
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  );
};

// =====================================================================
// FLOATING PARTICLES COMPONENT
// =====================================================================
const FloatingParticles = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));
  
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: '-10%',
            opacity: particle.opacity,
            filter: 'blur(1px)',
          }}
          animate={{
            y: ['0vh', '-150vh'],
            x: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// =====================================================================
// MAIN HERO COMPONENT
// =====================================================================
export default function Hero() {
  const [activeStat, setActiveStat] = useState(0);
  
  const stats = [
    { value: "600+", label: "Projects Delivered", icon: Zap, color: "cyan" },
    { value: "500+", label: "Happy Clients", icon: Shield, color: "blue" },
    { value: "15+", label: "Global Markets", icon: Globe, color: "purple" },
    { value: "99.9%", label: "Uptime Guarantee", icon: Cpu, color: "emerald" },
  ];
  
  // Rotate through stats
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    }
  };
  
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      
      {/* Video Background */}
      <VideoBackground />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen flex items-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-7xl mx-auto">
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            
            {/* Left Column - Main Text Content */}
            <div className="text-center lg:text-left">
              
              {/* Main Headline with Kinetic Typography */}
              <motion.h1 
                variants={textVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-6"
              >
                <span className="text-white">Engineer the</span>
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                    Digital Future
                  </span>
                  <motion.span
                    className="absolute -bottom-3 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  />
                </span>
              </motion.h1>
              
              {/* Dynamic Description */}
              <motion.p 
                variants={textVariants}
                className="text-base md:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                We architect premium digital experiences that scale globally. 
                From AI-driven platforms to immersive interfaces — 
                we're the engineering partner for industry leaders.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  to="/contact" 
                  className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Launch Project</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <Link 
                  to="/work" 
                  className="group px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                  Explore Our Work
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              {/* Trust Badges */}
              <motion.div 
                variants={textVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 pt-6 border-t border-white/10"
              >
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Trusted by innovators</span>
                <div className="flex gap-4">
                  {['AWS', 'Google', 'Microsoft'].map((partner) => (
                    <span key={partner} className="text-xs font-bold text-white/30 hover:text-white/60 transition-colors">
                      {partner}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Animated Stats Card */}
            <motion.div
              variants={textVariants}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glowing orb behind stats */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full animate-pulse" />
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden group hover:border-cyan-400/30 transition-all duration-500">
                  
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    Why Industry Leaders Choose Us
                  </h3>
                  
                  {/* Animated Stats */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStat}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-center mb-8"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                          {React.createElement(stats[activeStat].icon, {
                            size: 32,
                            className: `text-${stats[activeStat].color}-400`
                          })}
                        </div>
                      </div>
                      <motion.div 
                        className="text-5xl md:text-6xl font-black text-white mb-2"
                        key={stats[activeStat].value}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {stats[activeStat].value}
                      </motion.div>
                      <p className="text-white/60 text-sm uppercase tracking-wider">
                        {stats[activeStat].label}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Progress indicators */}
                  <div className="flex justify-center gap-2 mt-6">
                    {stats.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStat(index)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          activeStat === index 
                            ? 'w-8 bg-cyan-400' 
                            : 'w-4 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Floating tech icons */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
                  
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-mono text-white/40 tracking-wider">SCROLL TO EXPLORE</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-cyan-400 to-transparent" />
        </motion.div>
      </motion.div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/30 z-10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-400/30 z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-purple-400/30 z-10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-400/30 z-10" />
      
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-120deg); }
          66% { transform: translate(20px, -20px) rotate(-240deg); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        .animate-shine {
          animation: shine 8s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 12s ease-in-out infinite 4s;
        }
      `}</style>
    </section>
  );
}