import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CaseStudyNavigation } from "@/components/case-study-navigation";
import LogoImage from "@assets/Logo white_1754674219191.png";
import linkedinLogo from "@assets/linkedin 1_1756620179383.png";
import fffVideoPath from "@assets/FFF website video (video-converter.com)_1754054201797.webm";

const navSections = [
  { id: "brief",      title: "The Brief",        color: "from-slate-400 to-gray-400" },
  { id: "discovery",  title: "Discovery",         color: "from-purple-400 to-pink-400" },
  { id: "reframe",    title: "Problem Reframe",   color: "from-orange-400 to-red-400" },
  { id: "explore",    title: "Exploration",        color: "from-blue-400 to-cyan-400" },
  { id: "decisions",  title: "Key Decisions",     color: "from-cyan-400 to-blue-400" },
  { id: "design",     title: "Final Design",      color: "from-teal-400 to-green-400" },
  { id: "testing",    title: "Testing",           color: "from-green-400 to-teal-400" },
  { id: "outcomes",   title: "Outcomes",          color: "from-green-400 to-cyan-400" },
  { id: "reflection", title: "Reflection",        color: "from-yellow-400 to-orange-400" },
];

const Sec = ({ id, label, children }: { id: string; label: string; children: React.ReactNode }) => (
  <section id={id} className="py-14 px-6 border-t border-white/5">
    <div className="max-w-5xl mx-auto">
      <p className="text-white/25 text-xs tracking-widest uppercase font-mono mb-8">{label}</p>
      {children}
    </div>
  </section>
);

export default function FutureFirstFamiliesCaseStudy() {
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
    <div ref={containerRef} className="min-h-screen bg-[#090910] text-white fff-case-study">
      <CaseStudyNavigation sections={navSections} />
      <motion.div className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 z-[9999]" style={{ width: progressWidth }} />

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
          <p className="text-white/35 text-xs tracking-widest uppercase mb-4 font-mono">Web Platform · Advocacy · End-to-end Design</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white albert-sans-medium leading-[0.92] mb-5">Future First<br />Families</h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed jost-secondary">
            Designed a gamified advocacy platform end-to-end — from stakeholder research to a complete web product that turned a spreadsheet-and-email operation into a structured engagement system.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 rounded-2xl overflow-hidden border border-white/10">
          <video src={fffVideoPath} autoPlay loop muted playsInline className="w-full h-auto" />
        </motion.div>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {[["Role","Lead Product Designer"],["Timeline","4 weeks"],["Platform","Web (HubSpot + custom)"],["Tools","Figma · FigJam · Maze · HubSpot"]].map(([k,v]) => (
            <div key={k} className="px-3 py-1.5 rounded-full border border-white/8 flex items-center gap-1.5">
              <span className="text-white/25 text-xs font-mono">{k}:</span>
              <span className="text-white/60 text-xs">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 1. BRIEF ──────────────────────────────────────────────────────── */}
      <Sec id="brief" label="01 · The Brief">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-5 leading-tight">
              What I was asked to build — and the org's actual situation.
            </h2>
            <p className="text-white/60 jost-secondary leading-relaxed mb-4">
              FutureFirstFamilies is an advocacy organisation focused on education policy. Parents sign up wanting to help — attending school board meetings, contacting legislators, sharing information in their community. The org had real momentum and genuinely engaged members.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed">
              The brief was to design a platform that could replace their fragmented system of emails, spreadsheets, and manual follow-ups. The goal: make participation easier, more structured, and more visible to both advocates and administrators.
            </p>
          </div>
          <div className="space-y-4">
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">What existed before</p>
              {[
                "Google Sheets tracking who did what (manually updated by one admin)",
                "Weekly email blasts with tasks — no personalisation, no tracking",
                "No onboarding — new members had to ask what to do",
                "No visibility into collective impact — individual actions felt disconnected",
                "Admins spending 60%+ of their time on coordination, not programme development",
              ].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2 last:mb-0">
                  <span className="w-1 h-1 rounded-full bg-white/20 mt-2 flex-shrink-0"/>
                  <p className="text-white/55 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white/30 text-xs font-mono uppercase mb-3">Constraints</p>
              {[
                "4-week timeline — enough for core flows, not everything",
                "HubSpot as the CRM backend — design needed to work with existing data model",
                "70%+ of members accessed content on mobile — mobile-first was non-negotiable",
                "Org couldn't afford ongoing dev — design needed to be implementable in HubSpot",
              ].map(c => (
                <div key={c} className="flex items-start gap-2.5 mb-2 last:mb-0">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0"/>
                  <p className="text-white/65 text-sm jost-secondary">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ── 2. DISCOVERY ──────────────────────────────────────────────────── */}
      <Sec id="discovery" label="02 · Discovery">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-2xl">
          What I learned before designing anything.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {[
            {
              method: "Admin interviews (3 sessions)",
              what: "Spoke with the two people responsible for running the programme. They were spending Sunday evenings manually updating spreadsheets, cross-referencing email replies to see who had completed tasks. One of them had built a colour-coding system in Google Sheets that only they understood.",
              insight: "The admin burden wasn't just inefficiency — it was a fragility. If either of them left, the system would collapse. The org needed infrastructure, not just a nicer UI."
            },
            {
              method: "Member interviews (6 sessions)",
              what: "Talked to 6 active members — 2 highly engaged, 2 moderately engaged, 2 who had signed up and stopped participating. The drop-offs weren't disengaged from the cause. They were confused about what was expected of them and hadn't heard back after completing their first task.",
              insight: "The drop-off wasn't a motivation problem. Members cared. The problem was structural: no clear next step, no acknowledgement of completed actions, no sense of progress. The org was leaving its most motivated people without direction."
            },
            {
              method: "Behavioural analysis of email history",
              what: "The org shared 6 months of email campaign data — open rates, link clicks, replies. Short, time-boxed asks ('call your school board member — takes 3 minutes') consistently generated 3x more responses than open-ended asks ('get involved with local policy'). Nobody had noticed this pattern explicitly.",
              insight: "The format of the ask mattered more than the urgency of the cause. Specific + time-bounded = completion. Open-ended = silence."
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
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the org thought the problem was</p>
            <p className="text-white/50 text-lg jost-secondary leading-relaxed mb-8 italic">
              "Our members aren't engaged enough. We need to motivate them to participate more."
            </p>
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What the research showed</p>
            <p className="text-white font-semibold text-xl jost-secondary leading-relaxed">
              "Members were already motivated. The system was making them feel like their participation disappeared into a void."
            </p>
          </div>
          <div>
            <p className="text-white/60 jost-secondary leading-relaxed mb-5">
              This was a critical reframe. If the problem were motivation, the solution would be better marketing, more compelling email copy, or event invitations. That would have been a wasted 4 weeks.
            </p>
            <p className="text-white/60 jost-secondary leading-relaxed mb-5">
              The actual problem was <strong className="text-white">structural</strong>: no visible progress, no acknowledgement, no clear next step after a task was done. Advocacy felt like shouting into a void not because the cause wasn't compelling, but because the system gave no feedback.
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                { from: "How do we make members more motivated?", to: "How do we make participation feel like it's working — so motivation sustains itself?" },
                { from: "How do we get more task completion?", to: "How do we make each task feel completable, bounded, and worth the time?" },
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

      {/* ── 4. EXPLORATION ────────────────────────────────────────────────── */}
      <Sec id="explore" label="04 · Exploration">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-4 leading-tight max-w-2xl">
          Directions explored — and what I rejected before the final approach.
        </h2>
        <p className="text-white/50 jost-secondary mb-10 max-w-2xl">
          I sketched three fundamentally different structural approaches before committing to the gamified task model.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Option A — Community forum", status: "Rejected", reason: "A discussion-first platform (similar to Slack or a Facebook Group) would leverage existing member relationships. But after the research, I knew the problem wasn't connection — it was clarity of action. A forum would add noise without providing direction.", accent: "#ef4444" },
            { label: "Option B — Event calendar", status: "Rejected", reason: "A calendar of upcoming advocacy events (meetings, calls, letter campaigns) was simple to implement and easy to understand. But events are time-fixed — members who miss them have no other way to contribute. It would replicate the existing email model with better UI.", accent: "#f97316" },
            { label: "Option C — Task-based gamification", status: "Chosen", reason: "Structured tasks with time estimates, completion states, points, and milestones directly addressed every insight from research: bounded asks work better, acknowledgement matters, progress needs to be visible. More complex to implement but the right answer for the actual problem.", accent: "#22c55e" },
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

        <p className="text-white/30 text-xs font-mono uppercase mb-4 mt-2">Lo-fi sketches — before any visual design</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sketch 1: Task card v1 vs v2 */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <svg viewBox="0 0 220 190" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="fff-sk1"><feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter>
                  <pattern id="fff-h1" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.55"/></pattern>
                  <pattern id="fff-g1" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="220" height="190" fill="#fdf8f0"/>
                <rect width="220" height="190" fill="url(#fff-g1)" opacity="0.7"/>
                <g filter="url(#fff-sk1)">
                  <text x="8" y="12" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">Task card: open-ended vs. bounded</text>
                  <text x="8" y="24" fontSize="5.5" fill="#ef4444" fontFamily="monospace">v1 — vague ask</text>
                  <rect x="8" y="28" width="204" height="24" rx="1" fill="#fef2f2" stroke="#f87171" strokeWidth="1.4"/>
                  <text x="14" y="40" fontSize="5.5" fill="#374151" fontFamily="monospace">Get involved in advocacy</text>
                  <text x="14" y="49" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">[ how? when? how long? → abandoned ]</text>
                  <line x1="8" y1="58" x2="212" y2="58" stroke="#374151" strokeWidth="0.8" strokeDasharray="3 2"/>
                  <text x="8" y="70" fontSize="5.5" fill="#059669" fontFamily="monospace">v2 — verb-first, bounded</text>
                  <rect x="8" y="74" width="204" height="62" rx="1" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.6"/>
                  <text x="14" y="85" fontSize="6.5" fill="#374151" fontFamily="monospace" fontWeight="bold">Contact your school board rep</text>
                  <text x="14" y="96" fontSize="5" fill="#6b7280" fontFamily="monospace">3 min · 3 steps · contact</text>
                  <line x1="14" y1="102" x2="208" y2="102" stroke="#374151" strokeWidth="0.7" strokeDasharray="3 2"/>
                  <rect x="14" y="106" width="192" height="10" rx="1" fill="#dcfce7" stroke="#22c55e" strokeWidth="0.9"/>
                  <text x="22" y="114" fontSize="5" fill="#059669" fontFamily="monospace">Step 1 complete ✓ → reveal step 2</text>
                  <rect x="14" y="120" width="192" height="10" rx="1" fill="#e0e7ff" stroke="#818cf8" strokeWidth="0.9"/>
                  <text x="22" y="128" fontSize="5" fill="#4338ca" fontFamily="monospace">Step 2 revealed → [ complete ]</text>
                  <text x="8" y="152" fontSize="5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">3× more completions from bounded format</text>
                  <rect x="8" y="158" width="204" height="24" rx="1" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.4"/>
                  <text x="38" y="168" fontSize="6" fill="#2563eb" fontFamily="monospace" fontWeight="bold">+50 pts → toward Advocate</text>
                  <text x="48" y="178" fontSize="5" fill="#2563eb" fontFamily="monospace">[ specific reward, not decoration ]</text>
                </g>
              </svg>
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Task card — open-ended vs. bounded</p>
          </div>

          {/* Sketch 2: Dashboard structure */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <svg viewBox="0 0 220 190" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="fff-sk2"><feTurbulence type="turbulence" baseFrequency="0.028" numOctaves="3" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter>
                  <pattern id="fff-h2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5"/></pattern>
                  <pattern id="fff-g2" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="220" height="190" fill="#fdf8f0"/>
                <rect width="220" height="190" fill="url(#fff-g2)" opacity="0.7"/>
                <g filter="url(#fff-sk2)">
                  <text x="8" y="12" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">Dashboard — engagement loop</text>
                  <rect x="8" y="16" width="204" height="18" rx="1" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.4"/>
                  <text x="12" y="25" fontSize="5.5" fill="#374151" fontFamily="monospace">Welcome Sarah · streak 🔥 5 days</text>
                  <text x="12" y="32" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">[ streak = habit signal ]</text>
                  <text x="8" y="46" fontSize="5.5" fill="#2563eb" fontFamily="monospace" fontWeight="bold">YOUR NEXT TASK</text>
                  <rect x="8" y="50" width="204" height="30" rx="1" fill="#f0f9ff" stroke="#38bdf8" strokeWidth="1.2"/>
                  <text x="12" y="61" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">Call school board member</text>
                  <text x="12" y="71" fontSize="5" fill="#6b7280" fontFamily="monospace">3 min · easy · contact</text>
                  <rect x="168" y="54" width="40" height="22" rx="1" fill="url(#fff-h2)" stroke="#374151" strokeWidth="1"/>
                  <text x="173" y="68" fontSize="6" fill="#374151" fontFamily="monospace">Start</text>
                  <text x="8" y="96" fontSize="5.5" fill="#6b7280" fontFamily="monospace" fontWeight="bold">COMMUNITY</text>
                  <rect x="8" y="100" width="204" height="16" rx="1" fill="none" stroke="#374151" strokeWidth="1.1"/>
                  <text x="14" y="111" fontSize="5.5" fill="#374151" fontFamily="monospace">847 actions this month</text>
                  <text x="8" y="130" fontSize="5.5" fill="#6b7280" fontFamily="monospace" fontWeight="bold">MORE TASKS</text>
                  {[0,1,2].map(i=>(
                    <rect key={i} x="8" y={134+i*11} width="204" height="9" rx="1" fill="none" stroke="#374151" strokeWidth="1"/>
                  ))}
                  <text x="12" y="141" fontSize="5" fill="#374151" fontFamily="monospace">Attend school board meeting · 45min</text>
                  <text x="12" y="152" fontSize="5" fill="#374151" fontFamily="monospace">Share post about funding · 2min</text>
                  <text x="12" y="163" fontSize="5" fill="#374151" fontFamily="monospace">Write letter to state rep · 10min</text>
                  <text x="8" y="180" fontSize="4.5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">next task always visible → no dead ends</text>
                </g>
              </svg>
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Dashboard — task + community structure</p>
          </div>

          {/* Sketch 3: Leaderboard removed */}
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <svg viewBox="0 0 220 190" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="fff-sk3"><feTurbulence type="turbulence" baseFrequency="0.026" numOctaves="3" seed="11" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="2.2" xChannelSelector="R" yChannelSelector="G"/></filter>
                  <pattern id="fff-g3" width="14" height="14" patternUnits="userSpaceOnUse"><path d="M14 0L0 0 0 14" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/></pattern>
                </defs>
                <rect width="220" height="190" fill="#fdf8f0"/>
                <rect width="220" height="190" fill="url(#fff-g3)" opacity="0.7"/>
                <g filter="url(#fff-sk3)">
                  <text x="8" y="12" fontSize="6" fill="#374151" fontFamily="monospace" fontWeight="bold">Test: leaderboard → community counter</text>
                  <text x="8" y="24" fontSize="5.5" fill="#ef4444" fontFamily="monospace">v1 — leaderboard</text>
                  <rect x="8" y="28" width="204" height="52" rx="1" fill="none" stroke="#374151" strokeWidth="1.2"/>
                  {["1. Anna D.  — 320 pts","2. James R.  — 280 pts","3. Maria T.  — 240 pts","...","20. You  — 45 pts  ←"].map((t,i)=>(
                    <text key={i} x="14" y={38+i*10} fontSize="5" fill={i===4 ? "#ef4444" : "#374151"} fontFamily="monospace" fontWeight={i===4 ? "bold" : "normal"}>{t}</text>
                  ))}
                  <text x="18" y="92" fontSize="5" fill="#ef4444" fontFamily="monospace" fontStyle="italic">✗ rank 20: 'what's the point?'</text>
                  <line x1="8" y1="98" x2="212" y2="98" stroke="#374151" strokeWidth="0.8" strokeDasharray="3 2"/>
                  <text x="8" y="110" fontSize="5.5" fill="#059669" fontFamily="monospace">v2 — community counter</text>
                  <rect x="8" y="114" width="204" height="26" rx="1" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.6"/>
                  <text x="14" y="125" fontSize="5.5" fill="#374151" fontFamily="monospace">Your community:</text>
                  <text x="14" y="135" fontSize="8" fill="#059669" fontFamily="monospace" fontWeight="bold">847 actions this month</text>
                  <text x="14" y="145" fontSize="5" fill="#6b7280" fontFamily="monospace" fontStyle="italic">everyone contributes to one number</text>
                  <text x="8" y="162" fontSize="5" fill="#9ca3af" fontFamily="monospace" fontStyle="italic">removed competition → added contribution</text>
                  <text x="8" y="174" fontSize="5" fill="#374151" fontFamily="monospace">testing finding: low-ranked = disengaged</text>
                  <text x="8" y="184" fontSize="5" fill="#374151" fontFamily="monospace">leaderboard removed entirely</text>
                </g>
              </svg>
            </div>
            <p className="text-white/30 text-xs mt-2 font-mono">Testing: leaderboard removed → counter</p>
          </div>
        </div>
      </Sec>

      {/* ── 5. KEY DECISIONS ──────────────────────────────────────────────── */}
      <Sec id="decisions" label="05 · Key Design Decisions">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-10 leading-tight max-w-xl">
          Four decisions that shaped the system.
        </h2>
        <div className="space-y-5">
          {[
            {
              n: "01", accent: "#38bdf8",
              decision: "Tasks must feel completable — a clear start, a clear end",
              context: "Most advocacy asks are open-ended: 'stay engaged,' 'support the cause.' Research showed this produces no action. Specific asks with time estimates produced 3x more responses.",
              choice: "Every task has: a title (action-verb first), a time estimate ('Takes 3 minutes'), numbered step-by-step instructions, and a single completion button. Nothing else.",
              tradeoff: "This required the admin team to restructure how they write tasks. I built a task creation template and ran a workshop with admins on how to write bounded tasks. Extra upfront work that paid off in product quality."
            },
            {
              n: "02", accent: "#a78bfa",
              decision: "First task in session one — onboarding earns the right to ask",
              context: "Members who dropped off in the first 2 weeks cited 'not knowing what to do next' as the reason. The org's existing onboarding explained the mission but offered no immediate action.",
              choice: "Onboarding ends with the user completing their first task — a pre-selected short action that takes 2 minutes. No feature tour, no profile completion prompts. First action before anything else.",
              tradeoff: "Members don't see the full platform until after their first task. Some feel slightly surprised. But the data showed first-session task completion is the strongest predictor of 30-day retention — so the constraint is worth it."
            },
            {
              n: "03", accent: "#34d399",
              decision: "Progress is visible in three layers — personal, milestone, and community",
              context: "Initial designs showed only personal points. In the first round of testing, two participants said 'this feels like I'm competing with myself.' Progress needed context.",
              choice: "Three progress signals: (1) personal points and streak, (2) milestone badges at meaningful thresholds, (3) a community counter showing total actions taken by all members this week.",
              tradeoff: "Community leaderboards were considered and removed. They introduced competition where we wanted contribution — members who saw a leaderboard became less likely to participate if they weren't near the top."
            },
            {
              n: "04", accent: "#fb923c",
              decision: "Mobile-first meant designing for interruptions, not sessions",
              context: "70%+ of members were accessing content on phones, mostly during commutes or brief breaks. Long tasks or multi-step flows that required sustained focus weren't getting completed.",
              choice: "Maximum 5 steps per task. Tasks can be paused and resumed. Dashboard state is visible on lock screen notification. Each section of the platform is independently useful — you don't need to 'start from the beginning.'",
              tradeoff: "Resumable tasks required more complex state management on the backend. This was flagged as a development cost. I prioritised it anyway based on the mobile usage data — you can't design for a context you're not willing to fully commit to."
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

      {/* ── 6. FINAL DESIGN ───────────────────────────────────────────────── */}
      <Sec id="design" label="06 · Final Design">
        <p className="text-white/50 jost-secondary mb-8 max-w-2xl">The full product — dashboard, task feed, milestones, profile, and admin view.</p>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <video src={fffVideoPath} controls loop muted className="w-full h-auto" />
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { area: "Dashboard", desc: "Shows active tasks, streak, recent community activity, and highest-priority next action. Everything above fold is actionable. No editorial content — only things you can do or track right now." },
            { area: "Task Feed", desc: "Tasks organised by category (attend, contact, share, donate). Each shows a time estimate, difficulty level, and step count. Filtering is by type and time commitment — not by urgency, which implied pressure." },
            { area: "Progress & Milestones", desc: "Personal points, weekly streak, and badges at meaningful thresholds (first task, 10 tasks, 50 tasks, etc.). Community counter shows total actions this week — not a leaderboard, just a collective number." },
          ].map(({ area, desc }) => (
            <div key={area} className="border border-white/5 rounded-2xl p-5 bg-white/[0.02]">
              <p className="text-white font-semibold albert-sans-medium mb-2">{area}</p>
              <p className="text-white/50 text-sm jost-secondary leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* ── 7. TESTING ────────────────────────────────────────────────────── */}
      <Sec id="testing" label="07 · Testing & What Changed">
        <h2 className="text-3xl font-bold albert-sans-medium text-white mb-8 leading-tight max-w-xl">
          Five things I tested. Three of them changed the design.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { finding: "The onboarding flow was skimmed, not read", what: "Version 1 opened with a 3-screen explanation of how the platform works. All 8 testers skipped through it without reading. Two of them couldn't name the core concept (task-based advocacy) after completing onboarding.", fix: "Cut all 3 explanation screens. Replaced with: (1) welcome screen, (2) first task, (3) completion confirmation. The platform explains itself by being used, not by being described.", changed: true },
            { finding: "Leaderboard made low-ranked users less likely to complete tasks", what: "The first version included a top-10 leaderboard visible from the dashboard. In testing, participants who saw themselves ranked 20th or lower disengaged. One participant said 'if I'm that far behind, what's the point?'", fix: "Removed the leaderboard entirely. Replaced with a community counter: 'Your community has completed 847 actions this month.' Participation, not competition.", changed: true },
            { finding: "Task steps were being read as instructions, not as a process", what: "Users were opening tasks, reading all the steps, and then closing them to 'do them later.' The step-by-step format felt like a list to read, not a flow to follow.", fix: "Changed to one-step-at-a-time reveal — you see step 1, mark it complete, then see step 2. Forces engagement with the process rather than passive reading of instructions.", changed: true },
            { finding: "Points had no meaning without context", what: "Testers were earning points but couldn't say what the points meant or what they were working toward. 'I got 50 points — is that good?'", fix: "Added milestone indicators directly to the points display: '50/100 points to Advocate badge.' Progress has to have a visible destination to feel like progress.", changed: false },
            { finding: "Admin task creation was error-prone", what: "The admin interface for creating tasks had no validation — admins could submit tasks with no time estimate, no steps, and no category. This would surface as broken content for members.", fix: "Added required fields, inline validation, and a preview mode so admins see exactly what members will see before publishing a task.", changed: false },
          ].map(({ finding, what, fix, changed }) => (
            <motion.div key={finding} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
              className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
              <div className="flex items-start gap-2.5 mb-3">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${changed ? "bg-amber-400" : "bg-white/20"}`} />
                <p className="text-white font-semibold text-sm jost-secondary">{finding}</p>
              </div>
              <p className="text-white/45 text-sm jost-secondary leading-relaxed mb-3">{what}</p>
              <div className="border-t border-white/5 pt-3">
                <p className="text-white/25 text-xs font-mono uppercase mb-1.5">{changed ? "What changed" : "What I recommended"}</p>
                <p className="text-white/70 text-sm jost-secondary leading-relaxed">{fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Sec>

      {/* ── 8. OUTCOMES ───────────────────────────────────────────────────── */}
      <Sec id="outcomes" label="08 · Outcomes">
        <p className="text-white/40 text-sm jost-secondary mb-8 max-w-xl">Based on usability testing and stakeholder review at handoff. The platform was being implemented at the time of this case study — production analytics not yet available.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { v: "89%", l: "Onboarding completion rate — up from an estimated 40% with the old email flow" },
            { v: "3×", l: "Task completion rate vs. open-ended email asks (from behavioural analysis)" },
            { v: "–60%", l: "Admin coordination time saved by automating tracking and notifications" },
            { v: "One session", l: "Time to first task completion — new members take action before leaving" },
            { v: "70%+", l: "Mobile sessions — the mobile-first design was validated by usage patterns" },
            { v: "4.6/5", l: "Usability score from stakeholder walkthroughs with 8 test participants" },
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
            { t: "The research reframe was the most valuable hour of the project", b: "Without the interviews, I'd have built a better-looking version of what they already had. The research showed the problem was structural, not cosmetic. That single shift changed everything — the features, the flows, the copy, the gamification approach." },
            { t: "Gamification has to be grounded in actual impact", b: "Points and badges work when they reflect real things people did. When they're decorative, users see through them in one session. I tied every reward mechanic to a specific advocacy action — not activity volume. That distinction matters." },
            { t: "Testing with actual tasks beats testing with tasks about tasks", b: "The most useful finding — the leaderboard problem — only emerged when testers had actually spent time earning points and then saw where they ranked. Prototype testing with placeholder data wouldn't have caught it." },
            { t: "What I'd change", b: "I'd push harder for a longer engagement test — 2–3 weeks with a small group of real members using the platform before full launch. Four weeks of design followed by a single-session usability test leaves too much uncertainty about whether the habit loop actually forms over time." },
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
            <p className="text-white/40 jost-secondary text-sm">Happy to go deeper on any section — research, decisions, or the gamification model.</p>
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
