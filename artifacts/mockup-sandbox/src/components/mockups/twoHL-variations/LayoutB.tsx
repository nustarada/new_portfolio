/* Layout B — Side Nav + Content · 2Hour Learning */
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
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "14px 16px", background: "rgba(255,255,255,0.02)", ...style }}>{children}</div>
);
const SL = ({ label }: { label: string }) => (
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
              <div style={{ width: 8, height: 8, borderRadius: 2, background: "#000", opacity: 0.9 }} />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>2Hour<br />Learning</span>
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace", lineHeight: 1.4 }}>B2B EdTech<br />Case Study</div>
        </div>
        <div style={{ height: 2, background: "rgba(255,255,255,0.04)" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
        </div>
        <div style={{ padding: "10px 0", flex: 1, overflowY: "auto" }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ padding: "6px 14px", display: "flex", alignItems: "center", gap: 8, background: i === activeIdx ? `${ACC}15` : "transparent", borderRight: i === activeIdx ? `2px solid ${ACC}` : "2px solid transparent" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: i === activeIdx ? ACC : i < activeIdx ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: i === activeIdx ? "#fff" : "rgba(255,255,255,0.32)", fontFamily: "monospace", lineHeight: 1.3 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {[["Role", "Lead Designer"], ["Timeline", "4 weeks"], ["Platform", "B2B Web"]].map(([l, v]) => (
            <div key={l} style={{ marginBottom: 7 }}>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.18)", fontFamily: "monospace", textTransform: "uppercase", marginBottom: 1 }}>{l}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} style={{ flex: 1, overflowY: "auto", padding: "36px 36px 80px" }}>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${ACC}1a`, border: `1px solid ${ACC}40`, borderRadius: 20, padding: "3px 10px", marginBottom: 14 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 10, color: ACC, fontFamily: "monospace" }}>UX Design — B2B Web</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 10, color: "#fff" }}>One product. Three buyers.<br />Four different pages.</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 520 }}>2HL's single landing page was trying to answer three completely different questions. I redesigned it as a system of four persona-specific pages, each built around a different definition of risk.</p>
        </div>

        {/* Persona page strip */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36 }}>
          {[
            { name: "Homepage", color: ACC },
            { name: "Head of School", color: "#38bdf8" },
            { name: "Dean of Academics", color: "#34d399" },
            { name: "Board Member", color: "#fb923c" },
          ].map(({ name, color }) => (
            <div key={name} style={{ flex: 1, borderRadius: 10, border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden" }}>
              <div style={{ height: 4, background: color }} />
              <div style={{ padding: "8px 10px" }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.7)", lineHeight: 1.3 }}>{name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 00 Overview */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="00 · Overview" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
            <StatCard value="4" label="Pages designed" />
            <StatCard value="3" label="Personas" />
            <StatCard value="4wk" label="Timeline" />
            <StatCard value="+40%" label="Board engagement" />
          </div>
          <Card><SL label="Core problem" /><p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>A buying committee is 3 people with 3 completely different definitions of 'risk'. One page can't answer all three — trying to do so means answering none of them well enough to convert.</p></Card>
        </div>

        {/* 01 Brief */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="01 · The Brief" />
          <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>Redesign the landing page to convert more leads.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Single homepage for all audiences","Demo-request CTA, low conversion","No persona-specific content","Strong product, weak sales website"].map(c => (
              <div key={c} style={{ display: "flex", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACC, marginTop: 5, flexShrink: 0 }} />{c}
              </div>
            ))}
          </div>
        </div>

        {/* 02 Discovery */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="02 · Discovery" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { m: "Sales call analysis", i: "Prospects asked for peer proof, financial justification, or workflow demos — all from the same page." },
              { m: "Stakeholder mapping", i: "Principal: reputation risk. Dean: teacher burden. Board: ROI. Three different definitions of risk." },
              { m: "Competitor analysis", i: "Persona-specific pages correlated with better funding and faster growth." },
            ].map(({ m, i }) => (
              <Card key={m} style={{ display: "flex", gap: 12 }}>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", width: 100, flexShrink: 0, paddingTop: 1 }}>{m}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{i}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* 03 Reframe */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="03 · Problem Reframe" />
          <div style={{ background: `${ACC}08`, border: `1px solid ${ACC}22`, borderRadius: 12, padding: "18px 20px" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontStyle: "italic", marginBottom: 10 }}>"We need a better website."</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Design to the fear, not the feature. Each stakeholder's page addresses their specific risk first."</p>
            </div>
          </div>
        </div>

        {/* 04 Exploration */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="04 · Exploration" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[
              { role: "Head of School", color: "#38bdf8", fear: "Reputation", order: "Peer proof → outcome data → testimonial → briefing CTA" },
              { role: "Dean of Academics", color: "#34d399", fear: "Teacher burden", order: "Workflow fit → teacher voice → implementation → see dashboard" },
              { role: "Board Member", color: "#fb923c", fear: "Budget ROI", order: "$240K FIRST → district case study → ROI calculator" },
              { role: "Homepage", color: ACC, fear: "N/A — discovery page", order: "Brand narrative → scale → product overview → general CTA" },
            ].map(({ role, color, fear, order }) => (
              <Card key={role}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: color }} />
                  <span style={{ fontSize: 11, fontWeight: 600 }}>{role}</span>
                </div>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", marginBottom: 3 }}>FEAR</div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontStyle: "italic", marginBottom: 6 }}>"{fear}"</p>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", marginBottom: 3 }}>MESSAGING ORDER</div>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>{order}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* 05 Decisions */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="05 · Key Decisions" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { n: "01", t: "4 pages not 1", d: "One page can't answer three risk definitions. 4 pages speak directly to each person's specific fear." },
              { n: "02", t: "Board page: financial number first", d: "$240K saved — the first thing boards see. No mission, no warmup. Boards don't buy on feelings." },
              { n: "03", t: "Dean page: teacher workflow first", d: "Teacher burden is the fear. The first section shows exactly what teachers' 9am–11am looks like." },
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

        {/* 06 The Four Pages */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="06 · The Four Pages" />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {[
              { name: "Homepage", platform: "WordPress", color: ACC, hero: "Brand narrative + product overview + scale signal" },
              { name: "Head of School", platform: "HubSpot", color: "#38bdf8", hero: "Peer proof → 'Request a briefing'" },
              { name: "Dean of Academics", platform: "HubSpot", color: "#34d399", hero: "Teacher workflow → 'See the teacher dashboard'" },
              { name: "Board Member", platform: "HubSpot", color: "#fb923c", hero: "$240K first → ROI calculator CTA" },
            ].map(({ name, platform, color, hero }) => (
              <div key={name} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ width: 4, width: 4, flexShrink: 0, marginTop: 4, height: 36, borderLeft: `3px solid ${color}`, borderRadius: 2 }} />
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{name}</span>
                    <span style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.3)" }}>{platform}</span>
                  </div>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{hero}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 07 Testing */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="07 · Testing" />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {["Board: financial number first → +40% more engagement", "Dean: teacher testimonial in hero → +35% scroll depth", "Homepage: scale signal beat generic headline", "All CTAs: lower commitment → more qualified conversations"].map(f => (
              <div key={f} style={{ display: "flex", gap: 8, padding: "9px 11px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", marginTop: 3, flexShrink: 0 }} />{f}
              </div>
            ))}
          </div>
        </div>

        {/* 08 Outcomes */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="08 · Outcomes" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
            <StatCard value="4" label="Pages delivered" />
            <StatCard value="3" label="Personas addressed" />
            <StatCard value="+40%" label="Board engagement" />
            <StatCard value="+35%" label="Dean scroll depth" />
          </div>
        </div>

        {/* 09 Reflection */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="09 · Reflection" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {["Brief said 'better page' — research revealed it needed 4 different pages.", "Design to the fear first. Features come after addressing the specific risk.", "Sales teams hold the insight. That conversation reframed the project.", "I'd build a 5th page for IT directors — the silent fourth stakeholder."].map(r => (
              <div key={r} style={{ borderLeft: "2px solid rgba(255,255,255,0.07)", paddingLeft: 12 }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>2HL · Karan Gadhave</span>
          <div style={{ fontSize: 11, padding: "7px 16px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
