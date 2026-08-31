import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  Decisions, Statement, Outcomes, MoreProjects, SiteClose, PageFooter,
} from "@/components/case-study/template";

import fffVideo from "@assets/FFF website video (video-converter.com)_1754054201797.webm";
import fffThumb from "@assets/FutureFirstFamilies_thumbnail_1770103573837.jpg";
import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.jpg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.jpg";


/* The walkthrough clip is 11MB, only fetch it once the reader actually reaches it. */
function LazyVideo({ src, poster }: { src: string; poster: string }) {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || load) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setLoad(true); io.disconnect(); } },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      poster={poster}
      autoPlay loop muted playsInline
      preload="none"
      style={{ display: "block", width: "100%" }}
    />
  );
}

export default function FutureFirstFamiliesCaseStudy() {
  return (
    <CaseStudyShell project="Future First Families" year="2025">
      <CaseHero
        title="Future First Families"
        tagline={<>I built an advocacy site that <em className="pf-em">earns belief before it asks.</em></>}
        meta={[
          ["Client", "Future First Families, by 2 Hour Learning"],
          ["Industry", "EdTech · Parent advocacy"],
          ["Services", "Conversion Strategy, Messaging Architecture, Web Design"],
          ["Role", "Lead Designer, sole designer"],
          ["Scope", "Single-page advocacy site · HubSpot"],
          ["Year", "2025 · 4 weeks"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="The core claim is hard to accept: two hours of school a day, with double the academic growth. For a private-school parent who has heard similar claims before, the barrier is credibility rather than awareness. The company also cannot adopt itself into a school, so parents have to request it."
          solution="A single scrolling page ordered to build the case in sequence: what the parent wants, the problem with the current model, three layers of evidence, then one consistent ask. A persistent 'Lead the Change' CTA follows the scroll so the next step is available at any point."
        />
        <Timeline phases={[
          { label: "Phase 01", title: "Audience + Strategy", body: "I established what the parent wants for their child, what claims they have already encountered, and what evidence would move them to act." },
          { label: "Phase 02", title: "Persuasion Architecture", body: "I ordered the page as a single argument: outcome, problem, three layers of evidence, then the ask, with no competing calls to action." },
          { label: "Phase 03", title: "Design + Build", body: "I handled visual design and the HubSpot build, including the persistent call to action, video testimonial modules and the nominate-a-school path." },
        ]} />
      </div>

      {/* ── Full-bleed product video ── */}
      <div className="pf-band" style={{ marginTop: 70 }} data-reveal>
        <div className="pf-wrap">
          <div className="pf-browser">
            <div className="bar"><i /><i /><i /><span className="url">futurefirstfamilies.com</span></div>
            <LazyVideo src={fffVideo} poster={fffThumb} />
          </div>
          <div className="pf-cap">
            <p>The live site, ordered as a single argument</p>
            <p><b>Full walkthrough</b></p>
          </div>
        </div>
      </div>

      <section className="pf-wrap">
        <SectionHead
          label="The Problem"
          title={<>The barrier is credibility, not <em className="pf-em">awareness.</em></>}
          body="Most parents meet the two-hour claim with scepticism. Every design decision follows from that: the page establishes credibility before making any request, and the request itself is kept simple."
        />
        <div className="pf-three">
          {[
            { t: "Disbelief", d: "The claim is difficult to accept at face value and has to be evidenced." },
            { t: "Inertia", d: "A convinced parent still needs one clear next step to act on." },
            { t: "Influence", d: "Private-school parents can influence adoption decisions at their school." },
          ].map((x, i) => (
            <div key={x.t} data-reveal style={{ ["--d" as any]: `${i * 0.08}s`, borderLeft: "2px solid var(--pf-accent)", paddingLeft: 20 }}>
              <p style={{ font: "400 21px var(--font-display)", color: "var(--pf-accent)", marginBottom: 8 }}>{x.t}</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--soft)" }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Statement kicker="The reframe">
        The site asks a parent to <em className="pf-em">advocate for the programme</em>, not to buy it, so the evidence has to hold up before the ask.
      </Statement>

      <section className="pf-wrap">
        <SectionHead
          label="Layered proof"
          title={<>Three kinds of evidence, so no single claim <em className="pf-em">carries the argument.</em></>}
          body="Different parents are persuaded by different evidence, so the page presents three kinds in sequence."
        />
        <div className="pf-three">
          {[
            { t: "Numbers", d: "Outcome statistics: measurable improvement, national ranking percentiles and engagement data." },
            { t: "Contrast", d: "A direct comparison against the traditional full-day, same-pace classroom." },
            { t: "Faces", d: "Student video testimonials, which give the statistics a human reference point." },
          ].map((x, i) => (
            <div className="pf-ecard" key={x.t} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
              <p className="lbl">{x.t}</p>
              <p className="note" style={{ marginTop: 0 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>The decisions that shape how the page <em className="pf-em">makes its case.</em></>} />
        <Decisions items={[
          { n: "01", title: "Lead with the parent's aspiration, not the product",
            why: "I opened on 'Empower your Child. Influence your school', naming the parent's objective before any feature, and explained the method only after that.",
            tradeoff: "Delays the explanation of how it works, deliberately." },
          { n: "02", title: "Beat disbelief with layered proof, not one big number",
            why: "I layered statistics, a direct comparison and student videos, each addressing a different objection, so no single claim carries the argument alone.",
            tradeoff: "A longer page, but each layer earns the next section." },
          { n: "03", title: "A single call to action, repeated throughout",
            why: "I kept a floating 'Lead the Change' control on the scroll, so the next step is available at whatever point the argument lands.",
            tradeoff: "Gives up secondary calls to action in favour of one clear route." },
          { n: "04", title: "Framed as advocacy rather than a purchase",
            why: "'Join the Parent Movement', 'Nominate School' and the advocacy guidance all ask the reader to act on the school's behalf, which matches how these programmes are actually adopted.",
            tradeoff: "Weaker on direct conversion, appropriate for an advocacy objective." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Delivered as a live marketing site. These describe the <em className="pf-em">design as built</em>, not post-launch analytics.</>}
        />
        <Outcomes items={[
          { n: <>1 <em className="pf-em">page</em></>, l: "Scrolling page, ordered as one continuous argument" },
          { n: <>0<em className="pf-em">3</em></>, l: "Evidence layers: statistics, comparison, student testimonials" },
          { n: <>1 <em className="pf-em">CTA</em></>, l: "Persistent call to action across the full page" },
          { n: <>0<em className="pf-em">4</em></>, l: "Weeks, from strategy through design to HubSpot build" },
        ]} />
      </section>

      <section className="pf-wrap">
        <MoreProjects cards={[
          { href: "/2hour-learning-case-study", img: twoHLThumb, title: "2 Hour Learning", sub: "EdTech · B2B pages", badge: "2025" },
          { href: "/lionfish-case-study", img: lionfishThumb, title: "Lionfish", sub: "Cybersecurity · Redesign", badge: "Live" },
          { href: "/liffo-case-study", img: liffoThumb, title: "Liffo", sub: "Healthcare · Mobile", badge: "2024" },
        ]} />
      </section>

      <SiteClose />
      <PageFooter />
    </CaseStudyShell>
  );
}
