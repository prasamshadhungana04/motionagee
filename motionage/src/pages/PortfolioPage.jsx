import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, Eye, ArrowUpRight, Globe, Palette, Layers, PlayCircle, Video, Sparkles, Shield, Zap, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

// Import your local assets
import logo1 from '../assets/logo1.png'; // Process
import logo2 from '../assets/logo2.png'; // Mockup
import logo3 from '../assets/logo3.png'; // Final Logo
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';
import graphic3 from '../assets/graphic3.png';
import graphic4 from '../assets/graphic4.png';

// GPU-Safe Fade Up Animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function PortfolioPage() {
  const [isReady, setIsReady] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Collect all images from the page
  const collectAllImages = () => {
    const images = [
      // Brand identity images
      { src: logo2, title: "Real-World Mockups", category: "Brand Identity", type: "brand" },
      { src: logo3, title: "Complete Identity System", category: "Brand Identity", type: "brand" },
      { src: logo1, title: "Geometric Drafting & Process", category: "Brand Identity", type: "brand" },
      // Graphic design images
      { src: graphic1, title: "Digital Creative 1", category: "Marketing Creative", type: "graphic" },
      { src: graphic2, title: "Digital Creative 2", category: "Marketing Creative", type: "graphic" },
      { src: graphic3, title: "Digital Creative 3", category: "Marketing Creative", type: "graphic" },
      { src: graphic4, title: "Digital Creative 4", category: "Marketing Creative", type: "graphic" },
      // Video thumbnails
      { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80", title: "Corporate Anthem 2024", category: "Video Production", type: "video" },
      { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80", title: "Product Launch: Neo", category: "Video Production", type: "video" },
      { src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80", title: "TechNova Case Study", category: "Video Production", type: "video" }
    ];
    setAllImages(images);
  };

  const openLightbox = (image, index) => {
    setCurrentImage(image);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % allImages.length;
    setCurrentImageIndex(nextIndex);
    setCurrentImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    setCurrentImageIndex(prevIndex);
    setCurrentImage(allImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  // Collect images on component mount
  useEffect(() => {
    if (isReady) {
      collectAllImages();
    }
  }, [isReady]);

  // Web Architecture Reference Links
  const webProjects = [
    { title: "Enterprise FinTech Dashboard", url: "https://example.com/fintech", tech: ["Next.js", "Tailwind", "AWS"], description: "Real-time analytics platform processing millions of transactions" },
    { title: "Global E-Commerce Platform", url: "https://example.com/ecommerce", tech: ["React", "Shopify Plus", "Node.js"], description: "Multi-currency, multi-language enterprise solution" },
    { title: "Healthcare SaaS Portal", url: "https://example.com/health", tech: ["Vue.js", "PostgreSQL", "Docker"], description: "HIPAA-compliant patient management system" }
  ];

  const graphicImages = [graphic1, graphic2, graphic3, graphic4];

  // Video Production Project Links/Thumbnails
  const videoProjects = [
    { title: "Corporate Anthem 2024", category: "Cinematic Brand Film", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80" },
    { title: "Product Launch: Neo", category: "3D Motion Graphics", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80" },
    { title: "TechNova Case Study", category: "Documentary Short", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80" }
  ];

  // Brand Identity Projects - Reordered as requested
  const brandProjects = [
    {
      phase: "01",
      title: "Real-World Mockups",
      subtitle: "Visual Application & Testing",
      description: "Our designs come to life through rigorous real-world mockup testing. We visualize your brand across business cards, billboards, digital screens, and merchandise to ensure perfect execution across every touchpoint.",
      image: logo2,
      color: "from-purple-500 to-pink-500",
      imageIndex: 0
    },
    {
      phase: "02",
      title: "Complete Identity System",
      subtitle: "Comprehensive Brand Architecture",
      description: "A complete ecosystem of brand assets including primary logos, secondary marks, color palettes, typography systems, and usage guidelines that ensure consistent brand expression across all platforms.",
      image: logo3,
      color: "from-blue-500 to-cyan-500",
      imageIndex: 1
    },
    {
      phase: "03",
      title: "Geometric Drafting & Process",
      subtitle: "The Science of Design",
      description: "Every mark begins with precise geometric principles. Our process involves extensive research, sketching, and digital refinement to create logos that are mathematically balanced and visually powerful.",
      image: logo1,
      color: "from-emerald-500 to-teal-500",
      imageIndex: 2
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#050814] dark:via-[#070b17] dark:to-[#050814] selection:bg-blue-500/30 font-sans transition-colors duration-500">
      <SEO title="Portfolio | MotionAge" description="Explore our global deployments, brand identities, digital creatives, and cinematic video productions." />

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div className="relative max-w-7xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {currentImage.category}
                  </span>
                  <span className="text-xs text-white/60">
                    {currentImageIndex + 1} / {allImages.length}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{currentImage.title}</h3>
                <p className="text-sm text-white/70 mt-1">Click anywhere outside to close • Use arrow keys to navigate</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. CINEMATIC HERO SECTION - WITH GOOGLE BACKGROUND IMAGE */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        {/* Background Image from Google */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Tech workspace background"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-blue-900/60"></div>
          {/* Subtle gradient overlay for smooth blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements - Light particles overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Global Portfolio</span>
              <Sparkles size={12} className="text-blue-300" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[1.05] drop-shadow-lg">
              Proven{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">
                Excellence.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              A curated collection of scalable web architectures, meticulous brand identities, 
              high-conversion digital creatives, and cinematic films.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield size={16} className="text-blue-300" /> Enterprise Grade
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap size={16} className="text-purple-300" /> Production Ready
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles size={16} className="text-pink-300" /> Award Winning
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {isReady && (
        <div className="relative z-10">
          
          {/* 2. WEB DEVELOPMENT & ARCHITECTURE - Cleaner Cards */}
          <section className="pt-16 pb-20 md:pt-20 md:pb-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.15 }} 
                variants={fadeUp} 
                className="lg:w-1/3 lg:sticky lg:top-28"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center text-white mb-6">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-4">
                  Digital <br /> Architecture.
                </h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  We engineer blazing-fast, secure, and infinitely scalable web platforms. 
                  Below are live references of our enterprise-grade deployments.
                </p>
              </motion.div>

              <div className="lg:w-2/3 flex flex-col gap-6">
                {webProjects.map((project, idx) => (
                  <motion.a 
                    key={idx} 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true, amount: 0.15 }} 
                    variants={fadeUp} 
                    transition={{ delay: idx * 0.1 }}
                    className="group block"
                  >
                    <div className="p-8 rounded-2xl bg-white/80 dark:bg-[#0c1222]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                              <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-[#050814] border border-slate-200 dark:border-white/5 rounded-lg text-[10px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-white/5 dark:to-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 shadow-md">
                          <ExternalLink size={18} />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>

          {/* 3. BRAND IDENTITY & LOGOS - REORDERED & CLICKABLE IMAGES */}
          <section className="py-20 md:py-24 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-[#0a0f1c]/50 dark:to-[#0c1222]/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
              
              <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.15 }} 
                variants={fadeUp} 
                className="max-w-3xl mb-12 md:mb-16"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center text-white mb-6">
                  <Palette size={24} strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-4">
                  LOGOs & BRAND IDENTITY .
                </h2>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  A logo is not just a mark; it is the visual anchor of your corporate identity. 
                  We approach branding through a rigorous process of market research, geometric drafting, 
                  and real-world mockup testing to ensure your brand commands absolute authority.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-8">
                {/* Reordered Brand Projects with clickable images */}
                {brandProjects.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true, amount: 0.15 }} 
                    variants={fadeUp} 
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                      
                      {/* Image Section - Clickable */}
                      <div 
                        className="h-[400px] lg:h-[500px] w-full overflow-hidden relative bg-slate-100 dark:bg-slate-900 cursor-pointer"
                        onClick={() => openLightbox({ src: project.image, title: project.title, category: "Brand Identity" }, project.imageIndex)}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          loading="lazy" 
                          decoding="async" 
                          className="w-full h-full object-contain object-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                            <Eye size={16} className="text-blue-600" />
                            <span className="text-sm font-medium text-slate-900 dark:text-white">Click to expand</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <span className={`inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r ${project.color} text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md`}>
                            Phase {project.phase}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wide">
                          {project.subtitle}
                        </p>
                        
                        <p className="text-base text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                          {project.description}
                        </p>
                        
                        <button 
                          onClick={() => openLightbox({ src: project.image, title: project.title, category: "Brand Identity" }, project.imageIndex)}
                          className="mt-6 flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:gap-3 transition-all group/btn"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-white/10 dark:to-white/5 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                            <Eye size={14} />
                          </div>
                          <span className="text-xs font-medium">View full image</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. DIGITAL & MARKETING CREATIVES - Clickable Grid */}
          <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <motion.div 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, amount: 0.15 }} 
              variants={staggerContainer} 
              className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            >
              <motion.div variants={fadeUp} className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg flex items-center justify-center text-white mb-6">
                <Layers size={24} strokeWidth={1.5} />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-4">
                Digital & Marketing Creatives.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Thumb-stopping visuals engineered for the algorithmic feed. Click on any image to view in full resolution.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
              {graphicImages.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true, amount: 0.15 }} 
                  variants={fadeUp} 
                  transition={{ delay: idx * 0.1 }}
                  className="relative group rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox({ src: img, title: `Digital Creative ${idx + 1}`, category: "Marketing Creative" }, 3 + idx)}
                >
                  <img 
                    src={img} 
                    alt={`Graphic Creative ${idx + 1}`} 
                    loading="lazy" 
                    decoding="async" 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 will-change-transform transform-gpu" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                      <Eye size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">View full size</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-bold">Creative {idx + 1}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 5. VIDEO PRODUCTION & MOTION GRAPHICS - Clickable Thumbnails */}
          <section className="py-20 md:py-24 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-[#0a0f1c]/50 dark:to-[#0c1222]/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
              <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.15 }} 
                variants={staggerContainer} 
                className="max-w-3xl mb-12 md:mb-16"
              >
                <motion.div variants={fadeUp} className="w-14 h-14 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 shadow-lg flex items-center justify-center text-white mb-6">
                  <Video size={24} strokeWidth={1.5} />
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-4">
                  Motion & Video Production.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  High-impact visual storytelling. Click on any thumbnail to view the full image gallery.
                </motion.p>
              </motion.div>

              {/* Cinematic Bento Box Video Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[280px] md:auto-rows-[320px]">
                {videoProjects.map((vid, idx) => (
                  <motion.div 
                    key={idx} 
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: true, amount: 0.15 }} 
                    variants={fadeUp} 
                    transition={{ delay: idx * 0.1 }}
                    className={`relative group rounded-2xl overflow-hidden bg-slate-900 shadow-xl hover:shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 cursor-pointer ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1'}`}
                    onClick={() => openLightbox({ src: vid.image, title: vid.title, category: vid.category }, 7 + idx)}
                  >
                    <img 
                      src={vid.image} 
                      alt={vid.title} 
                      loading="lazy" 
                      decoding="async" 
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-700 will-change-transform transform-gpu" 
                    />
                    
                    {/* Cinematic Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/30 to-transparent pointer-events-none"></div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
                        <Eye size={32} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text Container */}
                    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 pr-6">
                      <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-[10px] font-extrabold uppercase tracking-wider mb-2 shadow-lg">
                        {vid.category}
                      </span>
                      <h3 className={`font-black text-white tracking-tighter drop-shadow-lg ${idx === 0 ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-lg md:text-xl'}`}>
                        {vid.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. PDF PROFILE CTA - Cleaner Design */}
          <section className="py-20 md:py-24 bg-white dark:bg-[#0c1222] relative overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
              <motion.div 
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true, amount: 0.2 }} 
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center text-white mb-8">
                  <Sparkles size={32} strokeWidth={1.5} />
                </motion.div>
                
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-5 tracking-tighter leading-[1.1]">
                  Dive deeper into our{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                    Ecosystem.
                  </span>
                </motion.h2>
                
                <motion.p variants={fadeUp} className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                  Want to see the full scope of our capabilities? View our complete corporate profile 
                  online or download the PDF for your records.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  {/* View PDF Button */}
                  <a 
                    href="/motionage.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-10 py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-200 text-white dark:text-slate-900 font-bold text-sm uppercase tracking-wider hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Eye size={18} className="text-blue-400 dark:text-blue-600" />
                    <span>View Profile</span>
                    <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  {/* Download PDF Button */}
                  <a 
                    href="/motionage.pdf" 
                    download
                    className="group flex items-center justify-center gap-3 px-10 py-4 w-full sm:w-auto rounded-full bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-white/5 hover:border-blue-500 transition-all duration-300"
                  >
                    <Download size={18} className="text-slate-500 dark:text-slate-400 group-hover:-translate-y-1 transition-transform" />
                    <span>Download PDF</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}