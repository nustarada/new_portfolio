/* Layout C — Card Grid / Bento · Liffo */
import { useState, useEffect, useRef } from "react";

const ACC = "#ef4444";
const BG = "#090910";

const SECTIONS = [
  { id: "overview",   label: "00 · Overview" },
  { id: "brief",      label: "01 · The Brief" },
  { id: "discovery",  label: "02 · Discovery" },
  { id: "reframe",    label: "03 · Problem Reframe" },
  { id: "explore",    label: "04 · Exploration" },
  { id: "decisions",  label: "05 · Key Decisions" },
  { id: "design",     label: "06 · Final Design" },
  { id: "testing",    label: "07 · Testing" },
  { id: "outcomes",   label: "08 · Outcomes" },
  { id: "reflection", label: "09 · Reflection" },
];

const Card = ({ children, style }: any) => (
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "16px", background: "rgba(255,255,255,0.02)", ...style }}>{children}</div>
);
const SL = ({ label }: { label: string }) => (
  <div style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.22)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{label}</div>
);

export function LayoutC() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const pct = scrollHeight - clientHeight > 0 ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 0;
      setProgress(pct);
      setActiveIdx(Math.min(SECTIONS.length - 1, Math.floor((scrollTop / Math.max(scrollHeight - clientHeight, 1)) * SECTIONS.length)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh", overflowY: "auto", background: BG, fontFamily: "'Inter', system-ui, sans-serif", color: "#fff" }}>
      {/* Progress */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: 3, background: "rgba(255,255,255,0.05)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
      </div>

      {/* Nav */}
      <div style={{ position: "sticky", top: 3, zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", background: BG }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: "#fff", opacity: 0.9 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 700 }}>Liffo</span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}>Healthcare App · Case Study</span>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ width: 6, height: 6, borderRadius: "50%", background: i === activeIdx ? ACC : "rgba(255,255,255,0.14)", transition: "background 0.2s" }} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 28px 80px" }}>
        {/* Bento Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "auto auto", gap: 12, marginBottom: 44 }}>
          {/* Title block — spans 2 cols */}
          <div style={{ gridColumn: "1 / 3", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 20, padding: "3px 10px", marginBottom: 14 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
                <span style={{ fontSize: 10, color: ACC, fontFamily: "monospace" }}>UX Design — Mobile</span>
              </div>
              <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 10 }}>Emergency-first healthcare for every moment.</h1>
            </div>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
              {["Lead Designer", "13 weeks", "iOS · Android"].map(t => (
                <span key={t} style={{ fontSize: 10, padding: "4px 10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>{t}</span>
              ))}
            </div>
          </div>
          {/* Stats block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[["34", "screens"], ["≤2", "taps"], ["6", "flows"]].map(([v, l]) => (
              <div key={l} style={{ flex: 1, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{v}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Screen previews */}
        <div style={{ display: "flex", gap: 10, marginBottom: 44, justifyContent: "center" }}>
          {[ACC, "#38bdf8", "#22c55e", "#a78bfa", "#f97316", "#ec4899"].map((c, i) => (
            <div key={i} style={{ width: 68, height: 118, borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <div style={{ width: 30, height: 5, borderRadius: 3, background: c, opacity: 0.6 }} />
              <div style={{ width: 42, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ width: 36, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.07)" }} />
            </div>
          ))}
        </div>

        {/* 00 Overview */}
        <SL label="00 · Overview" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          <Card style={{ gridColumn: "1 / 2" }}>
            <SL label="Core problem" />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>Healthcare apps split emergency and routine care — panic-mode users can't find what they need, and routine users don't build trust for crisis moments.</p>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[["34", "Screens"], ["≤2", "Emergency taps"], ["6", "Flows"], ["13wk", "Timeline"]].map(([v, l]) => (
              <div key={l} style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 12px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 3 }}>{v}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 01 Brief */}
        <SL label="01 · The Brief" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          <Card>
            <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, lineHeight: 1.3, color: "#fff" }}>Design end-to-end mobile experience from scratch.</h2>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>No existing product, no design system. One hard requirement: emergency access within 2 taps, always.</p>
          </Card>
          <Card>
            <SL label="Hard constraints" />
            {["Emergency flow ≤ 2 taps","Works offline for emergencies","Trust signals before commitment","Single app — not modules"].map(c => (
              <div key={c} style={{ display: "flex", gap: 7, fontSize: 12, color: "rgba(255,255,255,0.52)", marginBottom: 7 }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACC, marginTop: 5, flexShrink: 0 }} />{c}
              </div>
            ))}
          </Card>
        </div>

        {/* 02 Discovery */}
        <SL label="02 · Discovery" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 40 }}>
          {[
            { m: "Competitive audit", i: "No app bridged emergency + routine. Fast but no patient relationship." },
            { m: "5 user interviews", i: "People freeze in panic. Trust signals equally important in both modes." },
            { m: "Flow audit", i: "7 steps to dispatch. GPS auto-detect cuts to 2." },
          ].map(({ m, i }) => (
            <Card key={m}>
              <SL label={m} />
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{i}</p>
            </Card>
          ))}
        </div>

        {/* 03 + 04 combined */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          <div>
            <SL label="03 · Problem Reframe" />
            <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 14, padding: "16px 18px" }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontStyle: "italic", marginBottom: 10 }}>"Make it clean and trustworthy."</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Build ambient trust during calm moments so it becomes instinctive in crises."</p>
            </div>
          </div>
          <div>
            <SL label="04 · Exploration" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { l: "Tab-first nav", s: "Rejected", c: "#ef4444" },
                { l: "Search-first nav", s: "Rejected", c: "#f97316" },
                { l: "Dashboard + emergency block", s: "Chosen", c: "#22c55e" },
              ].map(({ l, s, c }) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, background: "rgba(255,255,255,0.02)" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{l}</span>
                  <span style={{ fontSize: 9, fontFamily: "monospace", padding: "2px 7px", borderRadius: 10, background: c + "22", color: c }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 05 Decisions */}
        <SL label="05 · Key Decisions" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 40 }}>
          {[
            { n: "01", t: "Emergency gets visual dominance", d: "30% above-fold, pulsing accent. Every service is subordinate." },
            { n: "02", t: "GPS auto-detection", d: "Auto-fills location. One tap confirm — no typing while panicking." },
            { n: "03", t: "Trust signals on list card", d: "Rating, availability on the list. 80% of evaluation happens here." },
          ].map(({ n, t, d }) => (
            <Card key={n}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, marginBottom: 8 }}>{n}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#fff" }}>{t}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.55 }}>{d}</div>
            </Card>
          ))}
        </div>

        {/* 06 Final Design */}
        <SL label="06 · Final Design" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, marginBottom: 40 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ height: 110, borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <div style={{ width: "60%", height: 4, borderRadius: 2, background: ACC, opacity: 0.4 + (i % 3) * 0.2 }} />
              <div style={{ width: "75%", height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ width: "60%", height: 3, borderRadius: 2, background: "rgba(255,255,255,0.07)" }} />
            </div>
          ))}
        </div>

        {/* 07 Testing + 08 Outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          <div>
            <SL label="07 · Testing" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Leaderboard removed — users disengaged", "Onboarding cut to welcome + first task", "Step-reveal replaced the full list", "Points anchored to milestone badges"].map(f => (
                <div key={f} style={{ display: "flex", gap: 7, padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", marginTop: 3, flexShrink: 0 }} />{f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SL label="08 · Outcomes" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["≤2", "Emergency taps"], ["34", "Screens delivered"], ["92%", "Task success rate"], ["13wk", "Full delivery"]].map(([v, l]) => (
                <div key={l} style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 12px", background: "rgba(255,255,255,0.02)" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 3 }}>{v}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 09 Reflection */}
        <SL label="09 · Reflection" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 40 }}>
          {["Research reframed the entire problem before Figma.", "Emergency-first is architectural — not a colour choice.", "The trust insight came from one user's hesitation, not assumption.", "I'd push for a live crisis simulation test next time."].map(r => (
            <Card key={r}><p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{r}</p></Card>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>Liffo · Karan Gadhave</span>
          <div style={{ fontSize: 11, padding: "7px 16px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
