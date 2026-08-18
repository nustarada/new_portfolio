import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, Collage, StickyWalkthrough, EvidenceCard, Decisions,
  Statement, Outcomes, Validation, MoreProjects, PageFooter, Phone, type Step,
} from "@/components/case-study/template";

import Screen1 from "@assets/1. Walkthrough 1_1754469198499.png";
import Screen4 from "@assets/4. Dashboard 1_1754469198505.png";
import Screen6 from "@assets/6. All Services_1754469198506.png";
import Screen10 from "@assets/10. Symptoms_1754469198506.png";
import Screen11 from "@assets/11. Emergency_1754469198506.png";
import Screen13 from "@assets/13. Emergency Hospital List_1754469198507.png";
import Screen14 from "@assets/14. Home care services_1754469198507.png";
import Screen16 from "@assets/16. Hospital Detail Page 1_1754469198507.png";
import Screen21 from "@assets/21. Doctor Specialisation_1754469216926.png";
import Screen22 from "@assets/22. Doctor List_1754469216927.png";
import Screen25 from "@assets/25. My Profile_1754469216929.png";
import Screen28 from "@assets/28. Prescription_1754469216929.png";
import Screen34 from "@assets/34. Health card_1754469216930.png";

import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.png";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.png";

const ACCENT = "#B3402F";

const steps: Step[] = [
  { n: "01", img: Screen4, tag: "The dashboard", chip: "Home · hub",
    title: <>One home for <em className="pf-em">five pillars</em></>,
    body: "Home-care, doctors, diagnostics, records and emergency — each one tap from the dashboard, with a 24/7 call banner and live nurse-visit tracking above the fold." },
  { n: "02", img: Screen14, tag: "Home-care — the hero", chip: "Home-care · the differentiator",
    title: <>Nursing, <em className="pf-em">to your door</em></>,
    body: "The pillar no competitor organised. Six clinical categories — short-term, critical, chronic, post-surgical, physio, occupational — with a visible per-visit price and one booking action, replacing an opaque WhatsApp negotiation." },
  { n: "03", img: Screen11, tag: "Emergency — one tap", chip: "Emergency · persistent tab",
    title: <>Emergency that <em className="pf-em">doesn't ask questions</em></>,
    body: "A panicking user shouldn't recall a number or type an address. The emergency tab is persistent; the action is single and decisive, with near-zero reading load." },
  { n: "04", img: Screen13, tag: "Hospitals — honest availability", chip: "Select hospital · BLS / ALS",
    title: <>An <em className="pf-em">honest</em> ambulance flow</>,
    body: "Hospitals listed with real ambulance availability, life-support tier and ETA — call the hospital or book the ambulance. Credible beats flashy at the worst possible moment." },
  { n: "05", img: Screen34, tag: "Records — hand the phone over", chip: "Records · by type",
    title: <>Records readable <em className="pf-em">in one scroll</em></>,
    body: "Grouped by type — appointments, prescriptions, labs, family history — plus the government RBSK health card, built for the moment you hand your phone across a doctor's desk." },
];

export default function LiffoCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="Liffo" year="2024">
      <CaseHero
        title="Liffo"
        tagline={<>Healthcare that <em className="pf-em">arrives</em> — nursing, doctors and emergency care at your door.</>}
        meta={[
          ["Client", "Liffo Health"],
          ["Industry", "Healthcare, Home-care services · India"],
          ["Services", "Product Strategy, UX Research, End-to-end UI Design, Design System"],
          ["Role", "Lead Product Designer — sole designer"],
          ["Scope", "34 screens · 6 flows · iOS & Android"],
          ["Year", "2024 · 13 weeks"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="Indian families juggle seven disconnected channels for one household's health — home nursing arranged over WhatsApp, doctors by phone, labs in person, emergencies through a number 1 in 4 people can't correctly recall. No product treated routine care and crisis care as the same journey."
          solution="A home-first health app built around five pillars, with organised home-care nursing — the service nobody had productised — as the hero. Emergency lives one tap away on a persistent tab, routed honestly through hospitals with verified ambulance availability rather than a fleet that doesn't exist."
        />
        <Timeline phases={[
          { label: "Weeks 1–3", title: "Research + Architecture", body: "Published EMS and golden-hour data, competitive audit of the Indian market, task analysis of the phone-based emergency process, and the five-pillar information architecture." },
          { label: "Weeks 4–10", title: "Design + Iteration", body: "Lo-fi structure through to 34 production screens. Heaviest iteration on the emergency flow and the home-care booking model — the two pillars carrying the product's promise." },
          { label: "Weeks 11–13", title: "System + Handoff", body: "Component library, states and edge cases, accessibility passes for panic-state use, and developer handoff across iOS and Android." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          screens={[
            { src: Screen1, alt: "Onboarding" },
            { src: Screen4, alt: "Dashboard", offset: 24 },
            { src: Screen14, alt: "Home-care", offset: -12 },
            { src: Screen11, alt: "Emergency", offset: 18 },
          ]}
          caption="Onboarding · Dashboard · Home-care · Emergency"
          count="01 / 34"
        />
      </div>

      {/* ── Research & evidence ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Research + Discovery"
          title={<>Emergency care in India fails <em className="pf-em">before the call is made.</em></>}
          body="As a solo designer without research participants, the evidence base came from published studies, government data and a competitive audit of the Indian market — then every flow was pressure-tested through scenario walkthroughs."
        />
        <div className="pf-three">
          <EvidenceCard
            label="The golden hour, in numbers"
            bars={[
              { name: "Road-accident deaths / year", value: "~180,000", width: "100%", color: "#B3402F" },
              { name: "Avertable with timely care", value: "~50%", width: "50%", color: "#C4842B" },
              { name: "Reach care within the hour", value: "~20%", width: "20%", color: "#4A7DA6" },
            ]}
            source={{ text: "Law Commission of India · Report 201", href: "https://www.hhrjournal.org/2025/09/30/saving-time-saving-lives-the-golden-hour-as-a-constitutional-guarantee-in-india/" }}
          />
          <EvidenceCard
            label="Which number would people dial?"
            bigNum={<>1 in <em className="pf-em">4</em></>}
            note={<>would have dialed the <b>wrong service</b> for a medical emergency — across 100 / 101 / 102 / 108. Two-thirds had never heard of the unified 112.</>}
            source={{ text: "Public-awareness survey · Maharashtra", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6239430/" }}
            delay={0.1}
          />
          <EvidenceCard
            label="108 ambulance response"
            bars={[
              { name: "Urban average", value: "14 min", width: "35%", color: "#C4842B" },
              { name: "Rural average", value: "31 min", width: "78%", color: "#B3402F" },
            ]}
            note={<>…and roughly <b>1 ambulance per 80–100k people</b> — half the WHO recommendation.</>}
            source={{ text: "2019 EMS data · EPW", href: "https://www.epw.in/engage/article/108-services-are-plagued-complacency-and" }}
            delay={0.2}
          />
        </div>
      </section>

      <div style={{ marginTop: 56 }}>
        <Collage
          tiles={[
            { src: Screen1, size: "sm" }, { src: Screen10, size: "md" }, { src: Screen14, size: "lg" },
            { src: Screen21, size: "md" }, { src: Screen22, size: "sm" }, { src: Screen4, size: "lg" },
            { src: Screen16, size: "md" }, { src: Screen28, size: "sm" }, { src: Screen25, size: "md" },
            { src: Screen11, size: "lg" }, { src: Screen34, size: "sm" }, { src: Screen13, size: "md" },
          ]}
          caption="Exploration across all six flows — structure, states and edge cases"
          count="34 screens"
        />
      </div>

      <Statement kicker="The reframe">
        Not an ambulance app, and not a clinic in your pocket — a <em className="pf-em">home-first health hub</em> where the everyday lives next to the emergency.
      </Statement>

      {/* ── The product ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Product"
          title={<>Five pillars, one home — walked through <em className="pf-em">screen by screen.</em></>}
        />
        <StickyWalkthrough steps={steps} variant="mobile" />
      </section>

      <ShowcaseBand
        screens={[
          { src: Screen14, alt: "Home-care" },
          { src: Screen21, alt: "Specialisations", offset: 26 },
          { src: Screen22, alt: "Doctors" },
        ]}
        caption="Home-care categories · Specialisations · Doctor discovery with trust on the card"
        count="Care & discovery"
      />

      <section className="pf-wrap">
        <SectionHead
          label="Emergency, in detail"
          title={<>Designed for a user who <em className="pf-em">cannot read carefully.</em></>}
          body="Oversized single-thumb targets in the natural reach zone, zero typing on the critical path, a two-tap guard against accidental dispatch, and meaning never carried by colour alone — panic treated as an accessibility constraint, not an edge case."
        />
        <div className="pf-three">
          {[
            { src: Screen11, cap: "Emergency — one decisive action" },
            { src: Screen13, cap: "Hospitals — availability, tier, ETA" },
            { src: Screen16, cap: "Hospital detail — services offered" },
          ].map((f, i) => (
            <figure className="pf-art" key={f.cap} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
              <div className="top"><Phone src={f.src} small /></div>
              <figcaption>{f.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div style={{ marginTop: 80 }}>
        <ShowcaseBand
          small
          screens={[
            { src: Screen25, alt: "Profile" },
            { src: Screen28, alt: "Prescription", offset: 20 },
            { src: Screen34, alt: "Health card" },
            { src: Screen6, alt: "Services", offset: 20 },
          ]}
          caption="Profile · Prescription · Government health card · All services"
          count="Records & identity"
        />
      </div>

      {/* ── Key decisions ── */}
      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>The judgement calls — and what each one <em className="pf-em">cost.</em></>} />
        <Decisions items={[
          { n: "01", title: "Home-care leads — not the emergency",
            why: "It's the underserved, differentiating pillar. Nursing-to-the-door is what no competitor organised, so it earns the hero slot over the commodity services.",
            tradeoff: "Emergency gives up the top spot — recovered by pinning it to the persistent tab bar." },
          { n: "02", title: "An honest ambulance flow",
            why: "Route to hospitals with verified availability, life-support tier and ETA — not a fake Uber-style 'dispatched' promise on a fleet that doesn't exist.",
            tradeoff: "Less flashy in a demo. Credible at the worst possible moment — which is the one that matters." },
          { n: "03", title: "Records by type, not by provider",
            why: "Patients recall 'that prescription for my back', not which clinic issued it. Records group by type, cross-provider, with the government scheme alongside.",
            tradeoff: "Loses the per-hospital view — the patient's mental model won." },
        ]} />
      </section>

      {/* ── Outcomes ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Design outcomes — the product had not launched, so these are <em className="pf-em">properties of the design.</em></>}
        />
        <Outcomes items={[
          { n: <>3<em className="pf-em">4</em></>, l: "Production-ready screens across 6 flows, zero dead ends" },
          { n: <>0<em className="pf-em">5</em></>, l: "Service pillars unified in a single household app" },
          { n: <>1 <em className="pf-em">tap</em></>, l: "To emergency from any screen, via the persistent tab" },
          { n: <>7 → <em className="pf-em">2</em></>, l: "Steps from 'something is wrong' to dispatch vs. the phone process" },
        ]} />
        <Validation
          title="The market followed a year later"
          body="When Liffo was designed, app-based emergency healthcare barely existed in India. In January 2025 Blinkit launched a 10-minute app-dispatched ambulance service in Gurugram — validating the core bet that emergency care belongs in the same app people use for everyday health."
          sources={[
            { text: "Blinkit launch · eHealth", href: "https://ehealth.eletsonline.com/2025/01/blinkit-launches-10-minute-ambulance-service-in-gurugram-could-this-revolutionize-emergency-healthcare-in-india/" },
            { text: "Expansion · Business Standard", href: "https://www.business-standard.com/companies/start-ups/blinkit-expands-10-minute-ambulance-service-125072401442_1.html" },
          ]}
        />
      </section>

      <section className="pf-wrap">
        <MoreProjects cards={[
          { href: "/lionfish-case-study", img: lionfishThumb, title: "Lionfish", sub: "Cybersecurity · Platform redesign", badge: "Live" },
          { href: "/acedboard-case-study", img: acedboardThumb, title: "Proconomics", sub: "Fintech · CBA engine", badge: "Live" },
          { href: "/2hour-learning-case-study", img: twoHLThumb, title: "2 Hour Learning", sub: "EdTech · B2B pages", badge: "2025" },
        ]} />
      </section>

      <PageFooter />
    </CaseStudyShell>
  );
}
