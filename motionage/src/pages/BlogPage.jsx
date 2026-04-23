import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, ArrowUpRight, BookOpen, Mail, Code, Palette, Megaphone, Terminal, Cpu, Camera, TrendingUp, Download, User, Tag, Heart, Share2, MessageCircle, Sparkles, Globe, Zap, Shield, Layers, ChevronRight, Briefcase, ExternalLink, Award, Target, Rocket, Lightbulb, Star, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

// Import existing assets to use as blog thumbnails
import hero_1 from '../assets/hero_1.png';
import hero_2 from '../assets/hero_2.png';
import logo3 from '../assets/logo3.png';
import graphic1 from '../assets/graphic1.png';
import graphic2 from '../assets/graphic2.png';
import itImage from '../assets/hero_it.jpeg';

// Google Image URL for hero background (high-res tech workspace image)
const heroBackgroundImage = "https://www.google.com/url?q=https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg&sa=U&ved=2ahUKEwjN3Z-G8_SJAxWXW_UHHWjZDPE4ChAWegQIChAB&usg=AOvVaw0Zb5KQ5q5K5q5K5q5K5q5";

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

export default function BlogPage() {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail('');
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const navigateToPortfolio = (path) => {
    navigate('/portfolio');
  };

  const navigateToBlogPost = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const featuredPost = {
    id: "future-of-web-architecture",
    title: "The Future of Enterprise Web Architecture in 2025",
    excerpt: "Why headless CMS, edge computing, and Next.js are no longer just buzzwords, but absolute necessities for scaling global digital ecosystems without dropping a single frame.",
    category: "Engineering",
    date: "Oct 12, 2024",
    readTime: "8 min read",
    image: hero_2,
    likes: 247,
    comments: 42
  };

  const categories = [
    { 
      name: "Engineering", 
      count: 24, 
      icon: <Code size={18} />, 
      color: "blue",
      description: "Deep dives into scalable systems, cloud infrastructure, and modern development practices.",
      slug: "engineering",
      portfolioLink: "/portfolio?category=engineering"
    },
    { 
      name: "Design & UX", 
      count: 18, 
      icon: <Palette size={18} />, 
      color: "purple",
      description: "Visual identity, user experience, and creative direction for digital products.",
      slug: "design-ux",
      portfolioLink: "/portfolio?category=design"
    },
    { 
      name: "Growth Marketing", 
      count: 15, 
      icon: <Megaphone size={18} />, 
      color: "emerald",
      description: "Data-driven strategies to scale user acquisition and maximize ROI.",
      slug: "growth-marketing",
      portfolioLink: "/portfolio?category=marketing"
    },
    { 
      name: "Architecture", 
      count: 12, 
      icon: <Cpu size={18} />, 
      color: "amber",
      description: "System design patterns, microservices, and enterprise infrastructure.",
      slug: "architecture",
      portfolioLink: "/portfolio?category=architecture"
    },
    { 
      name: "Video Production", 
      count: 9, 
      icon: <Camera size={18} />, 
      color: "rose",
      description: "Cinematic storytelling, motion graphics, and visual effects.",
      slug: "video-production",
      portfolioLink: "/portfolio?category=video"
    },
    { 
      name: "Tech Culture", 
      count: 7, 
      icon: <Terminal size={18} />, 
      color: "indigo",
      description: "Team dynamics, remote work, and the future of tech workplace.",
      slug: "tech-culture",
      portfolioLink: "/portfolio?category=culture"
    },
  ];

  const recentPosts = [
    {
      id: "psychology-of-branding",
      title: "Designing for Conversion: The Psychology Behind Brand Identity",
      excerpt: "A logo is not just a mark. Explore how geometric drafting and color psychology directly influence user trust and customer acquisition costs.",
      category: "Design & UX",
      date: "Sep 28, 2024",
      readTime: "5 min read",
      image: logo3,
      likes: 156,
      comments: 23
    },
    {
      id: "social-media-roi",
      title: "Maximizing ROI with Data-Driven Meta Ads",
      excerpt: "Stop guessing and start scaling. How to utilize multivariate A/B testing and algorithmic creative design to multiply your return on ad spend.",
      category: "Growth Marketing",
      date: "Sep 15, 2024",
      readTime: "6 min read",
      image: graphic1,
      likes: 203,
      comments: 31
    },
    {
      id: "cinematic-storytelling",
      title: "Cinematic Storytelling in B2B SaaS",
      excerpt: "Why high-fidelity motion graphics and corporate documentaries are replacing traditional pitch decks in the modern enterprise sales funnel.",
      category: "Video Production",
      date: "Aug 30, 2024",
      readTime: "7 min read",
      image: graphic2,
      likes: 178,
      comments: 19
    },
    {
      id: "zero-trust-security",
      title: "Implementing Zero-Trust Architecture",
      excerpt: "A deep dive into military-grade web security protocols required for handling millions of concurrent users securely.",
      category: "Engineering",
      date: "Aug 12, 2024",
      readTime: "10 min read",
      image: itImage,
      likes: 312,
      comments: 47
    },
    {
      id: "visual-identity-craft",
      title: "Building the MotionAge Framework",
      excerpt: "How we bridge the gap between heavy enterprise software engineering and award-winning visual identity.",
      category: "Company",
      date: "Jul 22, 2024",
      readTime: "4 min read",
      image: hero_1,
      likes: 89,
      comments: 12
    }
  ];

  const successMetrics = [
    { value: "150+", label: "Projects Delivered", icon: <CheckCircle size={20} /> },
    { value: "98%", label: "Client Satisfaction", icon: <Star size={20} /> },
    { value: "50M+", label: "Users Impacted", icon: <Globe size={20} /> },
    { value: "24/7", label: "Enterprise Support", icon: <Shield size={20} /> }
  ];

  // Split posts: first 4 in grid, 5th (MotionAge Framework) separate with side content
  const gridPosts = recentPosts.slice(0, 4);
  const featuredFrameworkPost = recentPosts[4];

  // Fallback gradient background if image fails to load
  const fallbackBackground = "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #2e1065 100%)";

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#050814] dark:via-[#070b17] dark:to-[#050814] selection:bg-blue-500/30 font-sans transition-colors duration-500">
      <SEO title="Insights & Blog | MotionAge" description="Explore our latest thoughts on software architecture, digital design, and growth marketing." />

      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-2xl animate-bounce flex items-center gap-2">
          <Sparkles size={16} /> Thanks for subscribing! 🎉
        </div>
      )}

      {/* Hero Section with Background Image from Google */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
         
  
            <img 
              src="https://media.istockphoto.com/id/529115956/photo/vintage-springy-streetlight.jpg?s=612x612&w=0&k=20&c=fKqPB1OEh9quMVvepRaMLY0SsFz2ZYvg9U4OTYMXDmE="
              alt="Modern technology workspace with coding setup and digital innovation" 
              className="w-full h-full object-cover object-center"
              loading="eager"
              onError={() => setImageError(true)}
            />
          ) : (
            <div style={{ background: fallbackBackground }} className="w-full h-full"></div>
          )
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
          {/* Additional gradient accents */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30 mix-blend-overlay"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-7xl mx-auto text-center">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 dark:bg-slate-800/50 backdrop-blur-md border border-white/30 dark:border-white/20 text-white font-extrabold uppercase tracking-[0.25em] text-[10px] md:text-xs mb-5 shadow-lg">
              <BookOpen size={14} /> Welcome to MotionAge Insights
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.05] drop-shadow-2xl">
              Engineering & <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                Creative Thinking.
              </span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto mb-8 drop-shadow-md">
              Deep dives into software architecture, brand identity systems, and data-driven marketing from the MotionAge collective. Join 10,000+ readers shaping the future of digital.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigateToPortfolio()} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105 shadow-lg">
                <Briefcase size={18} /> Explore Portfolio <ArrowRight size={16} />
              </button>
              <button onClick={() => navigateToPortfolio('/contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold border border-white/30 hover:bg-white/30 transition-all hover:shadow-xl">
                <Sparkles size={16} /> Write for Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {isReady && (
        <div className="relative z-10">
          
          {/* Featured Article Section */}
          <section className="pt-16 pb-12 md:pt-20 md:pb-16 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Sparkles size={18} className="text-white" />
                  </div>
                  Featured Insight
                </h3>
                <button onClick={() => navigateToPortfolio()} className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium">
                  View All Projects <ExternalLink size={14} />
                </button>
              </div>
              
              <button onClick={() => navigateToBlogPost(featuredPost.id)} className="group block w-full text-left">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white/80 dark:bg-[#0c1222]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="h-[350px] lg:h-full w-full overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                    <img src={featuredPost.image} alt={featuredPost.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-md">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Heart size={12} className="text-red-500 fill-red-500" /> {featuredPost.likes}
                        <MessageCircle size={12} /> {featuredPost.comments}
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {featuredPost.title}
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1"><Calendar size={14}/> {featuredPost.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14}/> {featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                          <Heart size={16} /> Like
                        </button>
                        <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors">
                          <Share2 size={16} /> Share
                        </button>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          </section>

          {/* Categories Section */}
          <section className="py-16 md:py-20 bg-gradient-to-r from-slate-100/50 to-slate-200/50 dark:from-[#070b17]/50 dark:to-[#0a0f1a]/50 border-y border-slate-200 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="mb-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Tag size={18} className="text-white" />
                      </div>
                      Browse by Discipline
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-400">Explore insights from our expert teams across different domains</p>
                  </div>
                  <button onClick={() => navigateToPortfolio()} className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium">
                    View All Categories <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, idx) => {
                  const colorThemes = {
                    blue: "from-blue-500 to-blue-600",
                    purple: "from-purple-500 to-purple-600",
                    emerald: "from-emerald-500 to-emerald-600",
                    amber: "from-amber-500 to-amber-600",
                    rose: "from-rose-500 to-rose-600",
                    indigo: "from-indigo-500 to-indigo-600",
                  };
                  return (
                    <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                      <button onClick={() => navigateToPortfolio(cat.portfolioLink)} className="group block w-full text-left">
                        <div className="p-8 rounded-2xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colorThemes[cat.color]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                            {cat.icon}
                          </div>
                          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{cat.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">{cat.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500">{cat.count} articles</span>
                            <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Recent Articles Grid - First 4 Posts */}
          <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="mb-10 border-b-2 border-slate-200 dark:border-slate-800 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Zap size={18} className="text-white" />
                    </div>
                    Latest Publications
                  </h3>
                  <p className="text-base text-slate-600 dark:text-slate-400">Fresh insights from our team, published weekly</p>
                </div>
                <button onClick={() => navigateToPortfolio()} className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium">
                  View Archive <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {gridPosts.map((post, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ delay: idx * 0.1 }}>
                  <button onClick={() => navigateToBlogPost(post.id)} className="group block w-full text-left">
                    <div className="flex flex-col h-full bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="h-[240px] w-full overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                        <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-2">
                          <Heart size={12} className="fill-red-500 text-red-500" /> {post.likes}
                        </div>
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-widest">
                            {post.category}
                          </span>
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                          </span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                          {post.title}
                        </h4>
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light line-clamp-3 mb-6 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 ml-auto">
                            <MessageCircle size={14} />
                            <span className="text-xs font-medium">{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* MotionAge Framework Post with Side Content */}
          <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Building the MotionAge Framework Post */}
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}>
                <button onClick={() => navigateToBlogPost(featuredFrameworkPost.id)} className="group block w-full text-left">
                  <div className="flex flex-col h-full bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="h-[240px] w-full overflow-hidden relative bg-slate-100 dark:bg-slate-900">
                      <img src={featuredFrameworkPost.image} alt={featuredFrameworkPost.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-2">
                        <Heart size={12} className="fill-red-500 text-red-500" /> {featuredFrameworkPost.likes}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase tracking-widest">
                          {featuredFrameworkPost.category}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock size={12} /> {featuredFrameworkPost.readTime}
                        </span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {featuredFrameworkPost.title}
                      </h4>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-light line-clamp-3 mb-6 flex-grow">
                        {featuredFrameworkPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                            <span className="flex items-center gap-1"><Calendar size={12}/> {featuredFrameworkPost.date}</span>
                            <span className="flex items-center gap-1"><Clock size={12}/> {featuredFrameworkPost.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 ml-auto">
                            <MessageCircle size={14} />
                            <span className="text-xs font-medium">{featuredFrameworkPost.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>

              {/* Right Side Content */}
              <div className="space-y-6">
                {/* Explore Full Archive Button */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <button onClick={() => navigateToPortfolio()} className="group block w-full text-left">
                    <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border border-blue-200 dark:border-blue-800/30 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">Explore Full Archive</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Browse all 85+ articles from our collection</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>

                {/* MotionAge by Numbers */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-900/20 dark:to-purple-900/20 p-6 border border-blue-200 dark:border-blue-800/30">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 text-center">MotionAge by Numbers</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {successMetrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                          <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">
                            {metric.icon}
                          </div>
                          <div className="text-2xl font-black text-slate-900 dark:text-white">{metric.value}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Popular Topics */}
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
                  <div className="rounded-2xl bg-white dark:bg-[#0c1222] p-6 border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <div className="w-7 h-7 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Tag size={14} className="text-white" />
                      </div>
                      Popular Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind", "Figma", "SEO", "Performance", "Security", "AI", "Cloud", "DevOps", "UX Design"].map((tag) => (
                        <button key={tag} onClick={() => navigateToPortfolio(`/portfolio?tag=${tag.toLowerCase()}`)} className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-700 dark:text-slate-300 text-xs rounded-full hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300">
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section id="newsletter" className="mt-12 mb-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
            <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-pink-950/40 p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl flex items-center justify-center text-white mb-6">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter">
                  Never Miss an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Insight</span>
                </h2>
                
                <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 font-light mb-6 max-w-2xl mx-auto">
                  Join 10,000+ engineers, designers, and marketers who receive our weekly newsletter.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Zap size={12} className="text-blue-500" /> Weekly insights
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Shield size={12} className="text-green-500" /> No spam
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <Layers size={12} className="text-pink-500" /> Unsubscribe anytime
                  </div>
                </div>

                <form className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto" onSubmit={handleSubscribe}>
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 w-full bg-white/90 dark:bg-[#0c1222]/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-5 py-3 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
                  />
                  <button type="submit" className="shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
                    Subscribe <ArrowRight size={14} />
                  </button>
                </form>
              </div>
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