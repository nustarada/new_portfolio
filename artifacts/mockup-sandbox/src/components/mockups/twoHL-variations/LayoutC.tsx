/* Layout C — Card Grid / Bento · 2Hour Learning */
import { useState, useEffect, useRef } from "react";

const ACC = "#a78bfa";
const BG = "#090910";
const SECTIONS = [
  { id: "overview",   label: "00 · Overview" },
  { id: "brief",      label: "01 · The Brief" },
  { id: "discovery",  label: "02 · Discovery" },
  { id: "reframe",    label: "03 · Problem Reframe" },
  { id: "explore",    label: "04 · Exploration" },
  { id: "decisions",  label: "05 · Key Decisions" },
  { id: "design",     label: "06 · The Four Pages" },
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

const personas = [
  { role: "Head of School", color: "#38bdf8", fear: "Reputation" },
  { role: "Dean of Academics", color: "#34d399", fear: "Teacher burden" },
  { role: "Board Member", color: "#fb923c", fear: "Budget ROI" },
];

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
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: 3, background: "rgba(255,255,255,0.05)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
      </div>
      <div style={{ position: "sticky", top: 3, zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", background: BG }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: "#000", opacity: 0.9 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 700 }}>2Hour Learning</span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}>B2B EdTech · Case Study</span>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ width: 6, height: 6, borderRadius: "50%", background: i === activeIdx ? ACC : "rgba(255,255,255,0.14)" }} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 28px 80px" }}>
        {/* Bento Hero */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
          <div style={{ gridColumn: "1 / 3", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px", background: "rgba(255,255,255,0.02)" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${ACC}1a`, border: `1px solid ${ACC}40`, borderRadius: 20, padding: "3px 10px", marginBottom: 14 }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
              <span style={{ fontSize: 10, color: ACC, fontFamily: "monospace" }}>UX Design — B2B Web</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 10 }}>One product. Three buyers. Four different pages.</h1>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 14 }}>
              {["Lead Designer", "4 weeks", "WordPress + HubSpot"].map(t => (
                <span key={t} style={{ fontSize: 10, padding: "4px 10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[["4", "pages"], ["+40%", "board engage"], ["+35%", "dean scroll"]].map(([v, l]) => (
              <div key={l} style={{ flex: 1, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{v}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Persona cards */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 10, marginBottom: 40 }}>
          <div style={{ borderRadius: 12, background: `${ACC}0a`, border: `1px solid ${ACC}22`, padding: "16px" }}>
            <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 6 }}>Homepage · WordPress</div>
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>2Hour Learning</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>Brand narrative + product overview + scale signal → general CTA</div>
          </div>
          {personas.map(({ role, color, fear }) => (
            <div key={role} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
              <div style={{ height: 4, background: color }} />
              <div style={{ padding: "12px" }}>
                <div style={{ fontSize: 10, fontWeight: 600, marginBottom: 5, color: "#fff" }}>{role}</div>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", marginBottom: 3 }}>FEAR</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>{fear}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 00 Overview */}
        <SL label="00 · Overview" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <Card>
            <SL label="Core problem" />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>A buying committee is 3 people with 3 different definitions of risk. One page can't answer all three — trying means answering none well enough to convert.</p>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[["4", "Pages"], ["3", "Personas"], ["+40%", "Board"], ["+35%", "Dean"]].map(([v, l]) => (
              <div key={l} style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 3 }}>{v}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 01 + 02 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <div>
            <SL label="01 · The Brief" />
            <Card>
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>Redesign the landing page to convert more leads.</h2>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>4 weeks. Single homepage for all audiences. Strong product, weak sales website.</p>
            </Card>
          </div>
          <div>
            <SL label="02 · Discovery" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Sales calls: 3 types of questions, 1 page", "Principal: reputation, Dean: burden, Board: ROI", "Persona-specific pages correlated with higher growth"].map(i => (
                <div key={i} style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{i}</div>
              ))}
            </div>
          </div>
        </div>

        {/* 03 + 04 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <div>
            <SL label="03 · Problem Reframe" />
            <div style={{ background: `${ACC}08`, border: `1px solid ${ACC}22`, borderRadius: 14, padding: "16px 18px" }}>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontStyle: "italic", marginBottom: 10 }}>"We need a better landing page."</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Design to the fear, not the feature — 4 pages for 4 stakeholders."</p>
            </div>
          </div>
          <div>
            <SL label="04 · Exploration" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {personas.map(({ role, color, fear }) => (
                <div key={role} style={{ display: "flex", gap: 8, alignItems: "center", padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{role}</span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace", marginLeft: "auto" }}>{fear}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 05 Decisions */}
        <SL label="05 · Key Decisions" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 36 }}>
          {[
            { n: "01", t: "4 pages not 1", d: "One page can't address 3 different risk definitions. Persona-specific pages do." },
            { n: "02", t: "Board: financial number first", d: "$240K — no mission, no warmup. Boards don't buy on feelings." },
            { n: "03", t: "Dean: teacher workflow first", d: "Address the fear (teacher burden) before any product features." },
          ].map(({ n, t, d }) => (
            <Card key={n}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, marginBottom: 8 }}>{n}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#fff" }}>{t}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.55 }}>{d}</div>
            </Card>
          ))}
        </div>

        {/* 06 The Four Pages */}
        <SL label="06 · The Four Pages" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 36 }}>
          {[
            { name: "Homepage", platform: "WordPress", color: ACC, hero: "Brand + product + scale → CTA" },
            { name: "Head of School", platform: "HubSpot", color: "#38bdf8", hero: "Peer proof → briefing CTA" },
            { name: "Dean of Academics", platform: "HubSpot", color: "#34d399", hero: "Teacher workflow → dashboard" },
            { name: "Board Member", platform: "HubSpot", color: "#fb923c", hero: "$240K → ROI calculator" },
          ].map(({ name, platform, color, hero }) => (
            <div key={name} style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ height: 4, background: color }} />
              <div style={{ padding: "12px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 3, color: "#fff" }}>{name}</div>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", marginBottom: 8 }}>{platform}</div>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.42)", lineHeight: 1.5 }}>{hero}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 07 Testing + 08 Outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <div>
            <SL label="07 · Testing" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Board: financial first → +40% engage", "Dean: teacher hero → +35% scroll", "Homepage: scale signal beat generic", "Lower-commitment CTAs → better leads"].map(f => (
                <div key={f} style={{ display: "flex", gap: 7, padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", marginTop: 2, flexShrink: 0 }} />{f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SL label="08 · Outcomes" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["4", "Pages"], ["3", "Personas"], ["+40%", "Board"], ["+35%", "Dean"]].map(([v, l]) => (
                <div key={l} style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px", background: "rgba(255,255,255,0.02)" }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", marginBottom: 3 }}>{v}</div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 09 Reflection */}
        <SL label="09 · Reflection" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 40 }}>
          {["Brief said 'better page' — research said 4 different pages.", "Design to the fear first. Features come after addressing the risk.", "Sales teams hold the insight. That conversation changed the project.", "I'd build a 5th page for IT directors — the silent fourth stakeholder."].map(r => (
            <Card key={r}><p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{r}</p></Card>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>2HL · Karan Gadhave</span>
          <div style={{ fontSize: 11, padding: "7px 16px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
