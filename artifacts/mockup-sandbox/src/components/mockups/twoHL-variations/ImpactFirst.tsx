/*
  2HL — V2: Impact First
  Opens with outcomes and the problem, then shows process with paper wireframes.
*/

function PaperSvg({ w = 240, h = 155, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-2i2">
          <feTurbulence type="turbulence" baseFrequency="0.028" numOctaves="3" seed="6" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.1" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-2i2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5"/>
        </pattern>
        <pattern id="dot-2i2" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#d1c9bc"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#dot-2i2)" opacity="0.8"/>
      <g filter="url(#squig-2i2)">{children}</g>
    </svg>
  );
}

const H = {
  box: ({ x, y, w, h, fill = "none", stroke = "#374151", sw = 1.3 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-2i2)" stroke="#374151" strokeWidth={1.1}/>,
  ln: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6.5, color = "#374151", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
  bubble: ({ x, y, w, t }: any) =>
    <g><rect x={x} y={y-7} width={w} height={10} rx="3" fill="#fff" stroke="#374151" strokeWidth={0.9}/><text x={x+3} y={y} fontSize={4.5} fill="#374151" fontFamily="monospace">{t}</text></g>,
};

const WfBoardPage = () => (
  <PaperSvg>
    <H.txt x={8} y={10} t="Board page — fear first" s={6} bold/>
    <H.box x={8} y={14} w={224} h={24} fill="#fef9c3" stroke="#ca8a04" sw={1.8}/>
    <H.txt x={14} y={24} t="$240K avg increase per pupil" s={7} bold color="#854d0e"/>
    <H.txt x={14} y={34} t="within 24 months" s={5.5} color="#854d0e"/>
    <H.bubble x={130} y={40} w={90} t="financial # → no mission"/>
    <H.box x={8} y={46} w={224} h={16}/>
    <H.txt x={70} y={57} t="[ how it works, brief ]" s={5} color="#6b7280"/>
    <H.box x={8} y={66} w={224} h={20}/>
    <H.txt x={55} y={79} t="[ comparable district case study ]" s={5} color="#6b7280"/>
    <H.box x={8} y={90} w={224} h={20}/>
    <H.txt x={70} y={103} t="[ ROI breakdown table ]" s={5} color="#6b7280"/>
    <H.box x={8} y={114} w={224} h={14} fill="#dbeafe" stroke="#60a5fa"/>
    <H.txt x={70} y={124} t="GET THE ROI MODEL →" s={5.5} bold color="#2563eb"/>
    <H.txt x={8} y={140} t="no testimonials" s={5} color="#9ca3af" italic/>
    <H.txt x={8} y={149} t="boards don't evaluate on social proof" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

const WfAllPages = () => (
  <PaperSvg>
    <H.txt x={8} y={10} t="4 pages — same brand, diff hierarchy" s={6} bold/>
    <H.ln x1={8} y1={14} x2={232} y2={14}/>
    {[
      { y: 18, fill: "#e9d5ff", label: "Homepage (WordPress)", cta: "See how it works" },
      { y: 52, fill: "#dbeafe", label: "Head of School (HubSpot)", cta: "Request briefing" },
      { y: 86, fill: "#dcfce7", label: "Dean of Academics (HubSpot)", cta: "See teacher dashboard" },
      { y: 120, fill: "#fef9c3", label: "Board Member (HubSpot)", cta: "Get ROI model" },
    ].map(({ y, fill, label, cta }) => (
      <g key={label}>
        <H.box x={8} y={y} w={224} h={30} fill={fill} stroke="#9ca3af" sw={0.9}/>
        <H.txt x={12} y={y+12} t={label} s={5.5} bold/>
        <H.hatch x={170} y={y+4} w={58} h={22}/>
        <H.txt x={173} y={y+18} t={cta} s={4.5}/>
      </g>
    ))}
    <H.txt x={8} y={153} t="one visual system — four content hierarchies" s={4.5} color="#9ca3af" italic/>
  </PaperSvg>
);

export function ImpactFirst() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-b border-white/8 px-8 py-4">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest">Design Option V2 — Impact First · 2 Hour Learning</p>
      </div>

      <section className="px-8 pt-10 pb-7 border-b border-white/5">
        <p className="text-white/35 text-xs font-mono uppercase mb-5">What this project delivered</p>
        <div className="grid grid-cols-3 gap-0 border border-white/6 rounded-2xl overflow-hidden mb-7">
          {[
            { v: "4 pages", l: "Each aligned to a distinct buying committee role" },
            { v: "3 CTAs", l: "Specific to buyer stage — not generic 'Request a Demo'" },
            { v: "1 brand", l: "One visual system — zero fragmentation across all pages" },
            { v: "Sales-ready", l: "A page for every lead type, instantly linkable by sales" },
            { v: "4.5+/5", l: "Client satisfaction across all review and iteration sessions" },
            { v: "0", l: "Generic 'one-size-fits-all' pages — each serves one persona" },
          ].map(({ v, l }, i) => (
            <div key={l} className={`p-5 ${i < 3 ? "border-b" : ""} ${i % 3 !== 2 ? "border-r" : ""} border-white/5`}>
              <p className="text-3xl font-black text-white mb-1">{v}</p>
              <p className="text-white/35 text-xs">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-white font-bold text-xl leading-snug mb-2">A persona-driven landing page system that gives each stakeholder in a school buying committee exactly what they need to say yes.</p>
            <p className="text-white/50 text-sm leading-relaxed">2HL's sales team was sending every lead to the same homepage. The homepage tried to speak to principals, deans, and board members simultaneously — and answered none of them well enough to convert.</p>
          </div>
          <div className="flex items-start gap-3">
            {[["Role","Lead Designer"],["Pages","4"],["Platform","Web / HubSpot"]].map(([k,v]) => (
              <div key={k} className="border border-white/8 rounded-xl p-3 flex-1 text-center">
                <p className="text-white/25 text-xs font-mono mb-0.5">{k}</p>
                <p className="text-white/70 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-6 border-b border-white/5">
        <div className="grid grid-cols-3 gap-5">
          {[
            { l: "The brief", t: "'We need a better website.' All leads were going to the same homepage regardless of role." },
            { l: "The research", t: "Sales were stalling at the board stage. Each role has a different fear. One page can't answer three different questions." },
            { l: "The design principle", t: "Design to the fear, not the feature. The page that addresses their specific concern earns the next conversation." },
          ].map(({ l, t }) => (
            <div key={l} className="border-l-2 border-white/10 pl-4">
              <p className="text-white/25 text-xs font-mono uppercase mb-1.5">{l}</p>
              <p className="text-white/65 text-sm leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-6 border-b border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase mb-5">Exploration — lo-fi sketches</p>
        <div className="grid grid-cols-2 gap-4">
          {[[WfAllPages,"4-page system — messaging architecture"],[WfBoardPage,"Board page: fear-first structure"]].map(([W,lbl]:any) => (
            <div key={lbl}>
              <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><W /></div>
              <p className="text-white/30 text-xs mt-2 font-mono">{lbl}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-6 border-b border-white/5">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-white/25 text-xs font-mono uppercase mb-4">Key decisions</p>
            {[
              { d: "Board page: financial number first, no mission warmup", r: "Boards evaluate fiduciary responsibility, not brand warmth. $240K opens the page." },
              { d: "CTAs are stage-gates, not generic buttons", r: "Homepage: 'See how it works.' Principal: 'Request briefing.' Board: 'Get ROI model.'" },
              { d: "One visual system across all four pages", r: "Brand fragmentation would confuse sales reps and undermine credibility." },
              { d: "Dean page centres the teacher, not the product", r: "Rewrote from '2HL's framework' to 'your teachers focus on what they do best.'" },
            ].map(({ d, r }) => (
              <div key={d} className="border-b border-white/[0.04] pb-3 mb-3 last:border-0">
                <p className="text-white/75 text-xs font-semibold mb-0.5">{d}</p>
                <p className="text-white/35 text-xs">{r}</p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-white/25 text-xs font-mono uppercase mb-4">Testing — what changed</p>
            {[
              { f: "Sales reps didn't know which page to send", ch: "Built a routing guide: decision tree mapping contact role → correct page." },
              { f: "Board page called 'too cold' by internal stakeholders", ch: "Added one line of brand context below the financial number. Number stays first." },
              { f: "Homepage CTA 'See how it works' unclear", ch: "Added descriptor: 'Book a 20-minute walkthrough.' Specificity removes hesitation." },
            ].map(({ f, ch }) => (
              <div key={f} className="border border-white/5 rounded-xl p-3 bg-white/[0.015] mb-2">
                <div className="flex items-start gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1"/>
                  <p className="text-white/60 text-xs font-semibold">{f}</p>
                </div>
                <p className="text-white/30 text-xs">→ {ch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-6">
        <p className="text-white/25 text-xs font-mono uppercase mb-4">Reflection</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { t: "B2B UX is sales strategy with better typography", b: "The question isn't just 'is this easy to use?' — it's 'does this move the right person closer to a decision?'" },
            { t: "The sales team is a user too", b: "I designed for four buyer personas and nearly forgot the sales rep routing leads to the right page. Built a routing guide as part of the deliverable." },
          ].map(({ t, b }) => (
            <div key={t} className="border-l border-white/8 pl-4">
              <p className="text-white/70 text-sm font-semibold mb-1">{t}</p>
              <p className="text-white/35 text-xs leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
