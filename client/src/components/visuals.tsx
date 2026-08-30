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
