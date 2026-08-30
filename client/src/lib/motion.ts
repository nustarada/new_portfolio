import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

/* A curve per job, instead of one expo-out doing everything. */
export const EASE = {
  enter: "power3.out",     // content arriving
  rise:  "expo.out",       // large elements settling
  crisp: "power2.out",     // small, quick UI
  move:  "power2.inOut",   // repositioning
} as const;

export const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion:reduce)").matches;

/* Scroll-in reveals for every [data-reveal] on the page. */
export function useReveal() {
  useEffect(() => {
    document.body.classList.add("pf-loaded");
    if (reduced()) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.set("[data-reveal]", { opacity: 0, y: 26 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1, y: 0, duration: 0.9,
            ease: EASE.enter, stagger: { each: 0.07, from: "start" },
          }),
      });
    });
    const id = setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => { clearTimeout(id); ctx.revert(); };
  }, []);
}

/* Headline that arrives a line at a time from behind its own mask. */
export function useSplitHeadline(selector: string, delay = 0.15) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    if (reduced()) { gsap.set(el, { opacity: 1 }); return; }

    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "lines", mask: "lines", linesClass: "pf-line" });
      gsap.set(el, { opacity: 1 });
      gsap.from(split.lines, {
        yPercent: 108, duration: 1.05, delay,
        ease: EASE.rise, stagger: 0.09,
      });
    });
    return () => { ctx.revert(); split?.revert(); };
  }, [selector, delay]);
}

/* Count a number up when it scrolls into view. */
export function useCountUp(selector: string) {
  useEffect(() => {
    const nodes = gsap.utils.toArray<HTMLElement>(selector);
    if (!nodes.length) return;
    const ctx = gsap.context(() => {
      nodes.forEach((n) => {
        const to = Number(n.dataset.to || 0);
        const suffix = n.dataset.suffix || "";
        const pad = n.dataset.pad === "1";
        const fmt = (v: number) => {
          const r = Math.round(v);
          return (pad && r < 10 ? "0" + r : String(r)) + suffix;
        };
        if (reduced()) { n.textContent = fmt(to); return; }
        const obj = { v: 0 };
        n.textContent = fmt(0);
        gsap.to(obj, {
          v: to, duration: 1.4, ease: EASE.crisp,
          scrollTrigger: { trigger: n, start: "top 88%", once: true },
          onUpdate: () => { n.textContent = fmt(obj.v); },
        });
      });
    });
    return () => ctx.revert();
  }, [selector]);
}

/* Restrained parallax — depth, not spectacle. */
export function useParallax(selector: string, distance = 46) {
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
        gsap.fromTo(el,
          { yPercent: -distance / 10 },
          {
            yPercent: distance / 10, ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          });
      });
    });
    return () => ctx.revert();
  }, [selector, distance]);
}

export { gsap, ScrollTrigger, SplitText };
