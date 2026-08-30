import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  Decisions, Statement, Outcomes, MoreProjects, PageFooter,
} from "@/components/case-study/template";

import fffVideo from "@assets/FFF website video (video-converter.com)_1754054201797.webm";
import fffThumb from "@assets/FutureFirstFamilies_thumbnail_1770103573837.jpg";
import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.jpg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.jpg";

const ACCENT = "#4A4E9E";

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
    <CaseStudyShell accent={ACCENT} project="Future First Families" year="2025">
      <CaseHero
        title="Future First Families"
        tagline={<>Recruiting a parent into a <em className="pf-em">movement</em>, not selling them a product.</>}
        meta={[
          ["Client", "Future First Families, by 2 Hour Learning"],
          ["Industry", "EdTech · Parent advocacy"],
          ["Services", "Conversion Strategy, Messaging Architecture, Web Design"],
          ["Role", "Lead Designer"],
          ["Scope", "Single-page advocacy site · HubSpot"],
          ["Year", "2025 · 4 weeks"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="The claim is almost unbelievable: two hours of school a day, and double the academic growth. For a busy private-school parent who has heard 'revolutionary' before, the barrier isn't awareness, it's disbelief. And the company can't adopt itself into a school; parents have to ask for it."
          solution="A single scrolling page engineered as a persuasion arc, aspiration first, then the problem with the status quo, then layered proof, then one repeated ask. A persistent 'Lead the Change' CTA follows the whole scroll so the next step is always one tap away, the moment conviction peaks."
        />
        <Timeline phases={[
          { label: "Phase 01", title: "Audience + Strategy", body: "Understanding the skeptical parent, what they want for their child, what they've heard before, and what evidence would actually move them from doubt to action." },
          { label: "Phase 02", title: "Persuasion Architecture", body: "Sequencing the page as a conviction curve: aspiration, the problem, three layers of proof, then the ask, with nothing competing for attention." },
          { label: "Phase 03", title: "Design + Build", body: "Visual design and HubSpot build, including the persistent movement CTA, video testimonial modules and the nominate-a-school path." },
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
            <p>The live site, a single scrolling arc from aspiration to action</p>
            <p><b>Full walkthrough</b></p>
          </div>
        </div>
      </div>

      <section className="pf-wrap">
        <SectionHead
          label="The Problem"
          title={<>The barrier isn't awareness. It's <em className="pf-em">disbelief.</em></>}
          body="A parent's first reaction to 'two hours of school' is that it sounds too good to be true. Every design decision follows from that: the page has to earn credibility before it asks for anything, and the ask has to be frictionless when it finally comes."
        />
        <div className="pf-three">
          {[
            { t: "Disbelief", d: "The first emotion to overcome, the claim sounds impossible on its face." },
            { t: "Inertia", d: "Even a convinced parent needs a single, frictionless next step to act on." },
            { t: "Influence", d: "Private-school parents can genuinely move their school, if they're mobilised." },
          ].map((x, i) => (
            <div key={x.t} data-reveal style={{ ["--d" as any]: `${i * 0.08}s`, borderLeft: "2px solid var(--pf-accent)", paddingLeft: 20 }}>
              <p style={{ font: "400 21px var(--font-display)", color: "var(--pf-accent)", marginBottom: 8 }}>{x.t}</p>
              <p style={{ fontSize: 14.5, lineHeight: 1.65, color: "var(--soft)" }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Statement kicker="The reframe">
        The site isn't selling a learning product. It's recruiting a <em className="pf-em">parent into a movement</em>, and belief has to be earned before the ask.
      </Statement>

      <section className="pf-wrap">
        <SectionHead
          label="Layered proof"
          title={<>No single claim has to carry the <em className="pf-em">whole weight of doubt.</em></>}
          body="Different parents are convinced by different evidence, so the page stacks three kinds, and each one re-earns the next scroll."
        />
        <div className="pf-three">
          {[
            { t: "Numbers", d: "Hard outcome statistics, measurable improvement, national-ranking percentiles, engagement, answering 'does it actually work?'" },
            { t: "Contrast", d: "A head-to-head comparison against the traditional full-day, same-pace classroom that reframes the status quo as the risky choice." },
            { t: "Faces", d: "Real student-voice video testimonials, the emotional proof that turns a statistic into something a parent believes." },
          ].map((x, i) => (
            <div className="pf-ecard" key={x.t} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
              <p className="lbl">{x.t}</p>
              <p className="note" style={{ marginTop: 0 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>What makes the page <em className="pf-em">persuade</em> rather than merely inform.</>} />
        <Decisions items={[
          { n: "01", title: "Lead with the parent's aspiration, not the product",
            why: "The hero is 'Empower your Child. Influence your school', the parent's dream, before a single feature. You earn the right to explain the method by first naming what they want.",
            tradeoff: "Delays the 'how', deliberately, because the 'whether' must land first." },
          { n: "02", title: "Beat disbelief with layered proof, not one big number",
            why: "Statistics, a traditional-vs-new comparison, and real student videos each answer a different flavour of doubt. No single claim has to carry the skepticism alone.",
            tradeoff: "A longer page, but each proof layer re-earns the scroll." },
          { n: "03", title: "One persistent CTA, the whole scroll",
            why: "A floating 'Lead the Change' pill follows the reader so the next step is always one tap away, at the moment conviction peaks, wherever on the page that happens.",
            tradeoff: "Gives up secondary asks, but a movement needs one rallying action." },
          { n: "04", title: "Frame it as a movement, not a purchase",
            why: "'Join the Parent Movement', 'Nominate School', advocacy tips, the language recruits an advocate rather than closing a sale, which fits how schools actually adopt: parent demand.",
            tradeoff: "Softer on direct conversion, right for an advocacy goal, not e-commerce." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Delivered as a live marketing site, these are <em className="pf-em">properties of the design</em>, not post-launch analytics.</>}
        />
        <Outcomes items={[
          { n: <>1 <em className="pf-em">page</em></>, l: "A single scrolling arc engineered to move doubt to action" },
          { n: <>0<em className="pf-em">3</em></>, l: "Proof layers, statistics, comparison and student voices" },
          { n: <>1 <em className="pf-em">CTA</em></>, l: "A persistent 'Lead the Change' ask, the whole scroll" },
          { n: <>0<em className="pf-em">4</em></>, l: "Weeks, strategy, design and HubSpot build, end to end" },
        ]} />
      </section>

      <section className="pf-wrap">
        <MoreProjects cards={[
          { href: "/2hour-learning-case-study", img: twoHLThumb, title: "2 Hour Learning", sub: "EdTech · B2B pages", badge: "2025" },
          { href: "/lionfish-case-study", img: lionfishThumb, title: "Lionfish", sub: "Cybersecurity · Redesign", badge: "Live" },
          { href: "/liffo-case-study", img: liffoThumb, title: "Liffo", sub: "Healthcare · Mobile", badge: "2024" },
        ]} />
      </section>

      <PageFooter />
    </CaseStudyShell>
  );
}
