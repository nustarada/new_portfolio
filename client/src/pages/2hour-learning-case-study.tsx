import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, Users, CheckCircle, Target, TrendingUp, ExternalLink, ArrowLeft, ArrowRight, Lightbulb, Zap, Palette, Code, Smartphone, Globe, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { CaseStudyNavigation } from '@/components/case-study-navigation';
import LogoImage from '@assets/Logo white_1754674219191.png';
import homepageDesign from "@assets/Homepage (Wordpress)_1756635142322.png";
import persona1Design from "@assets/Persona 1 (Hubspot)_1756635142323.png";
import persona2Design from "@assets/Persona 2 (Hubspot)_1756635142324.png";
import persona3Design from "@assets/Persona 3 (Hubspot)_1756635142324.png";
import homepageThumbnail from "@assets/Homepage Thumbnail_1756635908006.png";
import persona1Thumbnail from "@assets/Persona 1 Thumbnail_1756635908006.png";
import persona2Thumbnail from "@assets/Persona 2 Thumbnail_1756635908006.png";
import persona3Thumbnail from "@assets/Persona 3 Thumbnail_1756635908004.png";

const TwoHourLearningCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  // Define navigation sections
  const navigationSections = [
    { id: 'overview', title: 'Project Overview', color: 'from-blue-400 to-teal-400' },
    { id: 'designs', title: 'Landing Page Designs', color: 'from-cyan-400 to-pink-400' },
    { id: 'strategy', title: 'Design Strategy', color: 'from-purple-400 to-blue-400' },
    { id: 'personas', title: 'Persona-Driven Approach', color: 'from-green-400 to-teal-400' },
    { id: 'process', title: 'Design Process', color: 'from-purple-400 to-red-400' },
    { id: 'results', title: 'Results & Impact', color: 'from-orange-400 to-red-400' },
    { id: 'technology', title: 'Technology & Tools', color: 'from-blue-400 to-purple-400' },
    { id: 'learnings', title: 'Key Learnings', color: 'from-yellow-400 to-red-400' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    window.scrollTo(0, 0); // Scroll to top on component mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const caseStudyData = {
    title: "2 Hour Learning: Educational Landing Page System",
    subtitle: "Comprehensive landing page design system targeting multiple educational personas with conversion-focused layouts and strategic messaging",
    category: "Landing Page Design & Strategy",
    duration: "4 weeks",
    year: "2025",
    team: "Solo Project",
    client: "2 Hour Learning",
    role: "Lead UI/UX Designer",
    tags: ["Landing Pages", "Education", "Conversion Design", "HubSpot", "WordPress", "Persona Design"],
    
    // Standard Case Study Sections
    overview: "2 Hour Learning needed a comprehensive landing page system that could effectively target different segments of their educational market. The challenge was creating 4 distinct landing pages that maintained brand consistency while optimizing for different user personas, conversion goals, and educational contexts - from individual students to institutional decision-makers.",
    
    strategy: {
      title: "Design Strategy",
      description: "Developed a persona-driven design approach that balances brand consistency with targeted messaging, ensuring each landing page speaks directly to its intended audience while maintaining visual cohesion across the entire system.",
      approaches: [
        "Persona-specific messaging and visual hierarchy optimization",
        "Conversion-focused layouts with strategic CTA placement",
        "Consistent brand palette with persona-appropriate customizations",
        "Platform-optimized designs for HubSpot and WordPress integration"
      ]
    },
    
    personas: [
      {
        title: "Homepage (WordPress)",
        target: "General Audience & New Visitors",
        role: "Primary landing page gateway",
        focus: "Brand introduction, credibility building, multi-audience conversion",
        description: "Comprehensive overview page designed to introduce 2 Hour Learning's value proposition to first-time visitors, establish credibility through research validation, and provide clear navigation paths to specialized persona-specific content.",
        painPoints: ["Lack of personalized learning solutions", "Traditional education limitations", "Time constraints in learning", "Need for innovative approaches"],
        motivations: ["Educational innovation", "Personalized learning solutions", "Research-driven methods", "Efficient learning outcomes"],
        channels: ["Direct URL/Brand awareness", "SEO/Google Search", "Referral traffic", "Social media links"],
        features: ["Hero section with clear value proposition", "Student and educator testimonials", "Research validation and credibility indicators", "Multiple conversion paths for different user types"]
      },
      {
        title: "Persona 1 (HubSpot)",
        target: "Head of School / Principal",
        role: "Strategic budget holder",
        focus: "Outcomes, school differentiation, board alignment",
        description: "Strategic decision-maker focused on justifying high tuition fees, achieving strong school differentiation, and meeting rising parent expectations through innovative, future-ready solutions.",
        painPoints: ["Pressure to justify high tuition fees", "Need for strong differentiation", "Rising parent expectations"],
        motivations: ["Better student outcomes", "Innovative approaches", "Future-readiness", "Simple rollout of solutions"],
        channels: ["Google Search (high intent)", "LinkedIn Ads", "Email", "Webinars"],
        features: ["ROI-focused messaging and outcome metrics", "School differentiation and innovation highlights", "Simple implementation and rollout process", "Board-ready data and success stories"]
      },
      {
        title: "Persona 2 (HubSpot)", 
        target: "Dean of Academics / Director of Curriculum",
        role: "Execution-oriented leader",
        focus: "Teacher load, student growth, curriculum alignment",
        description: "Operational leader focused on reducing teacher burnout, eliminating fragmented instruction, and demonstrating measurable academic gains through efficient curriculum solutions.",
        painPoints: ["Teacher burnout", "Fragmented instruction", "Pressure to show academic gains"],
        motivations: ["Curriculum efficiency", "Mastery data for students", "Time-saving teaching tools"],
        channels: ["Google Search (curriculum-related terms)", "YouTube", "LinkedIn", "Email"],
        features: ["Teacher workflow optimization and efficiency tools", "Student mastery tracking and data analytics", "Integrated curriculum alignment solutions", "Time-saving instructional resources"]
      },
      {
        title: "Persona 3 (HubSpot)",
        target: "Board Member / School Owner",
        role: "Strategic stakeholder",
        focus: "ROI, market position, long-term stability",
        description: "High-level strategic stakeholder focused on addressing enrollment stagnation, reducing operational costs, and driving visible innovation for competitive advantage and long-term growth.",
        painPoints: ["Enrollment stagnation", "High operational costs", "Lack of visible innovation"],
        motivations: ["Competitive edge", "Cost-per-outcome efficiency", "Long-term growth"],
        channels: ["Retargeting", "LinkedIn (owners/trustees)", "Forwardable email"],
        features: ["Competitive positioning and market differentiation", "Cost-efficiency and ROI optimization metrics", "Long-term growth strategy and innovation roadmap", "Executive-level partnership and consultation"]
      }
    ],
    
    process: [
      {
        phase: "Research & Analysis",
        duration: "1 week",
        description: "Analyzed target personas, competitive landscape, and conversion requirements for each educational segment",
        deliverables: ["Persona research", "Competitive analysis", "Conversion funnel mapping"]
      },
      {
        phase: "Strategy & Wireframing", 
        duration: "2 weeks",
        description: "Developed strategic messaging frameworks and created wireframes optimized for each persona's conversion journey",
        deliverables: ["Messaging strategy", "Wireframe system", "User journey maps"]
      },
      {
        phase: "Visual Design",
        duration: "2 weeks", 
        description: "Created comprehensive visual system maintaining brand consistency while optimizing for persona-specific needs",
        deliverables: ["Visual design system", "4 complete landing page designs", "Brand guidelines"]
      },
      {
        phase: "Optimization & Delivery",
        duration: "1 week",
        description: "Refined designs based on conversion best practices and delivered production-ready assets for development",
        deliverables: ["Optimized final designs", "Development handoff", "Style guide documentation"]
      }
    ],
    
    results: [
      { metric: "Landing Pages", value: "4", description: "Comprehensive landing pages targeting different personas" },
      { metric: "Brand Consistency", value: "100%", description: "Visual cohesion maintained across all designs" },
      { metric: "Persona Coverage", value: "4", description: "Distinct educational market segments addressed" },
      { metric: "Platform Integration", value: "2", description: "Optimized for HubSpot and WordPress platforms" },
      { metric: "Design System", value: "1", description: "Unified design system for scalable implementation" },
      { metric: "Conversion Focus", value: "100%", description: "Each page optimized for specific conversion goals" }
    ],
    
    techStack: [
      { name: "Figma", category: "Design Tool" },
      { name: "HubSpot", category: "Landing Page Platform" },
      { name: "WordPress", category: "CMS Platform" },
      { name: "Responsive Design", category: "Development Approach" }
    ],
    
    learnings: [
      "Importance of persona-driven design in educational technology to address diverse user needs and motivations",
      "How consistent brand systems can maintain cohesion while allowing for persona-specific messaging and optimization",
      "The value of platform-specific design considerations when creating landing pages for different CMS and marketing tools",
      "Benefits of conversion-focused design thinking in educational contexts where decision-making involves multiple stakeholders"
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture two-hour-learning-case-study">
      {/* Case Study Navigation */}
      <CaseStudyNavigation sections={navigationSections} />
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-400 z-[9999]"
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Project Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="jost-secondary">{caseStudyData.duration}</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="jost-secondary">{caseStudyData.team}</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 bg-primary/10 jost-secondary">
                {caseStudyData.category}
              </Badge>
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white albert-sans-medium leading-tight">
                  2 Hour Learning
                </h1>
                <h2 className="text-lg font-extrabold text-white albert-sans-medium leading-tight">
                  Persona-Driven Lead Generation
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed jost-secondary">
                {caseStudyData.subtitle}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {caseStudyData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1 jost-secondary">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              PROJECT OVERVIEW
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Creating a comprehensive landing page system for diverse educational audiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-8 glass-card grain-texture border-blue-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-blue-400 albert-sans-medium">PROJECT DETAILS</h3>
                <div className="space-y-4 flex-grow">
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
              className="h-full"
            >
              <Card className="p-8 glass-card grain-texture border-cyan-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-cyan-400 albert-sans-medium">OVERVIEW</h3>
                <p className="text-white/85 leading-relaxed text-lg jost-secondary flex-grow">
                  {caseStudyData.overview}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 2. Landing Page Designs Showcase */}
      <section id="designs" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-15" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              LANDING PAGE DESIGNS
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Four specialized landing pages targeting different personas in the educational ecosystem
            </p>
          </motion.div>

          {/* Design Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {/* Homepage Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-4 glass-card grain-texture border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group"
                onClick={() => setOpenModal('homepage')}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                  <img src={homepageThumbnail} alt="Homepage WordPress Design" className="w-full h-auto rounded-lg" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <div className="bg-white/95 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-md shadow-lg">
                      <p className="text-gray-900 text-sm font-semibold jost-secondary">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-extrabold text-cyan-400 mb-1 albert-sans-medium">
                    Homepage (WordPress)
                  </h3>
                  <p className="text-white/75 text-xs jost-secondary">
                    General audience overview
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Persona 1 Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-4 glass-card grain-texture border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 cursor-pointer group"
                onClick={() => setOpenModal('persona1')}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                  <img src={persona1Thumbnail} alt="Persona 1 HubSpot Design" className="w-full h-auto rounded-lg" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <div className="bg-white/95 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-md shadow-lg">
                      <p className="text-gray-900 text-sm font-semibold jost-secondary">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-extrabold text-blue-400 mb-1 albert-sans-medium">
                    Persona 1 (HubSpot)
                  </h3>
                  <p className="text-white/75 text-xs jost-secondary">
                    AI-powered learning
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Persona 2 Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-4 glass-card grain-texture border-green-500/30 hover:border-green-400/50 transition-all duration-500 cursor-pointer group"
                onClick={() => setOpenModal('persona2')}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                  <img src={persona2Thumbnail} alt="Persona 2 HubSpot Design" className="w-full h-auto rounded-lg" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <div className="bg-white/95 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-md shadow-lg">
                      <p className="text-gray-900 text-sm font-semibold jost-secondary">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-extrabold text-green-400 mb-1 albert-sans-medium">
                    Persona 2 (HubSpot)
                  </h3>
                  <p className="text-white/75 text-xs jost-secondary">
                    Better outcomes
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Persona 3 Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-4 glass-card grain-texture border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 cursor-pointer group"
                onClick={() => setOpenModal('persona3')}
              >
                <div className="relative overflow-hidden rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                  <img src={persona3Thumbnail} alt="Persona 3 HubSpot Design" className="w-full h-auto rounded-lg" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                    <div className="bg-white/95 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-md shadow-lg">
                      <p className="text-gray-900 text-sm font-semibold jost-secondary">Click to view</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-base font-extrabold text-purple-400 mb-1 albert-sans-medium">
                    Persona 3 (HubSpot)
                  </h3>
                  <p className="text-white/75 text-xs jost-secondary">
                    School model
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Design Modals */}
          <Dialog open={openModal === 'homepage'} onOpenChange={() => setOpenModal(null)}>
            <DialogContent className="max-w-4xl w-full h-[90vh] bg-background/95 border-cyan-500/30">
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold text-cyan-400 albert-sans-medium">
                  Homepage (WordPress) - Full Design
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-auto">
                <div className="relative bg-white rounded-lg">
                  <img 
                    src={homepageDesign} 
                    alt="Homepage WordPress Design - Full View" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={openModal === 'persona1'} onOpenChange={() => setOpenModal(null)}>
            <DialogContent className="max-w-4xl w-full h-[90vh] bg-background/95 border-blue-500/30">
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold text-blue-400 albert-sans-medium">
                  Persona 1 (HubSpot) - Full Design
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-auto">
                <div className="relative bg-white rounded-lg">
                  <img 
                    src={persona1Design} 
                    alt="Persona 1 HubSpot Design - Full View" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={openModal === 'persona2'} onOpenChange={() => setOpenModal(null)}>
            <DialogContent className="max-w-4xl w-full h-[90vh] bg-background/95 border-green-500/30">
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold text-green-400 albert-sans-medium">
                  Persona 2 (HubSpot) - Full Design
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-auto">
                <div className="relative bg-white rounded-lg">
                  <img 
                    src={persona2Design} 
                    alt="Persona 2 HubSpot Design - Full View" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={openModal === 'persona3'} onOpenChange={() => setOpenModal(null)}>
            <DialogContent className="max-w-4xl w-full h-[90vh] bg-background/95 border-purple-500/30">
              <DialogHeader>
                <DialogTitle className="text-xl font-extrabold text-purple-400 albert-sans-medium">
                  Persona 3 (HubSpot) - Full Design
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-auto">
                <div className="relative bg-white rounded-lg">
                  <img 
                    src={persona3Design} 
                    alt="Persona 3 HubSpot Design - Full View" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
      {/* 3. Design Strategy */}
      <section id="strategy" className="py-20 relative">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              DESIGN STRATEGY
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Balancing brand consistency with persona-specific optimization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-12 glass-card grain-texture border-purple-500/30">
              <p className="text-xl text-white/90 leading-relaxed mb-8 jost-secondary">
                {caseStudyData.strategy.description}
              </p>
              
              <h3 className="text-2xl font-extrabold mb-6 text-purple-400 albert-sans-medium">KEY APPROACHES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudyData.strategy.approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/85 jost-secondary">{approach}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* 4. Persona-Driven Approach */}
      <section id="personas" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-gray-900 to-slate-950" />
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              PERSONA-DRIVEN APPROACH
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Tailored messaging and design for each educational audience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.personas.map((persona, index) => (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-green-500/30 h-full">
                  <h3 className="text-xl font-extrabold mb-4 text-green-300 albert-sans-medium">
                    {persona.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs px-2 py-1 border-green-400/50 text-green-400 jost-secondary">
                        {persona.target}
                      </Badge>
                      {persona.role && (
                        <Badge variant="outline" className="text-xs px-2 py-1 border-blue-400/50 text-blue-400 jost-secondary">
                          {persona.role}
                        </Badge>
                      )}
                    </div>
                    
                    {persona.focus && (
                      <div>
                        <h5 className="text-xs font-bold text-green-400 mb-1 jost-secondary uppercase tracking-wider">Focus</h5>
                        <p className="text-sm text-white/80 jost-secondary">{persona.focus}</p>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-white/85 leading-relaxed mb-6 jost-secondary">
                    {persona.description}
                  </p>
                  
                  <div className="space-y-4">
                    {persona.painPoints && (
                      <div>
                        <h4 className="text-sm font-bold text-red-400 mb-2 jost-secondary">PAIN POINTS</h4>
                        <ul className="space-y-1">
                          {persona.painPoints.map((point, idx) => (
                            <li key={idx} className="text-sm text-white/70 flex items-start jost-secondary">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {persona.motivations && (
                      <div>
                        <h4 className="text-sm font-bold text-blue-400 mb-2 jost-secondary">MOTIVATIONS</h4>
                        <ul className="space-y-1">
                          {persona.motivations.map((motivation, idx) => (
                            <li key={idx} className="text-sm text-white/70 flex items-start jost-secondary">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {motivation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {persona.channels && (
                      <div>
                        <h4 className="text-sm font-bold text-purple-400 mb-2 jost-secondary">TOP CHANNELS</h4>
                        <ul className="space-y-1">
                          {persona.channels.map((channel, idx) => (
                            <li key={idx} className="text-sm text-white/70 flex items-start jost-secondary">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {channel}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-bold text-green-400 mb-2 jost-secondary">KEY FEATURES</h4>
                      <ul className="space-y-1">
                        {persona.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-white/70 flex items-start jost-secondary">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. Design Process */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              DESIGN PROCESS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Systematic approach to creating conversion-optimized landing pages
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
                  
                  <h3 className="text-xl font-extrabold mb-4 text-purple-300 albert-sans-medium">
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
      {/* 6. Results & Impact */}
      <section id="results" className="py-20 relative">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              RESULTS & IMPACT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Comprehensive landing page system delivering measurable outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyData.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-orange-500/30 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl font-extrabold text-orange-400 mb-2 albert-sans-medium">
                      {result.value}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 jost-secondary">
                      {result.metric}
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/70 text-sm leading-relaxed jost-secondary">
                      {result.description}
                    </p>
                  </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              TECHNOLOGY & TOOLS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Design and platform tools used for optimal implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudyData.techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center glass-card grain-texture border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 h-48 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-400 rounded opacity-70" />
                    </div>
                    <h3 className="font-bold text-white mb-1 jost-secondary">
                      {tech.name}
                    </h3>
                  </div>
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
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              KEY LEARNINGS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Insights gained from designing conversion-focused educational landing pages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-12 glass-card grain-texture border-yellow-500/30">
              <div className="space-y-6">
                {caseStudyData.learnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-6 h-6 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-3 h-3 text-yellow-400" />
                    </div>
                    <p className="text-white/85 leading-relaxed text-lg jost-secondary">
                      {learning}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 glass-card grain-texture border-primary/30">
              <h3 className="text-3xl font-extrabold mb-6 text-white albert-sans-medium">
                Ready to Transform Your Educational Landing Pages?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto jost-secondary">
                Let's create conversion-optimized landing pages that speak to your specific educational audiences and drive meaningful results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://2hourlearning.com/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="group border-white/20 text-white hover:bg-white/10">
                    View Live Site
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative py-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-20" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <p className="text-white/70 text-sm font-light tracking-wider">
              © 2025 Karn Kalaa. Designed & developed with passion.
            </p>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default TwoHourLearningCaseStudy;