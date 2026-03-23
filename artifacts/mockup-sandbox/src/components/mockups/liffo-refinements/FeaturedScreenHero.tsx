/* Liffo Refinement V1 — Featured Screen Hero
   What's refined:
   - Hero: one dominant emergency screen + strip of supporting screens
   - Decision cards: tighter 2-col with labeled annotations on the right
   - Outcomes: massive isolated numbers with more breathing room
   - Wireframe labels moved to side annotations instead of bottom captions
   - Type hierarchy: tightened, monospace labels only for meta
*/

function Phone({ color = "#1a1a2e", accent = "#ef4444", label = "", note = "", content }: {
  color?: string; accent?: string; label?: string; note?: string; content?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative rounded-[2.2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50" style={{ aspectRatio: "9/19.5", background: color }}>
        {/* notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 rounded-b-xl z-10" style={{ background: color }} />
        <div className="absolute inset-0 flex flex-col">{content}</div>
        <div className="absolute top-0 inset-x-0 h-[2px] rounded-full" style={{ background: accent, opacity: 0.7 }} />
      </div>
      {label && <p className="text-white/60 text-xs font-semibold leading-tight">{label}</p>}
      {note && <p className="text-white/25 text-xs leading-tight">{note}</p>}
    </div>
  );
}

const EmergencyScreen = () => (
  <div className="flex flex-col h-full pt-8 px-3 pb-3 bg-[#0d0d1a]">
    <div className="flex justify-between items-center mb-4">
      <div className="w-10 h-3 rounded bg-white/10" />
      <div className="w-6 h-6 rounded-full bg-white/5" />
    </div>
    <div className="w-full rounded-xl bg-red-500/15 border border-red-500/30 p-3 mb-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-5 h-5 rounded-full bg-red-500/40" />
        <div className="flex-1 h-3 rounded bg-red-400/40" />
      </div>
      <div className="w-3/4 h-2 rounded bg-red-400/20 mb-1.5" />
      <div className="w-16 h-6 rounded-lg bg-red-500/50 mt-2" />
    </div>
    <div className="flex-1 w-full rounded-lg bg-white/5 border border-white/5 p-2">
      <div className="w-full h-2 rounded bg-white/10 mb-2" />
      {[0,1,2].map(i => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded bg-white/5" />
          <div className="flex-1 h-2 rounded bg-white/10" />
          <div className="w-8 h-4 rounded bg-white/5" />
        </div>
      ))}
    </div>
  </div>
);

const DashboardScreen = () => (
  <div className="flex flex-col h-full pt-8 px-3 pb-3 bg-[#0d0d1a]">
    <div className="w-1/2 h-3 rounded bg-white/15 mb-1 mx-auto" />
    <div className="w-1/3 h-2 rounded bg-white/8 mb-3 mx-auto" />
    <div className="w-full rounded-lg bg-red-500/10 border border-red-500/20 p-2 mb-2">
      <div className="w-3/4 h-2.5 rounded bg-red-400/30" />
    </div>
    <div className="grid grid-cols-4 gap-1 mb-2">
      {[0,1,2,3].map(i => <div key={i} className="rounded-lg bg-white/5 aspect-square" />)}
    </div>
    <div className="flex-1 rounded-lg bg-white/4 border border-white/5" />
  </div>
);

const DoctorScreen = () => (
  <div className="flex flex-col h-full pt-8 px-3 pb-3 bg-[#0d0d1a]">
    <div className="flex items-center gap-2 mb-3">
      <div className="w-4 h-4 rounded bg-white/10" />
      <div className="w-20 h-2.5 rounded bg-white/15" />
    </div>
    <div className="w-full h-7 rounded-lg bg-white/5 border border-white/8 mb-3" />
    <div className="flex gap-1 mb-3">
      {["All","Heart","Neuro"].map(t => <div key={t} className="px-2 py-1 rounded-full bg-white/8 text-[7px] text-white/40 font-mono">{t}</div>)}
    </div>
    {[0,1,2].map(i => (
      <div key={i} className="flex items-center gap-2 mb-2 p-2 rounded-lg bg-white/4">
        <div className="w-7 h-7 rounded-full bg-white/10" />
        <div className="flex-1">
          <div className="w-2/3 h-2 rounded bg-white/15 mb-1" />
          <div className="w-1/2 h-1.5 rounded bg-white/8" />
        </div>
        <div className="w-8 h-5 rounded bg-white/5" />
      </div>
    ))}
  </div>
);

const ProfileScreen = () => (
  <div className="flex flex-col h-full pt-8 px-3 pb-3 bg-[#0d0d1a]">
    <div className="flex flex-col items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-white/10 mb-2" />
      <div className="w-20 h-2.5 rounded bg-white/20 mb-1" />
      <div className="w-14 h-2 rounded bg-white/8" />
    </div>
    <div className="grid grid-cols-3 gap-1 mb-3">
      {[0,1,2].map(i => <div key={i} className="rounded-lg bg-white/5 p-2 aspect-square" />)}
    </div>
    {["Appointments","Prescriptions","Lab Results","Health Data"].map(l => (
      <div key={l} className="flex items-center gap-2 mb-1.5 p-2 rounded-lg bg-white/4">
        <div className="w-4 h-4 rounded bg-white/8" />
        <div className="w-20 h-2 rounded bg-white/12" />
        <div className="ml-auto text-white/20 text-xs">›</div>
      </div>
    ))}
  </div>
);

/* ─── Wireframe components ─────────────────────────────────────── */
function WireBox({ children, label, note }: { children: React.ReactNode; label: string; note: string }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-28 flex-shrink-0">
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-[#f8f8f7]">
          {children}
        </div>
      </div>
      <div className="pt-1">
        <p className="text-white/70 text-xs font-semibold mb-0.5">{label}</p>
        <p className="text-white/30 text-xs leading-relaxed font-mono">{note}</p>
      </div>
    </div>
  );
}

function WireSvg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 160 290" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="160" height="290" fill="#f8f8f7"/>
      <rect x="6" y="3" width="148" height="284" rx="16" fill="white" stroke="#cbd5e1" strokeWidth="1.2"/>
      <rect x="57" y="3" width="46" height="10" rx="5" fill="#e2e8f0"/>
      {children}
    </svg>
  );
}

const B = ({ x, y, w, h, shade=false }: any) => <rect x={x} y={y} width={w} height={h} rx="2.5" fill={shade ? "#e2e8f0" : "#f1f5f9"} stroke="#cbd5e1" strokeWidth="0.7"/>;
const L = ({ x, y, w, h=4 }: any) => <rect x={x} y={y} width={w} height={h} rx="2" fill="#cbd5e1"/>;
const T = ({ x, y, t, s=6 }: any) => <text x={x} y={y} fontSize={s} fill="#94a3b8" fontFamily="monospace">{t}</text>;
const X = ({ x, y, w, h }: any) => <g><rect x={x} y={y} width={w} height={h} fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.7" strokeDasharray="2.5 2"/><line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#94a3b8" strokeWidth="0.6"/><line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#94a3b8" strokeWidth="0.6"/></g>;

export function FeaturedScreenHero() {
  return (
    <div className="min-h-screen bg-[#090910] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <div className="flex justify-between items-center px-10 py-5 border-b border-white/5">
        <p className="text-white/25 text-xs font-mono tracking-widest uppercase">Liffo · Healthcare Platform</p>
        <button className="flex items-center gap-1.5 text-white/40 text-xs hover:text-white transition-colors">← Back</button>
      </div>

      {/* ── HERO: featured screen + strip ── */}
      <section className="px-10 pt-12 pb-0">
        <div className="grid grid-cols-[1fr_auto] gap-10 items-end mb-10">
          <div>
            <p className="text-white/30 text-xs tracking-widest uppercase font-mono mb-3">Mobile App · Healthcare · 13 weeks · 34 screens</p>
            <h1 className="text-[72px] font-black text-white leading-[0.88] tracking-tight mb-5">
              Liffo
            </h1>
            <p className="text-white/55 text-lg max-w-lg leading-relaxed">
              End-to-end design of an emergency-first healthcare platform — ambulance dispatch, doctor booking, home care, and health records in one app.
            </p>
          </div>
          {/* Meta */}
          <div className="flex flex-col gap-2 pb-2">
            {[["Role","Lead Product Designer"],["Screens","34 across 6 flows"],["Scope","End-to-end, mobile-first"]].map(([k,v]) => (
              <div key={k}>
                <p className="text-white/25 text-xs font-mono">{k}</p>
                <p className="text-white/70 text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured + strip */}
        <div className="flex gap-5 items-end">
          {/* Large featured screen */}
          <div className="w-52 flex-shrink-0">
            <Phone
              color="#0d0d1a"
              accent="#ef4444"
              label="Emergency flow"
              note="The most critical screen — ambulance dispatch reachable in 2 taps"
              content={<EmergencyScreen />}
            />
          </div>
          {/* Supporting strip */}
          <div className="flex gap-3 flex-1 overflow-hidden items-end pb-8">
            {[
              { label: "Dashboard", note: "Emergency block dominates above fold", Screen: DashboardScreen, accent: "#ef4444" },
              { label: "Doctor list", note: "Trust visible before tapping in", Screen: DoctorScreen, accent: "#38bdf8" },
              { label: "Profile", note: "All records, one place", Screen: ProfileScreen, accent: "#a78bfa" },
            ].map(({ label, note, Screen, accent }, i) => (
              <div key={i} className="w-36 flex-shrink-0">
                <Phone color="#0d0d1a" accent={accent} label={label} note={note} content={<Screen />} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSTRAINT ── */}
      <section className="px-10 py-12 border-t border-white/5 mt-4">
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: "The constraint", text: "Emergency access in 2 taps from any screen. That single rule shaped every navigation decision." },
            { label: "The challenge", text: "No platform served both emergency and routine healthcare. Emergency apps were UX disasters. Consultation apps ignored urgent care entirely." },
            { label: "The scope", text: "34 screens across 6 flows — onboarding, emergency, doctor booking, home care, discovery, and health records." },
          ].map(({ label, text }) => (
            <div key={label} className="border-l border-white/8 pl-5">
              <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">{label}</p>
              <p className="text-white/70 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DECISIONS ── */}
      <section className="px-10 py-12 border-t border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-10">Three decisions that shaped everything</p>

        {[
          {
            n: "01",
            decision: "Emergency gets permanent visual dominance",
            detail: "Users in a crisis scan, not read. The emergency button needed to be the largest, most visible element — not tucked behind a menu. I gave it ~30% of the dashboard's above-fold space.",
            annotation: "No cognitive load for the most critical action",
            accent: "#ef4444",
          },
          {
            n: "02",
            decision: "Services grouped by patient need, not provider type",
            detail: "A patient with symptoms doesn't think 'I need a nephrologist.' They think 'something is wrong, who can help?' I organized around what the patient is trying to do.",
            annotation: "Faster navigation — fewer dead ends in testing",
            accent: "#38bdf8",
          },
          {
            n: "03",
            decision: "Trust signals surface before the tap, not after",
            detail: "In healthcare, hesitation kills engagement. Doctor ratings, credentials, and live availability appear directly on the list card — the decision is made before tapping a profile.",
            annotation: "Reduced abandonment in the booking flow",
            accent: "#a78bfa",
          },
        ].map(({ n, decision, detail, annotation, accent }) => (
          <div key={n} className="grid grid-cols-[56px_1fr_240px] gap-6 pb-8 mb-8 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
            <div className="text-5xl font-black leading-none" style={{ color: accent + "33" }}>
              <span className="text-white/15">{n}</span>
            </div>
            <div>
              <p className="text-white font-bold text-base mb-2 leading-snug">{decision}</p>
              <p className="text-white/50 text-sm leading-relaxed">{detail}</p>
            </div>
            <div className="border-l border-white/8 pl-5">
              <p className="text-white/25 text-xs font-mono uppercase mb-1.5">Result</p>
              <p className="text-sm leading-relaxed" style={{ color: accent + "cc" }}>{annotation}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── WIREFRAMES ── */}
      <section className="px-10 py-12 border-t border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-4">Low-fidelity exploration</p>
        <p className="text-white/45 text-sm max-w-xl mb-10">Five screens with the most structural risk — hierarchy, tap priority, and navigation depth validated before high-fidelity.</p>

        <div className="space-y-6">
          <WireBox label="Dashboard" note="Emergency block dominates above fold. Service tiles below. Nav always visible.">
            <WireSvg>
              <L x={16} y={22} w={36}/><L x={118} y={22} w={30}/>
              <rect x="16" y="35" width="128" height="42" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
              <circle cx="30" cy="56" r="8" fill="#fca5a5" stroke="#94a3b8" strokeWidth="0.6"/>
              <L x={44} y={51} w={60} h={5}/><L x={44} y={60} w={40}/>
              <L x={16} y={86} w={60}/>
              {[0,1,2,3].map(i=><B key={i} x={16+i*32} y={92} w={28} h={28} shade/>)}
              <B x={16} y={130} w={128} h={36}/>
              <B x={16} y={175} w={128} h={50}/>
              <line x1="11" y1="252" x2="149" y2="252" stroke="#e2e8f0" strokeWidth="0.8"/>
              {[0,1,2,3,4].map(i=><B key={i} x={17+i*27} y={256} w={18} h={14} shade={i===0}/>)}
            </WireSvg>
          </WireBox>

          <WireBox label="Emergency flow" note="Map → dispatch button → hospitals sorted by ETA, not distance.">
            <WireSvg>
              <B x={16} y={22} w={13} h={10} shade/><L x={33} y={24} w={60}/>
              <X x={16} y={37} w={128} h={70}/>
              <T x={72} y={86} t="[ map ]"/>
              <circle cx="80" cy="60" r="5" fill="none" stroke="#64748b" strokeWidth="1.2"/>
              <rect x="16" y="113" width="128" height="36" rx="4" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
              <T x={44} y={129} t="DISPATCH AMBULANCE" s={7}/>
              <T x={37} y={141} t="[ one tap — GPS auto-filled ]" s={5}/>
              {[0,1,2].map(i=>(
                <g key={i}>
                  <B x={16} y={155+i*22} w={128} h={18}/>
                  <X x={19} y={158+i*22} w={22} h={12}/>
                  <L x={46} y={162+i*22} w={55}/><L x={46} y={168+i*22} w={36}/>
                  <B x={120} y={159+i*22} w={21} h={10} shade/>
                </g>
              ))}
            </WireSvg>
          </WireBox>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="px-10 py-16 border-t border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Outcomes</p>
        <p className="text-white/30 text-xs mb-10 max-w-sm">Usability testing and stakeholder review. Not live production data.</p>

        <div className="grid grid-cols-3 gap-0 border border-white/5 rounded-2xl overflow-hidden">
          {[
            { v: "2 taps", l: "Emergency from any screen" },
            { v: "91%", l: "Task success on emergency flow" },
            { v: "34", l: "Screens across 6 flows" },
            { v: "65%", l: "Faster ambulance booking vs. baseline" },
            { v: "4.8/5", l: "SUS usability score" },
            { v: "0", l: "Dead-ends in core navigation" },
          ].map(({ v, l }, i) => (
            <div key={l} className={`p-7 ${i < 3 ? "border-b" : ""} ${i % 3 !== 2 ? "border-r" : ""} border-white/5 bg-white/[0.015]`}>
              <p className="text-4xl font-black text-white mb-1.5 leading-none">{v}</p>
              <p className="text-white/40 text-xs leading-relaxed">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section className="px-10 py-12 border-t border-white/5">
        <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-8">Reflection</p>
        <div className="grid grid-cols-2 gap-8">
          {[
            { t: "Emergency UX is a different discipline", b: "Designing for someone who might be panicking is completely different from designing for a calm, curious user. Every unnecessary decision is a failure. I'd carry that standard into any complex app." },
            { t: "Trust is visible, not implied", b: "Healthcare providers expected users to trust them because they were on the platform. Users didn't. Surfacing credentials and live availability wasn't decoration — it was the entire credibility model." },
          ].map(({ t, b }) => (
            <div key={t} className="border-l-2 border-white/8 pl-5">
              <p className="text-white font-semibold text-sm mb-1.5">{t}</p>
              <p className="text-white/45 text-sm leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
