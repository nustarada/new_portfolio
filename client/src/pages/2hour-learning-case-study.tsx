import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, StickyWalkthrough, Decisions, Statement, Outcomes,
  MoreProjects, PageFooter, Browser, type Step,
} from "@/components/case-study/template";

import homepageDesign from "@assets/Homepage (Wordpress)_1756635142322.jpg";
import persona1 from "@assets/Persona 1 (Hubspot)_1756635142323.jpg";
import persona2 from "@assets/Persona 2 (Hubspot)_1756635142324.jpg";
import persona3 from "@assets/Persona 3 (Hubspot)_1756635142324.jpg";

import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import fffThumb from "@assets/FutureFirstFamilies_thumbnail_1770103573837.jpg";

const ACCENT = "#5B4B9E";

const steps: Step[] = [
  { n: "01", img: homepageDesign, url: "2hourlearning.com", chip: "WordPress · discovery",
    title: <>The <em className="pf-em">brand homepage</em></>,
    body: "For school leaders who found 2HL through search or word of mouth, not yet in a buying cycle. Brand narrative and transformation story lead — not a product pitch. CTA: 'See how it works'." },
  { n: "02", img: persona1, url: "2hourlearning.com/head-of-school", chip: "Proof-seeking",
    title: <>Head of School — <em className="pf-em">proof it works</em></>,
    body: "Accountable for reputation and enrolment, so the page leads with 2X-faster outcome charts, results statistics and named testimonials. CTA: 'Let's Talk Results'." },
  { n: "03", img: persona2, url: "2hourlearning.com/academic-lead", chip: "Teacher-first",
    title: <>Academic Lead — <em className="pf-em">mastery, less planning</em></>,
    body: "Owns curriculum and teacher experience, so the page opens on teacher workload and progress tracking backed by MAP Growth data — not the platform's feature list." },
  { n: "04", img: persona3, url: "2hourlearning.com/leadership", chip: "Strategic bet",
    title: <>Owner &amp; Board — <em className="pf-em">an exclusive partnership</em></>,
    body: "\"We quietly built a breakthrough school model. Now we're sharing it.\" Framed as a strategic, future-proof transformation with founding-partner schools. CTA: 'Strategy Call with Leadership'." },
];

export default function TwoHourLearningCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="2 Hour Learning" year="2025">
      <CaseHero
        title={<>2 Hour Learning</> as any}
        tagline={<>One decision, three people who must all say <em className="pf-em">yes.</em></>}
        meta={[
          ["Client", "2 Hour Learning"],
          ["Industry", "EdTech · B2B, private schools"],
          ["Services", "Content Strategy, Messaging Architecture, Web Design"],
          ["Role", "Lead Designer"],
          ["Scope", "4 pages — 1 WordPress + 3 HubSpot"],
          ["Year", "2025"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="Selling software to a school is a committee decision — the head, the academic lead and the owner or board each define 'good' differently. Every lead was being sent to the same generic homepage that tried to speak to all three at once, and answered none of them well enough to convert."
          solution="A system of four pages: one brand homepage for discovery, plus three persona pages, each leading with what that reader actually cares about — proof, teacher workload, or strategic advantage — with a CTA matched to their stage. One shared visual system, so the brand never fragments."
        />
        <Timeline phases={[
          { label: "Phase 01", title: "Sales + Stakeholder Mapping", body: "Interviews with the sales team surfaced where deals stalled: the handoff between stakeholders. Each role was mapped to its own definition of risk." },
          { label: "Phase 02", title: "Messaging Architecture", body: "Before any visual design, the content strategy for each page as an ordered set of questions that reader needs answered — and the CTA that follows." },
          { label: "Phase 03", title: "Design + Build", body: "One visual system across four pages, built in WordPress and HubSpot, plus a routing guide so sales knows which page to send to which contact." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          browser={{ src: homepageDesign, url: "2hourlearning.com", alt: "2HL homepage" }}
          caption="The brand homepage — WordPress, built for discovery rather than conversion"
          count="01 / 04"
        />
      </div>

      <section className="pf-wrap">
        <SectionHead
          label="The Problem"
          title={<>A committee decision can't be won by a page written for <em className="pf-em">nobody in particular.</em></>}
          body="Gartner puts a typical B2B buying group at 6–10 stakeholders, each arriving with their own independent research. In a private school that's the head, the academic lead and the owner or board — three different definitions of risk, one shared decision."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={persona1} url="2hourlearning.com/head-of-school" />
            <p className="pf-figcap">Head of School — proof, outcomes, named testimonials</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={persona2} url="2hourlearning.com/academic-lead" />
            <p className="pf-figcap">Academic Lead — teacher workload and mastery data</p>
          </div>
        </div>
      </section>

      <Statement kicker="The reframe">
        The brief said <span style={{ color: "var(--mut)" }}>"a better website."</span> The truth was <em className="pf-em">four different arguments</em>, for four different readers, of the same decision.
      </Statement>

      <section className="pf-wrap">
        <SectionHead label="The Pages" title={<>Same system, four readers, <em className="pf-em">four arguments.</em></>} />
        <StickyWalkthrough steps={steps} variant="desktop" />
      </section>

      <ShowcaseBand
        browser={{ src: persona3, url: "2hourlearning.com/leadership" }}
        caption="Owner & Board — exclusivity and strategic transformation, closing on a leadership strategy call"
        count="The hardest yes"
      />

      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>Where the choices diverged from the <em className="pf-em">obvious answer.</em></>} />
        <Decisions items={[
          { n: "01", title: "One visual system across all four pages",
            why: "Stakeholders asked to make each page 'feel different'. I kept type, colour, spacing and components identical — only the message changes. The brand reads as coherent when a rep links a contact from one page to another.",
            tradeoff: "Some felt the pages looked 'too similar' — but consistency is the point." },
          { n: "02", title: "CTAs are stage-gates, not generic 'Request a Demo'",
            why: "Each CTA matches where that reader is: 'See how it works' for discovery, 'Let's Talk Results' for the proof-seeking head, 'Walk Through It Together' for academic evaluation, a strategy call for a leadership-level bet.",
            tradeoff: "Four CTAs mean the sales team needs a response protocol per page — handled by the routing guide." },
          { n: "03", title: "Lead with the reader's motivation, not the product",
            why: "The academic page opens on teachers and mastery, not 'our AI framework'. The owner page opens on an exclusive strategic model. The product becomes the means, never the headline.",
            tradeoff: "Each page needed its own copy architecture — more work than one template." },
          { n: "04", title: "Design for the sales rep — the fifth user",
            why: "Four pages only work if reps know which to send. A one-page routing guide maps each contact type to its page and CTA, turning the system into usable sales enablement.",
            tradeoff: "An extra deliverable beyond the pages — but it's what makes them get used." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Delivered at handoff — conversion analytics were being set up post-launch, so these are <em className="pf-em">properties of the system.</em></>}
        />
        <Outcomes items={[
          { n: <>0<em className="pf-em">4</em></>, l: "Pages — one brand homepage plus three persona pages" },
          { n: <>0<em className="pf-em">3</em></>, l: "Angles — proof, academic mastery, strategic partnership" },
          { n: <>1 <em className="pf-em">system</em></>, l: "Shared visual language across all four — zero brand fragmentation" },
          { n: <>0<em className="pf-em">4</em></>, l: "CTAs, each a stage-gate matched to that reader's place in the decision" },
        ]} />
      </section>

      <section className="pf-wrap">
        <MoreProjects cards={[
          { href: "/fff-case-study", img: fffThumb, title: "Future First Families", sub: "Advocacy · Web", badge: "2025" },
          { href: "/liffo-case-study", img: liffoThumb, title: "Liffo", sub: "Healthcare · Mobile", badge: "2024" },
          { href: "/acedboard-case-study", img: acedboardThumb, title: "Proconomics", sub: "Fintech · CBA engine", badge: "Live" },
        ]} />
      </section>

      <PageFooter />
    </CaseStudyShell>
  );
}
