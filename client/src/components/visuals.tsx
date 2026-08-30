import React from "react";

/* ── Hero: a role/permission graph, drawn in with DrawSVG ──────────
   Nodes are roles, edges are the access paths between them. It is the
   shape of the problem Karan's work actually solves.                */
const NODES: Array<[number, number, number, boolean]> = [
  [300, 96, 9, true],
  [148, 196, 6, false], [452, 196, 6, false],
  [ 78, 330, 5, false], [300, 268, 11, true], [522, 330, 5, false],
  [148, 452, 6, false], [452, 452, 6, false],
  [300, 512, 7, true],
  [ 40, 452, 4, false], [560, 452, 4, false],
];
const EDGES: Array<[number, number]> = [
  [0,1],[0,2],[0,4],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[4,7],[5,7],
  [6,8],[7,8],[3,9],[5,10],[9,6],[10,7],
];

export const SystemGraphic = () => (
  <svg className="pf-sysgraphic" viewBox="0 0 600 600" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1" opacity=".42">
      {EDGES.map(([a, b], i) => (
        <line key={i} data-draw
          x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
      ))}
    </g>
    <g>
      {NODES.map(([x, y, r, hot], i) => (
        <circle key={i} data-node cx={x} cy={y} r={r}
          fill={hot ? "var(--pf-accent)" : "var(--paper)"}
          stroke="currentColor" strokeWidth={hot ? 0 : 1.5} />
      ))}
    </g>
  </svg>
);

/* ── Morphing backdrop for the statement band ───────────────────── */
export const MORPHS = [
  "M300,60 C420,60 520,150 520,290 C520,440 410,540 300,540 C180,540 80,430 80,290 C80,150 180,60 300,60 Z",
  "M300,40 C450,90 560,180 520,320 C480,470 380,560 260,530 C130,500 60,380 80,250 C100,120 180,20 300,40 Z",
  "M300,70 C400,40 540,130 540,270 C540,420 430,570 290,540 C150,510 60,400 70,260 C80,130 190,100 300,70 Z",
];

export const MorphBlob = () => (
  <svg className="pf-morph" viewBox="0 0 600 600" aria-hidden="true">
    <path id="pf-morph-path" d={MORPHS[0]} />
  </svg>
);

/* ── Oversized ticker type ──────────────────────────────────────── */
export const Ticker = ({ items }: { items: string[] }) => (
  <div className="pf-ticker">
    <div className="pf-ticker-track">
      {[0, 1].map((k) => (
        <React.Fragment key={k}>
          {items.map((t, i) => (
            <span key={`${k}-${i}`}>
              {t}<i aria-hidden="true">/</i>
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  </div>
);
