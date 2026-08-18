import React from "react";

/* ── Shared case-study page primitives ─────────────────────────────────────
   Chapter-based template used by all case study pages.
   A reader who only reads chapter titles + takeaway chips gets the full
   story in under a minute; each chapter then earns deeper attention. */

export const Chapter = ({
  id, n, title, summary, takeaway, accent = "#ef4444", tint = false, children,
}: {
  id: string; n: string; title: string; summary?: string; takeaway?: string;
  accent?: string; tint?: boolean; children: React.ReactNode;
}) => (
  <section id={id} className={`relative border-t border-white/5 ${tint ? "bg-white/[0.012]" : ""}`}>
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-20">
      <div className="flex items-start gap-5 sm:gap-7 mb-12">
        <span className="text-6xl sm:text-7xl font-black leading-none select-none flex-shrink-0 albert-sans-medium" style={{ color: accent, opacity: 0.22 }}>{n}</span>
        <div className="pt-1 min-w-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white albert-sans-medium leading-tight mb-2.5">{title}</h2>
          {summary && <p className="text-white/50 jost-secondary leading-relaxed max-w-2xl">{summary}</p>}
          {takeaway && (
            <div className="mt-5 inline-flex items-baseline gap-2.5 px-4 py-2 rounded-full border text-sm jost-secondary"
              style={{ borderColor: accent + "44", color: accent, background: accent + "0d" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">Takeaway</span>
              <span className="font-medium">{takeaway}</span>
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  </section>
);

export const BigStatement = ({
  kicker, accent = "#ef4444", children,
}: { kicker?: string; accent?: string; children: React.ReactNode }) => (
  <div className="border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      {kicker && <p className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: accent }}>{kicker}</p>}
      <p className="text-2xl sm:text-3xl md:text-[2.6rem] font-bold text-white albert-sans-medium leading-snug md:leading-snug">{children}</p>
    </div>
  </div>
);

export const Figure = ({
  caption, className = "", padded = false, children,
}: { caption?: string; className?: string; padded?: boolean; children: React.ReactNode }) => (
  <figure className={className}>
    <div className={`rounded-2xl overflow-hidden border border-white/10 ${padded ? "bg-white/[0.02] p-5 sm:p-6" : ""}`}>{children}</div>
    {caption && <figcaption className="text-white/30 text-xs mt-2.5 font-mono">{caption}</figcaption>}
  </figure>
);

export const MetricStrip = ({ items }: { items: Array<{ v: string; l: string }> }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/5 border-y border-white/5">
    {items.map(({ v, l }) => (
      <div key={l} className="px-5 py-7">
        <p className="text-4xl font-black text-white albert-sans-medium tracking-tight">{v}</p>
        <p className="text-white/40 text-xs jost-secondary mt-2 leading-relaxed">{l}</p>
      </div>
    ))}
  </div>
);

export const Snapshot = ({
  accent = "#ef4444", outcomes, meta,
}: { accent?: string; outcomes: string[]; meta: Array<[string, string]> }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
    <p className="text-white/30 text-[11px] font-mono uppercase tracking-widest mb-4">The 30-second version</p>
    <div className="space-y-3 mb-6">
      {outcomes.map(o => (
        <div key={o} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ background: accent }} />
          <p className="text-white/75 text-sm jost-secondary leading-relaxed">{o}</p>
        </div>
      ))}
    </div>
    <div className="border-t border-white/5 pt-4 grid grid-cols-2 gap-x-5 gap-y-3">
      {meta.map(([k, v]) => (
        <div key={k}>
          <p className="text-white/25 text-[10px] font-mono uppercase tracking-wider mb-0.5">{k}</p>
          <p className="text-white/60 text-xs jost-secondary">{v}</p>
        </div>
      ))}
    </div>
  </div>
);

export const SubLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-white/30 text-xs font-mono uppercase tracking-widest mb-5 ${className}`}>{children}</p>
);
