/* Layout A — Single Column Editorial · Liffo case study wireframe */
const cs = {
  title: "Liffo",
  sub: "Emergency-first healthcare app",
  role: "Lead Designer",
  timeline: "13 weeks",
  screens: "34 screens",
  sections: [
    { label: "01 · THE BRIEF", content: "text+pill", h: 130 },
    { label: "02 · DISCOVERY", content: "text+quote", h: 160 },
    { label: "03 · PROBLEM REFRAME", content: "highlight", h: 110 },
    { label: "04 · EXPLORATION", content: "text+wireframes", h: 190 },
    { label: "05 · KEY DECISIONS", content: "decisions", h: 200 },
    { label: "06 · FINAL DESIGN", content: "screens", h: 200 },
    { label: "07 · TESTING", content: "findings", h: 160 },
    { label: "08 · OUTCOMES", content: "metrics", h: 120 },
    { label: "09 · REFLECTION", content: "text", h: 120 },
  ],
};

const RAIL_X = 52;
const CONTENT_X = 100;
const CONTENT_W = 1140;

function Defs() {
  return (
    <defs>
      <filter id="wf-a-sk">
        <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" seed="2" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
      </filter>
      <pattern id="wf-a-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0L0 0 0 24" fill="none" stroke="#ddd5c5" strokeWidth="0.5"/>
      </pattern>
      <pattern id="wf-a-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#9ca3af" strokeWidth="0.9" opacity="0.55"/>
      </pattern>
    </defs>
  );
}

/* Placeholder primitives */
const Ln = ({ x, y, w, opacity = 1 }: any) => (
  <rect x={x} y={y} width={w} height={7} rx="1" fill="#d1cfc8" opacity={opacity}/>
);
const Xbox = ({ x, y, w, h }: any) => (
  <g>
    <rect x={x} y={y} width={w} height={h} fill="#f0ede8" stroke="#b8b0a4" strokeWidth="1.2" rx="1"/>
    <line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#b8b0a4" strokeWidth="0.9"/>
    <line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#b8b0a4" strokeWidth="0.9"/>
  </g>
);
const Hbox = ({ x, y, w, h }: any) => (
  <rect x={x} y={y} width={w} height={h} fill="url(#wf-a-hatch)" stroke="#9ca3af" strokeWidth="1" rx="1"/>
);
const Pill = ({ x, y, w = 80, label = "" }: any) => (
  <g>
    <rect x={x} y={y} width={w} height={18} rx="9" fill="#e8e4de" stroke="#b8b0a4" strokeWidth="0.9"/>
    <rect x={x+8} y={y+6} width={w-16} height={6} rx="1" fill="#b8b0a4" opacity="0.6"/>
  </g>
);
const SectionLabel = ({ x, y, label }: any) => (
  <text x={x} y={y} fontSize="8.5" fill="#9ca3af" fontFamily="monospace" fontWeight="bold" letterSpacing="1">{label}</text>
);
const HeadingLine = ({ x, y, w }: any) => (
  <rect x={x} y={y} width={w} height={14} rx="1" fill="#c8c4bc" opacity="0.85"/>
);

export function LayoutA() {
  let curY = 200; // start after hero

  const sectionBlocks = cs.sections.map(({ label, content, h }) => {
    const y = curY;
    curY += h + 24;
    return { label, content, h, y };
  });

  const totalH = curY + 80;

  return (
    <div className="w-full bg-[#fdf8f0]" style={{ fontFamily: "monospace" }}>
      <svg viewBox={`0 0 1280 ${totalH}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <Defs/>
        <rect width="1280" height={totalH} fill="#fdf8f0"/>
        <rect width="1280" height={totalH} fill="url(#wf-a-grid)" opacity="0.7"/>

        <g filter="url(#wf-a-sk)">
          {/* ── NAV BAR ─────────────────────────────────────────────── */}
          <rect x={0} y={0} width={1280} height={52} fill="#fff" stroke="#e0d8cc" strokeWidth="1"/>
          <rect x={24} y={16} width={28} height={20} rx="4" fill="#d1cfc8"/>
          <rect x={64} y={20} width={60} height={12} rx="1" fill="#d1cfc8" opacity="0.7"/>
          <rect x={1080} y={20} width={50} height={12} rx="1" fill="#d1cfc8" opacity="0.5"/>
          <rect x={1140} y={20} width={50} height={12} rx="1" fill="#d1cfc8" opacity="0.5"/>
          <rect x={1200} y={18} width={56} height={16} rx="3" fill="url(#wf-a-hatch)" stroke="#9ca3af" strokeWidth="1"/>

          {/* ── HERO ────────────────────────────────────────────────── */}
          <rect x={0} y={52} width={1280} height={135} fill="#f5f1ea" stroke="#e0d8cc" strokeWidth="1"/>
          <text x={CONTENT_X} y={92} fontSize="9" fill="#9ca3af" fontFamily="monospace" fontWeight="bold" letterSpacing="1.5">CASE STUDY</text>
          <rect x={CONTENT_X} y={100} width={420} height={22} rx="1" fill="#c8c4bc" opacity="0.8"/>
          <rect x={CONTENT_X} y={128} width={260} height={13} rx="1" fill="#d1cfc8" opacity="0.7"/>
          {[0,1,2,3].map(i => <Pill key={i} x={CONTENT_X + i*96} y={150} w={84}/>)}
          <text x={CONTENT_X} y={186} fontSize="7.5" fill="#b8b0a4" fontFamily="monospace">{cs.title} · {cs.sub} · {cs.role} · {cs.timeline}</text>

          {/* ── LEFT PROGRESS RAIL ──────────────────────────────────── */}
          <line x1={RAIL_X} y1={200} x2={RAIL_X} y2={curY-50} stroke="#d1cfc8" strokeWidth="1.5" strokeDasharray="4 4"/>
          {sectionBlocks.map(({ y }, i) => (
            <circle key={i} cx={RAIL_X} cy={y+14} r={5} fill="#fff" stroke="#b8b0a4" strokeWidth="1.5"/>
          ))}

          {/* ── SECTIONS ────────────────────────────────────────────── */}
          {sectionBlocks.map(({ label, content, h, y }) => (
            <g key={label}>
              <SectionLabel x={CONTENT_X} y={y+10} label={label}/>
              <HeadingLine x={CONTENT_X} y={y+20} w={380}/>

              {content === "text+pill" && (
                <>
                  <Ln x={CONTENT_X} y={y+44} w={860}/>
                  <Ln x={CONTENT_X} y={y+56} w={740}/>
                  <Ln x={CONTENT_X} y={y+68} w={800}/>
                  {[0,1,2].map(i=><Pill key={i} x={CONTENT_X+i*100} y={y+85} w={88}/>)}
                </>
              )}
              {content === "text+quote" && (
                <>
                  <Ln x={CONTENT_X} y={y+44} w={860}/>
                  <Ln x={CONTENT_X} y={y+56} w={780}/>
                  <rect x={CONTENT_X} y={y+74} width={3} height={52} fill="#b8b0a4"/>
                  <Ln x={CONTENT_X+16} y={y+80} w={680} opacity={0.7}/>
                  <Ln x={CONTENT_X+16} y={y+92} w={580} opacity={0.7}/>
                  <Ln x={CONTENT_X+16} y={y+104} w={620} opacity={0.7}/>
                  <Ln x={CONTENT_X+16} y={y+116} w={400} opacity={0.5}/>
                </>
              )}
              {content === "highlight" && (
                <>
                  <rect x={CONTENT_X} y={y+40} width={CONTENT_W} height={52} rx="2" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="1"/>
                  <Ln x={CONTENT_X+20} y={y+52} w={700}/>
                  <Ln x={CONTENT_X+20} y={y+64} w={480}/>
                  <text x={CONTENT_X+20} y={y+86} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">[ key insight — reframes the design problem ]</text>
                </>
              )}
              {content === "text+wireframes" && (
                <>
                  <Ln x={CONTENT_X} y={y+44} w={800}/>
                  <Ln x={CONTENT_X} y={y+56} w={680}/>
                  {[0,1,2].map(i=><Xbox key={i} x={CONTENT_X+i*388} y={y+74} w={370} h={90}/>)}
                  <text x={CONTENT_X+150} y={y+182} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">option A</text>
                  <text x={CONTENT_X+526} y={y+182} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">option B</text>
                  <text x={CONTENT_X+910} y={y+182} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">chosen ✓</text>
                </>
              )}
              {content === "decisions" && (
                <>
                  {[0,1,2,3].map(i=>(
                    <g key={i}>
                      <Ln x={CONTENT_X} y={y+44+i*36} w={60} opacity={0.5}/>
                      <Ln x={CONTENT_X+74} y={y+44+i*36} w={400}/>
                      <Ln x={CONTENT_X+74} y={y+56+i*36} w={700}/>
                    </g>
                  ))}
                </>
              )}
              {content === "screens" && (
                <>
                  <div/>
                  {[0,1,2].map(i=><Xbox key={i} x={CONTENT_X+i*388} y={y+40} w={370} h={140}/>)}
                  <text x={CONTENT_X+130} y={y+195} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">screen label</text>
                  <text x={CONTENT_X+520} y={y+195} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">screen label</text>
                  <text x={CONTENT_X+910} y={y+195} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">screen label</text>
                </>
              )}
              {content === "findings" && (
                <>
                  {[0,1,2,3].map(i=>(
                    <g key={i}>
                      <rect x={CONTENT_X} y={y+40+i*26} width={8} height={8} rx="1" fill="#c8c4bc"/>
                      <Ln x={CONTENT_X+16} y={y+40+i*26} w={640}/>
                      <Ln x={CONTENT_X+16} y={y+52+i*26} w={480} opacity={0.6}/>
                    </g>
                  ))}
                </>
              )}
              {content === "metrics" && (
                <>
                  {[0,1,2,3].map(i=>(
                    <g key={i}>
                      <rect x={CONTENT_X+i*292} y={y+40} width={276} height={60} rx="2" fill="#f0ede8" stroke="#c8c4bc" strokeWidth="1"/>
                      <rect x={CONTENT_X+i*292+16} y={y+52} width={100} height={18} rx="1" fill="#c8c4bc"/>
                      <Ln x={CONTENT_X+i*292+16} y={y+78} w={160} opacity={0.5}/>
                    </g>
                  ))}
                </>
              )}
              {content === "text" && (
                <>
                  <Ln x={CONTENT_X} y={y+44} w={860}/>
                  <Ln x={CONTENT_X} y={y+56} w={740}/>
                  <Ln x={CONTENT_X} y={y+68} w={800}/>
                  <Ln x={CONTENT_X} y={y+80} w={600} opacity={0.7}/>
                </>
              )}

              {/* Section divider */}
              <line x1={CONTENT_X} y1={y+h} x2={CONTENT_X+CONTENT_W} y2={y+h} stroke="#e0d8cc" strokeWidth="0.8"/>
            </g>
          ))}

          {/* Footer */}
          <rect x={0} y={curY+20} width={1280} height={40} fill="#f5f1ea" stroke="#e0d8cc" strokeWidth="1"/>
          <Ln x={CONTENT_X} y={curY+34} w={200} opacity={0.5}/>

          {/* Layout label */}
          <text x={1140} y={totalH-12} fontSize="8" fill="#c8c4bc" fontFamily="monospace">Layout A · Single Column</text>
        </g>
      </svg>
    </div>
  );
}
