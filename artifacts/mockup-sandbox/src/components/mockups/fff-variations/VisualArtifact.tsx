/*
  FFF — V3: Visual Artifact Showcase
  Sketches + annotations as the primary content. Each artifact shows a design decision.
*/

function PaperSvg({ w = 240, h = 160, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-fv3">
          <feTurbulence type="turbulence" baseFrequency="0.026" numOctaves="3" seed="9" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.3" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-fv3" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.9" opacity="0.5"/>
        </pattern>
        <pattern id="ruled-fv3" width="240" height="12" patternUnits="userSpaceOnUse">
          <line x1="0" y1="11" x2="240" y2="11" stroke="#e0d5c5" strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#ruled-fv3)" opacity="0.8"/>
      <g filter="url(#squig-fv3)">{children}</g>
    </svg>
  );
}

const V = {
  box: ({ x, y, w, h, fill = "none", stroke = "#2d2d2d", sw = 1.4 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-fv3)" stroke="#2d2d2d" strokeWidth={1.2}/>,
  ln: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2d2d2d" strokeWidth={1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6, color = "#2d2d2d", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
  bubble: ({ x, y, w, t }: any) =>
    <g><rect x={x} y={y-7} width={w} height={10} rx="3" fill="#fff" stroke="#374151" strokeWidth={0.9}/><text x={x+3} y={y} fontSize={4.5} fill="#374151" fontFamily="monospace">{t}</text></g>,
};

const Wf_OpenVsBounded = () => (
  <PaperSvg w={240} h={155}>
    <V.txt x={8} y={10} t="Open-ended vs. bounded ask" s={6} bold/>
    <V.txt x={8} y={22} t="BEFORE" s={5.5} color="#ef4444"/>
    <V.box x={8} y={26} w={224} h={26} fill="#fef2f2" stroke="#f87171"/>
    <V.txt x={14} y={37} t="Get involved in advocacy" s={6}/>
    <V.txt x={14} y={47} t="[ how? when? how long? ]" s={5} color="#9ca3af" italic/>
    <V.bubble x={100} y={55} w={110} t="no time estimate → abandoned"/>
    <V.ln x1={8} y1={60} x2={232} y2={60} dashed/>
    <V.txt x={8} y={70} t="AFTER — verb-first, bounded" s={5.5} color="#059669"/>
    <V.box x={8} y={74} w={224} h={65} fill="#f0fdf4" stroke="#22c55e" sw={1.6}/>
    <V.txt x={14} y={85} t="Call your school board rep" s={6.5} bold/>
    <V.txt x={14} y={95} t="3 min · 3 steps · +50 pts" s={5} color="#6b7280"/>
    <V.ln x1={14} y1={101} x2={224} y2={101} dashed/>
    <V.box x={14} y={105} w={206} h={10} fill="#dcfce7" stroke="#22c55e"/>
    <V.txt x={22} y={113} t="Step 1 complete ✓  →  reveal step 2" s={5} color="#059669"/>
    <V.box x={14} y={118} w={206} h={10} fill="#e0e7ff" stroke="#818cf8"/>
    <V.txt x={22} y={126} t="Step 2 complete ✓  →  reveal step 3" s={5}/>
    <V.ln x1={8} y1={145} x2={232} y2={145} dashed/>
    <V.txt x={14} y={153} t="3× more completions from same data" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

const Wf_LeaderboardRemoved = () => (
  <PaperSvg w={240} h={155}>
    <V.txt x={8} y={10} t="Test finding: leaderboard problem" s={6} bold/>
    <V.ln x1={8} y1={14} x2={232} y2={14}/>
    <V.txt x={8} y={24} t="LEADERBOARD — v1" s={5.5} color="#ef4444"/>
    <V.box x={8} y={28} w={224} h={50}/>
    {["1. Anna D.  —  320 pts","2. James R.  —  280 pts","3. Maria T.  —  240 pts","...","20. You  —  45 pts  ←"].map((t,i)=>(
      <V.txt key={i} x={14} y={38+i*10} t={t} s={5} color={i===4 ? "#ef4444" : "#374151"} bold={i===4}/>
    ))}
    <V.bubble x={50} y={80} w={140} t="rank 20: 'what's the point?'"/>
    <V.txt x={14} y={90} t="✗ bottom-ranked members disengaged" s={5} color="#ef4444" italic/>
    <V.ln x1={8} y1={97} x2={232} y2={97} dashed/>
    <V.txt x={8} y={107} t="COMMUNITY COUNTER — v2" s={5.5} color="#059669"/>
    <V.box x={8} y={111} w={224} h={28} fill="#f0fdf4" stroke="#22c55e"/>
    <V.txt x={14} y={122} t="Your community:" s={5.5}/>
    <V.txt x={14} y={132} t="847 actions this month" s={7} bold color="#059669"/>
    <V.txt x={14} y={143} t="everyone contributes to one number" s={5} color="#6b7280" italic/>
    <V.txt x={8} y={153} t="removed competition → added contribution" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

const Wf_Onboarding = () => (
  <PaperSvg w={240} h={155}>
    <V.txt x={8} y={10} t="Onboarding: before vs. after" s={6} bold/>
    <V.ln x1={8} y1={14} x2={232} y2={14}/>
    <V.txt x={8} y={24} t="v1 — 3-screen feature tour" s={5.5} color="#ef4444"/>
    <V.box x={8} y={28} w={68} h={38}/>
    <V.txt x={14} y={38} t="How it works" s={5.5} bold/>
    <V.txt x={14} y={48} t="slide 1 of 3" s={4.5} color="#9ca3af"/>
    <V.box x={80} y={28} w={68} h={38}/>
    <V.txt x={86} y={38} t="Earn points" s={5.5} bold/>
    <V.txt x={86} y={48} t="slide 2 of 3" s={4.5} color="#9ca3af"/>
    <V.box x={152} y={28} w={68} h={38}/>
    <V.txt x={158} y={38} t="Community" s={5.5} bold/>
    <V.txt x={158} y={48} t="slide 3 of 3" s={4.5} color="#9ca3af"/>
    <V.txt x={18} y={76} t="✗ all 8 testers skipped without reading" s={5} color="#ef4444" italic/>
    <V.ln x1={8} y1={82} x2={232} y2={82} dashed/>
    <V.txt x={8} y={92} t="v2 — welcome + first task" s={5.5} color="#059669"/>
    <V.box x={8} y={96} w={108} h={36} fill="#f0fdf4" stroke="#22c55e"/>
    <V.txt x={14} y={107} t="Welcome" s={6} bold/>
    <V.txt x={14} y={117} t="Your first action:" s={5}/>
    <V.txt x={14} y={126} t="Share a post — 2min" s={5} bold/>
    <V.txt x={122} y={107} t="✓ action in first" s={5} color="#059669"/>
    <V.txt x={122} y={117} t="  session" s={5} color="#059669"/>
    <V.txt x={122} y={127} t="✓ platform explains" s={5} color="#059669"/>
    <V.txt x={122} y={137} t="  itself through use" s={5} color="#059669"/>
    <V.txt x={8} y={153} t="session-1 task = strongest 30-day retention signal" s={4.5} color="#9ca3af" italic/>
  </PaperSvg>
);

const Wf_ProgressLayers = () => (
  <PaperSvg w={240} h={155}>
    <V.txt x={8} y={10} t="Progress: 3 layers sketched" s={6} bold/>
    <V.ln x1={8} y1={14} x2={232} y2={14}/>
    <V.txt x={8} y={24} t="Layer 1: Personal" s={5.5} bold/>
    <V.box x={8} y={28} w={224} h={24}/>
    <V.box x={12} y={32} w={120} h={8} fill="#e0e7ff" stroke="#818cf8"/>
    <V.txt x={136} y={39} t="280 / 500 pts" s={5}/>
    <V.txt x={12} y={46} t="🔥 streak: 5 days" s={5}/>
    <V.ln x1={8} y1={56} x2={232} y2={56} dashed/>
    <V.txt x={8} y={66} t="Layer 2: Milestones" s={5.5} bold/>
    <V.box x={8} y={70} w={224} h={24}/>
    {["Starter","Advocate","Leader","Champion"].map((l,i)=>(
      <g key={l}><V.hatch x={12+i*54} y={73} w={18} h={18}/><V.txt x={14+i*54} y={97} t={l.substring(0,4)} s={4.5} color="#6b7280"/></g>
    ))}
    <V.ln x1={8} y1={98} x2={232} y2={98} dashed/>
    <V.txt x={8} y={108} t="Layer 3: Community" s={5.5} bold/>
    <V.box x={8} y={112} w={224} h={26} fill="#f0fdf4" stroke="#22c55e"/>
    <V.txt x={16} y={123} t="Your community: 847 actions this month" s={6} bold color="#059669"/>
    <V.txt x={16} y={133} t="You contributed 12" s={5} color="#6b7280"/>
    <V.txt x={8} y={148} t="insight: individual → collective → sense of impact" s={4.5} color="#9ca3af" italic/>
    <V.bubble x={100} y={154} w={130} t="leaderboard removed from layer 1"/>
  </PaperSvg>
);

export function VisualArtifact() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-b border-white/8 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-0.5">Design Option V3 — Visual Artifact Showcase</p>
            <h1 className="text-2xl font-black text-white">FFF — Design Iteration</h1>
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
        <p className="text-white/70 font-semibold">FutureFirstFamilies · Gamified advocacy · Web platform · 4 weeks</p>
        <div className="ml-auto flex gap-3">
          {["Lead Designer","Web","HubSpot"].map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40 font-mono">{t}</span>
          ))}
        </div>
      </div>

      <section className="px-8 py-7">
        <p className="text-white/25 text-xs font-mono uppercase mb-5">Design artifacts — every sketch shows a specific decision</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { W: Wf_OpenVsBounded, label: "Open-ended vs. bounded ask", decision: "Research found bounded asks produced 3× more action. Every task got: verb-first name, time estimate, numbered steps, one-at-a-time reveal. The format is the intervention.", phase: "Exploration" },
            { W: Wf_LeaderboardRemoved, label: "Leaderboard → community counter", decision: "First version had a top-10 leaderboard. In testing, members ranked 20th or lower disengaged immediately. Replaced with a community total. One number everyone contributes to.", phase: "Testing" },
            { W: Wf_Onboarding, label: "Onboarding: feature tour vs. first task", decision: "Three-screen feature tour was skipped by all 8 testers. Replaced with welcome screen + first task (2 minutes). Platform explains itself through being used, not described.", phase: "Iteration" },
            { W: Wf_ProgressLayers, label: "Progress: 3-layer architecture", decision: "Personal points alone felt like competing with yourself. Added milestone badges at meaningful thresholds, plus a community counter. Three layers = personal + milestone + collective.", phase: "Design Decision" },
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
          <p className="text-white/20 text-xs font-mono uppercase">Outcomes</p>
          {[["89%","onboarding"],["3×","task completion"],["–60%","admin time"],["4.6/5","usability"]].map(([v,l]) => (
            <div key={l} className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-white">{v}</span>
              <span className="text-white/25 text-xs font-mono">{l}</span>
            </div>
          ))}
          <p className="text-white/15 text-xs font-mono ml-auto">Usability testing + stakeholder review</p>
        </div>
      </section>
    </div>
  );
}
