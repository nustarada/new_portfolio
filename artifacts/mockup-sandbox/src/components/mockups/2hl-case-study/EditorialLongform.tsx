export function EditorialLongform() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a] font-['Georgia',serif]">
      {/* Top nav strip */}
      <div className="border-b border-black/8 px-8 py-4 flex items-center justify-between">
        <p className="text-xs tracking-widest uppercase font-['Inter',sans-serif] text-black/30">Portfolio · Karan Gadhave</p>
        <p className="text-xs text-black/30 font-['Inter',sans-serif]">2 Hour Learning · Product Design</p>
      </div>

      {/* Article */}
      <article className="max-w-[680px] mx-auto px-8 py-16">
        {/* Kicker */}
        <p className="text-xs tracking-widest uppercase font-['Inter',sans-serif] text-black/40 mb-4">B2B · EdTech · Landing Page Design</p>

        {/* Headline */}
        <h1 className="text-[52px] font-black leading-[1.05] mb-6 tracking-tight">
          One message<br />can't close<br />a committee.
        </h1>

        {/* Deck */}
        <p className="text-xl text-black/60 leading-relaxed mb-10 font-['Inter',sans-serif] border-l-4 border-black/10 pl-5">
          When schools buy software, at least three people have to say yes — and they each have a different job, a different fear, and a different idea of what 'success' means. Here's how I designed for all of them.
        </p>

        <div className="w-12 h-px bg-black/20 mb-10" />

        {/* Body */}
        <section className="prose-custom space-y-7 text-[#2a2a2a] leading-[1.75] text-[17px]">
          <p>
            2 Hour Learning came to me with a single homepage that was trying to talk to everyone. It had the right instincts — clear brand, clean design — but it was written for a hypothetical "decision-maker," which meant it wasn't quite speaking to any actual person who landed on it.
          </p>

          <p>
            After talking to a few school administrators, the pattern became obvious. <em>Principals care about reputation.</em> Deans of academics care about teacher workload. Board members care about whether the numbers work. These aren't subtle differences in preference — they're completely different definitions of the problem.
          </p>

          <h2 className="text-2xl font-black mt-10 mb-4 tracking-tight text-[#1a1a1a]">
            Design to the fear, not the feature.
          </h2>

          <p>
            The instinct in B2B design is to lead with the product — what it does, how it works, what features it has. But I've noticed that the most effective landing pages for high-consideration purchases don't open with the product at all. They open with the reader's situation.
          </p>

          <p>
            For the head of school, that means: "What if your school became the one families move for?" That's not a product claim. It's an ambition — one that the right principal immediately recognizes as theirs.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-black/20 pl-6 my-8 text-black/60 italic text-lg leading-relaxed font-['Inter',sans-serif]">
            "Design to the fear" means: figure out what each stakeholder is most afraid of getting wrong, then open with evidence that addresses it directly.
          </blockquote>

          <p>
            For the dean of academics, the fear isn't strategic — it's practical. They're picturing the next staff meeting where they announce a new platform, and they need to know the answer to every pushback before it happens. So the page leads with workflow fit, teacher testimonials, and a six-week implementation timeline.
          </p>

          <p>
            For the board member, the fear is financial. They're not going to be moved by a principal's testimonial. They need a number — and ideally, a model they can input their own data into and arrive at the number themselves. The page leads with "$240K average increase in per-pupil funding within 24 months." That's the opening sentence.
          </p>

          <h2 className="text-2xl font-black mt-10 mb-4 tracking-tight text-[#1a1a1a]">
            What this looked like in practice.
          </h2>

          <p>
            The system is four pages: one general brand homepage on WordPress, and three HubSpot pages targeted at each stakeholder. The brand is consistent across all of them — the visual system, the product name, the color palette. What changes is the <em>information architecture</em>: what leads, what's foregrounded, what proof is selected, and what the CTA asks the reader to do.
          </p>

          {/* Decision grid */}
          <div className="my-8 rounded-xl border border-black/8 overflow-hidden not-prose">
            <table className="w-full text-sm font-['Inter',sans-serif]">
              <thead>
                <tr className="bg-black/[0.03] border-b border-black/8">
                  <th className="text-left py-3 px-4 text-black/40 font-medium text-xs tracking-wide uppercase">Page</th>
                  <th className="text-left py-3 px-4 text-black/40 font-medium text-xs tracking-wide uppercase">Opens with</th>
                  <th className="text-left py-3 px-4 text-black/40 font-medium text-xs tracking-wide uppercase">CTA</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { page: "Homepage", opens: "Narrative — school transformation story", cta: "See how it works" },
                  { page: "Head of School", opens: "Peer proof — enrollment inquiry increase", cta: "Request a principal briefing" },
                  { page: "Dean of Academics", opens: "Workflow fit — no disruption message", cta: "See the teacher dashboard" },
                  { page: "Board Member", opens: "ROI — $240K per-pupil funding increase", cta: "Get the ROI model" },
                ].map((row, i) => (
                  <tr key={row.page} className={i < 3 ? "border-b border-black/5" : ""}>
                    <td className="py-3 px-4 font-medium text-black/80">{row.page}</td>
                    <td className="py-3 px-4 text-black/55">{row.opens}</td>
                    <td className="py-3 px-4 text-black/55 italic">{row.cta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black mt-10 mb-4 tracking-tight text-[#1a1a1a]">
            What I'd do differently.
          </h2>

          <p>
            The biggest gap was measurement. I set up the pages but didn't push hard enough for consistent UTM tracking from the sales team — so we couldn't measure which persona page was actually converting better in practice. I'd build that into the brief from day one now.
          </p>

          <p>
            I'd also want to run at least one round of actual stakeholder testing — having a real board member walk through the board page, not just a stakeholder assumption exercise. The hypotheses I built are well-grounded, but hypotheses aren't the same as confirmed behavior.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-black/10 flex items-center justify-between font-['Inter',sans-serif]">
          <div>
            <p className="text-xs text-black/30 uppercase tracking-widest mb-1">Karan Gadhave</p>
            <p className="text-xs text-black/25">Product Designer</p>
          </div>
          <button className="px-5 py-2.5 bg-[#1a1a1a] text-white text-sm font-semibold rounded-lg">
            Get in touch
          </button>
        </div>
      </article>
    </div>
  );
}
