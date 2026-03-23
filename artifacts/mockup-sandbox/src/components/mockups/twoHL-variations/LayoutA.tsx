/* Layout A — Single Column Editorial · 2Hour Learning */
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
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "16px 18px", background: "rgba(255,255,255,0.02)", ...style }}>{children}</div>
);
const SL = ({ label }: { label: string }) => (
  <div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>{label}</div>
);
const Divider = () => <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", marginBottom: 32 }} />;
const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 14px", background: "rgba(255,255,255,0.02)" }}>
    <div style={{ fontSize: 26, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", marginBottom: 4 }}>{value}</div>
    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}>{label}</div>
  </div>
);

const personas = [
  { role: "Head of School", color: "#38bdf8", fear: "Reputation", cta: "Request a briefing" },
  { role: "Dean of Academics", color: "#34d399", fear: "Teacher burden", cta: "See teacher dashboard" },
  { role: "Board Member", color: "#fb923c", fear: "Budget ROI", cta: "Get ROI model" },
];

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
      setActiveIdx(Math.min(SECTIONS.length - 1, Math.floor((scrollTop / Math.max(scrollHeight - clientHeight, 1)) * SECTIONS.length)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100vh", overflowY: "auto", background: BG, fontFamily: "'Inter', system-ui, sans-serif", color: "#fff" }}>
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: 3, background: "rgba(255,255,255,0.06)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
      </div>
      <div style={{ position: "sticky", top: 3, zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", background: BG }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: "#000", opacity: 0.9 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600 }}>2Hour Learning</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>B2B EdTech · Case Study</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ width: 6, height: 6, borderRadius: "50%", background: i === activeIdx ? ACC : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", borderRadius: 20, padding: "4px 12px", marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 11, color: ACC, fontFamily: "monospace" }}>UX Design — B2B Web</span>
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>
            One product.<br />Three different buyers.<br />Four different pages.
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}>
            2HL's landing page wasn't converting because it tried to answer three completely different questions for three different buyers simultaneously. I redesigned it as a system of four persona-specific pages — each designed around a different definition of risk.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Lead Designer", "4 weeks", "B2B · Web", "WordPress + HubSpot", "3 personas"].map(t => (
              <span key={t} style={{ fontSize: 11, padding: "5px 12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Persona cards visual */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 10, marginBottom: 56 }}>
          <div style={{ borderRadius: 14, background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.2)", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 8 }}>Homepage</div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>2Hour Learning</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>Brand narrative + product overview</div>
            </div>
            <div style={{ fontSize: 11, color: ACC, marginTop: 12 }}>See how it works →</div>
          </div>
          {personas.map(({ role, color, cta }) => (
            <div key={role} style={{ borderRadius: 14, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "16px" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, marginBottom: 10 }} />
              <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 6, color: "#fff" }}>{role}</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", marginBottom: 10 }}>Fear-first page</div>
              <div style={{ fontSize: 10, color: color }}>{cta} →</div>
            </div>
          ))}
        </div>

        {/* 00 Overview */}
        <Divider />
        <SL label="00 · Overview" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          <StatCard value="4" label="Pages designed (1 WP + 3 HubSpot)" />
          <StatCard value="3" label="Stakeholder personas addressed" />
          <StatCard value="4wk" label="Timeline, sole designer" />
          <StatCard value="1" label="Buying committee — 3 people, 1 decision" />
        </div>
        <Card style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>The core problem</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>Selling software to a school is a committee decision. A principal, a dean, and a board member all need to say yes — but each has a completely different definition of what 'good' looks like. One page can't answer three different questions well enough to convert any of them.</p>
        </Card>

        {/* 01 Brief */}
        <Divider />
        <SL label="01 · The Brief" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Redesign the landing page to convert more leads.</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>The existing homepage was dropping leads at the 'schedule a demo' stage. They assumed better design would fix it.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {["Single homepage for all audiences","Demo-request CTA, low conversion","No persona-specific content or pages","Strong product, weak sales website"].map(c => (
              <div key={c} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC, marginTop: 5, flexShrink: 0 }} />{c}
              </div>
            ))}
          </div>
        </div>

        {/* 02 Discovery */}
        <Divider />
        <SL label="02 · Discovery" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { m: "Sales call analysis", i: "Prospects arrived asking for peer proof, financial justification, or workflow demos. All three from the same page — impossible to answer well." },
            { m: "Stakeholder mapping", i: "Principal: reputation risk. Dean: teacher burden. Board: ROI. Three different definitions of 'risk', three different proof types needed." },
            { m: "Competitor analysis", i: "Competitors with persona-specific pages had better funding and faster growth. The pattern was there to follow and improve on." },
          ].map(({ m, i }) => (
            <Card key={m}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>{m}</div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{i}</p>
            </Card>
          ))}
        </div>

        {/* 03 Reframe */}
        <Divider />
        <SL label="03 · Problem Reframe" />
        <div style={{ background: "rgba(167,139,250,0.05)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: 14, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginBottom: 16 }}>"We need a better website that converts more leads."</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
            <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, textTransform: "uppercase", marginBottom: 8 }}>Reframed to</div>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Design to the fear, not the feature. Each stakeholder's page must answer their specific fear before anything else."</p>
          </div>
        </div>

        {/* 04 Exploration */}
        <Divider />
        <SL label="04 · Exploration" />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>Mapping each stakeholder's fear and messaging order.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { role: "Head of School", color: "#38bdf8", fear: "Betting on the wrong thing — my reputation", order: "Peer proof → outcome data → testimonial → low-commitment CTA" },
            { role: "Dean of Academics", color: "#34d399", fear: "Disrupting teachers who are already overloaded", order: "Workflow fit → teacher testimonial → implementation timeline → see dashboard" },
            { role: "Board Member", color: "#fb923c", fear: "Approving a budget item that doesn't generate ROI", order: "Hard financial number FIRST → district case study → ROI calculator → no testimonials" },
            { role: "Homepage", color: ACC, fear: "N/A — discovery page, not a conversion page", order: "Brand narrative → scale signal → product overview → general CTA" },
          ].map(({ role, color, fear, order }) => (
            <Card key={role}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{role}</span>
              </div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 4 }}>Core fear</div>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontStyle: "italic", marginBottom: 8 }}>"{fear}"</p>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 4 }}>Messaging order</div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.55 }}>{order}</p>
            </Card>
          ))}
        </div>

        {/* 05 Decisions */}
        <Divider />
        <SL label="05 · Key Decisions" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {[
            { n: "01", t: "4 pages, not 1 — one per stakeholder + homepage", d: "A single page can't answer three different risk definitions well. 4 pages let each speak directly to one person's specific fear." },
            { n: "02", t: "Board page opens with a financial number, not a mission statement", d: "Boards don't buy on feelings. '$240K avg saved per pupil within 24 months' is the first thing they see — no warmup." },
            { n: "03", t: "Dean page leads with teacher workflow, not product features", d: "Dean's fear is teacher burden. The first section shows exactly what 9am–11am looks like for a teacher, before any feature explanation." },
          ].map(({ n, t, d }) => (
            <Card key={n} style={{ display: "flex", gap: 14 }}>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, width: 24, flexShrink: 0, paddingTop: 2 }}>{n}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#fff" }}>{t}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{d}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* 06 Final Design */}
        <Divider />
        <SL label="06 · The Four Pages" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 40 }}>
          {[
            { name: "Homepage", platform: "WordPress", color: ACC, hero: "Brand narrative + product overview + scale signal" },
            { name: "Head of School", platform: "HubSpot", color: "#38bdf8", hero: "Peer proof first → 'Request a briefing'" },
            { name: "Dean of Academics", platform: "HubSpot", color: "#34d399", hero: "Teacher workflow first → 'See the dashboard'" },
            { name: "Board Member", platform: "HubSpot", color: "#fb923c", hero: "$240K first → ROI calculator CTA" },
          ].map(({ name, platform, color, hero }) => (
            <div key={name} style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}>
              <div style={{ height: 6, background: color }} />
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 4, color: "#fff" }}>{name}</div>
                <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>{platform}</div>
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", lineHeight: 1.55 }}>{hero}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 07 Testing */}
        <Divider />
        <SL label="07 · Testing" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {["Board page: financial number first → 40% more engagement than feature-first", "Dean page: teacher testimonial moved to hero → 35% more scroll depth", "Homepage: scale signal ('1,200 students') outperformed generic headline", "All CTAs lowered commitment: 'request a briefing' > 'schedule a demo'"].map(f => (
            <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#f59e0b", marginTop: 2, flexShrink: 0 }} />{f}
            </div>
          ))}
        </div>

        {/* 08 Outcomes */}
        <Divider />
        <SL label="08 · Outcomes" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 40 }}>
          <StatCard value="4" label="Persona-specific pages delivered" />
          <StatCard value="3" label="Buying committee roles addressed" />
          <StatCard value="+40%" label="Board page engagement vs. feature-first" />
          <StatCard value="4wk" label="From brief to delivered assets" />
        </div>

        {/* 09 Reflection */}
        <Divider />
        <SL label="09 · Reflection" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {["The brief said 'better landing page' — research revealed it needed to be 4 different pages.", "Design to the fear first. Features come after you've addressed what the person is afraid of getting wrong.", "Sales teams hold enormous insight about buyer psychology. That conversation reframed the whole project.", "I'd build a 5th page targeting IT directors next — they're the silent fourth stakeholder in school software decisions."].map(r => (
            <div key={r} style={{ borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: 16 }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{r}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>2HL · Case Study · Karan Gadhave</span>
          <div style={{ fontSize: 12, padding: "8px 18px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
