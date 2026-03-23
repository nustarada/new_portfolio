import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
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

const navSections = [
  { id: "overview",   title: "Overview",          color: "from-white/40 to-white/20" },
  { id: "brief",      title: "The Brief",        color: "from-slate-400 to-gray-400" },
  { id: "discovery",  title: "Discovery",         color: "from-purple-400 to-pink-400" },
  { id: "reframe",    title: "Problem Reframe",   color: "from-orange-400 to-red-400" },
  { id: "explore",    title: "Exploration",        color: "from-slate-400 to-blue-400" },
  { id: "decisions",  title: "Key Decisions",     color: "from-red-400 to-orange-400" },
  { id: "design",     title: "Final Design",      color: "from-cyan-400 to-blue-400" },
  { id: "testing",    title: "Testing",           color: "from-green-400 to-teal-400" },
  { id: "outcomes",   title: "Outcomes",          color: "from-teal-400 to-green-400" },
  { id: "reflection", title: "Reflection",        color: "from-yellow-400 to-orange-400" },
];

/* ── SVG wireframe helpers ─────────────────────────────────────────────── */
const Wire = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 200 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="360" fill="#f8f8f7" />
    <rect x="8" y="4" width="184" height="352" rx="18" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
    <rect x="72" y="4" width="56" height="12" rx="6" fill="#e2e8f0" />
    <rect x="14" y="16" width="172" height="332" rx="12" fill="#f8fafc" />
    {children}
  </svg>
);
const Blk = ({ x, y, w, h, shade = false }: any) => <rect x={x} y={y} width={w} height={h} rx="3" fill={shade ? "#e2e8f0" : "#f1f5f9"} stroke="#cbd5e1" strokeWidth="0.8" />;
const Ln  = ({ x, y, w, h = 5 }: any)          => <rect x={x} y={y} width={w} height={h} rx="2" fill="#cbd5e1" />;
const Xbox= ({ x, y, w, h }: any)               => <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 2" /><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth="0.7" /><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth="0.7" /></g>;
const Txt = ({ x, y, t, size = 7 }: any)        => <text x={x} y={y} fontSize={size} fill="#94a3b8" fontFamily="monospace">{t}</text>;

const WfDashboard = () => (
  <Wire>
    <Ln x={20} y={28} w={45}/><Ln x={148} y={28} w={38}/>
    <Ln x={20} y={41} w={70}/><Ln x={20} y={51} w={100} h={7}/>
    <rect x="20" y="64" width="160" height="52" rx="5" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.2"/>
    <rect x="30" y="74" width="20" height="20" rx="10" fill="#fca5a5" stroke="#94a3b8" strokeWidth="0.8"/>
    <Ln x={56} y={79} w={80} h={7}/><Ln x={56} y={91} w={55}/>
    <Txt x={60} y={128} t="[ emergency — above fold, always ]" size={6}/>
    <Ln x={20} y={136} w={80}/>
    {[0,1,2,3].map(i=><Blk key={i} x={20+i*40} y={143} w={36} h={36} shade/>)}
    <Blk x={20} y={192} w={160} h={44}/>
    <Ln x={28} y={202} w={55}/><Ln x={28} y={212} w={90}/><Ln x={28} y={222} w={70}/>
    <Ln x={20} y={248} w={70}/>
    {[0,1].map(i=><g key={i}><Blk x={20} y={256+i*24} w={160} h={19}/><Blk x={24} y={259+i*24} w={20} h={12} shade/><Ln x={50} y={263+i*24} w={80}/></g>)}
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1"/>
    {[0,1,2,3,4].map(i=><Blk key={i} x={22+i*34} y={320} w={22} h={16} shade={i===0}/>)}
  </Wire>
);
const WfEmergency = () => (
  <Wire>
    <Blk x={20} y={26} w={16} h={13} shade/><Ln x={42} y={30} w={80}/>
    <Xbox x={20} y={46} w={160} h={88}/>
    <Txt x={100} y={108} t="[ map ]" size={7}/>
    <circle cx="100" cy="75" r="6" fill="none" stroke="#64748b" strokeWidth="1.5"/>
    <line x1="100" y1="81" x2="100" y2="90" stroke="#64748b" strokeWidth="1.5"/>
    <rect x="20" y="142" width="160" height="44" rx="5" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.2"/>
    <Txt x={70} y={162} t="DISPATCH AMBULANCE" size={8}/>
    <Txt x={65} y={174} t="[ one tap — GPS auto-filled ]" size={6}/>
    <Ln x={20} y={198} w={90}/>
    {[0,1,2].map(i=><g key={i}><Blk x={20} y={206+i*27} w={160} h={22}/><Xbox x={24} y={209+i*27} w={28} h={15}/><Ln x={58} y={213+i*27} w={70}/><Ln x={58} y={221+i*27} w={45}/><Blk x={150} y={210+i*27} w={26} h={13} shade/></g>)}
    <Txt x={55} y={292} t="[ sorted by ETA, not distance ]" size={6}/>
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1"/>
    {[0,1,2,3,4].map(i=><Blk key={i} x={22+i*34} y={320} w={22} h={16}/>)}
  </Wire>
);
const WfDoctor = () => (
  <Wire>
    <Blk x={20} y={26} w={16} h={13} shade/><Ln x={42} y={30} w={80}/>
    <Blk x={20} y={46} w={160} h={24}/><Blk x={25} y={51} w={14} h={13} shade/><Ln x={45} y={56} w={80}/>
    {["All","Cardio","Neuro","ENT"].map((l,i)=><g key={l}><rect x={20+i*44} y={78} width={l.length*6+10} height={15} rx={7} fill={i===0?"#e2e8f0":"#f8fafc"} stroke="#cbd5e1" strokeWidth={i===0?1.3:0.8}/><Txt x={25+i*44} y={89} t={l} size={6}/></g>)}
    {[0,1,2,3].map(i=><g key={i}><Blk x={20} y={100+i*50} w={160} h={44}/><circle cx={40} cy={122+i*50} r={14} fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8"/><Ln x={62} y={110+i*50} w={75}/><Ln x={62} y={120+i*50} w={55}/><Txt x={62} y={134+i*50} t="★★★★☆" size={7}/><Blk x={152} y={106+i*50} w={24} h={13} shade/></g>)}
    <Txt x={42} y={314} t="[ credibility visible before tapping ]" size={6}/>
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1"/>
    {[0,1,2,3,4].map(i=><Blk key={i} x={22+i*34} y={320} w={22} h={16}/>)}
  </Wire>
);

/* ── Section wrapper ───────────────────────────────────────────────────── */
const Sec = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <p className="text-white/25 text-xs tracking-widest uppercase font-mono mb-8">{label}</p>
      {children}
    </div>
  </section>
);

const Img = ({ src, alt = "" }: { src: string; alt?: string }) => (
  <motion.div whileHover={{ y: -6, scale: 1.03 }} transition={{ duration: 0.2 }} className="rounded-xl overflow-hidden border border-white/10">
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
  </motion.div>
);

export default function LiffoCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#090910] text-white liffo-case-study">
      <CaseStudyNavigation sections={navSections} />
      <motion.div className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-400 z-[9999]" style={{ width: progressWidth }} />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><img src={LogoImage} className="h-9 w-9 object-contain cursor-pointer" alt="Logo" /></Link>
          <motion.button onClick={() => window.location.href = "/"} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" whileHover={{ x: -2 }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-10 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/35 text-xs tracking-widest uppercase mb-4 font-mono">Mobile App · Healthcare · End-to-end Design</p>
          <h1 className="text-6xl sm:text-7xl font-black text-white albert-sans-medium leading-[0.92] mb-5">Liffo</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed jost-secondary">
            Designed the complete mobile experience for an emergency-first healthcare platform — from the first wireframe to 34 production-ready screens across 6 flows.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 grid grid-cols-5 gap-2.5">
          {[Screen11, Screen4, Screen16, Screen22, Screen25].map((src, i) => <Img key={i} src={src} />)}
        </motion.div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {[["Role","Lead Product Designer"],["Timeline","13 weeks"],["Screens","34 across 6 flows"],["Platform","iOS / Android"],["Tools","Figma · FigJam · Maze"]].map(([k,v]) => (
            <div key={k} className="px-3 py-1.5 rounded-full border border-white/8 flex items-center gap-1.5">
              <span className="text-white/25 text-xs font-mono">{k}:</span>
              <span className="text-white/60 text-xs">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 1. THE BRIEF ──────────────────────────────────────────────────── */}
      <Sec id="brief" label="01 · The Brief">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-5 leading-tight">
              What I was asked to build — and the constraints I was given.
            </h2>
            <p className="text-white/60 jost-secondary leading-relaxed mb-4">
              Liffo came to me as a concept: a single app that handles everything from booking an ambulance in a crisis to scheduling a routine GP appointment. The founder's belief was that fragmentation in healthcare UX is itself a patient safety problem — and I agreed.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed">
              My brief was to design the end-to-end mobile experience from scratch. No existing product to build on, no prior design system. The only hard requirement: emergency access had to be the fastest possible path in the app.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">Hard constraints</p>
              {["Emergency flow reachable in ≤ 2 taps from any screen","App must work offline for core emergency features","Trust signals must appear before a user commits to a provider","Single app — not separate modules or white-labels"].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                  <span className="w-1 h-1 rounded-full bg-red-400 mt-2 flex-shrink-0"/>
                  <p className="text-white/65 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">What was undefined (and needed to be figured out)</p>
              {["How to prioritise emergency vs. routine care visually","Whether users would trust a single app for both urgent and elective care","Navigation architecture across 6 fundamentally different user tasks","Information architecture for the health records section"].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2.5 last:mb-0">
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-2 flex-shrink-0"/>
                  <p className="text-white/55 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 2. DISCOVERY ──────────────────────────────────────────────────── */}
      <Sec id="discovery" label="02 · Discovery">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          What I found out before opening Figma.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            {
              method: "Competitive audit",
              what: "Reviewed 8 healthcare apps — 3 emergency-focused (Uber-for-ambulance style), 5 consultation-focused. None bridged both. The emergency-only apps were fast but had zero relationship with the patient after the call. The consultation apps had rich record-keeping but buried urgent care 4+ taps deep.",
              insight: "The market was split along a false boundary. Nobody had asked whether the same person needs both at different moments in their life."
            },
            {
              method: "Stakeholder interviews",
              what: "5 conversations with prospective users — mix of urban professionals, parents with young children, and one person who'd recently used an emergency healthcare service. I also spoke with one GP who'd seen patients arrive from ambulances.",
              insight: "Three patterns: (1) people freeze when panicking and need minimal cognitive load, (2) people doing routine bookings want the same trust signals as emergency — credentials, availability, ratings — just at a slower pace, (3) medical history is deeply personal but people will share it if they see a direct benefit."
            },
            {
              method: "Usability audit of existing flows",
              what: "Mapped out the typical user journey for emergency healthcare in the existing landscape: call → wait → re-explain location → hospital chosen by dispatcher, not patient. Counted steps. Counted decision points.",
              insight: "From 'something is wrong' to 'ambulance dispatched' took an average of 7 manual steps in the existing flow. GPS auto-detection alone could cut this to 2."
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
      </Sec>

      {/* ── 3. PROBLEM REFRAME ────────────────────────────────────────────── */}
      <Sec id="reframe" label="03 · Problem Reframe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What I came in thinking</p>
            <p className="text-white/50 text-lg jost-secondary leading-relaxed mb-8 italic">
              "This is a healthcare app that needs good UX. Make it clean, clear, and trustworthy."
            </p>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the research showed</p>
            <p className="text-white font-semibold text-xl jost-secondary leading-relaxed">
              "This is actually a trust problem that only shows up at the worst moments. And the design needs to build that trust before anyone needs it."
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-white/30 text-xs font-mono uppercase mb-1">The reframed problem</p>
            <p className="text-white/70 jost-secondary leading-relaxed mb-5">
              People don't think about healthcare apps until they're in a crisis or a routine need. In crisis, the app fails them because it wasn't designed for a panicking user. In routine care, they abandon it because they don't trust providers they've never met.
            </p>
            <p className="text-white/70 jost-secondary leading-relaxed">
              The real design challenge wasn't just "make booking easy." It was: <strong className="text-white">build enough ambient trust during calm moments that the app becomes instinctive during stressful ones.</strong>
            </p>
            <div className="grid grid-cols-2 gap-3 mt-5">
              {[
                { from: "How do we make healthcare bookable?", to: "How do we make the right provider instantly findable in any emotional state?" },
                { from: "How do we show all available services?", to: "How do we surface emergency access without burying everything else?" },
              ].map(({ from, to }) => (
                <div key={from} className="border border-white/5 rounded-xl p-4 bg-white/[0.015]">
                  <p className="text-white/30 text-xs line-through mb-2 jost-secondary">{from}</p>
                  <p className="text-white/75 text-sm jost-secondary leading-relaxed">{to}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 4. EXPLORATION ────────────────────────────────────────────────── */}
      <Sec id="explore" label="04 · Exploration">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-4 leading-tight max-w-2xl">
          What I tried before committing to the final architecture.
        </h2>
        <p className="text-white/50 jost-secondary mb-10 max-w-2xl">
          Before any colour or component, I worked through navigation structure and hierarchy in lo-fi. Two alternatives were considered and rejected before the final approach.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Option A — Tab-first nav", status: "Rejected", reason: "Five equal tabs (Emergency / Doctors / Home Care / Pharmacy / Profile) placed emergency on the same visual level as pharmacy. In a real emergency, a person scanning has to identify the right tab. Too much cognitive load. Emergency can't be equal — it has to dominate.", accent: "#ef4444" },
            { label: "Option B — Search-first nav", status: "Rejected", reason: "One search bar + AI triage ('tell me what's wrong'). Felt innovative but introduced friction at exactly the wrong moment. In a crisis you don't type — you tap. Search also hid the trust signals (ratings, credentials) behind a results screen.", accent: "#f97316" },
            { label: "Option C — Dashboard-first with emergency block", status: "Chosen", reason: "Dashboard leads with a permanent, high-contrast emergency block (~30% of above-fold). Routine services are below it. This creates a clear two-tier hierarchy: urgent vs. planned. And it means emergency access is always one tap, regardless of where you are in the app.", accent: "#22c55e" },
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

        <p className="text-white/30 text-xs font-mono uppercase mb-6">Wireframes — screens with the highest structural risk</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { label: "Dashboard", note: "Emergency block above fold", W: WfDashboard },
            { label: "Emergency flow", note: "Map → dispatch → hospital list", W: WfEmergency },
            { label: "Doctor list", note: "Trust visible on card before tap", W: WfDoctor },
          ].map(({ label, note, W }) => (
            <motion.div key={label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
              <div className="rounded-xl overflow-hidden border border-white/5 bg-[#f8f8f7]"><W /></div>
              <p className="text-white/65 text-sm font-semibold mt-2.5 jost-secondary">{label}</p>
              <p className="text-white/30 text-xs mt-0.5 jost-secondary">{note}</p>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 5. KEY DECISIONS ──────────────────────────────────────────────── */}
      <Sec id="decisions" label="05 · Key Design Decisions">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-10 leading-tight max-w-xl">
          The decisions that shaped every screen after.
        </h2>
        <div className="space-y-5">
          {[
            {
              n: "01", accent: "#ef4444",
              decision: "Emergency gets visual dominance — not equal status",
              context: "Early wireframes treated emergency as one service category among five. When I tested this with users who role-played a crisis scenario, they lost 2–3 seconds finding the right option.",
              choice: "I made the emergency block the largest element on the dashboard — roughly 30% of the above-fold viewport, high contrast, with a pulsing red accent. Every other service is subordinate to it.",
              tradeoff: "This makes the dashboard feel less 'calm' during routine use. That was a deliberate trade — emergency users matter more than the aesthetic preference of non-emergency users."
            },
            {
              n: "02", accent: "#38bdf8",
              decision: "GPS auto-detection, not manual location entry",
              context: "The original flow asked users to type or confirm their location before dispatching. That's a reasonable UX assumption — until someone is panicking alone at home.",
              choice: "Emergency dispatch auto-detects location and pre-fills it. The user confirms with one tap, doesn't type. They can override if needed, but the default is auto.",
              tradeoff: "Requires location permission always-on, which some users decline. I surfaced permission request with clear explanation on first launch and during onboarding so users understood why it's needed before they're in a crisis."
            },
            {
              n: "03", accent: "#a78bfa",
              decision: "Trust signals on the list card — before the profile",
              context: "In the first version, doctor ratings and credentials were only on the detail page. Users had to open a profile to evaluate a provider. Drop-off was high at this step in testing.",
              choice: "I moved rating, specialisation, years of experience, and live availability to the list card. The user makes 80% of their evaluation decision on the list — the detail page just confirms it.",
              tradeoff: "List cards are denser and require more careful layout. I reduced each card's secondary info to 2 lines to keep the list scannable."
            },
            {
              n: "04", accent: "#22c55e",
              decision: "Health records grouped by record type, not by provider",
              context: "Most existing health apps organise records by the hospital or clinic that produced them. This mirrors how providers think — not how patients think. A patient doesn't remember 'Apollo Hospital, June 2022.' They remember 'that prescription for my back.'",
              choice: "Records are organised by type: Appointments, Prescriptions, Lab Results, Health Details, Family History. Cross-provider, single view per category.",
              tradeoff: "Loses the provider-context link. If a patient wants to see everything from one specific hospital, they can't directly. This was a conscious prioritisation of patient mental model over provider convenience."
            },
          ].map(({ n, accent, decision, context, choice, tradeoff }) => (
            <motion.div key={n} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-7 bg-white/[0.02]">
              <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-5">
                <p className="text-4xl font-black leading-none" style={{ color: accent + "30" }}><span className="text-white/12">{n}</span></p>
                <div>
                  <p className="text-white font-bold text-base mb-5 jost-secondary">{decision}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { label: "Context", text: context },
                      { label: "What I did", text: choice },
                      { label: "Trade-off", text: tradeoff },
                    ].map(({ label, text }) => (
                      <div key={label} className="border-l border-white/8 pl-4">
                        <p className="text-white/25 text-xs font-mono uppercase mb-1.5">{label}</p>
                        <p className="text-white/60 text-sm jost-secondary leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 6. FINAL DESIGN ───────────────────────────────────────────────── */}
      <Sec id="design" label="06 · Final Design">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-4 leading-tight">34 screens. Every one has a job.</h2>
        <p className="text-white/50 jost-secondary mb-10 max-w-2xl">Organised by flow — each flow was designed with a specific user state in mind.</p>
        {[
          { title: "Onboarding", state: "Calm, first-time, building trust", note: "Collects emergency contacts before anything else. Establishes GPS permission early. Ends on the dashboard.", screens: [Screen1, Screen2, Screen3] },
          { title: "Emergency Flow", state: "Panicking, needs speed above all", note: "GPS auto-detect → one-tap dispatch → hospital list sorted by ETA. Three screens, minimal text.", screens: [Screen10, Screen11, Screen12, Screen13] },
          { title: "Dashboard & Services", state: "Routine, exploratory", note: "Emergency block dominates. Service tiles below. Clear hierarchy at a glance.", screens: [Screen4, Screen5, Screen6, Screen7, Screen8, Screen9] },
          { title: "Hospital & Doctor Discovery", state: "Evaluating, comparing", note: "Credentials, ratings, availability visible on list. Detail page confirms the decision.", screens: [Screen15, Screen16, Screen17, Screen18, Screen19, Screen20, Screen21, Screen22] },
          { title: "Search & Home Care", state: "Specific need in mind", note: "Directory follows patient mental model. Home care booked like any other service.", screens: [Screen14, Screen23, Screen24] },
          { title: "Health Profile & Records", state: "Organised, possibly handing phone to a doctor", note: "All records by type, cross-provider. A doctor can understand your history in one scroll.", screens: [Screen25, Screen26, Screen27, Screen28, Screen29, Screen30, Screen31, Screen32, Screen33, Screen34] },
        ].map(({ title, state, note, screens }) => (
          <div key={title} className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
              <p className="text-white font-bold albert-sans-medium">{title}</p>
              <span className="text-white/25 text-xs font-mono">User state: {state}</span>
            </div>
            <p className="text-white/40 text-sm jost-secondary mb-4">{note}</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
              {screens.map((src, i) => <Img key={i} src={src} />)}
            </div>
          </div>
        ))}
      </Sec>

      {/* ── 7. TESTING ────────────────────────────────────────────────────── */}
      <Sec id="testing" label="07 · Testing & What Changed">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-xl">
          I ran usability sessions. These are the things that broke — and what I fixed.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              finding: "Users hesitated at the GPS permission prompt",
              what: "In version 1, the permission request appeared mid-onboarding with no context. Users who declined were stuck — emergency auto-fill wouldn't work.",
              fix: "Moved the GPS request to a dedicated screen with a single line of explanation: 'We need your location so we can dispatch help without you having to type your address in an emergency.' 94% accepted after this change.",
              changed: true,
            },
            {
              finding: "Emergency button was being tapped by mistake during routine browsing",
              what: "The emergency block was prominent, but in v1 it was too easy to accidentally activate during normal navigation. Two testers triggered it by mistake.",
              fix: "Added a single tap-to-expand mechanic — the emergency block reveals the dispatch button on first tap, dispatch fires on second. Adds 0.8 seconds. Worth it.",
              changed: true,
            },
            {
              finding: "Doctor list was too dense with trust signals",
              what: "I'd added rating, specialisation, years of experience, and availability to list cards. Testers said it felt 'like a spec sheet' — they were reading information they hadn't asked for.",
              fix: "Reduced to: name, specialisation, rating (stars only, no number), and live badge. Years of experience moved to detail page. Cleaner scan pattern.",
              changed: true,
            },
            {
              finding: "Health records section had no clear entry point",
              what: "Users expected records to be in the profile tab but also expected to access them from the dashboard. Two mental models, one location.",
              fix: "Added a 'Health Card' shortcut on the dashboard that deep-links to records. Profile tab remains the primary home. No duplication of content, just two entry points.",
              changed: true,
            },
          ].map(({ finding, what, fix, changed }) => (
            <motion.div key={finding} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <div className="flex items-start gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                <p className="text-white font-semibold text-sm jost-secondary">{finding}</p>
              </div>
              <p className="text-white/45 text-sm jost-secondary leading-relaxed mb-3">{what}</p>
              <div className="border-t border-white/5 pt-3">
                <p className="text-white/25 text-xs font-mono uppercase mb-1.5">What changed</p>
                <p className="text-white/70 text-sm jost-secondary leading-relaxed">{fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 8. OUTCOMES ───────────────────────────────────────────────────── */}
      <Sec id="outcomes" label="08 · Outcomes">
        <p className="text-white/40 text-sm jost-secondary mb-8 max-w-xl">Post-testing metrics from Maze usability sessions and stakeholder review. Not live production data — the product was not yet launched at the time of this case study.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { v: "2 taps", l: "Emergency reachable from any screen in the app" },
            { v: "91%", l: "Task success rate on emergency dispatch flow" },
            { v: "65%", l: "Reduction in time-to-dispatch vs. existing call-based flow" },
            { v: "4.8/5", l: "SUS usability score across 12 test participants" },
            { v: "94%", l: "GPS permission acceptance rate after copy revision" },
            { v: "34", l: "Screens across 6 distinct user flows, 0 dead-ends" },
          ].map(({ v, l }) => (
            <div key={l} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <p className="text-3xl font-black text-white albert-sans-medium mb-1.5">{v}</p>
              <p className="text-white/40 text-sm jost-secondary">{l}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* ── 9. REFLECTION ─────────────────────────────────────────────────── */}
      <Sec id="reflection" label="09 · Reflection">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {[
            { t: "I underestimated how different 'emergency mode' UX is", b: "I came in thinking good UX principles apply universally. They don't — at least not equally. Designing for a panicking user is a completely different discipline from designing for a curious or even frustrated user. Minimum decisions, maximum clarity. I'd apply that lens earlier in the next project." },
            { t: "The trust problem was invisible until the research", b: "Without the interviews, I'd have designed a functional app that still wouldn't be opened in an emergency — because it hadn't built trust before one happened. Research changed the entire design strategy, not just the features." },
            { t: "Testing with role-play scenarios was more useful than standard walkthroughs", b: "Asking testers to 'imagine your child is sick' produced completely different behavior than 'complete this task.' I'd build scenario-based testing into the plan from day one rather than adding it in the second round." },
            { t: "What I'd do with more time", b: "Live production testing in actual emergency scenarios. The emotional reality of a real crisis changes how people interact with an interface in ways that role-play doesn't fully replicate. I'd also want to measure actual dispatch time in the field, not just simulated task time." },
          ].map(({ t, b }) => (
            <div key={t} className="border-l-2 border-white/8 pl-5">
              <p className="text-white font-semibold jost-secondary mb-2">{t}</p>
              <p className="text-white/50 text-sm jost-secondary leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold albert-sans-medium text-white mb-1">Want to walk through this project?</h2>
            <p className="text-white/40 jost-secondary text-sm">Happy to go deeper on any section — research, decisions, or testing.</p>
          </div>
          <Link href="/#contact">
            <motion.button whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-xl text-sm jost-secondary flex-shrink-0">
              <ExternalLink className="w-4 h-4" /> Get in touch
            </motion.button>
          </Link>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <img src={LogoImage} className="w-7 h-7 object-contain opacity-40" alt="Logo" />
          <p className="text-white/20 text-xs font-mono">© 2025 Karn Kalaa</p>
          <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} className="w-5 h-5 object-contain opacity-35 hover:opacity-60 transition-opacity" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
}
