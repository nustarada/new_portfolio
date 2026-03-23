import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface NavSection { id: string; title: string; }
interface MetaItem   { label: string; value: string; }

interface Props {
  sections:     NavSection[];
  accentColor:  string;
  projectTitle: string;
  projectTag:   string;
  meta:         MetaItem[];
  progress:     number;
}

export function CaseStudySidebar({ sections, accentColor, projectTitle, projectTag, meta, progress }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [sections]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const activeIdx = sections.findIndex(s => s.id === activeId);

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 z-40 hidden lg:flex flex-col bg-[#090910]"
      style={{ width: 208, borderRight: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Scroll-progress strip on far left edge */}
      <div className="absolute left-0 top-0 w-[2px] h-full pointer-events-none" style={{ background: "rgba(255,255,255,0.04)" }}>
        <div
          style={{
            height: `${progress * 100}%`,
            background: accentColor,
            opacity: 0.55,
            transition: "height 0.12s linear",
            borderRadius: "0 0 2px 0",
          }}
        />
      </div>

      {/* Project identity + back link */}
      <div className="px-5 pt-6 pb-5 flex-shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <Link href="/">
          <span
            className="inline-flex items-center gap-1.5 hover:text-white/70 transition-colors cursor-pointer mb-5"
            style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.25)" }}
          >
            <ArrowLeft style={{ width: 12, height: 12 }} />
            back
          </span>
        </Link>
        <p style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 6 }}>
          {projectTag}
        </p>
        <p className="text-white albert-sans-medium leading-tight" style={{ fontSize: 17, fontWeight: 800 }}>
          {projectTitle}
        </p>
      </div>

      {/* Section navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2.5">
        {sections.map((s, i) => {
          const isActive = s.id === activeId;
          const isPast   = i < activeIdx;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="w-full flex items-start gap-2.5 px-2 py-[7px] rounded-lg text-left mb-px transition-colors"
              style={{ background: isActive ? "rgba(255,255,255,0.04)" : "transparent" }}
            >
              {/* Status dot */}
              <div
                className="flex-shrink-0 rounded-full transition-all"
                style={{
                  width: 7, height: 7, marginTop: 7,
                  background: isActive ? accentColor : isPast ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.08)",
                  transform: isActive ? "scale(1.4)" : "scale(1)",
                }}
              />

              {/* Label */}
              <div className="flex-1 min-w-0">
                <p style={{ fontSize: 9, fontFamily: "monospace", color: isActive ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.16)", marginBottom: 2 }}>
                  {String(i).padStart(2, "0")}
                </p>
                <p
                  className="leading-snug"
                  style={{
                    fontSize: 12,
                    color: isActive ? "#fff" : isPast ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.25)",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {s.title}
                </p>
              </div>

              {/* Active accent rule */}
              {isActive && (
                <div
                  className="flex-shrink-0 w-[2px] self-stretch rounded-full"
                  style={{ background: accentColor, opacity: 0.4, minHeight: 30, margin: "-7px 0" }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Project meta */}
      <div className="px-5 py-4 flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {meta.map(({ label, value }) => (
          <div key={label} className="mb-3 last:mb-0">
            <p style={{ fontSize: 9, fontFamily: "monospace", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>
              {label}
            </p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.52)" }}>{value}</p>
          </div>
        ))}
      </div>
    </aside>
  );
}
