import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import "@/styles/portfolio.css";
import { useReveal } from "@/lib/motion";

export { useReveal };

/* ════════════════════════════════════════════════════════════════
   Shared case-study template, studio structure, paper theme.
   Every case study is: data + an accent colour.
   ════════════════════════════════════════════════════════════════ */

/* ── hooks ─────────────────────────────────────────────────── */
export function useProgress(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (ref.current) ref.current.style.width = `${(window.scrollY / h) * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref]);
}

/* ── page shell ────────────────────────────────────────────── */
export const CaseStudyShell = ({
  accent, project, year, children,
}: { accent: string; project: string; year: string; children: React.ReactNode }) => {
  const prog = useRef<HTMLDivElement>(null);
  useReveal();
  useProgress(prog);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="pf" style={{ ["--pf-accent" as any]: accent, minHeight: "100vh" }}>
      {createPortal(
        <div style={{ ["--pf-accent" as any]: accent }}>
          <div className="pf-progress" ref={prog} />
          <div className="pf-topbar">
            <Link href="/"><a className="back">← Karan Gadhave</a></Link>
            <p className="r">{project} · {year}</p>
          </div>
        </div>, document.body)}
      {children}
    </div>
  );
};

/* ── hero + metadata table ─────────────────────────────────── */
export const CaseHero = ({
  title, tagline, meta,
}: { title: string; tagline: React.ReactNode; meta: Array<[string, React.ReactNode]> }) => (
  <header className="pf-hero pf-wrap">
    <div className="pf-hero-grid">
      <div>
        <h1><span className="pf-mask"><span>{title}</span></span></h1>
        <p className="pf-tagline pf-mask" style={{ ["--d" as any]: ".12s" }}><span>{tagline}</span></p>
      </div>
      <div className="pf-meta" data-reveal style={{ ["--d" as any]: ".3s" }}>
        {meta.map(([k, v]) => (
          <div className="pf-meta-row" key={k}>
            <p className="k">{k}</p>
            <p className="v">{v}</p>
          </div>
        ))}
      </div>
    </div>
  </header>
);

/* ── challenge / solution ──────────────────────────────────── */
export const ChallengeSolution = ({
  challenge, solution,
}: { challenge: React.ReactNode; solution: React.ReactNode }) => (
  <div className="pf-cs">
    <div data-reveal>
      <h2>The Challenge</h2>
      <p>{challenge}</p>
    </div>
    <div data-reveal style={{ ["--d" as any]: ".1s" }}>
      <h2>The <em className="pf-em">Solution</em></h2>
      <p>{solution}</p>
    </div>
  </div>
);

/* ── timeline ──────────────────────────────────────────────── */
export const Timeline = ({
  phases,
}: { phases: Array<{ label: string; title: string; body: string }> }) => (
  <div className="pf-timeline">
    {phases.map((p, i) => (
      <div key={p.label} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
        <p className="ph">{p.label}</p>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
      </div>
    ))}
  </div>
);

/* ── section head ──────────────────────────────────────────── */
export const SectionHead = ({
  label, title, body,
}: { label: string; title?: React.ReactNode; body?: React.ReactNode }) => (
  <div className="pf-shead">
    <p className="pf-label" data-reveal>{label}</p>
    {title && <h2 data-reveal style={{ ["--d" as any]: ".06s" }}>{title}</h2>}
    {body && <p data-reveal style={{ ["--d" as any]: ".12s" }}>{body}</p>}
  </div>
);

/* ── device frames ─────────────────────────────────────────── */
export const Phone = ({ src, alt = "", small = false, style }: { src: string; alt?: string; small?: boolean; style?: React.CSSProperties }) => (
  <div className={`pf-phone${small ? " sm" : ""}`} style={style}><img src={src} alt={alt} /></div>
);

export const Browser = ({ src, alt = "", url, imgId }: { src: string; alt?: string; url: string; imgId?: string }) => (
  <div className="pf-browser">
    <div className="bar"><i /><i /><i /><span className="url">{url}</span></div>
    <img src={src} alt={alt} id={imgId} />
  </div>
);

/* ── showcase band ─────────────────────────────────────────── */
export const ShowcaseBand = ({
  screens, caption, count, small = false, browser,
}: {
  screens?: Array<{ src: string; alt?: string; offset?: number }>;
  browser?: { src: string; url: string; alt?: string };
  caption: string; count?: string; small?: boolean;
}) => {
  const inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = inner.current;
    if (!el || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const phones = Array.from(el.querySelectorAll<HTMLElement>(".pf-phone"));
    const bases = phones.map(p => p.style.transform || "");
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
      phones.forEach((p, i) => { p.style.transform = `${bases[i]} translateX(${dx * (14 + i * 5)}px)`; });
    };
    const band = el.closest(".pf-band");
    band?.addEventListener("mousemove", onMove as EventListener);
    return () => band?.removeEventListener("mousemove", onMove as EventListener);
  }, [screens]);

  return (
    <div className={`pf-band${small ? " sm" : ""}`} data-reveal>
      <div className="pf-wrap">
        {browser ? (
          <Browser src={browser.src} url={browser.url} alt={browser.alt} />
        ) : (
          <div className="pf-phones" ref={inner}>
            {screens?.map((s, i) => (
              <Phone key={i} src={s.src} alt={s.alt} small={small}
                style={s.offset ? { transform: `translateY(${s.offset}px)` } : undefined} />
            ))}
          </div>
        )}
        <div className="pf-cap"><p>{caption}</p>{count && <p><b>{count}</b></p>}</div>
      </div>
    </div>
  );
};

/* ── research collage ──────────────────────────────────────── */
export const Collage = ({
  tiles, caption, count,
}: { tiles: Array<{ src: string; size?: "sm" | "md" | "lg" }>; caption: string; count?: string }) => (
  <div className="pf-collage" data-reveal>
    <div className="pf-collage-track">
      {tiles.map((t, i) => <div className={`pf-tile ${t.size || "md"}`} key={i}><img src={t.src} alt="" /></div>)}
    </div>
    <div className="pf-wrap pf-cap" style={{ paddingTop: 22 }}>
      <p>{caption}</p>{count && <p><b>{count}</b></p>}
    </div>
  </div>
);

/* ── sticky walkthrough ────────────────────────────────────── */
export type Step = { img: string; tag?: string; url?: string; n: string; title: React.ReactNode; body: string; chip?: string };

export const StickyWalkthrough = ({ steps, variant = "mobile" }: { steps: Step[]; variant?: "mobile" | "desktop" }) => {
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const sync = () => {
      const mid = window.innerHeight / 2;
      let best = 0, bd = Infinity;
      stepRefs.current.forEach((s, i) => {
        if (!s) return;
        const r = s.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) { bd = d; best = i; }
      });
      setActive(a => (a === best ? a : best));
    };
    window.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShown(active), 150);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [active]);

  const cur = steps[shown];
  const fading = shown !== active;

  return (
    <div className={`pf-sticky ${variant}`}>
      <div className="pf-stage">
        <div className="pf-stage-wrap">
          {variant === "desktop" ? (
            <div className="pf-browser" style={{ width: "100%" }}>
              <div className="bar"><i /><i /><i /><span className="url">{cur.url}</span></div>
              <img src={cur.img} alt="" style={{ opacity: fading ? 0 : 1 }} />
            </div>
          ) : (
            <>
              <div className="pf-phone"><img src={cur.img} alt="" style={{ opacity: fading ? 0 : 1 }} /></div>
              {cur.tag && <p className="pf-stage-tag">{cur.tag}</p>}
            </>
          )}
        </div>
      </div>
      <div className="pf-steps">
        {steps.map((s, i) => (
          <div className="pf-step" key={i} ref={el => (stepRefs.current[i] = el)}>
            <p className="no">{s.n}</p>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {s.chip && <span className="pf-chip">{s.chip}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── evidence card with animated bars ──────────────────────── */
export const EvidenceCard = ({
  label, bars, bigNum, note, source, delay = 0,
}: {
  label: string;
  bars?: Array<{ name: string; value: string; width: string; color: string }>;
  bigNum?: React.ReactNode; note?: React.ReactNode;
  source?: { text: string; href?: string }; delay?: number;
}) => (
  <div className="pf-ecard" data-reveal style={{ ["--d" as any]: `${delay}s` }}>
    <p className="lbl">{label}</p>
    {bigNum && <p className="bignum">{bigNum}</p>}
    {bars?.map(b => (
      <div className="pf-bar-row" key={b.name}>
        <div className="top"><span className="name">{b.name}</span><span className="val" style={{ color: b.color }}>{b.value}</span></div>
        <div className="pf-bar"><i style={{ width: b.width, background: b.color, opacity: .85 }} /></div>
      </div>
    ))}
    {note && <p className="note">{note}</p>}
    {source && (source.href
      ? <a className="src" href={source.href} target="_blank" rel="noopener noreferrer">{source.text} ↗</a>
      : <span className="src">{source.text}</span>)}
  </div>
);

/* ── before / after, side by side, full images ────────────── */
export const BeforeAfter = ({
  before, after, caption, beforeLabel = "Before", afterLabel = "After",
}: { before: string; after: string; caption?: string; beforeLabel?: string; afterLabel?: string }) => (
  <div data-reveal>
    <div className="pf-ba-pair">
      <div className="pf-ba-col before">
        <p className="tag">{beforeLabel}</p>
        <div className="pf-ba-frame"><img src={before} alt={beforeLabel} loading="lazy" /></div>
      </div>
      <div className="pf-ba-col after">
        <p className="tag">{afterLabel}</p>
        <div className="pf-ba-frame"><img src={after} alt={afterLabel} loading="lazy" /></div>
      </div>
    </div>
    {caption && <p className="pf-ba-caption">{caption}</p>}
  </div>
);

/* ── decisions ─────────────────────────────────────────────── */
export const Decisions = ({
  items,
}: { items: Array<{ n: string; title: string; why: string; tradeoff: string }> }) => (
  <div className="pf-decisions">
    {items.map(d => (
      <div className="pf-drow" key={d.n} data-reveal>
        <p className="no">{d.n}</p>
        <div><h3>{d.title}</h3><p className="why">{d.why}</p></div>
        <p className="trade"><b>Trade-off</b>{d.tradeoff}</p>
      </div>
    ))}
  </div>
);

/* ── big statement ─────────────────────────────────────────── */
export const Statement = ({ kicker, children }: { kicker: string; children: React.ReactNode }) => (
  <div className="pf-statement">
    <p className="k">{kicker}</p>
    <p data-reveal>{children}</p>
  </div>
);

/* ── outcomes ──────────────────────────────────────────────── */
export const Outcomes = ({ items }: { items: Array<{ n: React.ReactNode; l: string }> }) => (
  <div className="pf-outcomes" data-reveal>
    {items.map((o, i) => (
      <div key={i}><p className="n">{o.n}</p><p className="l">{o.l}</p></div>
    ))}
  </div>
);

/* ── validation block ──────────────────────────────────────── */
export const Validation = ({
  title, body, sources,
}: { title: string; body: React.ReactNode; sources?: Array<{ text: string; href: string }> }) => (
  <div className="pf-press" data-reveal style={{ marginTop: 44 }}>
    <div className="badge">↗</div>
    <div>
      <h4>{title}</h4>
      <p>{body}</p>
      {sources && (
        <div className="srcs">
          {sources.map(s => <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer">{s.text} ↗</a>)}
        </div>
      )}
    </div>
  </div>
);

/* ── more projects + footer ────────────────────────────────── */
export type ProjectCard = { href: string; img: string; title: string; sub: string; badge?: string };

export const MoreProjects = ({ cards }: { cards: ProjectCard[] }) => (
  <div className="pf-more">
    <div className="h">
      <p>More projects</p>
      <Link href="/#work"><a>View all →</a></Link>
    </div>
    <div className="pf-cards">
      {cards.map((c, i) => (
        <Link href={c.href} key={c.href}>
          <a className="pf-pcard" data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
            <div className="im"><img src={c.img} alt={c.title} /></div>
            <div className="meta">
              <div><p className="t">{c.title}</p><p className="s">{c.sub}</p></div>
              {c.badge && <p className="badge2">{c.badge}</p>}
            </div>
          </a>
        </Link>
      ))}
    </div>
  </div>
);

export const PageFooter = () => (
  <footer className="pf-footer">
    <div className="pf-wrap">
      <div className="pf-foot-grid">
        <div className="col brand">
          <p className="nm">Karan Gadhave</p>
          <p className="ln">Product &amp; UX designer working end to end on platforms with roles, rules and legacy.</p>
        </div>
        <div className="col">
          <p className="h">Navigate</p>
          <Link href="/"><a>Home</a></Link>
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#process">Process</a>
        </div>
        <div className="col">
          <p className="h">Elsewhere</p>
          <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:gadhavekaran@gmail.com">Email</a>
        </div>
        <div className="col">
          <p className="h">Status</p>
          <p className="live"><span className="pf-dot" />Open to work</p>
          <p className="ln">Pune, India · IST</p>
        </div>
      </div>
      <div className="f">
        <p>© {new Date().getFullYear()} Karan Gadhave</p>
        <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
