import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, Collage, StickyWalkthrough, EvidenceCard, Decisions,
  Statement, Outcomes, Validation, MoreProjects, SiteClose, PageFooter, Phone, type Step,
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

import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.jpg";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.jpg";


const steps: Step[] = [
  { n: "01", img: Screen4, tag: "The dashboard", chip: "Home · hub",
    title: <>One home for <em className="pf-em">five pillars</em></>,
    body: "Home-care, doctors, diagnostics, records and emergency, each one tap from the dashboard, with a 24/7 call banner and live nurse-visit tracking above the fold." },
  { n: "02", img: Screen14, tag: "Home-care, the hero", chip: "Home-care · the differentiator",
    title: <>Nursing, <em className="pf-em">to your door</em></>,
    body: "The service no competitor had organised. Six clinical categories, short-term, critical, chronic, post-surgical, physiotherapy and occupational, each with a visible per-visit price and a single booking action, replacing an informal WhatsApp negotiation." },
  { n: "03", img: Screen11, tag: "Emergency, one tap", chip: "Emergency · persistent tab",
    title: <>Emergency that <em className="pf-em">doesn't ask questions</em></>,
    body: "A user in an emergency should not have to recall a number or type an address. The emergency tab is persistent and the action is single, with minimal reading required." },
  { n: "04", img: Screen13, tag: "Hospitals, honest availability", chip: "Select hospital · BLS / ALS",
    title: <>An <em className="pf-em">honest</em> ambulance flow</>,
    body: "Hospitals listed with actual ambulance availability, life-support tier and ETA, with the option to call the hospital or book the ambulance." },
  { n: "05", img: Screen34, tag: "Records, hand the phone over", chip: "Records · by type",
    title: <>Records readable <em className="pf-em">in one scroll</em></>,
    body: "Grouped by type: appointments, prescriptions, labs and family history, alongside the government RBSK health card, so records can be shown quickly during a consultation." },
];

export default function LiffoCaseStudy() {
  return (
    <CaseStudyShell project="Liffo" year="2024">
      <CaseHero
        title="Liffo"
        tagline={<>I designed home nursing, doctors and emergency care <em className="pf-em">into one app.</em></>}
        meta={[
          ["Client", "Liffo Health"],
          ["Industry", "Healthcare, Home-care services · India"],
          ["Services", "Product Strategy, UX Research, End-to-end UI Design, Design System"],
          ["Role", "Lead Designer, sole designer"],
          ["Scope", "34 screens · 6 flows · iOS & Android"],
          ["Year", "2024 · 13 weeks"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="Indian families juggle seven disconnected channels for one household's health, home nursing arranged over WhatsApp, doctors by phone, labs in person, emergencies through a number 1 in 4 people can't correctly recall. No product treated routine care and crisis care as the same journey."
          solution="A home-first health app built around five services, led by organised home-care nursing, the offering nobody had productised. Emergency sits one tap away on a persistent tab, routed through hospitals with verified ambulance availability rather than a dispatch promise the fleet could not meet."
        />
        <Timeline phases={[
          { label: "Weeks 1 to 3", title: "Research + Architecture", body: "I worked from published EMS and golden-hour data, a competitive audit of the Indian market and a task analysis of the phone-based emergency process, then built the five-service information architecture from it." },
          { label: "Weeks 4 to 10", title: "Design + Iteration", body: "I took it from low-fidelity structure to 34 production screens, iterating most on the emergency flow and the home-care booking model." },
          { label: "Weeks 11 to 13", title: "System + Handoff", body: "I built the component library, covered states and edge cases, reviewed accessibility for high-stress use, and handed off to developers across iOS and Android." },
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
          title={<>Emergency care in India breaks down <em className="pf-em">before the call is made.</em></>}
          body="Working without research participants, the evidence base came from published studies, government data and a competitive audit of the Indian market, with each flow tested through scenario walkthroughs."
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
            note={<>would have dialed the <b>wrong service</b> for a medical emergency, across 100 / 101 / 102 / 108. Two-thirds had never heard of the unified 112.</>}
            source={{ text: "Public-awareness survey · Maharashtra", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6239430/" }}
            delay={0.1}
          />
          <EvidenceCard
            label="108 ambulance response"
            bars={[
              { name: "Urban average", value: "14 min", width: "35%", color: "#C4842B" },
              { name: "Rural average", value: "31 min", width: "78%", color: "#B3402F" },
            ]}
            note={<>…and roughly <b>1 ambulance per 80 to 100k people</b>, half the WHO recommendation.</>}
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
          caption="Exploration across all six flows, structure, states and edge cases"
          count="34 screens"
        />
      </div>

      <Statement kicker="The reframe">
        I put the everyday services and the emergency in <em className="pf-em">one app</em>, because that is how a household actually needs them.
      </Statement>

      {/* ── The product ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Product"
          title={<>Five services in one place, <em className="pf-em">screen by screen.</em></>}
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
          title={<>Designed for use <em className="pf-em">under stress.</em></>}
          body="Oversized single-thumb targets within natural reach, no typing on the critical path, a two-tap guard against accidental dispatch, and no meaning carried by colour alone. High-stress use was treated as an accessibility requirement rather than an edge case."
        />
        <div className="pf-three">
          {[
            { src: Screen11, cap: "Emergency, one decisive action" },
            { src: Screen13, cap: "Hospitals, availability, tier, ETA" },
            { src: Screen16, cap: "Hospital detail, services offered" },
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
        <SectionHead label="Key decisions" title={<>The key decisions and their <em className="pf-em">trade-offs.</em></>} />
        <Decisions items={[
          { n: "01", title: "Home-care leads, not the emergency",
            why: "Home nursing was the underserved service and the clearest differentiator, so I gave it the primary position over the more commoditised offerings.",
            tradeoff: "Emergency loses the primary position, offset by pinning it to the persistent tab bar." },
          { n: "02", title: "An ambulance flow built on verified availability",
            why: "I routed to hospitals with verified availability, life-support tier and ETA, rather than promising dispatch from a fleet that does not exist.",
            tradeoff: "Less impressive in a demo, and accurate at the point of use." },
          { n: "03", title: "Records by type, not by provider",
            why: "Patients recall what a record is for rather than which clinic issued it, so I grouped records by type across providers, with the government scheme alongside.",
            tradeoff: "Loses the per-hospital view in favour of the patient's own model." },
        ]} />
      </section>

      {/* ── Outcomes ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>The product had not launched, so these describe the <em className="pf-em">design as delivered.</em></>}
        />
        <Outcomes items={[
          { n: <>3<em className="pf-em">4</em></>, l: "Production-ready screens across 6 flows, zero dead ends" },
          { n: <>0<em className="pf-em">5</em></>, l: "Service pillars unified in a single household app" },
          { n: <>1 <em className="pf-em">tap</em></>, l: "To emergency from any screen, via the persistent tab" },
          { n: <>7 → <em className="pf-em">2</em></>, l: "Steps from 'something is wrong' to dispatch vs. the phone process" },
        ]} />
        <Validation
          title="The market followed a year later"
          body="When Liffo was designed, app-based emergency healthcare was largely absent in India. In January 2025 Blinkit launched a 10-minute app-dispatched ambulance service in Gurugram, confirming the premise that emergency care belongs in the same app people use for everyday health."
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

      <SiteClose />
      <PageFooter />
    </CaseStudyShell>
  );
}
