/* Layout B — Side Nav + Content · Future First Families */
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
            <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.2 }}>Future First<br />Families</span>
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace", lineHeight: 1.4 }}>Advocacy Platform<br />Case Study</div>
        </div>
        <div style={{ height: 2, background: "rgba(255,255,255,0.04)" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
        </div>
        <div style={{ padding: "10px 0", flex: 1, overflowY: "auto" }}>
          {SECTIONS.map((s, i) => (
            <div key={s.id} style={{ padding: "6px 14px", display: "flex", alignItems: "center", gap: 8, background: i === activeIdx ? "rgba(56,189,248,0.08)" : "transparent", borderRight: i === activeIdx ? `2px solid ${ACC}` : "2px solid transparent" }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: i === activeIdx ? ACC : i < activeIdx ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", flexShrink: 0 }} />
              <span style={{ fontSize: 10, color: i === activeIdx ? "#fff" : "rgba(255,255,255,0.32)", fontFamily: "monospace", lineHeight: 1.3 }}>{s.label}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {[["Role", "Lead Designer"], ["Timeline", "4 weeks"], ["Platform", "Web · HubSpot"]].map(([l, v]) => (
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 20, padding: "3px 10px", marginBottom: 14 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 10, color: ACC, fontFamily: "monospace" }}>UX Design — Web Platform</span>
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 10, color: "#fff" }}>Making advocacy feel<br />like it's working.</h1>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 520 }}>A gamified task system that turned email-based advocacy into a measurable, rewarding experience — with 89% onboarding completion from day one.</p>
        </div>

        {/* Platform preview */}
        <div style={{ borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: 16, marginBottom: 36, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 32, borderRadius: 8, border: `1px solid ${ACC}33`, background: `${ACC}0a`, padding: "0 12px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 11, color: ACC }}>Welcome Sarah · Streak 🔥 5 days</span>
          </div>
          <div style={{ height: 50, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "8px 12px" }}>
            <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", marginBottom: 3 }}>Your next task</div>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Contact your school board rep · 3 min · 3 steps</div>
          </div>
          <div style={{ height: 24, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", padding: "0 12px", display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.38)" }}>🌐 Community: 847 actions this month</span>
          </div>
        </div>

        {/* 00 Overview */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="00 · Overview" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
            <StatCard value="89%" label="Onboarding completion" />
            <StatCard value="3×" label="Task completion rate" />
            <StatCard value="–60%" label="Admin time saved" />
            <StatCard value="4.6/5" label="Usability score" />
          </div>
          <Card><SL label="Core problem" /><p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>Members were motivated — but the system gave them no feedback, no visible progress, no clear next step. Advocacy felt like shouting into a void.</p></Card>
        </div>

        {/* 01 Brief */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="01 · The Brief" />
          <h2 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10, lineHeight: 1.3 }}>Build a digital platform to boost member engagement in advocacy.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {["Email-only org — no existing platform","Members motivated but underutilised","No tracking of member participation","Admin spending 60%+ on coordination"].map(c => (
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
              { m: "Member interviews (8)", i: "Wanted to act but didn't know the next step. 'Email asks' had no defined steps or time estimate." },
              { m: "Admin interviews (3)", i: "60% of admin time was tracking who did what, following up, confirming completion." },
              { m: "Behavioural analysis", i: "Bounded asks (specific, timed, 3 steps max) got 3× the completion rate of open-ended ones." },
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
          <div style={{ background: `${ACC}0a`, border: `1px solid ${ACC}22`, borderRadius: 12, padding: "18px 20px" }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontStyle: "italic", marginBottom: 10 }}>"Members aren't motivated enough."</p>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 10 }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Make participation feel like it's working — so motivation sustains itself."</p>
            </div>
          </div>
        </div>

        {/* 04 Exploration */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="04 · Exploration" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[
              { l: "Community forum", s: "Rejected", c: "#ef4444", r: "Adds noise without direction. Problem was clarity, not connection." },
              { l: "Event calendar", s: "Rejected", c: "#f97316", r: "Time-fixed events miss members who can't attend." },
              { l: "Task-based gamification", s: "Chosen", c: "#22c55e", r: "Bounded tasks + points + milestones address every research insight." },
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
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="05 · Key Decisions" />
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { n: "01", t: "Tasks must feel completable", d: "Verb-first, time estimate, step-by-step, single completion button." },
              { n: "02", t: "First task in session one", d: "Cut 3-screen onboarding. Platform explains itself by being used." },
              { n: "03", t: "Community counter, not leaderboard", d: "Low-ranked users disengaged. Everyone contributes to one shared number." },
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
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="06 · Final Design" />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {["Dashboard — streak, next task, community counter", "Task detail — verb-first, time, step reveal, completion", "Milestones — 50/100 to Advocate badge", "Admin — create task with validation + preview"].map(s => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.52)" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACC, flexShrink: 0 }} />{s}
              </div>
            ))}
          </div>
        </div>

        {/* 07 Testing */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="07 · Testing" />
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {["Onboarding skimmed → cut to first task immediately", "Leaderboard made rank 20+ disengage → removed entirely", "Task steps read as list → step-reveal added", "Points had no meaning → anchored to milestone badge"].map(f => (
              <div key={f} style={{ display: "flex", gap: 8, padding: "9px 11px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", marginTop: 3, flexShrink: 0 }} />{f}
              </div>
            ))}
          </div>
        </div>

        {/* 08 Outcomes */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="08 · Outcomes" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            <StatCard value="89%" label="Onboarding completion" />
            <StatCard value="3×" label="Task completion rate" />
            <StatCard value="4.6/5" label="Usability score" />
          </div>
        </div>

        {/* 09 Reflection */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, marginBottom: 28 }}>
          <SL label="09 · Reflection" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {["Research showed motivation wasn't the problem.", "Gamification must reflect real impact, not just activity.", "Leaderboard finding only emerged with real usage time.", "I'd push for 2–3 week member pilot next time."].map(r => (
              <div key={r} style={{ borderLeft: "2px solid rgba(255,255,255,0.07)", paddingLeft: 12 }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>FFF · Karan Gadhave</span>
          <div style={{ fontSize: 11, padding: "7px 16px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
