/*
  FFF — V1: Process Timeline
  Structure: Vertical left-rail timeline → research → reframe → exploration → design decisions → testing.
  Paper wireframes: hand-drawn task card, dashboard, onboarding flow sketches.
*/

function PaperSvg({ w = 240, h = 170, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-f1">
          <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" seed="3" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-f1" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#94a3b8" strokeWidth="0.9" opacity="0.55"/>
        </pattern>
        <pattern id="grid-f1" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#grid-f1)" opacity="0.65"/>
      <g filter="url(#squig-f1)">{children}</g>
    </svg>
  );
}

const S = {
  box: ({ x, y, w, h, fill = "none", stroke = "#374151", sw = 1.3 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-f1)" stroke="#374151" strokeWidth={1.1}/>,
  line: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6.5, color = "#374151", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
  xmark: ({ x, y, w, h }: any) =>
    <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth={0.8} strokeDasharray="2.5 2"/><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth={0.8}/><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth={0.8}/></g>,
  badge: ({ x, y, t, color = "#e0e7ff" }: any) =>
    <g><rect x={x} y={y-6} width={t.length*4+8} height={9} rx="4.5" fill={color} stroke="none"/><text x={x+4} y={y} fontSize={4.5} fill="#374151" fontFamily="monospace">{t}</text></g>,
};

const WfTaskCard = () => (
  <PaperSvg w={240} h={160}>
    <S.txt x={8} y={10} t="Task Card sketch" s={6} bold/>
    <S.txt x={8} y={20} t="Contact your school board rep" s={7} bold/>
    <S.txt x={8} y={30} t="verb-first → clear action" s={5} color="#9ca3af" italic/>
    <S.line x1={8} y1={34} x2={232} y2={34}/>
    <S.badge x={8} y={44} t="contact" color="#dbeafe"/>
    <S.badge x={56} y={44} t="3 min" color="#dcfce7"/>
    <S.badge x={96} y={44} t="easy" color="#fef9c3"/>
    <S.line x1={8} y1={50} x2={232} y2={50} dashed/>
    <S.txt x={8} y={60} t="STEPS" s={5.5} bold color="#6b7280"/>
    {["1. Find your rep at [link]","2. Call or email — template below","3. Mark complete ✓"].map((t,i)=>(
      <g key={i}><S.box x={8} y={64+i*18} w={224} h={15}/><S.txt x={12} y={74+i*18} t={t} s={5}/></g>
    ))}
    <S.txt x={8} y={125} t="POINTS EARNED" s={5} bold color="#6b7280"/>
    <S.box x={8} y={130} w={224} h={24} fill="#dbeafe" stroke="#60a5fa"/>
    <S.txt x={55} y={145} t="+50 pts  →  toward Advocate badge" s={6} bold color="#2563eb"/>
    <S.txt x={8} y={158} t="[ specific + time-bounded = completable ]" s={4.5} color="#9ca3af" italic/>
  </PaperSvg>
);

const WfDashboard = () => (
  <PaperSvg w={240} h={160}>
    <S.txt x={8} y={10} t="Dashboard sketch" s={6} bold/>
    <S.box x={8} y={14} w={224} h={20} fill="#eff6ff" stroke="#60a5fa" sw={1.4}/>
    <S.txt x={12} y={22} t="Welcome back, Sarah  |  streak: 🔥 5 days" s={5.5}/>
    <S.txt x={12} y={29} t="[ streak = habit reinforcement ]" s={4.5} color="#9ca3af" italic/>
    <S.txt x={8} y={44} t="YOUR NEXT TASK" s={5.5} bold color="#2563eb"/>
    <S.box x={8} y={48} w={224} h={34} fill="#f0f9ff" stroke="#38bdf8"/>
    <S.txt x={12} y={58} t="Call your school board member" s={6} bold/>
    <S.txt x={12} y={67} t="3 min · easy · contact" s={5} color="#6b7280"/>
    <S.hatch x={190} y={52} w={38} h={28}/>
    <S.txt x={192} y={70} t="Start" s={6} bold color="#0369a1"/>
    <S.txt x={8} y={92} t="COMMUNITY THIS WEEK" s={5.5} bold color="#6b7280"/>
    <S.box x={8} y={96} w={224} h={18}/>
    <S.txt x={16} y={107} t="Your community completed 847 actions" s={5.5}/>
    <S.txt x={8} y={124} t="MORE TASKS" s={5.5} bold color="#6b7280"/>
    {[0,1,2].map(i=><S.box key={i} x={8} y={128+i*10} w={224} h={9}/>)}
    {["Attend school board meeting  ·  45min","Share post about funding  ·  2min","Write letter to state rep  ·  10min"].map((t,i)=><S.txt key={i} x={12} y={135+i*10} t={t} s={5}/>)}
  </PaperSvg>
);

const WfOnboarding = () => (
  <PaperSvg w={240} h={155}>
    <S.txt x={8} y={10} t="Onboarding — first task before feature tour" s={6} bold/>
    <S.line x1={8} y1={14} x2={232} y2={14}/>
    <S.txt x={8} y={22} t="Screen 1" s={5} color="#6b7280"/>
    <S.box x={8} y={26} w={100} h={50}/>
    <S.txt x={14} y={38} t="Welcome" s={7} bold/>
    <S.txt x={14} y={48} t="to FFF" s={7} bold/>
    <S.hatch x={14} y={55} w={90} h={18}/>
    <S.txt x={25} y={66} t="[ get started ]" s={5}/>
    <S.txt x={8} y={84} t="Screen 2: Your first task" s={5} color="#6b7280"/>
    <S.box x={8} y={88} w={100} h={50} fill="#eff6ff" stroke="#60a5fa"/>
    <S.txt x={12} y={99} t="Your first action:" s={5.5}/>
    <S.txt x={12} y={108} t="Share a post  ·  2min" s={5.5} bold/>
    <S.hatch x={12} y={115} w={90} h={20}/>
    <S.txt x={22} y={128} t="[ complete task ]" s={5}/>
    <S.line x1={120} y1={26} x2={232} y2={26} dashed/>
    <S.txt x={125} y={36} t="NO feature tour" s={5.5} color="#ef4444"/>
    <S.txt x={125} y={46} t="NO profile setup" s={5.5} color="#ef4444"/>
    <S.txt x={125} y={58} t="Platform explains itself" s={5.5} color="#059669"/>
    <S.txt x={125} y={68} t="through being used" s={5.5} color="#059669"/>
    <S.txt x={125} y={85} t="insight: 1st session task" s={5} color="#374151"/>
    <S.txt x={125} y={94} t="completion = strongest" s={5} color="#374151"/>
    <S.txt x={125} y={103} t="predictor of 30-day" s={5} color="#374151"/>
    <S.txt x={125} y={112} t="retention" s={5} color="#374151"/>
  </PaperSvg>
);

export function ProcessTimeline() {
  const phases = [
    {
      n: "01", label: "The Brief", color: "#6366f1",
      summary: "Replace emails + spreadsheets with a structured advocacy platform. 4-week timeline. HubSpot backend. 70%+ mobile users.",
    },
    {
      n: "02", label: "Research", color: "#8b5cf6",
      summary: "Admin interviews: 3 sessions — spreadsheets, Sunday evening updates, one-person knowledge risk. Member interviews: 6 sessions — motivated people confused about what to do next.",
      insight: "\"Drop-off wasn't disengagement. It was structural: no clear next step, no acknowledgement, no progress signal.\"",
    },
    {
      n: "03", label: "Problem Reframe", color: "#ec4899",
      summary: "Org thought: 'members aren't motivated enough.' Research showed: members were motivated — the system gave no feedback. Completely different design problem.",
    },
    {
      n: "04", label: "Exploration", color: "#f59e0b",
      summary: "Three structural approaches: community forum (rejected), event calendar (rejected), task-based gamification (chosen). Chosen because it directly addressed every research finding.",
      artifact: "wireframes",
    },
    {
      n: "05", label: "Key Decisions", color: "#ef4444",
      summary: "Tasks must feel completable. First task in session one. Progress in 3 layers (personal, milestone, community). Mobile-first = design for interruptions not sessions.",
    },
    {
      n: "06", label: "Testing", color: "#10b981",
      summary: "Leaderboard removed — low-ranked users disengaged. Step-by-step reveal added. Onboarding cut to 2 screens + first task. Routing guide built for sales team.",
      insight: "\"The leaderboard made members below rank 10 less likely to participate, not more. Removed entirely.\"",
    },
    {
      n: "07", label: "Outcomes", color: "#3b82f6",
      summary: "89% onboarding completion. 3× task completion vs. email. 60% admin time saved. Based on usability testing, not production data.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-b border-white/8 px-10 py-5">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">Design Option V1 — Process Timeline</p>
            <h1 className="text-3xl font-black text-white">Future First Families</h1>
          </div>
          <div className="flex gap-5">
            {[["Role","Lead Designer"],["Timeline","4 wks"],["Platform","Web"]].map(([k,v]) => (
              <div key={k} className="text-right">
                <p className="text-white/25 text-xs font-mono">{k}</p>
                <p className="text-white/70 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          {["Structure: Vertical timeline","Strength: Full process visibility","Best for: Process-oriented hiring"].map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/30 font-mono">{t}</span>
          ))}
        </div>
      </div>

      <div className="px-10 py-8">
        <div className="relative">
          <div className="absolute left-[28px] top-2 bottom-2 w-0.5 bg-white/8" />
          <div className="space-y-8">
            {phases.map(({ n, label, color, summary, artifact, insight }) => (
              <div key={n} className="grid grid-cols-[64px_1fr] gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center bg-[#090910] z-10 flex-shrink-0" style={{ borderColor: color + "60" }}>
                    <span className="text-xs font-black font-mono" style={{ color }}>{n}</span>
                  </div>
                </div>
                <div className="pb-2">
                  <p className="text-white font-bold text-sm mb-1" style={{ color }}>{label}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{summary}</p>
                  {artifact === "wireframes" && (
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {[[WfTaskCard, "Task card"], [WfDashboard, "Dashboard"], [WfOnboarding, "Onboarding"]].map(([W, lbl]: any) => (
                        <div key={lbl}>
                          <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><W /></div>
                          <p className="text-white/30 text-xs mt-1.5 font-mono">{lbl}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {insight && (
                    <div className="border-l-2 pl-3" style={{ borderColor: color + "50" }}>
                      <p className="text-sm italic" style={{ color: color + "cc" }}>{insight}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
