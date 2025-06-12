import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Target, Lightbulb, TrendingUp, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function CaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const caseStudyData = {
    title: "AI-Powered Design System for Enterprise SaaS",
    subtitle: "Revolutionizing design workflows with intelligent automation",
    client: "TechFlow Enterprise",
    duration: "6 months",
    team: "8 designers, 12 developers",
    year: "2024",
    category: "Design System",
    tags: ["AI Integration", "Design Tokens", "Component Library", "Workflow Automation"],
    overview: "Led the design and implementation of an AI-powered design system that reduced design-to-development time by 60% while maintaining consistency across 50+ product teams.",
    challenge: "TechFlow's rapid growth created design inconsistencies across products, with teams spending 40% of their time on repetitive design tasks instead of innovation.",
    solution: "Developed an intelligent design system with AI-assisted component generation, automated design token management, and predictive layout suggestions.",
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
        phase: "AI Strategy & Architecture",
        duration: "4 weeks", 
        description: "Designed the AI integration framework and established the technical foundation for intelligent automation.",
        deliverables: ["AI Integration Plan", "System Architecture", "Technical Specifications"]
      },
      {
        phase: "Component Development",
        duration: "12 weeks",
        description: "Built the core component library with AI-powered features and automated testing.",
        deliverables: ["Component Library", "AI Models", "Documentation Portal"]
      },
      {
        phase: "Testing & Refinement",
        duration: "4 weeks",
        description: "Conducted extensive testing with real teams and iteratively improved the system based on feedback.",
        deliverables: ["Testing Results", "Performance Metrics", "Training Materials"]
      },
      {
        phase: "Launch & Adoption",
        duration: "3 weeks",
        description: "Rolled out the system across all teams with comprehensive training and support.",
        deliverables: ["Rollout Plan", "Training Sessions", "Support Documentation"]
      }
    ],
    keyFeatures: [
      {
        title: "Smart Component Generation",
        description: "AI analyzes design patterns and generates contextually appropriate components",
        icon: Lightbulb
      },
      {
        title: "Automated Design Tokens",
        description: "Dynamic token management that adapts to brand changes across all products",
        icon: Target
      },
      {
        title: "Predictive Layouts",
        description: "ML-powered suggestions for optimal component arrangements and spacing",
        icon: TrendingUp
      },
      {
        title: "Real-time Collaboration",
        description: "Seamless handoff between design and development with live sync",
        icon: Users
      }
    ],
    outcomes: [
      "Reduced design-to-development cycle from 2 weeks to 3 days",
      "Achieved 95% design consistency across all product lines",
      "Eliminated 80% of design system maintenance overhead",
      "Increased team productivity by 40% within first quarter",
      "Generated $2.3M in annual cost savings through efficiency gains"
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-pink-500 z-50"
        style={{ width: progressWidth }}
      />

      {/* Floating Navigation */}
      <motion.nav 
        className="fixed top-4 left-4 right-4 z-40 backdrop-blur-lg bg-background/80 border border-border/50 rounded-2xl px-6 py-4"
        style={{ y: headerY }}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="text-sm text-muted-foreground">
            Case Study: {caseStudyData.title}
          </div>
          <div className="w-24" /> {/* Spacer for balance */}
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
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
      <section className="py-20 relative">
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
                <h2 className="text-3xl font-bold mb-6 glow-text">Project Overview</h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  {caseStudyData.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="neo-card p-6 bg-gradient-to-br from-red-500/10 to-transparent border-red-500/30">
                  <h3 className="text-xl font-bold mb-4 text-red-400">The Challenge</h3>
                  <p className="text-white/80 leading-relaxed">
                    {caseStudyData.challenge}
                  </p>
                </Card>

                <Card className="neo-card p-6 bg-gradient-to-br from-green-500/10 to-transparent border-green-500/30">
                  <h3 className="text-xl font-bold mb-4 text-green-400">The Solution</h3>
                  <p className="text-white/80 leading-relaxed">
                    {caseStudyData.solution}
                  </p>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold glow-text">Key Metrics</h3>
              <div className="space-y-4">
                {caseStudyData.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-xl border border-primary/20"
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
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text">Design Process</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A systematic approach to solving complex design challenges through research, strategy, and iterative development.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-primary via-pink-500 to-primary" />

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
                  <Card className={`neo-card p-8 max-w-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'} bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20`}>
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
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text">Key Features</h2>
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
                  <Card className="neo-card p-8 h-full bg-gradient-to-br from-primary/5 to-transparent border-primary/20 group-hover:border-primary/40 transition-all duration-300">
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
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 glow-text">Outcomes & Impact</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Measurable results that demonstrate the transformative power of thoughtful design and AI integration.
            </p>
          </motion.div>

          <Card className="neo-card p-12 bg-gradient-to-br from-green-500/10 via-primary/5 to-transparent border-green-500/30">
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
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold glow-text">Ready to Transform Your Design Process?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how AI-powered design systems can revolutionize your team's workflow and drive measurable business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="px-8 py-3 text-base font-semibold neo-card bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
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

      {/* Footer */}
      <footer className="py-12 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground code-font">
            © 2024 Karan Gadhave. Case study designed with attention to detail.
          </p>
        </div>
      </footer>
    </div>
  );
}