import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { CaseStudyNavigation } from "@/components/case-study-navigation";
import LogoImage from "@assets/Logo white_1754674219191.png";
import linkedinLogo from "@assets/linkedin 1_1756620179383.png";
import fffVideoPath from "@assets/FFF website video (video-converter.com)_1754054201797.webm";

const navSections = [
  { id: "tldr", title: "TL;DR", color: "from-blue-400 to-cyan-400" },
  { id: "problem", title: "The Problem", color: "from-orange-400 to-red-400" },
  { id: "approach", title: "My Approach", color: "from-purple-400 to-pink-400" },
  { id: "product", title: "The Product", color: "from-cyan-400 to-blue-400" },
  { id: "outcomes", title: "Outcomes", color: "from-green-400 to-teal-400" },
  { id: "reflection", title: "Reflection", color: "from-yellow-400 to-orange-400" },
];

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

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><img src={LogoImage} className="h-9 w-9 object-contain cursor-pointer" alt="Logo" /></Link>
          <motion.button onClick={() => window.location.href = "/"} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" whileHover={{ x: -2 }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4 font-mono">Web Platform · Advocacy · 4 weeks</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white albert-sans-medium leading-[0.95] mb-6">
            Future First<br />Families
          </h1>
          <p className="text-xl text-white/65 max-w-2xl leading-relaxed jost-secondary">
            Designed a gamified advocacy platform that turned a messy spreadsheet-and-email operation into a structured engagement system — with tasks, milestones, and visible progress for families driving community change.
          </p>
        </motion.div>

        {/* hero video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden border border-white/10"
        >
          <video
            src={fffVideoPath}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* meta pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["Lead Product Designer", "Figma", "HubSpot Integration", "Mobile-first", "Solo Project"].map(t => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50 font-mono">{t}</span>
          ))}
        </div>
      </section>

      {/* ── TL;DR ────────────────────────────────────────────────────── */}
      <section id="tldr" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Quick summary</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "The situation", text: "FutureFirstFamilies had passionate advocates — parents who cared about education policy — but no system to channel that energy. Participation was tracked with spreadsheets and coordinated over email." },
              { label: "What I built", text: "A gamified web platform where families could discover advocacy tasks, track their progress, earn milestones, and see how their actions connected to community impact." },
              { label: "The core bet", text: "Advocacy at scale requires the same psychology as habit-building apps. Structure, visible progress, and small wins drive sustained participation more than mission alone." },
            ].map(({ label, text }) => (
              <div key={label} className="border-l border-white/10 pl-5">
                <p className="text-white/40 text-xs font-mono uppercase mb-2">{label}</p>
                <p className="text-white/80 jost-secondary leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ─────────────────────────────────────────────── */}
      <section id="problem" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">The problem</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold albert-sans-medium text-white mb-6 leading-tight">
                Good intentions don't survive a bad system.
              </h2>
              <p className="text-white/65 jost-secondary leading-relaxed mb-5">
                The parents involved with FFF genuinely wanted to make an impact. But every week, the org was sending out emails, manually tracking who did what, and trying to follow up individually. It didn't scale — and families who fell off early rarely came back.
              </p>
              <p className="text-white/65 jost-secondary leading-relaxed">
                The problem wasn't motivation. It was that there was no visible progress, no clear next step, and no sense that individual actions were adding up to something. Advocacy felt like shouting into a void.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "No system to surface what tasks to do next — users had to ask or remember",
                "Participation tracking was entirely manual — admins spent 60%+ of time on coordination",
                "New members dropped within 2 weeks with no structured onboarding",
                "No visibility into collective impact — individual actions felt disconnected",
                "Mobile experience was an afterthought — 70%+ of users were on phone",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-blue-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  </span>
                  <p className="text-white/70 jost-secondary text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MY APPROACH ─────────────────────────────────────────────── */}
      <section id="approach" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">My approach</p>
          <h2 className="text-3xl md:text-4xl font-bold albert-sans-medium text-white mb-12 leading-tight max-w-2xl">
            Three principles that shaped the platform.
          </h2>

          <div className="space-y-6">
            {[
              {
                n: "01",
                decision: "Tasks need to feel completable, not aspirational",
                why: "I looked at which advocacy requests got the most response. Short, time-boxed actions ('call your school board member — takes 3 minutes') consistently outperformed open-ended asks ('get involved with local policy'). I designed the task system around this: each task has a clear description, time estimate, step-by-step instructions, and a completion state.",
                result: "Every task feels like it has an end — because it does."
              },
              {
                n: "02",
                decision: "Progress has to be visible — not just tracked",
                why: "People need to feel like they're getting somewhere. I didn't just build a progress bar — I designed a milestone system that celebrates meaningful thresholds, shows a streak of recent activity, and lets users see their contribution in context of the wider community.",
                result: "Gamification that's grounded in real action, not hollow points."
              },
              {
                n: "03",
                decision: "Onboarding earns the right to ask for participation",
                why: "FFF had a retention problem — not a recruitment problem. New members arrived enthusiastic and left within two weeks, unclear about what was expected of them. I designed a structured onboarding that sets context, shows a first task immediately, and gets the user to a 'win' within their first session.",
                result: "A first action in session one dramatically changes retention curves."
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
                  <p className="text-white/30 text-xs font-mono uppercase mb-1">Design intent</p>
                  <p className="text-white/65 text-sm jost-secondary">{result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PRODUCT ─────────────────────────────────────────────── */}
      <section id="product" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">The product</p>
          <p className="text-white/60 jost-secondary max-w-2xl mb-12">
            Three screens do most of the work: the Dashboard (what's happening + next action), the Task Feed (what to do), and the Profile (progress + achievements).
          </p>

          {/* full video embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
            <video src={fffVideoPath} controls loop muted className="w-full h-auto" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { area: "Dashboard", desc: "Shows active tasks, a streak indicator, recent community activity, and a nudge toward the highest-priority next action. Everything above fold is actionable." },
              { area: "Task Feed", desc: "Tasks have clear time estimates, difficulty levels, and step-by-step instruction. Filtering by type and availability prevents overwhelm. Completion is one tap." },
              { area: "Progress & Milestones", desc: "A personal profile shows points, badges earned, and a visual advocacy timeline. Community leaderboards are optional — not the default — to avoid pressure over purpose." },
            ].map(({ area, desc }) => (
              <div key={area} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-white font-semibold albert-sans-medium mb-2">{area}</p>
                <p className="text-white/55 text-sm jost-secondary leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
            <p className="text-white/30 text-xs font-mono uppercase mb-4">Design system choices</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Color", v: "Blue-dominant palette. Approachable, civic, never corporate. Green for success/completion. Orange only for time-sensitive nudges." },
                { label: "Typography", v: "Bold headings for at-a-glance status. Light body for instructions. Clear visual hierarchy at every task card level." },
                { label: "Interaction", v: "Task completion is a clear moment — a satisfying animation, a point addition, and an immediate prompt for the next action." },
                { label: "Density", v: "Mobile-first meant conservative use of space. Cards are compact but never cramped. Information only appears when it's actionable." },
              ].map(({ label, v }) => (
                <div key={label}>
                  <p className="text-white/40 text-xs font-mono mb-1">{label}</p>
                  <p className="text-white/70 text-sm jost-secondary">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ───────────────────────────────────────────────── */}
      <section id="outcomes" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Outcomes</p>
          <p className="text-white/50 text-sm jost-secondary mb-8 max-w-xl">
            Based on usability testing and stakeholder review at launch. Production analytics were not yet available at the time of this case study.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { v: "89%", l: "Onboarding completion rate in testing" },
              { v: "3×", l: "Task completion vs. open-ended email asks" },
              { v: "–60%", l: "Admin coordination time saved" },
              { v: "70%+", l: "Mobile sessions — design met users where they were" },
              { v: "< 2 wk", l: "Previous dropout point — now with active onboarding path" },
              { v: "4.6/5", l: "Usability score from stakeholder walkthroughs" },
            ].map(({ v, l }) => (
              <div key={l} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-3xl font-black text-white albert-sans-medium mb-2">{v}</p>
                <p className="text-white/45 text-sm jost-secondary">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ─────────────────────────────────────────────── */}
      <section id="reflection" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Reflection</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "Gamification has to earn its place", b: "Points and badges work when they reflect real progress. When they're decorative, users see through them immediately. I tied every reward mechanic to a concrete advocacy action — not activity volume." },
              { t: "Structure is a gift, not a constraint", b: "The org was worried that too much structure would feel patronizing to engaged parents. The opposite was true — clarity gave busy people permission to participate on their own terms and time." },
              { t: "Behavior change needs iteration", b: "Four weeks was enough to validate the core engagement loop, but behavior change platforms ideally need 60–90 day feedback cycles to know if the habits are actually sticking. I'd build more explicit feedback channels into the next version." },
              { t: "What I'd do differently", b: "I'd validate the task format before designing the full system — a lightweight prototype with 5–10 real families would have told me a lot more than stakeholder interviews about what actually motivates participation in practice." },
            ].map(({ t, b }) => (
              <div key={t} className="border-l-2 border-white/10 pl-6">
                <p className="text-white font-semibold jost-secondary mb-2">{t}</p>
                <p className="text-white/55 text-sm jost-secondary leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-2">Want to talk through this project?</h2>
            <p className="text-white/45 jost-secondary">Happy to walk through the engagement system in detail.</p>
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
