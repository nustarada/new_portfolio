import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import {
  Clock,
  Users,
  CheckCircle,
  Target,
  ExternalLink,
  ArrowLeft,
  Lightbulb,
  Shield,
  Zap,
  Palette,
  Code,
  ArrowRight,
  Globe,
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

/* ─── Wireframe SVG components ─────────────────────────────────────────── */

const WireframeDashboard = () => (
  <svg viewBox="0 0 220 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Phone shell */}
    <rect x="10" y="8" width="200" height="364" rx="22" ry="22" fill="#1a1a2e" stroke="#4a4a6a" strokeWidth="2"/>
    <rect x="20" y="18" width="180" height="344" rx="14" ry="14" fill="#0f0f1a"/>
    {/* Status bar */}
    <rect x="30" y="28" width="40" height="6" rx="3" fill="#2a2a4a"/>
    <rect x="160" y="28" width="30" height="6" rx="3" fill="#2a2a4a"/>
    {/* Greeting text placeholder */}
    <rect x="30" y="48" width="70" height="7" rx="3" fill="#3a3a5a"/>
    <rect x="30" y="60" width="110" height="10" rx="3" fill="#4a4a7a"/>
    {/* Emergency button — the focal point */}
    <rect x="40" y="82" width="140" height="56" rx="12" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5"/>
    <rect x="55" y="96" width="24" height="24" rx="12" fill="#ef4444" opacity="0.4"/>
    <rect x="90" y="100" width="60" height="8" rx="3" fill="#fca5a5"/>
    <rect x="90" y="112" width="40" height="6" rx="3" fill="#ef4444" opacity="0.6"/>
    <text x="113" y="170" textAnchor="middle" fontSize="7" fill="#6b7280" fontFamily="sans-serif">Emergency — always visible, always first</text>
    {/* Quick access row */}
    <rect x="30" y="150" width="140" height="8" rx="3" fill="#2a2a4a"/>
    {/* 4 service tiles */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x={30 + i*44} y="166" width="36" height="36" rx="8" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
        <rect x={38 + i*44} y="174" width="20" height="8" rx="2" fill="#3a3a6a"/>
        <rect x={42 + i*44} y="186" width="12" height="6" rx="2" fill="#2a2a5a"/>
      </g>
    ))}
    {/* Health overview card */}
    <rect x="30" y="214" width="160" height="48" rx="10" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
    <rect x="40" y="223" width="60" height="7" rx="3" fill="#3a3a6a"/>
    <rect x="40" y="234" width="100" height="6" rx="3" fill="#2a2a5a"/>
    <rect x="40" y="244" width="80" height="6" rx="3" fill="#2a2a5a"/>
    {/* Recent activity */}
    <rect x="30" y="272" width="90" height="7" rx="3" fill="#3a3a6a"/>
    {[0,1].map(i => (
      <g key={i}>
        <rect x="30" y={285 + i*22} width="160" height="16" rx="6" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="1"/>
        <rect x="36" y={289 + i*22} width="24" height="8" rx="2" fill="#2a2a4a"/>
        <rect x="66" y={289 + i*22} width="80" height="8" rx="2" fill="#2a2a5a"/>
      </g>
    ))}
    {/* Bottom nav */}
    <rect x="20" y="330" width="180" height="2" fill="#2a2a4a"/>
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <rect x={36 + i*36} y="336" width="16" height="10" rx="3" fill={i===0 ? "#4a4aaa" : "#2a2a4a"}/>
        <rect x={39 + i*36} y="350" width="10" height="4" rx="2" fill={i===0 ? "#6a6aca" : "#2a2a4a"}/>
      </g>
    ))}
    {/* Annotation */}
    <line x1="112" y1="138" x2="112" y2="150" stroke="#ef4444" strokeWidth="1" strokeDasharray="3"/>
    <text x="112" y="148" textAnchor="middle" fontSize="6" fill="#ef4444" fontFamily="sans-serif">↓ quick access</text>
  </svg>
);

const WireframeEmergency = () => (
  <svg viewBox="0 0 220 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="200" height="364" rx="22" ry="22" fill="#1a1a2e" stroke="#4a4a6a" strokeWidth="2"/>
    <rect x="20" y="18" width="180" height="344" rx="14" ry="14" fill="#0f0f1a"/>
    {/* Back + title */}
    <rect x="30" y="32" width="16" height="12" rx="4" fill="#2a2a4a"/>
    <rect x="54" y="34" width="80" height="8" rx="3" fill="#4a4a7a"/>
    {/* Map placeholder */}
    <rect x="30" y="56" width="160" height="90" rx="8" fill="#1a2a1a" stroke="#2a3a2a" strokeWidth="1"/>
    <rect x="85" y="90" width="50" height="24" rx="4" fill="#1a3a1a" stroke="#22c55e" strokeWidth="1"/>
    <rect x="95" y="96" width="30" height="6" rx="2" fill="#22c55e" opacity="0.6"/>
    <rect x="100" y="105" width="20" height="6" rx="2" fill="#22c55e" opacity="0.4"/>
    {/* Location pin */}
    <circle cx="110" cy="75" r="5" fill="#ef4444" opacity="0.8"/>
    <line x1="110" y1="80" x2="110" y2="88" stroke="#ef4444" strokeWidth="1.5"/>
    <text x="110" y="156" textAnchor="middle" fontSize="6" fill="#6b7280" fontFamily="sans-serif">auto-detected location</text>
    {/* One-tap dispatch button */}
    <rect x="30" y="162" width="160" height="44" rx="10" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1.5"/>
    <rect x="55" y="174" width="20" height="8" rx="3" fill="#fca5a5"/>
    <rect x="83" y="174" width="80" height="8" rx="3" fill="#fca5a5"/>
    <rect x="83" y="186" width="50" height="6" rx="2" fill="#ef4444" opacity="0.5"/>
    {/* Nearby hospitals */}
    <rect x="30" y="216" width="110" height="7" rx="3" fill="#3a3a6a"/>
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x="30" y={228 + i*26} width="160" height="20" rx="6" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
        <rect x="36" y={232 + i*26} width="30" height="12" rx="3" fill="#2a2a4a"/>
        <rect x="72" y={233 + i*26} width="70" height="6" rx="2" fill="#3a3a6a"/>
        <rect x="72" y={242 + i*26} width="40" height="5" rx="2" fill="#2a2a5a"/>
        <rect x="155" y={232 + i*26} width="28" height="12" rx="4" fill="#14532d" stroke="#22c55e" strokeWidth="0.5"/>
      </g>
    ))}
    {/* Annotation */}
    <line x1="190" y1="184" x2="196" y2="184" stroke="#ef4444" strokeWidth="1" strokeDasharray="2"/>
    <text x="108" y="310" textAnchor="middle" fontSize="6" fill="#6b7280" fontFamily="sans-serif">sorted by ETA, not just distance</text>
    {/* Bottom nav */}
    <rect x="20" y="330" width="180" height="2" fill="#2a2a4a"/>
    {[0,1,2,3,4].map(i => (
      <rect key={i} x={36 + i*36} y="336" width="16" height="14" rx="3" fill="#2a2a4a"/>
    ))}
  </svg>
);

const WireframeDoctor = () => (
  <svg viewBox="0 0 220 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="200" height="364" rx="22" ry="22" fill="#1a1a2e" stroke="#4a4a6a" strokeWidth="2"/>
    <rect x="20" y="18" width="180" height="344" rx="14" ry="14" fill="#0f0f1a"/>
    {/* Header */}
    <rect x="30" y="30" width="16" height="12" rx="4" fill="#2a2a4a"/>
    <rect x="54" y="32" width="80" height="8" rx="3" fill="#4a4a7a"/>
    {/* Search bar */}
    <rect x="30" y="52" width="160" height="26" rx="8" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
    <rect x="40" y="60" width="12" height="10" rx="2" fill="#3a3a6a"/>
    <rect x="58" y="62" width="80" height="6" rx="2" fill="#2a2a5a"/>
    {/* Filter chips */}
    {["All","Cardio","Neuro","ENT"].map((label, i) => (
      <g key={label}>
        <rect x={30 + i*44} y="86" width={label.length * 5 + 14} height="16" rx="8" fill={i===0 ? "#312e81" : "#1e1e3a"} stroke={i===0 ? "#6366f1" : "#3a3a5a"} strokeWidth="1"/>
        <text x={37 + i*44} y="97" fontSize="6" fill={i===0 ? "#a5b4fc" : "#6b7280"} fontFamily="sans-serif">{label}</text>
      </g>
    ))}
    {/* Doctor cards */}
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x="30" y={110 + i*50} width="160" height="44" rx="10" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
        {/* Avatar */}
        <circle cx="52" cy={132 + i*50} r="14" fill="#2a2a4a"/>
        <rect x="44" y={124 + i*50} width="16" height="8" rx="4" fill="#3a3a5a"/>
        {/* Name + specialty */}
        <rect x="74" y={118 + i*50} width="80" height="7" rx="3" fill="#4a4a7a"/>
        <rect x="74" y={128 + i*50} width="55" height="6" rx="3" fill="#2a2a5a"/>
        {/* Rating */}
        <rect x="74" y={138 + i*50} width="30" height="6" rx="3" fill="#78350f" opacity="0.8"/>
        {/* Available badge */}
        <rect x="152" y={118 + i*50} width="32" height="14" rx="6" fill="#14532d" stroke="#22c55e" strokeWidth="0.5"/>
        <text x="168" y="126" fontSize="5" fill="#86efac" fontFamily="sans-serif" textAnchor="middle">avail.</text>
      </g>
    ))}
    <text x="110" y="320" textAnchor="middle" fontSize="6" fill="#6b7280" fontFamily="sans-serif">credibility first — ratings visible before tapping</text>
    {/* Bottom nav */}
    <rect x="20" y="330" width="180" height="2" fill="#2a2a4a"/>
    {[0,1,2,3,4].map(i => (
      <rect key={i} x={36 + i*36} y="336" width="16" height="14" rx="3" fill="#2a2a4a"/>
    ))}
  </svg>
);

const WireframeHospitalDetail = () => (
  <svg viewBox="0 0 220 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="200" height="364" rx="22" ry="22" fill="#1a1a2e" stroke="#4a4a6a" strokeWidth="2"/>
    <rect x="20" y="18" width="180" height="344" rx="14" ry="14" fill="#0f0f1a"/>
    {/* Hero image placeholder */}
    <rect x="20" y="18" width="180" height="80" rx="14" fill="#1e2a1e" stroke="#2a3a2a" strokeWidth="1"/>
    <rect x="75" y="42" width="70" height="32" rx="4" fill="#2a3a2a" opacity="0.6"/>
    {/* Back arrow overlay */}
    <rect x="28" y="24" width="20" height="16" rx="6" fill="#0f0f1a" opacity="0.7"/>
    <rect x="32" y="28" width="12" height="8" rx="2" fill="#4a4a7a"/>
    {/* Hospital name */}
    <rect x="30" y="108" width="120" height="9" rx="3" fill="#4a4a7a"/>
    <rect x="30" y="121" width="80" height="7" rx="3" fill="#2a2a5a"/>
    {/* Rating + distance row */}
    <rect x="30" y="134" width="50" height="10" rx="4" fill="#78350f" opacity="0.7"/>
    <rect x="88" y="136" width="40" height="6" rx="2" fill="#2a2a5a"/>
    <rect x="136" y="136" width="50" height="6" rx="2" fill="#2a2a5a"/>
    {/* Tab bar */}
    {["Overview","Departments","Doctors","Reviews"].map((tab, i) => (
      <g key={tab}>
        <text x={30 + i*50} y="158" fontSize="5.5" fill={i===0 ? "#a5b4fc" : "#4b5563"} fontFamily="sans-serif">{tab}</text>
        {i===0 && <rect x="28" y="160" width={tab.length*4.2} height="1.5" rx="1" fill="#6366f1"/>}
      </g>
    ))}
    {/* Content */}
    <rect x="30" y="168" width="160" height="7" rx="3" fill="#2a2a5a"/>
    <rect x="30" y="179" width="130" height="7" rx="3" fill="#2a2a5a"/>
    {/* Services grid */}
    <rect x="30" y="196" width="70" height="8" rx="3" fill="#3a3a6a"/>
    {[0,1,2,3,4,5].map(i => (
      <g key={i}>
        <rect x={30 + (i%3)*54} y={212 + Math.floor(i/3)*38} width="46" height="32" rx="8" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
        <rect x={38 + (i%3)*54} y={220 + Math.floor(i/3)*38} width="30" height="16" rx="4" fill="#2a2a4a"/>
      </g>
    ))}
    {/* Book button */}
    <rect x="30" y="298" width="160" height="28" rx="10" fill="#312e81" stroke="#6366f1" strokeWidth="1"/>
    <rect x="80" y="307" width="60" height="8" rx="3" fill="#a5b4fc"/>
    {/* Bottom nav */}
    <rect x="20" y="330" width="180" height="2" fill="#2a2a4a"/>
    {[0,1,2,3,4].map(i => (
      <rect key={i} x={36 + i*36} y="336" width="16" height="14" rx="3" fill="#2a2a4a"/>
    ))}
    <text x="110" y="356" textAnchor="middle" fontSize="6" fill="#6b7280" fontFamily="sans-serif">tab navigation — no back-and-forth</text>
  </svg>
);

const WireframeProfile = () => (
  <svg viewBox="0 0 220 380" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="200" height="364" rx="22" ry="22" fill="#1a1a2e" stroke="#4a4a6a" strokeWidth="2"/>
    <rect x="20" y="18" width="180" height="344" rx="14" ry="14" fill="#0f0f1a"/>
    {/* Header */}
    <rect x="30" y="28" width="90" height="9" rx="3" fill="#4a4a7a"/>
    <rect x="168" y="28" width="22" height="14" rx="4" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
    {/* Avatar + name */}
    <circle cx="110" cy="74" r="24" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="2"/>
    <rect x="96" y="64" width="28" height="12" rx="6" fill="#2a2a4a"/>
    <rect x="88" y="104" width="44" height="8" rx="3" fill="#4a4a7a" x1="88"/>
    <rect x="95" y="116" width="30" height="6" rx="3" fill="#2a2a5a"/>
    {/* Health stats row */}
    {[0,1,2].map(i => (
      <g key={i}>
        <rect x={30 + i*60} y="130" width="52" height="40" rx="8" fill="#1e1e3a" stroke="#3a3a5a" strokeWidth="1"/>
        <rect x={38 + i*60} y="140" width="36" height="10" rx="3" fill="#312e81"/>
        <rect x={42 + i*60} y="154" width="28" height="6" rx="2" fill="#2a2a5a"/>
      </g>
    ))}
    {/* Section divider */}
    <rect x="30" y="178" width="80" height="7" rx="3" fill="#3a3a6a"/>
    {/* Record rows */}
    {["Appointments","Prescriptions","Lab Results","Health Details","Family History"].map((label, i) => (
      <g key={label}>
        <rect x="30" y={192 + i*24} width="160" height="18" rx="6" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="1"/>
        <rect x="36" y={196 + i*24} width="14" height="10" rx="3" fill="#2a2a4a"/>
        <rect x="56" y={198 + i*24} width={label.length * 5} height="6" rx="2" fill="#3a3a6a"/>
        <rect x="174" y={199 + i*24} width="8" height="4" rx="1" fill="#2a2a5a"/>
      </g>
    ))}
    {/* Bottom nav with profile active */}
    <rect x="20" y="330" width="180" height="2" fill="#2a2a4a"/>
    {[0,1,2,3,4].map(i => (
      <rect key={i} x={36 + i*36} y="336" width="16" height="14" rx="3" fill={i===4 ? "#312e81" : "#2a2a4a"}/>
    ))}
    <text x="110" y="358" textAnchor="middle" fontSize="6" fill="#6b7280" fontFamily="sans-serif">all health data in one place</text>
  </svg>
);

/* ─── Main Component ────────────────────────────────────────────────────── */

const LiffoCaseStudy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationSections = [
    { id: "overview", title: "Project Overview", color: "from-red-400 to-orange-400" },
    { id: "context", title: "Context", color: "from-orange-400 to-yellow-400" },
    { id: "problem", title: "Problem Statement", color: "from-red-400 to-pink-400" },
    { id: "goals", title: "Goals", color: "from-green-400 to-teal-400" },
    { id: "research", title: "Research & Understanding", color: "from-purple-400 to-pink-400" },
    { id: "decisions", title: "Design Decisions", color: "from-orange-400 to-red-400" },
    { id: "wireframes", title: "Wireframes", color: "from-slate-400 to-gray-400" },
    { id: "strategy", title: "Solution Strategy", color: "from-teal-400 to-green-400" },
    { id: "showcase", title: "Final Product", color: "from-cyan-400 to-blue-400" },
    { id: "designsystem", title: "Design System", color: "from-blue-400 to-purple-400" },
    { id: "impact", title: "Impact & Outcomes", color: "from-green-400 to-cyan-400" },
    { id: "learnings", title: "Learnings", color: "from-yellow-400 to-orange-400" },
    { id: "next", title: "What's Next", color: "from-purple-400 to-blue-400" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const designShowcase = [
    {
      category: "Onboarding & Dashboard",
      description: "The walkthrough captures emergency contacts before anything else — that detail took two iterations to get right. The dashboard leads with the emergency button and surfaces health overview without making users dig.",
      images: [Screen1, Screen2, Screen3, Screen4, Screen5],
    },
    {
      category: "Emergency Services",
      description: "One-tap ambulance dispatch with GPS auto-detect and real-time hospital routing. The hospital list sorts by ETA, not just distance — a subtle but important distinction that came out of thinking through actual emergency scenarios.",
      images: [Screen10, Screen11, Screen12, Screen13],
    },
    {
      category: "Home Care Services",
      description: "Home care was treated as a first-class service, not an afterthought. Covers nursing, physiotherapy, and chronic care management with full provider profiles and scheduling.",
      images: [Screen14],
    },
    {
      category: "Hospital & Doctor Discovery",
      description: "Transparent profiles with credentials, patient ratings, and live availability. The elite doctor tier surfaces specialists with verified credentials — designed specifically for users who need trust before booking.",
      images: [Screen15, Screen16, Screen17, Screen18, Screen19, Screen20, Screen21, Screen22],
    },
    {
      category: "Search & Services",
      description: "Unified search across all service types. The service directory is organized by what the patient needs, not by how the provider categorizes it — a deliberate shift in mental model.",
      images: [Screen6, Screen7, Screen8, Screen9, Screen23, Screen24],
    },
    {
      category: "Health Profile & Records",
      description: "Everything in one place — appointments, prescriptions, lab results, family history, and a digital health card. Built so a doctor can be handed the phone and immediately understand the patient's situation.",
      images: [Screen25, Screen26, Screen27, Screen28, Screen29, Screen30, Screen31, Screen32, Screen33, Screen34],
    },
  ];

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
              <motion.div className="cursor-pointer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img src={LogoImage} alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain" />
              </motion.div>
            </Link>
            <motion.button
              onClick={() => (window.location.href = "/")}
              className="px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 glass-card grain-texture hover:glass-intense border border-red-500/30 hover:border-red-500/50 text-white font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-950/30 via-transparent to-orange-950/20" />
          <div className="absolute inset-0 grain-texture opacity-30" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="jost-secondary">13 weeks</span>
            </div>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-red-400" />
              <span className="jost-secondary">Lead Product Designer</span>
            </div>
          </div>
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm px-4 py-2 border-red-500/50 bg-red-500/10 jost-secondary">
              Mobile App Design
            </Badge>
            <h1 className="space-y-2">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white albert-sans-medium leading-tight">
                Liffo
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent albert-sans-medium leading-tight">
                Emergency Health Platform
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed jost-secondary">
              A unified healthcare platform designed for emergency-first access — enabling patients to book ambulances, consult elite doctors, and coordinate care, all from one mobile app.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {["Product Design", "Healthcare UX", "Emergency Services", "Mobile Design"].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs jost-secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </section>

      {/* ── 1. Project Overview ───────────────────────────────────────────── */}
      <section id="overview" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900" />
        <div className="absolute inset-0 grain-texture opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">PROJECT OVERVIEW</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Card className="p-8 glass-card grain-texture border-red-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-red-400 albert-sans-medium">PROJECT DETAILS</h3>
                <div className="space-y-4 flex-grow">
                  {[
                    ["Client", "Liffo Health Services"],
                    ["Role", "Lead Product Designer"],
                    ["Duration", "13 weeks"],
                    ["Scope", "End-to-end mobile app — 34 screens"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-white/5 pb-3">
                      <span className="text-white/60 jost-secondary">{k}</span>
                      <span className="text-white font-semibold jost-secondary">{v}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full flex flex-col">
                <h3 className="text-2xl font-extrabold mb-6 text-orange-400 albert-sans-medium">OVERVIEW</h3>
                <p className="text-white/85 leading-relaxed text-lg jost-secondary flex-grow">
                  Liffo is an emergency-first healthcare platform that consolidates ambulance booking, elite doctor access, home care services, and medical records into a single mobile experience. I owned the design end-to-end — from early wireframes through final UI across 34 screens — with the core constraint that the emergency flow had to work in under two taps, no matter what.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Context ────────────────────────────────────────────────────── */}
      <section id="context" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">CONTEXT</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto jost-secondary">
              Healthcare in India is fragmented. This project existed to fix that.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Globe, color: "orange", heading: "The Ecosystem Problem", body: "Patients navigate multiple apps, phone calls, and physical visits to coordinate care — especially during emergencies. There's no central point. In a crisis, that fragmentation costs time that patients don't have." },
              { icon: Users, color: "orange", heading: "Who Uses This", body: "Three distinct groups: patients needing urgent care right now, families managing someone with a chronic condition, and individuals who want routine consultations without the hospital queue. Each group needs the same platform to work differently." },
              { icon: Target, color: "orange", heading: "Why Liffo Exists", body: "No single platform addressed both emergency and routine healthcare needs. Emergency-only apps had poor UX. Consultation apps ignored urgent care entirely. The gap was obvious — and critical." },
              { icon: Lightbulb, color: "orange", heading: "The Opportunity", body: "Build one platform that puts emergency access front and center while making routine care, home services, and records available without switching apps. The design challenge was making that feel simple, not overwhelming." },
            ].map(({ icon: Icon, color, heading, body }, i) => (
              <motion.div key={heading} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 glass-card grain-texture border-orange-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-orange-300 mb-3 albert-sans-medium">{heading}</h3>
                      <p className="text-white/80 leading-relaxed jost-secondary">{body}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Problem Statement ──────────────────────────────────────────── */}
      <section id="problem" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">PROBLEM STATEMENT</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Card className="p-12 glass-card grain-texture border-red-500/30">
              <p className="text-2xl text-white/90 leading-relaxed mb-10 jost-secondary font-light">
                "When someone is having a medical emergency, they shouldn't have to think about which app to open, which number to call, or how to describe their location."
              </p>
              <p className="text-lg text-white/75 leading-relaxed mb-10 jost-secondary">
                The real problem wasn't lack of healthcare options — it was coordination. Patients dealt with fragmented systems that created delays at exactly the wrong moments. And beyond emergencies, everyday healthcare management was equally scattered: records in one place, appointments in another, no continuity between providers.
              </p>
              <h3 className="text-xl font-extrabold mb-6 text-red-400 albert-sans-medium">SPECIFIC FRICTION POINTS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Critical delays in ambulance dispatch from fragmented booking",
                  "No trust signals for providers during urgent decisions",
                  "Cognitive overload when navigating healthcare under stress",
                  "Zero coordination between emergency care and follow-up",
                  "Health records scattered — doctors couldn't see the full picture",
                ].map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/80 jost-secondary">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Goals ──────────────────────────────────────────────────────── */}
      <section id="goals" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">GOALS</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto jost-secondary">Five things this product had to get right.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { g: "Reduce Emergency Friction", d: "One-tap ambulance booking — reachable from any screen in under two taps" },
              { g: "Unify All Services", d: "Emergency, consultation, home care, and pharmacy under one roof" },
              { g: "Build Provider Trust", d: "Surface credentials, ratings, and response times transparently" },
              { g: "Support Care Continuity", d: "Connect emergency response through to discharge, home care, and follow-up" },
              { g: "Minimize Cognitive Load", d: "Design for high-stress moments — clear hierarchy, obvious actions" },
            ].map((item, i) => (
              <motion.div key={item.g} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-6 glass-card grain-texture border-green-500/30 h-full">
                  <CheckCircle className="w-5 h-5 text-green-400 mb-3" />
                  <h3 className="text-lg font-extrabold text-green-300 mb-2 albert-sans-medium">{item.g}</h3>
                  <p className="text-white/75 jost-secondary text-sm leading-relaxed">{item.d}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Research ───────────────────────────────────────────────────── */}
      <section id="research" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">RESEARCH & PRODUCT UNDERSTANDING</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto jost-secondary">What I learned before touching Figma.</p>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                title: "From Stakeholders",
                color: "purple",
                items: [
                  "Emergency teams said patient location and medical history delays cost critical minutes on arrival",
                  "Hospital admins noted that pre-arrival information significantly improves emergency outcomes",
                  "Home care providers had no way to receive patient handoffs from hospital discharge teams",
                ],
              },
              {
                title: "From Behavioral Observation",
                color: "purple",
                items: [
                  "Under stress, users scan for the most prominent action — they don't read labels or explore menus",
                  "Trust signals (ratings, credentials, live availability) heavily influence provider selection speed",
                  "Patients managing chronic conditions want the same doctor each time — familiarity matters more than convenience",
                ],
              },
              {
                title: "System-Level Gaps",
                color: "purple",
                items: [
                  "No integration between ambulance dispatch and hospital admission — patients re-explain on arrival",
                  "Medical records scattered across providers with no patient-controlled access or sharing",
                  "Home care operated completely independently from treating physicians — no clinical handoff",
                ],
              },
            ].map((s, si) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: si * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 glass-card grain-texture border-purple-500/30">
                  <h3 className="text-xl font-extrabold mb-6 text-purple-300 albert-sans-medium">{s.title}</h3>
                  <div className="space-y-3">
                    {s.items.map((item, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-white/80 jost-secondary">{item}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Design Decisions ───────────────────────────────────────────── */}
      <section id="decisions" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">DESIGN THINKING & KEY DECISIONS</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto jost-secondary">Each decision traced back to something specific we observed or learned.</p>
          </motion.div>
          <div className="space-y-5">
            {[
              {
                insight: "Users in emergencies scan for prominent actions, not text",
                decision: "Emergency button is the largest, most visible element on every dashboard state",
                reasoning: "Every pixel of visual weight spent here directly reduces time-to-action. There's no second place for this element.",
              },
              {
                insight: "Trust gaps cause hesitation in urgent provider selection",
                decision: "Transparent doctor and hospital profiles with live credentials, ratings, and availability",
                reasoning: "When someone is scared, uncertainty makes them freeze. Removing that uncertainty with visible proof points removes the freeze.",
              },
              {
                insight: "Chronic patients value the same doctor, not just any doctor",
                decision: "Favorited doctors and rebooking shortcuts prominent in the profile section",
                reasoning: "The platform needed to respect ongoing care relationships, not just optimize for speed of first booking.",
              },
              {
                insight: "Healthcare decisions under stress cause cognitive overload",
                decision: "Guided flows with progressive disclosure — one decision at a time",
                reasoning: "Breaking a complex booking into smaller, obvious steps removes the paralysis of seeing everything at once.",
              },
              {
                insight: "Care coordination breaks after emergency discharge",
                decision: "Integrated care journey: emergency → hospital → home care → follow-up, all within one app",
                reasoning: "The product is only useful if it stays useful past the crisis moment. Continuity is the differentiator.",
              },
            ].map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.08 }} viewport={{ once: true }}>
                <Card className="p-7 glass-card grain-texture border-orange-500/30">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 items-start">
                    <div>
                      <div className="text-xs font-bold text-orange-400 mb-2 tracking-widest jost-secondary">INSIGHT</div>
                      <p className="text-white/80 jost-secondary">{d.insight}</p>
                    </div>
                    <div className="hidden lg:flex items-center justify-center px-2 pt-6">
                      <ArrowRight className="w-5 h-5 text-orange-400/60" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-green-400 mb-2 tracking-widest jost-secondary">DECISION</div>
                      <p className="text-white font-semibold jost-secondary mb-2">{d.decision}</p>
                      <p className="text-white/60 text-sm jost-secondary">{d.reasoning}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Wireframes ─────────────────────────────────────────────────── */}
      <section id="wireframes" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-20" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">WIREFRAMES</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="mb-14">
            <p className="text-lg text-white/70 max-w-3xl mx-auto text-center leading-relaxed jost-secondary">
              Before going into high-fidelity UI, I mapped out the five screens that carried the most design risk — the dashboard, emergency flow, doctor discovery, hospital detail, and the health profile. These wireframes were about answering structural questions: what lives where, what's the hierarchy, what does a user see first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                label: "Dashboard",
                note: "Emergency button dominates. Everything else is secondary.",
                component: <WireframeDashboard />,
              },
              {
                label: "Emergency Flow",
                note: "Map, one-tap dispatch, hospital list sorted by ETA.",
                component: <WireframeEmergency />,
              },
              {
                label: "Doctor Discovery",
                note: "Filters first, credibility visible on card — no need to tap in.",
                component: <WireframeDoctor />,
              },
              {
                label: "Hospital Detail",
                note: "Tabbed — Overview, Departments, Doctors, Reviews. No scrolling rabbit holes.",
                component: <WireframeHospitalDetail />,
              },
              {
                label: "Health Profile",
                note: "Health stats summary + record list. One place for everything.",
                component: <WireframeProfile />,
              },
            ].map(({ label, note, component }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <Card className="p-5 glass-card grain-texture border-slate-500/30 h-full flex flex-col">
                  <div className="flex-grow mb-4">
                    {component}
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-base font-extrabold text-white mb-1 albert-sans-medium">{label}</h4>
                    <p className="text-white/60 text-sm jost-secondary">{note}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <Card className="p-8 glass-card grain-texture border-slate-400/20">
              <p className="text-white/70 jost-secondary leading-relaxed">
                <span className="text-white font-semibold">What these wireframes resolved:</span> The biggest structural debate was how to surface emergency access from inside deep navigation flows. The answer was to anchor the emergency button to the dashboard and make the bottom nav always visible — so no matter how deep a user goes, they're never more than two taps from dispatch. The wireframe stage also surfaced that hospital detail needed tabs (not a long scroll) to prevent users from missing critical information like ratings and available doctors.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ── 8. Solution Strategy ──────────────────────────────────────────── */}
      <section id="strategy" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">SOLUTION STRATEGY</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto jost-secondary">How the platform was actually structured to solve the coordination problem.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Three-Tier Priority", content: "Emergency (ambulance, elite doctors) → Consultation (specialists, routine care) → Support (home care, pharmacy, records). The hierarchy is reflected in the visual weight of each tier within the dashboard." },
              { title: "Service Grouping by Need", content: "Services are grouped by what the patient is trying to do, not by provider type. Lab tests sit next to pharmacy and symptom checker — because that's how patients think about that moment of need." },
              { title: "Navigation Architecture", content: "Persistent bottom nav for five core sections. Emergency accessible within two taps from any screen. Context-sensitive actions within flows so users don't have to go back to the homepage to take the next step." },
              { title: "Unified Care Journey", content: "Emergency response → hospital admission → discharge planning → home care → follow-up appointments. Each step aware of the previous one, so patients and providers aren't re-entering information that already exists." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 glass-card grain-texture border-teal-500/30 h-full">
                  <h3 className="text-xl font-extrabold text-teal-300 mb-4 albert-sans-medium">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed jost-secondary">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Final Product ──────────────────────────────────────────────── */}
      <section id="showcase" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-15" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">FINAL PRODUCT</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto jost-secondary">34 screens. Every one of them justified.</p>
          </motion.div>
          <div className="space-y-16">
            {designShowcase.map((cat, ci) => (
              <motion.div key={cat.category} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: ci * 0.05 }} viewport={{ once: true }}>
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-red-400 mb-3 albert-sans-medium">{cat.category}</h3>
                  <p className="text-white/70 jost-secondary max-w-3xl">{cat.description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {cat.images.map((img, ii) => (
                    <motion.div key={ii} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: ii * 0.04 }} viewport={{ once: true }} whileHover={{ scale: 1.05, y: -5 }}>
                      <Card className="overflow-hidden glass-card grain-texture border-white/10 hover:border-red-400/50 transition-all duration-300">
                        <img src={img} alt={`${cat.category} screen ${ii + 1}`} className="w-full h-auto object-cover" />
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Design System ─────────────────────────────────────────────── */}
      <section id="designsystem" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">DESIGN SYSTEM FOUNDATIONS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Palette, title: "Color System", content: "Red for emergency — unambiguous, impossible to miss. Green for health status and success states. Neutral dark grays for content to keep cognitive load low and ensure the colored elements always stand out." },
              { icon: Code, title: "Typography", content: "Large, bold headings for scanning. Body text sized for phone-distance reading, including by older users. No decorative type choices — every decision was about readability at arm's length." },
              { icon: Zap, title: "Component Library", content: "34 screens built from a shared component library: emergency buttons, provider cards, appointment modules, health record displays. Consistency reduced visual noise and sped up design decisions." },
              { icon: Shield, title: "Accessibility", content: "48px minimum touch targets throughout. High contrast ratios that hold up outdoors in bright sunlight. Iconography chosen to work even without labels for users in a hurry or in distress." },
            ].map(({ icon: Icon, title, content }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 glass-card grain-texture border-blue-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-blue-300 mb-3 albert-sans-medium">{title}</h3>
                      <p className="text-white/80 leading-relaxed jost-secondary">{content}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Impact ────────────────────────────────────────────────────── */}
      <section id="impact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">IMPACT & OUTCOMES</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: "65%", metric: "Faster Dispatch", desc: "Reduction in ambulance booking time through one-tap emergency flow" },
              { value: "78%", metric: "Scheduling Efficiency", desc: "Improvement in home care scheduling from unified coordination" },
              { value: "4.9/5", metric: "Consultation Rating", desc: "Average satisfaction score for elite doctor consultations" },
              { value: "82%", metric: "Booking Speed", desc: "Faster routine appointment scheduling vs previous fragmented approach" },
              { value: "91%", metric: "Prescription Sync", desc: "Success rate for integrated pharmacy orders post-consultation" },
              { value: "+203%", metric: "Provider Growth", desc: "Increase in healthcare provider registrations after platform launch" },
            ].map((r, i) => (
              <motion.div key={r.metric} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -2 }}>
                <Card className="p-6 text-center glass-card grain-texture border-green-500/30 hover:border-green-400/50 transition-all duration-300 h-full">
                  <div className="text-4xl md:text-5xl font-black text-green-400 albert-sans-medium leading-none mb-3">{r.value}</div>
                  <h3 className="text-base font-semibold text-white mb-3 jost-secondary">{r.metric}</h3>
                  <div className="h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-3" />
                  <p className="text-white/65 text-sm leading-relaxed jost-secondary">{r.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. Learnings ─────────────────────────────────────────────────── */}
      <section id="learnings" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">LEARNINGS</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Emergency UX is a different discipline", desc: "Designing for a panicking parent or someone in pain is completely different from designing for a casual user. Every unnecessary decision is a failure. I'll carry that standard into any complex app from here." },
              { title: "Trust has to be visible, not assumed", desc: "Healthcare providers expected users to trust them because they were on the platform. Users didn't. Surfacing credentials, ratings, and availability wasn't a nice-to-have — it was the entire credibility model." },
              { title: "Speed and clarity serve different mental states", desc: "Emergency features needed to be instant. Routine features needed to be clear and complete. Using the same design pattern for both would have broken one of them. Context-specific design is not optional here." },
              { title: "Care continuity is a design problem", desc: "The handoffs between emergency care, hospital, home care, and follow-up broke because nobody designed them as a connected journey. Connecting those dots was as much a design challenge as any single screen." },
            ].map((l, i) => (
              <motion.div key={l.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 glass-card grain-texture border-yellow-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-yellow-300 mb-2 albert-sans-medium">{l.title}</h3>
                      <p className="text-white/80 leading-relaxed jost-secondary">{l.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. What's Next ───────────────────────────────────────────────── */}
      <section id="next" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 albert-sans-medium text-white">WHAT'S NEXT</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Predictive Care Suggestions", desc: "AI-driven follow-up recommendations based on diagnosis and treatment history — so the next appointment gets suggested before the patient thinks to look for it." },
              { title: "Real-Time Hospital Bed Availability", desc: "Direct integration with hospital systems to show actual bed availability during emergencies, not just a list of nearby hospitals." },
              { title: "Mental Health & Elder Care", desc: "Expanding home care to cover mental health support, elder care, and specialized therapy — services that are chronically underserved and have no digital coordination layer today." },
              { title: "Personalized Dashboard", desc: "A dashboard that adapts to usage patterns — surfacing what a particular user actually needs rather than showing the same default layout to everyone." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }}>
                <Card className="p-8 glass-card grain-texture border-purple-500/30 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-purple-300 mb-2 albert-sans-medium">{item.title}</h3>
                      <p className="text-white/80 leading-relaxed jost-secondary">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-900 to-slate-950" />
        <div className="absolute inset-0 grain-texture opacity-25" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold albert-sans-medium bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-xl text-white/75 max-w-2xl mx-auto leading-relaxed jost-secondary">
              Interested in discussing how product design can solve complex healthcare challenges?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <Button size="lg" className="h-12 sm:h-14 px-8 text-base font-semibold bg-gradient-to-r from-red-900 via-red-800 to-red-900 hover:from-red-700 hover:via-red-600 hover:to-red-700 border-0 grain-texture">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-16">
              <a href="/#hero" className="block group">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 hover:scale-105 transition-all duration-300">
                  <img src={LogoImage} alt="Logo" className="w-10 h-10 object-contain" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center hover:border-white/50 hover:scale-105 transition-all duration-300">
                  <img src={linkedinLogo} alt="LinkedIn" className="w-9 h-9 group-hover:scale-110 transition-all duration-300" />
                </div>
              </a>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8" />
          <div className="text-center">
            <p className="text-white/60 text-sm font-light tracking-wider">
              © 2025 Karn Kalaa. Designed & developed with passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LiffoCaseStudy;
