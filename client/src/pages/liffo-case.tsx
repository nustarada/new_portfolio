import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { Clock, Users, CheckCircle, TrendingUp, ExternalLink, ArrowLeft, Lightbulb, ArrowRight, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CaseStudyNavigation } from '@/components/case-study-navigation';
import LogoImage from '@assets/Logo white_1754674219191.png';

// Import selected screens for focused showcase (6-10 best examples)
import Screen4 from "@assets/4. Dashboard 1_1754469198505.png";
import Screen11 from "@assets/11. Emergency_1754469198506.png";
import Screen12 from "@assets/12. Emergency Expanded_1754469198507.png";
import Screen14 from "@assets/14. Home care services_1754469198507.png";
import Screen20 from "@assets/20. Elite Doctor_1754469198508.png";
import Screen22 from "@assets/22. Doctor List_1754469216927.png";
import Screen25 from "@assets/25. My Profile_1754469216929.png";
import Screen27 from "@assets/27. Appointment_1754469216929.png";

const LiffoCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Simplified 4-section navigation for senior portfolio
  const navigationSections = [
    { id: 'snapshot', title: 'Project Snapshot', color: 'from-red-400 to-orange-400' },
    { id: 'thinking', title: 'Design Thinking', color: 'from-purple-400 to-blue-400' },
    { id: 'solution', title: 'Solution & Design', color: 'from-blue-400 to-cyan-400' },
    { id: 'impact', title: 'Impact & Learnings', color: 'from-green-400 to-teal-400' }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Key Insights data - Insight → Design Decision → Outcome format
  const keyInsights = [
    {
      insight: "Emergency situations cause extreme cognitive load, making complex interfaces unusable",
      decision: "One-tap emergency access with GPS auto-detection and minimal decision points",
      outcome: "65% faster ambulance dispatch time compared to traditional booking flows"
    },
    {
      insight: "Users manage multiple healthcare needs but navigate fragmented services separately",
      decision: "Unified platform with clear service hierarchy: Emergency → Home Care → Consultations → Supplies",
      outcome: "78% improvement in service coordination and reduced platform switching"
    },
    {
      insight: "Trust is critical in healthcare - users need transparency about providers and outcomes",
      decision: "Elite doctor profiles with credentials, ratings, and real-time availability indicators",
      outcome: "4.9/5 user satisfaction rating for doctor consultations"
    },
    {
      insight: "Chronic care patients require ongoing support beyond single appointments",
      decision: "Integrated home care services with nursing, physiotherapy, and prescription management",
      outcome: "91% prescription-linked purchase completion rate"
    }
  ];

  // Curated screens with captions explaining problems solved
  const designShowcase = [
    {
      image: Screen4,
      title: "Emergency-First Dashboard",
      caption: "Prominent emergency access button eliminates navigation friction during crisis situations"
    },
    {
      image: Screen11,
      title: "One-Tap Emergency Access",
      caption: "GPS auto-detection and streamlined booking reduces ambulance dispatch time by 65%"
    },
    {
      image: Screen12,
      title: "Emergency Service Selection",
      caption: "Clear categorization of emergency types enables faster, more accurate service matching"
    },
    {
      image: Screen14,
      title: "Comprehensive Home Care",
      caption: "Unified view of nursing, physiotherapy, and chronic care services reduces care fragmentation"
    },
    {
      image: Screen20,
      title: "Elite Doctor Profiles",
      caption: "Transparent credentials and real-time availability builds trust and reduces decision anxiety"
    },
    {
      image: Screen22,
      title: "Doctor Discovery",
      caption: "Filtered search by specialization and availability enables informed healthcare decisions"
    },
    {
      image: Screen27,
      title: "Appointment Management",
      caption: "Unified appointment view with prescription integration reduces care coordination burden"
    },
    {
      image: Screen25,
      title: "Health Profile Hub",
      caption: "Centralized health data enables personalized care recommendations and faster consultations"
    }
  ];

  // Merged results and learnings
  const impactData = [
    { metric: "65%", label: "Faster Emergency Dispatch", description: "One-tap booking with GPS integration" },
    { metric: "78%", label: "Better Care Coordination", description: "Unified platform replacing fragmented services" },
    { metric: "4.9/5", label: "Doctor Satisfaction", description: "Trust through transparent provider profiles" },
    { metric: "91%", label: "Prescription Integration", description: "Seamless medical supply purchasing" }
  ];

  const keyLearnings = [
    "Emergency UX requires eliminating every unnecessary decision point - cognitive load is the enemy",
    "Healthcare platforms succeed when they unify fragmented services under clear hierarchies",
    "Trust in healthcare is built through transparency, not marketing - show real credentials and outcomes",
    "Mobile-first isn't optional for healthcare - users need access during unpredictable moments"
  ];

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

      {/* ============================================ */}
      {/* SECTION 1: PROJECT SNAPSHOT */}
      {/* ============================================ */}
      <section id="snapshot" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-orange-950/20" />
          <div className="absolute inset-0 grain-texture opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Project Metadata - Compact */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-sm px-4 py-2 border-red-500/50 bg-red-500/10">
                Mobile App Design
              </Badge>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                13 weeks
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Solo Designer
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="space-y-2">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white albert-sans-medium leading-tight">Liffo</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent albert-sans-medium leading-tight">Emergency Health Platform</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed jost-secondary">
                Designed a mobile-first healthcare platform prioritizing emergency ambulance booking and elite doctors, with integrated home care services and medical supply purchasing.
              </p>
            </div>

            {/* Role & Scope - Compact */}
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-xs">Lead Product Designer</Badge>
              <Badge variant="secondary" className="text-xs">UX Research</Badge>
              <Badge variant="secondary" className="text-xs">Mobile Design</Badge>
              <Badge variant="secondary" className="text-xs">Healthcare UX</Badge>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: DESIGN THINKING & KEY DECISIONS */}
      {/* ============================================ */}
      <section id="thinking" className="py-20 relative">
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
              DESIGN THINKING & KEY DECISIONS
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Research insights that directly shaped design decisions
            </p>
          </motion.div>

          <div className="space-y-6">
            {keyInsights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 sm:p-8 glass-card grain-texture border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Insight */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider jost-secondary">
                        <Lightbulb className="w-4 h-4" />
                        Insight
                      </div>
                      <p className="text-white/90 leading-relaxed jost-secondary">{item.insight}</p>
                    </div>
                    
                    {/* Design Decision */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-wider jost-secondary">
                        <ArrowRight className="w-4 h-4" />
                        Design Decision
                      </div>
                      <p className="text-white/90 leading-relaxed jost-secondary">{item.decision}</p>
                    </div>
                    
                    {/* Outcome */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-400 text-sm font-semibold uppercase tracking-wider jost-secondary">
                        <TrendingUp className="w-4 h-4" />
                        Outcome
                      </div>
                      <p className="text-green-300 font-semibold leading-relaxed jost-secondary">{item.outcome}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: SOLUTION & FINAL DESIGN */}
      {/* ============================================ */}
      <section id="solution" className="py-20 relative">
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
              SOLUTION & FINAL DESIGN
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Key screens demonstrating design decisions in action
            </p>
          </motion.div>

          {/* Curated Design Showcase - 8 screens with captions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designShowcase.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card grain-texture border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-[9/16] bg-white/5 overflow-hidden">
                    <img 
                      src={screen.image} 
                      alt={screen.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-blue-300 albert-sans-medium">{screen.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed jost-secondary">{screen.caption}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: IMPACT & LEARNINGS */}
      {/* ============================================ */}
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
              IMPACT & LEARNINGS
            </h2>
            <p className="text-xl text-white/85 max-w-3xl mx-auto jost-secondary">
              Measurable outcomes and key takeaways
            </p>
          </motion.div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-4 sm:p-6 text-center glass-card grain-texture border-green-500/30 h-full">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-400 albert-sans-medium mb-2">
                    {item.metric}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 jost-secondary">{item.label}</h3>
                  <p className="text-xs text-white/60 jost-secondary">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Learnings */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 sm:p-10 glass-card grain-texture border-yellow-500/30">
              <h3 className="text-xl font-extrabold mb-6 text-yellow-400 albert-sans-medium text-center">KEY LEARNINGS</h3>
              <div className="space-y-4">
                {keyLearnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/85 leading-relaxed jost-secondary">{learning}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Closing Statement */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-lg text-white/90 italic jost-secondary">
                  "This project reinforced that great healthcare UX isn't about features—it's about removing friction when people need help the most."
                </p>
              </div>
            </Card>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-extrabold albert-sans-medium text-white">
              READY TO DISCUSS YOUR PROJECT?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in healthcare design, emergency UX, or mobile-first product design?
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
              <div className="flex-shrink-0">
                <Link href="/#hero">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-violet-600/30 to-indigo-600/30 rounded-full border-2 border-white/30 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={LogoImage} alt="Logo" className="w-10 h-10 object-contain" />
                  </motion.div>
                </Link>
              </div>

              <div className="flex-shrink-0">
                <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer">
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
