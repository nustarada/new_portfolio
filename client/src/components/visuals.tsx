import React from "react";

/* Oversized ticker type. */
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

/* Icons from Lucide (lucide.dev), ISC licensed, free for commercial use.
   Shapes copied verbatim from lucide-static v1.38.0, chosen to state the
   step literally: research a person, an architect's compass, the Figma
   mark itself, a launch. */
type Shape =
  | { p: string }
  | { c: [number, number, number] };

const ICONS: Record<string, Shape[]> = {
  /* Discover: a person under a magnifier, "understanding who does what" */
  "user-search": [
    { c: [10, 7, 4] },
    { p: "M10.3 15H7a4 4 0 0 0-4 4v2" },
    { c: [17, 17, 3] },
    { p: "m21 21-1.9-1.9" },
  ],
  /* Architect: a drafting compass */
  "drafting-compass": [
    { p: "m12.99 6.74 1.93 3.44" },
    { p: "M19.136 12a10 10 0 0 1-14.271 0" },
    { p: "m21 21-2.16-3.84" },
    { p: "m3 21 8.02-14.26" },
    { c: [12, 5, 2] },
  ],
  /* Design: the Figma mark, since the step is Figma libraries and Dev Mode */
  figma: [
    { p: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" },
    { p: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" },
    { p: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" },
    { p: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" },
    { p: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" },
  ],
  /* Ship: a launch */
  rocket: [
    { p: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" },
    { p: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" },
    { p: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" },
    { p: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" },
  ],
};

export const Icon = ({ name }: { name: string }) => (
  <svg className="pf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {(ICONS[name] || []).map((sh, i) =>
      "c" in sh
        ? <circle key={i} cx={sh.c[0]} cy={sh.c[1]} r={sh.c[2]} />
        : <path key={i} d={sh.p} />)}
  </svg>
);
