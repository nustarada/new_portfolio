import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Target,
  TrendingUp,
  ExternalLink,
  ArrowLeft,
  Lightbulb,
  Heart,
  Smartphone,
  Shield,
  Award,
  Zap,
  TestTube,
  Palette,
  Code,
  User,
  AlertCircle,
  ArrowRight,
  Linkedin,
  Globe,
  Activity,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyNavigation } from "@/components/case-study-navigation";
import LogoImage from "@assets/Logo white_1754674219191.png";
import linkedinLogo from "@assets/linkedin 1_1756620179383.png";

import Screen1 from "@assets/1. Walkthrough 1_1754469198499.png";
import Screen2 from "@assets/2. Walkthrough 2_1754469198505.png";
import Screen3 from "@assets/3. Walkthrough 3_1754469198505.png";
import Screen4 from "@assets/4. Dashboard 1_1754469198505.png";
import Screen5 from "@assets/5. Dashboard 2_1754469198505.png";
import Screen6 from "@assets/6. All Services_1754469198506.png";
import Screen7 from "@assets/7. Lab Test Serivices_1754469198506.png";
import Screen8 from "@assets/8. Pharmacy Lab Test Serivices_1754469198506.png";
import Screen9 from "@assets/9. Doctor Lab Test Serivices_1754469198506.png";
import Screen10 from "@assets/10. Symptoms_1754469198506.png";
import Screen11 from "@assets/11. Emergency_1754469198506.png";
import Screen12 from "@assets/12. Emergency Expanded_1754469198507.png";
import Screen13 from "@assets/13. Emergency Hospital List_1754469198507.png";
import Screen14 from "@assets/14. Home care services_1754469198507.png";
import Screen15 from "@assets/15. Hospital Detail Page 5_1754469198507.png";
import Screen16 from "@assets/16. Hospital Detail Page 1_1754469198507.png";
import Screen17 from "@assets/17. Hospital Detail Page 2_1754469198507.png";
import Screen18 from "@assets/18. Hospital Detail Page 3_1754469198507.png";
import Screen19 from "@assets/19. Hospital Detail Page 4_1754469198507.png";
import Screen20 from "@assets/20. Elite Doctor_1754469198508.png";
import Screen21 from "@assets/21. Doctor Specialisation_1754469216926.png";
import Screen22 from "@assets/22. Doctor List_1754469216927.png";
import Screen23 from "@assets/23. Search Tab_1754469216928.png";
import Screen24 from "@assets/24. Search Tab_1754469216928.png";
import Screen25 from "@assets/25. My Profile_1754469216929.png";
import Screen26 from "@assets/26. Edit Profile_1754469216929.png";
import Screen27 from "@assets/27. Appointment_1754469216929.png";
import Screen28 from "@assets/28. Prescription_1754469216929.png";
import Screen29 from "@assets/29. My Lab Results_1754469216929.png";
import Screen30 from "@assets/30. Edit Physicals_1754469216930.png";
import Screen31 from "@assets/31. Health Details_1754469216930.png";
import Screen32 from "@assets/32. Family Medical History_1754469216930.png";
import Screen33 from "@assets/33. Dropdown_1754469216930.png";
import Screen34 from "@assets/34. Health card_1754469216930.png";

const LiffoCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navigationSections = [
    { id: "overview", title: "Project Overview", color: "from-red-400 to-orange-400" },
    { id: "context", title: "Context", color: "from-orange-400 to-yellow-400" },
    { id: "problem", title: "Problem Statement", color: "from-red-400 to-pink-400" },
    { id: "goals", title: "Goals", color: "from-green-400 to-teal-400" },
    { id: "research", title: "Research & Understanding", color: "from-purple-400 to-pink-400" },
    { id: "decisions", title: "Design Decisions", color: "from-orange-400 to-red-400" },
    { id: "strategy", title: "Solution Strategy", color: "from-teal-400 to-green-400" },
    { id: "showcase", title: "Final Product", color: "from-cyan-400 to-blue-400" },
    { id: "designsystem", title: "Design System", color: "from-blue-400 to-purple-400" },
    { id: "impact", title: "Impact & Outcomes", color: "from-green-400 to-cyan-400" },
    { id: "learnings", title: "Learnings", color: "from-yellow-400 to-orange-400" },
    { id: "next", title: "What's Next", color: "from-purple-400 to-blue-400" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const caseStudyData = {
    title: "Liffo",
    subtitle: "A unified healthcare platform designed for emergency-first access, enabling patients to book ambulances, consult elite doctors, and coordinate care—all from a single mobile experience.",
    category: "Mobile App Design",
    duration: "13 weeks",
    team: "Solo Designer",
    client: "Liffo Health Services",
    role: "Lead Product Designer",
    tags: ["Product Design", "Healthcare UX", "Emergency Services", "Mobile Design"],

    overview: "Liffo is an emergency-first healthcare platform that unifies ambulance booking, elite doctor access, home care services, and medical supply purchasing into a single mobile experience. I led the end-to-end product design, creating an interface optimized for high-stress situations while supporting routine healthcare needs.",

    context: {
      ecosystem: "Healthcare in India is fragmented across hospitals, clinics, pharmacies, and home care providers. Patients navigate multiple apps, phone calls, and physical visits to coordinate care—especially challenging during emergencies.",
      users: "Primary users include patients requiring urgent care, families managing chronic conditions, and individuals seeking routine consultations. Each group has distinct needs but shares the requirement for fast, reliable access.",
      purpose: "Liffo exists to eliminate friction in healthcare access by prioritizing emergency services while providing a comprehensive platform for all healthcare needs—from ambulance dispatch to prescription refills.",
      background: "The project emerged from a clear market gap: no single platform addressed both emergency and routine healthcare needs. Existing solutions were either emergency-only (with poor UX) or focused on consultations (ignoring urgent care)."
    },

    problem: {
      title: "Problem Statement",
      description: "Patients face critical delays and cognitive overload when coordinating healthcare, especially during emergencies. The fragmented ecosystem forces users to navigate multiple touchpoints, causing delays that can be life-threatening in urgent situations.",
      painPoints: [
        "Critical delays in emergency response due to fragmented booking systems",
        "Trust gaps in provider quality and availability during urgent situations",
        "Cognitive overload when making healthcare decisions under stress",
        "Difficulty coordinating care across emergency, routine, and home care needs",
        "No unified view of health records, appointments, and prescriptions"
      ]
    },

    goals: [
      { goal: "Reduce Emergency Friction", description: "Enable one-tap ambulance booking and instant access to emergency doctors" },
      { goal: "Unify Healthcare Services", description: "Consolidate emergency, consultation, home care, and pharmacy into one platform" },
      { goal: "Build Provider Trust", description: "Surface transparent information about doctors, hospitals, and ratings" },
      { goal: "Support Care Continuity", description: "Connect emergency care with follow-up appointments and home care" },
      { goal: "Minimize Cognitive Load", description: "Design for high-stress usage with clear hierarchy and minimal decision points" }
    ],

    research: {
      stakeholderInsights: [
        "Emergency response teams reported that patient location and medical history delays cost critical minutes",
        "Hospital administrators noted that pre-arrival information significantly improves emergency outcomes",
        "Home care providers struggled with scheduling coordination and patient handoffs"
      ],
      behavioralInsights: [
        "Users in emergency situations scan for the most prominent action—they don't read",
        "Trust signals (ratings, credentials, response time) heavily influence provider selection",
        "Patients managing chronic conditions value continuity with specific doctors over convenience"
      ],
      systemGaps: [
        "No integration between emergency dispatch and hospital admission systems",
        "Medical records scattered across providers with no patient-controlled access",
        "Home care services operated independently with no connection to treating physicians"
      ]
    },

    designDecisions: [
      {
        insight: "Users in emergencies scan for prominent actions, not text",
        decision: "Emergency button is the largest, most visible element on dashboard",
        reasoning: "Reduces time-to-action by eliminating scanning and reading in high-stress moments"
      },
      {
        insight: "Trust gaps cause hesitation in provider selection",
        decision: "Transparent doctor profiles with credentials, ratings, and response times",
        reasoning: "Builds confidence through verification, enabling faster decision-making"
      },
      {
        insight: "Patients managing chronic conditions value doctor continuity",
        decision: "Favorite doctors and rebooking shortcuts in profile section",
        reasoning: "Respects ongoing care relationships while maintaining platform utility"
      },
      {
        insight: "Medical decisions under stress cause cognitive overload",
        decision: "Guided flows with progressive disclosure for complex tasks",
        reasoning: "Reduces decision fatigue by presenting one step at a time with clear next actions"
      },
      {
        insight: "Care coordination breaks down between emergency and follow-up",
        decision: "Integrated care journey from emergency through home care and pharmacy",
        reasoning: "Creates continuity that improves outcomes and reduces re-hospitalization"
      }
    ],

    strategy: {
      architecture: "Three-tier priority system: Emergency (ambulance, elite doctors), Consultation (specialists, routine care), Support (home care, pharmacy, records)",
      serviceGrouping: "Services grouped by urgency and use case rather than provider type, enabling intuitive navigation based on patient needs",
      navigation: "Bottom navigation for core sections, prominent emergency access from every screen, contextual actions within service flows",
      emergencyPriority: "Emergency services accessible within two taps from any screen, with GPS auto-detection and one-tap dispatch",
      careJourney: "Unified patient journey connecting emergency response → hospital admission → discharge planning → home care → follow-up appointments"
    },

    designShowcase: [
      {
        category: "Onboarding & Dashboard",
        description: "Streamlined onboarding captures emergency contacts upfront. Dashboard prioritizes emergency access while surfacing health overview.",
        images: [Screen1, Screen2, Screen3, Screen4, Screen5],
      },
      {
        category: "Emergency Services",
        description: "One-tap emergency access with GPS dispatch, hospital coordination, and real-time tracking. Designed for use under extreme stress.",
        images: [Screen10, Screen11, Screen12, Screen13],
      },
      {
        category: "Home Care Services",
        description: "Comprehensive home care booking including nursing, physiotherapy, and chronic care management with provider profiles and scheduling.",
        images: [Screen14],
      },
      {
        category: "Hospital & Provider Discovery",
        description: "Detailed hospital and doctor profiles with transparent credentials, ratings, and availability. Filters for specialization and location.",
        images: [Screen15, Screen16, Screen17, Screen18, Screen19, Screen20, Screen21, Screen22],
      },
      {
        category: "Search & Services",
        description: "Unified search across all healthcare services. Service directory organized by patient need rather than provider category.",
        images: [Screen6, Screen7, Screen8, Screen9, Screen23, Screen24],
      },
      {
        category: "Profile & Health Records",
        description: "Centralized health profile with appointments, prescriptions, lab results, and family medical history. Enables informed care decisions.",
        images: [Screen25, Screen26, Screen27, Screen28, Screen29, Screen30, Screen31, Screen32, Screen33, Screen34],
      },
    ],

    results: [
      { metric: "Emergency Response", value: "65%", description: "Faster ambulance dispatch through one-tap booking" },
      { metric: "Care Coordination", value: "78%", description: "Improvement in home care scheduling efficiency" },
      { metric: "User Satisfaction", value: "4.9/5", description: "Rating for emergency doctor consultations" },
      { metric: "Booking Efficiency", value: "82%", description: "Faster routine appointment scheduling" },
      { metric: "Prescription Sync", value: "91%", description: "Success rate for integrated pharmacy orders" },
      { metric: "Provider Adoption", value: "+203%", description: "Increase in healthcare provider registrations" }
    ],

    designSystem: {
      visualLanguage: "High-contrast color system with red for emergency, green for health/success, and neutral grays for content. Ensures visibility in various lighting conditions.",
      typography: "Clear hierarchy with large, bold headings for quick scanning. Body text optimized for readability on mobile screens in stressful situations.",
      components: "Reusable component library including emergency buttons, provider cards, appointment modules, and health record displays. Designed for consistency across 34+ screens.",
      accessibility: "Large touch targets (minimum 48px), high color contrast ratios, and clear iconography supporting users with varying technical comfort and abilities."
    },

    learnings: [
      {
        title: "Designing for High-Stress Scenarios",
        description: "Emergency UX requires eliminating every unnecessary decision. Users in crisis can't process options—they need obvious, immediate actions."
      },
      {
        title: "Reducing Cognitive Load",
        description: "Progressive disclosure and guided flows prevent overwhelm. Show only what's needed for the current step, with clear paths forward."
      },
      {
        title: "Healthcare Trust Design",
        description: "Trust is built through transparency. Visible credentials, ratings, and response times reduce hesitation and enable faster decisions."
      },
      {
        title: "Balancing Speed vs Clarity",
        description: "Emergency features must be fast; routine features must be clear. Different design patterns serve different mental states."
      }
    ],

    whatsNext: [
      { title: "Predictive Care Journeys", description: "AI-driven suggestions for follow-up care based on diagnosis and treatment history" },
      { title: "Deeper Provider Integration", description: "Real-time hospital bed availability and direct admission coordination" },
      { title: "Expanded Home Care", description: "Mental health services, elder care, and specialized therapy integration" },
      { title: "Personalization Engine", description: "Customized dashboard and recommendations based on health profile and usage patterns" }
    ]
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground relative grain-texture liffo-case-study"
    >
      <CaseStudyNavigation sections={navigationSections} />
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-[9999]"
        style={{ width: progressWidth }}
      />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-intense grain-texture border-b border-white/10 shadow-2xl shadow-red-500/20"
            : "glass-card grain-texture"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={LogoImage}
                  alt="Karan Gadhave Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
                />
              </motion.div>
            </Link>

            <motion.button
              onClick={() => (window.location.href = "/")}
              className="relative group px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 glass-card grain-texture hover:glass-intense border border-red-500/30 hover:border-red-500/50 text-white font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
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
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-orange-950/20" />
          <div className="absolute inset-0 grain-texture opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span className="jost-secondary">{caseStudyData.duration}</span>
              </div>
              <div className="w-px h-4 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-red-400" />
                <span className="jost-secondary">{caseStudyData.role}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Badge
                variant="outline"
                className="text-sm px-4 py-2 border-red-500/50 bg-red-500/10 jost-secondary"
              >
                {caseStudyData.category}
              </Badge>
              <h1 className="space-y-2">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white albert-sans-medium leading-tight">
                  {caseStudyData.title}
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent albert-sans-medium leading-tight">
                  Emergency Health Platform
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed jost-secondary">
                {caseStudyData.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {caseStudyData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs jost-secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
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
              A snapshot of the healthcare platform design challenge
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
              <Card className="p-8 glass-card grain-texture border-red-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-red-400 albert-sans-medium">
                  PROJECT DETAILS
                </h3>
                <div className="space-y-4 flex-grow">
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Client</span>
                    <span className="text-white font-semibold jost-secondary">
                      {caseStudyData.client}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Role</span>
                    <span className="text-white font-semibold jost-secondary">
                      {caseStudyData.role}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70 jost-secondary">Duration</span>
                    <span className="text-white font-semibold jost-secondary">
                      {caseStudyData.duration}
                    </span>
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
              <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-orange-400 albert-sans-medium">
                  OVERVIEW
                </h3>
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
              CONTEXT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Understanding the healthcare ecosystem and user environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Healthcare Ecosystem", content: caseStudyData.context.ecosystem, icon: Globe },
              { title: "User Types", content: caseStudyData.context.users, icon: Users },
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
                  <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-orange-300 mb-3 albert-sans-medium">{item.title}</h3>
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
              The core challenges in healthcare access and coordination
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

              <h3 className="text-2xl font-extrabold mb-6 text-red-400 albert-sans-medium">
                KEY CHALLENGES
              </h3>
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
              Key insights that shaped the design approach
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              { title: "Stakeholder Insights", items: caseStudyData.research.stakeholderInsights },
              { title: "Behavioral Insights", items: caseStudyData.research.behavioralInsights },
              { title: "System-Level Gaps", items: caseStudyData.research.systemGaps }
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
              System-level approach to healthcare platform design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Platform Architecture", content: caseStudyData.strategy.architecture },
              { title: "Service Grouping", content: caseStudyData.strategy.serviceGrouping },
              { title: "Navigation Model", content: caseStudyData.strategy.navigation },
              { title: "Emergency Priority", content: caseStudyData.strategy.emergencyPriority },
              { title: "Unified Care Journey", content: caseStudyData.strategy.careJourney, colSpan: true }
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
              34 screens designed for emergency-first healthcare access
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudyData.designShowcase.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-red-400 mb-3 albert-sans-medium">
                    {category.category}
                  </h3>
                  <p className="text-white/80 jost-secondary max-w-3xl">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative group"
                    >
                      <Card className="overflow-hidden glass-card grain-texture border-white/10 hover:border-red-400/50 transition-all duration-300">
                        <img
                          src={image}
                          alt={`${category.category} screen ${imageIndex + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
              Scalable visual language for healthcare interfaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Visual Language", content: caseStudyData.designSystem.visualLanguage, icon: Palette },
              { title: "Typography", content: caseStudyData.designSystem.typography, icon: Code },
              { title: "Component Library", content: caseStudyData.designSystem.components, icon: Zap },
              { title: "Accessibility", content: caseStudyData.designSystem.accessibility, icon: Shield }
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
              Key reflections from designing for healthcare emergencies
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-900 to-slate-950" />
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
            <h2 className="text-4xl md:text-5xl font-extrabold albert-sans-medium bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in discussing how product design can solve complex healthcare challenges?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="h-12 sm:h-14 px-8 text-base font-semibold bg-gradient-to-r from-red-900 via-red-800 to-red-900 hover:from-red-700 hover:via-red-600 hover:to-red-700 border-0 grain-texture"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
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

export default LiffoCaseStudy;
