import { useState } from "react";

const personas = [
  {
    id: "homepage",
    tab: "Homepage",
    platform: "WordPress",
    accent: "#a78bfa",
    accentBg: "#a78bfa18",
    badge: "Brand Discovery",
    headline: "Your school, transformed.",
    subheadline: "Students master core subjects in 2 hours — freeing up the rest of the day for what makes your school unique.",
    bodyIntro: "This page speaks to administrators who found 2HL through word of mouth or a Google search. They're not in a buying cycle yet — they're curious.",
    messagingNotes: [
      { label: "Tone", value: "Warm, visionary, story-first" },
      { label: "What leads", value: "The transformation narrative — not features" },
      { label: "Proof type", value: "Schools enrolled (scale signal)" },
      { label: "CTA", value: "\"See how it works\" — low commitment, educational" },
    ],
    designDecision: "No conversion pressure. The goal is a second visit, not a form submission.",
    quote: "Built for schools that want to be the best, not just the biggest.",
  },
  {
    id: "principal",
    tab: "Head of School",
    platform: "HubSpot",
    accent: "#38bdf8",
    accentBg: "#38bdf818",
    badge: "Outcomes-first",
    headline: "What if your school became the one families move for?",
    subheadline: "2HL partner schools report 34% improvement in enrollment inquiries within 12 months of launch.",
    bodyIntro: "This page speaks to the principal — the person most accountable for school reputation and long-term enrollment. Their fear is betting on the wrong thing.",
    messagingNotes: [
      { label: "Tone", value: "Aspirational but grounded in data" },
      { label: "What leads", value: "Peer social proof — principals at comparable schools" },
      { label: "Proof type", value: "Testimonial from a named school leader" },
      { label: "CTA", value: "\"Request a principal briefing\" — high-signal qualification" },
    ],
    designDecision: "Opens with the ambition, not the product. The product earns its introduction.",
    quote: "\"It changed how we talk about our school to families.\" — Principal, Austin TX",
  },
  {
    id: "dean",
    tab: "Dean of Academics",
    platform: "HubSpot",
    accent: "#34d399",
    accentBg: "#34d39918",
    badge: "Process clarity",
    headline: "Built to fit how your teachers actually teach.",
    subheadline: "No rip-and-replace. 2HL maps to your existing curriculum. Teachers see live mastery data, per student, per standard.",
    bodyIntro: "This page speaks to the dean — the person responsible for academic outcomes and teacher workload. Their fear is disrupting the staff they depend on.",
    messagingNotes: [
      { label: "Tone", value: "Practical, credible, implementation-focused" },
      { label: "What leads", value: "Workflow fit — \"it works with what you already have\"" },
      { label: "Proof type", value: "Teacher testimonial + onboarding timeline" },
      { label: "CTA", value: "\"See the teacher dashboard\" — feature evaluation" },
    ],
    designDecision: "The word 'teachers' appears before 'students'. That ordering is intentional.",
    quote: "Implementation complete in under 6 weeks, with dedicated support throughout.",
  },
  {
    id: "board",
    tab: "Board Member",
    platform: "HubSpot",
    accent: "#fb923c",
    accentBg: "#fb923c18",
    badge: "ROI-first",
    headline: "ROI in year one. Retention gains that compound.",
    subheadline: "Partner schools see an average $240K increase in per-pupil funding within 24 months, through improved attendance and enrollment.",
    bodyIntro: "This page speaks to the board member — the one who approves the budget. Their fear is wasting money on something that doesn't show returns.",
    messagingNotes: [
      { label: "Tone", value: "Direct, financial, no-nonsense" },
      { label: "What leads", value: "Hard dollar figures — open with the number" },
      { label: "Proof type", value: "District-level case study with financial breakdown" },
      { label: "CTA", value: "\"Get the ROI model\" — downloadable tool, budget-stage asset" },
    ],
    designDecision: "No testimonials. No stories. Numbers lead, numbers close. This is the only page without emotional framing.",
    quote: "Input your enrollment numbers. See your projection.",
  },
];

export function StakeholderSwitcher() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['Inter',sans-serif] flex flex-col">
      {/* Header */}
      <div className="px-8 pt-10 pb-0 border-b border-white/5">
        <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">2 Hour Learning · Design Case Study</p>
        <h1 className="text-3xl font-black text-white mb-1">The Four Pages</h1>
        <p className="text-white/40 text-sm mb-6 max-w-lg">One product. Four distinct messages. Switch stakeholders to see how the design argument changes.</p>

        {/* Tabs */}
        <div className="flex gap-0">
          {personas.map((per, i) => (
            <button key={per.id} onClick={() => setActive(i)}
              className={`px-5 py-3 text-sm font-semibold transition-all duration-200 border-b-2 ${i === active ? "border-current text-white" : "border-transparent text-white/35 hover:text-white/60"}`}
              style={i === active ? { color: per.accent, borderColor: per.accent } : {}}
            >
              {per.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left: live page preview */}
        <div className="flex-1 p-8 border-r border-white/5 flex flex-col">
          <div className="rounded-2xl border border-white/5 p-8 flex-1 flex flex-col" style={{ background: p.accentBg }}>
            {/* Simulated page */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono px-2.5 py-1 rounded" style={{ background: p.accent + "25", color: p.accent }}>
                {p.platform}
              </span>
              <span className="text-xs text-white/25 font-mono">{p.badge}</span>
            </div>

            <h2 className="text-3xl font-black text-white leading-tight mb-4 max-w-md">{p.headline}</h2>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">{p.subheadline}</p>

            <div className="border border-white/10 rounded-xl p-5 mb-6 bg-black/30">
              <p className="text-white/50 text-sm leading-relaxed italic">{p.quote}</p>
            </div>

            <div className="mt-auto">
              <button className="px-5 py-2.5 rounded-lg text-sm font-bold text-white/90" style={{ background: p.accent + "33", border: `1px solid ${p.accent}55` }}>
                {p.messagingNotes.find(n => n.label === "CTA")?.value.replace(/^"|"$/g, "")}
              </button>
            </div>
          </div>
        </div>

        {/* Right: design explanation */}
        <div className="w-80 p-8 flex flex-col gap-6 overflow-y-auto">
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">Who this is for</p>
            <p className="text-white/70 text-sm leading-relaxed">{p.bodyIntro}</p>
          </div>

          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">Messaging decisions</p>
            <div className="space-y-3">
              {p.messagingNotes.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-white/30 text-xs font-mono mb-0.5">{label}</p>
                  <p className="text-white/75 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-l-2 pl-4" style={{ borderColor: p.accent + "55" }}>
            <p className="text-white/30 text-xs font-mono mb-1">Design decision</p>
            <p className="text-white/65 text-sm leading-relaxed italic">{p.designDecision}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
