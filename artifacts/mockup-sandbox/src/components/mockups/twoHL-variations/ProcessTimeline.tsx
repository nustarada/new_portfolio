/*
  2HL — V1: Process Timeline
  Structure: Vertical timeline showing full design process for a B2B landing page system.
  Paper wireframes: messaging architecture sketch, stakeholder mapping, page structure sketches.
*/

function PaperSvg({ w = 240, h = 160, children }: { w?: number; h?: number; children: React.ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="squig-2t1">
          <feTurbulence type="turbulence" baseFrequency="0.027" numOctaves="3" seed="4" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <pattern id="hatch-2t1" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#94a3b8" strokeWidth="0.8" opacity="0.55"/>
        </pattern>
        <pattern id="grid-2t1" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#e0d5c5" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width={w} height={h} fill="#fdf8f0"/>
      <rect width={w} height={h} fill="url(#grid-2t1)" opacity="0.65"/>
      <g filter="url(#squig-2t1)">{children}</g>
    </svg>
  );
}

const T = {
  box: ({ x, y, w, h, fill = "none", stroke = "#374151", sw = 1.3 }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill={fill} stroke={stroke} strokeWidth={sw}/>,
  hatch: ({ x, y, w, h }: any) =>
    <rect x={x+1} y={y+1} width={w-2} height={h-2} rx="1" fill="url(#hatch-2t1)" stroke="#374151" strokeWidth={1.1}/>,
  ln: ({ x1, y1, x2, y2, dashed = false }: any) =>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth={1} strokeDasharray={dashed ? "3 2" : undefined}/>,
  txt: ({ x, y, t, s = 6.5, color = "#374151", bold = false, italic = false }: any) =>
    <text x={x} y={y} fontSize={s} fill={color} fontFamily="monospace" fontWeight={bold ? "bold" : "normal"} fontStyle={italic ? "italic" : "normal"}>{t}</text>,
};

const WfStakeholders = () => (
  <PaperSvg w={240} h={165}>
    <T.txt x={8} y={10} t="Stakeholder map — buying committee" s={6} bold/>
    <T.ln x1={8} y1={14} x2={232} y2={14}/>
    <T.box x={90} y={18} w={60} h={16}/>
    <T.txt x={95} y={29} t="PRINCIPAL" s={5.5} bold/>
    <T.ln x1={120} y1={34} x2={80} y2={50}/>
    <T.ln x1={120} y1={34} x2={160} y2={50}/>
    <T.box x={40} y={50} w={80} h={14}/>
    <T.txt x={47} y={60} t="Dean / Curriculum" s={5}/>
    <T.box x={132} y={50} w={70} h={14}/>
    <T.txt x={138} y={60} t="Board member" s={5}/>
    <T.ln x1={8} y1={74} x2={232} y2={74} dashed/>
    <T.txt x={8} y={82} t="EACH ROLE HAS A DIFFERENT FEAR" s={5.5} bold/>
    <T.box x={8} y={86} w={72} h={32}/>
    <T.txt x={11} y={97} t="Principal:" s={5} bold/>
    <T.txt x={11} y={106} t="reputation risk" s={5}/>
    <T.txt x={11} y={114} t="peer proof needed" s={5}/>
    <T.box x={84} y={86} w={72} h={32}/>
    <T.txt x={87} y={97} t="Dean:" s={5} bold/>
    <T.txt x={87} y={106} t="teacher burden" s={5}/>
    <T.txt x={87} y={114} t="workflow proof" s={5}/>
    <T.box x={160} y={86} w={72} h={32}/>
    <T.txt x={163} y={97} t="Board:" s={5} bold/>
    <T.txt x={163} y={106} t="budget ROI" s={5}/>
    <T.txt x={163} y={114} t="financial model" s={5}/>
    <T.txt x={8} y={130} t="→ one page cannot answer three different fears" s={5} color="#9ca3af" italic/>
    <T.txt x={8} y={140} t="→ need 4 pages: 1 homepage + 3 persona" s={5} color="#374151" bold/>
    <T.box x={8} y={145} w={224} h={16} fill="#dbeafe" stroke="#60a5fa"/>
    <T.txt x={55} y={156} t="design to the fear, not the feature" s={6} bold color="#2563eb"/>
  </PaperSvg>
);

const WfMessagingArch = () => (
  <PaperSvg w={240} h={160}>
    <T.txt x={8} y={10} t="Messaging architecture sketch" s={6} bold/>
    <T.ln x1={8} y1={14} x2={232} y2={14}/>
    {[
      { role: "Homepage", color: "#e9d5ff", question: "What is 2HL? Is it for me?", cta: "See how it works" },
      { role: "Principal", color: "#dbeafe", question: "Do schools like mine use this?", cta: "Request briefing" },
      { role: "Dean", color: "#dcfce7", question: "Will this burden my teachers?", cta: "See teacher dashboard" },
      { role: "Board", color: "#fef9c3", question: "What is the ROI?", cta: "Get ROI model" },
    ].map(({ role, color, question, cta }, i) => (
      <g key={role}>
        <T.box x={8} y={18+i*34} w={224} h={30} fill={color} stroke="#9ca3af" sw={0.9}/>
        <T.txt x={12} y={29+i*34} t={role} s={5.5} bold/>
        <T.txt x={12} y={39+i*34} t={`"${question}"`} s={5} color="#374151" italic/>
        <T.hatch x={172} y={22+i*34} w={56} h={22}/>
        <T.txt x={176} y={36+i*34} t={cta} s={4.5} color="#374151"/>
      </g>
    ))}
    <T.txt x={8} y={158} t="same visual system, different content hierarchy" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

const WfPageStructure = () => (
  <PaperSvg w={240} h={155}>
    <T.txt x={8} y={10} t="Board page structure — fear first" s={6} bold/>
    <T.ln x1={8} y1={14} x2={232} y2={14}/>
    <T.box x={8} y={18} w={224} h={28} fill="#fef9c3" stroke="#ca8a04" sw={1.8}/>
    <T.txt x={14} y={29} t="$240K increase per pupil" s={8} bold color="#854d0e"/>
    <T.txt x={14} y={40} t="within 24 months" s={6} color="#854d0e"/>
    <T.txt x={8} y={54} t="NO mission. NO warmup. Financial number FIRST." s={5} color="#9ca3af" italic/>
    <T.ln x1={8} y1={60} x2={232} y2={60} dashed/>
    <T.box x={8} y={64} w={224} h={20}/>
    <T.txt x={70} y={77} t="[ how it works — brief ]" s={5} color="#6b7280"/>
    <T.box x={8} y={88} w={224} h={20}/>
    <T.txt x={60} y={101} t="[ comparable district case study ]" s={5} color="#6b7280"/>
    <T.box x={8} y={112} w={224} h={20}/>
    <T.txt x={70} y={125} t="[ ROI breakdown table ]" s={5} color="#6b7280"/>
    <T.box x={8} y={136} w={224} h={16} fill="#dbeafe" stroke="#60a5fa"/>
    <T.txt x={70} y={147} t="GET THE ROI MODEL" s={6} bold color="#2563eb"/>
    <T.txt x={8} y={153} t="no testimonials — boards don't buy on feelings" s={5} color="#9ca3af" italic/>
  </PaperSvg>
);

export function ProcessTimeline() {
  const phases = [
    {
      n: "01", label: "The Brief", color: "#6366f1",
      summary: "4 pages for a B2B EdTech company selling to schools. One brand, multiple buyer personas in the same buying committee.",
    },
    {
      n: "02", label: "Research", color: "#8b5cf6",
      summary: "Sales team interviews: losing deals at the board stage, not the principal stage. Stakeholder mapping: each role has a different definition of 'risk.' Competitor analysis: role-specific pages correlated with faster growth.",
      insight: "\"The sale was failing at the transition between stakeholders — not at initial contact.\"",
    },
    {
      n: "03", label: "Problem Reframe", color: "#ec4899",
      summary: "Brief said 'better website.' Research said: four different arguments for four different people in the same buying decision. One homepage trying to speak to all three roles answers none of them well enough.",
      artifact: "wireframes",
    },
    {
      n: "04", label: "Exploration", color: "#f59e0b",
      summary: "Mapped messaging architecture before any visual design. Each page: primary fear → questions to answer in order → CTA matched to buyer stage. Then sketched the page structure per persona.",
    },
    {
      n: "05", label: "Key Decisions", color: "#ef4444",
      summary: "Board page: hard financial number first, no mission. CTAs are stage-gates not generic buttons. One visual system across all four pages. Board page drafted with mission → tested → cold opening with number performed better.",
    },
    {
      n: "06", label: "Testing", color: "#10b981",
      summary: "Sales reps didn't know which page to send to which lead → built a routing guide. Board page called 'too cold' → added one line of brand context below the number. Dean page → rewrote to centre the teacher, not the product.",
    },
    {
      n: "07", label: "Outcomes", color: "#3b82f6",
      summary: "4 pages, 4 CTAs, 1 brand system. Sales team has a page for every contact type. Production analytics were being set up — not yet available at case study time.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="border-b border-white/8 px-10 py-5">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-1">Design Option V1 — Process Timeline</p>
            <h1 className="text-3xl font-black text-white">2 Hour Learning</h1>
          </div>
          <div className="flex gap-5">
            {[["Role","Lead Designer"],["Pages","4"],["Platform","Web B2B"]].map(([k,v]) => (
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
                      {[[WfStakeholders,"Stakeholder map"],[WfMessagingArch,"Messaging arch"],[WfPageStructure,"Board page structure"]].map(([W,lbl]:any) => (
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
