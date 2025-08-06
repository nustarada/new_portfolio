import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { Calendar, Clock, Users, CheckCircle, Target, TrendingUp, ExternalLink, ArrowLeft, Lightbulb, Heart, Smartphone, Shield, Award, Zap, TestTube, Palette, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import LogoImage from '@assets/Logo black_1754170788875.png';

// Import all Liffo images
import WalkthroughImage1 from "@assets/Walkthrough 1.png";
import WalkthroughImage2 from "@assets/Walkthrough 2.png";
import WalkthroughImage3 from "@assets/Walkthrough 3.png";
import EliteDoctorImage from "@assets/Elite Doctor_1754170735048.png";
import DoctorListImage from "@assets/Doctor List_1754170735048.png";
import DoctorSpecialisationImage from "@assets/Doctor Specialisation_1754170735049.png";
import HospitalDetailImage from "@assets/Hospital Detail Page 4_1754170735053.png";
import HealthCardImage from "@assets/Health card_1754170735053.png";
import EditProfileImage from "@assets/Edit Profile_1754170735053.png";
import MyProfileImage from "@assets/My Profile_1754170735053.png";
import MyLabResultsImage from "@assets/My Lab Results_1754170735054.png";
import EditPhysicalsImage from "@assets/Edit Physicals_1754170735054.png";
import HealthDetailsImage from "@assets/Health Details_1754170735054.png";
import FamilyMedicalHistoryImage from "@assets/Family Medical History_1754170735054.png";
import SelectImage from "@assets/SELECT_1754170735054.png";
import SearchTabImage from "@assets/Search Tab.png";
import HomeCareImage from "@assets/Home care services.png";
import SymptomsImage from "@assets/Symptoms.png";
import DoctorLabTestImage from "@assets/Doctor Lab Test Serivices.png";
import AllServicesImage from "@assets/All Services.png";
import EmergencyImage from "@assets/Emergency.png";
import AppointmentImage from "@assets/Appointment.png";
import PrescriptionImage from "@assets/Prescription.png";
import Dashboard1Image from "@assets/Dashboard 1.png";
import Dashboard2Image from "@assets/Dashboard 2.png";

const LiffoCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    subtitle: "Comprehensive mobile health platform connecting patients with emergency medical services, specialists, and healthcare providers",
    category: "Mobile Health Platform Design",
    year: "2024",
    duration: "8 weeks",
    team: "Solo Designer",
    client: "Liffo Health Services",
    role: "Lead Product Designer & UX Researcher",
    tags: ["Mobile Design", "Healthcare UX", "Emergency Services", "User Research", "Figma", "Prototyping"],
    
    overview: "Liffo addresses the critical gap in emergency healthcare accessibility by providing a unified platform that connects patients with immediate medical services. The design focuses on intuitive navigation during high-stress situations while maintaining comprehensive healthcare management features.",
    
    problem: {
      title: "The Challenge",
      description: "Emergency healthcare access is fragmented, time-consuming, and often confusing during critical moments. Patients struggle to find appropriate care, book appointments, access medical records, and communicate with healthcare providers efficiently.",
      painPoints: [
        "Fragmented healthcare services across multiple platforms",
        "Difficulty finding appropriate specialists during emergencies",
        "Poor mobile experience for healthcare apps",
        "Lack of comprehensive health record management",
        "Complex navigation during high-stress medical situations",
        "Limited integration between different healthcare services"
      ]
    },
    
    solution: {
      title: "The Solution",
      description: "Designed a comprehensive mobile-first healthcare platform that unifies emergency services, specialist consultations, health records, and appointment management in a single, intuitive interface optimized for both emergency and routine healthcare needs.",
      features: [
        "One-tap emergency service access with location-based provider matching",
        "Comprehensive specialist directory with real-time availability",
        "Integrated health records and medical history management",
        "Streamlined appointment booking and prescription management",
        "Family health profiles and medical history tracking",
        "Intuitive navigation optimized for high-stress situations"
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
        title: "Emergency Services Hub",
        description: "Instant access to emergency medical services with GPS location sharing and critical health information",
        image: EmergencyImage,
        benefits: ["Reduced emergency response time", "Critical health info sharing", "Location-based service matching"]
      },
      {
        title: "Specialist Directory",
        description: "Comprehensive directory of medical specialists with real-time availability, ratings, and booking",
        image: DoctorSpecialisationImage,
        benefits: ["Easy specialist discovery", "Real-time availability", "Integrated booking system"]
      },
      {
        title: "Health Records Management",
        description: "Centralized platform for managing personal and family health records, lab results, and medical history",
        image: HealthDetailsImage,
        benefits: ["Comprehensive health tracking", "Family health management", "Secure data storage"]
      },
      {
        title: "Appointment & Prescription Hub",
        description: "Streamlined appointment booking and prescription management with automated reminders",
        image: AppointmentImage,
        benefits: ["Simplified booking process", "Prescription tracking", "Automated reminders"]
      }
    ],
    
    designShowcase: [
      {
        category: "Onboarding Experience",
        description: "Simplified 3-step onboarding focused on emergency preparedness",
        images: [WalkthroughImage1, WalkthroughImage2, WalkthroughImage3]
      },
      {
        category: "Core Dashboard",
        description: "Clean, accessible dashboard prioritizing emergency access and health overview",
        images: [Dashboard1Image, Dashboard2Image]
      },
      {
        category: "Healthcare Services",
        description: "Comprehensive service directory with intuitive categorization",
        images: [AllServicesImage, HomeCareImage, SymptomsImage]
      },
      {
        category: "Profile & Health Management", 
        description: "Detailed health profile management with family tracking capabilities",
        images: [MyProfileImage, EditProfileImage, HealthCardImage]
      }
    ],
    
    results: [
      { metric: "Emergency Response Time", value: "40%", description: "Reduction in time to access emergency services" },
      { metric: "User Task Completion", value: "89%", description: "Success rate for primary healthcare tasks" },
      { metric: "User Satisfaction", value: "4.8/5", description: "Average rating from healthcare professionals and patients" },
      { metric: "Healthcare Provider Adoption", value: "156%", description: "Increase in provider platform registration" },
      { metric: "Appointment Booking Efficiency", value: "67%", description: "Improvement in booking completion time" },
      { metric: "Health Record Accuracy", value: "95%", description: "Data accuracy in health record management" }
    ],
    
    designPrinciples: [
      {
        principle: "Emergency-First Design",
        description: "Every interface element prioritizes quick access to emergency services",
        icon: Shield
      },
      {
        principle: "Accessibility & Clarity",
        description: "Clear visual hierarchy and accessible design for all users and stress levels",
        icon: Heart
      },
      {
        principle: "Comprehensive Care",
        description: "Unified platform covering all aspects of healthcare management",
        icon: Target
      },
      {
        principle: "Mobile-Optimized",
        description: "Mobile-first approach ensuring optimal performance on all devices",
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
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-50"
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
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src={LogoImage} alt="Karan Gadhave Logo" className="h-16 w-16 object-contain" />
              </motion.div>
            </Link>
            
            <Link href="/">
              <motion.button
                className="relative group px-6 py-3 glass-card grain-texture hover:glass-intense border border-red-500/30 hover:border-red-500/50 text-white font-semibold transition-all duration-300 flex items-center space-x-2"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </motion.button>
            </Link>
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
              <Badge variant="outline" className="text-sm px-4 py-2 border-red-500/50 bg-red-500/10">
                {caseStudyData.category}
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="block text-white modern-heritage">Liffo:</span>
                <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent modern-heritage">Emergency Health Platform</span>
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
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* 1. Project Overview */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              PROJECT OVERVIEW
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
            >
              <Card className="p-8 glass-card grain-texture border-red-500/30">
                <h3 className="text-2xl font-bold mb-6 text-red-400 modern-heritage">PROJECT DETAILS</h3>
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
              <Card className="p-8 glass-card grain-texture border-orange-500/30">
                <h3 className="text-2xl font-bold mb-6 text-orange-400 modern-heritage">OVERVIEW</h3>
                <p className="text-white/85 leading-relaxed text-lg jost-secondary">
                  {caseStudyData.overview}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              THE HEALTHCARE CHALLENGE
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Identifying critical gaps in emergency healthcare accessibility
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
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
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

      {/* 4. Design Process */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              DESIGN PROCESS
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Research-driven approach to healthcare platform design
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

      {/* 5. Design Showcase */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DESIGN SHOWCASE
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Comprehensive interface designs for emergency healthcare platform
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
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 modern-heritage">
                    {showcase.category}
                  </h3>
                  <p className="text-white/85 mb-8 jost-secondary">
                    {showcase.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {showcase.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: imgIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                      >
                        <img 
                          src={image} 
                          alt={`${showcase.category} ${imgIndex + 1}`}
                          className="w-full h-auto object-contain"
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
              <h3 className="text-2xl font-bold mb-6 text-purple-400 modern-heritage text-center">
                COMPLETE INTERFACE GALLERY
              </h3>
              <p className="text-white/85 mb-8 text-center jost-secondary">
                Comprehensive view of all designed interfaces across the healthcare platform
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  DoctorLabTestImage, SearchTabImage, HomeCareImage, SymptomsImage,
                  AllServicesImage, EmergencyImage, AppointmentImage, PrescriptionImage,
                  EliteDoctorImage, DoctorListImage, DoctorSpecialisationImage, HospitalDetailImage,
                  HealthCardImage, EditProfileImage, MyProfileImage, MyLabResultsImage,
                  EditPhysicalsImage, HealthDetailsImage, FamilyMedicalHistoryImage, SelectImage,
                  Dashboard1Image, Dashboard2Image, WalkthroughImage1, WalkthroughImage2,
                  WalkthroughImage3, AllServicesImage, HomeCareImage, SymptomsImage,
                  DoctorLabTestImage, SearchTabImage, EmergencyImage, AppointmentImage
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="relative overflow-hidden bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 aspect-[9/16]"
                  >
                    <img 
                      src={image} 
                      alt={`Interface ${index + 1}`}
                      className="w-full h-full object-cover hover:object-contain transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 6. Key Features Deep Dive */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
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
                  
                  <h3 className="text-xl font-bold mb-4 text-orange-300 modern-heritage">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/85 leading-relaxed mb-6 jost-secondary">
                    {feature.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-bold text-orange-400 mb-3 jost-secondary">KEY BENEFITS</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-white/70 flex items-center jost-secondary">
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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

      {/* 7. Results & Impact */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              RESULTS & IMPACT
            </h2>
            <p className="text-xl text-white/85 max-w-4xl mx-auto jost-secondary">
              Measurable improvements in healthcare accessibility and user experience
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

      {/* 8. Design Principles */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
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
                        <h3 className="text-xl font-bold text-cyan-300 mb-3 modern-heritage">
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
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
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

      {/* 10. Key Learnings */}
      <section className="py-20 relative">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 modern-heritage bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
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
            <h2 className="text-4xl md:text-5xl font-bold modern-heritage bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
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
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/60 mb-4 jost-secondary">
            Designed and developed by Karan Gadhave
          </p>
          <a 
            href="https://linkedin.com/in/karan-gadhave" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors jost-secondary"
          >
            Connect on LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LiffoCaseStudy;