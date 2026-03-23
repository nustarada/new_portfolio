/* Layout C — Card Grid / Bento · Future First Families */
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
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: 3, background: "rgba(255,255,255,0.05)" }}>
        <div style={{ height: "100%", width: `${progress}%`, background: ACC, transition: "width 0.1s" }} />
      </div>
      <div style={{ position: "sticky", top: 3, zIndex: 99, borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "10px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", background: BG }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: ACC, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: "#000", opacity: 0.9 }} />
          </div>
          <span style={{ fontSize: 13, fontWeight: 700 }}>Future First Families</span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}>Advocacy Platform · Case Study</span>
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
              <span style={{ fontSize: 10, color: ACC, fontFamily: "monospace" }}>UX Design — Web Platform</span>
            </div>
            <h1 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 10 }}>Making advocacy feel like it's working.</h1>
            <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 14 }}>
              {["Lead Designer", "4 weeks", "Web · HubSpot"].map(t => (
                <span key={t} style={{ fontSize: 10, padding: "4px 10px", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[["89%", "onboarding"], ["3×", "completion"], ["–60%", "admin time"]].map(([v, l]) => (
              <div key={l} style={{ flex: 1, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "12px 14px", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{v}</span>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard mock */}
        <div style={{ borderRadius: 14, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: 16, marginBottom: 40, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 30, borderRadius: 8, border: `1px solid ${ACC}33`, background: `${ACC}0a`, padding: "0 12px", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: ACC }} />
            <span style={{ fontSize: 11, color: ACC }}>Welcome Sarah · Streak 🔥 5 days</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 8 }}>
            <div style={{ height: 46, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "8px 12px" }}>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", marginBottom: 3 }}>NEXT TASK</div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Contact your school board rep · 3 min</div>
            </div>
            <div style={{ height: 46, borderRadius: 8, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "8px 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.22)", marginBottom: 2 }}>COMMUNITY</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#22c55e" }}>847 actions</div>
            </div>
          </div>
        </div>

        {/* 00 Overview */}
        <SL label="00 · Overview" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <Card>
            <SL label="Core problem" />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>Members were motivated to advocate but the platform gave them no feedback, no visible progress, and no clear next step. Advocacy felt like shouting into a void.</p>
          </Card>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {[["89%", "Onboarding"], ["3×", "Completion"], ["–60%", "Admin time"], ["4.6/5", "Usability"]].map(([v, l]) => (
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
              <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>Build a platform to boost member engagement in advocacy.</h2>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>4 weeks. Email-only org. No existing platform. Needed measurable engagement from the first session.</p>
            </Card>
          </div>
          <div>
            <SL label="02 · Discovery" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                "8 interviews: members wanted to act but lacked clear next steps",
                "3 admin interviews: 60% of time spent on coordination",
                "Bounded asks got 3× the completion of open-ended ones",
              ].map(i => (
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
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.38)", fontStyle: "italic", marginBottom: 10 }}>"Members aren't motivated enough."</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", lineHeight: 1.5 }}>"Make participation feel like it's working — so motivation sustains itself."</p>
            </div>
          </div>
          <div>
            <SL label="04 · Exploration" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {[
                { l: "Community forum", s: "Rejected", c: "#ef4444" },
                { l: "Event calendar", s: "Rejected", c: "#f97316" },
                { l: "Task-based gamification", s: "Chosen", c: "#22c55e" },
              ].map(({ l, s, c }) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 9, background: "rgba(255,255,255,0.02)" }}>
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.62)" }}>{l}</span>
                  <span style={{ fontSize: 9, fontFamily: "monospace", padding: "2px 7px", borderRadius: 10, background: c + "22", color: c }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 05 Decisions */}
        <SL label="05 · Key Decisions" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 36 }}>
          {[
            { n: "01", t: "Tasks feel completable", d: "Verb-first, time estimate, step-by-step, single completion button." },
            { n: "02", t: "First task in session one", d: "Cut onboarding screens. Platform explains itself by being used." },
            { n: "03", t: "Community counter not leaderboard", d: "Rank 20+ disengaged. One shared number for everyone." },
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          {["Dashboard — streak, next task, community counter", "Task detail — verb-first, time, step reveal, completion", "Milestones — 50/100 to Advocate badge", "Admin — create task with validation + preview"].map((s, i) => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACC, flexShrink: 0 }} />{s}
            </div>
          ))}
        </div>

        {/* 07 Testing + 08 Outcomes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
          <div>
            <SL label="07 · Testing" />
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {["Onboarding cut → first task", "Leaderboard removed → counter", "Step reveal → one at a time", "Points → milestone anchor"].map(f => (
                <div key={f} style={{ display: "flex", gap: 7, padding: "8px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#f59e0b", marginTop: 2, flexShrink: 0 }} />{f}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SL label="08 · Outcomes" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["89%", "Onboarding"], ["3×", "Completion"], ["–60%", "Admin"], ["4.6/5", "Usability"]].map(([v, l]) => (
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
          {["Motivation wasn't the problem — the system was.", "Gamification must reflect real impact, not just activity.", "The leaderboard finding only emerged with real usage.", "I'd push for a 2–3 week member pilot next time."].map(r => (
            <Card key={r}><p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{r}</p></Card>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.18)", fontFamily: "monospace" }}>FFF · Karan Gadhave</span>
          <div style={{ fontSize: 11, padding: "7px 16px", borderRadius: 20, background: "#fff", color: "#000", fontWeight: 600 }}>Get in touch →</div>
        </div>
      </div>
    </div>
  );
}
