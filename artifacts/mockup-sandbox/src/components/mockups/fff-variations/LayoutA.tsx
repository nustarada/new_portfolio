/* Layout A — Single Column Editorial · Future First Families */
import { useState, useEffect, useRef } from "react";

const ACC = "#38bdf8";
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
      {/* Progress */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: 3, background: "rgba(255,255,255,0.06)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
      </div>

      {/* Nav */}
      <div style={{ position: "sticky", top: 3, zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", background: BG }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: "#000", opacity: 0.9 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Future First Families</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>Advocacy Platform · Case Study</span>
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 20, padding: "4px 12px", marginBottom: 20 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 11, color: ACC, fontFamily: "monospace" }}>UX Design — Web Platform</span>
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16, color: "#fff" }}>
            Making advocacy feel<br />like it's working.
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}>
            FFF's members were motivated — but the platform gave them no feedback, no visible progress, and no clear next step. I designed a gamified task system that made participation feel purposeful from the first session.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Lead Designer", "4 weeks", "Web Platform", "Gamification", "HubSpot"].map(t => (
              <span key={t} style={{ fontSize: 11, padding: "5px 12px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div style={{ borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: 24, marginBottom: 56, minHeight: 160, display: "flex", gap: 16 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ height: 36, borderRadius: 8, border: "1px solid rgba(56,189,248,0.2)", background: "rgba(56,189,248,0.06)", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACC }} />
              <div style={{ fontSize: 11, color: ACC }}>Welcome Sarah · Streak 🔥 5 days</div>
            </div>
            <div style={{ height: 60, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "10px 12px" }}>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 4 }}>Your next task</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Contact your school board rep</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>3 min · 3 steps · contact</div>
            </div>
            <div style={{ height: 28, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "6px 12px", display: "flex", alignItems: "center" }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>🌐 Community: 847 actions this month</div>
            </div>
          </div>
          <div style={{ width: 120, display: "flex", flexDirection: "column", gap: 8 }}>
            {["Call", "Write", "Share", "Attend"].map((t, i) => (
              <div key={t} style={{ height: 30, borderRadius: 6, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", padding: "0 10px", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{t}</div>
            ))}
          </div>
        </div>

        {/* 00 Overview */}
        <Divider />
        <SL label="00 · Overview" />
        <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Project at a glance</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 20 }}>
          <StatCard value="89%" label="Onboarding completion rate" />
          <StatCard value="3×" label="Task completion vs. open-ended email asks" />
          <StatCard value="–60%" label="Admin coordination time saved" />
          <StatCard value="4.6/5" label="Usability score, 8 test participants" />
        </div>
        <Card style={{ marginBottom: 40 }}>
          <div style={{ fontSize: 10, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>The core problem</div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>FFF's members were already motivated to advocate for education reform. The problem wasn't motivation — it was that the platform gave them no feedback, no visible progress, and no clear next step. Advocacy felt like shouting into a void.</p>
        </Card>

        {/* 01 Brief */}
        <Divider />
        <SL label="01 · The Brief" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>Build a digital platform to boost member engagement in advocacy.</h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>4-week project. Existing member base, no existing platform. Needed to show measurable engagement within the first session.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {["Email-only org — no existing platform","Members: motivated but underutilised","No tracking of member participation","Admin team spending 60%+ coordinating"].map(c => (
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
            { m: "Member interviews (8)", i: "Members wanted to act but didn't know what to do next. 'Email asks' had no defined steps." },
            { m: "Admin interviews (3)", i: "60% of admin time was coordination — tracking who did what, following up, confirming completion." },
            { m: "Behavioural analysis", i: "Bounded asks (specific, timed, 3 steps max) got 3× the completion rate of open-ended ones." },
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
        <div style={{ background: "rgba(56,189,248,0.05)", border: "1px solid rgba(56,189,248,0.15)", borderRadius: 14, padding: "24px 28px", marginBottom: 40 }}>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", fontStyle: "italic", marginBottom: 16 }}>"Members aren't motivated enough — we need better engagement."</p>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
            <div style={{ fontSize: 10, fontFamily: "monospace", color: ACC, textTransform: "uppercase", marginBottom: 8 }}>Reframed to</div>
            <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Make participation feel like it's working — so motivation sustains itself."</p>
          </div>
        </div>

        {/* 04 Exploration */}
        <Divider />
        <SL label="04 · Exploration" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 40 }}>
          {[
            { l: "Community forum", s: "Rejected", c: "#ef4444", r: "The problem wasn't connection — it was clarity of action. A forum adds noise without direction." },
            { l: "Event calendar", s: "Rejected", c: "#f97316", r: "Time-fixed events miss members who can't attend. Replicates email model with better UI." },
            { l: "Task-based gamification", s: "Chosen", c: "#22c55e", r: "Bounded tasks, completion states, points, milestones — directly addresses every research insight." },
          ].map(({ l, s, c, r }) => (
            <Card key={l}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{l}</span>
                <span style={{ fontSize: 10, fontFamily: "monospace", padding: "2px 8px", borderRadius: 20, background: c + "22", color: c }}>{s}</span>
              </div>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{r}</p>
            </Card>
          ))}
        </div>

        {/* 05 Decisions */}
        <Divider />
        <SL label="05 · Key Decisions" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
          {[
            { n: "01", t: "Tasks must feel completable — a clear start, a clear end", d: "Verb-first title, time estimate, step-by-step instructions, single completion button. Nothing else." },
            { n: "02", t: "First task in session one — onboarding earns the right to ask", d: "Cut 3-screen explanation. Replaced with: welcome → first task → completion. Platform explains itself by being used." },
            { n: "03", t: "Community counter, not leaderboard", d: "Low-ranked users disengaged. Everyone contributes to one number: 847 community actions this month." },
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
        <SL label="06 · Final Design" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 12, marginBottom: 40 }}>
          <Card>
            <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: 8 }}>Key screens</div>
            {["Dashboard + task feed", "Task detail + step reveal", "Milestones + badge system", "Admin task creation", "Community counter"].map(s => (
              <div key={s} style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 5, paddingLeft: 8, borderLeft: `2px solid ${ACC}22` }}>{s}</div>
            ))}
          </Card>
          <div style={{ borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            {["Dashboard — streak, next task, community", "Task detail — steps, timer, complete", "Milestones — 50/100 to Advocate badge", "Admin — create task with validation"].map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACC, flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 07 Testing */}
        <Divider />
        <SL label="07 · Testing" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {["Onboarding skimmed, not read → cut to first task", "Leaderboard disengaged rank 20+ → community counter", "Steps read as list, not process → step-reveal", "Points had no context → '50/100 to Advocate'"].map(f => (
            <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#f59e0b", marginTop: 2, flexShrink: 0 }} />{f}
            </div>
          ))}
        </div>

        {/* 08 Outcomes */}
        <Divider />
        <SL label="08 · Outcomes" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 40 }}>
          <StatCard value="89%" label="Onboarding completion (up from ~40%)" />
          <StatCard value="3×" label="Task completion vs. open-ended email asks" />
          <StatCard value="–60%" label="Admin time saved per campaign" />
        </div>

        {/* 09 Reflection */}
        <Divider />
        <SL label="09 · Reflection" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {["Research reframed — motivation was never the real problem.", "Gamification only works when rewards reflect real impact, not just activity.", "The leaderboard finding only emerged because testers actually spent time earning points.", "I'd push for a 2–3 week real-member test before full launch."].map(r => (
            <div key={r} style={{ borderLeft: "2px solid rgba(255,255,255,0.1)", paddingLeft: 16 }}>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{r}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>FFF · Case Study · Karan Gadhave</span>
          <div style={{ fontSize: 12, padding: "8px 18px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
