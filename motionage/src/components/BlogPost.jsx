import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Heart, Share2, Bookmark, MessageCircle, Twitter, Linkedin, Facebook, ArrowRight, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Blog post data based on id
  const getPostData = (postId) => {
    const posts = {
      "future-of-web-architecture": {
        id: "future-of-web-architecture",
        title: "The Future of Enterprise Web Architecture in 2025",
        category: "Engineering",
        date: "Oct 12, 2024",
        readTime: "8 min read",
        author: {
          
          avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=005AE2&color=fff",
          bio: "Sarah is a solutions architect with over 10 years of experience in enterprise web development. She specializes in scalable architectures and cloud infrastructure."
        },
        content: `
          <p class="text-lg leading-relaxed mb-6">In the rapidly evolving landscape of web development, 2025 marks a pivotal moment where performance, scalability, and user experience converge like never before. Enterprise web architecture has transformed from a backend concern to a strategic business advantage.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">The Rise of Edge Computing</h2>
          <p class="mb-6">Edge computing is no longer a futuristic concept—it's a present-day necessity. By processing data closer to users, enterprises can achieve sub-50ms latency globally. This paradigm shift enables real-time applications that were previously impossible at scale.</p>
          
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 p-6 rounded-2xl my-8">
            <h3 class="font-bold text-xl mb-3">Key Insight</h3>
            <p class="mb-0">Companies implementing edge-first architectures report a 40% reduction in load times and a 25% increase in conversion rates.</p>
          </div>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Headless CMS: The New Standard</h2>
          <p class="mb-6">Traditional CMS platforms are giving way to headless architectures that separate content management from presentation. This decoupling allows developers to use modern frameworks like Next.js while enabling marketers to manage content seamlessly.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">AI-Powered Optimization</h2>
          <p class="mb-6">Machine learning algorithms now automatically optimize asset delivery, predict user behavior, and pre-fetch content before users even request it. This predictive approach creates instant experiences that feel magical.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h4 class="font-bold mb-2">Before Edge Computing</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>150-300ms average latency</li>
                <li>Centralized servers</li>
                <li>Higher bandwidth costs</li>
                <li>Limited geographic reach</li>
              </ul>
            </div>
            <div class="border border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/30 rounded-xl p-6">
              <h4 class="font-bold mb-2 text-blue-600">With Edge Computing</h4>
              <ul class="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>20-50ms average latency</li>
                <li>Global distributed network</li>
                <li>Optimized bandwidth usage</li>
                <li>True global reach</li>
              </ul>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Security in the Distributed Era</h2>
          <p class="mb-6">With great distribution comes great responsibility. Zero-trust architectures, automated certificate management, and edge-based DDoS protection are now table stakes for enterprise applications. The days of perimeter-based security are over.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Looking Ahead</h2>
          <p class="mb-6">As we move through 2025, expect to see deeper integration between edge computing and AI, more sophisticated personalization at the edge, and continued evolution of developer tools that make distributed systems accessible to teams of all sizes.</p>
          
          <p class="text-lg font-medium mt-8">The future of web architecture isn't just about speed—it's about creating experiences that feel instantaneous, secure, and personal, regardless of where your users are in the world.</p>
        `,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop",
        likes: 247,
        comments: 42
      },
      "psychology-of-branding": {
        id: "psychology-of-branding",
        title: "Designing for Conversion: The Psychology Behind Brand Identity",
        category: "Design & UX",
        date: "Sep 28, 2024",
        readTime: "5 min read",
        author: {
      
          avatar: "https://ui-avatars.com/api/?name=Marcus+Rodriguez&background=7C3AED&color=fff",
          bio: "Marcus leads our creative direction with a focus on human-centered design and conversion optimization. With 12+ years in brand strategy, he's helped Fortune 500 companies redefine their visual identity."
        },
        content: `
          <p class="text-lg leading-relaxed mb-6">A logo is not just a mark—it's the visual anchor of your corporate identity. In this deep dive, we explore how geometric drafting and color psychology directly influence user trust and customer acquisition costs.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">The Psychology of Color</h2>
          <p class="mb-6">Colors evoke emotions and associations that can make or break a brand's connection with its audience. Blue conveys trust and reliability, red creates urgency and excitement, while green suggests growth and harmony. Understanding these psychological triggers is essential for effective brand design.</p>
          
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-2xl my-8">
            <h3 class="font-bold text-xl mb-3">Color Psychology at a Glance</h3>
            <ul class="list-disc list-inside space-y-2">
              <li><span class="font-bold text-blue-600">Blue:</span> Trust, security, reliability</li>
              <li><span class="font-bold text-red-600">Red:</span> Energy, urgency, passion</li>
              <li><span class="font-bold text-green-600">Green:</span> Growth, harmony, wealth</li>
              <li><span class="font-bold text-purple-600">Purple:</span> Luxury, creativity, wisdom</li>
              <li><span class="font-bold text-yellow-600">Yellow:</span> Optimism, clarity, warmth</li>
            </ul>
          </div>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Geometric Principles in Logo Design</h2>
          <p class="mb-6">Great logos are built on mathematical precision. The golden ratio, Fibonacci sequences, and geometric construction create visual harmony that our brains recognize as "right" even without conscious awareness.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Typography Matters</h2>
          <p class="mb-6">The choice of typeface communicates personality before a single word is read. Serif fonts convey tradition and authority, sans-serif suggests modernity and cleanliness, while script fonts add elegance and personality.</p>
        `,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1920&auto=format&fit=crop",
        likes: 156,
        comments: 23
      },
      "social-media-roi": {
        id: "social-media-roi",
        title: "Maximizing ROI with Data-Driven Meta Ads",
        category: "Growth Marketing",
        date: "Sep 15, 2024",
        readTime: "6 min read",
        author: {
    
          avatar: "https://ui-avatars.com/api/?name=Jessica+Wu&background=10B981&color=fff",
          bio: "Jessica specializes in data-driven marketing strategies that maximize ROI. She's helped SaaS companies scale from zero to millions in revenue through systematic ad optimization."
        },
        content: `
          <p class="text-lg leading-relaxed mb-6">Stop guessing and start scaling. How to utilize multivariate A/B testing and algorithmic creative design to multiply your return on ad spend.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">The Data-Driven Approach</h2>
          <p class="mb-6">Modern advertising requires a scientific approach. By implementing proper tracking, attribution models, and testing frameworks, marketers can move from guesswork to precision targeting.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Creative Testing at Scale</h2>
          <p class="mb-6">The brands winning in 2024 are testing hundreds of creative variations simultaneously. AI-powered tools now make it possible to generate and test ad creatives at unprecedented speed.</p>
        `,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
        likes: 203,
        comments: 31
      },
      "cinematic-storytelling": {
        id: "cinematic-storytelling",
        title: "Cinematic Storytelling in B2B SaaS",
        category: "Video Production",
        date: "Aug 30, 2024",
        readTime: "7 min read",
        author: {
         
          avatar: "https://ui-avatars.com/api/?name=Alex+Thompson&background=F43F5E&color=fff",
          bio: "Alex is an award-winning video producer who has created content for brands like Google, Microsoft, and Amazon."
        },
        content: `
          <p class="text-lg leading-relaxed mb-6">Why high-fidelity motion graphics and corporate documentaries are replacing traditional pitch decks in the modern enterprise sales funnel.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">The Power of Visual Storytelling</h2>
          <p class="mb-6">Humans are wired for stories. When you combine narrative with high-production visuals, you create emotional connections that dry statistics can never achieve.</p>
        `,
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop",
        likes: 178,
        comments: 19
      },
      "zero-trust-security": {
        id: "zero-trust-security",
        title: "Implementing Zero-Trust Architecture",
        category: "Engineering",
        date: "Aug 12, 2024",
        readTime: "10 min read",
        author: {
        
          avatar: "https://ui-avatars.com/api/?name=David+Kumar&background=005AE2&color=fff",
          bio: "David is a certified security expert with expertise in zero-trust frameworks and cloud security."
        },
        content: `
          <p class="text-lg leading-relaxed mb-6">A deep dive into military-grade web security protocols required for handling millions of concurrent users securely.</p>
          
          <h2 class="text-2xl font-bold mb-4 mt-8">Zero-Trust Principles</h2>
          <p class="mb-6">Never trust, always verify. This core principle transforms how we think about network security in the modern era.</p>
        `,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop",
        likes: 312,
        comments: 47
      },
      "visual-identity-craft": {
        id: "visual-identity-craft",
        title: "Building the MotionAge Framework",
        category: "Company",
        date: "Jul 22, 2024",
        readTime: "4 min read",
        author: {
       
          avatar: "https://ui-avatars.com/api/?name=Emily+Park&background=005AE2&color=fff",
          bio: "Emily leads brand strategy at MotionAge, helping companies define and execute their visual identity."
        },
        content: `
          <p class="text-lg leading-relaxed mb-6">How we bridge the gap between heavy enterprise software engineering and award-winning visual identity.</p>
        `,
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1920&auto=format&fit=crop",
        likes: 89,
        comments: 12
      },
      "edge-functions-explained": {
        id: "edge-functions-explained",
        title: "Edge Functions: Delivering dynamic content at zero latency.",
        category: "Architecture",
        date: "Oct 5, 2024",
        readTime: "4 min read",
        author: {
          
          avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=005AE2&color=fff",
          bio: "Sarah specializes in edge computing and serverless architectures."
        },
        content: `<p class="text-lg leading-relaxed mb-6">Edge functions are revolutionizing how we deliver dynamic content. By running code closer to users, we achieve near-instantaneous responses.</p>`,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
        likes: 234,
        comments: 18
      },
      "color-theory-2025": {
        id: "color-theory-2025",
        title: "The 2025 Shift in SaaS Color Theory and Typography.",
        category: "Design & UX",
        date: "Sep 20, 2024",
        readTime: "6 min read",
        author: {
      
          avatar: "https://ui-avatars.com/api/?name=Marcus+Rodriguez&background=7C3AED&color=fff",
          bio: "Marcus tracks emerging design trends and their impact on user experience."
        },
        content: `<p class="text-lg leading-relaxed mb-6">2025 brings a fresh perspective on color and typography in SaaS design. Dark mode isn't just an option anymore—it's expected.</p>`,
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1920&auto=format&fit=crop",
        likes: 189,
        comments: 27
      },
      "kubernetes-scaling": {
        id: "kubernetes-scaling",
        title: "Scaling Kubernetes clusters for massive concurrent traffic.",
        category: "Engineering",
        date: "Sep 8, 2024",
        readTime: "12 min read",
        author: {
         
          avatar: "https://ui-avatars.com/api/?name=David+Kumar&background=005AE2&color=fff",
          bio: "David has managed Kubernetes clusters handling millions of requests per second."
        },
        content: `<p class="text-lg leading-relaxed mb-6">Kubernetes has become the standard for container orchestration, but scaling it properly requires deep understanding of its internals.</p>`,
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1920&auto=format&fit=crop",
        likes: 456,
        comments: 52
      },
      "ad-fatigue": {
        id: "ad-fatigue",
        title: "Combating Ad Fatigue with AI-generated dynamic creatives.",
        category: "Growth Marketing",
        date: "Aug 25, 2024",
        readTime: "5 min read",
        author: {
          
          avatar: "https://ui-avatars.com/api/?name=Jessica+Wu&background=10B981&color=fff",
          bio: "Jessica helps brands scale their ad spend efficiently using AI-powered creative optimization."
        },
        content: `<p class="text-lg leading-relaxed mb-6">Ad fatigue is real, but AI-generated dynamic creatives offer a solution. Learn how to keep your campaigns fresh and engaging.</p>`,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop",
        likes: 267,
        comments: 34
      }
    };
    return posts[postId] || posts["future-of-web-architecture"];
  };

  const post = getPostData(id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <button onClick={() => navigate('/blog')} className="text-blue-600 hover:underline">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#050814]">
      <SEO title={`${post.title} | MotionAge Blog`} description={post.content.substring(0, 160)} />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
          <div className="max-w-5xl mx-auto">
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Blog
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                <span>{post.author.name}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-a:text-blue-600 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold text-lg">{post.author.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{post.author.role}</p>
                  <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">{post.author.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Engagement */}
              <div className="p-6 bg-white dark:bg-[#0c1222] rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-blue-100 transition-colors">
                    <Facebook size={18} />
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-red-500 transition-colors">
                    <Heart size={16} /> {post.likes} Likes
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <MessageCircle size={16} /> {post.comments} Comments
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
                <h3 className="font-bold text-xl mb-2">Weekly Newsletter</h3>
                <p className="text-sm text-white/80 mb-4">Get the latest insights delivered to your inbox</p>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg text-slate-900 mb-3"
                />
                <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>

              {/* Related Posts */}
              <div className="p-6 bg-white dark:bg-[#0c1222] rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold mb-4">Related Articles</h3>
                <div className="space-y-3">
                  <button onClick={() => navigate('/blog/future-of-web-architecture')} className="block w-full text-left text-sm hover:text-blue-600 transition-colors">
                    The Future of Enterprise Web Architecture
                  </button>
                  <button onClick={() => navigate('/blog/zero-trust-security')} className="block w-full text-left text-sm hover:text-blue-600 transition-colors">
                    Implementing Zero-Trust Architecture
                  </button>
                  <button onClick={() => navigate('/blog/edge-functions-explained')} className="block w-full text-left text-sm hover:text-blue-600 transition-colors">
                    Edge Functions Explained
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;