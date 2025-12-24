import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import {
  Clock,
  Users,
  CheckCircle,
  TrendingUp,
  ExternalLink,
  ArrowLeft,
  Lightbulb,
  Linkedin,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyNavigation } from "@/components/case-study-navigation";
import LogoImage from "@assets/Logo white_1754674219191.png";

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
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationSections = [
    { id: "snapshot", title: "Project Snapshot", color: "red" },
    { id: "thinking", title: "Design Thinking", color: "purple" },
    { id: "solution", title: "Solution & Design", color: "blue" },
    { id: "impact", title: "Impact & Learnings", color: "green" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyInsights = [
    {
      insight:
        "Emergency situations cause extreme cognitive load, making complex interfaces unusable",
      decision:
        "One-tap emergency access with GPS auto-detection and minimal decision points",
      outcome: "65% faster ambulance dispatch time",
    },
    {
      insight:
        "Users manage multiple healthcare needs across fragmented platforms",
      decision:
        "Unified service hierarchy: Emergency → Home Care → Consultations → Supplies",
      outcome: "78% improvement in care coordination",
    },
    {
      insight: "Trust is critical in healthcare decision-making",
      decision:
        "Transparent doctor profiles with credentials and real-time availability",
      outcome: "4.9/5 doctor consultation satisfaction",
    },
    {
      insight: "Chronic care extends beyond single appointments",
      decision: "Integrated home care, prescriptions, and follow-ups",
      outcome: "91% prescription-linked purchase success",
    },
  ];

  const designShowcase = [
    {
      image: Screen4,
      title: "Emergency-First Dashboard",
      caption:
        "Emergency CTA remains persistently visible to reduce cognitive load during crises",
    },
    {
      image: Screen11,
      title: "One-Tap Emergency Access",
      caption:
        "GPS-based booking minimizes steps during high-stress situations",
    },
    {
      image: Screen12,
      title: "Emergency Service Selection",
      caption:
        "Clear categorization enables faster, more accurate response matching",
    },
    {
      image: Screen14,
      title: "Home Care Services",
      caption:
        "Unified access to nursing, physiotherapy, and chronic care reduces fragmentation",
    },
    {
      image: Screen20,
      title: "Elite Doctor Profiles",
      caption: "Credentials and availability build trust and confidence",
    },
    {
      image: Screen22,
      title: "Doctor Discovery",
      caption: "Filters help users make informed healthcare choices quickly",
    },
    {
      image: Screen27,
      title: "Appointment Management",
      caption: "Integrated prescriptions simplify ongoing care management",
    },
    {
      image: Screen25,
      title: "Health Profile Hub",
      caption: "Centralized health data enables personalized care",
    },
  ];

  const impactData = [
    { metric: "65%", label: "Faster Emergency Dispatch" },
    { metric: "78%", label: "Improved Care Coordination" },
    { metric: "4.9/5", label: "Doctor Satisfaction" },
    { metric: "91%", label: "Prescription Integration Success" },
  ];

  const keyLearnings = [
    "Emergency UX demands ruthless elimination of unnecessary decisions",
    "Healthcare platforms succeed by unifying fragmented services",
    "Trust is built through transparency, not marketing",
    "Mobile-first design is non-negotiable in healthcare",
  ];

  return (
    <div ref={containerRef} className="liffo-case-study min-h-screen bg-[#0a0a0a]">
      <CaseStudyNavigation sections={navigationSections} />

      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-[9999]"
        style={{ width: progressWidth }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-intense" : "glass-card"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <img src={LogoImage} className="h-10 w-10 sm:h-12 sm:w-12 cursor-pointer" alt="Logo" />
          </Link>
          <Link href="/">
            <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors jost-secondary">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </Link>
        </div>
      </motion.nav>

      {/* ============================================ */}
      {/* SECTION 1: PROJECT SNAPSHOT */}
      {/* ============================================ */}
      <section id="snapshot" className="pt-32 sm:pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-30" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold albert-sans-medium text-white mb-4">
              Liffo
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 jost-secondary mb-8">
              Emergency Health Platform
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2">
                Mobile App Design
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                Healthcare UX
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
                Lead Product Designer
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="p-6 sm:p-8 glass-card grain-texture border-red-500/30">
              <h3 className="text-sm uppercase text-white/60 mb-4 tracking-wider jost-secondary text-center">
                Key Constraints & Trade-offs
              </h3>
              <ul className="space-y-3 text-white/80 jost-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  High-stress emergency scenarios
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Mobile-first usage in unpredictable environments
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Trust & healthcare compliance
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  Speed vs clarity trade-offs
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
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

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 albert-sans-medium text-white">
              DESIGN THINKING & KEY DECISIONS
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto jost-secondary">
              How research insights translated directly into product decisions
            </p>
          </motion.div>

          <div className="space-y-10">
            {keyInsights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 sm:p-8 glass-card grain-texture border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                  {index === 0 && (
                    <div className="mb-4">
                      <Badge className="bg-purple-500/20 text-purple-300 text-xs">
                        Primary Design Decision
                      </Badge>
                    </div>
                  )}

                  <div className="mb-5">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider jost-secondary">
                      <Lightbulb className="w-4 h-4" />
                      Insight
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed mt-2 jost-secondary">
                      {item.insight}
                    </p>
                  </div>

                  <div className="text-white/30 text-sm mb-4 jost-secondary">
                    ↓ Design decision
                  </div>

                  <div className="mb-5">
                    <p className="text-blue-300 font-medium leading-relaxed jost-secondary">
                      {item.decision}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-green-400 text-xs font-semibold uppercase tracking-wide mb-1 jost-secondary">
                      Outcome
                    </div>
                    <p className="text-green-300 font-semibold jost-secondary">
                      {item.outcome}
                    </p>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 albert-sans-medium text-white">
              SOLUTION & FINAL DESIGN
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto jost-secondary">
              Key screens that demonstrate the design decisions in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {designShowcase.map((screen, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden glass-card grain-texture border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group">
                  <div className="aspect-[9/16] bg-black/40 overflow-hidden">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white text-sm albert-sans-medium">
                      {screen.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-2 jost-secondary leading-relaxed">
                      {screen.caption}
                    </p>
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 albert-sans-medium text-white">
              IMPACT & LEARNINGS
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto jost-secondary">
              Measurable outcomes and reflections from the project
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {impactData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-6 text-center glass-card grain-texture border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-black text-green-400 albert-sans-medium">
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 mt-2 jost-secondary">
                    {item.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-10 max-w-3xl mx-auto glass-card grain-texture border-yellow-500/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center albert-sans-medium">
                Key Learnings
              </h3>
              <div className="space-y-4">
                {keyLearnings.map((l, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 jost-secondary">{l}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA SECTION */}
      {/* ============================================ */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-gray-900 to-slate-950" />
          <div className="absolute inset-0 grain-texture opacity-25" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 albert-sans-medium">
              Ready to discuss your project?
            </h2>
            <Link href="/#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl"
              >
                <ExternalLink className="w-5 h-5 mr-2" /> Start Your Project
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="py-12 sm:py-16 text-center relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <p className="text-white/60 jost-secondary">© 2025 Karan Gadhave</p>
        </div>
      </footer>
    </div>
  );
};

export default LiffoCaseStudy;
