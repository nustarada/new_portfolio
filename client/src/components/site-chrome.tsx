import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "wouter";
import { useTextChars, useScrambleHover } from "@/lib/motion";
import kgLogo from "@assets/kg-logo.png";

export const EMAIL = "gadhavekaran@gmail.com";

/* ════════════════════════════════════════════════════════════════
   Chrome shared by the index and every case study, so the two never
   drift apart: the announcement bar, the nav, and the closing block
   that runs into the footer.
   ════════════════════════════════════════════════════════════════ */

/* ── announcement bar + nav ────────────────────────────────── */
export function SiteNav({ home = false }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* in-page anchors on the index, routed anchors everywhere else */
  const to = (hash: string) => (home ? hash : `/${hash}`);

  return createPortal(<>
    <div className="pf-announce">
      Open to product design roles and freelance work <b>Pune, India and remote</b>
    </div>
    <div className="pf-follow"><span>View case study</span></div>
    <nav className={`pf-nav${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="logo" aria-label="Karan Gadhave, home">
        <img src={kgLogo} alt="Karan Gadhave" className="mark" />
      </Link>
      <div className="links">
        <a href={to("#work")}>Work</a>
        <a href={to("#about")}>About</a>
        <a href={to("#process")}>Process</a>
      </div>
      <a className="pf-navcta" href={to("#contact")}>Get in touch</a>
    </nav>
  </>, document.body);
}

/* ── closing contact block ─────────────────────────────────── */
export function SiteClose() {
  const [copied, setCopied] = useState(false);

  useTextChars(".pf-close-title", 0.014);
  useScrambleHover("[data-scramble-hover]");

  /* mailto: fails silently for anyone without a mail client set up */
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

  return (
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
  );
}

/* ── footer ────────────────────────────────────────────────── */
export const PageFooter = () => (
  <footer className="pf-footer">
    <div className="pf-wrap">
      <div className="pf-foot-grid">
        <div className="col brand">
          <p className="nm">Karan Gadhave</p>
          <p className="ln">Product and UX designer working end to end on complex platforms, from research through to release.</p>
        </div>
        <div className="col">
          <p className="h">Navigate</p>
          <Link href="/">Home</Link>
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#process">Process</a>
        </div>
        <div className="col">
          <p className="h">Elsewhere</p>
          <a href="https://www.linkedin.com/in/karan-gadhave/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
        <div className="col">
          <p className="h">Colophon</p>
          <p className="ln">Designed and built by hand. React, GSAP, Cabinet Grotesk and Switzer.</p>
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

/* ── reading progress, case studies only ───────────────────── */
export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.width = `${(window.scrollY / h) * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return createPortal(<div className="pf-progress" ref={bar} />, document.body);
}
