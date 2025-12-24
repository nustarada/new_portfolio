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

// Screens
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
    { id: "snapshot", title: "Project Snapshot" },
    { id: "thinking", title: "Design Thinking" },
    { id: "solution", title: "Solution & Design" },
    { id: "impact", title: "Impact & Learnings" },
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
      insight:
        "Trust is critical in healthcare decision-making",
      decision:
        "Transparent doctor profiles with credentials and real-time availability",
      outcome: "4.9/5 doctor consultation satisfaction",
    },
    {
      insight:
        "Chronic care extends beyond single appointments",
      decision:
        "Integrated home care, prescriptions, and follow-ups",
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
      caption:
        "Credentials and availability build trust and confidence",
    },
    {
      image: Screen22,
      title: "Doctor Discovery",
      caption:
        "Filters help users make informed healthcare choices quickly",
    },
    {
      image: Screen27,
      title: "Appointment Management",
      caption:
        "Integrated prescriptions simplify ongoing care management",
    },
    {
      image: Screen25,
      title: "Health Profile Hub",
      caption:
        "Centralized health data enables personalized care",
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
    <div ref={containerRef} className="min-h-screen grain-texture">
      <CaseStudyNavigation sections={navigationSections} />

      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-[999]"
        style={{ width: progressWidth }}
      />

      {/* NAV */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? "glass-intense" : "glass-card"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <Link href="/">
            <img src={LogoImage} className="h-12 w-12 cursor-pointer" />
          </Link>
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 text-white"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        </div>
      </motion.nav>

      {/* SNAPSHOT */}
      <section id="snapshot" className="pt-40 pb-32 text-center">
        <h1 className="text-6xl font-extrabold text-white">Liffo</h1>
        <p className="text-2xl text-white/80 mt-4">
          Emergency Health Platform
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Badge>Mobile App Design</Badge>
          <Badge>Healthcare UX</Badge>
          <Badge>Lead Product Designer</Badge>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Card className="p-6">
            <h3 className="text-sm uppercase text-white/60 mb-3">
              Key Constraints & Trade-offs
            </h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>• High-stress emergency scenarios</li>
              <li>• Mobile-first usage in unpredictable environments</li>
              <li>• Trust & healthcare compliance</li>
              <li>• Speed vs clarity trade-offs</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* THINKING */}
      <section id="thinking" className="py-24 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Design Thinking & Key Decisions
        </h2>

        <div className="space-y-16">
          {keyInsights.map((item, index) => (
            <div key={index}>
              <Card className="p-8">
                <div className="mb-4 text-purple-400 text-xs uppercase">
                  Insight
                </div>
                <p className="text-lg text-white mb-6">{item.insight}</p>

                <div className="mb-4 text-blue-300 text-xs uppercase">
                  Design Decision
                </div>
                <p className="text-lg text-blue-200 mb-6">{item.decision}</p>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-green-400 text-xs uppercase">
                    Outcome
                  </div>
                  <p className="text-green-300 font-semibold">
                    {item.outcome}
                  </p>
                </div>
              </Card>

              {index !== keyInsights.length - 1 && (
                <div className="text-center text-white/30 text-2xl my-10">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BRIDGE */}
      <section className="py-12 text-center text-white/70">
        These decisions shaped every interaction in the product.
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Solution & Final Design
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designShowcase.map((screen, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-[9/16] bg-black/20">
                <img
                  src={screen.image}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white text-sm">
                  {screen.title}
                </h3>
                <p className="text-xs text-white/60 mt-2">
                  {screen.caption}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-16">
          Impact & Learnings
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactData.map((item, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="text-4xl font-black text-green-400">
                {item.metric}
              </div>
              <div className="text-sm text-white/80 mt-2">
                {item.label}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-10 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-yellow-400 mb-6 text-center">
            Key Learnings
          </h3>
          <div className="space-y-4">
            {keyLearnings.map((l, i) => (
              <div key={i} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400" />
                <p className="text-white/80">{l}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Ready to discuss your project?
        </h2>
        <Link href="/#contact">
          <Button size="lg" className="mt-6">
            <ExternalLink className="w-4 h-4 mr-2" /> Start Your Project
          </Button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-16 text-center text-white/60">
        © 2025 Karn Kalaa
      </footer>
    </div>
  );
};

export default LiffoCaseStudy;