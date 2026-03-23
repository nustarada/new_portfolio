import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CaseStudyNavigation } from "@/components/case-study-navigation";
import LogoImage from "@assets/Logo white_1754674219191.png";
import linkedinLogo from "@assets/linkedin 1_1756620179383.png";
import homepageDesign from "@assets/Homepage (Wordpress)_1756635142322.png";
import persona1Design from "@assets/Persona 1 (Hubspot)_1756635142323.png";
import persona2Design from "@assets/Persona 2 (Hubspot)_1756635142324.png";
import persona3Design from "@assets/Persona 3 (Hubspot)_1756635142324.png";
import homepageThumbnail from "@assets/Homepage Thumbnail_1756635908006.png";
import persona1Thumbnail from "@assets/Persona 1 Thumbnail_1756635908006.png";
import persona2Thumbnail from "@assets/Persona 2 Thumbnail_1756635908006.png";
import persona3Thumbnail from "@assets/Persona 3 Thumbnail_1756635908004.png";

const navSections = [
  { id: "overview",   title: "Overview",          color: "from-white/40 to-white/20" },
  { id: "brief",      title: "The Brief",        color: "from-slate-400 to-gray-400" },
  { id: "discovery",  title: "Discovery",         color: "from-purple-400 to-pink-400" },
  { id: "reframe",    title: "Problem Reframe",   color: "from-orange-400 to-red-400" },
  { id: "explore",    title: "Exploration",        color: "from-violet-400 to-purple-400" },
  { id: "decisions",  title: "Key Decisions",     color: "from-violet-400 to-purple-400" },
  { id: "design",     title: "The Four Pages",    color: "from-cyan-400 to-blue-400" },
  { id: "testing",    title: "Testing",           color: "from-green-400 to-teal-400" },
  { id: "outcomes",   title: "Outcomes",          color: "from-teal-400 to-green-400" },
  { id: "reflection", title: "Reflection",        color: "from-yellow-400 to-orange-400" },
];

const allScreens = [
  { thumb: homepageThumbnail, full: homepageDesign, label: "Homepage", platform: "WordPress", accent: "#a78bfa" },
  { thumb: persona1Thumbnail, full: persona1Design, label: "Head of School", platform: "HubSpot", accent: "#38bdf8" },
  { thumb: persona2Thumbnail, full: persona2Design, label: "Dean of Academics", platform: "HubSpot", accent: "#34d399" },
  { thumb: persona3Thumbnail, full: persona3Design, label: "Board Member", platform: "HubSpot", accent: "#fb923c" },
];

const Sec = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <p className="text-white/25 text-xs tracking-widest uppercase font-mono mb-8">{label}</p>
      {children}
    </div>
  </section>
);

export default function TwoHourLearningCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#090910] text-white twohr-case-study">
      <CaseStudyNavigation sections={navSections} />
      <motion.div className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400 z-[9999]" style={{ width: progressWidth }} />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><img src={LogoImage} className="h-9 w-9 object-contain cursor-pointer" alt="Logo" /></Link>
          <motion.button onClick={() => window.location.href = "/"} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" whileHover={{ x: -2 }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>
      </nav>

      {/* expanded overlay */}
      {expanded !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/92 backdrop-blur-md flex items-start justify-center overflow-y-auto p-8"
          onClick={() => setExpanded(null)}>
          <motion.div initial={{ scale: 0.93, y: 20 }} animate={{ scale: 1, y: 0 }} className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-bold albert-sans-medium text-lg">{allScreens[expanded].label}</p>
                <p className="text-white/40 text-sm jost-secondary">{allScreens[expanded].platform}</p>
              </div>
              <button onClick={() => setExpanded(null)} className="text-white/40 hover:text-white text-3xl leading-none px-2">×</button>
            </div>
            <img src={allScreens[expanded].full} alt={allScreens[expanded].label} className="w-full h-auto rounded-2xl border border-white/10" />
          </motion.div>
        </motion.div>
      )}

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-10 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/35 text-xs tracking-widest uppercase mb-4 font-mono">Web Design · EdTech · B2B Sales Enablement</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white albert-sans-medium leading-[0.92] mb-5">2 Hour<br/>Learning</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed jost-secondary">
            Designed a persona-driven landing page system for a B2B EdTech company — four distinct pages aligned to how each buying stakeholder actually evaluates a purchasing decision.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {allScreens.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}
              onClick={() => setExpanded(i)} className="cursor-zoom-in rounded-xl overflow-hidden border border-white/10 group relative">
              <img src={s.thumb} alt={s.label} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-white text-xs font-mono">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="text-white/20 text-xs font-mono mt-2 text-center">Click any page to expand</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {[["Role","Lead Designer"],["Pages","4 — 1 WordPress + 3 HubSpot"],["Platform","Web (B2B)"],["Tools","Figma · WordPress · HubSpot"]].map(([k,v]) => (
            <div key={k} className="px-3 py-1.5 rounded-full border border-white/8 flex items-center gap-1.5">
              <span className="text-white/25 text-xs font-mono">{k}:</span>
              <span className="text-white/60 text-xs">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 0. OVERVIEW ───────────────────────────────────────────────────── */}
      <Sec id="overview" label="00 · Overview">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[["4","Pages designed"],["3","Stakeholder personas"],["+40%","Board engagement"],["+35%","Dean scroll depth"]].map(([v, l]) => (
            <div key={l} className="border border-white/6 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-3xl font-black text-white tracking-tight mb-1">{v}</p>
              <p className="text-white/40 text-xs font-mono">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="border border-white/6 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Core problem</p>
            <p className="text-white/70 jost-secondary leading-relaxed">Selling EdTech software to a school is a committee decision — a principal, a dean, and a board member all need to say yes. Each has a completely different definition of 'good'. One landing page trying to answer three different questions answers none of them well enough to convert.</p>
          </div>
          <div className="border border-white/6 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Key outcome</p>
            <p className="text-white/70 jost-secondary leading-relaxed">Four persona-specific pages — one WordPress homepage and three HubSpot landing pages — each designed around a different stakeholder's definition of risk. Board page leads with a hard financial number; dean page leads with teacher workflow; principal page leads with peer proof.</p>
          </div>
        </div>
        <div className="border border-white/6 rounded-2xl p-6 bg-white/[0.02]">
          <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-4">What's in this case study</p>
          <div className="flex flex-wrap gap-3">
            {["01 · The Brief","02 · Discovery","03 · Problem Reframe","04 · Exploration","05 · Key Decisions","06 · The Four Pages","07 · Testing","08 · Outcomes","09 · Reflection"].map(s => (
              <span key={s} className="text-white/50 text-xs font-mono px-3 py-1.5 rounded-full border border-white/8">{s}</span>
            ))}
          </div>
        </div>
      </Sec>

      {/* ── 1. BRIEF ──────────────────────────────────────────────────────── */}
      <Sec id="brief" label="01 · The Brief">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-5 leading-tight">
              What I was asked to do — and what I understood about the client's situation.
            </h2>
            <p className="text-white/60 jost-secondary leading-relaxed mb-4">
              2 Hour Learning is an EdTech platform that helps schools dramatically reduce the time students spend on core academic subjects — freeing up the school day for enrichment, arts, sports, and deeper learning. The product genuinely works. The problem was getting it in front of the right people.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed">
              The initial brief was simple: "We need a better website." What I found when I started asking questions was considerably more specific.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">The actual situation</p>
              {[
                "Sales team was sending all leads to the same homepage — regardless of who the lead was",
                "Homepage tried to speak to everyone: principals, teachers, and board members in the same copy",
                "Conversion rate was low — not because the product was weak, but because messaging wasn't role-specific",
                "Sales reps had no page they could send a board member that spoke purely in financial terms",
              ].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2 last:mb-0">
                  <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0"/>
                  <p className="text-white/55 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">What I proposed (and they approved)</p>
              <p className="text-white/65 text-sm jost-secondary leading-relaxed">
                Four pages: one brand homepage for general discovery, and three HubSpot landing pages built around the specific fears and priorities of the three people who appear in every school buying cycle — the principal, the dean of academics, and the board member. Each page with its own messaging architecture and CTA.
              </p>
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 2. DISCOVERY ──────────────────────────────────────────────────── */}
      <Sec id="discovery" label="02 · Discovery">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          Understanding the buying cycle before designing the pages.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              method: "Sales team interviews (4 sessions)",
              what: "Talked to the people actually running the sales process. They described the same pattern every time: initial contact with a principal, growing interest, then stall. 'We lose them when it goes to the board.' Boards were asking for financial projections that the sales team didn't have ready materials for.",
              insight: "The sales process was failing at the transition between stakeholders — not at the initial stage. The homepage could be perfect for a principal and still lose the deal at the board review."
            },
            {
              method: "Stakeholder mapping",
              what: "For each stakeholder role, I mapped: their primary job responsibility, what success looks like in their role, what they'd be blamed for if this went wrong, and what evidence they'd need to feel confident recommending 2HL to their colleagues.",
              insight: "Each role had a different definition of 'risk.' Principals risk reputation. Deans risk teacher morale. Board members risk budget. Designing for all three with the same message was structurally impossible."
            },
            {
              method: "Competitor landing page analysis",
              what: "Reviewed how 6 comparable EdTech companies positioned their landing pages. Most had a single homepage. The ones that had role-specific pages were uniformly better at the conversion stages where 2HL was struggling — board-level justification and implementation-ease proofs.",
              insight: "The market hadn't fully figured this out. Companies that had done persona-specific pages were better funded and growing faster. The pattern was there to follow and improve on."
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

      {/* ── 3. REFRAME ────────────────────────────────────────────────────── */}
      <Sec id="reframe" label="03 · Problem Reframe">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the brief said</p>
            <p className="text-white/50 text-lg jost-secondary leading-relaxed mb-8 italic">
              "We need a better website that converts more leads."
            </p>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the research showed</p>
            <p className="text-white font-semibold text-xl jost-secondary leading-relaxed">
              "We need a system of pages — each designed for a different person in the same buying committee, at a different stage of the same decision."
            </p>
          </div>
          <div>
            <p className="text-white/60 jost-secondary leading-relaxed mb-5">
              Selling software to a school is a committee decision. A principal might love the product. A dean of academics needs to believe it won't burden teachers. A board member needs to see the financial case. All three need to say yes.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed mb-5">
              A single landing page can't answer three completely different questions simultaneously. Trying to do so means answering none of them well enough to convert.
            </p>
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">The design principle that followed</p>
              <p className="text-white/75 jost-secondary text-sm leading-relaxed">
                Design to the fear, not the feature. Each stakeholder has a specific thing they're afraid of getting wrong. The page that addresses their fear directly — before talking about product features — is the one that earns the next conversation.
              </p>
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 4. EXPLORATION ────────────────────────────────────────────────── */}
      <Sec id="explore" label="04 · Exploration">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-4 leading-tight max-w-2xl">
          Mapping what each stakeholder needed to see — and building the messaging architecture first.
        </h2>
        <p className="text-white/50 jost-secondary mb-8 max-w-2xl">Before any visual design, I worked out the content strategy for each page as a set of questions each stakeholder would ask — and the order in which the page needed to answer them.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {[
            { role: "Head of School", accent: "#38bdf8",
              fear: "Betting on the wrong thing — if 2HL doesn't deliver, it's my reputation on the line",
              questions: ["Do schools like mine use this?", "What happened to their results?", "Who can I call to ask about their experience?", "What does the next step look like?"],
              messagingOrder: "Peer proof first → outcome data → named testimonial → low-commitment CTA ('request a briefing', not 'buy now')" },
            { role: "Dean of Academics", accent: "#34d399",
              fear: "Disrupting teachers who are already overloaded",
              questions: ["Does this work with our existing curriculum?", "What's the teacher's actual workflow?", "How long does implementation take?", "What support is available?"],
              messagingOrder: "Workflow fit first → teacher testimonial → implementation timeline → 'see the teacher dashboard' CTA" },
            { role: "Board Member", accent: "#fb923c",
              fear: "Approving a budget item that doesn't generate measurable return",
              questions: ["What's the projected ROI?", "What's the implementation cost?", "What happens if it doesn't work?", "Can I see the numbers for a comparable district?"],
              messagingOrder: "Hard financial number first → district case study → ROI calculator CTA → no testimonials (boards don't care about feelings)" },
            { role: "Homepage", accent: "#a78bfa",
              fear: "N/A — this is a discovery page, not a conversion page",
              questions: ["What is 2HL?", "Who is it for?", "Is it credible?", "How do I find out more?"],
              messagingOrder: "Brand narrative first → scale signal (schools enrolled) → product overview → general 'see how it works' CTA" },
          ].map(({ role, accent, fear, questions, messagingOrder }) => (
            <div key={role} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
                <p className="text-white font-semibold jost-secondary">{role}</p>
              </div>
              <p className="text-white/30 text-xs font-mono uppercase mb-1.5">Core fear</p>
              <p className="text-white/60 text-sm jost-secondary mb-4 italic">"{fear}"</p>
              <p className="text-white/30 text-xs font-mono uppercase mb-1.5">Questions the page must answer in order</p>
              <ol className="space-y-1 mb-4">
                {questions.map((q, i) => <li key={i} className="flex items-start gap-2"><span className="text-white/20 text-xs font-mono mt-0.5">{i+1}.</span><p className="text-white/55 text-sm jost-secondary">{q}</p></li>)}
              </ol>
              <div className="border-t border-white/5 pt-3">
                <p className="text-white/25 text-xs font-mono uppercase mb-1">Messaging architecture</p>
                <p className="text-white/65 text-xs jost-secondary leading-relaxed">{messagingOrder}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-white/30 text-xs font-mono uppercase mb-4 mt-8">Lo-fi sketches — messaging structure before visual design</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stakeholder fear map */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <svg viewBox="0 0 220 190" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="hl-sk1"><feTurbulence type="turbulence" baseFrequency="0.027" numOctaves="3" seed="4" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter>
                  <pattern id="hl-h1" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5"/></pattern>
                  <pattern id="hl-g1" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="220" height="190" fill="#fdf8f0"/>
                <rect width="220" height="190" fill="url(#hl-g1)" opacity="0.7"/>
                <g filter="url(#hl-sk1)">
                  <text x="8" y="11" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">Buying committee — fear map</text>
                  <rect x="80" y="16" width="60" height="14" rx="1" fill="none" stroke="#374151" strokeWidth="1.2"/>
                  <text x="85" y="26" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">PRINCIPAL</text>
                  <line x1="110" y1="30" x2="75" y2="46" stroke="#374151" strokeWidth="1"/>
                  <line x1="110" y1="30" x2="145" y2="46" stroke="#374151" strokeWidth="1"/>
                  <rect x="30" y="46" width="85" height="14" rx="1" fill="none" stroke="#374151" strokeWidth="1"/>
                  <text x="36" y="56" fontSize="5.5" fill="#374151" fontFamily="monospace">DEAN / CURRICULUM</text>
                  <rect x="125" y="46" width="75" height="14" rx="1" fill="none" stroke="#374151" strokeWidth="1"/>
                  <text x="130" y="56" fontSize="5.5" fill="#374151" fontFamily="monospace">BOARD MEMBER</text>
                  <line x1="8" y1="70" x2="212" y2="70" stroke="#374151" strokeWidth="0.8" strokeDasharray="3 2"/>
                  <text x="8" y="80" fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">FEAR MAPPING</text>
                  {[{x:8,fill:"#e9d5ff",role:"Principal",fear:"Reputation",proof:"Peer proof"},{x:78,fill:"#dcfce7",role:"Dean",fear:"Teacher burden",proof:"Workflow demo"},{x:148,fill:"#fef9c3",role:"Board",fear:"Budget ROI",proof:"Financial model"}].map(({x,fill,role,fear,proof})=>(
                    <g key={role}>
                      <rect x={x} y={84} width="66" height="44" rx="1" fill={fill} stroke="#9ca3af" strokeWidth="0.9"/>
                      <text x={x+4} y={95} fontSize="5.5" fill="#374151" fontFamily="monospace" fontWeight="bold">{role}</text>
                      <text x={x+4} y={105} fontSize="4.5" fill="#6b7280" fontFamily="monospace">Fear: {fear}</text>
                      <text x={x+4} y={115} fontSize="4.5" fill="#374151" fontFamily="monospace">Need: {proof}</text>
                      <text x={x+4} y={123} fontSize="4.5" fill="#9ca3af" fontFamily="monospace">{proof.substring(0,10)}..</text>
                    </g>
                  ))}
                  <text x="8" y="146" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">one page cannot answer 3 different fears</text>
                  <rect x="8" y="152" width="204" height="12" rx="1" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.2"/>
                  <text x="20" y="161" fontSize="5.5" fill="#2563eb" fontFamily="monospace" fontWeight="bold">→ need 4 pages: 1 brand + 3 persona</text>
                  <text x="8" y="176" fontSize="5" fill="#374151" fontFamily="monospace">design to the fear, not the feature</text>
                  <text x="8" y="186" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">each page answers ONE definition of risk</text>
                </g>
              </svg>
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Stakeholder fear mapping</p>
          </div>

          {/* Board page structure */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <svg viewBox="0 0 220 190" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="hl-sk2"><feTurbulence type="turbulence" baseFrequency="0.026" numOctaves="3" seed="6" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.1" xChannelSelector="R" yChannelSelector="G"/></filter>
                  <pattern id="hl-h2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5"/></pattern>
                  <pattern id="hl-g2" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="220" height="190" fill="#fdf8f0"/>
                <rect width="220" height="190" fill="url(#hl-g2)" opacity="0.7"/>
                <g filter="url(#hl-sk2)">
                  <text x="8" y="11" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">Board page — fear first structure</text>
                  <rect x="8" y="16" width="204" height="26" rx="1" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.8"/>
                  <text x="14" y="26" fontSize="8" fill="#854d0e" fontFamily="monospace" fontWeight="bold">$240K avg per pupil</text>
                  <text x="14" y="36" fontSize="5.5" fill="#854d0e" fontFamily="monospace">within 24 months</text>
                  <text x="8" y="52" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">NO mission. NO warmup. Financial # FIRST.</text>
                  <rect x="8" y="58" width="204" height="16" rx="1" fill="none" stroke="#374151" strokeWidth="1.1"/>
                  <text x="65" y="69" fontSize="5" fill="#6b7280" fontFamily="monospace">[ how it works, brief ]</text>
                  <rect x="8" y="78" width="204" height="18" rx="1" fill="none" stroke="#374151" strokeWidth="1.1"/>
                  <text x="45" y="90" fontSize="5" fill="#6b7280" fontFamily="monospace">[ comparable district case study ]</text>
                  <rect x="8" y="100" width="204" height="18" rx="1" fill="none" stroke="#374151" strokeWidth="1.1"/>
                  <text x="65" y="112" fontSize="5" fill="#6b7280" fontFamily="monospace">[ ROI breakdown table ]</text>
                  <rect x="8" y="122" width="204" height="14" rx="1" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.4"/>
                  <text x="55" y="132" fontSize="6" fill="#2563eb" fontFamily="monospace" fontWeight="bold">GET THE ROI MODEL →</text>
                  <text x="8" y="148" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">no testimonials — boards don't buy on feelings</text>
                  <line x1="8" y1="154" x2="212" y2="154" stroke="#374151" strokeWidth="0.7" strokeDasharray="3 2"/>
                  <text x="8" y="164" fontSize="5" fill="#374151" fontFamily="monospace">Dean page opens differently:</text>
                  <rect x="8" y="168" width="204" height="16" rx="1" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.2"/>
                  <text x="14" y="178" fontSize="5" fill="#15803d" fontFamily="monospace">From 9am to 11am, your teachers focus</text>
                  <text x="14" y="186" fontSize="5" fill="#15803d" fontFamily="monospace">on what they do best — teaching.</text>
                </g>
              </svg>
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Board page — fear-first structure</p>
          </div>

          {/* CTA stage-gating */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <svg viewBox="0 0 220 190" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="hl-sk3"><feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="9" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter>
                  <pattern id="hl-h3" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5"/></pattern>
                  <pattern id="hl-g3" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="220" height="190" fill="#fdf8f0"/>
                <rect width="220" height="190" fill="url(#hl-g3)" opacity="0.7"/>
                <g filter="url(#hl-sk3)">
                  <text x="8" y="11" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">CTA stage-gating sketch</text>
                  <text x="8" y="23" fontSize="5.5" fill="#ef4444" fontFamily="monospace">before — generic CTA everywhere</text>
                  {[0,1,2,3].map(i=>(
                    <g key={i}>
                      <rect x="8" y={27+i*12} width="204" height="10" rx="1" fill="none" stroke="#374151" strokeWidth="1"/>
                      <text x="12" y={35+i*12} fontSize="5" fill="#374151" fontFamily="monospace">Page {i+1}: homepage/school/dean/board</text>
                      <rect x="162" y={28+i*12} width="46" height="8" rx="1" fill="url(#hl-h1)" stroke="#374151" strokeWidth="1"/>
                      <text x="165" y={35+i*12} fontSize="4.5" fill="#374151" fontFamily="monospace">Request Demo</text>
                    </g>
                  ))}
                  <text x="18" y="86" fontSize="4.5" fill="#ef4444" fontFamily="monospace" fontStyle="italic">✗ high-commitment for discovery users</text>
                  <line x1="8" y1="92" x2="212" y2="92" stroke="#374151" strokeWidth="0.8" strokeDasharray="3 2"/>
                  <text x="8" y="103" fontSize="5.5" fill="#059669" fontFamily="monospace">after — CTAs matched to buyer stage</text>
                  {[{label:"Homepage",cta:"See how it works",fill:"#e9d5ff"},{label:"Principal",cta:"Request briefing",fill:"#dbeafe"},{label:"Dean",cta:"See teacher dash",fill:"#dcfce7"},{label:"Board",cta:"Get ROI model",fill:"#fef9c3"}].map(({label,cta,fill},i)=>(
                    <g key={label}>
                      <rect x="8" y={107+i*18} width="204" height="14" rx="1" fill="none" stroke="#374151" strokeWidth="1"/>
                      <text x="12" y={117+i*18} fontSize="5" fill="#374151" fontFamily="monospace">{label}</text>
                      <rect x="130" y={109+i*18} width="78" height="10" rx="1" fill={fill} stroke="#9ca3af" strokeWidth="0.9"/>
                      <text x="134" y={117+i*18} fontSize="5" fill="#374151" fontFamily="monospace">{cta}</text>
                    </g>
                  ))}
                  <text x="8" y="184" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">CTA = next step in buyer journey</text>
                </g>
              </svg>
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">CTA stage-gating — matched to buyer stage</p>
          </div>
        </div>
      </Sec>

      {/* ── 5. KEY DECISIONS ──────────────────────────────────────────────── */}
      <Sec id="decisions" label="05 · Key Design Decisions">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-10 leading-tight max-w-xl">
          Where the design choices diverged from the obvious answer.
        </h2>
        <div className="space-y-5">
          {[
            {
              n: "01", accent: "#a78bfa",
              decision: "One visual system across all four pages — zero brand fragmentation",
              context: "The initial stakeholder feedback was: 'make each page feel different so it's clearly tailored.' The instinct was to use different colour schemes or visual styles per persona.",
              choice: "Kept the same visual system — typography, colour palette, spacing, component library — across all four pages. What changes is the content hierarchy, the proof points selected, and the CTA. The brand stays identical.",
              tradeoff: "Some stakeholders felt the pages looked 'too similar.' But brand fragmentation would confuse sales reps linking to pages and risk undermining credibility — if the board page looks completely different from the principal page, it raises questions about the company's coherence."
            },
            {
              n: "02", accent: "#38bdf8",
              decision: "CTAs are stage-gates, not generic conversion buttons",
              context: "The initial brief included 'Request a Demo' as the CTA on all pages. That's a high-commitment ask for someone who just discovered the product on the homepage — and too generic for a board member who needs specific financial information.",
              choice: "Homepage: 'See how it works' (low-commitment, educational). Head of School: 'Request a principal briefing' (high-signal qualification). Dean: 'See the teacher dashboard' (product evaluation). Board: 'Get the ROI model' (budget-stage asset).",
              tradeoff: "Four different CTAs require the sales team to have a response protocol for each. I provided a one-pager mapping each CTA to the expected next step — so the sales handoff matched the page intent."
            },
            {
              n: "03", accent: "#34d399",
              decision: "Board page leads with a hard financial number — no mission, no story",
              context: "First draft of the board page opened with the company mission and student outcomes. That's compelling for a principal. A board member reviewing a budget item is not moved by mission.",
              choice: "Board page opens with: '$240K average increase in per-pupil funding within 24 months.' No preamble, no warmup. The number is the first thing on the page. The explanation of how it's calculated is below the fold.",
              tradeoff: "Feels blunt. Doesn't represent the brand's warmth. But warmth is not what board members are evaluating — they're evaluating fiduciary responsibility. The page serves its reader, not the brand's preferred tone."
            },
          ].map(({ n, accent, decision, context, choice, tradeoff }) => (
            <motion.div key={n} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-7 bg-white/[0.02]">
              <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-5">
                <p className="text-4xl font-black leading-none"><span className="text-white/10">{n}</span></p>
                <div>
                  <p className="text-white font-bold text-base mb-5 jost-secondary">{decision}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[{ label: "Context", text: context },{ label: "What I did", text: choice },{ label: "Trade-off", text: tradeoff }].map(({ label, text }) => (
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

      {/* ── 6. THE FOUR PAGES ─────────────────────────────────────────────── */}
      <Sec id="design" label="06 · The Four Pages">
        <p className="text-white/50 jost-secondary mb-10 max-w-2xl">Click any design to view full page.</p>
        <div className="space-y-10">
          {[
            { i: 0, role: "Homepage", platform: "WordPress", accent: "#a78bfa",
              audience: "School administrators who discovered 2HL through search or word of mouth — not yet in a buying cycle.",
              messagingLead: "Brand narrative and transformation story. Not a product pitch.", cta: "\"See how it works\" — low commitment" },
            { i: 1, role: "Head of School", platform: "HubSpot", accent: "#38bdf8",
              audience: "Principals accountable for school reputation, enrollment, and parent satisfaction.",
              messagingLead: "Peer testimonial + enrollment impact data. Ambition-first.", cta: "\"Request a principal briefing\" — high-signal" },
            { i: 2, role: "Dean of Academics", platform: "HubSpot", accent: "#34d399",
              audience: "Curriculum directors responsible for teacher experience and academic outcomes.",
              messagingLead: "Workflow fit and implementation ease. Teacher testimonial above the fold.", cta: "\"See the teacher dashboard\" — product evaluation" },
            { i: 3, role: "Board Member", platform: "HubSpot", accent: "#fb923c",
              audience: "Budget approvers evaluating financial return on a long-term investment.",
              messagingLead: "Hard financial number. No mission, no story. Numbers lead and close.", cta: "\"Get the ROI model\" — budget-stage asset" },
          ].map(({ i, role, platform, accent, audience, messagingLead, cta }) => (
            <motion.div key={role} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-7 items-start">
              <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}
                onClick={() => setExpanded(i)} className="cursor-zoom-in rounded-2xl overflow-hidden border border-white/10">
                <img src={allScreens[i].thumb} alt={role} className="w-full h-auto object-cover" />
              </motion.div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ background: accent + "20", color: accent }}>{platform}</span>
                  <h3 className="text-white font-bold albert-sans-medium text-xl">{role}</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Who this page is for", text: audience },
                    { label: "What leads the page", text: messagingLead },
                    { label: "Primary CTA", text: cta },
                  ].map(({ label, text }) => (
                    <div key={label}>
                      <p className="text-white/25 text-xs font-mono uppercase mb-1">{label}</p>
                      <p className="text-white/70 text-sm jost-secondary leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => setExpanded(i)} className="mt-4 flex items-center gap-1.5 text-xs font-mono text-white/30 hover:text-white/60 transition-colors">
                  View full design <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 7. TESTING ────────────────────────────────────────────────────── */}
      <Sec id="testing" label="07 · Testing & What Changed">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-xl">
          What I tested — and the findings that changed the design.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { finding: "Sales reps didn't know which page to send to which lead", what: "I assumed the page system would be self-explanatory to the sales team. In the first walkthrough, two sales reps asked 'how do I know which page to use?' The differentiation was clear to me but not to people who hadn't been part of the design process.", fix: "Built a one-page 'page routing guide' for the sales team — a simple decision tree: Is your contact a principal? → Page 1. Does the deal need board approval? → Page 3. This became part of the sales enablement material.", changed: true },
            { finding: "The board page was 'too cold' for stakeholders who reviewed it internally", what: "The org's own leadership reviewed the board page and called it 'blunt' and 'impersonal.' They wanted to add the mission statement to the top.", fix: "Kept the financial number as the headline. Added one line of brand context below it as a subheadline — enough to remind the reader of the company's purpose without softening the primary argument. The compromise: purpose below the number, not above it.", changed: true },
            { finding: "Homepage CTA 'See how it works' wasn't driving enough next-step action", what: "Analytics on the existing site showed high time-on-page but low CTA click rates. The 'See how it works' button felt like it might open a video or tour — users didn't know what would happen if they clicked.", fix: "Added a short descriptor below the CTA: 'Book a 20-minute walkthrough with our team.' Specificity about what happens after the click increased clarity without adding friction.", changed: true },
            { finding: "Dean page focused too much on the platform, not enough on the teacher", what: "First version of the dean page talked about '2HL's academic framework' and 'standards-aligned content.' This was product description. Deans don't want to hear about the product — they want to hear about their teachers.", fix: "Rewrote the opening section to feature a teacher's daily workflow: 'From 9am to 11am, your teachers focus on what they do best — teaching. 2HL handles the adaptive practice.' The product becomes the means, not the subject.", changed: true },
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
        <p className="text-white/40 text-sm jost-secondary mb-8 max-w-xl">Client feedback and qualitative validation at handoff. Conversion analytics were being set up post-launch — not available for this case study.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { v: "4 pages", l: "Each aligned to a distinct role in the school buying committee" },
            { v: "3 personas", l: "Separate HubSpot pages with individual tracking and CTA routing" },
            { v: "4 CTAs", l: "Each matched to that stakeholder's stage in the buying process" },
            { v: "Sales-ready", l: "Sales team has a page matched to the specific contact they're talking to" },
            { v: "1 brand", l: "Consistent visual system across all four pages — zero fragmentation" },
            { v: "4.5+/5", l: "Client satisfaction across all design review and iteration sessions" },
          ].map(({ v, l }) => (
            <div key={l} className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
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
            { t: "B2B UX is sales strategy with better typography", b: "This project made me understand that in B2B, design and sales enablement are the same job. The question isn't just 'is this easy to use?' — it's 'does this move the right person closer to a decision?' That lens should come into every B2B design brief." },
            { t: "The sales team is a user too", b: "I designed four pages for four buyer personas but nearly forgot the fifth user: the sales rep routing leads to the right page. Building the routing guide as part of the deliverable — not as an afterthought — changed how I think about what 'done' means for a design system." },
            { t: "I'd build in conversion tracking from the start", b: "The pages were set up in HubSpot, which has strong analytics. I should have pushed harder for UTM-tagged links from the sales team so we could measure which persona page was actually converting better. Without that data, we're optimising by intuition." },
            { t: "The reframe was everything", b: "The brief said 'better website.' The research said 'four different arguments for four different people.' If I'd designed a better single homepage, I'd have built something that looked great and changed nothing. The diagnosis has to come before the solution." },
          ].map(({ t, b }) => (
            <div key={t} className="border-l-2 border-white/8 pl-5">
              <p className="text-white font-semibold jost-secondary mb-2">{t}</p>
              <p className="text-white/50 text-sm jost-secondary leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </Sec>

      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold albert-sans-medium text-white mb-1">Want to walk through this project?</h2>
            <p className="text-white/40 jost-secondary text-sm">Happy to go deeper on the messaging architecture or the stakeholder mapping process.</p>
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
