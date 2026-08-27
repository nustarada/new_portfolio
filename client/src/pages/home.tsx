import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useReveal } from "@/components/case-study/template";
import { PageFooter } from "@/components/case-study/template";
import "@/styles/portfolio.css";

import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.jpg";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.jpg";
import fffThumb from "@assets/FutureFirstFamilies_thumbnail_1770103573837.jpg";

type Work = { href: string; n: string; title: string; tag: string; year: string; img: string };

const WORK: Work[] = [
  { href: "/lionfish-case-study",       n: "01", title: "Lionfish Cyber Security", tag: "Cybersecurity · Platform redesign", year: "2025", img: lionfishThumb },
  { href: "/acedboard-case-study",      n: "02", title: "Acedboard Proconomics",   tag: "Fintech · CBA engine",              year: "2025", img: acedboardThumb },
  { href: "/liffo-case-study",          n: "03", title: "Liffo Healthcare",        tag: "Healthcare · Mobile, 34 screens",   year: "2024", img: liffoThumb },
  { href: "/2hour-learning-case-study", n: "04", title: "2 Hour Learning",         tag: "EdTech · B2B page system",          year: "2025", img: twoHLThumb },
  { href: "/fff-case-study",            n: "05", title: "Future First Families",   tag: "Advocacy · Conversion design",      year: "2025", img: fffThumb },
];

export default function Home() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const previewImg = useRef<HTMLImageElement>(null);
  const magWrap = useRef<HTMLDivElement>(null);
  const mag = useRef<HTMLAnchorElement>(null);

  /* nav state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* cursor + hover preview follow */
  useEffect(() => {
    if (window.matchMedia("(pointer:coarse)").matches) return;
    let cx = -100, cy = -100, tx = -100, ty = -100, px = 0, py = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf = 0;
    const loop = () => {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      px += (tx - px) * 0.12; py += (ty - py) * 0.12;
      if (cursor.current) { cursor.current.style.left = `${cx}px`; cursor.current.style.top = `${cy}px`; }
      if (preview.current) { preview.current.style.left = `${px}px`; preview.current.style.top = `${py}px`; }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  /* magnetic contact button */
  useEffect(() => {
    const wrap = magWrap.current, btn = mag.current;
    if (!wrap || !btn || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const move = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      btn.style.transform = `translate(${dx * 0.28}px, ${dy * 0.34}px)`;
    };
    const leave = () => {
      btn.style.transition = "transform .5s cubic-bezier(.16,1,.3,1), background .3s";
      btn.style.transform = "translate(0,0)";
      setTimeout(() => { if (btn) btn.style.transition = "background .3s"; }, 500);
    };
    wrap.addEventListener("mousemove", move);
    wrap.addEventListener("mouseleave", leave);
    return () => { wrap.removeEventListener("mousemove", move); wrap.removeEventListener("mouseleave", leave); };
  }, []);

  const enterRow = (img: string) => {
    if (previewImg.current) previewImg.current.src = img;
    preview.current?.classList.add("on");
    cursor.current?.classList.add("big");
    if (cursor.current) cursor.current.textContent = "View";
  };
  const leaveRow = () => {
    preview.current?.classList.remove("on");
    cursor.current?.classList.remove("big");
    if (cursor.current) cursor.current.textContent = "";
  };

  return (
    <div className="pf" style={{ minHeight: "100vh" }}>
      <div className="pf-cursor" ref={cursor} />
      <div className="pf-preview" ref={preview}><img ref={previewImg} src={liffoThumb} alt="" /></div>

      <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/"><a className="logo">Karan Gadhave</a></Link>
        <div className="links">
          <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="pf-home-hero pf-wrap">
        <p className="pf-eyebrow pf-mask"><span><span className="pf-dot" />Product &amp; UX Designer — available for hire &amp; freelance</span></p>
        <h1>
          <span className="pf-mask" style={{ ["--d" as any]: ".08s" }}><span>Designing digital</span></span>
          <span className="pf-mask" style={{ ["--d" as any]: ".18s" }}><span>products people</span></span>
          <span className="pf-mask" style={{ ["--d" as any]: ".28s" }}><span><em className="pf-em">actually trust.</em></span></span>
        </h1>
        <p data-reveal style={{ marginTop: 42, fontSize: 17, lineHeight: 1.65, color: "var(--soft)", maxWidth: 470, ["--d" as any]: ".5s" }}>
          Five shipped platforms across healthcare, fintech, edtech and cybersecurity — designed end-to-end, from first research to production.
        </p>
        <div style={{ marginTop: 54, display: "flex", gap: 38, alignItems: "center", flexWrap: "wrap", ["--d" as any]: ".62s" }} data-reveal>
          <a className="pf-cta" href="#work">See the work →</a>
          <a className="pf-cta mut" href="#about">About me</a>
        </div>
        <div style={{ marginTop: 100, display: "flex", gap: 64, paddingTop: 28, borderTop: "1px solid var(--line)", flexWrap: "wrap", ["--d" as any]: ".74s" }} data-reveal>
          {[["Currently", "Open to full-time & freelance"], ["Focus", "SaaS platforms · complex systems"], ["Based", "Pune, India — working globally"]].map(([k, v]) => (
            <div key={k}>
              <p style={{ font: "500 11px 'Space Mono',monospace", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--mut)", marginBottom: 8 }}>{k}</p>
              <p style={{ fontSize: 15 }}>{v}</p>
            </div>
          ))}
        </div>
      </header>

      {/* ── WORK ── */}
      <section id="work" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 26 }} data-reveal>
          <p className="pf-label">Selected work</p>
          <p style={{ font: "400 13px 'Space Mono',monospace", color: "var(--mut)" }}>2024 — 2026</p>
        </div>
        <div className="pf-worklist">
          {WORK.map((w, i) => (
            <Link href={w.href} key={w.href}>
              <a className="pf-row" data-reveal style={{ ["--d" as any]: `${i * 0.06}s` }}
                 onMouseEnter={() => enterRow(w.img)} onMouseLeave={leaveRow}>
                <span className="n">{w.n}</span>
                <span className="t">{w.title}</span>
                <span className="tag">{w.tag}</span>
                <span className="yr">{w.year}</span>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
        <div style={{ marginBottom: 26 }} data-reveal><p className="pf-label">About</p></div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "start" }} className="pf-about-grid">
          <p className="pf-bigline" data-reveal>
            I take messy, complicated platforms — the ones with roles, rules and legacy — and make them feel <em className="pf-em">simple, considered and calm.</em>
          </p>
          <div data-reveal style={{ ["--d" as any]: ".15s" }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--soft)", marginBottom: 18 }}>
              I'm Karan — a product designer who works end-to-end: research, architecture, systems, UI, and the awkward questions in between.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--soft)" }}>
              Recent work spans a multi-tenant cybersecurity platform redesigned solo and shipped to production, a cost-benefit engine inside a project tool, and an emergency-first healthcare app for India.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", marginTop: 70, borderTop: "1px solid var(--line)" }} className="pf-stats">
          {[["0", "5", "Platforms shipped"], ["0", "4", "Industries — health · fintech · edtech · security"], ["100", "%", "End-to-end — research to production"]].map(([a, b, l], i) => (
            <div className="pf-stat" key={l} data-reveal style={{ ["--d" as any]: `${i * 0.1}s`, padding: "30px 24px 8px 0", borderRight: i < 2 ? "1px solid var(--line)" : "none" }}>
              <p className="num">{a}<em className="pf-em">{b}</em></p>
              <p style={{ font: "500 11px 'Space Mono',monospace", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--mut)", marginTop: 10 }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 26 }} data-reveal>
          <p className="pf-label">Services</p>
          <p style={{ font: "400 13px 'Space Mono',monospace", color: "var(--mut)" }}>For teams &amp; clients</p>
        </div>
        {[
          { n: "01", t: "Product & UX design", d: "End-to-end product design for SaaS — from research and flows to polished, production-ready UI." },
          { n: "02", t: "Platform redesigns", d: "Taking dated, tangled products and re-architecting them into modern, coherent experiences — without losing what works." },
          { n: "03", t: "Design systems", d: "Token-based systems and component libraries that keep large products consistent while they grow." },
        ].map((s, i) => (
          <div key={s.n} data-reveal style={{ ["--d" as any]: `${i * 0.08}s`, display: "grid", gridTemplateColumns: "70px 1fr 1.1fr", gap: 32, alignItems: "baseline", padding: "34px 0", borderBottom: "1px solid var(--line)", borderTop: i === 0 ? "1px solid var(--line)" : undefined }}
               className="pf-svc">
            <span style={{ font: "400 13px 'Space Mono',monospace", color: "var(--mut)" }}>{s.n}</span>
            <h3 style={{ font: "400 26px 'Fraunces',serif" }}>{s.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--soft)" }}>{s.d}</p>
          </div>
        ))}
      </section>

      {/* ── MARQUEE ── */}
      <div className="pf-marquee">
        <div className="pf-marquee-inner">
          {[...Array(2)].map((_, k) => (
            <React.Fragment key={k}>
              <span>UX Design <span style={{ color: "var(--mut)" }}>·</span></span>
              <span><em className="pf-em">Product Design</em> <span style={{ color: "var(--mut)" }}>·</span></span>
              <span>Design Systems <span style={{ color: "var(--mut)" }}>·</span></span>
              <span><em className="pf-em">Research</em> <span style={{ color: "var(--mut)" }}>·</span></span>
              <span>Platform Redesigns <span style={{ color: "var(--mut)" }}>·</span></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── CONTACT ── */}
      <section id="contact" className="pf-wrap" style={{ paddingTop: 130, paddingBottom: 20 }}>
        <p className="pf-label" data-reveal style={{ marginBottom: 34 }}>Contact</p>
        <h2 style={{ font: "300 clamp(44px,6.6vw,92px)/1.08 'Fraunces',serif", letterSpacing: "-.015em", maxWidth: 900 }} data-reveal>
          Let's build something people <em className="pf-em">actually trust.</em>
        </h2>
        <div ref={magWrap} style={{ display: "inline-block", marginTop: 56 }} data-reveal>
          <a className="pf-mag" ref={mag} href="mailto:gadhavekaran@gmail.com">Start a conversation ↗</a>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
