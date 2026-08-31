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
   Paths copied verbatim from lucide-static v1.38.0. */
const ICON_PATHS: Record<string, string[]> = {
  "messages-square": [
    "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",
    "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",
  ],
  network: [
    "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
    "M12 12V8",
  ],
  component: [
    "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
    "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",
    "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",
    "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
  ],
  "package-check": [
    "M12 22V12",
    "m16 17 2 2 4-4",
    "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",
    "M3.29 7 12 12l8.71-5",
    "m7.5 4.27 8.997 5.148",
  ],
};

/* network also needs its three rects */
const ICON_RECTS: Record<string, Array<[number, number, number, number]>> = {
  network: [[16, 16, 6, 6], [2, 16, 6, 6], [9, 2, 6, 6]],
};

export const Icon = ({ name }: { name: string }) => (
  <svg className="pf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {(ICON_RECTS[name] || []).map(([x, y, w, h], i) => (
      <rect key={i} x={x} y={y} width={w} height={h} rx="1" />
    ))}
    {(ICON_PATHS[name] || []).map((d, i) => <path key={i} d={d} />)}
  </svg>
);
