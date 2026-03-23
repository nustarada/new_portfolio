/*
  FFF — V2: Impact First
  Opens with outcomes, works backwards to show how. Paper wireframes in exploration section.
*/

function PaperSvg({ w = 240, h = 160, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-fi2">
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="3" seed="7" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-fi2" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.5"/>
        </pattern>
        <pattern id="dot-fi2" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#d1c9bc"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#dot-fi2)" opacity="0.8"/>
      <g filter="url(#squig-fi2)">{children}</g>
    </svg>
  );
}

const F = {
  box: ({ x, y, w, h, fill = "none", stroke = "#374151", sw = 1.3 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-fi2)" stroke="#374151" strokeWidth={1.1}/>,
  ln: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6.5, color = "#374151", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
};

const WfLoop = () => (
  <PaperSvg w={240} h={155}>
    <F.txt x={8} y={10} t="The engagement loop sketch" s={6} bold/>
    <F.ln x1={8} y1={14} x2={232} y2={14}/>
    {[
      { x: 8, y: 20, label: "Discover task", note: "3 min · contact" },
      { x: 128, y: 20, label: "Complete steps", note: "1-at-a-time reveal" },
      { x: 8, y: 60, label: "Earn points + badge", note: "milestone visible" },
      { x: 128, y: 60, label: "See community count", note: "847 actions this week" },
    ].map(({ x, y, label, note }) => (
      <g key={label}>
        <F.box x={x} y={y} w={110} h={32}/>
        <F.txt x={x+6} y={y+13} t={label} s={6} bold/>
        <F.txt x={x+6} y={y+24} t={note} s={5} color="#6b7280" italic/>
      </g>
    ))}
    {/* Arrows between */}
    <F.txt x={114} y={40} t="→" s={10} color="#374151"/>
    <F.txt x={64} y={57} t="↓" s={10} color="#374151"/>
    <F.txt x={114} y={80} t="←" s={10} color="#374151"/>
    <F.ln x1={64} y1={92} x2={64} y2={108} dashed/>
    <F.txt x={8} y={118} t="Loop closes on: community impact → next task" s={5.5} bold/>
    <F.txt x={8} y={130} t="Without the loop, points are decoration" s={5} color="#9ca3af" italic/>
    <F.box x={8} y={136} w={224} h={16} fill="#dcfce7" stroke="#22c55e"/>
    <F.txt x={55} y={147} t="The habit loop must close itself" s={5.5} bold color="#059669"/>
  </PaperSvg>
);

const WfTaskCard = () => (
  <PaperSvg w={240} h={155}>
    <F.txt x={8} y={10} t="Task card — v1 vs v2" s={6} bold/>
    <F.txt x={8} y={20} t="v1 — open-ended" s={5.5} color="#ef4444"/>
    <F.box x={8} y={24} w={224} h={32} fill="#fef2f2" stroke="#f87171"/>
    <F.txt x={14} y={35} t="Get involved in education advocacy" s={6}/>
    <F.txt x={14} y={45} t="[ no time · no steps · no completion ]" s={5} color="#9ca3af" italic/>
    <F.txt x={14} y={54} t="✗ produces 0 actions" s={5} color="#ef4444"/>
    <F.ln x1={8} y1={62} x2={232} y2={62} dashed/>
    <F.txt x={8} y={72} t="v2 — bounded + specific" s={5.5} color="#059669"/>
    <F.box x={8} y={76} w={224} h={70} fill="#f0fdf4" stroke="#22c55e"/>
    <F.txt x={14} y={87} t="Contact your school board rep" s={6} bold/>
    <F.txt x={14} y={97} t="3 minutes · 3 steps · contact" s={5} color="#6b7280"/>
    <F.ln x1={14} y1={103} x2={224} y2={103} dashed/>
    <F.txt x={14} y={111} t="Step 1 [complete →]" s={5}/>
    <F.txt x={14} y={120} t="Step 2 [complete →]" s={5}/>
    <F.txt x={14} y={130} t="Step 3 [complete →]" s={5}/>
    <F.box x={8} y={135} w={224} h={16} fill="#dcfce7" stroke="#22c55e"/>
    <F.txt x={55} y={146} t="+50 pts  →  toward Advocate" s={5.5} color="#059669"/>
    <F.txt x={8} y={153} t="3× more completions vs open-ended" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

export function ImpactFirst() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-b border-white/8 px-8 py-4">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest">Design Option V2 — Impact First · Future First Families</p>
      </div>

      {/* Outcomes hero */}
      <section className="px-8 pt-10 pb-7 border-b border-white/5">
        <p className="text-white/35 text-xs font-mono uppercase mb-5">Outcomes — usability testing + stakeholder review</p>
        <div className="grid grid-cols-3 gap-0 border border-white/6 rounded-2xl overflow-hidden mb-7">
          {[
            { v: "89%", l: "Onboarding completion — up from ~40% email flow" },
            { v: "3×", l: "Task completion vs. open-ended email asks" },
            { v: "–60%", l: "Admin coordination time automated away" },
            { v: "Session 1", l: "First task completed before leaving the platform" },
            { v: "70%+", l: "Mobile sessions — design validated" },
            { v: "4.6/5", l: "Usability score, 8 stakeholder testers" },
          ].map(({ v, l }, i) => (
            <div key={l} className={`p-5 ${i < 3 ? "border-b" : ""} ${i % 3 !== 2 ? "border-r" : ""} border-white/5`}>
              <p className="text-3xl font-black text-white mb-1">{v}</p>
              <p className="text-white/35 text-xs">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-white font-bold text-xl leading-snug mb-2">A gamified advocacy platform that turned spreadsheet ops into a structured engagement system.</p>
            <p className="text-white/50 text-sm leading-relaxed">FutureFirstFamilies had motivated members and a manually-run coordination system. The problem wasn't motivation — it was structure.</p>
          </div>
          <div className="flex items-start gap-3 flex-wrap">
            {[["Role","Lead Designer"],["Timeline","4 weeks"],["Platform","Web / HubSpot"]].map(([k,v]) => (
              <div key={k} className="border border-white/8 rounded-xl p-3 flex-1 text-center min-w-[80px]">
                <p className="text-white/25 text-xs font-mono mb-0.5">{k}</p>
                <p className="text-white/70 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-8 py-6 border-b border-white/5">
        <div className="grid grid-cols-3 gap-5">
          {[
            { l: "The org's belief", t: "Members need more motivation. Better email copy. More events. More urgency." },
            { l: "What research showed", t: "Members cared deeply. But participation felt like shouting into a void — no acknowledgement, no visible progress, no clear next step." },
            { l: "The reframe", t: "This is a structural feedback problem, not a motivation problem. Fix the loop, not the message." },
          ].map(({ l, t }) => (
            <div key={l} className="border-l-2 border-white/10 pl-4">
              <p className="text-white/25 text-xs font-mono uppercase mb-1.5">{l}</p>
              <p className="text-white/65 text-sm leading-relaxed">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exploration + wireframes */}
      <section className="px-8 py-6 border-b border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase mb-5">Exploration — lo-fi sketches</p>
        <div className="grid grid-cols-2 gap-4 mb-5">
          {[[WfLoop, "The engagement loop sketch"],[WfTaskCard, "Task card: open-ended vs. bounded"]].map(([W, lbl]: any) => (
            <div key={lbl}>
              <div className="rounded-xl overflow-hidden border border-white/8 bg-[#fdf8f0]"><W /></div>
              <p className="text-white/30 text-xs mt-2 font-mono">{lbl}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { opt: "A: Community forum", s: "Rejected", r: "Connection isn't the problem. Clarity of action is. A forum adds noise without direction." },
            { opt: "B: Event calendar", s: "Rejected", r: "Events are time-fixed. Miss one → nothing else to do. Replicates the email model with better UI." },
            { opt: "C: Task gamification", s: "Chosen", r: "Bounded asks + progress signals + community counter. Addresses every research finding directly." },
          ].map(({ opt, s, r }) => (
            <div key={opt} className="border border-white/5 rounded-xl p-4 bg-white/[0.015]">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white/65 text-xs font-semibold">{opt}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${s === "Chosen" ? "bg-green-500/15 text-green-400" : "bg-red-500/10 text-red-400"}`}>{s}</span>
              </div>
              <p className="text-white/35 text-xs leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decisions + Testing */}
      <section className="px-8 py-6 border-b border-white/5">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-white/25 text-xs font-mono uppercase mb-4">Key decisions</p>
            <div className="space-y-3">
              {[
                { d: "Tasks: specific + time-bounded only", r: "3× more completions vs open-ended asks — from behavioural data." },
                { d: "First task before the feature tour", r: "Platform explains itself through use. Session-1 completion = strongest retention signal." },
                { d: "Community counter, not leaderboard", r: "Leaderboard disengaged bottom-ranked members. Counter: everyone contributes to one number." },
                { d: "Design for interruption, not sessions", r: "70%+ mobile. Tasks: max 5 steps. Resumable. No 'start from beginning.'" },
              ].map(({ d, r }) => (
                <div key={d} className="border-b border-white/[0.04] pb-3">
                  <p className="text-white/75 text-xs font-semibold mb-0.5">{d}</p>
                  <p className="text-white/35 text-xs">{r}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white/25 text-xs font-mono uppercase mb-4">Testing — what changed</p>
            <div className="space-y-3">
              {[
                { f: "3-screen feature tour → skipped by all 8 testers", ch: "Cut entirely. Welcome + first task + completion. That's the whole onboarding." },
                { f: "Leaderboard → disengaged low-ranked members", ch: "Removed. Replaced with community total: '847 actions this month.'" },
                { f: "Step list → read passively, not followed", ch: "One-step-at-a-time reveal. Forces engagement, not just reading." },
              ].map(({ f, ch }) => (
                <div key={f} className="border border-white/5 rounded-xl p-3 bg-white/[0.015] mb-2">
                  <div className="flex items-start gap-1.5 mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1"/>
                    <p className="text-white/60 text-xs font-semibold">{f}</p>
                  </div>
                  <p className="text-white/30 text-xs">→ {ch}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="px-8 py-6">
        <p className="text-white/25 text-xs font-mono uppercase mb-4">Reflection</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { t: "The research reframe was the most valuable hour", b: "Without interviews, I'd have built a nicer version of what they had. The reframe changed everything — features, flows, gamification model." },
            { t: "Gamification must reflect real impact", b: "Points work when tied to specific actions people took, not activity volume. Decorative rewards are visible in one session." },
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
