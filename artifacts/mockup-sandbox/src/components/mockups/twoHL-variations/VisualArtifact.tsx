/*
  2HL — V3: Visual Artifact Showcase
  Sketches as primary content. Each artifact shows a specific design decision in the B2B page system.
*/

function PaperSvg({ w = 240, h = 155, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-2v3">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="11" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-2v3" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.9" opacity="0.5"/>
        </pattern>
        <pattern id="ruled-2v3" width="240" height="12" patternUnits="userSpaceOnUse">
          <line x1="0" y1="11" x2="240" y2="11" stroke="#e0d5c5" strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#ruled-2v3)" opacity="0.8"/>
      <g filter="url(#squig-2v3)">{children}</g>
    </svg>
  );
}

const A = {
  box: ({ x, y, w, h, fill = "none", stroke = "#2d2d2d", sw = 1.4 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-2v3)" stroke="#2d2d2d" strokeWidth={1.2}/>,
  ln: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2d2d2d" strokeWidth={1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6, color = "#2d2d2d", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
  bubble: ({ x, y, w, t }: any) =>
    <g><rect x={x} y={y-7} width={w} height={10} rx="3" fill="#fff" stroke="#374151" strokeWidth={0.9}/><text x={x+3} y={y} fontSize={4.5} fill="#374151" fontFamily="monospace">{t}</text></g>,
};

const Wf_StakeholderMap = () => (
  <PaperSvg>
    <A.txt x={8} y={10} t="Buying committee + fear mapping" s={6} bold/>
    <A.ln x1={8} y1={14} x2={232} y2={14}/>
    <A.box x={85} y={20} w={70} h={16}/>
    <A.txt x={90} y={31} t="PRINCIPAL" s={6} bold/>
    <A.ln x1={120} y1={36} x2={75} y2={52}/>
    <A.ln x1={120} y1={36} x2={165} y2={52}/>
    <A.box x={30} y={52} w={90} h={16}/>
    <A.txt x={38} y={63} t="DEAN / CURRICULUM" s={5.5}/>
    <A.box x={130} y={52} w={80} h={16}/>
    <A.txt x={137} y={63} t="BOARD MEMBER" s={5.5}/>
    <A.ln x1={8} y1={78} x2={232} y2={78} dashed/>
    <A.txt x={8} y={87} t="FEAR MAPPING" s={5.5} bold/>
    {[
      { x: 8, y: 92, color: "#e9d5ff", role: "Principal", fear: "Reputation risk", proof: "Peer school testimonial" },
      { x: 84, y: 92, color: "#dcfce7", role: "Dean", fear: "Teacher burden", proof: "Workflow evidence" },
      { x: 160, y: 92, color: "#fef9c3", role: "Board", fear: "Budget ROI", proof: "Financial model" },
    ].map(({ x, y, color, role, fear, proof }) => (
      <g key={role}>
        <A.box x={x} y={y} w={72} h={44} fill={color} stroke="#9ca3af" sw={0.9}/>
        <A.txt x={x+4} y={y+12} t={role} s={5.5} bold/>
        <A.txt x={x+4} y={y+22} t={`Fear: ${fear}`} s={4.5} color="#6b7280"/>
        <A.txt x={x+4} y={y+32} t={`Need: ${proof}`} s={4.5} color="#374151"/>
        <A.txt x={x+4} y={y+42} t={proof.substring(0,10)+"…"} s={3.8} color="#9ca3af"/>
      </g>
    ))}
    <A.bubble x={50} y={150} w={140} t="one page = can't answer three fears"/>
  </PaperSvg>
);

const Wf_CTAGating = () => (
  <PaperSvg>
    <A.txt x={8} y={10} t="CTA stage-gating sketch" s={6} bold/>
    <A.ln x1={8} y1={14} x2={232} y2={14}/>
    <A.txt x={8} y={24} t="BEFORE — one generic CTA everywhere" s={5.5} color="#ef4444"/>
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <A.box x={8} y={28+i*14} w={224} h={12}/>
        <A.txt x={12} y={37+i*14} t={`Page ${i+1}: homepage/school/dean/board`} s={5}/>
        <A.hatch x={180} y={29+i*14} w={48} h={10}/>
        <A.txt x={182} y={37+i*14} t="Request Demo" s={4.5} color="#374151"/>
      </g>
    ))}
    <A.txt x={18} y={92} t="✗ high-commitment for discovery users" s={5} color="#ef4444" italic/>
    <A.ln x1={8} y1={98} x2={232} y2={98} dashed/>
    <A.txt x={8} y={108} t="AFTER — CTAs matched to buyer stage" s={5.5} color="#059669"/>
    {[
      { label: "Homepage", cta: "See how it works", color: "#e9d5ff" },
      { label: "Principal", cta: "Request briefing", color: "#dbeafe" },
      { label: "Dean", cta: "See teacher dash", color: "#dcfce7" },
      { label: "Board", cta: "Get ROI model", color: "#fef9c3" },
    ].map(({ label, cta, color }, i) => (
      <g key={label}>
        <A.box x={8} y={112+i*10} w={224} h={9}/>
        <A.txt x={12} y={119+i*10} t={label} s={5}/>
        <A.box x={150} y={113+i*10} w={78} h={7} fill={color} stroke="#9ca3af" sw={0.8}/>
        <A.txt x={152} y={119+i*10} t={cta} s={4.5}/>
      </g>
    ))}
    <A.txt x={8} y={153} t="each CTA = next step in buyer journey" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

const Wf_DeanRewrite = () => (
  <PaperSvg>
    <A.txt x={8} y={10} t="Dean page — product vs. teacher centred" s={6} bold/>
    <A.ln x1={8} y1={14} x2={232} y2={14}/>
    <A.txt x={8} y={24} t="v1 — product centred" s={5.5} color="#ef4444"/>
    <A.box x={8} y={28} w={224} h={42} fill="#fef2f2" stroke="#f87171"/>
    <A.txt x={14} y={40} t="2HL's standards-aligned academic framework" s={5.5} bold/>
    <A.txt x={14} y={50} t="leverages adaptive learning algorithms to" s={5}/>
    <A.txt x={14} y={59} t="reduce instruction time by 60%." s={5}/>
    <A.txt x={14} y={68} t="✗ dean hears: jargon + no teacher evidence" s={5} color="#ef4444" italic/>
    <A.ln x1={8} y1={76} x2={232} y2={76} dashed/>
    <A.txt x={8} y={86} t="v2 — teacher centred" s={5.5} color="#059669"/>
    <A.box x={8} y={90} w={224} h={48} fill="#f0fdf4" stroke="#22c55e" sw={1.6}/>
    <A.txt x={14} y={102} t="From 9am to 11am, your teachers" s={5.5}/>
    <A.txt x={14} y={112} t="focus on what they do best — teaching." s={5.5}/>
    <A.txt x={14} y={122} t="2HL handles the adaptive practice." s={5.5}/>
    <A.txt x={14} y={132} t="✓ product = means, not subject" s={5} color="#059669" italic/>
    <A.bubble x={50} y={148} w={140} t="dean's fear = teacher burden → address it"/>
  </PaperSvg>
);

const Wf_RoutingGuide = () => (
  <PaperSvg>
    <A.txt x={8} y={10} t="Sales routing guide — built as deliverable" s={6} bold/>
    <A.ln x1={8} y1={14} x2={232} y2={14}/>
    <A.txt x={8} y={24} t="Is your contact..." s={6} bold/>
    <A.box x={8} y={28} w={224} h={12}/>
    <A.txt x={14} y={37} t="a principal / head of school?" s={5.5}/>
    <A.ln x1={195} y1={34} x2={232} y2={34}/>
    <A.box x={8} y={44} w={224} h={10} fill="#dbeafe" stroke="#60a5fa" sw={0.9}/>
    <A.txt x={14} y={52} t="→ Send: futurelearning.com/principal" s={5} color="#1d4ed8"/>
    <A.box x={8} y={58} w={224} h={12}/>
    <A.txt x={14} y={67} t="a board member / budget approver?" s={5.5}/>
    <A.box x={8} y={74} w={224} h={10} fill="#fef9c3" stroke="#ca8a04" sw={0.9}/>
    <A.txt x={14} y={82} t="→ Send: futurelearning.com/board" s={5} color="#854d0e"/>
    <A.box x={8} y={88} w={224} h={12}/>
    <A.txt x={14} y={97} t="a dean / curriculum director?" s={5.5}/>
    <A.box x={8} y={104} w={224} h={10} fill="#dcfce7" stroke="#22c55e" sw={0.9}/>
    <A.txt x={14} y={112} t="→ Send: futurelearning.com/dean" s={5} color="#15803d"/>
    <A.box x={8} y={118} w={224} h={12}/>
    <A.txt x={14} y={127} t="unknown / general discovery?" s={5.5}/>
    <A.box x={8} y={134} w={224} h={10} fill="#e9d5ff" stroke="#9333ea" sw={0.9}/>
    <A.txt x={14} y={142} t="→ Send: futurelearning.com" s={5} color="#7e22ce"/>
    <A.txt x={8} y={153} t="sales team = a user too. routing guide = part of deliverable." s={4.5} color="#9ca3af" italic/>
  </PaperSvg>
);

export function VisualArtifact() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-b border-white/8 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-0.5">Design Option V3 — Visual Artifact Showcase</p>
            <h1 className="text-2xl font-black text-white">2HL — B2B Design Iteration</h1>
          </div>
          <p className="text-white/25 text-xs font-mono">Each sketch = one design decision</p>
        </div>
        <div className="mt-3 flex gap-2">
          {["Structure: Artifact-driven","Strength: Shows design craft","Best for: Craft-oriented teams"].map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 font-mono">{t}</span>
          ))}
        </div>
      </div>

      <div className="px-8 py-4 border-b border-white/5 flex gap-6 items-center">
        <p className="text-white/70 font-semibold">2 Hour Learning · B2B EdTech · Persona-driven landing pages · 4 pages</p>
        <div className="ml-auto flex gap-3">
          {["Lead Designer","HubSpot","WordPress"].map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40 font-mono">{t}</span>
          ))}
        </div>
      </div>

      <section className="px-8 py-7">
        <p className="text-white/25 text-xs font-mono uppercase mb-5">Design artifacts — every sketch shows a specific decision</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { W: Wf_StakeholderMap, label: "Stakeholder fear mapping", decision: "Three stakeholders in every school buying decision. Each has a different definition of risk. One homepage answering all three simultaneously answers none of them.", phase: "Research" },
            { W: Wf_CTAGating, label: "CTA stage-gating", decision: "'Request a Demo' on every page is a high-commitment ask for a discovery user. Mapped each CTA to the actual next step in that stakeholder's journey — not a generic conversion event.", phase: "Design Decision" },
            { W: Wf_DeanRewrite, label: "Dean page — rewritten around teacher", decision: "V1 described the product's framework. Dean's primary fear is teacher burden, not product features. V2 leads with the teacher's daily experience. Product becomes the means, not the subject.", phase: "Iteration" },
            { W: Wf_RoutingGuide, label: "Sales routing guide", decision: "Discovered in testing: reps didn't know which page to send to which lead. Built a one-page routing guide — a decision tree for sales. The sales team is a user. Routing guide = part of the deliverable.", phase: "Testing" },
          ].map(({ W, label, decision, phase }) => (
            <div key={label} className="border border-white/6 rounded-2xl overflow-hidden bg-white/[0.015]">
              <div className="bg-[#fdf8f0] border-b border-white/8"><W /></div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/8 text-white/35 font-mono">{phase}</span>
                  <p className="text-white/65 text-xs font-semibold">{label}</p>
                </div>
                <p className="text-white/40 text-xs leading-relaxed">{decision}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-5 border-t border-white/5">
        <div className="flex items-center gap-8 flex-wrap">
          <p className="text-white/20 text-xs font-mono uppercase">Delivered</p>
          {[["4 pages","across buying committee"],["3 CTAs","stage-matched"],["1 brand","zero fragmentation"],["Sales guide","routing included"]].map(([v,l]) => (
            <div key={l} className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-white">{v}</span>
              <span className="text-white/25 text-xs font-mono">{l}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
