import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, StickyWalkthrough, Decisions, Statement, Outcomes,
  MoreProjects, PageFooter, Browser, BeforeAfter, type Step,
} from "@/components/case-study/template";

import lfOldTasks from "@assets/lf-old-tasks.png";
import lfOldOccupation from "@assets/lf-old-occupation.png";
import lfOldAuditor from "@assets/lf-old-auditor.png";

import lfLogin from "@assets/lf-login.png";
import lfMfa from "@assets/lf-mfa.png";
import lfDashboard from "@assets/lf-dashboard.png";
import lfBranding from "@assets/lf-branding.png";
import lfBranding2 from "@assets/lf-branding2.png";
import lfBranding3 from "@assets/lf-branding3.png";
import lfAssessment from "@assets/lf-assessment.png";
import lfAssessment2 from "@assets/lf-assessment2.png";
import lfAssessment3 from "@assets/lf-assessment3.png";
import lfCompliance from "@assets/lf-compliance.png";
import lfCompliance2 from "@assets/lf-compliance2.png";
import lfCompliance3 from "@assets/lf-compliance3.png";
import lfLearning from "@assets/lf-learning.png";
import lfLearning2 from "@assets/lf-learning2.png";
import lfPlayer from "@assets/lf-player.png";

import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.png";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.png";

const ACCENT = "#B8860B";
const HOST = "cybertacklebox.com";

const steps: Step[] = [
  { n: "01", img: lfLogin, url: `${HOST}/login`, chip: "Auth · MFA",
    title: <>A front door that <em className="pf-em">earns trust</em></>,
    body: "A security platform has to look secure. The split layout pairs a considered brand image with a calm, single-column form — consent and recovery in plain sight rather than buried in fine print." },
  { n: "02", img: lfDashboard, url: `${HOST}/dashboard`, chip: "Side nav · role-aware",
    title: <>The fix that changed <em className="pf-em">everything</em></>,
    body: "The top bar becomes a grouped side rail — Home, Content Manager, Additional Content — rendering only what the signed-in role can reach. Task counts, an activity log and a calendar sit where they can actually be scanned." },
  { n: "03", img: lfCompliance, url: `${HOST}/manage-compliances`, chip: "Admin · manage",
    title: <>Compliances, <em className="pf-em">managed</em></>,
    body: "Cobrand admins build and maintain compliance frameworks — domains, practices and questions — with proper tables, in-page tabs and inline editing where the old platform forced a round trip through a separate page." },
  { n: "04", img: lfAssessment, url: `${HOST}/assessments`, chip: "Customer · complete",
    title: <>The same thing, seen as an <em className="pf-em">Assessment</em></>,
    body: "What an admin manages as a Compliance, a customer completes as an Assessment. Framework selector, intro video, scored domain cards and a Dashboard / Domains / Report / Summary tab set — one entity, two vocabularies." },
  { n: "05", img: lfPlayer, url: `${HOST}/my-learning/section-1`, chip: "Learning · chapters",
    title: <>A learning experience worth <em className="pf-em">finishing</em></>,
    body: "The dated player is replaced by a chaptered layout — completion states down the right rail, progress at a glance, and Overview / Task / Q&A / Notes / Uploads / Video Script tabs beneath the video." },
];

export default function LionfishCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="Lionfish" year="2025">
      <CaseHero
        title="Lionfish"
        tagline={<>Rebuilding a multi-tenant cybersecurity platform — <em className="pf-em">solo, and shipped.</em></>}
        meta={[
          ["Client", "Lionfish Cyber Security · Cyber Tacklebox"],
          ["Industry", "Cybersecurity · Compliance & workforce training · US"],
          ["Services", "UX Audit, Information Architecture, Design System, End-to-end UI"],
          ["Role", "Lead Designer — sole designer on the redesign"],
          ["Scope", "Full platform · multi-tenant, role-based, light & dark"],
          ["Year", "7 months design · live in production"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="A working platform that fought its users. Navigation sat in a top bar instead of a side rail, menus were confusing, UX writing was weak, inline editing didn't exist, the video player was dated, and tables, in-page tabs and buttons were inconsistently designed and poorly placed. Functions existed but weren't connected properly."
          solution="A complete redesign on a systematic foundation — Ant Design and Material 3 as reference systems — replacing the top bar with a grouped, role-aware side navigation, and rebuilding tables, tabs, buttons, inline editing and the learning experience as consistent components across every module, in both light and dark themes."
        />
        <Timeline phases={[
          { label: "Months 1–2", title: "Audit + Architecture", body: "Auditing the live platform module by module, cataloguing the UX failures, and restructuring the information architecture around a grouped side navigation that adapts to each role." },
          { label: "Months 3–6", title: "System + Module Design", body: "Building the component foundation, then redesigning every module — dashboards, compliances, assessments, learning, cobrand branding, roles and permissions — in light and dark." },
          { label: "Month 7 →", title: "Agile Delivery", body: "Design ran alongside active development, staying ahead of engineering while holding consistency across a moving target. Live in production." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          browser={{ src: lfDashboard, url: `${HOST}/dashboard`, alt: "Cyber Tacklebox dashboard" }}
          caption="The redesigned dashboard — grouped side navigation, task counts, activity log and calendar"
          count="Dark theme"
        />
      </div>

      {/* ── The problem ── */}
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

      {/* ── Before / After ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Before / After"
          title={<>Drag to see what <em className="pf-em">actually changed.</em></>}
          body="The old platform is on the left, the redesign on the right. The clearest tell is the top of each screen — a horizontal menu that had run out of room, replaced by a grouped side rail that scales with the platform."
        />
        <BeforeAfter
          before={lfOldTasks}
          after={lfDashboard}
          beforeLabel="Old — top nav"
          afterLabel="New — side nav"
          caption="Tasks / Dashboard — the navigation moves off the top bar, and the data table becomes readable"
        />
        <div className="pf-two" style={{ marginTop: 22 }}>
          <BeforeAfter
            before={lfOldAuditor}
            after={lfBranding}
            beforeLabel="Old"
            afterLabel="New"
            caption="Detail pages — cramped browser-default tabs become a clear in-page tab set"
          />
          <BeforeAfter
            before={lfOldOccupation}
            after={lfCompliance3}
            beforeLabel="Old"
            afterLabel="New"
            caption="Dense data — the same information, given structure and breathing room"
          />
        </div>
        <div className="pf-ecard" style={{ marginTop: 26 }} data-reveal>
          <p className="lbl">The detail that gives it away</p>
          <p className="note" style={{ marginTop: 0 }}>
            The old top navigation ended in a <b>"MORE"</b> overflow menu — the platform had outgrown its own navigation, and
            modules were disappearing behind a dropdown. That single detail is the whole argument for the side rail.
          </p>
        </div>
      </section>

      <Statement kicker="The reframe">
        Not a reskin — a <em className="pf-em">systematic rebuild.</em> Fix the foundation once, and every module inherits the fix.
      </Statement>

      {/* ── Walkthrough ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Platform"
          title={<>Five modules, one system — walked through <em className="pf-em">screen by screen.</em></>}
        />
        <StickyWalkthrough steps={steps} variant="desktop" />
      </section>

      {/* ── Multi-tenant ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Multi-tenant by design"
          title={<>One platform, many <em className="pf-em">tenants and roles.</em></>}
          body="Lionfish is super admin over the whole platform. Companies and schools become cobrands — their own branded instance, using their logo and brand colours — where they train both internal users and their own customers. Every screen has to hold up under someone else's palette."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={lfBranding} url={`${HOST}/cobrands/team-pumpkin`} />
            <p className="pf-figcap">Cobrand settings — logo, primary and background colour, alias and subdomain configuration</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfBranding2} url={`${HOST}/cobrands/team-pumpkin/accounts`} />
            <p className="pf-figcap">In-page tabs — Main Info, Accounts/Users, Customers, Students, Files, Email Settings</p>
          </div>
        </div>
        <div style={{ marginTop: 22 }} data-reveal>
          <Browser src={lfBranding3} url={`${HOST}/cobrands`} />
          <p className="pf-figcap">The cobrand list — every tenant, rendered through the redesigned table component</p>
        </div>
      </section>

      <ShowcaseBand
        browser={{ src: lfAssessment, url: `${HOST}/assessments` }}
        caption="Customer-side assessments — framework selector, intro video, scored domain cards and report tabs"
        count="Customer view"
      />

      {/* ── Compliance ↔ Assessment ── */}
      <section className="pf-wrap">
        <SectionHead
          label="One entity, two names"
          title={<>The same thing is a <em className="pf-em">Compliance</em> or an <em className="pf-em">Assessment</em> — depending on who you are.</>}
          body="Admins under a cobrand create and manage Compliances. The customers those cobrands serve complete them as Assessments. Same underlying entity, named for the job each role is doing — so the interface speaks each user's language without duplicating the system underneath."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={lfCompliance2} url={`${HOST}/manage-compliances`} />
            <p className="pf-figcap">Admin — building and managing the framework</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfAssessment2} url={`${HOST}/assessments/domains`} />
            <p className="pf-figcap">Customer — completing it, domain by domain</p>
          </div>
        </div>
        <div className="pf-two" style={{ marginTop: 22 }}>
          <div data-reveal>
            <Browser src={lfCompliance3} url={`${HOST}/manage-compliances/questions`} />
            <p className="pf-figcap">Questions and practices — dense data, properly structured</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfAssessment3} url={`${HOST}/assessments/report`} />
            <p className="pf-figcap">Reporting — scores rolled up for the people who need to act on them</p>
          </div>
        </div>
      </section>

      {/* ── Learning ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Learning"
          title={<>The training experience the platform <em className="pf-em">exists to deliver.</em></>}
          body="Cyber awareness training is the product's reason for being, and it was running on a dated player. The rebuilt experience puts chapters, completion state and progress alongside the video, with the supporting material — tasks, Q&A, notes, uploads, transcript — one tab away."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={lfLearning} url={`${HOST}/my-learning`} />
            <p className="pf-figcap">My Learning — course cards with progress rings and resume / start / restart states</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfPlayer} url={`${HOST}/my-learning/section-1`} />
            <p className="pf-figcap">The chaptered player — replacing the old video experience entirely</p>
          </div>
        </div>
      </section>

      <ShowcaseBand
        browser={{ src: lfMfa, url: `${HOST}/login/mfa` }}
        caption="Multi-factor authentication — security steps designed to feel reassuring rather than obstructive"
        count="Auth"
      />

      {/* ── Decisions ── */}
      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>What the redesign actually <em className="pf-em">changed.</em></>} />
        <Decisions items={[
          { n: "01", title: "Top bar → grouped, role-aware side navigation",
            why: "The single biggest fix. A deep multi-module platform can't live in a top bar. The new side rail groups modules under Home, Content Manager and Additional Content — and renders only what the signed-in role can access.",
            tradeoff: "Costs horizontal space — repaid immediately in orientation and scale headroom." },
          { n: "02", title: "Ant Design + Material 3 as the foundation",
            why: "With one designer covering an entire platform alongside active development, consistency had to come from a system rather than page-by-page decisions. Mature references gave proven patterns for tables, tabs, forms and states.",
            tradeoff: "Less bespoke visual novelty — the right trade for a tool people work in daily." },
          { n: "03", title: "Rebuild the components, not just the skin",
            why: "Tables, in-page tabs, buttons and their labels were redesigned as system components — so every module inherited the same behaviour instead of each screen solving it differently.",
            tradeoff: "Slower start than restyling screens, but it's what made a full-platform redesign possible solo." },
          { n: "04", title: "Inline editing and a modern learning experience",
            why: "Editing without leaving context was missing entirely; the video player was dated. Both were rebuilt — inline edit across data views, and a chaptered player for the training content the platform exists to deliver.",
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
