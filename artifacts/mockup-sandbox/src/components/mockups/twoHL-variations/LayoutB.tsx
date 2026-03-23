/* Layout B — Side Nav + Content · 2Hour Learning */
const META = { title: "2Hour Learning", sub: "B2B EdTech · 4 landing pages", role: "UX Designer", timeline: "3 weeks" };

const SECTIONS = [
  "00 · Overview","01 · The Brief","02 · Discovery","03 · Problem Reframe",
  "04 · Exploration","05 · Key Decisions","06 · Final Design",
  "07 · Testing","08 · Outcomes","09 · Reflection",
];

const NAV_W = 216;
const COL_X = NAV_W + 24;
const COL_W = 1280 - COL_X - 24;
const TOTAL_H = 2080;
const ROW_H = [120,150,175,120,210,220,215,175,130,130];

const Ln = ({ x, y, w, op = 1 }: any) => <rect x={x} y={y} width={w} height={7} rx="1" fill="#c8c4bc" opacity={op}/>;
const Xbox = ({ x, y, w, h }: any) => (
  <g><rect x={x} y={y} width={w} height={h} fill="#f0ede8" stroke="#b8b0a4" strokeWidth="1.1" rx="1"/>
  <line x1={x} y1={y} x2={x+w} y2={y+h} stroke="#b8b0a4" strokeWidth="0.9"/>
  <line x1={x+w} y1={y} x2={x} y2={y+h} stroke="#b8b0a4" strokeWidth="0.9"/></g>
);

export function LayoutB() {
  const getY = (idx: number) => 80 + ROW_H.slice(0, idx).reduce((a, v) => a + v + 20, 0);

  return (
    <div className="w-full bg-[#fdf8f0]">
      <svg viewBox={`0 0 1280 ${TOTAL_H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="wf-2b-sk">
            <feTurbulence type="turbulence" baseFrequency="0.018" numOctaves="3" seed="11" result="n"/>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
          <pattern id="wf-2b-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0L0 0 0 24" fill="none" stroke="#ddd5c5" strokeWidth="0.5"/>
          </pattern>
          <pattern id="wf-2b-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#9ca3af" strokeWidth="0.9" opacity="0.55"/>
          </pattern>
        </defs>
        <rect width="1280" height={TOTAL_H} fill="#fdf8f0"/>
        <rect width="1280" height={TOTAL_H} fill="url(#wf-2b-grid)" opacity="0.65"/>
        <g filter="url(#wf-2b-sk)">
          {/* LEFT NAV */}
          <rect x={0} y={0} width={NAV_W} height={TOTAL_H} fill="#f0ede8" stroke="#e0d8cc" strokeWidth="1"/>
          <rect x={16} y={20} width={28} height={20} rx="4" fill="#d1cfc8"/>
          <Ln x={52} y={24} w={80} op={0.7}/>
          <Ln x={52} y={32} w={60} op={0.5}/>
          <text x={16} y={68} fontSize="8" fill="#9ca3af" fontFamily="monospace">← back</text>
          <line x1={16} y1={74} x2={NAV_W-16} y2={74} stroke="#e0d8cc" strokeWidth="0.8"/>
          {SECTIONS.map((s, i) => (
            <g key={s}>
              <circle cx={28} cy={94+i*60} r={4} fill={i===0?"#b8b0a4":"#fff"} stroke="#b8b0a4" strokeWidth="1.5"/>
              {i < SECTIONS.length-1 && <line x1={28} y1={98+i*60} x2={28} y2={154+i*60} stroke="#d1cfc8" strokeWidth="1" strokeDasharray="3 3"/>}
              <text x={44} y={92+i*60} fontSize="7" fill={i===0?"#6b6560":"#9ca3af"} fontFamily="monospace" fontWeight={i===0?"bold":"normal"}>{s}</text>
              <Ln x={44} y={96+i*60} w={130} op={0.35}/>
            </g>
          ))}
          {/* HEADER */}
          <rect x={COL_X} y={0} width={COL_W} height={72} fill="#fff" stroke="#e0d8cc" strokeWidth="1"/>
          <rect x={COL_X+16} y={14} width={280} height={18} rx="1" fill="#c8c4bc" opacity="0.8"/>
          <Ln x={COL_X+16} y={38} w={180} op={0.6}/>
          <rect x={COL_X+COL_W-260} y={14} width={80} height={14} rx="2" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>
          <rect x={COL_X+COL_W-170} y={14} width={80} height={14} rx="2" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>
          <rect x={COL_X+COL_W-80} y={14} width={60} height={14} rx="2" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>
          <text x={COL_X+16} y={62} fontSize="7.5" fill="#b8b0a4" fontFamily="monospace">{META.title} · {META.sub}</text>
          {/* SECTIONS (10 total, 00–09) */}
          {[
            { content: "overview" },
            { content: "text" }, { content: "text+quote" }, { content: "highlight" },
            { content: "wireframes" }, { content: "decisions" }, { content: "screens" },
            { content: "findings" }, { content: "metrics" }, { content: "text" },
          ].map(({ content }, idx) => {
            const y = getY(idx);
            const h = ROW_H[idx];
            return (
              <g key={idx}>
                <rect x={COL_X} y={y} width={5} height={h} fill="#c8c4bc" opacity="0.6"/>
                <text x={COL_X+20} y={y+14} fontSize="8.5" fill="#9ca3af" fontFamily="monospace" fontWeight="bold" letterSpacing="1">{SECTIONS[idx]}</text>
                {content !== "overview" && <rect x={COL_X+20} y={y+22} width={320} height={12} rx="1" fill="#c8c4bc" opacity="0.75"/>}
                {content === "overview" && (
                  <>
                    <rect x={COL_X+20} y={y+28} width={COL_W-40} height={h-38} rx="2" fill="#f5f1ea" stroke="#e0d8cc" strokeWidth="1"/>
                    <rect x={COL_X+36} y={y+40} width={280} height={18} rx="1" fill="#c8c4bc" opacity="0.8"/>
                    {[0,1,2].map(j=><rect key={j} x={COL_X+36+j*110} y={y+64} width={96} height={16} rx="8" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="0.9"/>)}
                    <Ln x={COL_X+36} y={y+88} w={280} op={0.6}/>
                    <text x={COL_X+36} y={h+y-12} fontSize="7.5" fill="#b8b0a4" fontFamily="monospace">{META.title} · {META.sub}</text>
                  </>
                )}
                {content === "text" && (<><Ln x={COL_X+20} y={y+46} w={COL_W-40}/><Ln x={COL_X+20} y={y+58} w={COL_W-80}/><Ln x={COL_X+20} y={y+70} w={COL_W-100}/><Ln x={COL_X+20} y={y+82} w={COL_W-180} op={0.6}/></>)}
                {content === "text+quote" && (<><Ln x={COL_X+20} y={y+46} w={COL_W-40}/><Ln x={COL_X+20} y={y+58} w={COL_W-80}/><rect x={COL_X+20} y={y+78} width={3} height={60} fill="#c8c4bc"/><Ln x={COL_X+32} y={y+84} w={560} op={0.7}/><Ln x={COL_X+32} y={y+96} w={480} op={0.7}/><Ln x={COL_X+32} y={y+108} w={520} op={0.7}/><Ln x={COL_X+32} y={y+120} w={360} op={0.5}/></>)}
                {content === "highlight" && (<><rect x={COL_X+20} y={y+42} width={COL_W-40} height={58} rx="2" fill="#e8e4de" stroke="#c8c4bc" strokeWidth="1"/><Ln x={COL_X+36} y={y+54} w={560}/><Ln x={COL_X+36} y={y+66} w={420}/><text x={COL_X+36} y={y+90} fontSize="7.5" fill="#9ca3af" fontFamily="monospace">[ key insight ]</text></>)}
                {content === "wireframes" && (<><Ln x={COL_X+20} y={y+46} w={COL_W-80}/><Ln x={COL_X+20} y={y+58} w={COL_W-120}/>{[0,1,2].map(i=><Xbox key={i} x={COL_X+20+i*(COL_W-60)/3+8} y={y+75} w={(COL_W-60)/3-16} h={110}/>)}<text x={COL_X+110} y={y+196} fontSize="7" fill="#9ca3af" fontFamily="monospace">option A</text><text x={COL_X+455} y={y+196} fontSize="7" fill="#9ca3af" fontFamily="monospace">option B</text><text x={COL_X+800} y={y+196} fontSize="7" fill="#9ca3af" fontFamily="monospace">chosen ✓</text></>)}
                {content === "decisions" && (<>{[0,1,2,3].map(i=><g key={i}><Ln x={COL_X+20} y={y+46+i*42} w={48} op={0.5}/><Ln x={COL_X+78} y={y+46+i*42} w={380}/><Ln x={COL_X+78} y={y+58+i*42} w={COL_W-120} op={0.65}/><Ln x={COL_X+78} y={y+70+i*42} w={COL_W-200} op={0.45}/></g>)}</>)}
                {content === "screens" && (<><Xbox x={COL_X+20} y={y+42} w={(COL_W-52)/3} h={155}/><Xbox x={COL_X+36+(COL_W-52)/3} y={y+42} w={(COL_W-52)/3} h={155}/><Xbox x={COL_X+52+(COL_W-52)*2/3} y={y+42} w={(COL_W-52)/3} h={155}/></>)}
                {content === "findings" && (<>{[0,1,2,3].map(i=><g key={i}><rect x={COL_X+20} y={y+46+i*30} width={7} height={7} rx="1" fill="#c8c4bc"/><Ln x={COL_X+36} y={y+46+i*30} w={560}/><Ln x={COL_X+36} y={y+58+i*30} w={380} op={0.6}/></g>)}</>)}
                {content === "metrics" && (<>{[0,1,2,3].map(i=><g key={i}><rect x={COL_X+20+i*((COL_W-40)/4)} y={y+42} width={(COL_W-60)/4} height={70} rx="2" fill="#f0ede8" stroke="#c8c4bc" strokeWidth="1"/><rect x={COL_X+36+i*((COL_W-40)/4)} y={y+54} width={90} height={16} rx="1" fill="#c8c4bc"/><Ln x={COL_X+36+i*((COL_W-40)/4)} y={y+78} w={120} op={0.5}/></g>)}</>)}
                <line x1={COL_X} y1={y+h} x2={1280} y2={y+h} stroke="#e0d8cc" strokeWidth="0.8"/>
              </g>
            );
          })}
          <text x={1110} y={TOTAL_H-12} fontSize="8" fill="#c8c4bc" fontFamily="monospace">Layout B · Side Nav</text>
        </g>
      </svg>
    </div>
  );
}
