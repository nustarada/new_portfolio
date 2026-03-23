/* Liffo Refinement V2 — Dense Editorial
   What's refined:
   - Much tighter vertical rhythm — more content per viewport, less dead space
   - Hero screen grid is a horizontal strip running full-width
   - Decisions are compact 2-line rows, not expanded cards
   - Wireframes shown inline next to their explanation (not stacked)
   - Outcomes are a tight inline row, not a grid
   - Color accent (red for emergency) used sparingly but intentionally
   - Feels like a polished printed portfolio PDF
*/

function PhoneSmall({ accent = "#ef4444", children }: { accent?: string; children?: React.ReactNode }) {
  return (
    <div className="relative flex-shrink-0 w-[72px]" style={{ aspectRatio: "9/19.5" }}>
      <div className="absolute inset-0 rounded-2xl border border-white/10 overflow-hidden bg-[#0d0d1a] shadow-xl shadow-black/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2.5 rounded-b-lg bg-[#0d0d1a] z-10" />
        <div className="absolute top-0 inset-x-0 h-[1.5px] rounded" style={{ background: accent, opacity: 0.6 }} />
        <div className="absolute inset-0 flex flex-col pt-4 px-1.5 pb-1.5">{children}</div>
      </div>
    </div>
  );
}

/* Little screen fillers */
const Blk = ({ h = "h-2", opacity = "bg-white/10", rounded = "rounded" }: any) => <div className={`w-full ${h} ${opacity} ${rounded} mb-1`} />;

function WfMini({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-20 flex-shrink-0 rounded-xl overflow-hidden border border-slate-300/50">
      <svg viewBox="0 0 120 215" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="215" fill="#f8f8f7"/>
        <rect x="4" y="2" width="112" height="211" rx="14" fill="white" stroke="#cbd5e1" strokeWidth="1"/>
        <rect x="43" y="2" width="34" height="8" rx="4" fill="#e2e8f0"/>
        {children}
      </svg>
    </div>
  );
}
const B = ({ x, y, w, h, s = false }: any) => <rect x={x} y={y} width={w} height={h} rx="2" fill={s ? "#e2e8f0" : "#f1f5f9"} stroke="#cbd5e1" strokeWidth="0.6"/>;
const L = ({ x, y, w, h = 3.5 }: any) => <rect x={x} y={y} width={w} height={h} rx="1.5" fill="#cbd5e1"/>;
const X = ({ x, y, w, h }: any) => <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="2 1.5"/><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth="0.5"/><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth="0.5"/></g>;

export function DenseEditorial() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAV — hairline */}
      <div className="flex justify-between items-center px-8 py-3.5 border-b border-white/5">
        <p className="text-white/20 text-[11px] font-mono tracking-widest uppercase">Liffo · Healthcare App</p>
        <button className="text-white/30 text-[11px] hover:text-white/60 transition-colors">← portfolio</button>
      </div>

      {/* ── HERO — compressed ── */}
      <section className="px-8 pt-8 pb-6">
        <div className="flex items-end justify-between mb-5">
          <div>
            <p className="text-white/25 text-[11px] font-mono uppercase tracking-widest mb-2">Mobile · Healthcare · 13 wks</p>
            <h1 className="text-[60px] font-black text-white leading-[0.85] tracking-tight">Liffo</h1>
          </div>
          <p className="text-white/40 text-sm max-w-sm text-right leading-relaxed">
            Emergency-first healthcare platform. Ambulance dispatch, doctor booking, home care, and records — unified.
          </p>
        </div>

        {/* Full-width screen strip */}
        <div className="flex gap-2.5 overflow-hidden">
          {[
            { accent: "#ef4444", screens: [<><Blk h="h-1.5" opacity="bg-red-500/20"/><Blk h="h-8" opacity="bg-red-500/10 border border-red-500/20 rounded-lg"/><Blk h="h-4" opacity="bg-white/5"/><Blk h="h-3" opacity="bg-white/4"/><Blk h="h-3" opacity="bg-white/4"/></> ] },
            { accent: "#ef4444", screens: [<><Blk h="h-1.5"/><Blk h="h-6" opacity="bg-red-500/15 border border-red-500/20 rounded-lg"/><div className="grid grid-cols-4 gap-0.5 mb-1">{[0,1,2,3].map(i=><div key={i} className="bg-white/8 rounded h-5"/>)}</div><Blk h="h-4" opacity="bg-white/5"/></> ] },
            { accent: "#38bdf8", screens: [<><Blk h="h-1.5"/><Blk h="h-2.5" opacity="bg-white/8 rounded-md"/>{[0,1,2].map(i=><div key={i} className="flex gap-1 mb-0.5"><div className="w-4 h-4 rounded-full bg-white/10"/><div className="flex-1"><Blk h="h-1.5" opacity="bg-white/12"/><Blk h="h-1" opacity="bg-white/6"/></div></div>)}</> ] },
            { accent: "#38bdf8", screens: [<><Blk h="h-1.5"/><X x={4} y={8} w={64} h={50}/><Blk h="h-3" opacity="bg-red-500/20 rounded-md"/>{[0,1].map(i=><div key={i} className="flex gap-1 mb-0.5"><div className="w-4 h-4 bg-white/8 rounded"/><Blk h="h-4" opacity="bg-white/5"/></div>)}</> ] },
            { accent: "#a78bfa", screens: [<><div className="flex justify-center mt-1 mb-1"><div className="w-8 h-8 rounded-full bg-white/10"/></div><Blk h="h-1.5" opacity="bg-white/15"/>{[0,1,2,3].map(i=><div key={i} className="flex gap-1 mb-0.5"><div className="w-3 h-3 bg-white/8 rounded"/><Blk h="h-3" opacity="bg-white/6"/></div>)}</> ] },
            { accent: "#a78bfa", screens: [<><Blk h="h-1.5"/><Blk h="h-3" opacity="bg-white/10 rounded-md"/><Blk h="h-3" opacity="bg-white/6 rounded-md"/><Blk h="h-3" opacity="bg-white/6 rounded-md"/><Blk h="h-3" opacity="bg-white/6 rounded-md"/></> ] },
          ].map(({ accent, screens }, i) => (
            <PhoneSmall key={i} accent={accent}>{screens[0]}</PhoneSmall>
          ))}
          {/* Overflow hint */}
          <div className="flex-shrink-0 w-8 self-stretch rounded-2xl border border-white/5 bg-gradient-to-r from-transparent to-white/3 flex items-center justify-center">
            <span className="text-white/15 text-xs">→</span>
          </div>
        </div>

        <div className="flex gap-2.5 mt-3">
          {[["Lead Designer", "34 Screens", "End-to-end", "Mobile-first"]].flat().map(t => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-white/8 text-white/35 font-mono">{t}</span>
          ))}
        </div>
      </section>

      {/* ── TL;DR — inline columns ── */}
      <section className="px-8 py-6 border-t border-white/5">
        <div className="grid grid-cols-[100px_1fr_1fr_1fr] gap-6 items-start">
          <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest pt-0.5">Summary</p>
          {[
            { label: "Gap", text: "No single app handled emergency and routine care. Emergency apps had catastrophic UX. Consultation apps ignored urgent care." },
            { label: "Built", text: "34 screens across 6 flows — emergency, onboarding, doctor booking, home care, discovery, health records." },
            { label: "Constraint", text: "Emergency in 2 taps from any screen. That rule shaped every navigation decision in the product." },
          ].map(({ label, text }) => (
            <div key={label}>
              <p className="text-white/25 text-[11px] font-mono uppercase mb-1.5">{label}</p>
              <p className="text-white/65 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DECISIONS — compact rows ── */}
      <section className="px-8 py-6 border-t border-white/5">
        <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest mb-5">Key decisions</p>

        {[
          { n: "01", accent: "#ef4444", decision: "Emergency gets permanent visual dominance", why: "Users in crisis scan, not read. Emergency button = ~30% of dashboard's above-fold space.", result: "No cognitive load for the most critical action." },
          { n: "02", accent: "#38bdf8", decision: "Services grouped by patient need, not provider type", why: "Patients think 'something is wrong' — not 'I need a nephrologist.' Navigation follows patient mental model.", result: "Fewer dead ends in discovery testing." },
          { n: "03", accent: "#a78bfa", decision: "Trust signals before the tap, not after", why: "Doctor ratings, credentials, and live availability on the list card — decision made before opening a profile.", result: "Lower abandonment rate in booking flow." },
        ].map(({ n, accent, decision, why, result }) => (
          <div key={n} className="grid grid-cols-[36px_1fr_200px] gap-4 py-4 border-b border-white/[0.04] last:border-0">
            <span className="text-xs font-black font-mono pt-0.5" style={{ color: accent + "60" }}>{n}</span>
            <div>
              <p className="text-white text-sm font-semibold leading-snug mb-1">{decision}</p>
              <p className="text-white/40 text-xs leading-relaxed">{why}</p>
            </div>
            <div className="border-l border-white/6 pl-4">
              <p className="text-white/20 text-[10px] font-mono uppercase mb-1">Result</p>
              <p className="text-xs leading-relaxed" style={{ color: accent + "99" }}>{result}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── WIREFRAMES — inline ── */}
      <section className="px-8 py-6 border-t border-white/5">
        <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest mb-5">Low-fidelity</p>

        <div className="space-y-4">
          {[
            {
              label: "Dashboard",
              note: "Emergency block dominates above fold. Service tiles. Health summary. Bottom nav always visible.",
              svg: <WfMini>
                <L x={12} y={16} w={28}/><L x={88} y={16} w={24}/>
                <rect x="12" y="27" width="96" height="34" rx="3" fill="#fee2e2" stroke="#fca5a5" strokeWidth="0.8"/>
                <circle cx="22" cy="44" r="6" fill="#fca5a5"/>
                <L x={33} y={39} w={50} h={4}/><L x={33} y={46} w={35}/>
                <L x={12} y={68} w={50}/>
                {[0,1,2,3].map(i=><B key={i} x={12+i*25} y={73} w={22} h={22} s/>)}
                <B x={12} y={102} w={96} h={28}/>
                <B x={12} y={136} w={96} h={40}/>
                <line x1="8" y1="188" x2="112" y2="188" stroke="#e2e8f0" strokeWidth="0.7"/>
                {[0,1,2,3,4].map(i=><B key={i} x={13+i*21} y={192} w={14} h={10} s={i===0}/>)}
              </WfMini>
            },
            {
              label: "Emergency",
              note: "Map → dispatch → hospital list sorted by ETA. One-tap dispatch with GPS auto-detected location.",
              svg: <WfMini>
                <B x={12} y={16} w={10} h={8} s/><L x={26} y={18} w={45}/>
                <X x={12} y={28} w={96} h={54}/>
                <circle cx="60" cy="47" r="4" fill="none" stroke="#64748b" strokeWidth="1"/>
                <rect x="12" y="87" width="96" height="28" rx="3" fill="#fee2e2" stroke="#fca5a5" strokeWidth="0.8"/>
                <text x="60" y="104" fontSize="5" fill="#ef4444" fontFamily="monospace" textAnchor="middle">DISPATCH AMBULANCE</text>
                {[0,1,2].map(i=><g key={i}><B x={12} y={120+i*18} w={96} h={14}/><X x={14} y={122+i*18} w={16} h={10}/><L x={35} y={126+i*18} w={42}/><B x={90} y={123+i*18} w={15} h={8} s/></g>)}
              </WfMini>
            },
            {
              label: "Doctor list",
              note: "Credentials and ratings visible on card. Trust before tap. Filters at top.",
              svg: <WfMini>
                <B x={12} y={16} w={10} h={8} s/><L x={26} y={19} w={50}/>
                <B x={12} y={29} width={96} height={16}/>
                {["All","Cardio","Neuro"].map((t,i)=><g key={t}><rect x={12+i*34} y={50} width={30} height={11} rx={5.5} fill={i===0?"#e2e8f0":"#f8fafc"} stroke="#cbd5e1" strokeWidth={i===0?1:0.6}/><text x={27+i*34} y={58} fontSize={4.5} fill="#94a3b8" fontFamily="monospace" textAnchor="middle">{t}</text></g>)}
                {[0,1,2,3].map(i=><g key={i}><B x={12} y={66+i*36} w={96} h={32}/><circle cx={24} cy={82+i*36} r={9} fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.6"/><L x={38} y={75+i*36} w={50}/><L x={38} y={82+i*36} w={38}/><text x={38} y={92+i*36} fontSize={4.5} fill="#94a3b8" fontFamily="monospace">★★★★☆</text><B x={96} y={69+i*36} w={10} h={7} s/></g>)}
              </WfMini>
            },
          ].map(({ label, note, svg }) => (
            <div key={label} className="flex gap-5 items-start">
              {svg}
              <div className="pt-1.5">
                <p className="text-white/65 text-sm font-semibold mb-1">{label}</p>
                <p className="text-white/30 text-xs leading-relaxed max-w-xs">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTCOMES — inline row ── */}
      <section className="px-8 py-6 border-t border-white/5">
        <div className="flex items-baseline gap-10 flex-wrap">
          <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest mr-2 flex-shrink-0">Outcomes</p>
          {[
            { v: "2 taps", l: "to emergency" },
            { v: "91%", l: "task success" },
            { v: "34", l: "screens" },
            { v: "65%", l: "faster dispatch" },
            { v: "4.8/5", l: "SUS score" },
            { v: "0", l: "dead-ends" },
          ].map(({ v, l }) => (
            <div key={l} className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white">{v}</span>
              <span className="text-white/30 text-xs font-mono">{l}</span>
            </div>
          ))}
        </div>
        <p className="text-white/20 text-[11px] mt-3 font-mono">Usability testing + stakeholder review — not production data.</p>
      </section>

      {/* ── REFLECTION — compact ── */}
      <section className="px-8 py-6 border-t border-white/5">
        <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest mb-5">Reflection</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { t: "Emergency UX is a different discipline", b: "Designing for panic is not designing for calm curiosity. Every unnecessary step is a failure. That standard should transfer to any complex domain." },
            { t: "Trust is visible, not implied", b: "Surfacing credentials and availability on the list card wasn't decoration — it was the entire credibility model. Healthcare providers assumed trust came with the platform. Users didn't agree." },
            { t: "Speed and clarity serve different mental states", b: "The emergency flow had to be instant. The records flow had to be thorough. Same design system, completely different intent. Context specificity isn't optional." },
            { t: "If I had more time", b: "Real emergency scenario testing — not usability walkthroughs. The emotional context of an actual emergency changes how people interact with an interface significantly." },
          ].map(({ t, b }) => (
            <div key={t} className="border-l border-white/8 pl-4">
              <p className="text-white/75 text-sm font-semibold mb-1 leading-snug">{t}</p>
              <p className="text-white/35 text-xs leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-8 border-t border-white/5 flex items-center justify-between">
        <div>
          <p className="text-white/70 text-sm font-semibold">Want to talk through this project?</p>
          <p className="text-white/30 text-xs">Happy to walk through the decisions in more depth.</p>
        </div>
        <button className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-xl">Get in touch</button>
      </section>
    </div>
  );
}
