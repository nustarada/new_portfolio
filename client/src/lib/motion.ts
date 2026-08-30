import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { CustomEase } from "gsap/CustomEase";
import { useEffect } from "react";

gsap.registerPlugin(
  ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, ScrambleTextPlugin, CustomEase,
);

/* One signature curve for the site, plus a curve per job. */
CustomEase.create("kg", "M0,0 C0.16,1 0.3,1 1,1");
export const EASE = {
  sig:   "kg",
  enter: "power3.out",
  rise:  "expo.out",
  crisp: "power2.out",
  move:  "power2.inOut",
} as const;

export const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion:reduce)").matches;

/* ── scroll-in reveals ─────────────────────────────────────── */
export function useReveal() {
  useEffect(() => {
    document.body.classList.add("pf-loaded");
    if (reduced()) { gsap.set("[data-reveal]", { opacity: 1, y: 0 }); return; }
    const ctx = gsap.context(() => {
      gsap.set("[data-reveal]", { opacity: 0, y: 26 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%", once: true,
        onEnter: (b) => gsap.to(b, {
          opacity: 1, y: 0, duration: 0.9, ease: EASE.enter, stagger: 0.07,
        }),
      });
    });
    const id = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => { clearTimeout(id); ctx.revert(); };
  }, []);
}

/* ── headline: masked lines ────────────────────────────────── */
export function useSplitHeadline(selector: string, delay = 0.15) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    if (reduced()) { gsap.set(el, { opacity: 1 }); return; }
    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "lines", mask: "lines", linesClass: "pf-line" });
      gsap.set(el, { opacity: 1 });
      gsap.from(split.lines, { yPercent: 110, duration: 1.1, delay, ease: EASE.rise, stagger: 0.09 });
    });
    return () => { ctx.revert(); split?.revert(); };
  }, [selector, delay]);
}

/* ── statement: per-character scrub, letters resolve as you scroll ── */
export function useCharScrub(selector: string) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el || reduced()) return;
    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "chars,words" });
      gsap.from(split.chars, {
        opacity: 0.12, yPercent: 40, rotateX: -60, stagger: 0.012, ease: "none",
        scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 55%", scrub: 0.6 },
      });
    });
    return () => { ctx.revert(); split?.revert(); };
  }, [selector]);
}

/* ── scramble a label into place ───────────────────────────── */
export function useScramble(selector: string) {
  useEffect(() => {
    const nodes = gsap.utils.toArray<HTMLElement>(selector);
    if (!nodes.length || reduced()) return;
    const ctx = gsap.context(() => {
      nodes.forEach((n) => {
        const text = n.textContent || "";
        gsap.to(n, {
          duration: 1.1, ease: "none",
          scrambleText: { text, chars: "upperCase", speed: 0.5, revealDelay: 0.15 },
          scrollTrigger: { trigger: n, start: "top 92%", once: true },
        });
      });
    });
    return () => ctx.revert();
  }, [selector]);
}

/* ── pinned horizontal strip ───────────────────────────────── */
export function useHorizontalPin(sectionSel: string, trackSel: string) {
  useEffect(() => {
    if (reduced()) return;
    const section = document.querySelector<HTMLElement>(sectionSel);
    const track = document.querySelector<HTMLElement>(trackSel);
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const build = () => {
        const distance = track.scrollWidth - window.innerWidth;
        if (distance <= 0) return;
        gsap.to(track, {
          x: -distance, ease: "none",
          scrollTrigger: {
            trigger: section, start: "top top", end: () => "+=" + distance,
            pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true,
          },
        });
      };
      build();
    }, section);
    const id = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => { clearTimeout(id); ctx.revert(); };
  }, [sectionSel, trackSel]);
}

/* ── draw an SVG in as it enters ───────────────────────────── */
export function useDrawSVG(selector: string) {
  useEffect(() => {
    const root = document.querySelector<SVGElement>(selector);
    if (!root) return;
    const strokes = root.querySelectorAll("[data-draw]");
    const dots = root.querySelectorAll("[data-node]");
    if (reduced()) { gsap.set([strokes, dots], { opacity: 1 }); return; }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 92%", once: true },
      });
      tl.from(strokes, { drawSVG: "0%", duration: 1.3, ease: EASE.crisp, stagger: 0.05 })
        .from(dots, { scale: 0, opacity: 0, transformOrigin: "50% 50%",
                      duration: 0.5, ease: "back.out(2)", stagger: 0.04 }, "-=0.8");
      /* keep it alive, gently */
      gsap.to(dots, { attr: { r: "+=1.4" }, duration: 2.2, ease: "sine.inOut",
                      stagger: { each: 0.18, repeat: -1, yoyo: true } });
    }, root as any);
    return () => ctx.revert();
  }, [selector]);
}

/* ── morph a backdrop shape between forms ──────────────────── */
export function useMorph(selector: string, targets: string[]) {
  useEffect(() => {
    const el = document.querySelector(selector);
    if (!el || reduced() || targets.length < 2) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, defaults: { duration: 4.5, ease: "sine.inOut" } });
      targets.forEach((d) => tl.to(el, { morphSVG: d }));
    });
    return () => ctx.revert();
  }, [selector, targets]);
}

/* ── marquee that reacts to scroll velocity ────────────────── */
export function useVelocityMarquee(trackSel: string, base = 0.55) {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>(trackSel);
    if (!track || reduced()) return;
    const ctx = gsap.context(() => {
      const half = track.scrollWidth / 2;
      const loop = gsap.to(track, {
        x: -half, duration: 26, ease: "none", repeat: -1,
        modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % half) },
      });
      const skew = gsap.quickTo(track, "skewX", { duration: 0.5, ease: EASE.crisp });
      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = self.getVelocity();
          loop.timeScale(gsap.utils.clamp(0.25, 6, base + Math.abs(v) / 380));
          skew(gsap.utils.clamp(-14, 14, -v / 260));
          gsap.to({}, { duration: 0.25, onComplete: () => skew(0) });
        },
      });
    });
    return () => ctx.revert();
  }, [trackSel, base]);
}

/* ── counters ──────────────────────────────────────────────── */
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
        const o = { v: 0 };
        n.textContent = fmt(0);
        gsap.to(o, {
          v: to, duration: 1.5, ease: EASE.crisp,
          scrollTrigger: { trigger: n, start: "top 90%", once: true },
          onUpdate: () => { n.textContent = fmt(o.v); },
        });
      });
    });
    return () => ctx.revert();
  }, [selector]);
}

/* ── parallax ──────────────────────────────────────────────── */
export function useParallax(selector: string, amount = 4) {
  useEffect(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
        gsap.fromTo(el, { yPercent: -amount }, {
          yPercent: amount, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });
    return () => ctx.revert();
  }, [selector, amount]);
}

/* ── cursor, driven by quickTo instead of a hand-rolled rAF ── */
export function useCursor(dotSel: string, previewSel: string) {
  useEffect(() => {
    if (reduced() || window.matchMedia("(pointer:coarse)").matches) return;
    const dot = document.querySelector<HTMLElement>(dotSel);
    const prev = document.querySelector<HTMLElement>(previewSel);
    if (!dot) return;
    const dx = gsap.quickTo(dot, "x", { duration: 0.32, ease: EASE.crisp });
    const dy = gsap.quickTo(dot, "y", { duration: 0.32, ease: EASE.crisp });
    const px = prev ? gsap.quickTo(prev, "x", { duration: 0.62, ease: EASE.crisp }) : null;
    const py = prev ? gsap.quickTo(prev, "y", { duration: 0.62, ease: EASE.crisp }) : null;
    const move = (e: MouseEvent) => { dx(e.clientX); dy(e.clientY); px?.(e.clientX); py?.(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [dotSel, previewSel]);
}


/* ── image: clip wipe + inner scale, unmistakably animated ─── */
export function useImageReveal(selector: string) {
  useEffect(() => {
    const wraps = gsap.utils.toArray<HTMLElement>(selector);
    if (!wraps.length) return;
    if (reduced()) { gsap.set(wraps, { clipPath: "inset(0%)" }); return; }
    const ctx = gsap.context(() => {
      wraps.forEach((w) => {
        const img = w.querySelector("img");
        const tl = gsap.timeline({
          scrollTrigger: { trigger: w, start: "top 84%", once: true },
        });
        tl.fromTo(w,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, ease: EASE.rise })
          .fromTo(img, { scale: 1.35 }, { scale: 1, duration: 1.5, ease: EASE.rise }, 0);
      });
    });
    return () => ctx.revert();
  }, [selector]);
}

/* ── text: per-character rise, staggered ───────────────────── */
export function useTextChars(selector: string, stagger = 0.018) {
  useEffect(() => {
    const els = gsap.utils.toArray<HTMLElement>(selector);
    if (!els.length || reduced()) return;
    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {
      els.forEach((el) => {
        const sp = new SplitText(el, { type: "chars,words", mask: "chars" });
        splits.push(sp);
        gsap.from(sp.chars, {
          yPercent: 118, duration: 0.82, ease: EASE.rise, stagger,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    });
    return () => { ctx.revert(); splits.forEach((s) => s.revert()); };
  }, [selector, stagger]);
}

/* ── hover: name marquee across the media ──────────────────── */
export function useHoverMarquee(itemSel: string) {
  useEffect(() => {
    if (reduced()) return;
    const items = gsap.utils.toArray<HTMLElement>(itemSel);
    const kill: Array<() => void> = [];
    items.forEach((item) => {
      const strip = item.querySelector<HTMLElement>(".pf-proj-strip");
      if (!strip) return;
      const loop = gsap.to(strip, {
        xPercent: -50, duration: 9, ease: "none", repeat: -1, paused: true,
      });
      const enter = () => { loop.play(); gsap.to(strip.parentElement, { opacity: 1, duration: 0.35, ease: EASE.crisp }); };
      const leave = () => { loop.pause(); gsap.to(strip.parentElement, { opacity: 0, duration: 0.35, ease: EASE.crisp }); };
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      kill.push(() => { item.removeEventListener("mouseenter", enter); item.removeEventListener("mouseleave", leave); loop.kill(); });
    });
    return () => kill.forEach((f) => f());
  }, [itemSel]);
}


/* ── ScrambleText: cycle a word through a list, forever ────── */
export function useScrambleCycle(
  selector: string,
  phrases: string[],
  opts: { chars?: string; speed?: number; revealDelay?: number; hold?: number } = {},
) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el || phrases.length < 2) return;
    if (reduced()) { el.textContent = phrases[0]; return; }
    const { chars = "upperAndLowerCase", speed = 0.4, revealDelay = 0.35, hold = 1.6 } = opts;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, scrollTrigger: { trigger: el, start: "top 96%" } });
      phrases.forEach((text) => {
        tl.to(el, {
          duration: 1,
          scrambleText: { text, chars, speed, revealDelay, newClass: "pf-scrambling" },
        }).to({}, { duration: hold });
      });
    });
    return () => ctx.revert();
  }, [selector, phrases, opts]);
}

export { gsap, ScrollTrigger, SplitText };
