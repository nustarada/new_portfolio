export function ComparisonMatrix() {
  const personas = [
    {
      role: "Homepage",
      platform: "WordPress",
      accent: "#a78bfa",
      fear: "Brand discovery",
      headline: "Your school, transformed.",
      subline: "2HL gives students mastery over core subjects in 2 hours — freeing up the rest of the day for what matters.",
      proof: "43 schools enrolled in 2024",
      proofType: "Scale signal",
      cta: "See how it works",
      ctaIntent: "Awareness",
      hook: "A general brand story — no conversion pressure.",
      lead: "Narrative",
    },
    {
      role: "Head of School",
      platform: "HubSpot",
      accent: "#38bdf8",
      fear: "Making a risky bet",
      headline: "What if your school became the one families move for?",
      subline: "Principals at 2HL partner schools report 34% improvement in enrollment inquiries within 12 months.",
      proof: "\"It completely changed how we talk about our school to parents.\" — Principal, Austin TX",
      proofType: "Peer testimonial",
      cta: "Request a principal briefing",
      ctaIntent: "High-intent qualification",
      hook: "Leads with outcomes, not features.",
      lead: "Social proof",
    },
    {
      role: "Dean of Academics",
      platform: "HubSpot",
      accent: "#34d399",
      fear: "Disrupting teachers",
      headline: "Built to fit how your teachers actually teach.",
      subline: "No rip-and-replace. 2HL maps to your existing curriculum — teachers see live mastery data per student, per standard.",
      proof: "Implementation complete in under 6 weeks, with dedicated onboarding support.",
      proofType: "Ease-of-implementation signal",
      cta: "See the teacher dashboard",
      ctaIntent: "Feature evaluation",
      hook: "Leads with workflow, not transformation.",
      lead: "Process clarity",
    },
    {
      role: "Board Member",
      platform: "HubSpot",
      accent: "#fb923c",
      fear: "Wasting budget",
      headline: "ROI in year one. Retention gains that compound.",
      subline: "Partner schools see an average $240K increase in per-pupil funding within 24 months through improved attendance and enrollment.",
      proof: "Download our district ROI model — input your enrollment numbers, see your projection.",
      proofType: "Financial calculator",
      cta: "Get the ROI model",
      ctaIntent: "Budget-stage asset",
      hook: "Opens with money, not mission.",
      lead: "Financial ROI",
    },
  ];

  const rows = [
    { label: "Core fear addressed", key: "fear" },
    { label: "Opening headline", key: "headline" },
    { label: "Supporting line", key: "subline" },
    { label: "Primary proof", key: "proof" },
    { label: "Proof type", key: "proofType" },
    { label: "Primary CTA", key: "cta" },
    { label: "CTA intent", key: "ctaIntent" },
    { label: "What leads the page", key: "lead" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-['Inter',sans-serif]">
      {/* Header */}
      <div className="sticky top-0 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 z-40 px-8 py-5">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between">
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-1">2 Hour Learning · Case Study</p>
            <h1 className="text-2xl font-black text-white">The Segmentation Argument</h1>
          </div>
          <p className="text-white/40 text-sm font-mono">4 pages · 3 stakeholders · 1 brand</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 py-10">
        {/* Thesis */}
        <div className="mb-10 border-l-4 border-violet-500 pl-6">
          <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
            Selling to a school requires convincing at least three different people — each with a different job, different fear, and different definition of success. This is the design argument for why one landing page can't close a committee room.
          </p>
        </div>

        {/* The matrix */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 pr-6 text-white/30 text-xs tracking-widest uppercase font-mono w-40 align-bottom">Decision</th>
                {personas.map((p) => (
                  <th key={p.role} className="text-left py-4 px-4 align-bottom w-[22%]">
                    <div className="mb-2">
                      <span className="text-xs px-2 py-0.5 rounded font-mono" style={{ background: p.accent + "22", color: p.accent }}>{p.platform}</span>
                    </div>
                    <p className="text-white font-bold text-base leading-tight">{p.role}</p>
                    <p className="text-white/35 text-xs mt-1 font-mono">{p.hook}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={row.key} className={ri % 2 === 0 ? "bg-white/[0.015]" : ""}>
                  <td className="py-5 pr-6 text-white/40 text-xs font-mono tracking-wide uppercase align-top border-t border-white/5 leading-tight">{row.label}</td>
                  {personas.map((p) => (
                    <td key={p.role} className="py-5 px-4 text-sm align-top border-t border-white/5">
                      {row.key === "headline" ? (
                        <p className="text-white font-semibold leading-snug">{p[row.key]}</p>
                      ) : row.key === "cta" ? (
                        <span className="inline-block px-3 py-1.5 rounded text-xs font-semibold" style={{ background: p.accent + "22", color: p.accent, border: `1px solid ${p.accent}44` }}>
                          {p[row.key]}
                        </span>
                      ) : row.key === "proofType" || row.key === "ctaIntent" || row.key === "lead" || row.key === "fear" ? (
                        <span className="text-white/50 font-mono text-xs">{p[row.key]}</span>
                      ) : (
                        <p className="text-white/75 leading-relaxed">{p[row.key]}</p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reflection */}
        <div className="mt-14 grid grid-cols-3 gap-6">
          <div className="col-span-3">
            <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-6">What this table reveals</p>
          </div>
          {[
            { h: "Same product, four proofs", b: "Each page describes 2HL — but through a completely different lens. The dean never sees the ROI model. The board member never reads the teacher testimonial. Segmentation is about selective emphasis, not brand fragmentation." },
            { h: "CTAs are stage gates", b: "Each CTA reflects where that stakeholder is in the buying process. Awareness → evaluation → financial approval. One generic 'Request a Demo' button can't serve all three stages simultaneously." },
            { h: "Fear drives structure", b: "The opening headline on each page answers a different anxiety. Designing to fear isn't manipulative — it's respectful. It says: 'I know what you're worried about, so I'm leading with that.'" },
          ].map(({ h, b }) => (
            <div key={h} className="border border-white/5 rounded-xl p-6 bg-white/[0.02]">
              <p className="text-white font-semibold mb-2 text-sm">{h}</p>
              <p className="text-white/50 text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
