/* Layout B — Side Nav + Content · Liffo */
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
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 16px", background: "rgba(255,255,255,0.02)", ...style }}>{children}</div>
);
const SectionLabel = ({ label }: { label: string }) => (
  <div style={{ fontFamily: "monospace", fontSize: 9, color: "rgba(255,255,255,0.22)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>{label}</div>
);
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px", background: "rgba(255,255,255,0.02)" }}>
    <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 3 }}>{value}</div>
    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", lineHeight: 1.4 }}>{label}</div>
  </div>
);

export function LayoutB() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
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
    <div style={{ width: "100%", height: "100vh", display: "flex", background: BG, fontFamily: "'Inter', system-ui, sans-serif", color: "#fff" }}>
      {/* Sidebar */}
      <div style={{ width: 196, flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.01)", height: "100vh", overflow: "hidden" }}>
        <div style={{ padding: "16px 14px 10px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: ACC, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: "#fff", opacity: 0.9 }} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 700 }}>Liffo</span>
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace", lineHeight: 1.4 }}>Healthcare App<br />Case Study</div>
        </div>
        <div style={{ height: 2, background: "rgba(255,255,255,0.04)" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
        </div>
        <div style={{ padding: "10px 0", flex: 1, overflowY: "auto" }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ padding: "6px 14px", display: "flex", alignItems: "center", gap: 8, background: i === activeIdx ? "rgba(239,68,68,0.08)" : "transparent", borderRight: i === activeIdx ? `2px solid ${ACC}` : "2px solid transparent" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: i === activeIdx ? ACC : i < activeIdx ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: i === activeIdx ? "#fff" : "rgba(255,255,255,0.32)", fontFamily: "monospace", lineHeight: 1.3 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {[["Role", "Lead Designer"], ["Timeline", "13 weeks"], ["Platform", "iOS · Android"]].map(([l, v]) => (
            <div key={l} style={{ marginBottom: 7 }}>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 1 }}>{l}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} style={{ flex: 1, overflowY: "auto", padding: "36px 36px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 20, padding: "3px 10px", marginBottom: 14 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 10, color: ACC, fontFamily: "monospace" }}>UX Design — Mobile App</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 10, color: "#fff" }}>Emergency-first healthcare<br />for every moment.</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 520 }}>34 screens across 6 flows — emergency always one tap away, routine care building trust for when it matters most.</p>
        </div>

        {/* Screen previews */}
        <div style={{ display: "flex", gap: 10, marginBottom: 40 }}>
          {[ACC, "#38bdf8", "#22c55e", "#a78bfa", "#f97316"].map((c, i) => (
            <div key={i} style={{ flexShrink: 0, width: 64, height: 110, borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <div style={{ width: 28, height: 5, borderRadius: 3, background: c, opacity: 0.6 }} />
              <div style={{ width: 38, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ width: 32, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.07)" }} />
            </div>
          ))}
        </div>

        {/* 00 Overview */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="00 · Overview" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 14 }}>
            <StatCard value="34" label="Screens" /><StatCard value="≤2" label="Emergency taps" /><StatCard value="6" label="Flows" /><StatCard value="13wk" label="Timeline" />
          </div>
          <Card><div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", marginBottom: 6 }}>Core problem</div><p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>Healthcare apps split emergency and routine — panic-mode users can't find what they need, and routine users don't build trust for crisis moments.</p></Card>
        </div>

        {/* 01 Brief */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="01 · The Brief" />
          <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Design the end-to-end mobile experience from scratch.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Emergency flow reachable in ≤ 2 taps","Works offline for core emergency features","Trust signals before provider commitment","Single app — no separate modules"].map(c => (
              <div key={c} style={{ display: "flex", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.52)" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACC, marginTop: 5, flexShrink: 0 }} />{c}
              </div>
            ))}
          </div>
        </div>

        {/* 02 Discovery */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="02 · Discovery" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { m: "Competitive audit", i: "No app bridged emergency + routine. Emergency apps fast but had zero patient relationship." },
              { m: "5 interviews + 1 GP", i: "People freeze when panicking. Trust signals matter equally in emergency and routine care." },
              { m: "Flow audit", i: "7 manual steps to dispatch. GPS auto-detect cuts to 2 steps." },
            ].map(({ m, i }) => (
              <Card key={m} style={{ display: "flex", gap: 12 }}>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", width: 90, flexShrink: 0, paddingTop: 1 }}>{m}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{i}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* 03 Reframe */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="03 · Problem Reframe" />
          <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 12, padding: "18px 20px" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontStyle: "italic", marginBottom: 10 }}>"Make it clean, clear, and trustworthy."</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Build ambient trust during calm moments so the app becomes instinctive during stressful ones."</p>
            </div>
          </div>
        </div>

        {/* 04 Exploration */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="04 · Exploration" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[
              { l: "Tab-first nav", s: "Rejected", c: "#ef4444", r: "Emergency equal to pharmacy. Too much cognitive load." },
              { l: "Search-first nav", s: "Rejected", c: "#f97316", r: "Friction at the worst moment. Hidden trust signals." },
              { l: "Dashboard + emergency block", s: "Chosen", c: "#22c55e", r: "Permanent high-contrast emergency block. Clear hierarchy." },
            ].map(({ l, s, c, r }) => (
              <Card key={l}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.72)" }}>{l}</span>
                  <span style={{ fontSize: 9, fontFamily: "monospace", padding: "2px 7px", borderRadius: 10, background: c + "22", color: c }}>{s}</span>
                </div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>{r}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* 05 Decisions */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="05 · Key Decisions" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { n: "01", t: "Emergency gets visual dominance", d: "30% above-fold, high-contrast pulsing accent." },
              { n: "02", t: "GPS auto-detection, not manual entry", d: "Auto-fills location. One tap confirm — no typing while panicking." },
              { n: "03", t: "Trust signals on the list card", d: "Rating, specialisation, availability before tapping into a profile." },
            ].map(({ n, t, d }) => (
              <Card key={n} style={{ display: "flex", gap: 12 }}>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: ACC, width: 18, flexShrink: 0 }}>{n}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 4, color: "#fff" }}>{t}</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>{d}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 06 Final Design */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="06 · Final Design" />
          <div style={{ borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ width: 52, height: 90, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
                <div style={{ width: 22, height: 4, borderRadius: 2, background: ACC, opacity: 0.4 + (i % 3) * 0.2 }} />
                <div style={{ width: 32, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)" }} />
                <div style={{ width: 26, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.06)" }} />
              </div>
            ))}
          </div>
        </div>

        {/* 07 Testing */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="07 · Testing" />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {["Leaderboard removed — low-ranked users disengaged", "Onboarding cut to welcome screen + first task", "Step reveal: one step at a time", "Points anchored to milestone badges"].map(f => (
              <div key={f} style={{ display: "flex", gap: 8, padding: "10px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.52)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", marginTop: 3, flexShrink: 0 }} />{f}
              </div>
            ))}
          </div>
        </div>

        {/* 08 Outcomes */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="08 · Outcomes" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            <StatCard value="≤2" label="Taps to emergency dispatch" />
            <StatCard value="34" label="Screens delivered" />
            <StatCard value="92%" label="Usability task success rate" />
          </div>
        </div>

        {/* 09 Reflection */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 32 }}>
          <SectionLabel label="09 · Reflection" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {["Research reframed the entire problem before I opened Figma.", "Emergency-first design is an architectural decision, not a colour choice.", "The trust insight came from watching one user abandon a selection.", "I'd push for a live crisis simulation test next time."].map(r => (
              <div key={r} style={{ borderLeft: "2px solid rgba(255,255,255,0.07)", paddingLeft: 12 }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>Liffo · Karan Gadhave</span>
          <div style={{ fontSize: 11, padding: "7px 16px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
