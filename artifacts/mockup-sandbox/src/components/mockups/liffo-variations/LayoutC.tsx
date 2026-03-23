/* Layout C — Card Grid / Bento · Liffo */
const META = { title: "Liffo", sub: "emergency healthcare · 34 screens · 13 weeks", role: "Lead Designer", timeline: "13 weeks" };

const W = 1280;
const PAD = 24;
const GAP = 16;

const Ln = ({ x, y, w, op = 1 }: any) => <rect x={x} y={y} width={w} height={7} rx="1" fill="#c8c4bc" opacity={op}/>;
const Xbox = ({ x, y, w, h }: any) => (
  <g><rect x={x} y={y} width={w} height={h} fill="#f0ede8" stroke="#b8b0a4" strokeWidth="1.1" rx="1"/>
  <line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#b8b0a4" strokeWidth="0.9"/>
  <line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#b8b0a4" strokeWidth="0.9"/></g>
);
const Card = ({ x, y, w, h, bg = "#f5f1ea" }: any) => (
  <rect x={x} y={y} width={w} height={h} rx="3" fill={bg} stroke="#e0d8cc" strokeWidth="1"/>
);
const SLabel = ({ x, y, t }: any) => (
  <text x={x} y={y} fontSize="8" fill="#9ca3af" fontFamily="monospace" fontWeight="bold" letterSpacing="1">{t}</text>
);
const HLine = ({ x, y, w }: any) => (
  <rect x={x} y={y} width={w} height={12} rx="1" fill="#c8c4bc" opacity="0.8"/>
);

export function LayoutC() {
  let y = 0;

  /* ── row heights ─────────────────────────────────────────────────── */
  const heroH = 110;
  const metricH = 88;
  const briefResH = 160;
  const reframeH = 90;
  const exploreH = 180;
  const decScreenH = 220;
  const testingH = 140;
  const outcomesH = 110;
  const reflectH = 110;
  const TOTAL_H = heroH + GAP + metricH + GAP + briefResH + GAP + reframeH + GAP + exploreH + GAP + decScreenH + GAP + testingH + GAP + outcomesH + GAP + reflectH + 60;

  return (
    <div className="w-full bg-[#fdf8f0]">
      <svg viewBox={`0 0 ${W} ${TOTAL_H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wf-c-sk">
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" seed="9" result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <pattern id="wf-c-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0L0 0 0 24" fill="none" stroke="#ddd5c5" strokeWidth="0.5"/>
          </pattern>
          <pattern id="wf-c-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#9ca3af" strokeWidth="0.9" opacity="0.55"/>
          </pattern>
        </defs>
        <rect width={W} height={TOTAL_H} fill="#fdf8f0"/>
        <rect width={W} height={TOTAL_H} fill="url(#wf-c-grid)" opacity="0.65"/>

        <g filter="url(#wf-c-sk)">
          {/* ── HERO CARD ─────────────────────────────────────────── */}
          <Card x={PAD} y={y=PAD} w={W-PAD*2} h={heroH-8}/>
          <SLabel x={PAD+20} y={y+16} t="CASE STUDY"/>
          <HLine x={PAD+20} y={y+22} w={380}/>
          <Ln x={PAD+20} y={y+42} w={260} op={0.7}/>
          <rect x={PAD+20} y={y+56} width={84} height={16} rx="8" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>
          <rect x={PAD+112} y={y+56} width={84} height={16} rx="8" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>
          <rect x={PAD+204} y={y+56} width={84} height={16} rx="8" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>
          <text x={PAD+20} y={y+90} fontSize="7.5" fill="#b8b0a4" fontFamily="monospace">{META.title} · {META.sub}</text>
          {/* CTA right */}
          <rect x={W-PAD-100} y={y+22} width={80} height={52} rx="3" fill="url(#wf-c-hatch)" stroke="#9ca3af" strokeWidth="1"/>

          {/* ── METRIC CARDS ROW ──────────────────────────────────── */}
          {(y = PAD + heroH, null)}
          {[0,1,2,3].map(i => {
            const cw = (W-PAD*2-GAP*3)/4;
            return (
              <g key={i}>
                <Card x={PAD+i*(cw+GAP)} y={y} w={cw} h={metricH}/>
                <rect x={PAD+i*(cw+GAP)+16} y={y+16} width={80} height={22} rx="1" fill="#c8c4bc" opacity="0.7"/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+46} w={cw-40} op={0.5}/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+58} w={cw-60} op={0.35}/>
              </g>
            );
          })}

          {/* ── 2-COL: BRIEF + DISCOVERY ─────────────────────────── */}
          {(y += metricH+GAP, null)}
          {[
            { label:"01 · THE BRIEF", x: PAD },
            { label:"02 · DISCOVERY", x: PAD+(W-PAD*2-GAP)/2+GAP },
          ].map(({ label, x }) => {
            const cw = (W-PAD*2-GAP)/2;
            return (
              <g key={label}>
                <Card x={x} y={y} w={cw} h={briefResH}/>
                <SLabel x={x+16} y={y+18} t={label}/>
                <HLine x={x+16} y={y+26} w={cw*0.55}/>
                <Ln x={x+16} y={y+50} w={cw-40}/>
                <Ln x={x+16} y={y+62} w={cw-60}/>
                <Ln x={x+16} y={y+74} w={cw-50}/>
                <Ln x={x+16} y={y+86} w={cw-100} op={0.65}/>
                {/* quote block for Discovery */}
                {label.includes("DISC") && (
                  <>
                    <rect x={x+16} y={y+106} width={3} height={40} fill="#c8c4bc"/>
                    <Ln x={x+28} y={y+110} w={cw-60} op={0.7}/>
                    <Ln x={x+28} y={y+122} w={cw-90} op={0.7}/>
                  </>
                )}
              </g>
            );
          })}

          {/* ── REFRAME — full width ──────────────────────────────── */}
          {(y += briefResH+GAP, null)}
          <Card x={PAD} y={y} w={W-PAD*2} h={reframeH} bg="#ece8e0"/>
          <SLabel x={PAD+20} y={y+18} t="03 · PROBLEM REFRAME"/>
          <rect x={PAD+20} y={y+28} width={620} height={16} rx="1" fill="#c8c4bc" opacity="0.7"/>
          <Ln x={PAD+20} y={y+52} w={480} op={0.55}/>
          <text x={PAD+20} y={y+80} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">[ reframes the design problem as a single clear insight ]</text>

          {/* ── 3-COL: EXPLORATION OPTIONS ───────────────────────── */}
          {(y += reframeH+GAP, null)}
          {[0,1,2].map(i => {
            const cw = (W-PAD*2-GAP*2)/3;
            const bg = i===2 ? "#e8ede4" : "#f5f1ea";
            return (
              <g key={i}>
                <Card x={PAD+i*(cw+GAP)} y={y} w={cw} h={exploreH} bg={bg}/>
                <SLabel x={PAD+i*(cw+GAP)+16} y={y+18} t={`OPTION ${String.fromCharCode(65+i)}`}/>
                <HLine x={PAD+i*(cw+GAP)+16} y={y+26} w={cw*0.55}/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+50} w={cw-40}/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+62} w={cw-60}/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+74} w={cw-40}/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+86} w={cw-80} op={0.6}/>
                <Xbox x={PAD+i*(cw+GAP)+16} y={y+106} w={cw-32} h={60}/>
                {i===2 && <text x={PAD+i*(cw+GAP)+16} y={y+exploreH-8} fontSize="8" fill="#7a9070" fontFamily="monospace" fontWeight="bold">✓ chosen</text>}
                {i!==2 && <text x={PAD+i*(cw+GAP)+16} y={y+exploreH-8} fontSize="8" fill="#b8b0a4" fontFamily="monospace">✗ rejected</text>}
              </g>
            );
          })}

          {/* ── 2-COL: DECISIONS + SCREENS ───────────────────────── */}
          {(y += exploreH+GAP, null)}
          {(() => {
            const leftW = (W-PAD*2-GAP)*0.45;
            const rightW = (W-PAD*2-GAP)*0.55;
            return (
              <>
                <Card x={PAD} y={y} w={leftW} h={decScreenH}/>
                <SLabel x={PAD+16} y={y+18} t="05 · KEY DECISIONS"/>
                <HLine x={PAD+16} y={y+26} w={leftW*0.6}/>
                {[0,1,2,3].map(i=>(
                  <g key={i}>
                    <Ln x={PAD+16} y={y+50+i*40} w={leftW-40}/>
                    <Ln x={PAD+16} y={y+62+i*40} w={leftW-60} op={0.65}/>
                    <Ln x={PAD+16} y={y+74+i*40} w={leftW-90} op={0.45}/>
                  </g>
                ))}
                <Card x={PAD+leftW+GAP} y={y} w={rightW} h={decScreenH}/>
                <SLabel x={PAD+leftW+GAP+16} y={y+18} t="06 · FINAL DESIGN"/>
                <HLine x={PAD+leftW+GAP+16} y={y+26} w={rightW*0.5}/>
                {[0,1].map(row=>[0,1].map(col=>(
                  <Xbox key={`${row}${col}`} x={PAD+leftW+GAP+16+col*((rightW-48)/2+GAP)} y={y+46+row*((decScreenH-80)/2+GAP)} w={(rightW-48)/2} h={(decScreenH-80)/2}/>
                )))}
              </>
            );
          })()}

          {/* ── TESTING — full width ─────────────────────────────── */}
          {(y += decScreenH+GAP, null)}
          <Card x={PAD} y={y} w={W-PAD*2} h={testingH}/>
          <SLabel x={PAD+20} y={y+18} t="07 · TESTING"/>
          <HLine x={PAD+20} y={y+26} w={240}/>
          <Ln x={PAD+20} y={y+52} w={W-PAD*2-80}/>
          <Ln x={PAD+20} y={y+64} w={W-PAD*2-140}/>
          {[0,1,2,3].map(i=>(
            <g key={i}>
              <rect x={PAD+20+i*((W-PAD*2-80)/4+GAP)} y={y+86} width={(W-PAD*2-80)/4} height={38} rx="2" fill="#f0ede8" stroke="#e0d8cc" strokeWidth="0.9"/>
              <Ln x={PAD+36+i*((W-PAD*2-80)/4+GAP)} y={y+94} w={(W-PAD*2-80)/4-32} op={0.7}/>
              <Ln x={PAD+36+i*((W-PAD*2-80)/4+GAP)} y={y+106} w={(W-PAD*2-80)/4-52} op={0.5}/>
            </g>
          ))}

          {/* ── 4-COL: OUTCOMES ──────────────────────────────────── */}
          {(y += testingH+GAP, null)}
          {[0,1,2,3].map(i => {
            const cw = (W-PAD*2-GAP*3)/4;
            return (
              <g key={i}>
                <Card x={PAD+i*(cw+GAP)} y={y} w={cw} h={outcomesH}/>
                <rect x={PAD+i*(cw+GAP)+16} y={y+16} width={cw*0.6} height={26} rx="1" fill="#c8c4bc" opacity="0.65"/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+50} w={cw-40} op={0.5}/>
                <Ln x={PAD+i*(cw+GAP)+16} y={y+62} w={cw-60} op={0.35}/>
                {i===0 && <SLabel x={PAD+i*(cw+GAP)+16} y={y+94} t="08 · OUTCOMES"/>}
              </g>
            );
          })}

          {/* ── REFLECTION — full width ───────────────────────────── */}
          {(y += outcomesH+GAP, null)}
          <Card x={PAD} y={y} w={W-PAD*2} h={reflectH}/>
          <SLabel x={PAD+20} y={y+18} t="09 · REFLECTION"/>
          <HLine x={PAD+20} y={y+26} w={300}/>
          <Ln x={PAD+20} y={y+50} w={W-PAD*2-80}/>
          <Ln x={PAD+20} y={y+62} w={W-PAD*2-140}/>
          <Ln x={PAD+20} y={y+74} w={W-PAD*2-200} op={0.7}/>
          <Ln x={PAD+20} y={y+86} w={W-PAD*2-300} op={0.5}/>

          {/* Footer */}
          <text x={1100} y={TOTAL_H-16} fontSize="8" fill="#c8c4bc" fontFamily="monospace">Layout C · Card Grid</text>
        </g>
      </svg>
    </div>
  );
}
