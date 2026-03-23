import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import LogoImage from "@assets/Logo white_1754674219191.png";

const studies = [
  {
    id: "liffo",
    title: "Liffo",
    label: "Emergency Health Platform",
    desc: "Emergency-first healthcare app unifying ambulance booking, elite doctors, home care, and health records in one mobile experience.",
    path: "/liffo-case-study",
    tags: ["Mobile App", "Healthcare UX", "Emergency Design"],
    accent: "#ef4444",
    gradient: "from-red-900/60 to-orange-900/40",
    border: "border-red-500/40",
    hover: "hover:border-red-400/70",
  },
  {
    id: "fff",
    title: "Future First Families",
    label: "Gamified Family Engagement",
    desc: "Learning platform for under-resourced families using gamification, habit streaks, and milestone rewards to drive consistent engagement.",
    path: "/fff-case-study",
    tags: ["Product Design", "Gamification", "EdTech"],
    accent: "#8b5cf6",
    gradient: "from-purple-900/60 to-pink-900/40",
    border: "border-purple-500/40",
    hover: "hover:border-purple-400/70",
  },
  {
    id: "2hl",
    title: "2 Hour Learning",
    label: "Persona-Driven Lead Generation",
    desc: "Four specialized landing pages targeting distinct educational stakeholders — from school principals to board members — with tailored conversion strategies.",
    path: "/2hour-learning-case-study",
    tags: ["Landing Pages", "Conversion Design", "Education"],
    accent: "#06b6d4",
    gradient: "from-cyan-900/60 to-blue-900/40",
    border: "border-cyan-500/40",
    hover: "hover:border-cyan-400/70",
  },
];

export default function Preview() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground grain-texture">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-intense grain-texture border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
              <img src={LogoImage} alt="Logo" className="h-10 w-10 object-contain" />
            </motion.div>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 hover:border-white/40 text-white text-sm font-semibold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Home
            </motion.button>
          </Link>
        </div>
      </nav>

      {/* Hero text */}
      <div className="pt-32 pb-12 text-center max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/50 text-sm tracking-widest uppercase jost-secondary mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white albert-sans-medium mb-4"
        >
          Case Studies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/65 text-lg jost-secondary"
        >
          Three projects. Select one to preview or open the full case study.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {studies.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActive(s.id === active ? null : s.id)}
              className={`cursor-pointer rounded-2xl glass-card grain-texture border transition-all duration-300 p-6 ${s.border} ${s.hover} ${active === s.id ? "ring-2 scale-[1.01]" : ""}`}
              style={{ ["--tw-ring-color" as any]: s.accent }}
            >
              {/* Accent bar */}
              <div className="h-1 w-full rounded-full mb-5" style={{ background: `linear-gradient(to right, ${s.accent}, transparent)` }} />

              <h2 className="text-2xl font-extrabold text-white albert-sans-medium mb-1">{s.title}</h2>
              <p className="text-sm font-semibold mb-4 jost-secondary" style={{ color: s.accent }}>{s.label}</p>
              <p className="text-white/70 text-sm leading-relaxed jost-secondary mb-5">{s.desc}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/60 jost-secondary">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); setActive(s.id === active ? null : s.id); }}
                  className="flex-1 py-2 rounded-xl text-sm font-semibold text-white border border-white/20 hover:border-white/40 transition-all jost-secondary"
                >
                  {active === s.id ? "Close Preview" : "Quick Preview"}
                </button>
                <Link href={s.path} onClick={(e) => e.stopPropagation()}>
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all jost-secondary" style={{ background: `${s.accent}22`, border: `1px solid ${s.accent}66` }}>
                    Full View
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inline iframe preview */}
        {active && (() => {
          const s = studies.find((x) => x.id === active)!;
          return (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: `${s.accent}44` }}
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between px-5 py-3 glass-intense border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <p className="text-white/50 text-xs jost-secondary font-medium">{s.title} — {s.label}</p>
                <Link href={s.path}>
                  <button className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors jost-secondary">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open full
                  </button>
                </Link>
              </div>
              <iframe
                src={s.path}
                className="w-full"
                style={{ height: "80vh", border: "none" }}
                title={s.title}
              />
            </motion.div>
          );
        })()}
      </div>
    </div>
  );
}
