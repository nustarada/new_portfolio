import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import {
  useReveal, useSplitHeadline, useCountUp, useParallax,
  useMarquee, useHeroSpotlight,
  useImageReveal, useTextChars, useScrambleCycle, useAboutScrub, useTextHighlight, useCardCursor,
} from "@/lib/motion";
import { Ticker, Icon } from "@/components/visuals";
import { Brand } from "@/components/brands";
import gfxHero from "@assets/gfx-hero.jpg";
import heroVideo from "@assets/cosmos.mp4";
import kgLogo from "@assets/kg-logo.png";
import photoPortrait from "@assets/photo-portrait.jpg";
import { SiteNav, SiteClose, PageFooter } from "@/components/site-chrome";
import "@/styles/portfolio.css";


const EMAIL = "gadhavekaran@gmail.com";

const DISCIPLINES = [
  "platform redesigns",
  "design systems",
  "information architecture",
  "0 to 1 products",
];

/* The work is anonymised while the case studies are being rewritten: no
   client names, no client imagery. Sectors only. */
const SECTORS = ["Cybersecurity", "Healthcare", "EdTech", "Advocacy", "Fintech"];

export default function Home() {
  useReveal();
  useSplitHeadline(".pf-home-hero h1", 0.2);
  useCountUp("[data-to]");
  useImageReveal(".pf-proj-media");
  useTextChars(".pf-proj-title", 0.016);
  useTextChars(".pf-about-title", 0.012);
  useImageReveal(".pf-about-portrait");
  useAboutScrub(".pf-about-inner");
  useTextHighlight(".pf-about-copy");
  useScrambleCycle(".pf-cycle", DISCIPLINES, { chars: "!<>-_\\/[]{}=+*^?#", speed: 0.45, revealDelay: 0.4, hold: 1.5 });
  useMarquee(".pf-ticker-track");
  useHeroSpotlight(".pf-home-hero", ".pf-hero-reveal");
  useCardCursor(".pf-card:not(.pf-card-cta)", ".pf-follow");
  const [scrolled, setScrolled] = useState(false);
  const revealVideo = useRef<HTMLVideoElement>(null);
  const [finePointer] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer:fine)").matches,
  );

  /* half speed. Browsers reset the rate when the source reloads, so it is
     reapplied on metadata rather than set once */
  useEffect(() => {
    const vids = Array.from(
      document.querySelectorAll<HTMLVideoElement>(".pf-home-hero video"),
    );
    const apply = () => vids.forEach((v) => { v.playbackRate = 0.5; });
    apply();
    vids.forEach((v) => v.addEventListener("loadedmetadata", apply));
    return () => vids.forEach((v) => v.removeEventListener("loadedmetadata", apply));
  }, [finePointer]);

  /* the two layers play the same file independently, so nudge the reveal back
     into step whenever it drifts far enough to be visible at the lens edge */
  useEffect(() => {
    if (!finePointer) return;
    const id = setInterval(() => {
      const base = document.querySelector<HTMLVideoElement>(".pf-hero-bg video");
      const top = revealVideo.current;
      if (!base || !top || base.readyState < 2 || top.readyState < 2) return;
      if (Math.abs(base.currentTime - top.currentTime) > 0.06) top.currentTime = base.currentTime;
    }, 1000);
    return () => clearInterval(id);
  }, [finePointer]);
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
      <SiteNav home />

      {/* ── HERO ── */}
      <header className="pf-home-hero pf-wrap">
        <div className="pf-hero-bg" aria-hidden="true">
          <video src={heroVideo} poster={gfxHero} autoPlay muted loop playsInline preload="auto" />
        </div>
        {/* the lens needs a second, brighter copy to dodge through. It is only
            ever visible to a mouse, so touch devices decode one video, not two */}
        {finePointer && (
          <div className="pf-hero-reveal" aria-hidden="true">
            <video ref={revealVideo} src={heroVideo} autoPlay muted loop playsInline preload="auto" />
          </div>
        )}
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
                There is no such thing as a boring product. Only a badly organised one.
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
            Admin portals, compliance tools, dashboards. I have spent five years designing the
            software people are given rather than the software they choose, usually as the only
            designer on the project. I take it from research and architecture through to the built
            screens, and I stay through QA, because that is where a design either survives or
            quietly falls apart.
          </p>
        </div>

        <div className="pf-outcomes" style={{ marginTop: 70 }}>
          {[
            { n: <span data-to="5" data-pad="1" data-suffix="+" className="pf-num">0</span>, l: "Years designing products" },
            { n: <span data-to="40" data-suffix="+" className="pf-num">0</span>, l: "Products and platforms designed" },
            { n: <span data-to="6" data-pad="1" data-suffix="+" className="pf-num">0</span>, l: "Apps designed and built with AI" },
            { n: <span data-to="35" data-suffix="%" className="pf-num">0</span>, l: "Rise in user satisfaction after a platform redesign" },
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
              { n: "01", icon: "user-search", t: "Discover", d: "I start with the people who own the process. AI handles the notes and the legacy documentation, so the time goes on the conversations." },
              { n: "02", icon: "drafting-compass", t: "Architect", d: "Navigation, flows and wireframes, agreed on paper. Changing this later means changing code, so it stays a judgement call." },
              { n: "03", icon: "terminal", t: "Prototype", d: "Claude Code and Replit put a working version in front of stakeholders before sign-off. They react to a product, not a picture." },
              { n: "04", icon: "figma", t: "Design", d: "Figma, with libraries and variables so it holds together as it grows. If a platform runs on Ant Design or Material, I build on it." },
              { n: "05", icon: "rocket", t: "Ship", d: "I stay on it. Backlog, acceptance criteria, build reviews and QA, until it is actually live." },
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

      {/* ── WORK, showcase ── */}
      <section id="work" className="pf-wrap" style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div className="pf-workhead">
          <span className="pf-chip">Selected work</span>
          <p className="c">In progress</p>
        </div>

        <div className="pf-underway" data-reveal>
          <p className="k">Under construction</p>
          <p className="t">The case studies are being rewritten.</p>
          <p className="d">
            Five shipped products across enterprise security, healthcare, education,
            advocacy and finance. The write-ups are coming back shortly. Ask me about
            any of them in the meantime.
          </p>
          <ul className="s">
            {SECTORS.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>

        <a className="pf-nextstrip" href="#contact" data-reveal>
          <span className="k">Next</span>
          <h3>Your platform next.</h3>
          <p>Tell me what you are building and where it is getting stuck.</p>
          <span className="go">Get in touch<i>&#8594;</i></span>
        </a>
      </section>

      {/* ── CAPABILITIES, numbered index ── */}
      <section id="services" className="pf-wrap" style={{ paddingTop: 110, paddingBottom: 20 }}>
        <div className="pf-workhead" data-reveal>
          <span className="pf-chip">What I do</span>
          <p className="c">For teams and clients</p>
        </div>
        <div className="pf-bento">
          {[
            { n: "01", size: "lg", t: "Platform redesign",
              d: "An existing product that has grown awkward, rebuilt around roles, permissions and the screens people actually use. This is most of my work." },
            { n: "02", size: "lg", t: "AI feature design",
              d: "Interfaces for generative features: what the user is asked for, how a streaming answer behaves, where the model shows its sources, and what happens when it gets something wrong. The design problem is trust and recovery, not the chat box." },
            { n: "03", size: "sm", t: "New product design",
              d: "Zero to one. Research, information architecture and the full screen set, through to a build-ready Figma file." },
            { n: "04", size: "sm", t: "Design system",
              d: "A component library with variables and Dev Mode handoff, built so the team can keep using it after I hand it over." },
            { n: "05", size: "sm", t: "Design audit",
              d: "A structured review of a live product: where people get stuck, what the current architecture is costing you, and what to fix first." },
            { n: "06", size: "sm", t: "Rapid prototyping",
              d: "Working screens instead of static mockups. Figma MCP, Claude Code and Cursor put a real, clickable idea in front of people in days." },
            { n: "07", size: "wide", t: "Marketing site",
              d: "Pages built around one decision rather than a template. Content structure, design and build in WordPress or HubSpot." },
          ].map((s, i) => (
            <div className={`pf-bento-cell ${s.size}`} key={s.t} data-reveal
                 style={{ ["--d" as any]: `${i * 0.05}s` }}>
              <span className="no">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ── STACK ── */}
      <section id="stack" className="pf-wrap pf-stack">
        <div className="pf-workhead">
          <span className="pf-chip">Technologies</span>
          <p className="c">What I build with</p>
        </div>

        <p className="pf-stack-line" data-reveal>
          AI has changed how quickly I reach a working screen. The judgement about what belongs on it has not changed.
        </p>

        {/* Tiers, not six equal rows: the craft leads, AI sits beside it, and
            the build stack pairs off below so a group of eight never shares a
            row with a group of two. */}
        <div className="pf-tiers">
          {[
            { lead: true, cols: [
              { k: "Design", tools: [
                ["Figma", "figma"], ["FigJam", "figma"], ["Miro", "miro"],
              ]},
              { k: "AI", hot: true, tools: [
                ["Claude Code", "claude"], ["Figma MCP", "figma"],
                ["Replit", "replit"], ["Higgsfield", "higgsfield"],
              ]},
            ]},
            { cols: [
              { k: "Front-end", tools: [
                ["React", "react"], ["Next.js", "nextdotjs"], ["TypeScript", "typescript"],
                ["Vite", "vite"], ["Tailwind CSS", "tailwindcss"],
                ["GSAP", "greensock"], ["Framer Motion", "framer"], ["HTML / CSS", "html5"],
              ]},
              { k: "Back-end & data", tools: [
                ["Node.js", "nodedotjs"], ["Express", "express"],
                ["PostgreSQL", "postgresql"], ["Drizzle ORM", "drizzle"], ["Zod", "zod"],
              ]},
            ]},
            { cols: [
              { k: "Platforms", tools: [
                ["HubSpot", "hubspot"], ["WordPress", "wordpress"],
              ]},
              { k: "Delivery", tools: [
                ["Jira", "jira"], ["Confluence", "confluence"], ["Scrum / Kanban", ""],
              ]},
            ]},
          ].map((tier, ti) => (
            <div className={`pf-tier${tier.lead ? " lead" : ""}`} key={ti}>
              {tier.cols.map((g, gi) => (
                <div className="t" key={g.k} data-reveal
                     style={{ ["--d" as any]: `${(ti * 2 + gi) * 0.06}s` }}>
                  <p className={`h${g.hot ? " hot" : ""}`}>{g.k}</p>
                  <ul>
                    {g.tools.map(([n, brand]) => (
                      <li key={n}><Brand name={brand} /><span>{n}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>

      <SiteClose />
      <PageFooter />
    </div>
  );
}
