/*
  Liffo — V1: Process Timeline
  Structure: Vertical left-rail timeline → each phase is a labeled block with paper-sketch artifacts inline.
  UX Portfolio Best Practice: Shows systematic thinking, complete process, iteration evidence.
  Paper wireframes look hand-drawn using SVG turbulence filter + hatch patterns.
*/

/* ── Paper sketch SVG primitives ────────────────────────────────────────── */
function PaperSvg({ w = 300, h = 200, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-liffo1">
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="2" seed="5" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-l1" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#94a3b8" strokeWidth="0.9" opacity="0.6"/>
        </pattern>
        <pattern id="grid-l1" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#grid-l1)" opacity="0.7"/>
      <g filter="url(#squig-liffo1)">{children}</g>
    </svg>
  );
}

const Sk = {
  box: ({ x, y, w, h, fill = "none", stroke = "#374151", sw = 1.3 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hbox: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-l1)" stroke="#374151" strokeWidth={1.2}/>,
  ln: ({ x1, y1, x2, y2 }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1.1}/>,
  txt: ({ x, y, t, s = 7, bold = false, color = "#374151" }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"}>{t}</text>,
  arrow: ({ x1, y1, x2, y2 }: any) =>
    <g><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1.1}/><polygon points={`${x2},${y2} ${x2-4},${y2-4} ${x2+4},${y2-4}`} fill="#374151" transform={`rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI+90},${x2},${y2})`}/></g>,
  xmark: ({ x, y, w, h }: any) =>
    <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth={0.9} strokeDasharray="2.5 2"/><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth={0.8}/><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth={0.8}/></g>,
  pill: ({ x, y, w, h = 10, label }: any) =>
    <g><rect x={x} y={y} width={w} height={h} rx={h/2} fill="#e0e7ff" stroke="#818cf8" strokeWidth={0.9}/><text x={x+w/2} y={y+h-2.5} fontSize={5} fill="#4338ca" fontFamily="monospace" textAnchor="middle">{label}</text></g>,
};

const WfDashboard = () => (
  <PaperSvg w={220} h={170}>
    <Sk.txt x={8} y={14} t="DASHBOARD" s={6} bold/>
    <Sk.box x={8} y={18} w={204} h={42} fill="#fee2e2" stroke="#f87171" sw={1.4}/>
    <Sk.txt x={14} y={28} t="🚨 EMERGENCY" s={7} bold color="#dc2626"/>
    <Sk.txt x={14} y={38} t="Tap to dispatch ambulance →" s={5.5} color="#dc2626"/>
    <Sk.txt x={14} y={48} t="[ always visible — max 2 taps from anywhere ]" s={4.5} color="#9ca3af"/>
    <Sk.txt x={8} y={74} t="SERVICES" s={5} color="#6b7280"/>
    {[0,1,2,3].map(i=><Sk.hbox key={i} x={8+i*51} y={78} w={46} h={36}/>)}
    {["Lab","Doctor","HomeCare","Pharm"].map((l,i)=><Sk.txt key={l} x={12+i*51} y={127} t={l} s={5} color="#374151"/>)}
    <Sk.txt x={8} y={143} t="YOUR HEALTH" s={5} color="#6b7280"/>
    <Sk.box x={8} y={148} w={204} h={16}/>
    <Sk.txt x={60} y={159} t="[ health summary card ]" s={5} color="#9ca3af"/>
    <Sk.ln x1={8} y1={166} x2={212} y2={166}/>
    {[0,1,2,3,4].map(i=><Sk.hbox key={i} x={12+i*40} y={168} w={28} h={8}/>)}
    <Sk.txt x={68} y={158} t="" s={5}/>
  </PaperSvg>
);

const WfEmergency = () => (
  <PaperSvg w={220} h={170}>
    <Sk.txt x={8} y={12} t="EMERGENCY FLOW" s={6} bold/>
    <Sk.xmark x={8} y={16} w={204} h={68}/>
    <Sk.txt x={85} y={57} t="[ MAP ]" s={7} color="#64748b"/>
    <circle cx={110} cy={42} r={5} fill="none" stroke="#374151" strokeWidth={1.2}/>
    <Sk.txt x={65} y={72} t="GPS auto-detected" s={5} color="#9ca3af"/>
    <Sk.box x={8} y={92} w={204} h={26} fill="#fee2e2" stroke="#f87171" sw={1.6}/>
    <Sk.txt x={55} y={103} t="DISPATCH AMBULANCE" s={8} bold color="#dc2626"/>
    <Sk.txt x={70} y={113} t="[ one tap ]" s={5} color="#9ca3af"/>
    <Sk.txt x={8} y={128} t="HOSPITALS — sorted by ETA" s={5} color="#6b7280"/>
    {[0,1,2].map(i=>(
      <g key={i}>
        <Sk.box x={8} y={132+i*12} w={145} h={10}/>
        <Sk.hbox x={158} y={132+i*12} w={54} h={10}/>
        <Sk.txt x={12} y={140+i*12} t={`Hospital ${i+1}`} s={5}/>
        <Sk.txt x={162} y={140+i*12} t={`ETA: ${8+i*3}min`} s={5}/>
      </g>
    ))}
  </PaperSvg>
);

const WfDoctorWf = () => (
  <PaperSvg w={220} h={170}>
    <Sk.txt x={8} y={12} t="DOCTOR LIST" s={6} bold/>
    <Sk.box x={8} y={16} w={204} h={14}/>
    <Sk.txt x={80} y={26} t="[ search... ]" s={6} color="#9ca3af"/>
    <Sk.box x={8} y={34} w={50} h={10} fill="#e0e7ff" stroke="#818cf8"/>
    <Sk.txt x={15} y={42} t="All" s={5} color="#4338ca"/>
    <Sk.box x={62} y={34} w={60} h={10}/>
    <Sk.txt x={70} y={42} t="Cardiology" s={5}/>
    <Sk.box x={126} y={34} w={50} h={10}/>
    <Sk.txt x={133} y={42} t="Neurology" s={5}/>
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <Sk.box x={8} y={48+i*28} w={204} h={25}/>
        <circle cx={24} cy={60+i*28} r={8} fill="url(#hatch-l1)" stroke="#374151" strokeWidth={0.9}/>
        <Sk.ln x1={38} y1={55+i*28} x2={140} y2={55+i*28}/>
        <Sk.ln x1={38} y1={62+i*28} x2={110} y2={62+i*28}/>
        <Sk.txt x={38} y={70+i*28} t="★★★★☆  4.8  14 yrs" s={4.5} color="#6b7280"/>
        <Sk.hbox x={160} y={51+i*28} w={48} h={14}/>
        <Sk.txt x={162} y={61+i*28} t="Book Now" s={5}/>
      </g>
    ))}
    <Sk.txt x={52} y={166} t="[ trust visible before tap ]" s={4.5} color="#9ca3af"/>
  </PaperSvg>
);

/* ── Main Component ─────────────────────────────────────────────────────── */
export function ProcessTimeline() {
  const phases = [
    {
      n: "01", label: "The Brief", color: "#6366f1",
      summary: "One app for emergency + routine healthcare. Hard constraint: emergency in 2 taps.",
      artifact: null, note: "Single hard rule shaped every nav decision",
    },
    {
      n: "02", label: "Research", color: "#8b5cf6",
      summary: "8 competitor apps audited. 5 user interviews. Behavioural analysis of existing emergency flows.",
      artifact: "research-notes",
      insight: "\"No one bridges emergency + routine. Emergency apps fail on UX. Consultation apps bury urgency.\"",
    },
    {
      n: "03", label: "Problem Reframe", color: "#ec4899",
      summary: "Started with 'make it clean.' Research showed: this is a trust-under-stress problem.",
      artifact: null, note: "The design strategy changed, not just the features.",
    },
    {
      n: "04", label: "Exploration", color: "#f59e0b",
      summary: "3 nav architectures explored. Tab-first and search-first rejected. Dashboard-first chosen.",
      artifact: "wireframes", note: "Emergency block had to dominate visually — not be one tab among five.",
    },
    {
      n: "05", label: "Design Decisions", color: "#ef4444",
      summary: "4 key decisions: emergency dominance, GPS auto-fill, trust signals on list, records by type.",
      artifact: null,
    },
    {
      n: "06", label: "Testing", color: "#10b981",
      summary: "Usability sessions with 12 participants. 4 major changes based on findings.",
      insight: "Leaderboard removed. GPS copy rewritten. Doctor card simplified. Step-by-step onboarding cut.",
    },
    {
      n: "07", label: "Outcomes", color: "#3b82f6",
      summary: "91% task success. 2-tap emergency. 65% faster dispatch. 4.8/5 SUS.",
      artifact: null, note: "Post-testing metrics, not production data.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f17] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <div className="border-b border-white/8 px-10 py-5">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">Design Option V1 — Process Timeline</p>
            <h1 className="text-3xl font-black text-white">Liffo</h1>
          </div>
          <div className="flex gap-5">
            {[["Role","Lead Designer"],["Timeline","13 wks"],["Screens","34"]].map(([k,v]) => (
              <div key={k} className="text-right">
                <p className="text-white/25 text-xs font-mono">{k}</p>
                <p className="text-white/70 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          {["Structure: Vertical timeline","Strength: Shows full process","Best for: Process-oriented hiring"].map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 font-mono">{t}</span>
          ))}
        </div>
      </div>

      {/* Timeline body */}
      <div className="px-10 py-8">
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[28px] top-2 bottom-2 w-0.5 bg-white/8" />

          <div className="space-y-8">
            {phases.map(({ n, label, color, summary, artifact, insight, note }) => (
              <div key={n} className="grid grid-cols-[64px_1fr] gap-6">
                {/* Node */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center bg-[#0f0f17] z-10 flex-shrink-0" style={{ borderColor: color + "60" }}>
                    <span className="text-xs font-black font-mono" style={{ color }}>{n}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="pb-2">
                  <p className="text-white font-bold text-sm mb-1" style={{ color }}>{label}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{summary}</p>

                  {/* Inline artifacts */}
                  {artifact === "wireframes" && (
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div>
                        <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><WfDashboard /></div>
                        <p className="text-white/30 text-xs mt-1.5 font-mono">Dashboard</p>
                      </div>
                      <div>
                        <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><WfEmergency /></div>
                        <p className="text-white/30 text-xs mt-1.5 font-mono">Emergency</p>
                      </div>
                      <div>
                        <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><WfDoctorWf /></div>
                        <p className="text-white/30 text-xs mt-1.5 font-mono">Doctor list</p>
                      </div>
                    </div>
                  )}
                  {artifact === "research-notes" && (
                    <div className="border border-white/8 rounded-xl p-4 bg-white/[0.02] mb-3">
                      <p className="text-white/25 text-xs font-mono uppercase mb-2">Research note</p>
                      <p className="text-white/65 text-sm italic">{insight}</p>
                    </div>
                  )}
                  {insight && artifact !== "research-notes" && (
                    <div className="border-l-2 pl-3 mb-2" style={{ borderColor: color + "50" }}>
                      <p className="text-sm italic" style={{ color: color + "cc" }}>{insight}</p>
                    </div>
                  )}
                  {note && <p className="text-white/25 text-xs font-mono">{note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
