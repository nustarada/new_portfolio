import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import {
  useReveal, useSplitHeadline, useCountUp, useParallax,
  useScramble, useVelocityMarquee, useHeroSpotlight,
  useImageReveal, useTextChars, useHoverMarquee, useScrambleCycle, useAboutScrub,
} from "@/lib/motion";
import { Ticker } from "@/components/visuals";
import gfxHero from "@assets/gfx-hero.jpg";
import photoPortrait from "@assets/photo-portrait.jpg";
import { PageFooter } from "@/components/case-study/template";
import "@/styles/portfolio.css";

import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.jpg";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.jpg";
import fffThumb from "@assets/FutureFirstFamilies_thumbnail_1770103573837.jpg";

const EMAIL = "gadhavekaran@gmail.com";

const DISCIPLINES = [
  "platform redesigns",
  "design systems",
  "information architecture",
  "0 to 1 products",
];

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
  useSplitHeadline(".pf-home-hero h1", 0.2);
  useCountUp("[data-to]");
  useImageReveal(".pf-proj-media");
  useTextChars(".pf-proj-title", 0.016);
  useTextChars(".pf-about-title", 0.012);
  useImageReveal(".pf-about-portrait");
  useAboutScrub(".pf-about-inner");
  useHoverMarquee(".pf-proj");
  useScramble("[data-scramble]");
  useScrambleCycle(".pf-cycle", DISCIPLINES, { chars: "!<>-_\\/[]{}=+*^?#", speed: 0.45, revealDelay: 0.4, hold: 1.5 });
  useVelocityMarquee(".pf-ticker-track");
  useHeroSpotlight(".pf-home-hero", ".pf-hero-reveal", ".pf-cursor");
  const [scrolled, setScrolled] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const previewImg = useRef<HTMLImageElement>(null);
  const magWrap = useRef<HTMLDivElement>(null);
  const mag = useRef<HTMLAnchorElement>(null);
  const [copied, setCopied] = useState(false);

  /* copy email, mailto: fails silently for anyone without a mail client set up */
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

  return (
    <div className="pf" style={{ minHeight: "100vh" }}>
      {createPortal(<>
        <div className="pf-announce">
          Open to product design roles &amp; freelance <b>Pune, India / remote · replies in 24h</b>
        </div>
        <div className="pf-cursor" ref={cursor} />
        <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
          <Link href="/"><a className="logo">Karan Gadhave</a></Link>
          <div className="links">
            <a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a><a href="#contact">Contact</a>
          </div>
        </nav>
      </>, document.body)}

      {/* ── HERO ── */}
      <header className="pf-home-hero pf-wrap">
        <div className="pf-hero-bg" aria-hidden="true">
          <img src={gfxHero} alt="" loading="eager" />
        </div>
        <div className="pf-hero-reveal" aria-hidden="true">
          <img src={gfxHero} alt="" loading="eager" />
        </div>
        <p className="pf-eyebrow" data-reveal><span className="pf-dot" />Product &amp; UX Designer, available for hire and freelance</p>
        <h1 style={{ opacity: 0 }}>
          Designing digital products people <em className="pf-em">actually trust.</em>
        </h1>
        <p data-reveal style={{ marginTop: 42, fontSize: 17, lineHeight: 1.65, color: "var(--soft)", maxWidth: 470, ["--d" as any]: ".5s" }}>
          Five shipped platforms across healthcare, fintech, edtech and cybersecurity, designed end to end from first research through to production.
        </p>
        <p className="pf-cycleline" data-reveal>
          Currently designing <span className="pf-cycle">platform redesigns</span>
        </p>
        <div style={{ marginTop: 44, display: "flex", gap: 38, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }} data-reveal>
          <a className="pf-cta" href="#work">See the work →</a>
          <a className="pf-cta mut" href="#about">About me</a>
        </div>
      </header>

      {/* ── IDENTITY STRIP, the case study meta table, on the index ── */}
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
      <section id="about" className="pf-wrap pf-about" style={{ paddingTop: 118, paddingBottom: 40 }}>
        <div className="pf-about-inner">
          <div data-reveal><span className="pf-chip">About</span></div>

          <figure className="pf-portrait pf-about-portrait">
            <img src={photoPortrait} alt="Karan Gadhave" loading="lazy" />
          </figure>

          <h2 className="pf-about-title">
            I take messy, complicated platforms and make them feel simple.
          </h2>

          <p className="pf-about-copy" data-reveal>
            I am Karan, a product designer who works end to end: research, architecture,
            systems, UI, and the awkward questions in between. Recent work spans a
            multi-tenant cybersecurity platform redesigned solo and shipped to production,
            a cost benefit engine inside a project tool, and an emergency first healthcare
            app for India.
          </p>
        </div>

        <div className="pf-outcomes" style={{ marginTop: 70 }}>
          {[
            { n: <span data-to="5" data-pad="1" data-suffix="+" className="pf-num">0</span>, l: "Years designing products, research to production" },
            { n: <span data-to="5" data-pad="1" className="pf-num">0</span>, l: "Platforms shipped and live" },
            { n: <span data-to="22" data-suffix="%" className="pf-num">0</span>, l: "Onboarding retention lift at Pepper Penny" },
            { n: <span data-to="4" data-pad="1" className="pf-num">0</span>, l: "Industries: health, fintech, edtech, security" },
          ].map((s, i) => (
            <div key={i} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
              <p className="n">{s.n}</p>
              <p className="l">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS, numbered grid, connected by a rule ── */}
      <section id="process" className="pf-full pf-band-grain">
        <div className="pf-wrap">
          <div className="pf-sechead" data-reveal>
            <span className="pf-chip inv">How I work</span>
            <h2>Four steps, start to shipped.</h2>
            <p>Every platform I take on has roles, rules and legacy. The order below is what
              keeps that from turning into guesswork.</p>
          </div>

          <ol className="pf-steps">
            {[
              { n: "01", t: "Discover", d: "Stakeholder interviews, business process mapping and user journeys. Understanding who does what, and why it works that way today." },
              { n: "02", t: "Architect", d: "Information architecture, screen flows and wireframes. Getting the structure right on paper is cheaper than getting it wrong in code." },
              { n: "03", t: "Design", d: "Figma libraries, variables and Dev Mode handoff, with Ant Design or Material as the base where an enterprise platform calls for one." },
              { n: "04", t: "Ship", d: "Backlog refinement, acceptance criteria, implementation review and QA, right through to release. Not handoff and vanish." },
            ].map((b, i) => (
              <li className="pf-step-card" key={b.n} data-reveal style={{ ["--d" as any]: `${i * 0.06}s` }}>
                <span className="idx">{b.n}</span>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker items={["Product design", "Information architecture", "Design systems", "Platform redesigns", "Research"]} />

      {/* ── WORK — showcase ── */}
      <section id="work" className="pf-wrap" style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div className="pf-workhead">
          <span className="pf-chip">Selected work</span>
          <p className="c" data-scramble>Five projects / 2024 to 2025</p>
        </div>

        <div className="pf-projects">
          {WORK.map((w, i) => (
            <Link href={w.href} key={w.href}>
              <a className={`pf-proj${i % 2 ? " alt" : ""}${w.soon ? " soon" : ""}`}>
                <div className="pf-proj-media">
                  {w.soon
                    ? <div className="ph"><span>Case study in progress</span></div>
                    : <><img src={w.img} alt={w.title} loading="lazy" />
                        <div className="pf-proj-hover">
                          <div className="pf-proj-strip">
                            {[0, 1].map((k) => (
                              <React.Fragment key={k}>
                                {[0, 1, 2, 3].map((j) => (
                                  <span key={`${k}-${j}`}>{w.title}<i>/</i></span>
                                ))}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </>}
                </div>
                <div className="pf-proj-meta">
                  <span className="n">{w.n}</span>
                  <div>
                    <h3 className="pf-proj-title">{w.title}</h3>
                    <p className="tag">{w.tag}</p>
                  </div>
                  <span className="yr">{w.year}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES, numbered index ── */}
      <section id="services" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 34 }} data-reveal>
          <span className="pf-chip ghost">What I do</span>
          <p style={{ font: "400 13px var(--font-mono)", color: "var(--mut)" }}>For teams &amp; clients</p>
        </div>
        {[
          { n: "01", t: "Product & UX design", d: "End to end product design for SaaS, from research and flows to polished, production ready UI." },
          { n: "02", t: "Platform redesigns", d: "Taking dated, tangled products and re-architecting them into modern, coherent experiences, without losing what works." },
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
