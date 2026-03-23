/*
  Liffo — V3: Visual Artifact Showcase
  Structure: Screens + wireframes ARE the content. Lo-fi sketch → hi-fi description side-by-side.
  Text is annotations, not paragraphs. Shows the CRAFT of design iteration.
  UX Portfolio Best Practice: Demonstrates before/after thinking and design craft visually.
*/

function PaperSvg({ w = 200, h = 160, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-lv3">
          <feTurbulence type="turbulence" baseFrequency="0.028" numOctaves="3" seed="12" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-lv3" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.9" opacity="0.5"/>
        </pattern>
        <pattern id="ruled-lv3" width="200" height="14" patternUnits="userSpaceOnUse">
          <line x1="0" y1="13" x2="200" y2="13" stroke="#e0d5c5" strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#ruled-lv3)" opacity="0.8"/>
      <g filter="url(#squig-lv3)">{children}</g>
    </svg>
  );
}

const Q = {
  box: ({ x, y, w, h, fill = "none", stroke = "#2d2d2d", sw = 1.4 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-lv3)" stroke="#2d2d2d" strokeWidth={1.2}/>,
  line: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2d2d2d" strokeWidth={1.1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6, color = "#2d2d2d", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
  xmark: ({ x, y, w, h }: any) =>
    <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth={0.9} strokeDasharray="3 2"/><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth={0.8}/><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth={0.8}/></g>,
  bubble: ({ x, y, w, t }: any) =>
    <g><rect x={x} y={y-8} width={w} height={11} rx="3" fill="#fff" stroke="#374151" strokeWidth={0.9}/><text x={x+3} y={y} fontSize={4.5} fill="#374151" fontFamily="monospace">{t}</text></g>,
};

const Wf_Emergency = () => (
  <PaperSvg w={200} h={170}>
    <Q.txt x={8} y={10} t="Lo-fi: Emergency flow" s={6} bold/>
    <Q.txt x={8} y={20} t="Step 1: Dashboard" s={5} color="#6b7280"/>
    <Q.box x={8} y={24} w={184} h={36} fill="#fef2f2" stroke="#f87171" sw={1.8}/>
    <Q.txt x={18} y={36} t="🚨 EMERGENCY" s={8} bold color="#dc2626"/>
    <Q.txt x={18} y={47} t="[ large tap target — always visible ]" s={5} color="#9ca3af"/>
    <Q.bubble x={102} y={55} w={72} t="→ opens emergency modal"/>
    <Q.txt x={8} y={72} t="Step 2: Confirm + GPS" s={5} color="#6b7280"/>
    <Q.box x={8} y={76} w={184} h={24}/>
    <Q.xmark x={12} y={78} w={40} h={18}/>
    <Q.txt x={56} y={87} t="[ GPS location auto-detected ]" s={5} color="#374151"/>
    <Q.txt x={56} y={96} t="tap once to confirm" s={5} color="#9ca3af"/>
    <Q.txt x={8} y={114} t="Step 3: Choose hospital" s={5} color="#6b7280"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <Q.box x={8} y={118+i*15} w={130} h={13}/>
        <Q.hatch x={142} y={118+i*15} w={50} h={13}/>
        <Q.txt x={12} y={128+i*15} t={`City Hospital ${i+1} — ETA ${8+i*4}min`} s={5}/>
        <Q.txt x={146} y={128+i*15} t="ambulance" s={4} color="#6b7280"/>
      </g>
    ))}
    <Q.txt x={24} y={166} t="[ sorted by ETA — not distance ]" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

const Wf_Dashboard = () => (
  <PaperSvg w={200} h={160}>
    <Q.txt x={8} y={10} t="Lo-fi: Dashboard structure" s={6} bold/>
    <Q.box x={8} y={14} w={184} h={44} fill="#fef2f2" stroke="#f87171" sw={2}/>
    <Q.txt x={12} y={24} t="EMERGENCY" s={8} bold color="#dc2626"/>
    <Q.txt x={12} y={34} t="30% of above-fold" s={5} color="#9ca3af" italic/>
    <Q.txt x={12} y={44} t="tap → dispatch" s={5} color="#9ca3af"/>
    <Q.line x1={8} y1={62} x2={192} y2={62} dashed/>
    <Q.txt x={66} y={70} t="services" s={5} color="#6b7280"/>
    {[0,1,2,3].map(i=><Q.hatch key={i} x={8+i*46} y={74} w={42} h={30}/>)}
    <Q.line x1={8} y1={108} x2={192} y2={108} dashed/>
    <Q.txt x={60} y={116} t="health summary" s={5} color="#6b7280"/>
    <Q.box x={8} y={120} w={184} h={24}/>
    <Q.line x1={8} y1={148} x2={192} y2={148}/>
    {[0,1,2,3,4].map(i=><Q.hatch key={i} x={12+i*36} y={150} w={28} h={10}/>)}
    <Q.bubble x={40} y={90} w={70} t="equal visual weight = bad"/>
    <Q.bubble x={40} y={64} w={70} t="emergency MUST dominate"/>
  </PaperSvg>
);

const Wf_Doctor = () => (
  <PaperSvg w={200} h={160}>
    <Q.txt x={8} y={10} t="Lo-fi: Doctor list — v1 vs v2" s={6} bold/>
    <Q.txt x={8} y={18} t="v1 — too much info on card" s={5} color="#ef4444"/>
    {[0,1].map(i=>(
      <g key={i}>
        <Q.box x={8} y={22+i*36} w={184} h={32}/>
        <Q.hatch x={12} y={25+i*36} w={20} h={24}/>
        <Q.txt x={36} y={33+i*36} t="Dr. Name, Cardiologist" s={5.5}/>
        <Q.txt x={36} y={41+i*36} t="14 yrs · MBBS · MD · DM · Rating 4.8" s={4.5} color="#6b7280"/>
        <Q.txt x={36} y={49+i*36} t="Available: Mon-Fri, 9am-5pm" s={4.5} color="#6b7280"/>
      </g>
    ))}
    <Q.txt x={18} y={100} t="✗ feels like a spec sheet" s={5} color="#ef4444" italic/>
    <Q.line x1={8} y1={106} x2={192} y2={106} dashed/>
    <Q.txt x={8} y={114} t="v2 — stripped to essentials" s={5} color="#059669"/>
    {[0,1].map(i=>(
      <g key={i}>
        <Q.box x={8} y={118+i*20} w={184} h={17}/>
        <Q.hatch x={12} y={120+i*20} w={14} h={12}/>
        <Q.txt x={30} y={128+i*20} t="Dr. Name · Cardiology" s={5.5}/>
        <Q.txt x={120} y={128+i*20} t="★★★★☆ 🟢" s={5}/>
      </g>
    ))}
    <Q.txt x={24} y={158} t="✓ clean scan — trust before tap" s={5} color="#059669" italic/>
  </PaperSvg>
);

const Wf_TestFinding = () => (
  <PaperSvg w={200} h={155}>
    <Q.txt x={8} y={10} t="Test finding → design change" s={6} bold/>
    <Q.line x1={8} y1={14} x2={192} y2={14}/>
    <Q.txt x={8} y={24} t="BEFORE: GPS prompt w/o context" s={5.5} color="#ef4444"/>
    <Q.box x={8} y={28} w={184} h={30}/>
    <Q.txt x={18} y={38} t="Allow location access?" s={6} bold/>
    <Q.box x={18} y={45} w={60} h={10} fill="#e5e7eb" stroke="#9ca3af"/>
    <Q.txt x={25} y={52} t="Deny" s={5}/>
    <Q.box x={98} y={45} w={90} h={10} fill="#fee2e2" stroke="#f87171"/>
    <Q.txt x={115} y={52} t="Allow" s={5} color="#dc2626"/>
    <Q.txt x={40} y={68} t="✗ 40% declined → emergency broke" s={5} color="#ef4444" italic/>
    <Q.line x1={8} y1={75} x2={192} y2={75} dashed/>
    <Q.txt x={8} y={83} t="AFTER: one line of context" s={5.5} color="#059669"/>
    <Q.box x={8} y={87} w={184} h={40}/>
    <Q.txt x={14} y={97} t="We need your location so we can" s={5}/>
    <Q.txt x={14} y={106} t="dispatch help without you typing" s={5}/>
    <Q.txt x={14} y={115} t="your address in an emergency." s={5}/>
    <Q.box x={8} y={130} w={184} h={10} fill="#dcfce7" stroke="#22c55e"/>
    <Q.txt x={18} y={138} t="✓ 94% accepted" s={5} color="#059669" bold/>
    <Q.bubble x={70} y={155} w={100} t="one sentence → 54% improvement"/>
  </PaperSvg>
);

export function VisualArtifact() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* Header */}
      <div className="border-b border-white/8 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-0.5">Design Option V3 — Visual Artifact Showcase</p>
            <h1 className="text-2xl font-black text-white">Liffo — Design Iteration</h1>
          </div>
          <div className="text-right">
            <p className="text-white/25 text-xs font-mono">Lo-fi sketch → design decision · Each artifact shows WHY</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          {["Structure: Artifact-driven","Strength: Shows design craft","Best for: Craft-oriented teams"].map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 font-mono">{t}</span>
          ))}
        </div>
      </div>

      {/* Brief strip */}
      <div className="px-8 py-4 border-b border-white/5 flex gap-6 items-center">
        <p className="text-white/70 font-semibold">Liffo · Emergency-first healthcare · 34 screens · 13 weeks</p>
        <div className="ml-auto flex gap-3">
          {["Lead Designer","End-to-end","Mobile"].map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40 font-mono">{t}</span>
          ))}
        </div>
      </div>

      {/* ── ARTIFACT GRID ── */}
      <section className="px-8 py-7">
        <p className="text-white/25 text-xs font-mono uppercase mb-1.5">Design artifacts — sketches → decisions</p>
        <p className="text-white/35 text-sm mb-6">Each sketch shows a specific design question. Each annotation explains the answer.</p>

        <div className="grid grid-cols-2 gap-5">
          {[
            { wf: <Wf_Dashboard />, label: "Dashboard hierarchy sketch", decision: "Emergency block takes 30% of above-fold. Hierarchy rule: urgency > routine. Tested both — equal tabs added 2–3s hesitation in crisis scenarios.", phase: "Exploration" },
            { wf: <Wf_Emergency />, label: "Emergency flow — step-by-step", decision: "3 steps max. GPS auto-fill removes the most error-prone step. Hospital list sorted by ETA — not distance. Distance is irrelevant if the ambulance isn't available.", phase: "Exploration" },
            { wf: <Wf_Doctor />, label: "Doctor list — v1 vs v2", decision: "V1 showed everything (14 years, multiple credentials, full hours). Felt like a spec sheet. V2: name, specialisation, star rating, live badge only. Decision made on the list, confirmed on the profile.", phase: "Iteration" },
            { wf: <Wf_TestFinding />, label: "Test finding → design fix", decision: "GPS permission declined by 40% of testers when shown without context. Adding one sentence of explanation brought acceptance to 94%. Copy is UX.", phase: "Testing" },
          ].map(({ wf, label, decision, phase }) => (
            <div key={label} className="border border-white/6 rounded-2xl overflow-hidden bg-white/[0.015]">
              <div className="bg-[#fdf8f0] border-b border-white/8">{wf}</div>
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

      {/* Outcomes inline */}
      <section className="px-8 py-5 border-t border-white/5">
        <div className="flex items-center gap-8 flex-wrap">
          <p className="text-white/20 text-xs font-mono uppercase">Outcomes</p>
          {[["91%","task success"],["2 taps","emergency"],["65%","faster dispatch"],["4.8/5","SUS score"]].map(([v,l]) => (
            <div key={l} className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-white">{v}</span>
              <span className="text-white/25 text-xs font-mono">{l}</span>
            </div>
          ))}
          <p className="text-white/15 text-xs font-mono ml-auto">Usability testing, 12 participants</p>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-8 py-6 border-t border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase mb-4">Reflection</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "Emergency UX is a different discipline", b: "Minimum decisions, maximum clarity. Every unnecessary step is a failure. I'd apply this lens on day one of any complex-domain project." },
            { t: "The lo-fi stage isn't decoration", b: "Every sketch above represents a decision point. The wireframe of the doctor list V1 vs V2 was the moment the problem became clear — not in Figma, in pencil." },
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
