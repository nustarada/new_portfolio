import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, StickyWalkthrough, Decisions, Statement, Outcomes,
  MoreProjects, PageFooter, Browser, type Step,
} from "@/components/case-study/template";

import empty from "@assets/proco-01-empty.png";
import create from "@assets/proco-02-create.png";
import costDrivers from "@assets/proco-03-cost-drivers.png";
import benefitDrivers from "@assets/proco-04-benefit-drivers.png";
import benefitsModel from "@assets/proco-05-benefits-model.png";
import dashboard from "@assets/proco-06-dashboard.png";
import summary from "@assets/proco-07-summary.png";
import addScenario from "@assets/proco-08-add-scenario.png";
import compare from "@assets/proco-09-compare.png";
import advCalc from "@assets/proco-10-advanced-calc.png";
import driverExpanded from "@assets/proco-12-driver-expanded.png";
import costs from "@assets/proco-13-costs.png";

import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.jpg";
import fffThumb from "@assets/FutureFirstFamilies_thumbnail_1770103573837.jpg";

const ACCENT = "#2F7D5B";

const steps: Step[] = [
  { n: "01", img: empty, url: "acedboard.com/proconomics", chip: "Empty state",
    title: <>Start from <em className="pf-em">nothing</em></>,
    body: "Proconomics sits in the Acedboard sidebar beside Projects. The empty state has a single purpose: create the first analysis." },
  { n: "02", img: create, url: "acedboard.com/proconomics/new", chip: "Create · cost of capital",
    title: <>Set the <em className="pf-em">financial frame</em></>,
    body: "Name, start date, cost of capital, frequency and period. The cost of capital is what allows a genuine NPV and payback calculation later." },
  { n: "03", img: benefitDrivers, url: "acedboard.com/assumptions/benefit-drivers", chip: "Assumptions · drivers",
    title: <>Define the data <em className="pf-em">once</em></>,
    body: "Cost Drivers and Benefit Drivers sit under Assumptions, each a set of variables with units and a calculated field. Everything downstream references them." },
  { n: "04", img: benefitsModel, url: "acedboard.com/summary/benefits", chip: "The provable unit",
    title: <>Baseline → projected → <em className="pf-em">benefit</em></>,
    body: "Areas of line items across years. A stated benefit figure is an assertion; requiring a baseline and a projected value makes the benefit a visible difference that can be examined." },
  { n: "05", img: compare, url: "acedboard.com/scenarios/compare", chip: "Scenarios · compare",
    title: <>Answer <em className="pf-em">"what if we're wrong?"</em></>,
    body: "Best, worst and realization scenarios built by varying projections against the baseline, then compared side by side with an explicit difference column." },
];

export default function AcedboardCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="Proconomics" year="2025">
      <CaseHero
        title="Proconomics"
        tagline={<>A project business case finance can <em className="pf-em">keep using.</em></>}
        meta={[
          ["Client", "Acedboard"],
          ["Industry", "Project management, Financial modelling · SaaS"],
          ["Services", "Product Strategy, UX Architecture, End-to-end UI Design"],
          ["Role", "Product Designer"],
          ["Scope", "Cost-benefit analysis module inside Acedboard"],
          ["Status", "Live in production"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="A project's business case was built once in a spreadsheet to win approval, then abandoned. Numbers were hard-typed and disconnected, so when an assumption changed nobody updated the model, and promise was never compared to payoff. The financial story lived outside the tool where the work happened."
          solution="A connected model inside Acedboard. Cost and benefit drivers are defined once under Assumptions, variables, units and a calculated field, and every cell downstream references them through a real formula engine, discounted at the cost of capital into NPV, ROI and payback."
        />
        <Timeline phases={[
          { label: "Phase 01", title: "Model + Architecture", body: "Defining the data model: drivers as the single source, baseline to projected to benefit as the unit of evidence, and how a formula engine references it." },
          { label: "Phase 02", title: "Interface Design", body: "Making finance-grade mechanics, discounting, sensitivity and scenarios, usable within a project tool's interface patterns without simplifying the model." },
          { label: "Phase 03", title: "Build + Ship", body: "Agile delivery alongside engineering, covering edge cases and states, through to production release inside Acedboard." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          browser={{ src: dashboard, url: "acedboard.com/proconomics/dashboard", alt: "Proconomics dashboard" }}
          caption="The dashboard, net benefit, NPV, payback and ROI over a discounted cashflow"
          count="01 / 12"
        />
      </div>

      <section className="pf-wrap">
        <SectionHead
          label="The Model"
          title={<>Assumptions are the single source. The model <em className="pf-em">references them rather than repeating them.</em></>}
          body="Every cost and benefit is defined once under Assumptions, with variables, units and a calculated field. The model references those drivers rather than repeating numbers, so there is one place to update when an assumption changes."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={driverExpanded} url="acedboard.com/assumptions" />
            <p className="pf-figcap">A driver expanded, variables → calculated field → $128,000</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={advCalc} url="acedboard.com/advanced-calculation" />
            <p className="pf-figcap">The formula engine, any cell references drivers and other cells</p>
          </div>
        </div>
      </section>

      <Statement kicker="The reframe">
        Not a calculator you re-type each time, a <em className="pf-em">connected model</em> where the value computes itself, all the way to the board report.
      </Statement>

      <section className="pf-wrap">
        <SectionHead
          label="The Product"
          title={<>From an empty state to a board-ready model, <em className="pf-em">step by step.</em></>}
        />
        <StickyWalkthrough steps={steps} variant="desktop" />
      </section>

      <ShowcaseBand
        browser={{ src: summary, url: "acedboard.com/summary" }}
        caption="Summary, benefit and cost areas period by period, with undiscounted cashflow"
        count="The receipts"
      />

      <section className="pf-wrap">
        <SectionHead label="Scenarios" title={<>Sensitivity as a <em className="pf-em">first-class</em> part of the model.</>} />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={addScenario} url="acedboard.com/scenarios/new" />
            <p className="pf-figcap">Add scenario, flex projections by % or absolute</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={costs} url="acedboard.com/costs" />
            <p className="pf-figcap">Cost areas, the same structured model on the cost side</p>
          </div>
        </div>
        <div className="pf-two" style={{ marginTop: 22 }}>
          <div data-reveal>
            <Browser src={costDrivers} url="acedboard.com/assumptions/cost-drivers" />
            <p className="pf-figcap">Cost Drivers, the cost side of the single source</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={create} url="acedboard.com/proconomics/new" />
            <p className="pf-figcap">Creating an analysis, the parameters that make it a real model</p>
          </div>
        </div>
      </section>

      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>What made the model credible to <em className="pf-em">finance.</em></>} />
        <Decisions items={[
          { n: "01", title: "Cost and benefit drivers as the single source of data",
            why: "Every cost and benefit is defined once under Assumptions, variables, units and a calculated field. The model references those drivers instead of re-typing numbers, so there's one place to update and one place to audit.",
            tradeoff: "Users set up drivers before seeing a result, which is what keeps the model accurate as assumptions change." },
          { n: "02", title: "A calculation engine, so any cell can be a formula",
            why: "Advanced Calculation allows any value to be a formula referencing drivers and other cells, with live recalculation. Changing a driver updates everything downstream.",
            tradeoff: "Building a calculation engine into a web app is substantial work, and without it the tool is a form with totals." },
          { n: "03", title: "Every line modelled as baseline, projected and benefit",
            why: "A stated benefit figure is an assertion. Requiring a baseline and a projected value makes the benefit a visible difference, reviewable on its inputs rather than its conclusion.",
            tradeoff: "More structure to complete, and that structure is what makes the result defensible." },
          { n: "04", title: "Discount with a cost of capital, over periods",
            why: "Set at creation and applied across half-year and annual periods, so the dashboard reports NPV and payback, the measures finance and executives already use.",
            tradeoff: "More setup than a flat ROI, and the difference between a working model and an estimate." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead label="Outcomes" title={<>Shipped and <em className="pf-em">live in production</em> inside Acedboard.</>} />
        <Outcomes items={[
          { n: <>1 <em className="pf-em">source</em></>, l: "Assumptions defined once and referenced throughout the model" },
          { n: <>Live <em className="pf-em">formulas</em></>, l: "Any cell computes from drivers and other cells, and recalculates" },
          { n: <>NPV · <em className="pf-em">ROI</em></>, l: "Discounted metrics, payback and cashflow rather than a flat ROI" },
          { n: <>0<em className="pf-em">3</em></>, l: "Best, worst and realization scenarios compared in the tool" },
        ]} />
      </section>

      <section className="pf-wrap">
        <MoreProjects cards={[
          { href: "/liffo-case-study", img: liffoThumb, title: "Liffo", sub: "Healthcare · Mobile", badge: "2024" },
          { href: "/lionfish-case-study", img: lionfishThumb, title: "Lionfish", sub: "Cybersecurity · Redesign", badge: "Live" },
          { href: "/fff-case-study", img: fffThumb, title: "Future First Families", sub: "Advocacy · Web", badge: "2025" },
        ]} />
      </section>

      <PageFooter />
    </CaseStudyShell>
  );
}
