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
  { id: "tldr", title: "TL;DR", color: "from-violet-400 to-purple-400" },
  { id: "problem", title: "The Problem", color: "from-orange-400 to-red-400" },
  { id: "insight", title: "The Insight", color: "from-purple-400 to-pink-400" },
  { id: "pages", title: "The Four Pages", color: "from-cyan-400 to-blue-400" },
  { id: "outcomes", title: "Outcomes", color: "from-green-400 to-teal-400" },
  { id: "reflection", title: "Reflection", color: "from-yellow-400 to-orange-400" },
];

const screens = [
  { thumb: homepageThumbnail, full: homepageDesign, label: "Homepage", platform: "WordPress", audience: "General discovery — school administrators finding 2HL for the first time. Brand story over conversion.", color: "from-violet-500 to-purple-600" },
  { thumb: persona1Thumbnail, full: persona1Design, label: "Head of School", platform: "HubSpot", audience: "Outcome-focused. Cares about school differentiation and parent satisfaction. Lead with results.", color: "from-blue-500 to-cyan-600" },
  { thumb: persona2Thumbnail, full: persona2Design, label: "Dean of Academics", platform: "HubSpot", audience: "Process-focused. Cares about how teachers will use this and whether student data is actionable.", color: "from-teal-500 to-green-600" },
  { thumb: persona3Thumbnail, full: persona3Design, label: "Board Member", platform: "HubSpot", audience: "ROI-focused. Cares about long-term investment return and district-level strategic fit.", color: "from-orange-500 to-amber-600" },
];

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

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><img src={LogoImage} className="h-9 w-9 object-contain cursor-pointer" alt="Logo" /></Link>
          <motion.button onClick={() => window.location.href = "/"} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors" whileHover={{ x: -2 }}>
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4 font-mono">Web Design · EdTech · B2B</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white albert-sans-medium leading-[0.95] mb-6">
            2 Hour<br />Learning
          </h1>
          <p className="text-xl text-white/65 max-w-2xl leading-relaxed jost-secondary">
            Designed a persona-driven landing page system for a B2B EdTech company — four distinct pages that speak directly to how each buying stakeholder thinks, not a single page trying to reach everyone.
          </p>
        </motion.div>

        {/* hero grid — thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {screens.map((s, i) => (
            <motion.div key={i} whileHover={{ y: -6, scale: 1.03 }} transition={{ duration: 0.2 }}
              onClick={() => setExpanded(i)}
              className="cursor-zoom-in rounded-xl overflow-hidden border border-white/10 group relative">
              <img src={s.thumb} alt={s.label} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <p className="text-white text-xs font-mono">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-3 text-white/25 text-xs font-mono text-center">Click any page to expand</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Lead Designer", "WordPress", "HubSpot", "4 Pages", "B2B Sales System"].map(t => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/50 font-mono">{t}</span>
          ))}
        </div>
      </section>

      {/* expanded image overlay */}
      {expanded !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-start justify-center overflow-y-auto p-8"
          onClick={() => setExpanded(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white font-bold albert-sans-medium text-lg">{screens[expanded].label}</p>
                <p className="text-white/45 text-sm jost-secondary">{screens[expanded].platform} · {screens[expanded].audience}</p>
              </div>
              <button onClick={() => setExpanded(null)} className="text-white/50 hover:text-white text-2xl leading-none px-3">×</button>
            </div>
            <img src={screens[expanded].full} alt={screens[expanded].label} className="w-full h-auto rounded-2xl border border-white/10" />
          </motion.div>
        </motion.div>
      )}

      {/* ── TL;DR ─────────────────────────────────────────────────────── */}
      <section id="tldr" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Quick summary</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "The challenge", text: "2 Hour Learning sells to multiple decision-makers at once — principals, curriculum directors, and board members — all with completely different priorities. One landing page can't serve all of them." },
              { label: "The solution", text: "Four distinct pages: a general brand homepage, and three persona-specific HubSpot pages, each with messaging architecture built for how that stakeholder evaluates a purchasing decision." },
              { label: "The principle", text: "B2B buying isn't one decision — it's a chain of individual approvals. Design has to respect each person's actual concern, not present a single message and hope it lands." },
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
                One message can't close a committee room.
              </h2>
              <p className="text-white/65 jost-secondary leading-relaxed mb-5">
                When a school decides to adopt a new learning platform, it's not one person's decision. A principal signs off on the vision. A curriculum director approves or kills the implementation plan. A board member approves the budget.
              </p>
              <p className="text-white/65 jost-secondary leading-relaxed">
                Each of those people lands on the website with a completely different question in their head. A single page can't answer all of them — so most landing pages end up answering none of them particularly well.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Generic homepage messaging wasn't converting outbound-qualified leads",
                "Sales team couldn't send a link that spoke to the specific person they were talking to",
                "Different stakeholders had contradictory objections — one page can't address all of them",
                "No way to track which message was resonating with which audience type",
                "Brand story was consistent, but value proposition wasn't role-specific",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full border border-violet-500/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  </span>
                  <p className="text-white/70 jost-secondary text-sm">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE INSIGHT ─────────────────────────────────────────────── */}
      <section id="insight" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">The insight</p>
          <h2 className="text-3xl md:text-4xl font-bold albert-sans-medium text-white mb-10 leading-tight max-w-2xl">
            Each stakeholder has one primary fear. Design to that fear.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { role: "Head of School", fear: "Making a risky bet", wants: "Proof of outcomes at comparable schools. Differentiation story. What happens after year 1.", accent: "blue" },
              { role: "Dean of Academics", fear: "Disrupting teachers", wants: "Workflow clarity. How is student progress surfaced? What's the implementation burden?", accent: "teal" },
              { role: "Board Member", fear: "Wasting budget", wants: "ROI timeline. Long-term cost vs. in-house alternative. Strategic fit with district goals.", accent: "amber" },
            ].map(({ role, fear, wants, accent }) => (
              <div key={role} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-white font-bold albert-sans-medium mb-1">{role}</p>
                <p className="text-white/30 text-xs font-mono uppercase mb-3">Core fear: {fear}</p>
                <p className="text-white/60 text-sm jost-secondary leading-relaxed">{wants}</p>
              </div>
            ))}
          </div>

          <div className="border border-white/5 rounded-2xl p-7 bg-white/[0.02]">
            <p className="text-white/30 text-xs font-mono uppercase mb-3">What this meant for design</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { d: "Messaging hierarchy", v: "Lead with the thing they care about most — not a generic headline about 'transforming education.'" },
                { d: "Social proof selection", v: "Different proof for different people. A dean wants teacher testimonials. A board member wants data and district-level case studies." },
                { d: "CTA specificity", v: "Each page has one CTA aligned to where that persona is in the buying process — not a generic 'request a demo'." },
              ].map(({ d, v }) => (
                <div key={d}>
                  <p className="text-white/50 text-xs font-mono mb-1">{d}</p>
                  <p className="text-white/70 text-sm jost-secondary leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOUR PAGES ──────────────────────────────────────────── */}
      <section id="pages" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">The four pages</p>
          <p className="text-white/60 jost-secondary max-w-2xl mb-12">Each page is built around what that audience actually needs to see before they'll take a next step. Click any to view full design.</p>

          <div className="space-y-10">
            {screens.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}
                  onClick={() => setExpanded(i)}
                  className="cursor-zoom-in rounded-xl overflow-hidden border border-white/10">
                  <img src={s.thumb} alt={s.label} className="w-full h-auto object-cover" />
                </motion.div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40 font-mono">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-white font-bold albert-sans-medium text-xl">{s.label}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40 font-mono">{s.platform}</span>
                  </div>
                  <p className="text-white/60 jost-secondary leading-relaxed text-sm">{s.audience}</p>
                  <button onClick={() => setExpanded(i)} className="mt-4 text-xs text-white/40 hover:text-white/70 font-mono flex items-center gap-1.5 transition-colors">
                    View full design <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
      <section id="outcomes" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Outcomes</p>
          <p className="text-white/50 text-sm jost-secondary mb-8 max-w-xl">
            These reflect client feedback and qualitative validation at handoff. Full conversion tracking was set up post-launch; data wasn't available for this case study.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { v: "4 pages", l: "Each targeting a distinct decision-maker in the buying chain" },
              { v: "3 personas", l: "Separate HubSpot pages — all trackable per stakeholder" },
              { v: "1 brand", l: "Consistent visual identity across all four pages" },
              { v: "Sales-ready", l: "Sales team can send a page matched to the specific contact" },
              { v: "CTA-specific", l: "Each page has a CTA aligned to that stakeholder's next step" },
              { v: "≥ 4.5/5", l: "Client satisfaction score across design review sessions" },
            ].map(({ v, l }) => (
              <div key={l} className="border border-white/5 rounded-2xl p-6 bg-white/[0.02]">
                <p className="text-3xl font-black text-white albert-sans-medium mb-2">{v}</p>
                <p className="text-white/45 text-sm jost-secondary">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ──────────────────────────────────────────────── */}
      <section id="reflection" className="py-16 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-8">Reflection</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: "B2B UX is really sales strategy", b: "Designing these pages taught me that in B2B, UX and sales enablement are the same job. The question isn't just 'is this easy to use?' — it's 'does this move the right person closer to a decision?'" },
              { t: "Segmentation makes everything sharper", b: "Once you commit to speaking to one persona per page, every design decision becomes easier. What hero message? What proof point? What CTA? The persona answers all of it." },
              { t: "I'd add a tracking layer from day one", b: "The pages were set up in HubSpot, which has strong analytics. I should have pushed harder for UTM-tagged links from the sales team so we could measure which persona page was actually converting better." },
              { t: "What this applies to beyond EdTech", b: "Any product with a complex, multi-stakeholder buying process has this problem. SaaS, healthcare software, enterprise tools. The persona-driven page model is the right pattern — this just happened to be EdTech." },
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
            <h2 className="text-3xl font-bold albert-sans-medium text-white mb-2">Want to see the full pages?</h2>
            <p className="text-white/45 jost-secondary">Happy to walk through the messaging architecture and design decisions in detail.</p>
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
