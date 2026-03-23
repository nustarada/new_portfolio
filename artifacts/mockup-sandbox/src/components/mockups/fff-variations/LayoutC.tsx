/* Layout C — Card Grid / Bento · Future First Families */
const META = { title: "Future First Families", sub: "Family advocacy platform", role: "UX Designer", timeline: "4 weeks" };

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
const HLine = ({ x, y, w }: any) => <rect x={x} y={y} width={w} height={12} rx="1" fill="#c8c4bc" opacity="0.8"/>;

const heroH = 110, metricH = 88, briefResH = 160, reframeH = 90, exploreH = 180, decScreenH = 220, outcomesH = 110, reflectH = 110;
const TOTAL_H = heroH + GAP + metricH + GAP + briefResH + GAP + reframeH + GAP + exploreH + GAP + decScreenH + GAP + outcomesH + GAP + reflectH + PAD*2 + 40;

export function LayoutC() {
  let y = PAD;
  const rows: number[] = [];
  [heroH, metricH, briefResH, reframeH, exploreH, decScreenH, outcomesH, reflectH].forEach((h, i) => {
    rows.push(y);
    y += h + GAP;
  });

  return (
    <div className="w-full bg-[#fdf8f0]">
      <svg viewBox={`0 0 ${W} ${TOTAL_H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wf-fc-sk">
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" seed="13" result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <pattern id="wf-fc-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0L0 0 0 24" fill="none" stroke="#ddd5c5" strokeWidth="0.5"/>
          </pattern>
          <pattern id="wf-fc-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#9ca3af" strokeWidth="0.9" opacity="0.55"/>
          </pattern>
        </defs>
        <rect width={W} height={TOTAL_H} fill="#fdf8f0"/>
        <rect width={W} height={TOTAL_H} fill="url(#wf-fc-grid)" opacity="0.65"/>
        <g filter="url(#wf-fc-sk)">
          {/* HERO */}
          <Card x={PAD} y={rows[0]} w={W-PAD*2} h={heroH-8}/>
          <SLabel x={PAD+20} y={rows[0]+16} t="CASE STUDY"/>
          <HLine x={PAD+20} y={rows[0]+22} w={460}/>
          <Ln x={PAD+20} y={rows[0]+42} w={280} op={0.7}/>
          {[0,1,2].map(i=><rect key={i} x={PAD+20+i*96} y={rows[0]+56} width={84} height={16} rx="8" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>)}
          <text x={PAD+20} y={rows[0]+90} fontSize="7.5" fill="#b8b0a4" fontFamily="monospace">{META.title} · {META.sub}</text>
          <rect x={W-PAD-100} y={rows[0]+22} width={80} height={52} rx="3" fill="url(#wf-fc-hatch)" stroke="#9ca3af" strokeWidth="1"/>
          {/* METRICS */}
          {[0,1,2,3].map(i => { const cw=(W-PAD*2-GAP*3)/4; return (<g key={i}><Card x={PAD+i*(cw+GAP)} y={rows[1]} w={cw} h={metricH}/><rect x={PAD+i*(cw+GAP)+16} y={rows[1]+16} width={80} height={22} rx="1" fill="#c8c4bc" opacity="0.7"/><Ln x={PAD+i*(cw+GAP)+16} y={rows[1]+46} w={cw-40} op={0.5}/><Ln x={PAD+i*(cw+GAP)+16} y={rows[1]+58} w={cw-60} op={0.35}/></g>); })}
          {/* BRIEF + DISCOVERY */}
          {[{label:"01 · THE BRIEF", x:PAD},{label:"02 · DISCOVERY", x:PAD+(W-PAD*2-GAP)/2+GAP}].map(({label,x})=>{ const cw=(W-PAD*2-GAP)/2; return(<g key={label}><Card x={x} y={rows[2]} w={cw} h={briefResH}/><SLabel x={x+16} y={rows[2]+18} t={label}/><HLine x={x+16} y={rows[2]+26} w={cw*0.55}/><Ln x={x+16} y={rows[2]+50} w={cw-40}/><Ln x={x+16} y={rows[2]+62} w={cw-60}/><Ln x={x+16} y={rows[2]+74} w={cw-50}/><Ln x={x+16} y={rows[2]+86} w={cw-100} op={0.65}/>{label.includes("DISC")&&(<><rect x={x+16} y={rows[2]+106} width={3} height={40} fill="#c8c4bc"/><Ln x={x+28} y={rows[2]+110} w={cw-60} op={0.7}/><Ln x={x+28} y={rows[2]+122} w={cw-90} op={0.7}/></>)}</g>); })}
          {/* REFRAME */}
          <Card x={PAD} y={rows[3]} w={W-PAD*2} h={reframeH} bg="#ece8e0"/>
          <SLabel x={PAD+20} y={rows[3]+18} t="03 · PROBLEM REFRAME"/>
          <rect x={PAD+20} y={rows[3]+28} width={620} height={16} rx="1" fill="#c8c4bc" opacity="0.7"/>
          <Ln x={PAD+20} y={rows[3]+52} w={480} op={0.55}/>
          <text x={PAD+20} y={rows[3]+80} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">[ reframes the design problem ]</text>
          {/* EXPLORATION 3-COL */}
          {[0,1,2].map(i=>{ const cw=(W-PAD*2-GAP*2)/3; const bg=i===2?"#e8ede4":"#f5f1ea"; return(<g key={i}><Card x={PAD+i*(cw+GAP)} y={rows[4]} w={cw} h={exploreH} bg={bg}/><SLabel x={PAD+i*(cw+GAP)+16} y={rows[4]+18} t={`OPTION ${String.fromCharCode(65+i)}`}/><HLine x={PAD+i*(cw+GAP)+16} y={rows[4]+26} w={cw*0.55}/><Ln x={PAD+i*(cw+GAP)+16} y={rows[4]+50} w={cw-40}/><Ln x={PAD+i*(cw+GAP)+16} y={rows[4]+62} w={cw-60}/><Ln x={PAD+i*(cw+GAP)+16} y={rows[4]+74} w={cw-40}/><Xbox x={PAD+i*(cw+GAP)+16} y={rows[4]+90} w={cw-32} h={70}/>{i===2?<text x={PAD+i*(cw+GAP)+16} y={rows[4]+exploreH-8} fontSize="8" fill="#7a9070" fontFamily="monospace" fontWeight="bold">✓ chosen</text>:<text x={PAD+i*(cw+GAP)+16} y={rows[4]+exploreH-8} fontSize="8" fill="#b8b0a4" fontFamily="monospace">✗ rejected</text>}</g>); })}
          {/* DECISIONS + SCREENS */}
          {(()=>{ const lW=(W-PAD*2-GAP)*0.45; const rW=(W-PAD*2-GAP)*0.55; return(<><Card x={PAD} y={rows[5]} w={lW} h={decScreenH}/><SLabel x={PAD+16} y={rows[5]+18} t="05 · KEY DECISIONS"/><HLine x={PAD+16} y={rows[5]+26} w={lW*0.6}/>{[0,1,2,3].map(i=><g key={i}><Ln x={PAD+16} y={rows[5]+50+i*40} w={lW-40}/><Ln x={PAD+16} y={rows[5]+62+i*40} w={lW-60} op={0.65}/><Ln x={PAD+16} y={rows[5]+74+i*40} w={lW-90} op={0.45}/></g>)}<Card x={PAD+lW+GAP} y={rows[5]} w={rW} h={decScreenH}/><SLabel x={PAD+lW+GAP+16} y={rows[5]+18} t="06 · FINAL DESIGN"/><HLine x={PAD+lW+GAP+16} y={rows[5]+26} w={rW*0.5}/>{[0,1].map(row=>[0,1].map(col=><Xbox key={`${row}${col}`} x={PAD+lW+GAP+16+col*((rW-48)/2+GAP)} y={rows[5]+46+row*((decScreenH-80)/2+GAP)} w={(rW-48)/2} h={(decScreenH-80)/2}/>))}</>); })()}
          {/* OUTCOMES */}
          {[0,1,2,3].map(i=>{ const cw=(W-PAD*2-GAP*3)/4; return(<g key={i}><Card x={PAD+i*(cw+GAP)} y={rows[6]} w={cw} h={outcomesH}/><rect x={PAD+i*(cw+GAP)+16} y={rows[6]+16} width={cw*0.6} height={26} rx="1" fill="#c8c4bc" opacity="0.65"/><Ln x={PAD+i*(cw+GAP)+16} y={rows[6]+50} w={cw-40} op={0.5}/><Ln x={PAD+i*(cw+GAP)+16} y={rows[6]+62} w={cw-60} op={0.35}/>{i===0&&<SLabel x={PAD+i*(cw+GAP)+16} y={rows[6]+94} t="08 · OUTCOMES"/>}</g>); })}
          {/* REFLECTION */}
          <Card x={PAD} y={rows[7]} w={W-PAD*2} h={reflectH}/>
          <SLabel x={PAD+20} y={rows[7]+18} t="09 · REFLECTION"/>
          <HLine x={PAD+20} y={rows[7]+26} w={300}/>
          <Ln x={PAD+20} y={rows[7]+50} w={W-PAD*2-80}/>
          <Ln x={PAD+20} y={rows[7]+62} w={W-PAD*2-140}/>
          <Ln x={PAD+20} y={rows[7]+74} w={W-PAD*2-200} op={0.7}/>
          <Ln x={PAD+20} y={rows[7]+86} w={W-PAD*2-300} op={0.5}/>
          <text x={1100} y={TOTAL_H-16} fontSize="8" fill="#c8c4bc" fontFamily="monospace">Layout C · Card Grid</text>
        </g>
      </svg>
    </div>
  );
}
