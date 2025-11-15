import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, Users, CheckCircle, Target, TrendingUp, ExternalLink, ArrowLeft, Lightbulb, Heart, Smartphone, Shield, Award, Zap, TestTube, Palette, Code, User, AlertCircle, ArrowRight, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CaseStudyNavigation } from '@/components/case-study-navigation';
import LogoImage from '@assets/Logo white_1754674219191.png';

// Import all 34 properly numbered Liffo screens
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
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Define navigation sections for Liffo case study
  const navigationSections = [
    { id: 'overview', title: 'Overview & Problem', color: 'from-blue-400 to-teal-400' },
    { id: 'personas', title: 'User Personas', color: 'from-orange-400 to-red-400' },
    { id: 'research', title: 'User Journey', color: 'from-green-400 to-teal-400' },
    { id: 'approach', title: 'The Design Solution', color: 'from-purple-400 to-pink-400' },
    { id: 'wireframes', title: 'Key Features', color: 'from-purple-400 to-cyan-400' },
    { id: 'screens', title: 'Design Showcase', color: 'from-green-400 to-cyan-400' },
    { id: 'testing', title: 'Results & Impact', color: 'from-yellow-400 to-orange-400' },
    { id: 'visual', title: 'Design Principles', color: 'from-pink-400 to-purple-400' },
    { id: 'information', title: 'Tools & Technology', color: 'from-cyan-400 to-blue-400' },
    { id: 'learnings', title: 'Key Learnings', color: 'from-red-400 to-pink-400' }
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
    title: "Liffo: Emergency Health Services Platform",
    subtitle: "Comprehensive healthcare platform prioritizing emergency ambulance booking, elite doctors, and home care services, followed by routine consultations and medical supply purchasing",
    category: "Mobile App Design",
    duration: "13 weeks",
    team: "Solo Designer",
    client: "Liffo Health Services",
    role: "Lead Product Designer & UX Researcher",
    tags: ["Mobile Design", "Healthcare UX", "Emergency Services", "User Research", "Figma", "Prototyping"],
    
    overview: "Liffo is a comprehensive healthcare platform prioritizing emergency medical services, followed by doctor consultations and medical product purchases. The platform provides immediate ambulance booking, elite emergency doctors, home care services, routine medical consultations, and integrated medical supply procurement - all designed for intuitive navigation during high-stress emergency situations.",

    personas: [
      {
        name: "Emergency Patient - Sarah Kim",
        role: "Construction Site Manager",
        age: "35",
        goals: ["Immediate ambulance booking during workplace accidents", "Quick access to elite emergency doctors", "Rapid hospital coordination for trauma cases"],
        painPoints: ["Delayed emergency response", "Difficulty finding available emergency services", "Complex emergency booking processes during high-stress situations"],
        techComfort: "Medium",
        description: "Site manager who needs instant access to emergency medical services for workplace incidents, prioritizing speed and reliability during critical situations"
      },
      {
        name: "Chronic Care Patient - Robert Chen",
        role: "Retiree with Diabetes",
        age: "67",
        goals: ["Schedule home care nursing services", "Book regular doctor consultations", "Purchase medical supplies and medications"],
        painPoints: ["Managing multiple healthcare appointments", "Difficulty coordinating home care services", "Tracking medication refills and medical supplies"],
        techComfort: "Low",
        description: "Senior patient requiring comprehensive healthcare management including emergency services, regular medical consultations, and ongoing home care support"
      },
      {
        name: "Family Healthcare Manager - Priya Sharma",
        role: "Working Mother",
        age: "31",
        goals: ["Emergency services for family accidents", "Book routine doctor appointments for children", "Purchase family medical supplies and prescriptions"],
        painPoints: ["Coordinating healthcare for multiple family members", "Finding available doctors quickly", "Managing healthcare expenses and medical purchases"],
        techComfort: "High",
        description: "Tech-savvy mother managing comprehensive healthcare needs for her family, from emergency situations to routine care and medical supply procurement"
      },
      {
        name: "Healthcare Professional - Dr. Alex Patel",
        role: "Family Medicine Physician",
        age: "28",
        goals: ["Coordinate emergency patient transfers", "Manage appointment bookings efficiently", "Recommend medical products to patients"],
        painPoints: ["Inefficient patient referral systems", "Limited emergency service coordination", "Difficulty tracking patient medical supply needs"],
        techComfort: "High",
        description: "Young physician who uses Liffo to coordinate patient care across emergency services, regular consultations, and medical supply recommendations"
      }
    ],

    userJourney: {
      phases: [
        {
          phase: "Emergency Response",
          actions: ["Recognizes medical emergency", "Opens Liffo app", "Books ambulance/emergency transport", "Coordinates with elite emergency doctors", "Arranges immediate hospital services"],
          emotions: ["Panic", "Urgent", "Desperate", "Relieved"],
          touchpoints: ["Emergency button", "Ambulance booking", "Elite doctor access", "Hospital coordination", "Real-time tracking"],
          opportunities: ["One-tap emergency access", "GPS-based ambulance dispatch", "Direct elite doctor consultation", "Automated hospital coordination"]
        },
        {
          phase: "Home Care Services",
          actions: ["Assesses home care needs", "Selects nursing services", "Books physiotherapy/occupational therapy", "Schedules chronic care management", "Arranges post-surgical support"],
          emotions: ["Concerned", "Hopeful", "Reassured", "Supported"],
          touchpoints: ["Home care directory", "Service selection", "Caregiver profiles", "Scheduling interface", "Progress monitoring"],
          opportunities: ["Comprehensive care matching", "Qualified caregiver verification", "Flexible scheduling options", "Integrated care coordination"]
        },
        {
          phase: "Doctor Consultation Booking",
          actions: ["Browses doctor specializations", "Reviews doctor profiles and ratings", "Checks availability", "Books routine appointments", "Manages follow-up consultations"],
          emotions: ["Analytical", "Confident", "Satisfied", "Trusting"],
          touchpoints: ["Doctor discovery", "Specialization filters", "Booking calendar", "Appointment management", "Consultation history"],
          opportunities: ["Smart doctor recommendations", "Real-time availability", "Seamless booking experience", "Integrated health records"]
        },
        {
          phase: "Medical Product Purchase",
          actions: ["Searches for medications/supplies", "Compares prices and options", "Reviews product information", "Places orders", "Tracks delivery and refills"],
          emotions: ["Practical", "Economical", "Convenient", "Secure"],
          touchpoints: ["Product catalog", "Price comparison", "Shopping cart", "Payment gateway", "Delivery tracking"],
          opportunities: ["Prescription integration", "Automated refill reminders", "Bulk purchase discounts", "Fast delivery options"]
        }
      ]
    },
    
    problem: {
      title: "The Challenge",
      description: "Emergency healthcare access is critically fragmented, with patients struggling to coordinate immediate ambulance services, emergency doctors, and hospital care during life-threatening situations. Beyond emergencies, patients face challenges accessing home care services, booking routine consultations, and purchasing medical supplies through disconnected systems.",
      painPoints: [
        "Critical delays in emergency ambulance booking and hospital coordination",
        "Limited access to elite emergency doctors during critical situations", 
        "Fragmented home care services including nursing, physiotherapy, and chronic care",
        "Difficulty coordinating post-surgical and specialized home care support",
        "Complex doctor booking systems with poor availability visibility",
        "Disconnected medical supply purchasing with no prescription integration"
      ]
    },
    
    solution: {
      title: "The Solution",
      description: "Designed a comprehensive mobile-first healthcare platform that prioritizes emergency medical services as the primary feature, followed by integrated doctor booking and medical product purchases. The unified interface ensures immediate access to critical services while maintaining seamless navigation for routine healthcare needs.",
      features: [
        "Priority 1: One-tap emergency ambulance booking with GPS dispatch",
        "Immediate access to elite emergency doctors for critical consultations",
        "Comprehensive home care services: nursing, physiotherapy, chronic care management",
        "Post-surgical care coordination and specialized therapy booking",
        "Priority 2: Streamlined doctor discovery and appointment booking system",
        "Priority 3: Integrated medical supply purchasing with prescription sync"
      ]
    },
    
    process: [
      {
        phase: "Research & Discovery",
        duration: "2 weeks",
        description: "Conducted extensive user research with patients, healthcare providers, and emergency responders to understand pain points and user needs in critical healthcare situations",
        deliverables: ["User interviews", "Competitive analysis", "Journey mapping", "Emergency use case studies"]
      },
      {
        phase: "Design Strategy & Architecture", 
        duration: "2 weeks",
        description: "Developed information architecture and design strategy focused on emergency accessibility, created user personas, and established design principles for high-stress usage",
        deliverables: ["Information architecture", "User personas", "Design system foundation", "Navigation strategy"]
      },
      {
        phase: "UI/UX Design & Prototyping",
        duration: "3 weeks", 
        description: "Created comprehensive mobile interface designs with focus on accessibility, emergency scenarios, and seamless healthcare service integration",
        deliverables: ["High-fidelity designs", "Interactive prototypes", "Design system", "Accessibility guidelines"]
      },
      {
        phase: "Testing & Iteration",
        duration: "1 week",
        description: "Conducted usability testing with healthcare professionals and patients, refined interface based on feedback, and optimized for emergency use cases",
        deliverables: ["Usability test results", "Design iterations", "Final prototypes", "Handoff documentation"]
      }
    ],
    
    keyFeatures: [
      {
        title: "Emergency Ambulance Booking",
        description: "One-tap emergency ambulance dispatch with GPS location sharing, real-time tracking, and immediate hospital coordination for critical medical situations",
        image: Screen11,
        benefits: ["Instant ambulance dispatch", "GPS-based location sharing", "Real-time emergency tracking", "Hospital pre-notification"]
      },
      {
        title: "Elite Emergency Doctor Access",
        description: "Direct access to premium emergency physicians for urgent consultations, trauma care coordination, and critical medical decision support",
        image: Screen20,
        benefits: ["24/7 elite doctor availability", "Urgent consultation access", "Trauma care specialists", "Critical decision support"]
      },
      {
        title: "Comprehensive Home Care Services",
        description: "Complete home healthcare ecosystem including short-term nursing, post-surgical care, chronic disease management, physiotherapy, and occupational therapy",
        image: Screen14,
        benefits: ["Professional nursing services", "Post-surgical home care", "Chronic disease management", "Specialized therapy services"]
      },
      {
        title: "Doctor Booking & Medical Supplies",
        description: "Integrated platform for routine doctor appointments, specialist consultations, and medical product purchases with prescription synchronization",
        image: Screen27,
        benefits: ["Streamlined doctor booking", "Specialist consultations", "Medical supply integration", "Prescription sync"]
      }
    ],
    
    designShowcase: [
      {
        category: "Onboarding Experience",
        description: "Simplified 3-step onboarding focused on emergency preparedness and home care services",
        images: [Screen1, Screen2, Screen3]
      },
      {
        category: "Core Dashboard",
        description: "Clean, accessible dashboard prioritizing emergency access and health overview with featured services",
        images: [Screen4, Screen5]
      },
      {
        category: "Healthcare Services Directory", 
        description: "Comprehensive service categorization including lab tests, pharmacy, and doctor consultations",
        images: [Screen6, Screen7, Screen8, Screen9]
      },
      {
        category: "Emergency Services & Home Care",
        description: "Priority 1: Emergency ambulance booking, symptom checker, hospital coordination, and comprehensive home care services including nursing, physiotherapy, and chronic care management",
        images: [Screen10, Screen11, Screen12, Screen13, Screen14]
      },
      {
        category: "Hospital & Healthcare Facilities",
        description: "Detailed hospital information with comprehensive facility details and service offerings",
        images: [Screen15, Screen16, Screen17, Screen18, Screen19]
      },
      {
        category: "Doctor Discovery & Consultation Booking",
        description: "Priority 2: Elite doctor profiles, specialization categories, comprehensive doctor listings, and streamlined appointment booking system",
        images: [Screen20, Screen21, Screen22]
      },
      {
        category: "Search & Discovery",
        description: "Advanced search functionality for nursing services, specialists, and healthcare providers",
        images: [Screen23, Screen24]
      },
      {
        category: "Profile Management",
        description: "Complete user profile system with personal information and emergency contact management",
        images: [Screen25, Screen26]
      },
      {
        category: "Appointments & Medical Supply Integration",
        description: "Priority 3: Appointment scheduling, digital prescription management, lab results tracking, and integrated medical product purchasing with automated refill systems",
        images: [Screen27, Screen28, Screen29]
      },
      {
        category: "Health Data & History",
        description: "Physical health tracking, detailed health records, family medical history, and health card system",
        images: [Screen30, Screen31, Screen32, Screen33, Screen34]
      }
    ],
    
    results: [
      { metric: "Emergency Ambulance Dispatch", value: "65%", description: "Faster ambulance booking and dispatch through one-tap emergency access" },
      { metric: "Home Care Service Coordination", value: "78%", description: "Improvement in nursing, physiotherapy, and chronic care scheduling" },
      { metric: "Elite Doctor Access", value: "4.9/5", description: "User satisfaction rating for emergency doctor consultations" },
      { metric: "Routine Appointment Efficiency", value: "82%", description: "Faster doctor booking and consultation scheduling" },
      { metric: "Medical Supply Integration", value: "91%", description: "Success rate for prescription-linked product purchases" },
      { metric: "Platform Adoption", value: "203%", description: "Increase in emergency services and home care provider registration" }
    ],
    
    designPrinciples: [
      {
        principle: "Emergency-First Architecture",
        description: "One-tap access to ambulance booking and elite emergency doctors takes absolute priority in every interface design decision",
        icon: Shield
      },
      {
        principle: "Service Hierarchy Clarity",
        description: "Clear visual distinction between Priority 1 (Emergency & Home Care), Priority 2 (Doctor Booking), and Priority 3 (Medical Supplies)",
        icon: Target
      },
      {
        principle: "High-Stress Usability",
        description: "Interface design optimized for users in critical situations with large touch targets and minimal cognitive load",
        icon: Heart
      },
      {
        principle: "Comprehensive Care Integration",
        description: "Seamless flow from emergency response through home care services to routine healthcare management",
        icon: Smartphone
      }
    ],
    
    techSpecs: [
      { name: "Figma", category: "Design Tool" },
      { name: "Adobe Creative Suite", category: "Design Software" },
      { name: "Principle", category: "Prototyping" },
      { name: "Maze", category: "User Testing" },
      { name: "Miro", category: "Collaboration" }
    ],
    
    learnings: [
      "Healthcare design requires extensive consideration for high-stress usage scenarios and emergency accessibility",
      "User research with both patients and healthcare providers is crucial for comprehensive platform design",
      "Mobile-first approach is essential for healthcare applications due to usage patterns during emergencies",
      "Design systems must prioritize accessibility and clarity over aesthetic complexity in healthcare contexts",
      "Iterative testing with real healthcare scenarios provides invaluable insights for interface optimization"
    ]
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative grain-texture liffo-case-study">
      {/* Case Study Navigation */}
      <CaseStudyNavigation sections={navigationSections} />
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-[9999]"
        style={{ width: progressWidth }}
      />
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-intense grain-texture border-b border-white/10 shadow-2xl shadow-red-500/20' 
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
              <Badge variant="outline" className="text-sm px-4 py-2 border-red-500/50 bg-red-500/10">
                {caseStudyData.category}
              </Badge>
              <h1 className="space-y-2">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white albert-sans-medium leading-tight">Liffo</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent albert-sans-medium leading-tight">Emergency Health<br className="hidden sm:inline" /> Platform</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed jost-secondary">
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
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>
      {/* 1. Overview & Problem */}
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
              OVERVIEW & PROBLEM
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Understanding the healthcare challenge and defining the design strategy
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
              <Card className="p-8 glass-card grain-texture border-red-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-red-400 albert-sans-medium">PROJECT DETAILS</h3>
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
              <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-orange-400 albert-sans-medium">OVERVIEW</h3>
                <p className="text-white/85 leading-relaxed text-lg jost-secondary flex-grow">
                  {caseStudyData.overview}
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="p-6 sm:p-8 lg:p-12 glass-card grain-texture border-red-500/30">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 text-center text-red-400 albert-sans-medium">THE HEALTHCARE CHALLENGE</h3>
              <p className="text-xl text-white/90 leading-relaxed mb-8 jost-secondary">
                {caseStudyData.problem.description}
              </p>
              
              <h4 className="text-2xl font-extrabold mb-6 text-red-400 albert-sans-medium">KEY PAIN POINTS</h4>
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
      {/* 2. Personas */}
      <section id="personas" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              USER PERSONAS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Four key user groups driving healthcare platform design decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {caseStudyData.personas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 lg:p-8 glass-card grain-texture border-blue-500/30 h-full">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                        <User className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-extrabold text-blue-300 albert-sans-medium leading-tight">{persona.name}</h3>
                        <p className="text-sm sm:text-base text-white/70 jost-secondary">{persona.role}, {persona.age}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/85 leading-relaxed jost-secondary">{persona.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-base font-bold text-blue-400 mb-3 jost-secondary">GOALS</h4>
                        <ul className="space-y-2">
                          {persona.goals.map((goal, idx) => (
                            <li key={idx} className="text-base text-white/80 flex items-start jost-secondary">
                              <Target className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                              {goal}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-bold text-red-400 mb-3 jost-secondary">PAIN POINTS</h4>
                        <ul className="space-y-2">
                          {persona.painPoints.map((pain, idx) => (
                            <li key={idx} className="text-base text-white/80 flex items-start jost-secondary">
                              <AlertCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                              {pain}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-sm text-white/70 jost-secondary">Tech Comfort</span>
                        <span className={`text-sm font-semibold px-3 py-1.5 rounded ${
                          persona.techComfort === 'High' ? 'bg-green-500/20 text-green-400' :
                          persona.techComfort === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {persona.techComfort}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 3. User Journey */}
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
              USER JOURNEY
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Mapping the complete healthcare experience from concern to care
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudyData.userJourney.phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-purple-500/30">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-extrabold text-purple-300 albert-sans-medium">{phase.phase}</h3>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-base font-bold text-white/90 mb-3 jost-secondary">ACTIONS</h4>
                        <ul className="space-y-2">
                          {phase.actions.map((action, idx) => (
                            <li key={idx} className="text-base text-white/80 flex items-start jost-secondary">
                              <ArrowRight className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-bold text-white/90 mb-3 jost-secondary">EMOTIONS</h4>
                        <ul className="space-y-2">
                          {phase.emotions.map((emotion, idx) => (
                            <li key={idx} className="text-base text-white/80 flex items-start jost-secondary">
                              <Heart className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0 mt-0.5" />
                              {emotion}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-base font-bold text-white/90 mb-3 jost-secondary">OPPORTUNITIES</h4>
                        <ul className="space-y-2">
                          {phase.opportunities.map((opportunity, idx) => (
                            <li key={idx} className="text-base text-white/80 flex items-start jost-secondary">
                              <Lightbulb className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                              {opportunity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 4. Solution & Process */}
      <section id="approach" className="py-20 relative">
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
              THE DESIGN SOLUTION
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Comprehensive mobile platform addressing emergency healthcare needs
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
              
              <h3 className="text-2xl font-extrabold mb-6 text-green-400 albert-sans-medium">SOLUTION FEATURES</h3>
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
          
          {/* Design Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-purple-300 albert-sans-medium">
              DESIGN PROCESS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudyData.process.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 glass-card grain-texture border-purple-500/30 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-purple-400 font-bold jost-secondary">{index + 1}</span>
                      </div>
                      <Badge variant="outline" className="text-sm px-3 py-1.5 border-purple-400/50 text-purple-400 jost-secondary">
                        {phase.duration}
                      </Badge>
                    </div>
                    
                    <h4 className="text-xl font-extrabold mb-4 text-purple-300 albert-sans-medium">
                      {phase.phase}
                    </h4>
                    
                    <p className="text-white/85 leading-relaxed mb-6 text-lg jost-secondary">
                      {phase.description}
                    </p>
                    
                    <div>
                      <h5 className="text-base font-bold text-purple-400 mb-4 jost-secondary">DELIVERABLES</h5>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-base text-white/80 flex items-center jost-secondary">
                            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* 5. Key Features */}
      <section id="wireframes" className="py-20 relative">
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
              KEY FEATURES
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Core functionality designed for emergency healthcare scenarios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full">
                  <div className="mb-6">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-64 object-contain bg-white/5 border border-white/10"
                    />
                  </div>
                  
                  <h3 className="text-xl font-extrabold mb-4 text-orange-300 albert-sans-medium">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/85 leading-relaxed mb-6 jost-secondary">
                    {feature.description}
                  </p>
                  
                  <div>
                    <h4 className="text-base font-bold text-orange-400 mb-3 jost-secondary">KEY BENEFITS</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-base text-white/80 flex items-start jost-secondary">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0 mt-0.5" />
                          {benefit}
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
      {/* 6. Design Showcase */}
      <section id="screens" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-900 to-slate-950" />
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
              DESIGN SHOWCASE
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Complete visual documentation of all 34 interface designs - organized by user journey and functionality
            </p>
          </motion.div>

          {/* Categorized Design Showcase */}
          <div className="space-y-16 mb-16">
            {caseStudyData.designShowcase.map((showcase, index) => (
              <motion.div
                key={showcase.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 glass-card grain-texture border-blue-500/30">
                  <h3 className="text-2xl font-extrabold mb-4 text-blue-400 albert-sans-medium">
                    {showcase.category}
                  </h3>
                  <p className="text-white/85 mb-8 jost-secondary">
                    {showcase.description}
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {showcase.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden bg-white/5 border border-white/20 aspect-[9/16]"
                      >
                        <img 
                          src={image} 
                          alt={`${showcase.category} Screen ${imgIndex + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Complete Interface Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass-card grain-texture border-purple-500/30">
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-400 albert-sans-medium text-center">
                COMPLETE INTERFACE GALLERY
              </h3>
              <p className="text-white/85 mb-8 text-center jost-secondary">
                Comprehensive view of all designed interfaces across the healthcare platform
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7, Screen8,
                  Screen9, Screen10, Screen11, Screen12, Screen13, Screen14, Screen15, Screen16,
                  Screen17, Screen18, Screen19, Screen20, Screen21, Screen22, Screen23, Screen24,
                  Screen25, Screen26, Screen27, Screen28, Screen29, Screen30, Screen31, Screen32,
                  Screen33, Screen34
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-white/5 border border-white/20 aspect-[9/16]"
                  >
                    <img 
                      src={image} 
                      alt={`Screen ${index + 1}: Liffo Healthcare Interface`}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </Card>
            
            {/* Continue Reading Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center space-x-3 text-purple-400/80 text-base jost-secondary">
                <div className="w-12 h-px bg-purple-400/60"></div>
                <span>Continue reading for impact metrics, tech insights & learnings</span>
                <div className="w-12 h-px bg-purple-400/60"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* 7. Results & Impact */}
      <section id="testing" className="py-20 relative">
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
              RESULTS & IMPACT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Measurable improvements in healthcare accessibility and user experience
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
      {/* 8. Design Principles */}
      <section id="visual" className="py-20 relative">
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
              DESIGN PRINCIPLES
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Core principles guiding the healthcare platform design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.designPrinciples.map((principle, index) => {
              const { icon: IconComponent } = principle;
              return (
                <motion.div
                  key={principle.principle}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 glass-card grain-texture border-cyan-500/30 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-cyan-300 mb-3 albert-sans-medium">
                          {principle.principle}
                        </h3>
                        <p className="text-white/85 leading-relaxed jost-secondary">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* 9. Tools & Technology */}
      <section id="information" className="py-20 relative">
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
              TOOLS & TECHNOLOGY
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Design and prototyping tools used for optimal workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {caseStudyData.techSpecs.map((tech, index) => (
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
                    <h3 className="font-bold text-white mb-2 jost-secondary text-base">
                      {tech.name}
                    </h3>
                  </div>
                  <p className="text-sm text-white/70 jost-secondary">
                    {tech.category}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 10. Key Learnings */}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">
              KEY LEARNINGS
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Insights gained from designing for emergency healthcare scenarios
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
      {/* 11. Call to Action */}
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
            <h2 className="text-4xl md:text-5xl font-extrabold albert-sans-medium text-white">
              READY TO DISCUSS YOUR PROJECT?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in healthcare design, emergency UX, or mobile-first product design solutions?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 border-0 grain-texture">
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
              
              {/* Logo Circle */}
              <div className="flex-shrink-0">
                <Link href="/#hero">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={LogoImage} 
                      alt="Logo" 
                      className="w-10 h-10 object-contain"
                    />
                  </motion.div>
                </Link>
              </div>

              {/* LinkedIn Circle */}
              <div className="flex-shrink-0">
                <a 
                  href="https://www.linkedin.com/in/karan-gadhave/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer group"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Linkedin className="w-9 h-9 text-white group-hover:text-blue-300 transition-colors duration-300" />
                  </motion.div>
                </a>
              </div>

            </div>
          </div>
          
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          
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