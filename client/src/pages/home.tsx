import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import {
  useReveal, useSplitHeadline, useCountUp, useParallax,
  useScramble, useVelocityMarquee, useHeroSpotlight,
  useImageReveal, useTextChars, useScrambleCycle, useAboutScrub, useTextHighlight, useCardCursor, useScrambleHover,
} from "@/lib/motion";
import { Ticker, Icon } from "@/components/visuals";
import { Brand } from "@/components/brands";
import gfxHero from "@assets/gfx-hero.jpg";
import kgLogo from "@assets/kg-logo.png";
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

type Work = { href: string; title: string; tag: string; img: string;
  blurb: string; meta: string[]; soon?: boolean };

const WORK: Work[] = [
  { href: "/lionfish-case-study", title: "Lionfish Cyber Security",
    tag: "Cybersecurity", img: lionfishThumb,
    blurb: "I rebuilt an enterprise security platform around role-based navigation, compliance workflows and multi-tenant access. Live in production.",
    meta: ["Lead designer", "Platform redesign"] },
  { href: "/liffo-case-study", title: "Liffo Healthcare",
    tag: "Healthcare", img: liffoThumb,
    blurb: "I designed ambulance dispatch and home care for the Indian market, from the ground up across 34 screens.",
    meta: ["Lead designer", "34 screens"] },
  { href: "/2hour-learning-case-study", title: "2 Hour Learning",
    tag: "EdTech", img: twoHLThumb,
    blurb: "I built a four-page system for a committee purchase, each page answering what one stakeholder needs to know.",
    meta: ["Lead designer", "4-page system"] },
  { href: "/fff-case-study", title: "Future First Families",
    tag: "Advocacy", img: fffThumb,
    blurb: "I designed a single-page advocacy site that builds credibility first, then asks parents to act.",
    meta: ["Lead designer", "Conversion design"] },
  { href: "/acedboard-case-study", title: "Acedboard Proconomics",
    tag: "Fintech", img: acedboardThumb, soon: true,
    blurb: "I designed a cost-benefit analysis engine inside a project management tool, so delivery teams can run the financial model themselves.",
    meta: ["Lead designer", "Case study in progress"] },
];

export default function Home() {
  useReveal();
  useSplitHeadline(".pf-home-hero h1", 0.2);
  useCountUp("[data-to]");
  useImageReveal(".pf-proj-media");
  useTextChars(".pf-proj-title", 0.016);
  useTextChars(".pf-about-title", 0.012);
  useTextChars(".pf-close-title", 0.014);
  useImageReveal(".pf-about-portrait");
  useAboutScrub(".pf-about-inner");
  useTextHighlight(".pf-about-copy");
  useScramble("[data-scramble]");
  useScrambleHover("[data-scramble-hover]");
  useScrambleCycle(".pf-cycle", DISCIPLINES, { chars: "!<>-_\\/[]{}=+*^?#", speed: 0.45, revealDelay: 0.4, hold: 1.5 });
  useVelocityMarquee(".pf-ticker-track");
  useHeroSpotlight(".pf-home-hero", ".pf-hero-reveal");
  useCardCursor(".pf-card:not(.pf-card-cta)", ".pf-follow");
  const [scrolled, setScrolled] = useState(false);
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
          Open to product design roles and freelance work <b>Pune, India and remote</b>
        </div>
        <div className="pf-follow"><span>View case study</span></div>
        <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
          <Link href="/" className="logo" aria-label="Karan Gadhave, home">
            <img src={kgLogo} alt="Karan Gadhave" className="mark" />
          </Link>
          <div className="links">
            <a href="#work">Work</a><a href="#about">About</a><a href="#process">Process</a>
          </div>
          <a className="pf-navcta" href="#contact">Get in touch</a>
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
        <h1 style={{ opacity: 0 }}>
          A senior product designer for <em className="pf-em">complex software.</em>
        </h1>
      </header>

      {/* ── IDENTITY STRIP, the case study meta table, on the index ── */}
      <div className="pf-wrap" data-reveal style={{ ["--d" as any]: ".74s" }}>
        <div className="pf-idbar">
          <div>
            <p className="k">Role</p>
            <p className="v">Senior Product Designer</p>
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

          <div className="pf-about-top">
            <figure className="pf-portrait pf-about-portrait">
              <img src={photoPortrait} alt="Karan Gadhave" loading="lazy" />
            </figure>

            <div className="pf-about-side">
              <h2 className="pf-about-title">
                Most of my work is software people never chose to use.
              </h2>
              <div className="pf-about-sig">
                <p className="n">Karan Gadhave</p>
                <p className="r">Senior Product Designer, Pune</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pf-about-statement">
          <p className="pf-about-copy">
            Admin portals, compliance tools, dashboards. The kind of software someone is handed on
            their first day and then uses for the next three years. I have spent five years on
            products like that, usually as the only designer on them, and I stay through build and
            QA because that is where a design either survives or quietly falls apart.
          </p>
        </div>

        <div className="pf-outcomes" style={{ marginTop: 70 }}>
          {[
            { n: <span data-to="5" data-pad="1" data-suffix="+" className="pf-num">0</span>, l: "Years designing products" },
            { n: <span data-to="5" data-pad="1" className="pf-num">0</span>, l: "Platforms shipped to production" },
            { n: <span data-to="22" data-suffix="%" className="pf-num">0</span>, l: "Onboarding retention lift, Pepper Penny" },
            { n: <span data-to="4" data-pad="1" className="pf-num">0</span>, l: "Industries: healthcare, fintech, edtech, security" },
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
            <h2>How I run a project, start to finish.</h2>
            <p>Enterprise platforms carry roles, permissions and existing behaviour. I work in this
              order so those constraints stay visible from the start.</p>
          </div>

          <ol className="pf-steps">
            {[
              { n: "01", icon: "user-search", t: "Discover", d: "I start with the people who own the process. Who does what, what they answer for, and why the system ended up this way. Most of the real constraints surface here rather than later." },
              { n: "02", icon: "drafting-compass", t: "Architect", d: "I settle the structure before anything gets styled. Navigation, flows and wireframes, agreed on paper, because changing this later means changing code." },
              { n: "03", icon: "figma", t: "Design", d: "Interface design in Figma, with libraries and variables so it holds together as it grows. If a platform already runs on Ant Design or Material, I build on that rather than fight it." },
              { n: "04", icon: "rocket", t: "Ship", d: "I stay on it. Refining the backlog, writing acceptance criteria, reviewing what gets built and working with QA until it is actually live." },
            ].map((b, i) => (
              <li className="pf-step-card" key={b.t} data-reveal style={{ ["--d" as any]: `${i * 0.06}s` }}>
                <div className="hd">
                  <span className="idx">{b.n}</span>
                  <Icon name={b.icon} />
                </div>
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
          <p className="c" data-scramble>Five projects</p>
        </div>

        <div className="pf-projects">
          {WORK.map((w) => (
            <Link href={w.href} key={w.href}
              className={`pf-card${w.soon ? " soon" : ""}`} data-cta={w.soon ? "In progress" : "View case study"}>
                <div className="pf-card-media pf-proj-media">
                  <img src={w.img} alt={w.title} loading="lazy" />
                  <span className="tag">{w.tag}</span>
                </div>
                <div className="pf-card-body">
                  <h3 className="pf-proj-title">{w.title}</h3>
                  <p className="blurb">{w.blurb}</p>
                  <ul className="meta">
                    {w.meta.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </div>
            </Link>
          ))}
          <a className="pf-card pf-card-cta" href="#contact">
            <div className="pf-card-cta-inner">
              <span className="k">Next</span>
              <h3>Your platform next.</h3>
              <p>Tell me what you are building and where it is getting stuck.</p>
              <span className="go">Get in touch<i>&#8594;</i></span>
            </div>
          </a>
        </div>
      </section>

      {/* ── CAPABILITIES, numbered index ── */}
      <section id="services" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 20 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 34 }} data-reveal>
          <span className="pf-chip ghost">What I do</span>
          <p style={{ font: "400 13px var(--font-mono)", color: "var(--mut)" }}>For teams and clients</p>
        </div>
        {[
          { n: "01", t: "Platform redesign",
            d: "An existing product that has grown awkward, rebuilt around roles, permissions and the screens people actually use. This is most of my work." },
          { n: "02", t: "New product design",
            d: "Zero to one. Research, information architecture and the full screen set, through to a build-ready Figma file." },
          { n: "03", t: "Design system",
            d: "A component library with variables and Dev Mode handoff, built so the team can keep using it after I hand it over." },
          { n: "04", t: "Design audit",
            d: "A structured review of a live product: where people get stuck, what the current architecture is costing you, and what to fix first." },
          { n: "05", t: "Marketing site",
            d: "Pages built around one decision rather than a template. Content structure, design and build in WordPress or HubSpot." },
          { n: "06", t: "Rapid prototyping",
            d: "Working screens instead of static mockups. I use Figma MCP, Claude Code and Cursor to put a real, clickable idea in front of people in days." },
        ].map((s, i) => (
          <div className="pf-numrow" key={s.t} data-reveal style={{ ["--d" as any]: `${i * 0.06}s` }}>
            <span className="no">{s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </section>


      {/* ── STACK ── */}
      <section id="stack" className="pf-wrap pf-stack">
        <div className="pf-workhead">
          <span className="pf-chip">Technologies</span>
          <p className="c" data-scramble>What I build with</p>
        </div>

        <p className="pf-stack-line" data-reveal>
          AI has changed how quickly I reach a working screen. The judgement about what belongs on it has not changed.
        </p>

        <div className="pf-toolrows">
          {[
            { k: "AI", lead: true, tools: [
              ["Claude Code", "claude"], ["Figma MCP", "figma"],
              ["Cursor", "cursor"], ["Higgsfield", ""], ["Replit", "replit"],
            ]},
            { k: "Design", tools: [
              ["Figma", "figma"], ["FigJam", "figma"], ["Miro", "miro"],
            ]},
            { k: "Systems & platforms", tools: [
              ["Ant Design", "antdesign"], ["Material Design", "materialdesign"],
              ["HubSpot", "hubspot"], ["WordPress", "wordpress"],
              ["GSAP", "greensock"], ["HTML / CSS", "html5"],
            ]},
            { k: "Delivery", tools: [
              ["Jira", "jira"], ["Confluence", "confluence"], ["Scrum / Kanban", ""],
            ]},
          ].map((g, i) => (
            <div className={`pf-toolrow${g.lead ? " lead" : ""}`} key={g.k}
                 data-reveal style={{ ["--d" as any]: `${i * 0.07}s` }}>
              <p className="h">{g.k}</p>
              <ul>
                {g.tools.map(([n, brand]) => (
                  <li key={n}><Brand name={brand} /><span>{n}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>

      {/* ── CONTACT, the closing section ── */}
      <section id="contact" className="pf-close">
        <div className="pf-wrap">
          <div className="pf-close-head" data-reveal>
            <span className="pf-chip ghost">Contact</span>
            <span className="pf-close-year">{new Date().getFullYear()}</span>
          </div>

          <div className="pf-close-grid">
            <div className="pf-close-main">
              <h2 className="pf-close-title">Let's work together.</h2>

              <a
                className="pf-close-mail"
                href={`mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry")}`}
              >
                <span data-scramble-hover>{EMAIL}</span>
                <i aria-hidden="true" />
              </a>

              <button
                type="button"
                className={`pf-copy${copied ? " ok" : ""}`}
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? "Copied" : "Copy address"}
              </button>
            </div>

            <aside className="pf-close-side">
              <div className="r" data-reveal>
                <span className="k">Status</span>
                <span className="v accent"><span className="pf-dot" />Open to new work</span>
              </div>
              <div className="r" data-reveal style={{ ["--d" as any]: ".06s" }}>
                <span className="k">Available for</span>
                <span className="v">Full-time roles and freelance projects</span>
              </div>
              <div className="r" data-reveal style={{ ["--d" as any]: ".12s" }}>
                <span className="k">Based in</span>
                <span className="v">Pune, India · IST (GMT+5:30)</span>
              </div>
              <div className="r" data-reveal style={{ ["--d" as any]: ".18s" }}>
                <span className="k">Response</span>
                <span className="v">Within 24 hours</span>
              </div>
              <div className="r" data-reveal style={{ ["--d" as any]: ".24s" }}>
                <span className="k">Elsewhere</span>
                <span className="v">
                  <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
