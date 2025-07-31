import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Target, Lightbulb, TrendingUp, CheckCircle, ExternalLink, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import logoPath from "@assets/Logo black_1749729973781.png";

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Optimize initial setup
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());
    
    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Simplified scroll handling for better performance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudyData = {
    title: "FutureFirstFamilies: Modern Advocacy Website",
    subtitle: "Complete Website Design & Development with Advanced User Engagement",
    client: "FutureFirstFamilies",
    duration: "4 months",
    team: "Lead Designer & Full-Stack Developer",
    year: "2025",
    category: "Website Design & Development",
    tags: ["Website Design", "Figma Prototyping", "React Development", "HubSpot Integration", "User Experience"],
    overview: "Designed and developed a modern, engaging advocacy website using comprehensive Figma design workflows and React development. The website features gamified user engagement, seamless HubSpot API integration for content management, and a complete design system focused on family-friendly interaction.",
    challenge: "Traditional advocacy websites were static, boring, and failed to engage families and children in meaningful advocacy activities. The existing online presence lacked modern design principles and user engagement strategies.",
    solution: "Created a vibrant, interactive advocacy website with gamified elements, modern design aesthetics, and user-centered navigation. Implemented comprehensive Figma design system and developed with React for optimal performance and user experience.",
    metrics: [
      { label: "User Engagement", value: "78%", description: "Increase in platform activity" },
      { label: "Challenge Completion", value: "65%", description: "Users completing advocacy tasks" },
      { label: "User Satisfaction", value: "4.7/5", description: "Based on user feedback" },
      { label: "Content Updates", value: "100%", description: "Automated via HubSpot API" }
    ],
    process: [
      {
        phase: "Discovery & Research",
        duration: "2 weeks",
        description: "Conducted user research with families and children to understand advocacy engagement challenges and gamification opportunities.",
        deliverables: ["User Research Report", "Persona Development", "Journey Mapping"]
      },
      {
        phase: "Design & Prototyping",
        duration: "6 weeks", 
        description: "Created comprehensive UI/UX designs in Figma, including wireframes, high-fidelity mockups, and interactive prototypes. Designed reusable component system for consistent user experience.",
        deliverables: ["Figma Design System", "Interactive Prototypes", "Component Library"]
      },
      {
        phase: "Website Development",
        duration: "8 weeks",
        description: "Developed the website using React with modern development practices. Integrated gamification features, accessibility standards, and seamless HubSpot API for dynamic content and form management.",
        deliverables: ["React Website", "HubSpot API Integration", "Interactive Features"]
      },
      {
        phase: "Testing & Optimization",
        duration: "3 weeks",
        description: "Conducted user testing, optimized gamification mechanics, and refined HubSpot API integration for seamless content updates.",
        deliverables: ["User Testing Results", "Performance Optimization", "API Documentation"]
      },
      {
        phase: "Launch & Optimization",
        duration: "1 week",
        description: "Launched the website with comprehensive analytics, user tracking, and ongoing HubSpot content management integration for seamless content updates.",
        deliverables: ["Live Website", "Analytics Integration", "Content Management System"]
      }
    ],
    keyFeatures: [
      {
        title: "Modern Website Design",
        description: "Contemporary, vibrant design language with engaging visual hierarchy and intuitive user experience designed specifically for advocacy websites",
        icon: Lightbulb
      },
      {
        title: "Comprehensive Figma Workflow",
        description: "Complete design system created in Figma including wireframes, high-fidelity mockups, interactive prototypes, and reusable component library",
        icon: Target
      },
      {
        title: "HubSpot Content Integration",
        description: "Seamless website content management through HubSpot API integration for dynamic forms, blog content, and automated website updates",
        icon: TrendingUp
      },
      {
        title: "Family-Centered User Experience",
        description: "User-friendly website interface designed for families with clear navigation, engaging content presentation, and interactive elements",
        icon: Users
      }
    ],
    outcomes: [
      "Increased user engagement by 78% through gamified advocacy activities",
      "Achieved 65% task completion rate for advocacy challenges and activities",
      "Streamlined content management with 100% automated HubSpot API integration",
      "Delivered comprehensive Figma design system with reusable components",
      "Created family-friendly platform that bridges generational advocacy gaps"
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture case-study-page">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-400 z-50"
        style={{ width: progressWidth }}
      />



      {/* Case Study Navigation */}
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
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo - Acts as Home Button */}
            <Link href="/">
              <motion.div 
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <img 
                    src={logoPath} 
                    alt="Karan Gadhave Logo" 
                    className="h-10 w-auto filter brightness-0 invert"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </Link>
            
            {/* Back to Portfolio Button */}
            <Link href="/">
              <motion.button
                className="relative group px-6 py-3 glass-card grain-texture hover:glass-intense border border-primary/30 hover:border-primary/50 text-white font-semibold transition-all duration-300 flex items-center space-x-2"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Portfolio</span>
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Dark Background with Colorful Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-purple-950/20" />
          <div className="absolute inset-0 grain-texture opacity-30" />
          {!isMobile && (
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            }} />
          )}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Project Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {caseStudyData.year}
              </div>
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight grain-texture">
                <span className="block text-white modern-heritage">{caseStudyData.title.split(':')[0]}:</span>
                <span className="block glow-text modern-heritage">{caseStudyData.title.split(':')[1]}</span>
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

        {/* Static Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Enhanced Overview Section */}
      <section className="py-20 relative">
        {/* Dark Background with Subtle Color */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 via-transparent to-cyan-950/10" />
          <div className="absolute inset-0 grain-texture opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-4xl font-bold mb-8 modern-heritage">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    PROJECT OVERVIEW
                  </span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed jost-secondary">
                  {caseStudyData.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8 bg-slate-900/80 border-red-400/30 hover:border-red-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent modern-heritage">THE CHALLENGE</h3>
                  </div>
                  <p className="text-white/85 leading-relaxed text-base jost-secondary">
                    Traditional advocacy websites were static, uninspiring, and failed to engage families effectively. Users struggled with complex navigation, dated design, and lack of interactive elements that could motivate continued participation.
                  </p>
                </Card>

                <Card className="p-8 bg-slate-900/80 border-green-400/30 hover:border-green-400/50 backdrop-blur-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent modern-heritage">THE SOLUTION</h3>
                  </div>
                  <p className="text-white/85 leading-relaxed text-base jost-secondary mb-4">
                    Designed and developed a modern, vibrant advocacy website with gamified elements, intuitive user experience, and engaging visual design that motivates families to participate in advocacy activities.
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 jost-secondary">WEBSITE GOALS</h4>
                    <p className="text-white/75 text-sm leading-relaxed jost-secondary">
                      Create an engaging, user-friendly website where families can easily navigate advocacy resources, track their involvement through interactive features, and participate in community-driven initiatives through a clean, modern interface.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold modern-heritage">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Website Impact
                </span>
              </h3>
              <div className="space-y-4">
                {caseStudyData.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/80 backdrop-blur-xl border border-blue-400/30 hover:border-blue-400/50 p-6 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 modern-heritage">
                      {metric.value}
                    </div>
                    <div className="font-semibold text-white text-lg jost-secondary">
                      {metric.label}
                    </div>
                    <div className="text-sm text-white/70 jost-secondary">
                      {metric.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Timeline */}
      <section className="py-20 relative">
        {/* Dark Background with Subtle Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/15 via-transparent to-blue-950/10" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text grain-texture modern-heritage">MY ROLE & PROCESS</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto jost-secondary">
              Enhanced advocacy from research to deployment
            </p>
          </motion.div>

          <div className="mb-16">
            <Card className="p-8 glass-card grain-texture border-blue-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-400 modern-heritage">MY ROLE</h3>
                  </div>
                  <p className="text-xl text-white mb-4 jost-secondary">UX Research, Design System, Full Development</p>
                  <div className="flex flex-wrap gap-2">
                    {["UX Research", "Design System", "Frontend Dev", "User Testing"].map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm px-3 py-1 border-blue-400/50 text-blue-400 jost-secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                      <ArrowRight className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400 modern-heritage">PROCESS</h3>
                  </div>
                  <ol className="space-y-3 text-white/80 jost-secondary">
                    <li className="flex items-center"><span className="text-primary font-bold mr-3">1</span>Conducted interviews with advocacy organizers</li>
                    <li className="flex items-center"><span className="text-primary font-bold mr-3">2</span>Created user flows and low-fidelity wireframes</li> 
                    <li className="flex items-center"><span className="text-primary font-bold mr-3">3</span>Designed high-fidelity mockups and reusable design system</li>
                    <li className="flex items-center"><span className="text-primary font-bold mr-3">4</span>Developed platform using React in Replit</li>
                    <li className="flex items-center"><span className="text-primary font-bold mr-3">5</span>Integrated gamification, referrals, and accessibility features</li>
                    <li className="flex items-center"><span className="text-primary font-bold mr-3">6</span>Tested and refined based on team feedback</li>
                  </ol>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-cyan-400 to-primary" />

            <div className="space-y-20">
              {caseStudyData.process.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <Card className={`p-8 max-w-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'} glass-card grain-texture hover:glass-intense border-primary/20 transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 jost-secondary">
                        Phase {index + 1}
                      </Badge>
                      <span className="text-sm text-primary font-medium jost-secondary">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white modern-heritage">
                      {phase.phase.toUpperCase()}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed mb-6 text-base jost-secondary">
                      {phase.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-primary mb-3 text-sm jost-secondary">KEY DELIVERABLES</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center text-sm text-white/70 jost-secondary">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/25" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features */}
      <section className="py-20 relative">
        {/* Dark Background with Teal Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/15 via-transparent to-cyan-950/10" />
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
            <h2 className="text-4xl font-bold mb-6 modern-heritage">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                WEBSITE FEATURES
              </span>
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Modern design solutions that transformed the advocacy website experience for families
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className="p-8 h-full bg-slate-900/80 border-teal-400/30 hover:border-teal-400/50 backdrop-blur-xl group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-cyan-300 transition-all duration-300 modern-heritage">
                      {feature.title.toUpperCase()}
                    </h3>
                    
                    <p className="text-white/85 leading-relaxed text-base jost-secondary">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Outcomes & Impact */}
      <section className="py-20 relative">
        {/* Dark Background with Warm Accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/15 via-transparent to-yellow-950/10" />
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
            <h2 className="text-4xl font-bold mb-6 modern-heritage">
              <span className="bg-gradient-to-r from-rose-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                WEBSITE IMPACT
              </span>
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Measurable results that demonstrate the success of the modern website design and user experience improvements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-12">
            {[
              { value: "30%", desc: "increase in completed actions within first month", IconComponent: TrendingUp },
              { value: "4x", desc: "higher user retention vs previous system", IconComponent: Users },
              { value: "1500+", desc: "parents onboarded in first 3 weeks", IconComponent: Target },
              { value: "Significant", desc: "improvement in action tracking and admin workflow", IconComponent: CheckCircle }
            ].map((metric, index) => {
              const { IconComponent } = metric;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="p-8 text-center glass-card grain-texture hover:glass-intense border-green-500/30 group-hover:border-green-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-green-400 mb-4 modern-heritage">
                      {metric.value}
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed jost-secondary">
                      {metric.desc}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <Card className="p-12 glass-intense grain-texture hover:glass-card border-green-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-green-400 modern-heritage">KEY ACHIEVEMENTS</h3>
            <ul className="space-y-4">
              {caseStudyData.outcomes.map((outcome, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start text-white/90"
                >
                  <CheckCircle className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-base jost-secondary">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative glass-card grain-texture">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text grain-texture modern-heritage">TECHNOLOGY STACK</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto jost-secondary">
              Modern technologies and tools carefully selected for optimal performance and user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { name: "React", category: "Frontend" },
              { name: "TypeScript", category: "Language" },
              { name: "Figma", category: "Design" },
              { name: "HubSpot API", category: "CMS" },
              { name: "Tailwind CSS", category: "Styling" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="p-6 text-center glass-card grain-texture hover:glass-intense border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="w-6 h-6 bg-primary rounded opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-white group-hover:text-primary transition-colors mb-1 jost-secondary">
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

      {/* What I Learned */}
      <section className="py-20 relative glass-intense grain-texture">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text grain-texture modern-heritage">WHAT I LEARNED</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto jost-secondary">
              Key insights and growth opportunities discovered throughout this project
            </p>
          </motion.div>

          <Card className="p-12 glass-intense grain-texture hover:glass-card border-cyan-500/30 transition-all duration-500">
            <div className="relative">
              <div className="absolute left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-primary to-cyan-400 rounded-full" />
              
              <blockquote className="pl-12 space-y-6">
                <p className="text-lg md:text-xl text-white/95 leading-relaxed italic font-medium jost-secondary">
                  "This project transformed my experience of building for engagement. Everything from 
                  utilizing powerful APIs like HubSpot for seamless content management to understanding 
                  the unique needs of both children and parents in advocacy platforms helped transform 
                  my approach to design."
                </p>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/85 text-base leading-relaxed jost-secondary">
                    Working with Figma's advanced design systems and integrating HubSpot API for forms and blog management taught me the 
                    importance of creating scalable, content-driven platforms. The gamification elements 
                    required deep understanding of user psychology and family dynamics, pushing me to 
                    design experiences that engage across different age groups while maintaining the 
                    serious mission of advocacy work.
                  </p>
                </div>
              </blockquote>
            </div>
          </Card>
        </div>
      </section>

      {/* Next Steps / CTA */}
      <section className="py-20 relative glass-card grain-texture">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold glow-text grain-texture modern-heritage">READY TO SEE MORE PROJECTS?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in discussing how gamification, Figma design systems, or HubSpot API integration could work for your project?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="px-8 py-3 text-base font-semibold cta-button grain-texture border-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              
              <Link href="/">
                <Button size="lg" variant="outline" className="px-8 py-3 text-base font-semibold border-white/30 hover:border-primary/50 hover:bg-primary/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View More Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Contact CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="/#contact">
          <Button 
            className="group relative overflow-hidden text-white font-semibold px-6 py-3 cta-button glass-intense grain-texture border-0 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <div className="relative z-10 flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </div>
          </Button>
        </a>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <a 
              href="https://www.linkedin.com/in/karan-gadhave/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-block touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full neo-card group-hover:scale-110 group-active:scale-95 transition-transform duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5 group-hover:text-primary group-active:text-primary transition-colors duration-300" />
              </Button>
            </a>
          </div>
          <p className="text-muted-foreground code-font">
            © 2025 Karan Gadhave. Case study designed with attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}