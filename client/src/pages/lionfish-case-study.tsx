import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, Decisions, Statement, Outcomes, MoreProjects, PageFooter,
} from "@/components/case-study/template";

import lionfishThumb from "@assets/Lionfish_cybersecurity_thumbnail_new_1770104312578.png";
import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.png";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.png";

const ACCENT = "#B8860B";

export default function LionfishCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="Lionfish" year="2025">
      <CaseHero
        title="Lionfish"
        tagline={<>Rebuilding a multi-tenant cybersecurity platform — <em className="pf-em">solo, and shipped.</em></>}
        meta={[
          ["Client", "Lionfish Cyber Security · Cyber Tacklebox"],
          ["Industry", "Cybersecurity · Compliance &amp; workforce training · US"],
          ["Services", "UX Audit, Information Architecture, Design System, End-to-end UI"],
          ["Role", "Lead Designer — sole designer on the redesign"],
          ["Scope", "Full platform · multi-tenant, role-based"],
          ["Year", "7 months design · live in production"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="A working platform that fought its users. Navigation sat in a top bar instead of a side rail, menus were confusing, UX writing was weak, inline editing didn't exist, the video player was dated, and tables, in-page tabs and buttons were inconsistently designed and poorly placed. Functions existed but weren't connected properly."
          solution="A complete redesign on a systematic foundation — Ant Design and Material 3 as reference systems — replacing the top bar with a grouped, role-aware side navigation, and rebuilding tables, tabs, buttons, inline editing and the learning experience as consistent components across every module."
        />
        <Timeline phases={[
          { label: "Months 1–2", title: "Audit + Architecture", body: "Auditing the live platform module by module, cataloguing the UX failures, and restructuring the information architecture around a grouped side navigation that adapts to each role." },
          { label: "Months 3–6", title: "System + Module Design", body: "Building the component foundation, then redesigning every module — dashboards, compliances, assessments, learning, cobrand settings, roles and permissions — in light and dark themes." },
          { label: "Month 7 →", title: "Agile Delivery", body: "Design ran alongside active development in an agile cycle, staying ahead of engineering while keeping consistency across a moving target. Live in production." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          browser={{ src: lionfishThumb, url: "lionfish.cybertacklebox.com", alt: "Lionfish platform" }}
          caption="The redesigned platform — dashboards, task management and the learning experience"
          count="Shipped"
        />
      </div>

      {/* ── The problem, itemised ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Problem"
          title={<>It worked. It just <em className="pf-em">fought everyone using it.</em></>}
          body="This wasn't a broken product — it was execution debt, accumulated across navigation, components and copy. Each issue was small on its own; together they made a capable platform feel unusable."
        />
        <div className="pf-three">
          {[
            { t: "Navigation", d: "A top bar carrying a deep, multi-module platform — with a confusing menu structure that hid where things lived." },
            { t: "Components", d: "Tables poorly designed and placed, in-page tab menus badly structured, buttons weak and inconsistently labelled." },
            { t: "Interaction", d: "No inline editing anywhere, a dated video player, and functions that existed but weren't properly connected to each other." },
          ].map((x, i) => (
            <div className="pf-ecard" key={x.t} data-reveal style={{ ["--d" as any]: `${i * 0.08}s` }}>
              <p className="lbl">{x.t}</p>
              <p className="note" style={{ marginTop: 0 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <Statement kicker="The reframe">
        Not a reskin — a <em className="pf-em">systematic rebuild.</em> Fix the foundation once, and every module inherits the fix.
      </Statement>

      {/* ── Multi-tenant architecture ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Architecture"
          title={<>One platform, many <em className="pf-em">tenants and roles.</em></>}
          body="Lionfish is the super admin over the whole platform. Companies and schools become cobrands — their own branded instance, using their logo and brand colours — where they train both internal users and their own customers. The interface has to adapt to every level of that hierarchy."
        />
        <div className="pf-two">
          <div className="pf-ecard" data-reveal>
            <p className="lbl">The role hierarchy</p>
            <p className="note" style={{ marginTop: 0 }}>
              Lionfish super admin → Cobrand SuperAdmin → Cobrand Admin → Sales and Technical roles (junior and manager) → learners.
              Predefined roles cover the common cases, and a custom-role builder handles the rest.
            </p>
          </div>
          <div className="pf-ecard" data-reveal style={{ ["--d" as any]: ".1s" }}>
            <p className="lbl">Permissions, by category</p>
            <p className="note" style={{ marginTop: 0 }}>
              A granular matrix — every module (accounts, compliances, customers, students, tasks, tools, resources, policies) against
              View / Add / Edit / Delete / Log / Export. The navigation itself renders from these permissions.
            </p>
          </div>
        </div>
      </section>

      {/* ── The naming insight ── */}
      <section className="pf-wrap">
        <SectionHead
          label="One entity, two names"
          title={<>The same thing is a <em className="pf-em">Compliance</em> or an <em className="pf-em">Assessment</em> — depending on who you are.</>}
          body="Admins under a cobrand create and manage Compliances. The customers those cobrands serve complete them as Assessments. Same underlying entity, named for the job each role is doing — so the interface speaks each user's language without duplicating the system underneath."
        />
      </section>

      {/* ── Key decisions ── */}
      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>What the redesign actually <em className="pf-em">changed.</em></>} />
        <Decisions items={[
          { n: "01", title: "Top bar → grouped, role-aware side navigation",
            why: "The single biggest fix. A deep multi-module platform can't live in a top bar. The new side rail groups modules under Home, Assessments, Learning and Category — and renders only what the signed-in role can access.",
            tradeoff: "Costs horizontal space — repaid immediately in orientation and scale headroom." },
          { n: "02", title: "Ant Design + Material 3 as the foundation",
            why: "With one designer covering an entire platform alongside active development, consistency had to come from a system rather than page-by-page decisions. Mature references gave proven patterns for tables, tabs, forms and states.",
            tradeoff: "Less bespoke visual novelty — the right trade for a tool people work in daily." },
          { n: "03", title: "Rebuild the components, not just the skin",
            why: "Tables, in-page tabs, buttons and their labels were redesigned as system components — so every module inherited the same behaviour instead of each screen solving it differently.",
            tradeoff: "Slower start than restyling screens, but it's what made a full-platform redesign possible solo." },
          { n: "04", title: "Inline editing and a modern learning experience",
            why: "Editing without leaving context was missing entirely; the video player was dated. Both were rebuilt — inline edit across data views, and a modern chaptered player for the training content the platform exists to deliver.",
            tradeoff: "More interaction states to design and specify for engineering." },
          { n: "05", title: "Cobrand theming as a first-class constraint",
            why: "Every screen had to hold up under a tenant's own logo and brand colours. Colour was kept structural — meaning never carried by hue alone — so the system stays legible whatever palette a cobrand applies.",
            tradeoff: "Rules out colour-dependent visual devices across the whole platform." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Designed solo across seven months, delivered agile, and <em className="pf-em">live in production.</em></>}
        />
        <Outcomes items={[
          { n: <>1 <em className="pf-em">designer</em></>, l: "The full platform redesign, end to end" },
          { n: <>Side <em className="pf-em">nav</em></>, l: "Grouped and role-aware — replacing the top bar" },
          { n: <>2 <em className="pf-em">themes</em></>, l: "Light and dark, across every module" },
          { n: <>Live</>, l: "Shipped to production and in use by cobrand organisations" },
        ]} />
      </section>

      <section className="pf-wrap">
        <MoreProjects cards={[
          { href: "/acedboard-case-study", img: acedboardThumb, title: "Proconomics", sub: "Fintech · CBA engine", badge: "Live" },
          { href: "/liffo-case-study", img: liffoThumb, title: "Liffo", sub: "Healthcare · Mobile", badge: "2024" },
          { href: "/2hour-learning-case-study", img: twoHLThumb, title: "2 Hour Learning", sub: "EdTech · B2B pages", badge: "2025" },
        ]} />
      </section>

      <PageFooter />
    </CaseStudyShell>
  );
}
