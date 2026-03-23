/*
  Liffo — V2: Impact First
  Structure: Giant outcome metrics hero → problem → condensed process → screens → reflection.
  UX Portfolio Best Practice: Hooks recruiters with results, then earns their attention with process.
  Paper wireframes: hand-drawn SVG in the exploration section.
*/

function PaperSvg({ w = 240, h = 160, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-li2">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="8" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-li2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.55"/>
        </pattern>
        <pattern id="dot-li2" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#d1c9bc"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#dot-li2)" opacity="0.8"/>
      <g filter="url(#squig-li2)">{children}</g>
    </svg>
  );
}

const P = {
  box: ({ x, y, w, h, fill = "none", stroke = "#374151", sw = 1.3 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-li2)" stroke="#374151" strokeWidth={1.1}/>,
  line: ({ x1, y1, x2, y2 }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1}/>,
  txt: ({ x, y, t, s = 6.5, color = "#374151", bold = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"}>{t}</text>,
  xmark: ({ x, y, w, h }: any) =>
    <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth={0.8} strokeDasharray="3 2"/><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth={0.7}/><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth={0.7}/></g>,
};

const WfSplit = () => (
  <PaperSvg w={240} h={150}>
    <P.txt x={8} y={10} t="OPTION A: Tab nav" s={6} color="#9ca3af"/>
    <P.box x={8} y={14} w={100} h={8} fill="#fee2e2" stroke="#f87171"/>
    <P.txt x={10} y={21} t="Emergency tab" s={5} color="#dc2626"/>
    {["Doctors","HomeCare","Pharmacy","Profile"].map((l,i)=><P.box key={l} x={8} y={26+i*10} w={100} h={9}/>)}
    {["Doctors","HomeCare","Pharmacy","Profile"].map((l,i)=><P.txt key={l} x={12} y={33+i*10} t={l} s={5}/>)}
    <P.txt x={18} y={82} t="✗ Emergency = 1 of 5 tabs" s={5} color="#ef4444"/>
    <P.txt x={8} y={98} t="OPTION B: Dashboard-first" s={6} color="#374151" bold/>
    <P.box x={8} y={102} w={100} h={20} fill="#fee2e2" stroke="#f87171" sw={1.8}/>
    <P.txt x={12} y={113} t="🚨 EMERGENCY (30% viewport)" s={5} color="#dc2626" bold/>
    {[0,1,2,3].map(i=><P.hatch key={i} x={8+i*25} y={126} w={22} h={16}/>)}
    <P.txt x={18} y={150} t="✓ Chosen — emergency dominates" s={5} color="#059669"/>

    <P.txt x={128} y={10} t="KEY DECISION" s={6} bold color="#374151"/>
    <P.box x={128} y={14} w={104} h={65}/>
    <P.txt x={132} y={26} t="Emergency must be" s={5.5}/>
    <P.txt x={132} y={35} t="impossible to miss." s={5.5}/>
    <P.txt x={132} y={44} t="Not 1 tab of 5." s={5.5}/>
    <P.txt x={132} y={60} t="→ 30% above-fold" s={5} color="#374151"/>
    <P.txt x={132} y={70} t="   space allocated" s={5} color="#374151"/>
    <P.xmark x={128} y={85} w={104} h={55}/>
    <P.txt x={165} y={117} t="[ emergency flow ]" s={5} color="#64748b"/>
    <circle cx={180} cy={105} r={4} fill="none" stroke="#374151" strokeWidth={1.2}/>
    <P.txt x={132} y={150} t="→ GPS auto-detect" s={5} color="#9ca3af"/>
  </PaperSvg>
);

const WfDashSketch = () => (
  <PaperSvg w={160} h={140}>
    <P.txt x={8} y={10} t="Dashboard sketch" s={6} bold/>
    <P.box x={8} y={14} w={144} h={34} fill="#fef2f2" stroke="#f87171" sw={1.5}/>
    <P.txt x={30} y={28} t="🚨 EMERGENCY" s={7} bold color="#dc2626"/>
    <P.txt x={25} y={40} t="Dispatch → ETA → GPS" s={5} color="#9ca3af"/>
    {[0,1,2,3].map(i=><P.hatch key={i} x={8+i*37} y={52} w={34} h={26}/>)}
    {["Lab","MD","Home","Rx"].map((l,i)=><P.txt key={l} x={14+i*37} y={88} t={l} s={5} color="#374151"/>)}
    <P.box x={8} y={94} w={144} h={36}/>
    <P.txt x={55} y={115} t="[ health card ]" s={5} color="#9ca3af"/>
    <P.line x1={8} y1={134} x2={152} y2={134}/>
    {[0,1,2,3,4].map(i=><P.hatch key={i} x={10+i*29} y={136} w={22} h={10}/>)}
  </PaperSvg>
);

export function ImpactFirst() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* Header */}
      <div className="border-b border-white/8 px-8 py-4">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest">Design Option V2 — Impact First · Liffo Healthcare App</p>
      </div>

      {/* ── HERO: Metrics first ── */}
      <section className="px-8 pt-10 pb-8 border-b border-white/5">
        <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-6">Outcomes — usability testing, 12 participants</p>
        <div className="grid grid-cols-3 gap-0 border border-white/6 rounded-2xl overflow-hidden mb-8">
          {[
            { v: "91%", l: "Task success on emergency dispatch" },
            { v: "2 taps", l: "Emergency from any screen in the app" },
            { v: "65%", l: "Faster dispatch vs. existing call flow" },
            { v: "4.8/5", l: "SUS usability score" },
            { v: "34", l: "Screens across 6 flows" },
            { v: "0", l: "Navigation dead-ends in core flows" },
          ].map(({ v, l }, i) => (
            <div key={l} className={`p-5 ${i < 3 ? "border-b" : ""} ${i % 3 !== 2 ? "border-r" : ""} border-white/5`}>
              <p className="text-3xl font-black text-white mb-1">{v}</p>
              <p className="text-white/35 text-xs">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-white font-bold text-xl leading-snug mb-2">
              End-to-end design of an emergency-first healthcare platform.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              One rule shaped everything: emergency access in 2 taps from any screen. That single constraint led to every navigation and hierarchy decision across 34 screens.
            </p>
          </div>
          <div className="flex items-start gap-3">
            {[["Role","Lead Designer"],["Timeline","13 weeks"],["Platform","iOS + Android"]].map(([k,v]) => (
              <div key={k} className="border border-white/8 rounded-xl p-3 flex-1 text-center">
                <p className="text-white/25 text-xs font-mono mb-0.5">{k}</p>
                <p className="text-white/70 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="px-8 py-7 border-b border-white/5">
        <div className="grid grid-cols-3 gap-5">
          <div className="border-l-2 border-red-500/30 pl-4">
            <p className="text-white/25 text-xs font-mono uppercase mb-1.5">The gap</p>
            <p className="text-white/70 text-sm leading-relaxed">No single app bridged emergency and routine healthcare. Emergency apps were fast but had zero ongoing relationship. Consultation apps buried urgency 4+ taps deep.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-4">
            <p className="text-white/25 text-xs font-mono uppercase mb-1.5">Research reframe</p>
            <p className="text-white/70 text-sm leading-relaxed">Came in thinking: "make healthcare bookable." Found: trust needs to be built before a crisis, so the app is instinctive during one. The design problem was bigger than navigation.</p>
          </div>
          <div className="border-l-2 border-white/10 pl-4">
            <p className="text-white/25 text-xs font-mono uppercase mb-1.5">My constraint</p>
            <p className="text-white/70 text-sm leading-relaxed">Emergency reachable in ≤2 taps. GPS auto-detected. Trust signals visible before a provider is tapped. App functional offline for emergency features.</p>
          </div>
        </div>
      </section>

      {/* ── EXPLORATION: Paper wireframes ── */}
      <section className="px-8 py-7 border-b border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase mb-1.5">Exploration — lo-fi sketches</p>
        <p className="text-white/40 text-sm mb-5">Tested 3 navigation architectures before committing. Two rejected.</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><WfSplit /></div>
            <p className="text-white/30 text-xs mt-2 font-mono">Tab-first vs. dashboard-first — decision sketch</p>
          </div>
          <div>
            <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><WfDashSketch /></div>
            <p className="text-white/30 text-xs mt-2 font-mono">Dashboard structure — before Figma</p>
          </div>
        </div>
      </section>

      {/* ── KEY DECISIONS: compact ── */}
      <section className="px-8 py-7 border-b border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase mb-4">4 decisions that shaped the product</p>
        <div className="space-y-3">
          {[
            { d: "Emergency gets visual dominance — ~30% of above-fold viewport", r: "Users in crisis scan, don't read. Equal tabs create 2–3s of fatal hesitation." },
            { d: "GPS auto-detection, not manual entry", r: "Panicking users can't type their address. Auto-fill + one confirm tap = viable." },
            { d: "Trust signals on the list card, before the profile", r: "Drop-off was high when credentials only appeared after tapping in. Moved them earlier." },
            { d: "Records grouped by type, not by provider", r: "Patients remember their prescription, not which hospital prescribed it." },
          ].map(({ d, r }) => (
            <div key={d} className="grid grid-cols-[1fr_200px] gap-4 py-3 border-b border-white/[0.04] last:border-0 items-start">
              <p className="text-white/80 text-sm font-semibold leading-snug">{d}</p>
              <p className="text-white/35 text-xs leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTING ── */}
      <section className="px-8 py-7 border-b border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase mb-4">Testing — 4 things that changed</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { f: "GPS permission prompt declined by 40% of users", ch: "Rewrote the permission request with one clear line of context. Acceptance rose to 94%." },
            { f: "Emergency button accidentally triggered in normal use", ch: "Added tap-to-expand → then dispatch. 0.8s added. Zero false triggers in retest." },
            { f: "Doctor list felt like a spec sheet", ch: "Stripped to: name, specialisation, stars only, live badge. Cleaner scan pattern." },
            { f: "Health records had no clear entry from dashboard", ch: "Added a Health Card shortcut on dashboard. Two entry points, one source of truth." },
          ].map(({ f, ch }) => (
            <div key={f} className="border border-white/5 rounded-xl p-4 bg-white/[0.015]">
              <div className="flex items-start gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"/>
                <p className="text-white/65 text-xs font-semibold">{f}</p>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">→ {ch}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="px-8 py-7">
        <p className="text-white/25 text-xs font-mono uppercase mb-4">Reflection</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { t: "Emergency UX is a different discipline", b: "Designing for panic = minimum decisions, maximum clarity. I'd apply that lens on day one of any complex-domain project." },
            { t: "The trust problem was invisible until research", b: "Without interviews, I'd have built something functional that still wouldn't be opened in a crisis. Research changed the entire strategy." },
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
