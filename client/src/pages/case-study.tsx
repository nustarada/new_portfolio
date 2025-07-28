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
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudyData = {
    title: "Smart Design System Built with AI Tools & Figma",
    subtitle: "Leveraging Replit and AI-powered design workflows for enterprise efficiency",
    client: "TechFlow Enterprise",
    duration: "6 months",
    team: "8 designers, 12 developers",
    year: "2024",
    category: "Design System",
    tags: ["AI Design Tools", "Figma Workflows", "Replit Prototyping", "Design Automation"],
    overview: "Architected a comprehensive design system using AI-powered design tools, advanced Figma workflows, and Replit-based prototyping that accelerated design processes by 60% across enterprise teams.",
    challenge: "TechFlow's rapid scaling resulted in fragmented design approaches, with teams manually recreating components and lacking streamlined design-to-code workflows.",
    solution: "Built an integrated design ecosystem leveraging AI design assistance, Figma's advanced features, and Replit's rapid prototyping capabilities for seamless design-to-development handoffs.",
    metrics: [
      { label: "Design Time Reduced", value: "60%", description: "From ideation to handoff" },
      { label: "Consistency Score", value: "95%", description: "Across all products" },
      { label: "Developer Satisfaction", value: "4.8/5", description: "Post-implementation survey" },
      { label: "Component Reuse", value: "85%", description: "Adoption rate company-wide" }
    ],
    process: [
      {
        phase: "Discovery & Research",
        duration: "3 weeks",
        description: "Conducted comprehensive audits, user interviews, and competitive analysis to understand pain points.",
        deliverables: ["Research Report", "User Journey Maps", "Current State Analysis"]
      },
      {
        phase: "AI Tools & Figma Setup",
        duration: "4 weeks", 
        description: "Configured AI design tools integration with Figma, established Replit prototyping workflows, and created automation pipelines.",
        deliverables: ["AI Tool Integration", "Figma Workflow Setup", "Replit Templates"]
      },
      {
        phase: "Smart Component Library",
        duration: "12 weeks",
        description: "Developed intelligent component library using AI-assisted design generation and Figma's advanced features for seamless handoffs.",
        deliverables: ["AI-Enhanced Components", "Figma Design System", "Replit Prototypes"]
      },
      {
        phase: "Testing & Refinement",
        duration: "4 weeks",
        description: "Validated AI-powered workflows with design teams, optimized Figma-to-Replit handoffs, and refined automation processes.",
        deliverables: ["Workflow Validation", "Performance Metrics", "Process Documentation"]
      },
      {
        phase: "Launch & Training",
        duration: "3 weeks",
        description: "Deployed AI design tools across teams with comprehensive training on Figma workflows and Replit prototyping methods.",
        deliverables: ["Training Materials", "AI Tool Guides", "Adoption Analytics"]
      }
    ],
    keyFeatures: [
      {
        title: "AI-Powered Design Generation",
        description: "Intelligent design assistance using AI tools to accelerate component creation and variations",
        icon: Lightbulb
      },
      {
        title: "Advanced Figma Workflows",
        description: "Sophisticated Figma automation and plugin integration for streamlined design operations",
        icon: Target
      },
      {
        title: "Replit Rapid Prototyping",
        description: "Lightning-fast prototyping using Replit's collaborative environment for design-to-code workflows",
        icon: TrendingUp
      },
      {
        title: "Seamless Tool Integration",
        description: "Unified workflow connecting AI design tools, Figma, and Replit for maximum efficiency",
        icon: Users
      }
    ],
    outcomes: [
      "Accelerated design workflows by 60% using AI-powered design tools",
      "Streamlined Figma-to-Replit handoffs reducing iteration time by 70%",
      "Achieved 95% design consistency through intelligent automation",
      "Eliminated 80% of manual component creation with AI assistance",
      "Increased team productivity by 40% through integrated tool workflows"
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture">
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
            {/* Logo */}
            <Link href="/">
              <motion.div 
                className="cursor-pointer flex items-center space-x-3"
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
                <span className="text-xl font-bold text-white glow-text">
                  Karan Gadhave
                </span>
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

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 glass-card grain-texture">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-pink-500/20" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-primary/30"
              style={{ left: `${(i + 1) * 5}%` }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scaleY: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
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
                <span className="block text-white">{caseStudyData.title.split(' ').slice(0, 2).join(' ')}</span>
                <span className="block glow-text">{caseStudyData.title.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
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
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative glass-card grain-texture">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 glow-text grain-texture">Project Overview</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  {caseStudyData.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 glass-card grain-texture hover:glass-intense border-red-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-red-400">The Challenge</h3>
                  <p className="text-white/80 leading-relaxed">
                    {caseStudyData.challenge}
                  </p>
                </Card>

                <Card className="p-6 glass-card grain-texture hover:glass-intense border-green-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4 text-green-400">The Solution</h3>
                  <p className="text-white/80 leading-relaxed">
                    {caseStudyData.solution}
                  </p>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold glow-text grain-texture">Key Metrics</h3>
              <div className="space-y-4">
                {caseStudyData.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card grain-texture hover:glass-intense p-4 border border-primary/20 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="font-medium text-white">
                      {metric.label}
                    </div>
                    <div className="text-sm text-white/60">
                      {metric.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative glass-intense grain-texture">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text grain-texture">Design Process</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A systematic approach to solving complex design challenges through research, strategy, and iterative development.
            </p>
          </motion.div>

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
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-xs px-3 py-1 border-primary/50">
                        Phase {index + 1}
                      </Badge>
                      <span className="text-sm text-primary font-medium">
                        {phase.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {phase.phase}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center text-sm text-white/70">
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

      {/* Key Features */}
      <section className="py-20 relative glass-card grain-texture">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text grain-texture">Key Features</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Innovative solutions that transformed how teams approach design and development collaboration.
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
                  <Card className="p-8 h-full glass-card grain-texture hover:glass-intense border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes & Impact */}
      <section className="py-20 relative glass-intense grain-texture">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text grain-texture">Outcomes & Impact</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Measurable results that demonstrate the transformative power of thoughtful design and AI integration.
            </p>
          </motion.div>

          <Card className="p-12 glass-intense grain-texture hover:glass-card border-green-500/30 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">Key Achievements</h3>
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
                      <span className="leading-relaxed">{outcome}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">Project Highlights</h3>
                <div className="space-y-4">
                  <div className="text-6xl font-black text-primary">60%</div>
                  <div className="text-xl font-semibold text-white">Faster Design Cycles</div>
                  <div className="text-white/70">Average time from concept to implementation</div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <div className="text-4xl font-black text-green-400">$2.3M</div>
                  <div className="text-lg font-semibold text-white">Annual Cost Savings</div>
                  <div className="text-white/70">Through improved efficiency and automation</div>
                </div>
              </div>
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
            <h2 className="text-4xl font-bold glow-text grain-texture">Ready to Transform Your Design Process?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how AI-powered design systems can revolutionize your team's workflow and drive measurable business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="px-8 py-3 text-base font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 hover:from-pink-400 hover:via-purple-500 hover:to-blue-600 shadow-lg shadow-purple-500/40 hover:shadow-pink-500/50 border-0 transition-all duration-300">
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
            className="group relative overflow-hidden bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 text-white font-semibold px-6 py-3 glass-intense grain-texture border-0 hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/40 hover:shadow-cyan-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <div className="relative z-10 flex items-center space-x-2">
              <ExternalLink className="w-5 h-5" />
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