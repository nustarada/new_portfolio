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
    const stop = watchLayout();
    return () => { clearTimeout(id); stop(); ctx.revert(); };
  }, []);
}

/* ── keep trigger positions honest ─────────────────────────────
   ScrollTrigger measures start and end once, at creation. The display
   faces arrive from a CDN and the imagery loads lazily, and both reflow
   the page underneath those cached numbers: a scrubbed block then reads
   as though it began before it was reached, because the position it was
   anchored to is no longer where it sits. Re-measure whenever the page
   actually changes height. */
function watchLayout() {
  if (reduced()) return () => {};
  const refresh = () => ScrollTrigger.refresh();

  document.fonts?.ready.then(refresh).catch(() => {});
  window.addEventListener("load", refresh);

  /* lazily loaded images land long after mount, each one shifting what is
     below it */
  const imgs = Array.from(document.images).filter((i) => !i.complete);
  imgs.forEach((i) => i.addEventListener("load", refresh, { once: true }));

  /* and anything else that resizes the document. refresh() can itself nudge
     the document height, so only react to a real change and give up after a
     few rounds, or the observer feeds itself forever */
  let t: ReturnType<typeof setTimeout>;
  let last = document.body.scrollHeight;
  let rounds = 0;
  const ro = new ResizeObserver(() => {
    const h = document.body.scrollHeight;
    if (Math.abs(h - last) < 4 || rounds > 6) return;
    last = h;
    rounds += 1;
    clearTimeout(t);
    t = setTimeout(() => { last = document.body.scrollHeight; refresh(); }, 150);
  });
  ro.observe(document.body);

  return () => {
    window.removeEventListener("load", refresh);
    imgs.forEach((i) => i.removeEventListener("load", refresh));
    clearTimeout(t);
    ro.disconnect();
  };
}

/* ── headline: masked lines ────────────────────────────────── */
export function useSplitHeadline(selector: string, delay = 0.15) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    if (reduced()) { gsap.set(el, { opacity: 1 }); return; }
    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "chars,words,lines" });
      gsap.set(el, { opacity: 1, perspective: 900 });
      gsap.from(split.chars, {
        yPercent: -120,
        rotateX: -85,
        opacity: 0,
        transformOrigin: "50% 100% -30px",
        duration: 0.9,
        delay,
        ease: "back.out(1.6)",
        stagger: { each: 0.022, from: "random" },
      });
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

/* ── hover: scramble a label back into itself ──────────────── */
export function useScrambleHover(selector: string) {
  useEffect(() => {
    if (reduced()) return;
    const nodes = gsap.utils.toArray<HTMLElement>(selector);
    const kill: Array<() => void> = [];
    nodes.forEach((n) => {
      const text = n.textContent || "";
      const run = () =>
        gsap.to(n, {
          duration: 0.85, ease: "none", overwrite: true,
          scrambleText: { text, chars: "01<>/_-.@", speed: 0.7, revealDelay: 0.08 },
        });
      const parent = n.closest("a") || n;
      parent.addEventListener("mouseenter", run);
      kill.push(() => parent.removeEventListener("mouseenter", run));
    });
    return () => kill.forEach((f) => f());
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
export function useMarquee(trackSel: string, duration = 30) {
  useEffect(() => {
    const track = document.querySelector<HTMLElement>(trackSel);
    if (!track || reduced()) return;
    const ctx = gsap.context(() => {
      /* the track holds two copies of the list, so wrapping at half its
         width puts it back exactly where it started */
      const half = track.scrollWidth / 2;
      gsap.to(track, {
        x: -half, duration, ease: "none", repeat: -1,
        modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % half) },
      });
    });
    return () => ctx.revert();
  }, [trackSel, duration]);
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

/* ── hero: a spotlight that follows the cursor, revealing the
   background at full strength. Hero only; normal cursor after. ── */
export function useHeroSpotlight(heroSel: string, revealSel: string, dotSel?: string) {
  useEffect(() => {
    if (reduced() || window.matchMedia("(pointer:coarse)").matches) return;
    const hero = document.querySelector<HTMLElement>(heroSel);
    const reveal = document.querySelector<HTMLElement>(revealSel);
    const dot = dotSel ? document.querySelector<HTMLElement>(dotSel) : null;
    if (!hero || !reveal) return;

    const R = { v: 0 };
    const pos = { x: innerWidth / 2, y: 260 };
    /* a soft radial mask, so the lens fades out instead of cutting a hard edge */
    const apply = () => {
      const m = `radial-gradient(circle ${R.v}px at ${pos.x}px ${pos.y}px,` +
                ` #000 0%, rgba(0,0,0,.92) 46%, rgba(0,0,0,.45) 74%, transparent 100%)`;
      reveal.style.webkitMaskImage = m;
      reveal.style.maskImage = m;
    };

    const qx = gsap.quickTo(pos, "x", { duration: 0.5, ease: EASE.crisp, onUpdate: apply });
    const qy = gsap.quickTo(pos, "y", { duration: 0.5, ease: EASE.crisp, onUpdate: apply });
    const dx = dot ? gsap.quickTo(dot, "x", { duration: 0.22, ease: EASE.crisp }) : null;
    const dy = dot ? gsap.quickTo(dot, "y", { duration: 0.22, ease: EASE.crisp }) : null;

    let inside = false;
    const setInside = (on: boolean) => {
      if (on === inside) return;
      inside = on;
      hero.classList.toggle("cursor-live", on);
      gsap.to(R, {
        v: on ? 150 : 0, duration: on ? 0.6 : 0.4,
        ease: on ? EASE.rise : EASE.crisp, overwrite: true, onUpdate: apply,
      });
      if (dot) gsap.to(dot, { opacity: on ? 1 : 0, scale: on ? 1 : 0.4, duration: 0.35, overwrite: true });
    };

    const move = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const within = e.clientX >= r.left && e.clientX <= r.right &&
                     e.clientY >= r.top && e.clientY <= r.bottom;
      setInside(within);
      if (!within) return;
      qx(e.clientX); qy(e.clientY - r.top);
      dx?.(e.clientX); dy?.(e.clientY);
    };

    if (dot) gsap.set(dot, { opacity: 0, scale: 0.4, xPercent: -50, yPercent: -50 });
    apply();
    window.addEventListener("mousemove", move);
    const out = () => setInside(false);
    document.addEventListener("mouseleave", out);
    /* scrolling past the hero without moving the mouse must also dismiss it */
    const onScroll = () => {
      const r = hero.getBoundingClientRect();
      if (r.bottom <= 0 || r.top >= innerHeight) setInside(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", out);
      window.removeEventListener("scroll", onScroll);
    };
  }, [heroSel, revealSel, dotSel]);
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


/* ── About: portrait scales and rises as the block scrubs past ── */
export function useAboutScrub(selector: string) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(selector);
    if (!root || reduced()) return;
    const ctx = gsap.context(() => {
      const portrait = root.querySelector(".pf-about-portrait");
      const copy = root.querySelector(".pf-about-copy");
      if (portrait) {
        gsap.fromTo(portrait,
          { scale: 0.88, y: 60 },
          { scale: 1, y: 0, ease: "none",
            scrollTrigger: { trigger: root, start: "top 78%", end: "top 26%", scrub: 0.7 } });
      }
      if (copy) {
        gsap.from(copy, {
          opacity: 0, y: 34, duration: 0.9, ease: EASE.enter,
          scrollTrigger: { trigger: copy, start: "top 88%", once: true },
        });
      }
    }, root);
    return () => ctx.revert();
  }, [selector]);
}


/* ── paragraph that lights up word by word as it scrolls ───── */
export function useTextHighlight(selector: string) {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return;
    if (reduced()) { el.style.color = "var(--ink)"; return; }
    let split: SplitText | null = null;
    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "words" });
      gsap.fromTo(split.words,
        { color: "rgba(20,20,20,0.16)" },
        {
          color: "rgba(11,11,13,1)",
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: el,
            /* the statement is close to a full screen tall on a phone, so the
               range is kept tight: any earlier and the opening words resolve
               while still below the fold, any later and it finishes off-screen */
            start: "top 78%",
            end: "bottom 62%",
            scrub: 0.5,
          },
        });
    });
    return () => { ctx.revert(); split?.revert(); };
  }, [selector]);
}


/* ── a CTA pill that rides the cursor across the project cards ──
   overwrite must stay "auto": overwrite:true would kill the quickTo
   tweens driving x/y and the pill would sit still. */
export function useCardCursor(cardSel: string, pillSel: string) {
  useEffect(() => {
    if (reduced() || window.matchMedia("(pointer:coarse)").matches) return;
    const pill = document.querySelector<HTMLElement>(pillSel);
    const cards = gsap.utils.toArray<HTMLElement>(cardSel);
    if (!pill || !cards.length) return;

    const label = pill.querySelector<HTMLElement>("span");
    gsap.set(pill, { opacity: 0, scale: 0.5, xPercent: -50, yPercent: -50, x: -200, y: -200 });

    const qx = gsap.quickTo(pill, "x", { duration: 0.36, ease: EASE.crisp });
    const qy = gsap.quickTo(pill, "y", { duration: 0.36, ease: EASE.crisp });

    let hovering = false;

    /* one window-level listener, so tracking continues over any child */
    const move = (e: MouseEvent) => {
      if (!hovering) return;
      qx(e.clientX);
      qy(e.clientY);
    };
    window.addEventListener("mousemove", move);

    const cleanups: Array<() => void> = [
      () => window.removeEventListener("mousemove", move),
    ];

    cards.forEach((card) => {
      const enter = (e: MouseEvent) => {
        hovering = true;
        if (label) label.textContent = card.dataset.cta || "View case study";
        gsap.set(pill, { x: e.clientX, y: e.clientY });
        gsap.to(pill, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.7)", overwrite: "auto" });
      };
      const leave = () => {
        hovering = false;
        gsap.to(pill, { opacity: 0, scale: 0.5, duration: 0.26, ease: EASE.crisp, overwrite: "auto" });
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    const onScroll = () => {
      if (hovering) return;
      gsap.to(pill, { opacity: 0, scale: 0.5, duration: 0.2, overwrite: "auto" });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((f) => f());
  }, [cardSel, pillSel]);
}

export { gsap, ScrollTrigger, SplitText };
