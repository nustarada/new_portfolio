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
import linkedinLogo from "@assets/linkedin 1_1756620179383.png";
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

  const navigationSections = [
    { id: 'overview', title: 'Project Overview', color: 'from-blue-400 to-teal-400' },
    { id: 'context', title: 'Context', color: 'from-cyan-400 to-blue-400' },
    { id: 'problem', title: 'Problem Statement', color: 'from-red-400 to-orange-400' },
    { id: 'goals', title: 'Goals', color: 'from-green-400 to-teal-400' },
    { id: 'research', title: 'Research & Understanding', color: 'from-purple-400 to-pink-400' },
    { id: 'decisions', title: 'Design Decisions', color: 'from-orange-400 to-yellow-400' },
    { id: 'strategy', title: 'Solution Strategy', color: 'from-teal-400 to-green-400' },
    { id: 'showcase', title: 'Final Product', color: 'from-cyan-400 to-pink-400' },
    { id: 'designsystem', title: 'Design System', color: 'from-blue-400 to-purple-400' },
    { id: 'impact', title: 'Impact & Outcomes', color: 'from-green-400 to-cyan-400' },
    { id: 'learnings', title: 'Learnings', color: 'from-yellow-400 to-red-400' },
    { id: 'next', title: "What's Next", color: 'from-purple-400 to-blue-400' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    window.scrollTo(0, 0);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const caseStudyData = {
    title: "2 Hour Learning",
    subtitle: "A persona-driven landing page system designed to convert diverse educational audiences—from school principals to board members—through targeted messaging and strategic content hierarchy.",
    category: "Landing Page Design & Strategy",
    duration: "4 weeks",
    year: "2025",
    team: "Solo Project",
    client: "2 Hour Learning",
    role: "Lead Product Designer",
    tags: ["Product Design", "Conversion Strategy", "Education", "Landing Pages"],

    overview: "2 Hour Learning needed a landing page system that could effectively target different segments of their educational market. I designed 4 distinct landing pages that maintain brand consistency while optimizing for different user personas, conversion goals, and decision-making contexts—from individual educators to institutional stakeholders.",

    context: {
      market: "The education technology market is crowded with platforms competing for institutional attention. Schools face pressure to modernize, but decision-makers at different levels have fundamentally different concerns and motivations.",
      audience: "The audience spans four distinct roles: general visitors discovering the brand, school principals evaluating outcomes, curriculum directors assessing implementation, and board members analyzing ROI. Each requires a different value proposition.",
      challenge: "Traditional one-size-fits-all landing pages fail in education because the buying process involves multiple stakeholders. A principal cares about student outcomes; a board member cares about cost efficiency. The same product needs different stories.",
      opportunity: "By designing persona-specific landing pages integrated with HubSpot and WordPress, 2 Hour Learning could deliver targeted experiences that speak directly to each stakeholder's priorities and accelerate the multi-stakeholder sales cycle."
    },

    problem: {
      description: "Education technology purchasing involves multiple decision-makers with conflicting priorities. A single landing page cannot effectively address the concerns of a curriculum director and a board member simultaneously, leading to low engagement and poor conversion across audience segments.",
      painPoints: [
        "Generic messaging failing to resonate with diverse stakeholder groups",
        "Multi-stakeholder buying process creating friction in conversion funnels",
        "Lack of persona-specific value propositions losing qualified leads",
        "Inconsistent brand experience across different platform touchpoints",
        "No clear content hierarchy addressing role-specific decision criteria"
      ]
    },

    goals: [
      { goal: "Target Each Persona", description: "Create distinct landing experiences that speak to each stakeholder's specific concerns and decision criteria" },
      { goal: "Optimize Conversion", description: "Design strategic CTA placement and messaging hierarchy tailored to each persona's buying journey" },
      { goal: "Maintain Brand Cohesion", description: "Ensure visual consistency across all pages while allowing persona-appropriate customization" },
      { goal: "Enable Scalability", description: "Build a design system that allows easy creation of additional persona pages as the market expands" },
      { goal: "Platform Integration", description: "Design for seamless HubSpot and WordPress implementation with proper tracking and analytics" }
    ],

    research: {
      marketObservations: [
        "Education purchasing decisions involve 3-5 stakeholders with different evaluation criteria",
        "School principals prioritize student outcomes and differentiation; board members prioritize ROI and market position",
        "Most edtech landing pages use generic messaging that fails to address role-specific concerns"
      ],
      behaviorAssumptions: [
        "Decision-makers scan for role-relevant proof points before engaging with detailed content",
        "Institutional buyers need shareable, data-driven content they can forward to colleagues",
        "Trust signals (research validation, testimonials) carry more weight than feature lists in education"
      ],
      uxGaps: [
        "Competitor pages lack clear content hierarchy for different reader types",
        "Most education landing pages bury conversion paths behind extensive content",
        "No competitor effectively addresses the multi-stakeholder approval process in their design"
      ]
    },

    designDecisions: [
      {
        insight: "Decision-makers scan for role-relevant proof points first",
        decision: "Role-specific hero messaging with immediate value proposition alignment",
        reasoning: "Reduces bounce rate by confirming relevance within the first 3 seconds of page visit"
      },
      {
        insight: "Institutional buyers need shareable content for internal advocacy",
        decision: "Data-driven sections with clear metrics designed for screenshot sharing",
        reasoning: "Enables stakeholders to forward compelling proof points to colleagues who influence the decision"
      },
      {
        insight: "Trust signals outweigh feature lists in education purchasing",
        decision: "Research validation and outcome metrics prioritized over feature descriptions",
        reasoning: "Builds credibility through evidence-based positioning rather than claims"
      },
      {
        insight: "Multi-stakeholder process requires different conversion paths",
        decision: "Persona-specific CTAs aligned with each role's decision authority level",
        reasoning: "A principal requests a demo; a board member requests an ROI report—different actions for different roles"
      },
      {
        insight: "Brand consistency matters across fragmented touchpoints",
        decision: "Unified design system with persona-appropriate color accents and content modules",
        reasoning: "Maintains professional credibility when multiple stakeholders compare different landing pages"
      }
    ],

    strategy: {
      pageStructure: "Four-page system: Homepage (WordPress) for brand discovery, three HubSpot pages for targeted persona conversion—each with distinct messaging hierarchy and conversion paths.",
      contentGrouping: "Content organized by decision criteria: outcomes and innovation for principals, efficiency and data for curriculum directors, ROI and growth for board members.",
      navigationLogic: "Homepage serves as a discovery hub routing visitors to persona-specific pages based on self-identification, while each persona page operates as a standalone conversion experience.",
      conversionFlow: "Progressive engagement model: hero captures attention → proof points build credibility → social proof reduces risk → CTA matches decision authority level.",
      platformStrategy: "WordPress for SEO-optimized homepage with broad reach, HubSpot for persona pages with built-in lead scoring and nurture sequence integration."
    },

    designs: [
      {
        id: 'homepage',
        title: "Homepage (WordPress)",
        description: "Brand discovery page introducing 2 Hour Learning's value proposition to first-time visitors with clear navigation paths to persona-specific content.",
        thumbnail: homepageThumbnail,
        fullImage: homepageDesign,
        color: "cyan"
      },
      {
        id: 'persona1',
        title: "Head of School (HubSpot)",
        description: "Conversion page targeting principals with outcomes-focused messaging, school differentiation highlights, and implementation simplicity.",
        thumbnail: persona1Thumbnail,
        fullImage: persona1Design,
        color: "blue"
      },
      {
        id: 'persona2',
        title: "Dean of Academics (HubSpot)",
        description: "Conversion page for curriculum directors emphasizing teacher workflow optimization, student mastery data, and curriculum alignment.",
        thumbnail: persona2Thumbnail,
        fullImage: persona2Design,
        color: "purple"
      },
      {
        id: 'persona3',
        title: "Board Member (HubSpot)",
        description: "Strategic conversion page focused on ROI metrics, competitive positioning, and long-term growth for institutional decision-makers.",
        thumbnail: persona3Thumbnail,
        fullImage: persona3Design,
        color: "green"
      }
    ],

    results: [
      { metric: "Landing Pages", value: "4", description: "Persona-specific pages targeting distinct educational stakeholders" },
      { metric: "Brand Consistency", value: "100%", description: "Visual cohesion maintained across all pages and platforms" },
      { metric: "Persona Coverage", value: "4", description: "Distinct market segments addressed with tailored messaging" },
      { metric: "Platform Integration", value: "2", description: "Optimized for HubSpot and WordPress ecosystems" },
      { metric: "Design System", value: "1", description: "Unified system enabling scalable page creation" },
      { metric: "Conversion Focus", value: "100%", description: "Every page optimized for role-specific conversion goals" }
    ],

    designSystem: {
      typography: "Clear heading hierarchy with bold, scannable headlines for stakeholders. Body text optimized for professional readability across desktop and mobile.",
      spacing: "Consistent section rhythm creating predictable content patterns. Generous whitespace enabling focus on key metrics and proof points.",
      components: "Reusable modules including hero sections, proof point cards, testimonial blocks, and CTA sections—all parameterized for persona-specific content.",
      scalability: "Design system built to support rapid creation of additional persona pages without redesigning core components or losing brand consistency."
    },

    learnings: [
      {
        title: "Designing for Multiple Decision-Makers",
        description: "The same product needs fundamentally different stories for different stakeholders. Understanding each role's priorities is more important than polishing visuals."
      },
      {
        title: "Simplifying Complexity",
        description: "Education technology involves complex value propositions. The design challenge is distilling complexity into scannable, role-relevant proof points."
      },
      {
        title: "Balancing Content & Experience",
        description: "Institutional buyers need substantial information but won't read walls of text. Strategic content hierarchy and visual emphasis solve this tension."
      },
      {
        title: "Platform-Aware Design",
        description: "Designing for HubSpot and WordPress simultaneously requires understanding platform constraints early. This shapes component decisions and layout possibilities."
      }
    ],

    whatsNext: [
      { title: "Personalization Engine", description: "Dynamic content blocks that adapt messaging based on visitor behavior and referral source" },
      { title: "Analytics-Driven Iteration", description: "A/B testing framework for headline variants, CTA placement, and proof point ordering" },
      { title: "Expanded Personas", description: "Additional landing pages for emerging audience segments like parents and teachers" },
      { title: "Interactive Demos", description: "Embedded product walkthroughs tailored to each persona's use case and evaluation criteria" }
    ]
  };

  const colorMap: Record<string, string> = {
    cyan: 'border-cyan-500/30 hover:border-cyan-400/50',
    blue: 'border-blue-500/30 hover:border-blue-400/50',
    purple: 'border-purple-500/30 hover:border-purple-400/50',
    green: 'border-green-500/30 hover:border-green-400/50'
  };

  const textColorMap: Record<string, string> = {
    cyan: 'text-cyan-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    green: 'text-green-400'
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture two-hour-learning-case-study">
      <CaseStudyNavigation sections={navigationSections} />
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-cyan-400 z-[9999]"
        style={{ width: progressWidth }}
      />
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
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="jost-secondary">{caseStudyData.duration}</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="jost-secondary">{caseStudyData.role}</span>
              </div>
            </div>

            <div className="space-y-6">
              <Badge variant="outline" className="text-sm px-4 py-2 border-primary/50 bg-primary/10 jost-secondary">
                {caseStudyData.category}
              </Badge>
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white albert-sans-medium leading-tight">
                  {caseStudyData.title}
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white albert-sans-medium leading-tight">
                  Persona-Driven Lead Generation
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed jost-secondary">
                {caseStudyData.subtitle}
              </p>
            </div>

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
              A snapshot of the persona-driven landing page system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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

      {/* 2. Context */}
      <section id="context" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-gray-900 to-slate-950" />
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
              CONTEXT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Understanding the educational market and multi-stakeholder challenge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Market Landscape", content: caseStudyData.context.market, icon: Globe },
              { title: "Audience Diversity", content: caseStudyData.context.audience, icon: Users },
              { title: "Core Challenge", content: caseStudyData.context.challenge, icon: Target },
              { title: "Opportunity", content: caseStudyData.context.opportunity, icon: Lightbulb }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 glass-card grain-texture border-cyan-500/30 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-cyan-300 mb-3 albert-sans-medium">{item.title}</h3>
                        <p className="text-white/85 leading-relaxed jost-secondary">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Problem Statement */}
      <section id="problem" className="py-20 relative">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              PROBLEM STATEMENT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              The core challenge in multi-stakeholder education marketing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 glass-card grain-texture border-red-500/30">
              <p className="text-xl text-white/90 leading-relaxed mb-8 jost-secondary">
                {caseStudyData.problem.description}
              </p>
              
              <h3 className="text-2xl font-extrabold mb-6 text-red-400 albert-sans-medium">KEY CHALLENGES</h3>
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

      {/* 4. Goals */}
      <section id="goals" className="py-20 relative">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              GOALS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Clear objectives driving the design strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyData.goals.map((item, index) => (
              <motion.div
                key={item.goal}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 glass-card grain-texture border-green-500/30 h-full">
                  <div className="flex items-start space-x-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-extrabold text-green-300 albert-sans-medium">{item.goal}</h3>
                  </div>
                  <p className="text-white/80 jost-secondary pl-8">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Research & Product Understanding */}
      <section id="research" className="py-20 relative">
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
              RESEARCH & PRODUCT UNDERSTANDING
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Key insights that shaped the landing page strategy
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: "Market Observations", items: caseStudyData.research.marketObservations },
              { title: "Behavior Assumptions", items: caseStudyData.research.behaviorAssumptions },
              { title: "UX Gaps in Current Platforms", items: caseStudyData.research.uxGaps }
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-purple-500/30">
                  <h3 className="text-xl font-extrabold mb-6 text-purple-300 albert-sans-medium">{section.title}</h3>
                  <div className="space-y-4">
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-white/85 jost-secondary">{item}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Design Thinking & Key Decisions */}
      <section id="decisions" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-900 to-slate-950" />
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
              DESIGN THINKING & KEY DECISIONS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              How insights translated into design choices
            </p>
          </motion.div>

          <div className="space-y-6">
            {caseStudyData.designDecisions.map((decision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-orange-500/30">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <div className="text-sm font-bold text-orange-400 mb-2 jost-secondary">INSIGHT</div>
                      <p className="text-white/85 jost-secondary">{decision.insight}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-orange-400 hidden lg:block" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-green-400 mb-2 jost-secondary">DECISION</div>
                      <p className="text-white font-semibold jost-secondary mb-2">{decision.decision}</p>
                      <p className="text-white/70 text-sm jost-secondary">{decision.reasoning}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Solution Strategy */}
      <section id="strategy" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-gray-900 to-slate-950" />
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
              SOLUTION STRATEGY
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              System-level approach to multi-persona conversion design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Page Structure", content: caseStudyData.strategy.pageStructure },
              { title: "Content Grouping", content: caseStudyData.strategy.contentGrouping },
              { title: "Navigation Logic", content: caseStudyData.strategy.navigationLogic },
              { title: "Conversion Flow", content: caseStudyData.strategy.conversionFlow },
              { title: "Platform Strategy", content: caseStudyData.strategy.platformStrategy, colSpan: true }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={item.colSpan ? "md:col-span-2" : ""}
              >
                <Card className="p-8 glass-card grain-texture border-teal-500/30 h-full">
                  <h3 className="text-xl font-extrabold text-teal-300 mb-4 albert-sans-medium">{item.title}</h3>
                  <p className="text-white/85 leading-relaxed jost-secondary">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final Product / Design Showcase */}
      <section id="showcase" className="py-20 relative">
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
              FINAL PRODUCT
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Four persona-specific landing pages optimized for conversion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {caseStudyData.designs.map((design, index) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`p-4 glass-card grain-texture ${colorMap[design.color]} transition-all duration-500 cursor-pointer group`}
                  onClick={() => setOpenModal(design.id)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                    <img src={design.thumbnail} alt={design.title} className="w-full h-auto rounded-lg" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                      <div className="bg-white/95 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-md shadow-lg">
                        <p className="text-gray-900 text-sm font-semibold jost-secondary">Click to view</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className={`text-base font-extrabold ${textColorMap[design.color]} mb-1 albert-sans-medium`}>
                      {design.title}
                    </h3>
                    <p className="text-white/75 text-xs jost-secondary">
                      {design.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {caseStudyData.designs.map((design) => (
          <Dialog key={design.id} open={openModal === design.id} onOpenChange={() => setOpenModal(null)}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900/95 border-white/20">
              <DialogHeader>
                <DialogTitle className={`text-2xl font-extrabold ${textColorMap[design.color]} albert-sans-medium`}>
                  {design.title}
                </DialogTitle>
                <p className="text-white/80 jost-secondary">{design.description}</p>
              </DialogHeader>
              <div className="mt-4">
                <img 
                  src={design.fullImage} 
                  alt={design.title}
                  className="w-full h-auto rounded-lg border border-white/10"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </section>

      {/* 9. Design System Foundations */}
      <section id="designsystem" className="py-20 relative">
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
              DESIGN SYSTEM FOUNDATIONS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Scalable visual language ensuring consistency across personas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Typography", content: caseStudyData.designSystem.typography, icon: Code },
              { title: "Spacing & Rhythm", content: caseStudyData.designSystem.spacing, icon: Palette },
              { title: "Component Library", content: caseStudyData.designSystem.components, icon: Zap },
              { title: "Scalability", content: caseStudyData.designSystem.scalability, icon: Smartphone }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 glass-card grain-texture border-blue-500/30 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-blue-300 mb-3 albert-sans-medium">{item.title}</h3>
                        <p className="text-white/85 leading-relaxed jost-secondary">{item.content}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Impact & Outcomes */}
      <section id="impact" className="py-20 relative">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              IMPACT & OUTCOMES
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Measurable results from the persona-driven approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyData.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Card className="p-4 sm:p-6 text-center glass-card grain-texture border-green-500/30 hover:border-green-400/50 transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-green-400 albert-sans-medium leading-none">
                      {result.value}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white jost-secondary">
                      {result.metric}
                    </h3>
                    <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-3 sm:my-4"></div>
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

      {/* 11. Learnings */}
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
              LEARNINGS
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Key reflections from designing for multi-stakeholder conversion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudyData.learnings.map((learning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-yellow-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-yellow-300 mb-2 albert-sans-medium">{learning.title}</h3>
                      <p className="text-white/85 leading-relaxed jost-secondary">{learning.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. What's Next */}
      <section id="next" className="py-20 relative">
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
              WHAT'S NEXT
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Future opportunities for the landing page system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudyData.whatsNext.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-purple-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-purple-300 mb-2 albert-sans-medium">{item.title}</h3>
                      <p className="text-white/85 leading-relaxed jost-secondary">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            <h2 className="text-4xl md:text-5xl font-extrabold albert-sans-medium bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in discussing how persona-driven design can improve your conversion strategy?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 border-0 grain-texture">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <a href="https://2hourlearning.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold border-white/20 hover:border-white/40 hover:bg-white/5">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-16">
              <div className="flex-shrink-0">
                <a href="/#hero" className="block group">
                  <div className="w-20 h-20 bg-gradient-to-br from-grey-600/30 to-white-600/30 rounded-full border-1.5 border-white/30 flex items-center justify-center hover:border-white/50 hover:scale-105 transition-all duration-300">
                    <img src={LogoImage} alt="Logo" className="w-10 h-10 object-contain" />
                  </div>
                </a>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="https://www.linkedin.com/in/karan-gadhave/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-black-600/30 to-black-600/30 rounded-full border-1.5 border-white/30 flex items-center justify-center hover:border-white/50 hover:scale-105 transition-all duration-300">
                    <img src={linkedinLogo} alt="LinkedIn" className="w-9 h-9 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-600 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>

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
