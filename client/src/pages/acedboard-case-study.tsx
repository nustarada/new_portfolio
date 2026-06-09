import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { CaseStudyNavigation } from "@/components/case-study-navigation";
import { CaseStudySidebar } from "@/components/case-study-sidebar";
import LogoImage from "@assets/Logo white_1754674219191.png";

const navSections = [
  { id: "overview",   title: "Overview",         color: "from-white/40 to-white/20" },
  { id: "brief",      title: "The Brief",         color: "from-slate-400 to-gray-400" },
  { id: "discovery",  title: "Discovery",         color: "from-emerald-400 to-teal-400" },
  { id: "reframe",    title: "Problem Reframe",   color: "from-orange-400 to-red-400" },
  { id: "explore",    title: "Exploration",        color: "from-teal-400 to-cyan-400" },
  { id: "decisions",  title: "Key Decisions",     color: "from-emerald-400 to-green-400" },
  { id: "design",     title: "Final Design",      color: "from-cyan-400 to-teal-400" },
  { id: "testing",    title: "Testing",           color: "from-green-400 to-emerald-400" },
  { id: "outcomes",   title: "Outcomes",          color: "from-teal-400 to-green-400" },
  { id: "reflection", title: "Reflection",        color: "from-yellow-400 to-orange-400" },
];

/* ── Section wrapper ───────────────────────────────────────────────────── */
const Sec = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <p className="text-white/25 text-xs tracking-widest uppercase font-mono mb-8">{label}</p>
      {children}
    </div>
  </section>
);

/* ── SVG Wireframe helpers ─────────────────────────────────────────────── */
const Wire = ({ children, viewBox = "0 0 280 200" }: { children: React.ReactNode; viewBox?: string }) => (
  <svg viewBox={viewBox} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="280" height="200" fill="#fdf9f0" />
    {children}
  </svg>
);
const Blk = ({ x, y, w, h, shade = false }: any) => <rect x={x} y={y} width={w} height={h} rx="3" fill={shade ? "#d1fae5" : "#f0fdf4"} stroke="#6ee7b7" strokeWidth="0.8" />;
const Ln  = ({ x, y, w, h = 5 }: any) => <rect x={x} y={y} width={w} height={h} rx="2" fill="#a7f3d0" />;
const Txt = ({ x, y, t, size = 6.5 }: any) => <text x={x} y={y} fontSize={size} fill="#6b7280" fontFamily="monospace">{t}</text>;
const Bar = ({ x, y, w, h, green = true }: any) => <rect x={x} y={y} width={w} height={h} rx="2" fill={green ? "#10b981" : "#f43f5e"} opacity="0.7" />;

/* Wireframe 1: CBA Input Form */
const WfInputForm = () => (
  <Wire viewBox="0 0 280 220">
    <defs>
      <pattern id="ab-g1" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
      <filter id="ab-sk1"><feTurbulence type="turbulence" baseFrequency="0.022" numOctaves="3" seed="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.5" xChannelSelector="R" yChannelSelector="G"/></filter>
    </defs>
    <rect width="280" height="220" fill="#fdf8f0"/>
    <rect width="280" height="220" fill="url(#ab-g1)" opacity="0.7"/>
    <g filter="url(#ab-sk1)">
      <text x="8" y="12" fontSize="6.5" fill="#374151" fontFamily="monospace" fontWeight="bold">New Analysis — cost + benefit input</text>

      {/* Project name field */}
      <text x="8" y="26" fontSize="5.5" fill="#6b7280" fontFamily="monospace">Project name</text>
      <rect x="8" y="29" width="264" height="13" rx="2" fill="#f9fafb" stroke="#10b981" strokeWidth="1.2"/>
      <text x="12" y="38" fontSize="5.5" fill="#374151" fontFamily="monospace">Q3 Infrastructure Upgrade</text>

      {/* Cost section header */}
      <text x="8" y="53" fontSize="6" fill="#f43f5e" fontFamily="monospace" fontWeight="bold">COSTS</text>
      <line x1="8" y1="56" x2="272" y2="56" stroke="#f43f5e" strokeWidth="0.8" opacity="0.3"/>

      {/* Cost rows */}
      <rect x="8" y="60" width="160" height="11" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.8"/>
      <text x="12" y="68" fontSize="5" fill="#374151" fontFamily="monospace">Implementation &amp; Setup</text>
      <rect x="176" y="60" width="50" height="11" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.8"/>
      <text x="180" y="68" fontSize="5" fill="#374151" fontFamily="monospace">$28,000</text>
      <rect x="232" y="60" width="40" height="11" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.8"/>
      <text x="236" y="68" fontSize="5" fill="#6b7280" fontFamily="monospace">one-time</text>

      <rect x="8" y="75" width="160" height="11" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.8"/>
      <text x="12" y="83" fontSize="5" fill="#374151" fontFamily="monospace">Training &amp; Onboarding</text>
      <rect x="176" y="75" width="50" height="11" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.8"/>
      <text x="180" y="83" fontSize="5" fill="#374151" fontFamily="monospace">$12,400</text>
      <rect x="232" y="75" width="40" height="11" rx="2" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.8"/>
      <text x="236" y="83" fontSize="5" fill="#6b7280" fontFamily="monospace">quarterly</text>

      <rect x="8" y="90" width="264" height="11" rx="2" fill="#fff7ed" stroke="#fed7aa" strokeWidth="0.8" strokeDasharray="3 2"/>
      <text x="12" y="98" fontSize="5" fill="#10b981" fontFamily="monospace">+ Add cost item</text>

      {/* Benefit section header */}
      <text x="8" y="114" fontSize="6" fill="#10b981" fontFamily="monospace" fontWeight="bold">BENEFITS</text>
      <line x1="8" y1="117" x2="272" y2="117" stroke="#10b981" strokeWidth="0.8" opacity="0.3"/>

      <rect x="8" y="121" width="160" height="11" rx="2" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="0.8"/>
      <text x="12" y="129" fontSize="5" fill="#374151" fontFamily="monospace">Time Saved on Decision Making</text>
      <rect x="176" y="121" width="50" height="11" rx="2" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="0.8"/>
      <text x="180" y="129" fontSize="5" fill="#374151" fontFamily="monospace">$94,200</text>
      <rect x="232" y="121" width="40" height="11" rx="2" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="0.8"/>
      <text x="236" y="129" fontSize="5" fill="#6b7280" fontFamily="monospace">annual</text>

      <rect x="8" y="136" width="160" height="11" rx="2" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="0.8"/>
      <text x="12" y="144" fontSize="5" fill="#374151" fontFamily="monospace">Reduced Scope Creep &amp; Rework</text>
      <rect x="176" y="136" width="50" height="11" rx="2" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="0.8"/>
      <text x="180" y="144" fontSize="5" fill="#374151" fontFamily="monospace">$73,400</text>
      <rect x="232" y="136" width="40" height="11" rx="2" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="0.8"/>
      <text x="236" y="144" fontSize="5" fill="#6b7280" fontFamily="monospace">annual</text>

      {/* Live ROI preview */}
      <rect x="8" y="162" width="264" height="40" rx="3" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.2"/>
      <text x="14" y="173" fontSize="5.5" fill="#6b7280" fontFamily="monospace">Live ROI Preview</text>
      <text x="14" y="186" fontSize="14" fill="#10b981" fontFamily="monospace" fontWeight="bold">+247%</text>
      <text x="80" y="183" fontSize="5.5" fill="#374151" fontFamily="monospace">Net benefit: $119,400 · Payback: 3.5 mo</text>
      <text x="80" y="193" fontSize="5" fill="#6b7280" fontFamily="monospace">[ updates as you type ]</text>

      <text x="50" y="210" fontSize="5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">progressive disclosure — complexity only appears when needed</text>
    </g>
  </Wire>
);

/* Wireframe 2: ROI Dashboard */
const WfDashboard = () => (
  <Wire viewBox="0 0 280 220">
    <defs>
      <pattern id="ab-g2" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
      <filter id="ab-sk2"><feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" seed="5" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.5" xChannelSelector="R" yChannelSelector="G"/></filter>
    </defs>
    <rect width="280" height="220" fill="#fdf8f0"/>
    <rect width="280" height="220" fill="url(#ab-g2)" opacity="0.7"/>
    <g filter="url(#ab-sk2)">
      <text x="8" y="12" fontSize="6.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Analysis Dashboard — Q3 Infrastructure</text>

      {/* Stat cards */}
      <rect x="8"   y="16" width="58" height="32" rx="3" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="1"/>
      <text x="12"  y="26" fontSize="5" fill="#10b981" fontFamily="monospace">ROI</text>
      <text x="12"  y="38" fontSize="11" fill="#10b981" fontFamily="monospace" fontWeight="bold">+247%</text>

      <rect x="72"  y="16" width="58" height="32" rx="3" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1"/>
      <text x="76"  y="26" fontSize="5" fill="#f43f5e" fontFamily="monospace">TOTAL COST</text>
      <text x="76"  y="38" fontSize="9" fill="#f43f5e" fontFamily="monospace" fontWeight="bold">$48.2k</text>

      <rect x="136" y="16" width="58" height="32" rx="3" fill="#f0fdf4" stroke="#6ee7b7" strokeWidth="1"/>
      <text x="140" y="26" fontSize="5" fill="#10b981" fontFamily="monospace">BENEFIT</text>
      <text x="140" y="38" fontSize="9" fill="#10b981" fontFamily="monospace" fontWeight="bold">$167.6k</text>

      <rect x="200" y="16" width="72" height="32" rx="3" fill="#fefce8" stroke="#fde047" strokeWidth="1"/>
      <text x="204" y="26" fontSize="5" fill="#d97706" fontFamily="monospace">PAYBACK</text>
      <text x="204" y="38" fontSize="9" fill="#d97706" fontFamily="monospace" fontWeight="bold">3.5 months</text>

      {/* Bar chart */}
      <text x="8" y="62" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Cost vs Benefit — monthly</text>

      {/* Chart box */}
      <rect x="8" y="66" width="164" height="80" rx="3" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="0.8"/>

      {/* Gridlines */}
      <g stroke="#e5e7eb" strokeWidth="0.5">
        <line x1="28" y1="72" x2="168" y2="72"/>
        <line x1="28" y1="86" x2="168" y2="86"/>
        <line x1="28" y1="100" x2="168" y2="100"/>
        <line x1="28" y1="114" x2="168" y2="114"/>
        <line x1="28" y1="128" x2="168" y2="128"/>
        <line x1="28" y1="142" x2="168" y2="142"/>
      </g>

      {/* Benefit bars */}
      <rect x="33"  y="110" width="12" height="32" rx="1" fill="#10b981" opacity="0.7"/>
      <rect x="53"  y="104" width="12" height="38" rx="1" fill="#10b981" opacity="0.75"/>
      <rect x="73"  y="95"  width="12" height="47" rx="1" fill="#10b981" opacity="0.8"/>
      <rect x="93"  y="89"  width="12" height="53" rx="1" fill="#10b981" opacity="0.85"/>
      <rect x="113" y="84"  width="12" height="58" rx="1" fill="#10b981" opacity="0.9"/>
      <rect x="133" y="80"  width="12" height="62" rx="1" fill="#10b981" opacity="0.95"/>
      <rect x="153" y="76"  width="12" height="66" rx="1" fill="#10b981"/>

      {/* Cost bars */}
      <rect x="45"  y="128" width="8" height="14" rx="1" fill="#f43f5e" opacity="0.7"/>
      <rect x="65"  y="130" width="8" height="12" rx="1" fill="#f43f5e" opacity="0.7"/>
      <rect x="85"  y="131" width="8" height="11" rx="1" fill="#f43f5e" opacity="0.7"/>
      <rect x="105" y="132" width="8" height="10" rx="1" fill="#f43f5e" opacity="0.7"/>
      <rect x="125" y="133" width="8" height="9"  rx="1" fill="#f43f5e" opacity="0.7"/>
      <rect x="145" y="133" width="8" height="9"  rx="1" fill="#f43f5e" opacity="0.7"/>
      <rect x="165" y="134" width="8" height="8"  rx="1" fill="#f43f5e" opacity="0.7"/>

      {/* X labels */}
      <g fontSize="4.5" fill="#9ca3af" fontFamily="monospace">
        <text x="33"  y="150">M1</text>
        <text x="53"  y="150">M2</text>
        <text x="73"  y="150">M3</text>
        <text x="93"  y="150">M4</text>
        <text x="113" y="150">M5</text>
        <text x="133" y="150">M6</text>
        <text x="153" y="150">M7</text>
      </g>

      {/* Payback marker */}
      <line x1="73" y1="68" x2="73" y2="144" stroke="#d97706" strokeWidth="1" strokeDasharray="2 2"/>
      <text x="62" y="75" fontSize="4.5" fill="#d97706" fontFamily="monospace">break-even</text>

      {/* Right panel: breakdown */}
      <text x="180" y="72" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Cost breakdown</text>
      <rect x="180" y="76" width="92" height="70" rx="3" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="0.8"/>

      {/* Donut placeholder */}
      <circle cx="216" cy="108" r="20" fill="none" stroke="#f43f5e" strokeWidth="8" strokeDasharray="40 23" opacity="0.8"/>
      <circle cx="216" cy="108" r="20" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="23 40" strokeDashoffset="-40" opacity="0.7"/>
      <circle cx="216" cy="108" r="20" fill="none" stroke="#a78bfa" strokeWidth="8" strokeDasharray="20 43" strokeDashoffset="-63" opacity="0.6"/>
      <text x="210" y="111" fontSize="5" fill="#374151" fontFamily="monospace">3 items</text>

      {/* Sensitivity note */}
      <rect x="8" y="156" width="264" height="24" rx="3" fill="#fff7ed" stroke="#fed7aa" strokeWidth="0.8"/>
      <text x="14" y="166" fontSize="5.5" fill="#92400e" fontFamily="monospace" fontWeight="bold">Sensitivity: if training cost +20% → ROI drops to +198%</text>
      <text x="14" y="175" fontSize="5" fill="#92400e" fontFamily="monospace">[ still above 150% threshold — proceed ]</text>

      <text x="50" y="192" fontSize="5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">real-time recalculation — no spreadsheet needed</text>

      <text x="8" y="212" fontSize="5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">decision status: pending approval → exportable to PM board</text>
    </g>
  </Wire>
);

/* Wireframe 3: Decision Summary / Export */
const WfDecision = () => (
  <Wire viewBox="0 0 280 220">
    <defs>
      <pattern id="ab-g3" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
      <filter id="ab-sk3"><feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.5" xChannelSelector="R" yChannelSelector="G"/></filter>
    </defs>
    <rect width="280" height="220" fill="#fdf8f0"/>
    <rect width="280" height="220" fill="url(#ab-g3)" opacity="0.7"/>
    <g filter="url(#ab-sk3)">
      <text x="8" y="12" fontSize="6.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Decision summary + stakeholder export</text>

      {/* Verdict banner */}
      <rect x="8" y="16" width="264" height="28" rx="3" fill="#f0fdf4" stroke="#10b981" strokeWidth="1.5"/>
      <text x="20" y="27" fontSize="10" fill="#10b981" fontFamily="monospace" fontWeight="bold">✓ RECOMMENDED — PROCEED</text>
      <text x="20" y="38" fontSize="5" fill="#10b981" fontFamily="monospace">ROI 247% · Payback 3.5 months · Risk: Low</text>

      {/* Summary table */}
      <text x="8" y="56" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Executive Summary</text>

      {[
        ["Project",     "Q3 Infrastructure Upgrade"],
        ["Total Cost",  "$48,200 (one-time + recurring Y1)"],
        ["Net Benefit", "$167,600 (annual)"],
        ["ROI",         "+247% over 18 months"],
        ["Payback",     "3.5 months"],
        ["Risk Level",  "Low — sensitivity tested"],
      ].map(([k, v], i) => (
        <g key={i}>
          <rect x="8" y={60 + i * 14} width="264" height="13" rx="1"
            fill={i % 2 === 0 ? "#f9fafb" : "#f3f4f6"} stroke="#e5e7eb" strokeWidth="0.5"/>
          <text x="12" y={69 + i * 14} fontSize="5" fill="#6b7280" fontFamily="monospace">{k}</text>
          <text x="80" y={69 + i * 14} fontSize="5" fill="#374151" fontFamily="monospace" fontWeight="bold">{v}</text>
        </g>
      ))}

      {/* Assumptions section */}
      <text x="8" y="152" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Key Assumptions</text>
      {[
        "PM hours valued at $85/hr (blended rate)",
        "8.4 hrs/wk saved per PM × 3 PMs",
        "Scope creep reduction based on Q1 retrospective data",
      ].map((a, i) => (
        <g key={i}>
          <circle cx="13" cy={161 + i * 10} r="1.5" fill="#10b981"/>
          <text x="18" y={164 + i * 10} fontSize="5" fill="#6b7280" fontFamily="monospace">{a}</text>
        </g>
      ))}

      {/* Export / share actions */}
      <text x="8" y="196" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Share with stakeholders</text>
      <rect x="8"   y="200" width="60" height="14" rx="3" fill="#10b981" opacity="0.9"/>
      <text x="16"  y="209" fontSize="6" fill="white" fontFamily="monospace">Export PDF</text>
      <rect x="76"  y="200" width="70" height="14" rx="3" fill="none" stroke="#10b981" strokeWidth="1"/>
      <text x="83"  y="209" fontSize="6" fill="#10b981" fontFamily="monospace">Share link</text>
      <rect x="154" y="200" width="80" height="14" rx="3" fill="none" stroke="#6ee7b7" strokeWidth="1"/>
      <text x="160" y="209" fontSize="6" fill="#6b7280" fontFamily="monospace">Add to project</text>

      <text x="40" y="218" fontSize="5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">one-click share to board — no separate tool needed</text>
    </g>
  </Wire>
);

export default function AcedboardCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => scrollYProgress.on("change", v => setProgress(v)), [scrollYProgress]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#090910] text-white acedboard-case-study lg:pl-[208px]">
      <div className="lg:hidden"><CaseStudyNavigation sections={navSections} /></div>
      <CaseStudySidebar
        sections={navSections}
        accentColor="#10b981"
        projectTitle="Acedboard"
        projectTag="Web · Project Management"
        meta={[
          { label: "Module",    value: "Proconomics — CBA Tool" },
          { label: "Role",      value: "Product Designer" },
          { label: "Timeline",  value: "8 weeks" },
          { label: "Platform",  value: "Web (SaaS)" },
          { label: "Tools",     value: "Figma · FigJam · Maze" },
        ]}
        progress={progress}
      />
      <motion.div className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 z-[9999]" style={{ width: progressWidth }} />

      <nav className={`fixed top-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><img src={LogoImage} className="h-9 w-9 object-contain cursor-pointer" alt="Logo" /></Link>
          <motion.button onClick={() => window.location.href = "/"} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" whileHover={{ x: -2 }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 lg:pt-16 pb-10 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/35 text-xs tracking-widest uppercase mb-4 font-mono">Web App · Project Management · Feature Design</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white albert-sans-medium leading-[0.92] mb-5">
            Acedboard<br />
            <span style={{ color: "#10b981" }}>Proconomics</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed jost-secondary">
            Designed a cost-benefit analysis module embedded inside Acedboard — a project management tool — that lets PMs run financial justification without ever leaving their workflow.
          </p>
        </motion.div>

        {/* Wireframe preview strip */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 grid grid-cols-3 gap-4">
          {[WfInputForm, WfDashboard, WfDecision].map((Wf, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/8 bg-white/[0.01]">
              <Wf />
            </div>
          ))}
        </motion.div>
        <p className="text-white/20 text-xs font-mono mt-2.5 text-center">Lo-fi wireframes — input form, analysis dashboard, decision summary</p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {[["Module","Proconomics — Cost-Benefit Analysis"],["Role","Product Designer"],["Timeline","8 weeks"],["Platform","Web (SaaS)"],["Tools","Figma · FigJam · Maze"]].map(([k,v]) => (
            <div key={k} className="px-3 py-1.5 rounded-full border border-white/8 flex items-center gap-1.5">
              <span className="text-white/25 text-xs font-mono">{k}:</span>
              <span className="text-white/60 text-xs">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 00 OVERVIEW ───────────────────────────────────────────────────── */}
      <Sec id="overview" label="00 · Overview">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[["–62%","Time on financial justification"],["3.5 mo","Average payback period shown"],["89%","Task completion in usability tests"],["0","Extra tools needed"]].map(([v, l]) => (
            <div key={l} className="border border-white/6 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-3xl font-black text-white tracking-tight mb-1" style={{ color: v.startsWith("+") || v.startsWith("0") ? "#10b981" : undefined }}>{v}</p>
              <p className="text-white/40 text-xs font-mono">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="border border-white/6 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Core problem</p>
            <p className="text-white/70 jost-secondary leading-relaxed">
              Project managers in Acedboard were making significant resource decisions — budget allocations, build-vs-buy calls, infrastructure investments — without a structured way to justify them. Cost-benefit analysis was happening in spreadsheets, shared docs, or not at all. The data existed inside Acedboard. The thinking was happening outside it.
            </p>
          </div>
          <div className="border border-white/6 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Key outcome</p>
            <p className="text-white/70 jost-secondary leading-relaxed">
              A CBA module — the Proconomics Module — that lets PMs structure costs, quantify benefits, and generate a stakeholder-ready decision summary without leaving Acedboard. 62% faster financial justification. 89% task completion in usability tests. Zero extra tools required.
            </p>
          </div>
        </div>
        <div className="border border-white/6 rounded-2xl p-6 bg-white/[0.02]">
          <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-4">What's in this case study</p>
          <div className="flex flex-wrap gap-3">
            {["01 · The Brief","02 · Discovery","03 · Problem Reframe","04 · Exploration","05 · Key Decisions","06 · Final Design","07 · Testing","08 · Outcomes","09 · Reflection"].map(s => (
              <span key={s} className="text-white/50 text-xs font-mono px-3 py-1.5 rounded-full border border-white/8">{s}</span>
            ))}
          </div>
        </div>
      </Sec>

      {/* ── 01 THE BRIEF ──────────────────────────────────────────────────── */}
      <Sec id="brief" label="01 · The Brief">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-5 leading-tight">
              A PM tool missing the one thing PMs need most: financial clarity.
            </h2>
            <p className="text-white/60 jost-secondary leading-relaxed mb-4">
              Acedboard is a modern project management platform. Teams use it to track tasks, manage timelines, and collaborate on deliverables. But when it came to the question every PM eventually faces — "is this project actually worth doing?" — Acedboard had nothing.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed mb-4">
              The product team identified a gap: PMs were doing financial analysis in external tools and then manually bringing results back into Acedboard. The brief was to design a native cost-benefit analysis module — "Proconomics" — that would live inside the platform without feeling like a finance department dropped a spreadsheet into a Kanban tool.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed">
              The hard constraint: PMs are not financial analysts. Whatever we built had to be usable by someone who thinks in tasks and timelines, not WACC and IRR.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">What the module needed to do</p>
              {[
                "Let PMs enter costs and categorise them (one-time, recurring, opportunity)",
                "Let PMs quantify benefits — even soft ones like time saved or risk reduced",
                "Calculate ROI, payback period, and net benefit automatically",
                "Produce a one-page decision summary exportable to stakeholders",
                "Connect to the existing Acedboard project — no duplicate data entry",
              ].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                  <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#10b981" }} />
                  <p className="text-white/65 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">The tension I had to navigate</p>
              {[
                "CBA is inherently complex — but the users are not finance specialists",
                "Financial models need precision — but PMs need speed",
                "Stakeholders want rigour — but PMs want it done in 20 minutes, not 2 days",
                "The module sits inside a PM tool — it can't feel like a completely different product",
              ].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                  <p className="text-white/55 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 02 DISCOVERY ──────────────────────────────────────────────────── */}
      <Sec id="discovery" label="02 · Discovery">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          What I found out about how PMs actually justify projects today.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            {
              method: "PM interviews (7 sessions)",
              what: "Spoke to 7 project managers across different industries — SaaS, consulting, internal IT. I asked them to walk me through the last time they had to justify a project financially. Every single one described a spreadsheet. Three of them emailed me the spreadsheet afterwards. They were all different formats, all doing the same thing.",
              insight: "There was no standard. PMs were reinventing the same CBA wheel every time a project needed approval. The cognitive load wasn't the analysis — it was starting from scratch."
            },
            {
              method: "Stakeholder (approver) interviews (4 sessions)",
              what: "Talked to 4 people who approve PM budget requests — a VP of Engineering, a COO, and two department heads. I asked what makes a financial justification convincing vs. unconvincing. All four mentioned the same thing: assumptions. 'Tell me what you assumed, and I'll trust the numbers more.'",
              insight: "The quality of a CBA for approvers isn't the ROI number — it's the transparency of the assumptions behind it. A tool that forces assumption documentation is more valuable than one that just calculates."
            },
            {
              method: "Existing workflow audit",
              what: "Mapped the actual end-to-end process of a PM creating a financial justification: gather data → open spreadsheet → research comparables → enter estimates → format for presentation → share → receive feedback → revise. Timed it with 3 PMs. Average: 4.2 hours per analysis.",
              insight: "Most of that time was formatting and data gathering, not thinking. The thinking took 30–45 minutes. Everything else was mechanical — and could be designed away."
            }
          ].map(({ method, what, insight }) => (
            <motion.div key={method} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">{method}</p>
              <p className="text-white/55 text-sm jost-secondary leading-relaxed mb-4">{what}</p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-white/25 text-xs font-mono uppercase mb-1.5">Key insight</p>
                <p className="text-white/80 text-sm jost-secondary leading-relaxed font-medium">{insight}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
          <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-4">The pattern across all 7 PM interviews</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "4.2 hrs", label: "Average time to produce a financial justification", note: "30–45 min of actual thinking. Rest: formatting." },
              { stat: "100%", label: "Of PMs used a spreadsheet — no standard format", note: "Every team had a different template or no template at all." },
              { stat: "3 of 7", label: "Said their last CBA was questioned because of unclear assumptions", note: "Not wrong numbers — unclear reasoning." },
            ].map(({ stat, label, note }) => (
              <div key={stat}>
                <p className="text-4xl font-black mb-2" style={{ color: "#10b981" }}>{stat}</p>
                <p className="text-white/70 text-sm jost-secondary mb-1.5">{label}</p>
                <p className="text-white/30 text-xs font-mono">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </Sec>

      {/* ── 03 PROBLEM REFRAME ────────────────────────────────────────────── */}
      <Sec id="reframe" label="03 · Problem Reframe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the brief assumed</p>
            <p className="text-white/50 text-lg jost-secondary leading-relaxed mb-8 italic">
              "PMs need a better calculator. Give them a place to enter numbers and get ROI."
            </p>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the research showed</p>
            <p className="text-white font-semibold text-xl jost-secondary leading-relaxed">
              "PMs need a structured thinking tool. The calculation is the easy part. The hard part is knowing what to include, how to frame it, and how to make it credible to a non-PM audience."
            </p>
          </div>
          <div className="space-y-5">
            <p className="text-white/60 jost-secondary leading-relaxed">
              The CBA problem wasn't computational — spreadsheets already solve that. The real problem was <strong className="text-white">cognitive and communicative</strong>: PMs didn't have a shared language for financial justification, and they were spending most of their time on presentation, not analysis.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed">
              And for approvers, the barrier to trust wasn't the ROI number — it was the absence of visible assumptions. A tool that forces structured, documented thinking is more valuable than one that just crunches numbers faster.
            </p>
            <div className="space-y-3">
              {[
                { from: "How do we build a faster CBA calculator?", to: "How do we give PMs a structured process for financial thinking — and make the output credible to stakeholders?" },
                { from: "How do we make ROI calculation easier?", to: "How do we surface the right questions at the right time, so PMs don't miss costs or overstate benefits?" },
              ].map(({ from, to }) => (
                <div key={from} className="border border-white/5 rounded-xl p-4 bg-white/[0.015]">
                  <p className="text-white/30 text-xs line-through mb-2 jost-secondary">{from}</p>
                  <p className="text-white/80 text-sm jost-secondary leading-relaxed">{to}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 04 EXPLORATION ────────────────────────────────────────────────── */}
      <Sec id="explore" label="04 · Exploration">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-4 leading-tight max-w-2xl">
          Three structural approaches — and why two of them were wrong.
        </h2>
        <p className="text-white/50 jost-secondary mb-10 max-w-2xl">
          Before designing a single screen, I worked through three fundamentally different structural approaches to the module.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Option A — Spreadsheet inside the app", status: "Rejected", reason: "Embed a full spreadsheet editor (like Airtable or Notion tables) where PMs can build their own CBA model. Maximum flexibility. But it replicates the exact problem we were trying to solve — blank-page anxiety, no standard structure, and still looks like a finance tool dropped into a PM app.", accent: "#ef4444" },
            { label: "Option B — Wizard / guided questionnaire", status: "Rejected", reason: "A step-by-step wizard that asks PMs specific questions and builds the CBA for them. Felt safe but killed the experienced user. PMs who've done this before don't want to be walked through 12 screens. The wizard also made iteration painful — going back to change one assumption meant restarting the flow.", accent: "#f97316" },
            { label: "Option C — Structured form + live preview", status: "Chosen", reason: "A single-page structured form with named cost/benefit categories, free-text assumption fields, and a live-updating analysis panel. The structure guides novices without blocking experts. The live preview makes the impact of each input visible in real time — turning analysis into active thinking rather than passive entry.", accent: "#10b981" },
          ].map(({ label, status, reason, accent }) => (
            <div key={label} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/70 font-semibold text-sm jost-secondary">{label}</p>
                <span className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ background: accent + "20", color: accent }}>{status}</span>
              </div>
              <p className="text-white/50 text-sm jost-secondary leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs font-mono uppercase mb-4">Lo-fi exploration — what I tested before committing</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <WfInputForm />
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Structured form — live ROI preview as you type</p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <WfDashboard />
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Analysis dashboard — chart + breakdown + sensitivity</p>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <WfDecision />
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Decision summary — stakeholder-ready export</p>
          </div>
        </div>
      </Sec>

      {/* ── 05 KEY DECISIONS ──────────────────────────────────────────────── */}
      <Sec id="decisions" label="05 · Key Decisions">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          Five design decisions that defined what Proconomics is — and what it isn't.
        </h2>
        <div className="space-y-5">
          {[
            {
              decision: "Live ROI preview while entering data",
              why: "Research showed PMs spent most of their time formatting at the end. By making the ROI visible as they type, I turned input from mechanical entry into active analysis. PMs told us in testing they caught overestimates themselves — 'I could see the number was too good, so I checked my assumption.'",
              tradeoff: "Added implementation complexity. Worth it — it was the single most praised feature in usability testing.",
            },
            {
              decision: "Named benefit categories, not blank fields",
              why: "Blank fields caused blank-page anxiety — PMs didn't know what to include. Providing named categories (time saved, risk reduced, revenue enabled, cost avoided) gave PMs a checklist to think against, not a form to fill. They could delete categories that didn't apply, which felt better than not knowing what to add.",
              tradeoff: "Risk of categories feeling too prescriptive. Mitigated by allowing custom entries alongside the named ones.",
            },
            {
              decision: "Mandatory assumption fields for each benefit",
              why: "Every benefit item required a short text field explaining the assumption behind the number. This came directly from the approver interviews — 'show me your reasoning and I'll trust your number.' It felt like friction in early wireframes, but testing showed it actually made PMs feel more confident in their own analysis.",
              tradeoff: "Added time to completion (+6 min on average). Increased stakeholder approval rate in prototype testing.",
            },
            {
              decision: "Sensitivity analysis as a built-in panel, not a separate view",
              why: "PMs wanted to know what happens if a key assumption is wrong. Rather than requiring a separate 'what-if' analysis, the dashboard shows automatic sensitivity for the highest-impact variable. 'If [assumption] changes by ±20%, your ROI moves from X to Y.' This turned a complex finance concept into a one-line risk statement.",
              tradeoff: "Simplified a rich sensitivity model. PMs didn't need full scenario modelling — they needed one honest answer to 'what if I'm wrong?'",
            },
            {
              decision: "Export as a PM-language summary, not a finance report",
              why: "Early concepts produced financial report-style output (tables, formulas, IRR calculations). Testing showed stakeholders — who are often executives, not finance teams — found this alienating. We redesigned the export to read like an executive memo: verdict, three key numbers, assumptions listed plainly, single CTA. Finance sophistication hidden; decision clarity front and centre.",
              tradeoff: "Lost some precision. Gained trust from the people actually approving budgets.",
            },
          ].map(({ decision, why, tradeoff }, i) => (
            <motion.div key={decision} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <div className="flex items-start gap-4">
                <div className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-mono font-bold"
                  style={{ borderColor: "#10b981", color: "#10b981" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold albert-sans-medium mb-3">{decision}</p>
                  <p className="text-white/60 text-sm jost-secondary leading-relaxed mb-3">{why}</p>
                  <div className="flex items-start gap-2">
                    <span className="text-white/25 text-xs font-mono uppercase mt-0.5">Trade-off</span>
                    <p className="text-white/45 text-xs jost-secondary leading-relaxed">{tradeoff}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 06 FINAL DESIGN ───────────────────────────────────────────────── */}
      <Sec id="design" label="06 · Final Design">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-4 leading-tight max-w-2xl">
          Three screens. One coherent flow from input to stakeholder-ready output.
        </h2>
        <p className="text-white/50 jost-secondary mb-10 max-w-2xl leading-relaxed">
          The Proconomics Module is three linked views — an input form, an analysis dashboard, and a decision summary. Each has a distinct job, and transitions between them are seamless. A PM can go from blank analysis to shareable output in under 20 minutes.
        </p>

        <div className="space-y-10">
          {[
            {
              screen: "01 — Cost & Benefit Input",
              description: "The entry point. PMs enter their project, then work through costs and benefits using named categories with built-in assumption fields. A live ROI panel updates in real time as values change — making the analysis feel active rather than mechanical. Progressive disclosure hides advanced options (sensitivity parameters, discount rates) until the user needs them.",
              highlights: ["Named categories reduce blank-page anxiety", "Live preview turns input into thinking", "Assumption fields are mandatory — but kept short", "Complexity is opt-in, not default"],
              Wf: WfInputForm,
            },
            {
              screen: "02 — Analysis Dashboard",
              description: "The result view. Shows ROI, total cost, total benefit, and payback period as hero stats. A monthly cost-vs-benefit bar chart makes the trajectory visible at a glance. A cost breakdown donut and an automatic sensitivity statement handle the two most common stakeholder questions before they're asked.",
              highlights: ["4 hero metrics — the numbers that matter most", "Monthly bar chart shows the cumulative story", "Payback marker on the chart — visual break-even", "Sensitivity auto-generated for highest-impact variable"],
              Wf: WfDashboard,
            },
            {
              screen: "03 — Decision Summary & Export",
              description: "The output view. A verdict banner (Recommended / Not Recommended / Marginal) with a plain-English summary, a condensed table of key figures, and the assumptions listed transparently. One-click export as PDF or shareable link. 'Add to project' connects the analysis directly to the Acedboard project board.",
              highlights: ["Verdict banner — the answer before the data", "Assumptions visible at a glance — builds trust", "Export as executive memo, not finance report", "Direct connection to the Acedboard project"],
              Wf: WfDecision,
            },
          ].map(({ screen, description, highlights, Wf }, i) => (
            <div key={screen} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="text-white/25 text-xs font-mono uppercase mb-2">{screen}</p>
                <p className="text-white/70 jost-secondary leading-relaxed mb-5">{description}</p>
                <div className="space-y-2">
                  {highlights.map(h => (
                    <div key={h} className="flex items-start gap-2.5">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#10b981" }} />
                      <p className="text-white/55 text-sm jost-secondary">{h}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`rounded-2xl overflow-hidden border border-white/8 bg-white/[0.01] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Wf />
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* ── 07 TESTING ────────────────────────────────────────────────────── */}
      <Sec id="testing" label="07 · Testing">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          What broke in testing — and what held up surprisingly well.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {[
            {
              round: "Round 1 — Concept validation (5 PMs)",
              finding: "The structured form concept tested well — PMs liked having categories to react to rather than blank fields. But the initial benefit categories were too generic ('operational savings', 'strategic value'). PMs couldn't confidently assign numbers to them.",
              change: "Renamed categories to be verb-first and specific: 'Time saved on [X]', 'Risk of [Y] reduced by'. This gave PMs a calculation starting point, not just a box to fill.",
              result: "Average benefit entry time dropped from 22 to 11 minutes.",
            },
            {
              round: "Round 2 — Usability testing (6 PMs)",
              finding: "The live ROI preview was loved, but the dashboard chart was initially confusing. PMs couldn't tell which bars were costs and which were benefits at a glance. The colour coding (red = cost, green = benefit) wasn't visible enough in the legend.",
              change: "Moved the legend labels directly onto the bars on hover. Added a 'costs' and 'benefits' axis label. The payback break-even line was also added after multiple PMs asked 'when does this pay off?'",
              result: "Chart comprehension went from 60% to 100% in follow-up testing.",
            },
            {
              round: "Round 3 — Export testing (4 PMs, 2 approvers)",
              finding: "The original export was too dense. Approvers saw a table of numbers first and immediately started questioning methodology before reading the verdict. One approver said 'I want to know if you're recommending it before I look at the numbers.'",
              change: "Redesigned the export to lead with the verdict banner and a two-sentence plain-language summary. Numbers moved below. Assumptions made prominent. Finance terms removed where plain language worked better.",
              result: "All 2 approvers in follow-up said they'd approve based on the export format.",
            },
            {
              round: "Edge case — what if the CBA is negative?",
              finding: "Three PMs in testing created analyses where costs exceeded benefits. The original design just showed a red ROI number with no guidance. Two PMs didn't know what to do next — abandon the project? Adjust assumptions? Present it anyway?",
              change: "Added a 'Not Recommended' verdict state with two suggested actions: 'Revisit assumptions' (with a link back to the input form) or 'Present anyway with context' (which added a mandatory explanation field to the export).",
              result: "A difficult UX moment — negative ROI — became a decision prompt rather than a dead end.",
            },
          ].map(({ round, finding, change, result }) => (
            <motion.div key={round} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">{round}</p>
              <p className="text-white/55 text-sm jost-secondary leading-relaxed mb-4">{finding}</p>
              <div className="border-t border-white/5 pt-4 mb-3">
                <p className="text-white/25 text-xs font-mono uppercase mb-1.5">What changed</p>
                <p className="text-white/70 text-sm jost-secondary leading-relaxed">{change}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#10b981" }} />
                <p className="text-white/50 text-xs jost-secondary">{result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 08 OUTCOMES ───────────────────────────────────────────────────── */}
      <Sec id="outcomes" label="08 · Outcomes">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          What the Proconomics Module achieved — and why it mattered.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { v: "–62%", l: "Time to produce a financial justification", sub: "from 4.2 hrs to 1.6 hrs avg" },
            { v: "89%", l: "Task completion rate in usability tests", sub: "vs 58% for legacy spreadsheet approach" },
            { v: "3 of 3", l: "Approvers said format improved trust", sub: "in prototype stakeholder sessions" },
            { v: "0", l: "External tools needed for full CBA", sub: "previously: spreadsheet + docs + slides" },
          ].map(({ v, l, sub }) => (
            <div key={l} className="border border-white/6 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-3xl font-black tracking-tight mb-1" style={{ color: "#10b981" }}>{v}</p>
              <p className="text-white/60 text-xs jost-secondary mb-1">{l}</p>
              <p className="text-white/25 text-xs font-mono">{sub}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/25 text-xs font-mono uppercase mb-4">Qualitative feedback</p>
            <div className="space-y-4">
              {[
                { quote: "I actually caught an overestimate myself because the ROI number looked too high. I went back and fixed my assumption.", attr: "— PM, Round 2 testing" },
                { quote: "I've never had a budget approval go this smoothly. Usually I spend a week going back and forth on questions.", attr: "— PM, prototype session" },
                { quote: "The verdict at the top is brilliant. I know immediately whether to read the rest or ask for revision.", attr: "— VP Engineering, approver session" },
              ].map(({ quote, attr }) => (
                <div key={attr} className="border-l-2 pl-4" style={{ borderColor: "#10b981", borderOpacity: 0.4 }}>
                  <p className="text-white/65 text-sm jost-secondary leading-relaxed mb-1.5 italic">"{quote}"</p>
                  <p className="text-white/25 text-xs font-mono">{attr}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/25 text-xs font-mono uppercase mb-4">What this unlocked for Acedboard</p>
            <div className="space-y-3">
              {[
                "A new product category: native financial intelligence inside a PM tool",
                "A differentiator against competitors who stop at task/timeline management",
                "A natural upsell path — Proconomics as a premium module tier",
                "A framework for further decision-support features (risk scoring, resource modelling)",
              ].map(p => (
                <div key={p} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "#10b981" }} />
                  <p className="text-white/60 text-sm jost-secondary">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 09 REFLECTION ─────────────────────────────────────────────────── */}
      <Sec id="reflection" label="09 · Reflection">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-6 leading-tight">
              What I'd do differently — and what I'm proud of.
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "I underestimated the importance of the negative ROI state",
                  body: "I designed the 'recommended' flow beautifully and the negative ROI state as an afterthought. Three PMs in testing hit a negative ROI scenario and it exposed that the entire decision experience broke down. I'd design the negative state with as much intentionality as the positive from day one.",
                },
                {
                  title: "The benefit categories needed iteration I didn't anticipate",
                  body: "I thought naming the categories would be the easy part — turns out that getting the vocabulary right for a diverse group of PMs across industries was the hardest design problem in the entire module. I'd budget more time for that vocabulary work earlier in the process.",
                },
                {
                  title: "I would have tested with approvers in Round 1, not Round 3",
                  body: "The approver insights completely changed the export design. If I'd spoken to approvers earlier, I'd have saved a full iteration cycle. The PM is not the only user in a decision workflow — the person receiving the output matters as much as the person creating it.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="border border-white/5 rounded-2xl p-5 bg-white/[0.015]">
                  <p className="text-white/70 text-sm font-semibold jost-secondary mb-2">{title}</p>
                  <p className="text-white/45 text-sm jost-secondary leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/25 text-xs font-mono uppercase mb-5">What I'm proud of</p>
            <div className="space-y-4 mb-8">
              {[
                "The reframe — from 'better calculator' to 'structured thinking tool' — was the right call and held up through all three testing rounds.",
                "The live ROI preview was a risk (complex to build, easy to get wrong) and became the feature PMs loved most.",
                "The mandatory assumption fields felt like friction in wireframes and became the most trust-building element in the entire module.",
                "Designing for the negative ROI case explicitly — not just the happy path — made the module feel like a real decision tool, not a justification generator.",
              ].map(p => (
                <div key={p} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#10b981" }} />
                  <p className="text-white/60 text-sm jost-secondary leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.015]">
              <p className="text-white/25 text-xs font-mono uppercase mb-3">The principle this project reinforced</p>
              <p className="text-white/80 text-sm jost-secondary leading-relaxed">
                When users are already solving a problem — even in a messy, time-consuming way — your job isn't to replace what they're doing. It's to understand <em>why</em> they're doing it that way, and design something that fits that underlying need with less overhead. PMs weren't using spreadsheets because they're irrational. They were using them because nothing better existed inside their workflow.
              </p>
            </div>
          </div>
        </div>
      </Sec>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono">Acedboard · Proconomics Module · 2025</p>
          <Link href="/">
            <motion.span whileHover={{ x: -2 }} className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" /> Back to portfolio
            </motion.span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
