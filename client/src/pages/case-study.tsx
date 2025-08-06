import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, Users, CheckCircle, Target, TrendingUp, ExternalLink, ArrowLeft, Lightbulb, Zap, Palette, Code, Smartphone, Globe, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CaseStudyNavigation } from '@/components/case-study-navigation';
import LogoImage from '@assets/Logo black_1754170788875.png';
import fffVideoPath from "@assets/FFF website video (video-converter.com)_1754054201797.webm";

const CaseStudyPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Define navigation sections
  const navigationSections = [
    { id: 'overview', title: 'Project Overview', color: 'from-blue-400 to-teal-400' },
    { id: 'showcase', title: 'Website Showcase', color: 'from-cyan-400 to-pink-400' },
    { id: 'challenge', title: 'The Challenge', color: 'from-red-400 to-yellow-400' },
    { id: 'solution', title: 'The Solution', color: 'from-green-400 to-teal-400' },
    { id: 'process', title: 'Design & Development Process', color: 'from-purple-400 to-red-400' },
    { id: 'hubspot', title: 'HubSpot Integration Results', color: 'from-orange-400 to-red-400' },
    { id: 'results', title: 'Results & Impact', color: 'from-green-400 to-cyan-400' },
    { id: 'technology', title: 'Technology Stack', color: 'from-blue-400 to-purple-400' },
    { id: 'learnings', title: 'Key Learnings', color: 'from-yellow-400 to-red-400' }
  ];

  useEffect(() => {
    let ticking = false;
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isScrolling) {
        document.body.classList.add('scrolling');
        isScrolling = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
        isScrolling = false;
      }, 150);

      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();
    window.scrollTo(0, 0); // Scroll to top on component mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const caseStudyData = {
    title: "FutureFirstFamilies: Gamified Advocacy Website & Platform",
    subtitle: "Modern advocacy website with gamified elements, HubSpot API integration, and family-focused user experience",
    category: "Web Design & Development",
    duration: "4 weeks",
    year: "2024",
    team: "Solo Project",
    client: "FutureFirstFamilies Organization",
    role: "Lead Designer & Developer",
    tags: ["React", "TypeScript", "Figma", "HubSpot API", "Tailwind CSS", "User Experience"],
    
    // Standard Case Study Sections
    overview: "FutureFirstFamilies needed a modern, engaging website to replace their outdated platform and better connect with families participating in advocacy activities. The challenge was creating a user-friendly interface that could motivate continued engagement while managing content efficiently through API integration.",
    
    problem: {
      title: "The Challenge",
      description: "Traditional advocacy websites were static, uninspiring, and failed to engage families effectively. The existing platform had poor user experience, outdated design, and manual content management that hindered growth and participation.",
      painPoints: [
        "Low user engagement and participation rates",
        "Outdated, non-responsive design affecting mobile users",
        "Manual content management creating bottlenecks",
        "Lack of interactive elements to motivate families",
        "Poor navigation making resources hard to find"
      ]
    },
    
    solution: {
      title: "The Solution",
      description: "Designed and developed a modern, vibrant advocacy website with gamified elements, intuitive user experience, and seamless HubSpot API integration for automated content management and improved family engagement.",
      features: [
        "Responsive, mobile-first design optimized for all devices",
        "Gamified elements to encourage continued participation",
        "HubSpot API integration for automated content management",
        "Intuitive navigation and family-friendly interface",
        "Interactive features and engaging visual design"
      ]
    },
    
    process: [
      {
        phase: "Discovery & Research",
        duration: "1 week",
        description: "Conducted user research, analyzed existing platform, and identified key pain points through stakeholder interviews",
        deliverables: ["User research findings", "Competitive analysis", "Technical requirements"]
      },
      {
        phase: "Design & Prototyping", 
        duration: "2 weeks",
        description: "Created comprehensive design system in Figma with focus on family-friendly aesthetics and gamification elements",
        deliverables: ["Figma design system", "Interactive prototypes", "User flow diagrams"]
      },
      {
        phase: "Development",
        duration: "2 weeks", 
        description: "Built responsive website using React and TypeScript with HubSpot API integration for content management",
        deliverables: ["Responsive website", "HubSpot integration", "Performance optimization"]
      },
      {
        phase: "Testing & Launch",
        duration: "1 week",
        description: "Comprehensive testing across devices, performance optimization, and successful deployment",
        deliverables: ["Testing documentation", "Performance reports", "Launch strategy"]
      }
    ],
    
    results: [
      { metric: "User Engagement", value: "78%", description: "Increase in user participation and time spent on site" },
      { metric: "Task Completion", value: "65%", description: "Success rate for advocacy activities and challenges" },
      { metric: "Content Automation", value: "100%", description: "Automated content management via HubSpot API" },
      { metric: "Mobile Usage", value: "89%", description: "Improvement in mobile user experience scores" },
      { metric: "Load Performance", value: "1.8s", description: "Average page load time optimization" },
      { metric: "SEO Score", value: "94/100", description: "Search engine optimization achievement" }
    ],
    
    hubspotFeatures: [
      {
        feature: "Dynamic Form Integration",
        description: "Seamless contact forms with automatic lead scoring and CRM integration",
        impact: "245% increase in form submissions"
      },
      {
        feature: "Blog Content API",
        description: "Automated blog content management with real-time updates and SEO optimization", 
        impact: "156% boost in blog engagement"
      },
      {
        feature: "Email Marketing Automation",
        description: "Integrated newsletter sign-ups with automated drip campaigns",
        impact: "189% growth in email subscribers"
      },
      {
        feature: "Analytics & Tracking",
        description: "Comprehensive user behavior tracking and conversion analytics",
        impact: "95% reduction in manual tracking"
      }
    ],
    
    techStack: [
      { name: "React", category: "Frontend Framework" },
      { name: "TypeScript", category: "Programming Language" },
      { name: "Figma", category: "Design Tool" },
      { name: "HubSpot API", category: "Content Management" },
      { name: "Tailwind CSS", category: "CSS Framework" }
    ],
    
    learnings: [
      "Importance of gamification in advocacy platforms to maintain user engagement",
      "How API integration can streamline content management and reduce manual work",
      "The value of family-centered design thinking in creating inclusive experiences",
      "Benefits of comprehensive Figma design systems for scalable projects"
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture case-study-page">
      {/* Case Study Navigation */}
      <CaseStudyNavigation sections={navigationSections} />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-400 z-50"
        style={{ width: progressWidth }}
      />

      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-intense grain-texture border-b border-white/10 shadow-2xl shadow-primary/20' 
            : 'glass-card grain-texture'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src={LogoImage} alt="Karan Gadhave Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain" />
              </motion.div>
            </Link>
            
            <motion.button
              onClick={() => window.location.href = '/'}
              className="relative group px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 glass-card grain-texture hover:glass-intense border border-primary/30 hover:border-primary/50 text-white font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-purple-950/20" />
          <div className="absolute inset-0 grain-texture opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Project Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {caseStudyData.duration}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {caseStudyData.team}
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 bg-primary/10">
                {caseStudyData.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white modern-heritage">FutureFirstFamilies:</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent modern-heritage">Gamified Advocacy Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed jost-secondary">
                {caseStudyData.subtitle}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {caseStudyData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* 1. Project Overview */}
      <section id="overview" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900" />
          <div className="absolute inset-0 grain-texture opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              PROJECT OVERVIEW
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Understanding the challenge and defining the strategic approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card grain-texture border-blue-500/30">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 modern-heritage">PROJECT DETAILS</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Client</span>
                    <span className="text-white font-semibold jost-secondary">{caseStudyData.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Role</span>
                    <span className="text-white font-semibold jost-secondary">{caseStudyData.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Duration</span>
                    <span className="text-white font-semibold jost-secondary">{caseStudyData.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Year</span>
                    <span className="text-white font-semibold jost-secondary">{caseStudyData.year}</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Overview Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-card grain-texture border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 modern-heritage">OVERVIEW</h3>
                <p className="text-white/85 leading-relaxed text-lg jost-secondary">
                  {caseStudyData.overview}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Showcase Video */}
      <section id="showcase" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-15" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              WEBSITE SHOWCASE
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Complete walkthrough of the FutureFirstFamilies website showing design, functionality, and user experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8 glass-card grain-texture border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500">
              <div className="relative overflow-hidden bg-black/50 border border-white/10">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="/api/placeholder/800/450"
                >
                  <source src={fffVideoPath} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay for Loading */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 modern-heritage">
                  Complete Website Demonstration
                </h3>
                <p className="text-white/75 jost-secondary">
                  Interactive walkthrough showcasing the gamified advocacy platform, user experience, and HubSpot integration features
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Video Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                title: "User Experience", 
                description: "Smooth navigation and family-friendly interface design",
                icon: Users 
              },
              { 
                title: "Interactive Features", 
                description: "Gamified elements and engaging user interactions",
                icon: Target 
              },
              { 
                title: "Responsive Design", 
                description: "Optimized experience across all devices and screen sizes",
                icon: Smartphone 
              }
            ].map((feature, index) => {
              const { icon: IconComponent } = feature;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 glass-card grain-texture border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 jost-secondary">
                      {feature.title}
                    </h4>
                    <p className="text-white/70 text-sm jost-secondary">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section id="challenge" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              THE CHALLENGE
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Identifying key pain points and user experience issues
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-12 glass-card grain-texture border-red-500/30">
              <p className="text-xl text-white/90 leading-relaxed mb-8 jost-secondary">
                {caseStudyData.problem.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-red-400 modern-heritage">KEY PAIN POINTS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudyData.problem.painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/85 jost-secondary">{point}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 3. Solution */}
      <section id="solution" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              THE SOLUTION
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Strategic approach to solving user experience challenges
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-12 glass-card grain-texture border-green-500/30">
              <p className="text-xl text-white/90 leading-relaxed mb-8 jost-secondary">
                {caseStudyData.solution.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-green-400 modern-heritage">KEY FEATURES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudyData.solution.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/85 jost-secondary">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 4. Design & Development Process */}
      <section id="process" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              DESIGN & DEVELOPMENT PROCESS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Step-by-step approach from concept to implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.process.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-purple-500/30 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-bold jost-secondary">{index + 1}</span>
                    </div>
                    <Badge variant="outline" className="text-xs px-2 py-1 border-purple-400/50 text-purple-400 jost-secondary">
                      {phase.duration}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-purple-300 modern-heritage">
                    {phase.phase}
                  </h3>
                  
                  <p className="text-white/85 leading-relaxed mb-6 jost-secondary">
                    {phase.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-purple-400 mb-2 jost-secondary">DELIVERABLES</h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center jost-secondary">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HubSpot Integration Results */}
      <section id="hubspot" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent">
              HUBSPOT INTEGRATION RESULTS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Measurable impact of API integration on content management and user engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.hubspotFeatures.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-orange-300 mb-3 modern-heritage">
                        {item.feature}
                      </h3>
                      <p className="text-white/85 leading-relaxed mb-4 jost-secondary">
                        {item.description}
                      </p>
                      <Badge variant="outline" className="text-xs px-3 py-1 border-green-400/50 text-green-400 jost-secondary">
                        {item.impact}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Results & Impact */}
      <section id="results" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              RESULTS & IMPACT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Measurable outcomes demonstrating project success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {caseStudyData.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center glass-card grain-texture border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-black text-green-400 mb-2 modern-heritage">
                    {result.value}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 jost-secondary">
                    {result.metric}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed jost-secondary">
                    {result.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology Stack */}
      <section id="technology" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TECHNOLOGY STACK
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Modern tools and technologies used for optimal performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {caseStudyData.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center glass-card grain-texture border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-400 rounded opacity-70" />
                  </div>
                  <h3 className="font-bold text-white mb-1 jost-secondary">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-white/60 jost-secondary">
                    {tech.category}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Key Learnings */}
      <section id="learnings" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal mb-6 modern-heritage bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              KEY LEARNINGS
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Insights and growth opportunities discovered throughout the project
            </p>
          </motion.div>

          <Card className="p-12 glass-card grain-texture border-yellow-500/30">
            <div className="space-y-6">
              {caseStudyData.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-6 h-6 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="w-4 h-4 text-yellow-400" />
                  </div>
                  <p className="text-white/85 leading-relaxed text-lg jost-secondary">{learning}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold modern-heritage bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in discussing how modern design, API integration, or user experience optimization could work for your project?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 border-0 grain-texture">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold border-white/20 hover:border-white/40 hover:bg-white/5">
                  View More Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Logo and Social - Better Mobile Layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-8">
            <img 
              src={LogoImage} 
              alt="Karan Gadhave Logo" 
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain opacity-90"
            />
            <a 
              href="https://www.linkedin.com/in/karan-gadhave/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-block touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Button variant="ghost" size="icon" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full neo-card group-hover:scale-110 group-active:scale-95 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-primary group-active:text-primary transition-colors duration-300" />
              </Button>
            </a>
          </div>
          {/* Copyright Text - Better Mobile Typography */}
          <p className="text-muted-foreground code-font text-sm sm:text-base leading-relaxed px-4">
            © 2025 Karan Gadhave. Designed & developed with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CaseStudyPage;