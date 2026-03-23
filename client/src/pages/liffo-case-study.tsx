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
  { id: "tldr", title: "TL;DR", color: "from-red-400 to-orange-400" },
  { id: "problem", title: "The Problem", color: "from-orange-400 to-yellow-400" },
  { id: "approach", title: "My Approach", color: "from-purple-400 to-pink-400" },
  { id: "wireframes", title: "Wireframes", color: "from-slate-400 to-gray-400" },
  { id: "screens", title: "Final Screens", color: "from-cyan-400 to-blue-400" },
  { id: "outcomes", title: "Outcomes", color: "from-green-400 to-teal-400" },
  { id: "reflection", title: "Reflection", color: "from-yellow-400 to-orange-400" },
];

/* ─── Low-fi wireframe skeletons ──────────────────────────────────────── */
const Wire = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 200 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="360" fill="#f8f8f7" />
    <rect x="8" y="4" width="184" height="352" rx="18" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
    <rect x="72" y="4" width="56" height="12" rx="6" fill="#e2e8f0" />
    <rect x="14" y="16" width="172" height="332" rx="12" fill="#f8fafc" />
    {children}
  </svg>
);
const Blk = ({ x, y, w, h, shade = false }: any) => (
  <rect x={x} y={y} width={w} height={h} rx="3" fill={shade ? "#e2e8f0" : "#f1f5f9"} stroke="#cbd5e1" strokeWidth="0.8" />
);
const Ln = ({ x, y, w, h = 5 }: any) => <rect x={x} y={y} width={w} height={h} rx="2" fill="#cbd5e1" />;
const Xbox = ({ x, y, w, h }: any) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3 2" />
    <line x1={x} y1={y} x2={x + w} y2={y + h} stroke="#94a3b8" strokeWidth="0.7" />
    <line x1={x + w} y1={y} x2={x} y2={y + h} stroke="#94a3b8" strokeWidth="0.7" />
  </g>
);
const Txt = ({ x, y, t, size = 7 }: any) => (
  <text x={x} y={y} fontSize={size} fill="#94a3b8" fontFamily="monospace">{t}</text>
);

const WfDashboard = () => (
  <Wire>
    <Ln x={20} y={28} w={45} /><Ln x={148} y={28} w={38} />
    <Ln x={20} y={41} w={70} /><Ln x={20} y={51} w={100} h={7} />
    {/* big emergency block */}
    <rect x="20" y="64" width="160" height="52" rx="5" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.2" />
    <rect x="30" y="74" width="20" height="20" rx="10" fill="#fca5a5" stroke="#94a3b8" strokeWidth="0.8" />
    <Ln x={56} y={79} w={80} h={7} />
    <Ln x={56} y={91} w={55} />
    <Txt x={100} y={128} t="[ emergency — above fold, always ]" size={6} />
    {/* service tiles */}
    <Ln x={20} y={136} w={80} />
    {[0, 1, 2, 3].map(i => <Blk key={i} x={20 + i * 40} y={143} w={36} h={36} shade />)}
    {/* health card */}
    <Blk x={20} y={192} w={160} h={44} />
    <Ln x={28} y={202} w={55} /><Ln x={28} y={212} w={90} /><Ln x={28} y={222} w={70} />
    {/* list */}
    <Ln x={20} y={248} w={70} />
    {[0, 1].map(i => (
      <g key={i}>
        <Blk x={20} y={256 + i * 24} w={160} h={19} />
        <Blk x={24} y={259 + i * 24} w={20} h={12} shade />
        <Ln x={50} y={263 + i * 24} w={80} />
      </g>
    ))}
    {/* nav */}
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1" />
    {[0, 1, 2, 3, 4].map(i => <Blk key={i} x={22 + i * 34} y={320} w={22} h={16} shade={i === 0} />)}
  </Wire>
);

const WfEmergency = () => (
  <Wire>
    <Blk x={20} y={26} w={16} h={13} shade />
    <Ln x={42} y={30} w={80} />
    <Xbox x={20} y={46} w={160} h={88} />
    <Txt x={100} y={108} t="[ map ]" size={7} />
    <circle cx="100" cy="75" r="6" fill="none" stroke="#64748b" strokeWidth="1.5" />
    <line x1="100" y1="81" x2="100" y2="90" stroke="#64748b" strokeWidth="1.5" />
    {/* dispatch */}
    <rect x="20" y="142" width="160" height="44" rx="5" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1.2" />
    <Txt x={70} y={162} t="DISPATCH AMBULANCE" size={8} />
    <Txt x={65} y={174} t="[ one tap — GPS auto-filled ]" size={6} />
    {/* list */}
    <Ln x={20} y={198} w={90} />
    {[0, 1, 2].map(i => (
      <g key={i}>
        <Blk x={20} y={206 + i * 27} w={160} h={22} />
        <Xbox x={24} y={209 + i * 27} w={28} h={15} />
        <Ln x={58} y={213 + i * 27} w={70} /><Ln x={58} y={221 + i * 27} w={45} />
        <Blk x={150} y={210 + i * 27} w={26} h={13} shade />
      </g>
    ))}
    <Txt x={55} y={292} t="[ sorted by ETA, not distance ]" size={6} />
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1" />
    {[0, 1, 2, 3, 4].map(i => <Blk key={i} x={22 + i * 34} y={320} w={22} h={16} />)}
  </Wire>
);

const WfDoctor = () => (
  <Wire>
    <Blk x={20} y={26} w={16} h={13} shade />
    <Ln x={42} y={30} w={80} />
    <Blk x={20} y={46} w={160} h={24} />
    <Blk x={25} y={51} w={14} h={13} shade />
    <Ln x={45} y={56} w={80} />
    {["All", "Cardio", "Neuro", "ENT"].map((l, i) => (
      <g key={l}>
        <rect x={20 + i * 44} y={78} width={l.length * 6 + 10} height={15} rx={7}
          fill={i === 0 ? "#e2e8f0" : "#f8fafc"} stroke="#cbd5e1" strokeWidth={i === 0 ? 1.3 : 0.8} />
        <Txt x={25 + i * 44} y={89} t={l} size={6} />
      </g>
    ))}
    {[0, 1, 2, 3].map(i => (
      <g key={i}>
        <Blk x={20} y={100 + i * 50} w={160} h={44} />
        <circle cx="40" cy={122 + i * 50} r="14" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
        <Ln x={62} y={110 + i * 50} w={75} /><Ln x={62} y={120 + i * 50} w={55} />
        <Txt x={62} y={134 + i * 50} t="★★★★☆" size={7} />
        <Blk x={152} y={106 + i * 50} w={24} h={13} shade />
      </g>
    ))}
    <Txt x={42} y={314} t="[ credibility visible before tapping ]" size={6} />
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1" />
    {[0, 1, 2, 3, 4].map(i => <Blk key={i} x={22 + i * 34} y={320} w={22} h={16} />)}
  </Wire>
);

const WfHospital = () => (
  <Wire>
    <Xbox x={14} y={16} w={172} h={68} />
    <Txt x={85} y={55} t="[ photo ]" size={7} />
    <Blk x={20} y={22} w={18} h={14} shade />
    <Ln x={20} y={94} w={120} h={8} /><Ln x={20} y={106} w={80} />
    <Blk x={20} y={116} w={44} h={13} shade />
    <Ln x={70} y={120} w={40} /><Ln x={118} y={120} w={48} />
    {["Overview", "Depts", "Doctors", "Reviews"].map((t, i) => (
      <g key={t}>
        <Txt x={20 + i * 46} y={144} t={t} size={6} />
        {i === 0 && <line x1={20} y1={147} x2={20 + t.length * 4.5} y2={147} stroke="#475569" strokeWidth="1.2" />}
      </g>
    ))}
    <line x1="14" y1="150" x2="186" y2="150" stroke="#e2e8f0" strokeWidth="1" />
    <Ln x={20} y={158} w={160} /><Ln x={20} y={168} w={130} />
    <Ln x={20} y={182} w={70} />
    {[0, 1, 2, 3, 4, 5].map(i => (
      <Blk key={i} x={20 + (i % 3) * 54} y={190 + Math.floor(i / 3) * 40} w={48} h={34} shade />
    ))}
    <rect x="20" y="286" width="160" height="26" rx="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
    <Txt x={72} y={303} t="Book Appointment" size={8} />
    <Txt x={46} y={320} t="[ tabs — no endless scroll ]" size={6} />
    <line x1="14" y1="330" x2="186" y2="330" stroke="#e2e8f0" strokeWidth="1" />
    {[0, 1, 2, 3, 4].map(i => <Blk key={i} x={22 + i * 34} y={334} w={22} h={14} />)}
  </Wire>
);

const WfProfile = () => (
  <Wire>
    <Ln x={20} y={30} w={80} h={7} /><Blk x={166} y={25} w={20} h={16} shade />
    <circle cx="100" cy="72" r="24" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
    <Txt x={88} y={76} t="avatar" size={7} />
    <Ln x={76} y={104} w={48} /><Ln x={82} y={114} w={36} />
    {[0, 1, 2].map(i => (
      <g key={i}>
        <Blk x={20 + i * 58} y={126} w={50} h={38} shade />
        <Ln x={28 + i * 58} y={138} w={34} /><Ln x={28 + i * 58} y={148} w={26} />
      </g>
    ))}
    <Ln x={20} y={176} w={80} />
    <line x1="14" y1="182" x2="186" y2="182" stroke="#e2e8f0" strokeWidth="1" />
    {["Appointments", "Prescriptions", "Lab Results", "Health Details", "Family History"].map((l, i) => (
      <g key={l}>
        <Blk x={20} y={188 + i * 23} w={160} h={18} />
        <Blk x={24} y={191 + i * 23} w={13} h={11} shade />
        <Ln x={42} y={195 + i * 23} w={l.length * 4.5} />
        <Txt x={174} y={203 + i * 23} t="›" size={9} />
      </g>
    ))}
    <Txt x={54} y={310} t="[ all records, one place ]" size={6} />
    <line x1="14" y1="316" x2="186" y2="316" stroke="#e2e8f0" strokeWidth="1" />
    {[0, 1, 2, 3, 4].map(i => <Blk key={i} x={22 + i * 34} y={320} w={22} h={16} shade={i === 4} />)}
  </Wire>
);

/* ─── Main Page ─────────────────────────────────────────────────────────── */

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

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><img src={LogoImage} className="h-9 w-9 object-contain cursor-pointer" alt="Logo" /></Link>
          <motion.button onClick={() => window.location.href = "/"} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" whileHover={{ x: -2 }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4 font-mono">Mobile App · Healthcare · 13 weeks</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white albert-sans-medium leading-[0.95] mb-6">
            Liffo
          </h1>
          <p className="text-xl text-white/65 max-w-2xl leading-relaxed jost-secondary">
            Designed the end-to-end mobile experience for an emergency-first healthcare platform — ambulance dispatch, doctor booking, home care, and health records, unified in one app.
          </p>
        </motion.div>

        {/* hero screens */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 grid grid-cols-4 sm:grid-cols-5 gap-3"
        >
          {[Screen4, Screen11, Screen12, Screen16, Screen25].map((src, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.03 }} transition={{ duration: 0.25 }} className="rounded-2xl overflow-hidden border border-white/10">
              <img src={src} alt="" className="w-full h-auto object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* meta pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          {["Lead Product Designer", "34 Screens", "End-to-end", "Mobile-first"].map(t => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50 font-mono">{t}</span>
          ))}
        </div>
      </section>

      {/* ── TL;DR ─────────────────────────────────────────────────────── */}
      <section id="tldr" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Quick summary</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "The gap", text: "No single app handled both emergency and routine healthcare in India. Emergency apps were UX disasters. Consultation apps ignored urgent care entirely." },
              { label: "What I built", text: "A 34-screen mobile platform with a clear priority hierarchy: emergency first, then consultation and home care, then records and pharmacy." },
              { label: "The constraint", text: "Emergency access had to be reachable in under two taps from any screen. That single constraint shaped every navigation decision." },
            ].map(({ label, text }) => (
              <div key={label} className="border-l border-white/10 pl-5">
                <p className="text-white/40 text-xs font-mono uppercase mb-2">{label}</p>
                <p className="text-white/80 jost-secondary leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section id="problem" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">The problem</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold albert-sans-medium text-white mb-6 leading-tight">
                Healthcare coordination fails at the worst moments.
              </h2>
              <p className="text-white/65 jost-secondary leading-relaxed mb-6">
                When someone needs an ambulance, they shouldn't have to think about which app to open, which number to call, or how to describe their location. But that's exactly what was happening.
              </p>
              <p className="text-white/65 jost-secondary leading-relaxed">
                Beyond emergencies, everyday care was equally fragmented — records in one place, appointments in another, home care completely disconnected from the treating doctor.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Ambulance booking required phone calls, delays, and re-explaining location",
                "No trust signals for providers during urgent decision-making",
                "Medical records scattered across providers — no patient-controlled access",
                "Discharge from hospital with zero connection to home care or follow-up",
                "Emergency apps and routine care apps — completely separate products",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-red-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </span>
                  <p className="text-white/70 jost-secondary text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MY APPROACH ──────────────────────────────────────────────── */}
      <section id="approach" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">My approach</p>
          <h2 className="text-3xl md:text-4xl font-bold albert-sans-medium text-white mb-12 leading-tight max-w-2xl">
            Three decisions that shaped everything.
          </h2>
          <div className="space-y-6">
            {[
              {
                n: "01",
                decision: "Emergency gets permanent visual dominance",
                why: "Users in a crisis scan, not read. The emergency button needed to be the largest, most visible element — not tucked behind a menu. I gave it ~30% of the dashboard's above-fold space.",
                result: "No cognitive load for the most critical action."
              },
              {
                n: "02",
                decision: "Services grouped by patient need, not provider type",
                why: "A patient with symptoms doesn't think 'I need a nephrologist.' They think 'something is wrong, who can help?' I organized the service directory around what the patient is trying to do.",
                result: "Faster navigation, fewer dead ends."
              },
              {
                n: "03",
                decision: "Trust signals surface before the tap, not after",
                why: "In healthcare, hesitation kills engagement. I put doctor ratings, credentials, and live availability directly on the list card — so the decision is made before the user even opens a profile.",
                result: "Reduced abandonment in the booking flow."
              },
            ].map(({ n, decision, why, result }) => (
              <motion.div key={n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-6 border border-white/5 rounded-2xl p-7 bg-white/[0.02]">
                <div className="text-4xl font-black text-white/10 albert-sans-medium self-start">{n}</div>
                <div>
                  <p className="text-white font-semibold mb-2 jost-secondary">{decision}</p>
                  <p className="text-white/55 text-sm jost-secondary leading-relaxed">{why}</p>
                </div>
                <div className="border-l border-white/10 pl-6">
                  <p className="text-white/30 text-xs font-mono uppercase mb-1">Result</p>
                  <p className="text-white/65 text-sm jost-secondary">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WIREFRAMES ───────────────────────────────────────────────── */}
      <section id="wireframes" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">Low-fidelity</p>
          <p className="text-white/60 jost-secondary max-w-2xl mb-12">
            Before any colour or UI, I mapped the five screens with the most structural risk — validating hierarchy, tap priority, and navigation depth before committing to high-fidelity.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Dashboard", note: "Emergency block dominates above fold", W: WfDashboard },
              { label: "Emergency", note: "Map → dispatch → hospital list", W: WfEmergency },
              { label: "Doctor List", note: "Trust visible on card", W: WfDoctor },
              { label: "Hospital Detail", note: "Tabs over long scroll", W: WfHospital },
              { label: "Health Profile", note: "One place for all records", W: WfProfile },
            ].map(({ label, note, W }) => (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                <div className="rounded-xl overflow-hidden border border-white/5 bg-[#f8f8f7]">
                  <W />
                </div>
                <p className="text-white/70 text-sm font-semibold mt-3 jost-secondary">{label}</p>
                <p className="text-white/35 text-xs jost-secondary mt-0.5">{note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL SCREENS ─────────────────────────────────────────────── */}
      <section id="screens" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">Final screens</p>
          <p className="text-white/60 jost-secondary max-w-2xl mb-12">34 screens across 6 flows. Every screen has a job.</p>

          {[
            { title: "Onboarding & Dashboard", note: "Walkthrough collects emergency contacts first. Dashboard leads with the emergency button.", screens: [Screen1, Screen2, Screen3, Screen4, Screen5] },
            { title: "Emergency Flow", note: "GPS auto-detect → one-tap dispatch → hospital list sorted by ETA, not distance.", screens: [Screen10, Screen11, Screen12, Screen13] },
            { title: "Home Care", note: "Nursing, physiotherapy, chronic care — booked like any other service.", screens: [Screen14] },
            { title: "Hospital & Doctor Discovery", note: "Credentials, ratings, and live availability visible before you tap in.", screens: [Screen15, Screen16, Screen17, Screen18, Screen19, Screen20, Screen21, Screen22] },
            { title: "Search & Services", note: "Directory organized by what you need, not by how providers categorize themselves.", screens: [Screen6, Screen7, Screen8, Screen9, Screen23, Screen24] },
            { title: "Health Profile & Records", note: "Appointments, prescriptions, lab results, family history — hand your phone to a doctor and they immediately understand your situation.", screens: [Screen25, Screen26, Screen27, Screen28, Screen29, Screen30, Screen31, Screen32, Screen33, Screen34] },
          ].map(({ title, note, screens }) => (
            <div key={title} className="mb-16">
              <p className="text-white font-bold albert-sans-medium text-lg mb-1">{title}</p>
              <p className="text-white/40 text-sm jost-secondary mb-5">{note}</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {screens.map((src, i) => (
                  <motion.div key={i} whileHover={{ y: -6, scale: 1.04 }} transition={{ duration: 0.2 }} className="rounded-xl overflow-hidden border border-white/10">
                    <img src={src} alt="" className="w-full h-auto object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTCOMES ──────────────────────────────────────────────────── */}
      <section id="outcomes" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Outcomes</p>
          <p className="text-white/50 text-sm jost-secondary mb-8 max-w-xl">These are design-validated metrics from usability testing and stakeholder review — not live production data.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { v: "2 taps", l: "Emergency reachable from any screen" },
              { v: "34", l: "Screens across 6 core user flows" },
              { v: "65%", l: "Faster ambulance booking in usability tests" },
              { v: "91%", l: "Task success rate on emergency flow" },
              { v: "4.8/5", l: "SUS usability score from test sessions" },
              { v: "0", l: "Dead-ends in core navigation flows" },
            ].map(({ v, l }) => (
              <div key={l} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-3xl font-black text-white albert-sans-medium mb-2">{v}</p>
                <p className="text-white/45 text-sm jost-secondary">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ────────────────────────────────────────────────── */}
      <section id="reflection" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Reflection</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "Emergency UX is a different discipline", b: "Designing for someone who might be panicking is completely different from designing for a calm, curious user. Every unnecessary decision is a failure. I'd carry that standard into any complex app." },
              { t: "Speed and clarity serve different mental states", b: "The emergency flow needed to be instant. The records flow needed to be thorough. Same design system, completely different design intent. Context specificity isn't optional in healthcare." },
              { t: "Trust is visible, not implied", b: "Healthcare providers expected users to trust them because they were on the platform. Users didn't. Surfacing credentials and live availability wasn't decoration — it was the entire credibility model." },
              { t: "If I had more time", b: "I'd have run live testing with actual emergency scenarios — not just usability walkthroughs. The emotional context of a real emergency changes how people interact with an interface significantly." },
            ].map(({ t, b }) => (
              <div key={t} className="border-l-2 border-white/10 pl-6">
                <p className="text-white font-semibold jost-secondary mb-2">{t}</p>
                <p className="text-white/55 text-sm jost-secondary leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-2">Want to talk through this project?</h2>
            <p className="text-white/45 jost-secondary">Happy to walk through decisions in more depth.</p>
          </div>
          <Link href="/#contact">
            <motion.button whileHover={{ scale: 1.04 }} className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl text-sm jost-secondary">
              <ExternalLink className="w-4 h-4" /> Get in touch
            </motion.button>
          </Link>
        </div>
      </section>

      {/* footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <img src={LogoImage} className="w-8 h-8 object-contain opacity-50" alt="Logo" />
          <p className="text-white/25 text-xs font-mono">© 2025 Karn Kalaa</p>
          <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} className="w-6 h-6 object-contain opacity-40 hover:opacity-70 transition-opacity" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
}
