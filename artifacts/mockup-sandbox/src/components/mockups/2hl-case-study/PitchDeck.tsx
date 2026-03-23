import { useState } from "react";

const slides = [
  {
    id: 1,
    label: "01 / The Setup",
    bg: "#0a0a0f",
    accent: "#a78bfa",
    content: (
      <div className="flex flex-col justify-center h-full px-20 py-16 max-w-5xl">
        <p className="text-violet-400 text-sm tracking-widest uppercase font-mono mb-6">2 Hour Learning · Product Design</p>
        <h1 className="text-[72px] font-black text-white leading-[0.9] mb-8">
          One message<br />
          <span className="text-violet-400">can't close</span><br />
          a committee.
        </h1>
        <p className="text-white/50 text-xl max-w-lg leading-relaxed">
          When a school buys software, it's not one person's decision. This is the design story of how we built four separate landing pages — each for a different person in that room.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    label: "02 / The Problem",
    bg: "#0f0a0a",
    accent: "#f87171",
    content: (
      <div className="flex flex-col justify-center h-full px-20 py-16">
        <div className="grid grid-cols-2 gap-16 items-center max-w-5xl">
          <div>
            <p className="text-red-400 text-sm tracking-widest uppercase font-mono mb-6">The Problem</p>
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              Three buyers. Three jobs. One homepage trying to do all of it.
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              2 Hour Learning's existing homepage spoke to everyone in general terms. That meant it wasn't answering the specific question in any one person's head when they landed.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { role: "Principal", q: "\"Will this make my school stand out?\"", accent: "#38bdf8" },
              { role: "Dean of Academics", q: "\"Will my teachers actually use this?\"", accent: "#34d399" },
              { role: "Board Member", q: "\"What's the financial case?\"", accent: "#fb923c" },
            ].map(({ role, q, accent }) => (
              <div key={role} className="border border-white/10 rounded-xl p-5 bg-white/[0.03]">
                <p className="text-xs font-mono mb-2" style={{ color: accent }}>{role}</p>
                <p className="text-white/70 text-base italic">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "03 / The Insight",
    bg: "#080d14",
    accent: "#38bdf8",
    content: (
      <div className="flex flex-col justify-center h-full px-20 py-16 max-w-5xl">
        <p className="text-cyan-400 text-sm tracking-widest uppercase font-mono mb-6">The Core Insight</p>
        <h2 className="text-[64px] font-black text-white leading-[0.9] mb-10">
          Design to<br />
          <span className="text-cyan-400">the fear</span>,<br />
          not the feature.
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            { fear: "Risk of choosing wrong", person: "Principal", answer: "Lead with outcomes and peer proof — schools like theirs." },
            { fear: "Teacher disruption", person: "Dean", answer: "Lead with workflow fit and implementation clarity." },
            { fear: "Budget justification", person: "Board", answer: "Lead with ROI model and hard financial numbers." },
          ].map(({ fear, person, answer }) => (
            <div key={person} className="border-t border-white/10 pt-5">
              <p className="text-white/30 text-xs font-mono mb-1">{person}</p>
              <p className="text-white/40 text-sm mb-3 italic">"{fear}"</p>
              <p className="text-white/75 text-sm leading-relaxed">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "04 / The Work",
    bg: "#0a0f0a",
    accent: "#34d399",
    content: (
      <div className="flex flex-col justify-center h-full px-20 py-16 max-w-5xl">
        <p className="text-green-400 text-sm tracking-widest uppercase font-mono mb-6">The Output</p>
        <h2 className="text-5xl font-black text-white leading-tight mb-10">Four pages.<br />One brand.</h2>
        <div className="grid grid-cols-2 gap-5">
          {[
            { name: "Homepage", platform: "WordPress", desc: "Brand discovery. Narrative-first. No pressure.", accent: "#a78bfa" },
            { name: "Head of School", platform: "HubSpot", desc: "Outcome-first. Peer proof. High-signal CTA.", accent: "#38bdf8" },
            { name: "Dean of Academics", platform: "HubSpot", desc: "Workflow clarity. Teacher testimonials. Ease of adoption.", accent: "#34d399" },
            { name: "Board Member", platform: "HubSpot", desc: "ROI model. Hard numbers. Financial calculator CTA.", accent: "#fb923c" },
          ].map(({ name, platform, desc, accent }) => (
            <div key={name} className="border border-white/5 rounded-2xl p-6 bg-white/[0.025]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
                <p className="text-white font-bold">{name}</p>
                <span className="text-xs font-mono ml-auto" style={{ color: accent + "aa" }}>{platform}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 5,
    label: "05 / Reflection",
    bg: "#0d0d0d",
    accent: "#fbbf24",
    content: (
      <div className="flex flex-col justify-center h-full px-20 py-16 max-w-5xl">
        <p className="text-amber-400 text-sm tracking-widest uppercase font-mono mb-6">What I'd do differently</p>
        <h2 className="text-5xl font-black text-white leading-tight mb-10">B2B UX is sales strategy with better typography.</h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { h: "Track from day one", b: "I should have pushed harder for UTM-tagged links from the sales team so we could measure which persona page was actually converting — not just which looked best." },
            { h: "The pattern generalises", b: "Any product sold to a committee — SaaS, healthcare software, enterprise tools — has this problem. The persona-page model is the right answer every time." },
          ].map(({ h, b }) => (
            <div key={h} className="border-l-2 border-amber-500/30 pl-6">
              <p className="text-white font-semibold mb-2">{h}</p>
              <p className="text-white/50 text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-6">
          <p className="text-white/30 text-sm font-mono">4 pages designed · WordPress + HubSpot</p>
          <div className="ml-auto">
            <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg">Get in touch</button>
          </div>
        </div>
      </div>
    ),
  },
];

export function PitchDeck() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div className="h-screen flex flex-col font-['Inter',sans-serif]" style={{ background: slide.bg }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-white/5 flex-shrink-0">
        <p className="text-white/30 text-xs font-mono">2 Hour Learning Case Study</p>
        <div className="flex items-center gap-1">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className="w-8 h-1 rounded-full transition-all duration-300"
              style={{ background: i === current ? "#a78bfa" : "rgba(255,255,255,0.15)" }}
            />
          ))}
        </div>
        <p className="text-white/30 text-xs font-mono">{slide.label}</p>
      </div>

      {/* Slide content */}
      <div className="flex-1 transition-all duration-500 overflow-hidden">
        {slide.content}
      </div>

      {/* Nav */}
      <div className="flex items-center justify-between px-8 py-4 border-t border-white/5 flex-shrink-0">
        <button
          onClick={() => setCurrent(Math.max(0, current - 1))}
          disabled={current === 0}
          className="text-sm font-mono text-white/30 hover:text-white disabled:opacity-20 transition-colors"
        >
          ← prev
        </button>
        <p className="text-white/20 text-xs font-mono">{current + 1} / {slides.length}</p>
        <button
          onClick={() => setCurrent(Math.min(slides.length - 1, current + 1))}
          disabled={current === slides.length - 1}
          className="text-sm font-mono text-white/30 hover:text-white disabled:opacity-20 transition-colors"
        >
          next →
        </button>
      </div>
    </div>
  );
}
