/* Layout A — Single Column Editorial · Liffo */
import { useState, useEffect, useRef } from "react";

const ACC = "#ef4444";
const BG = "#090910";
const SECTIONS = [
  { id: "overview",  label: "00 · Overview" },
  { id: "brief",     label: "01 · The Brief" },
  { id: "discovery", label: "02 · Discovery" },
  { id: "reframe",   label: "03 · Problem Reframe" },
  { id: "explore",   label: "04 · Exploration" },
  { id: "decisions", label: "05 · Key Decisions" },
  { id: "design",    label: "06 · Final Design" },
  { id: "testing",   label: "07 · Testing" },
  { id: "outcomes",  label: "08 · Outcomes" },
  { id: "reflection",label: "09 · Reflection" },
];

const MetaTag = ({ label, value }: { label: string; value: string }) => (
  <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "8px 14px", background: "rgba(255,255,255,0.02)" }}>
    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 9, fontFamily: "monospace", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
    <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 600 }}>{value}</div>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 14px", background: "rgba(255,255,255,0.02)" }}>
    <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 4 }}>{value}</div>
    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}>{label}</div>
  </div>
);

const SectionLabel = ({ label }: { label: string }) => (
  <div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>{label}</div>
);

const Divider = () => <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: 32 }} />;

const Card = ({ children, style }: any) => (
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "16px 18px", background: "rgba(255,255,255,0.02)", ...style }}>{children}</div>
);

const PhoneMock = ({ color = ACC }: { color?: string }) => (
  <div style={{ width: 70, height: 120, borderRadius: 14, border: "2px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 36, height: 8, borderRadius: 4, background: color, opacity: 0.7 }} />
  </div>
);

export function LayoutA() {
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
      setActiveIdx(Math.floor((scrollTop / (scrollHeight || 1)) * SECTIONS.length));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh", overflowY: "auto", background: BG, fontFamily: "'Inter', system-ui, sans-serif", color: "#fff", position: "relative" }}>
      {/* Progress bar */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: 3, background: "rgba(255,255,255,0.06)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
      </div>

      {/* Nav */}
      <div style={{ position: "sticky", top: 3, zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", background: BG }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: "#fff", opacity: 0.9 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Liffo</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>Healthcare App · Case Study</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ width: 6, height: 6, borderRadius: "50%", background: i === activeIdx ? ACC : "rgba(255,255,255,0.15)", transition: "background 0.2s" }} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 20, padding: "4px 12px", marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 11, color: ACC, fontFamily: "monospace" }}>UX Design — Mobile</span>
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>
            Liffo — One app<br />for every healthcare need.
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}>
            Emergency response shouldn't compete with routine booking for the same taps. I designed Liffo's complete mobile experience — 34 screens across 6 flows — with emergency always one tap away.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Lead Designer", "13 weeks", "iOS · Android", "34 screens", "6 flows"].map(t => (
              <span key={t} style={{ fontSize: 11, padding: "5px 12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: 24, marginBottom: 56, display: "flex", gap: 16, alignItems: "center", justifyContent: "center", minHeight: 180 }}>
          {[ACC, "#38bdf8", "#a78bfa", "#22c55e", "#f97316"].map((c, i) => (
            <PhoneMock key={i} color={c} />
          ))}
        </div>

        {/* 00 Overview */}
        <Divider />
        <SectionLabel label="00 · Overview" />
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Project at a glance</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          <StatCard value="34" label="Screens designed end-to-end" />
          <StatCard value="≤2" label="Taps to emergency dispatch" />
          <StatCard value="6" label="Core user flows designed" />
          <StatCard value="13wk" label="Timeline, sole designer" />
        </div>
        <Card style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>The core problem</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
            Healthcare apps treat emergency and routine care as separate concerns. This means panic-mode users can't find what they need, and routine users don't build enough trust to use the app in a crisis. Liffo needed to solve both simultaneously.
          </p>
        </Card>

        {/* 01 The Brief */}
        <Divider />
        <SectionLabel label="01 · The Brief" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Design the end-to-end mobile experience from scratch.</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>One hard requirement: emergency access within 2 taps, always. No existing product, no prior design system.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {["Emergency flow reachable in ≤ 2 taps","App must work offline for emergencies","Trust signals before committing to a provider","Single app — not separate modules"].map(c => (
              <div key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC, marginTop: 5, flexShrink: 0 }} />
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* 02 Discovery */}
        <Divider />
        <SectionLabel label="02 · Discovery" />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>What I found before opening Figma.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { method: "Competitive audit", insight: "No app bridged emergency + routine care. Emergency apps were fast but had zero patient relationship." },
            { method: "Stakeholder interviews", insight: "People freeze in panic and need minimal cognitive load. Trust signals matter in both emergency and routine care." },
            { method: "Usability audit", insight: "7 manual steps from 'something is wrong' to ambulance dispatched. GPS auto-detection alone cuts this to 2." },
          ].map(({ method, insight }) => (
            <Card key={method}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>{method}</div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{insight}</p>
            </Card>
          ))}
        </div>

        {/* 03 Reframe */}
        <Divider />
        <SectionLabel label="03 · Problem Reframe" />
        <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 14, padding: "24px 28px", marginBottom: 40 }}>
          <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>Reframed from</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginBottom: 16 }}>"This is a healthcare app that needs good UX."</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
            <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, textTransform: "uppercase", marginBottom: 8 }}>Reframed to</div>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Build ambient trust during calm moments so the app becomes instinctive during stressful ones."</p>
          </div>
        </div>

        {/* 04 Exploration */}
        <Divider />
        <SectionLabel label="04 · Exploration" />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Three directions. Two rejected.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { label: "Tab-first nav", status: "Rejected", color: "#ef4444", reason: "Emergency shares visual weight with pharmacy. Cognitive load too high in a crisis." },
            { label: "Search-first nav", status: "Rejected", color: "#f97316", reason: "AI triage felt innovative but introduced friction at exactly the wrong moment." },
            { label: "Dashboard-first + emergency block", status: "Chosen", color: "#22c55e", reason: "Permanent high-contrast emergency block. Clear two-tier hierarchy: urgent vs. planned." },
          ].map(({ label, status, color, reason }) => (
            <Card key={label}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{label}</span>
                <span style={{ fontSize: 10, fontFamily: "monospace", padding: "2px 8px", borderRadius: 20, background: color + "22", color }}>{status}</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{reason}</p>
            </Card>
          ))}
        </div>

        {/* 05 Decisions */}
        <Divider />
        <SectionLabel label="05 · Key Decisions" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {[
            { n: "01", title: "Emergency gets visual dominance — not equal status", detail: "30% of above-fold, high-contrast, pulsing accent. Every other service is subordinate to it." },
            { n: "02", title: "GPS auto-detection, not manual location entry", detail: "Dispatch auto-detects and pre-fills location. One tap confirm, not typing while panicking." },
            { n: "03", title: "Trust signals on the list card — before the profile", detail: "Rating, specialisation, availability on the list card itself. 80% of evaluation happens on the list." },
          ].map(({ n, title, detail }) => (
            <Card key={n} style={{ display: "flex", gap: 14 }}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, width: 24, flexShrink: 0, paddingTop: 2 }}>{n}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#fff" }}>{title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{detail}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* 06 Final Design */}
        <Divider />
        <SectionLabel label="06 · Final Design" />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>34 screens. 6 flows.</h2>
        <div style={{ borderRadius: 14, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", padding: 20, display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} style={{ width: 64, height: 110, borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <div style={{ width: 28, height: 5, borderRadius: 3, background: ACC, opacity: 0.5 + (i % 3) * 0.15 }} />
              <div style={{ width: 40, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.12)" }} />
              <div style={{ width: 36, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
            </div>
          ))}
        </div>

        {/* 07 Testing */}
        <Divider />
        <SectionLabel label="07 · Testing" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {["Leaderboard removed — rank 20+ disengaged", "Onboarding cut from 3 screens to 1 + first task", "Step reveal: one step at a time, not a list to read", "Points anchored to milestone: '50/100 to Advocate'"].map((f, i) => (
            <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "14px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#f59e0b", marginTop: 3, flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>

        {/* 08 Outcomes */}
        <Divider />
        <SectionLabel label="08 · Outcomes" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 40 }}>
          <StatCard value="≤2" label="Taps to emergency dispatch (down from 7 steps)" />
          <StatCard value="34" label="Screens delivered with complete interaction states" />
          <StatCard value="92%" label="Task success rate in usability testing" />
        </div>

        {/* 09 Reflection */}
        <Divider />
        <SectionLabel label="09 · Reflection" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {["Research reframed the entire problem — without interviews I'd have built a better-looking version of what already existed.", "Emergency-first design isn't about making one button red. It's about every architectural decision prioritising the worst-case user.", "The trust signals insight (moving credentials to the list) came from watching one user abandon a doctor selection. Not from assumption.", "I'd push for a 2-week live test next time. Single-session usability leaves too much uncertainty about real crisis behaviour."].map(r => (
            <div key={r} style={{ borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: 16 }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{r}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>Liffo · Case Study · Karan Gadhave</span>
          <div style={{ fontSize: 12, padding: "8px 18px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
