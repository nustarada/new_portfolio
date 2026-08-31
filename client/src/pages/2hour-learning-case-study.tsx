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
    body: "For school leaders who found 2HL through search or word of mouth, not yet in a buying cycle. Leads with the brand narrative rather than a product pitch. CTA: 'See how it works'." },
  { n: "02", img: persona1, url: "2hourlearning.com/head-of-school", chip: "Proof-seeking",
    title: <>Head of School, <em className="pf-em">proof it works</em></>,
    body: "Accountable for reputation and enrolment, so the page leads with outcome charts, results statistics and named testimonials. CTA: 'Let's Talk Results'." },
  { n: "03", img: persona2, url: "2hourlearning.com/academic-lead", chip: "Teacher-first",
    title: <>Academic Lead, <em className="pf-em">mastery, less planning</em></>,
    body: "Owns curriculum and teacher experience, so the page opens on teacher workload and progress tracking backed by MAP Growth data rather than a feature list." },
  { n: "04", img: persona3, url: "2hourlearning.com/leadership", chip: "Strategic bet",
    title: <>Owner &amp; Board, <em className="pf-em">an exclusive partnership</em></>,
    body: "\"We quietly built a breakthrough school model. Now we're sharing it.\" Framed as a strategic, future-proof transformation with founding-partner schools. CTA: 'Strategy Call with Leadership'." },
];

export default function TwoHourLearningCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="2 Hour Learning" year="2025">
      <CaseHero
        title={<>2 Hour Learning</> as any}
        tagline={<>One purchase decision, and <em className="pf-em">three people I had to convince.</em></>}
        meta={[
          ["Client", "2 Hour Learning"],
          ["Industry", "EdTech · B2B, private schools"],
          ["Services", "Content Strategy, Messaging Architecture, Web Design"],
          ["Role", "Lead Designer"],
          ["Scope", "4 pages, 1 WordPress + 3 HubSpot"],
          ["Year", "2025"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="Selling software to a school is a committee decision. The head, the academic lead and the owner or board each assess it against different criteria. Every lead was being directed to a single generic homepage that addressed all three at once and answered none of them well enough to convert."
          solution="A system of four pages: one brand homepage for discovery, plus three persona pages, each leading with what that reader actually cares about, proof, teacher workload, or strategic advantage, with a CTA matched to their stage. One shared visual system, so the brand never fragments."
        />
        <Timeline phases={[
          { label: "Phase 01", title: "Sales + Stakeholder Mapping", body: "Interviews with the sales team identified where deals stalled, at the handover between stakeholders. Each role was mapped to the risk it was accountable for." },
          { label: "Phase 02", title: "Messaging Architecture", body: "Before any visual design, each page was specified as an ordered set of questions that reader needs answered, and the CTA that follows." },
          { label: "Phase 03", title: "Design + Build", body: "One visual system across four pages, built in WordPress and HubSpot, with a routing guide mapping each contact type to a page." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          browser={{ src: homepageDesign, url: "2hourlearning.com", alt: "2HL homepage" }}
          caption="The brand homepage, WordPress, built for discovery rather than conversion"
          count="01 / 04"
        />
      </div>

      <section className="pf-wrap">
        <SectionHead
          label="The Problem"
          title={<>A committee decision needs pages written for <em className="pf-em">specific readers.</em></>}
          body="Gartner puts a typical B2B buying group at 6 to 10 stakeholders, each arriving with independent research. In a private school that is the head, the academic lead and the owner or board: three definitions of risk against one shared decision."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={persona1} url="2hourlearning.com/head-of-school" />
            <p className="pf-figcap">Head of School, proof, outcomes, named testimonials</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={persona2} url="2hourlearning.com/academic-lead" />
            <p className="pf-figcap">Academic Lead, teacher workload and mastery data</p>
          </div>
        </div>
      </section>

      <Statement kicker="The reframe">
        The brief said <span style={{ color: "var(--mut)" }}>"a better website."</span> The truth was <em className="pf-em">four different arguments</em>, for four different readers, of the same decision.
      </Statement>

      <section className="pf-wrap">
        <SectionHead label="The Pages" title={<>One system, four readers, <em className="pf-em">four arguments.</em></>} />
        <StickyWalkthrough steps={steps} variant="desktop" />
      </section>

      <ShowcaseBand
        browser={{ src: persona3, url: "2hourlearning.com/leadership" }}
        caption="Owner & Board, exclusivity and strategic transformation, closing on a leadership strategy call"
        count="The hardest yes"
      />

      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>The decisions behind the <em className="pf-em">page system.</em></>} />
        <Decisions items={[
          { n: "01", title: "One visual system across all four pages",
            why: "Stakeholders asked for each page to feel different. Type, colour, spacing and components stayed identical, with only the message changing, so the brand holds together when a rep links a contact from one page to another.",
            tradeoff: "Some reviewers felt the pages looked too similar. Consistency was the intent." },
          { n: "02", title: "CTAs matched to buying stage rather than a generic demo request",
            why: "I matched each CTA to the reader's stage: 'See how it works' for discovery, 'Let's Talk Results' for the head, 'Walk Through It Together' for academic evaluation, and a strategy call at leadership level.",
            tradeoff: "Four CTAs require a response protocol per page, covered by the routing guide." },
          { n: "03", title: "Each page opens on the reader's priority, not the product",
            why: "I opened the academic page on teachers and mastery rather than the AI framework, and the leadership page on the strategic model. The product is the method, not the headline.",
            tradeoff: "Each page required its own content structure rather than a single template." },
          { n: "04", title: "The sales rep treated as a fifth user",
            why: "Four pages only work if reps know which to send, so I wrote a one-page routing guide mapping each contact type to its page and CTA.",
            tradeoff: "An additional deliverable, and the one that makes the system usable." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Delivered at handoff, with conversion analytics being set up post-launch. These describe the <em className="pf-em">system as built.</em></>}
        />
        <Outcomes items={[
          { n: <>0<em className="pf-em">4</em></>, l: "Pages, one brand homepage plus three persona pages" },
          { n: <>0<em className="pf-em">3</em></>, l: "Angles, proof, academic mastery, strategic partnership" },
          { n: <>1 <em className="pf-em">system</em></>, l: "Shared visual language across all four, zero brand fragmentation" },
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
