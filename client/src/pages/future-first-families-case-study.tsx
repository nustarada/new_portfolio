import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, Users, CheckCircle, Target, TrendingUp, ExternalLink, ArrowLeft, Lightbulb, Zap, Palette, Code, Smartphone, Globe, Linkedin, User, AlertCircle, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CaseStudyNavigation } from '@/components/case-study-navigation';
import LogoImage from '@assets/Logo white_1754674219191.png';
import linkedinLogo from "@assets/linkedin 1_1756620179383.png";
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
    title: "FutureFirstFamilies",
    subtitle: "A gamified advocacy platform empowering families to drive meaningful community change through structured participation and progress tracking.",
    category: "Product Design",
    duration: "4 weeks",
    year: "2024",
    team: "Solo Designer",
    client: "FutureFirstFamilies Organization",
    role: "Lead Product Designer",
    tags: ["Product Design", "Gamification", "UX Architecture", "Design System"],
    
    overview: "FutureFirstFamilies is a gamified platform designed to engage parents and families in community advocacy. I led the end-to-end product design, creating a structured experience that simplifies participation, motivates continued engagement, and provides clear progress visibility for users and administrators.",

    context: {
      ecosystem: "FutureFirstFamilies operates within a broader ecosystem of family advocacy organizations, connecting parents, educators, and community leaders to drive policy change and educational improvements.",
      users: "The primary users are parents and family members who want to participate in advocacy activities but often lack time, clarity, or motivation to engage consistently with traditional advocacy platforms.",
      purpose: "The platform exists to transform passive community members into active advocates by making participation accessible, rewarding, and trackable.",
      background: "The organization needed to replace a fragmented system of emails, spreadsheets, and disconnected tools with a unified platform that could scale their advocacy efforts while maintaining engagement."
    },

    problem: {
      title: "Problem Statement",
      description: "Families wanted to participate in advocacy but faced significant barriers: fragmented experiences across multiple tools, unclear next steps, and no sense of progress or achievement. The existing approach failed to motivate sustained participation.",
      painPoints: [
        "Low engagement rates due to unclear value proposition and confusing user journeys",
        "Fragmented experience across email, documents, and separate web tools",
        "No structured onboarding leaving new members overwhelmed",
        "Lack of progress visibility making advocacy feel like endless, thankless work",
        "Manual tracking creating administrative burden and limiting scalability"
      ]
    },

    goals: [
      { goal: "Improve Engagement", description: "Create a motivating experience that drives consistent participation through clear value and rewards" },
      { goal: "Simplify Participation", description: "Reduce friction in advocacy activities with intuitive task flows and clear next steps" },
      { goal: "Enable Progress Tracking", description: "Provide visible milestones and achievements that recognize user contributions" },
      { goal: "Scale Operations", description: "Build a platform that reduces administrative overhead while supporting growth" },
      { goal: "Unify Experience", description: "Consolidate fragmented tools into a single, cohesive platform" }
    ],

    research: {
      stakeholderInsights: [
        "Administrators spent 60% of their time on manual tracking instead of program development",
        "Most engaged users were those who received personal outreach, indicating need for scalable engagement mechanics",
        "Drop-off typically occurred within first 2 weeks due to unclear expectations"
      ],
      behavioralInsights: [
        "Users responded strongly to visible progress indicators and achievement recognition",
        "Small, time-boxed tasks had 3x higher completion rates than open-ended activities",
        "Social proof and community visibility motivated continued participation"
      ],
      uxObservations: [
        "Navigation patterns showed users struggled to find relevant activities",
        "Form abandonment was high due to lengthy, multi-step processes",
        "Mobile usage was significant but poorly supported by existing tools"
      ]
    },

    designDecisions: [
      {
        insight: "Users dropped off within 2 weeks due to unclear expectations",
        decision: "Designed structured onboarding with progressive disclosure",
        reasoning: "Breaking the experience into digestible steps reduces cognitive load and builds early momentum"
      },
      {
        insight: "Small, time-boxed tasks had higher completion rates",
        decision: "Created a task-based experience with clear time estimates",
        reasoning: "Respects user time constraints while maintaining engagement through achievable goals"
      },
      {
        insight: "Users responded to visible progress and achievements",
        decision: "Implemented gamification with points, levels, and milestones",
        reasoning: "Provides intrinsic motivation and creates a sense of accomplishment that drives retention"
      },
      {
        insight: "Mobile usage was significant but poorly supported",
        decision: "Designed mobile-first responsive experience",
        reasoning: "Meets users where they are, enabling participation during commutes and brief availability windows"
      },
      {
        insight: "Navigation patterns showed users struggled to find activities",
        decision: "Simplified information architecture with clear action-oriented hierarchy",
        reasoning: "Reduces decision fatigue and surfaces relevant content based on user context and progress"
      }
    ],

    strategy: {
      engagementLoop: "Users discover tasks → Complete activities → Earn points → Unlock achievements → See community impact → Stay motivated to continue",
      navigation: "Three-tier structure: Dashboard (overview + next actions), Activities (task library), Profile (progress + achievements)",
      taskExperience: "Each task includes clear description, time estimate, step-by-step guidance, and immediate feedback on completion",
      rewardSystem: "Points for activities, badges for milestones, levels for sustained engagement, leaderboards for community motivation",
      contentFlow: "Personalized activity recommendations based on user interests, location, and past engagement patterns"
    },

    results: [
      { metric: "User Engagement", value: "+78%", description: "Increase in active participation and task completion" },
      { metric: "Task Completion", value: "65%", description: "Average completion rate for advocacy activities" },
      { metric: "Onboarding Success", value: "89%", description: "Users completing initial setup and first task" },
      { metric: "Mobile Usage", value: "72%", description: "Of sessions occurring on mobile devices" },
      { metric: "Admin Efficiency", value: "-60%", description: "Reduction in manual tracking and administration time" },
      { metric: "Retention", value: "3.2x", description: "Improvement in 30-day user retention rate" }
    ],

    designSystem: {
      typography: "Clear hierarchy with bold headings for scannability, comfortable body text for extended reading, and consistent sizing across breakpoints",
      colors: "Accessible color palette with distinct semantic meanings: blue for actions, green for success/progress, orange for engagement, and neutral grays for content",
      components: "Reusable component library including cards, progress indicators, achievement badges, and task modules designed for consistency and efficiency",
      patterns: "Established interaction patterns for task completion flows, progress visualization, and notification handling"
    },
    
    techStack: [
      { name: "Figma", category: "Design & Prototyping" },
      { name: "React", category: "Frontend Framework" },
      { name: "TypeScript", category: "Type Safety" },
      { name: "HubSpot API", category: "CRM Integration" },
      { name: "Tailwind CSS", category: "Styling System" }
    ],
    
    learnings: [
      {
        title: "Behavior Change Requires Structure",
        description: "Motivation alone doesn't create sustained engagement. Clear structure, visible progress, and achievable milestones are essential for behavior change."
      },
      {
        title: "Gamification Must Serve Purpose",
        description: "Points and badges only work when they reflect meaningful progress. The reward system must align with actual advocacy impact, not just activity volume."
      },
      {
        title: "Simplicity Enables Engagement",
        description: "Reducing friction in the core experience matters more than adding features. Every additional step is a potential drop-off point."
      },
      {
        title: "Mobile-First is Non-Negotiable",
        description: "For time-constrained users, mobile isn't a nice-to-have—it's where engagement happens. Design decisions must prioritize mobile constraints."
      }
    ],

    whatsNext: [
      { title: "Personalization Engine", description: "AI-driven activity recommendations based on user behavior, interests, and advocacy goals" },
      { title: "Community Features", description: "Team challenges, peer recognition, and collaborative advocacy activities" },
      { title: "Impact Dashboard", description: "Aggregate visualization showing collective community impact and policy outcomes" },
      { title: "Admin Analytics", description: "Enhanced reporting for program administrators to optimize engagement strategies" }
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture fff-case-study">
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
                  Gamified Advocacy Platform
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
              A snapshot of the project scope, role, and objectives
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
              Understanding the ecosystem, users, and why this project existed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Product Ecosystem", content: caseStudyData.context.ecosystem, icon: Globe },
              { title: "User Environment", content: caseStudyData.context.users, icon: Users },
              { title: "Platform Purpose", content: caseStudyData.context.purpose, icon: Target },
              { title: "Project Background", content: caseStudyData.context.background, icon: Lightbulb }
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
              The core challenges blocking user engagement and platform success
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
              Key insights that shaped design decisions
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: "Stakeholder Insights", items: caseStudyData.research.stakeholderInsights, color: "purple" },
              { title: "Behavioral Insights", items: caseStudyData.research.behavioralInsights, color: "pink" },
              { title: "UX Observations", items: caseStudyData.research.uxObservations, color: "violet" }
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
              System-level approach to solving engagement challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Engagement Loop", content: caseStudyData.strategy.engagementLoop },
              { title: "Navigation Structure", content: caseStudyData.strategy.navigation },
              { title: "Task Experience", content: caseStudyData.strategy.taskExperience },
              { title: "Reward System", content: caseStudyData.strategy.rewardSystem },
              { title: "Content Flow", content: caseStudyData.strategy.contentFlow, colSpan: true }
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
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              The gamified advocacy platform in action
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
                
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-extrabold text-cyan-400 mb-2 albert-sans-medium">
                  Platform Walkthrough
                </h3>
                <p className="text-white/75 jost-secondary">
                  Experience the gamified advocacy journey: onboarding, task completion, progress tracking, and achievement system
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { 
                title: "Task-Based Experience", 
                description: "Clear actions with time estimates drive consistent participation",
                icon: Target 
              },
              { 
                title: "Progress Visibility", 
                description: "Points, levels, and milestones make advocacy feel rewarding",
                icon: TrendingUp 
              },
              { 
                title: "Mobile-First Design", 
                description: "Optimized for participation during brief availability windows",
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
              Scalable visual language ensuring consistency and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Typography", content: caseStudyData.designSystem.typography, icon: Code },
              { title: "Color System", content: caseStudyData.designSystem.colors, icon: Palette },
              { title: "Component Library", content: caseStudyData.designSystem.components, icon: Zap },
              { title: "Interaction Patterns", content: caseStudyData.designSystem.patterns, icon: Smartphone }
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
              Measurable results demonstrating design effectiveness
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
              Key reflections from designing for behavior change
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
              Future opportunities for platform evolution
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
              Interested in discussing how product design can solve complex engagement challenges for your platform?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 border-0 grain-texture">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
              <a href="https://futurefirstfamilies.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold border-white/20 hover:border-white/40 hover:bg-white/5">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Site
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

export default CaseStudyPage;
