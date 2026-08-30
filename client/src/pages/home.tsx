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

const EMAIL = "gadhavekaran@gmail.com";

type Work = { href: string; n: string; title: string; tag: string; year: string; img: string; soon?: boolean };

const WORK: Work[] = [
  { href: "/lionfish-case-study",       n: "01", title: "Lionfish Cyber Security", tag: "Cybersecurity · Platform redesign", year: "2025", img: lionfishThumb },
  { href: "/liffo-case-study",          n: "02", title: "Liffo Healthcare",        tag: "Healthcare · Mobile, 34 screens",   year: "2024", img: liffoThumb },
  { href: "/2hour-learning-case-study", n: "03", title: "2 Hour Learning",         tag: "EdTech · B2B page system",          year: "2025", img: twoHLThumb },
  { href: "/fff-case-study",            n: "04", title: "Future First Families",   tag: "Advocacy · Conversion design",      year: "2025", img: fffThumb },
  { href: "/acedboard-case-study",      n: "05", title: "Acedboard Proconomics",   tag: "Fintech · CBA engine",              year: "2025", img: acedboardThumb, soon: true },
];

export default function Home() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const previewImg = useRef<HTMLImageElement>(null);
  const magWrap = useRef<HTMLDivElement>(null);
  const mag = useRef<HTMLAnchorElement>(null);
  const [copied, setCopied] = useState(false);

  /* copy email — mailto: fails silently for anyone without a mail client set up */
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const t = document.createElement("textarea");
      t.value = EMAIL;
      t.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

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

      <div className="pf-announce">
        Open to product design roles &amp; freelance <b>— Pune, India / remote · replies in 24h</b>
      </div>

      <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/"><a className="logo">Karan Gadhave</a></Link>
        <div className="links">
          <a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a>
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
      </header>

      {/* ── IDENTITY STRIP — the case study meta table, on the index ── */}
      <div className="pf-wrap" data-reveal style={{ ["--d" as any]: ".74s" }}>
        <div className="pf-idbar">
          <div>
            <p className="k">Role</p>
            <p className="v">Lead Product Designer</p>
          </div>
          <div>
            <p className="k">Experience</p>
            <p className="v">5+ years · Team Pumpkin</p>
          </div>
          <div>
            <p className="k">Based in</p>
            <p className="v">Pune, India · IST</p>
          </div>
          <div>
            <p className="k">Status</p>
            <p className="v"><span className="live"><span className="pf-dot" />Open to work</span></p>
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
        <div style={{ marginBottom: 34 }} data-reveal><span className="pf-chip">About</span></div>
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
        <div className="pf-outcomes" style={{ marginTop: 70 }}>
          {[
            { n: <>0<em className="pf-em">5</em></>, l: "Years designing products, end to end" },
            { n: <>0<em className="pf-em">5</em></>, l: "Platforms shipped to production" },
            { n: <>22<em className="pf-em">%</em></>, l: "Onboarding retention lift — Pepper Penny" },
            { n: <>0<em className="pf-em">4</em></>, l: "Industries — health · fintech · edtech · security" },
          ].map((s, i) => (
            <div key={i} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
              <p className="n">{s.n}</p>
              <p className="l">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS — bordered boxes ── */}
      <section id="process" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 20 }}>
        <div style={{ marginBottom: 40 }} data-reveal><span className="pf-chip inv">How I work</span></div>
        <div className="pf-boxes">
          {[
            { s: "Step 01", t: "Discover", d: "Stakeholder interviews, business process mapping and user journeys — understanding the roles, rules and legacy before proposing anything." },
            { s: "Step 02", t: "Architect", d: "Information architecture, screen flows and wireframes. Getting the structure right on paper is cheaper than getting it wrong in code." },
            { s: "Step 03", t: "Design", d: "Figma libraries, variables and Dev Mode handoff — with Ant Design and Material as references where an enterprise platform calls for them." },
            { s: "Step 04", t: "Ship", d: "Backlog refinement, acceptance criteria, implementation reviews and QA until it is live. Not handoff-and-vanish." },
          ].map((b, i) => (
            <div className="pf-box" key={b.s} data-reveal style={{ ["--d" as any]: `${i * 0.07}s` }}>
              <div className="hd">
                <span className="step">{b.s}</span>
                <span className="lead" />
                <span className="ttl">{b.t}</span>
              </div>
              <p className="bd">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 34 }} data-reveal>
          <span className="pf-chip">Selected work</span>
          <p style={{ font: "400 13px var(--font-mono)", color: "var(--mut)" }}>2024 — 2026</p>
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
                {w.soon
                  ? <span className="im soon"><span>In progress</span></span>
                  : <span className="im"><img src={w.img} alt={w.title} loading="lazy" /></span>}
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES — numbered index ── */}
      <section id="services" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 34 }} data-reveal>
          <span className="pf-chip ghost">What I do</span>
          <p style={{ font: "400 13px var(--font-mono)", color: "var(--mut)" }}>For teams &amp; clients</p>
        </div>
        {[
          { n: "01", t: "Product & UX design", d: "End-to-end product design for SaaS — from research and flows to polished, production-ready UI." },
          { n: "02", t: "Platform redesigns", d: "Taking dated, tangled products and re-architecting them into modern, coherent experiences — without losing what works." },
          { n: "03", t: "Design systems", d: "Token-based systems and component libraries that keep large products consistent while they grow." },
        ].map((s, i) => (
          <div className="pf-numrow" key={s.n} data-reveal style={{ ["--d" as any]: `${i * 0.07}s` }}>
            <span className="no">{s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="pf-bigcta" data-reveal>
        <div className="pf-wrap">
          <h2>Let's build something people actually trust.</h2>
          <a className="mailto" href="mailto:gadhavekaran@gmail.com">gadhavekaran@gmail.com</a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="pf-wrap" style={{ paddingTop: 130, paddingBottom: 20 }}>
        <div data-reveal style={{ marginBottom: 34 }}><span className="pf-chip ghost">Contact</span></div>

        <div className="pf-contact-channels" data-reveal>
          <div className="pf-contact-row">
            <span className="k">Email</span>
            <span className="v">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button
                type="button"
                className={`pf-copy${copied ? " ok" : ""}`}
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </span>
          </div>
          <div className="pf-contact-row">
            <span className="k">Based in</span>
            <span className="v plain">Pune, India · IST (GMT+5:30)</span>
          </div>
          <div className="pf-contact-row">
            <span className="k">Response</span>
            <span className="v plain">Usually within 24 hours</span>
          </div>
        </div>

        <div ref={magWrap} style={{ display: "inline-block", marginTop: 48 }} data-reveal>
          <a className="pf-mag" ref={mag} href={`mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry")}`}>
            Start a conversation ↗
          </a>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
