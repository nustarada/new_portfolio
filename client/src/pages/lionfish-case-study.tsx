import React from "react";
import {
  CaseStudyShell, CaseHero, ChallengeSolution, Timeline, SectionHead,
  ShowcaseBand, StickyWalkthrough, Decisions, Statement, Outcomes,
  MoreProjects, PageFooter, Browser, BeforeAfter, type Step,
} from "@/components/case-study/template";

import lfOldBranding from "@assets/lf-old-branding.png";
import lfOldLearning from "@assets/lf-old-learning.png";

import lfLogin from "@assets/lf-login.jpg";
import lfMfa from "@assets/lf-mfa.jpg";
import lfDashboard from "@assets/lf-dashboard.png";
import lfBranding from "@assets/lf-branding.png";
import lfBranding2 from "@assets/lf-branding2.png";
import lfBranding3 from "@assets/lf-branding3.png";
import lfAssessment from "@assets/lf-assessment.png";
import lfAssessment2 from "@assets/lf-assessment2.png";
import lfAssessment3 from "@assets/lf-assessment3.jpg";
import lfCompliance from "@assets/lf-compliance.png";
import lfCompliance2 from "@assets/lf-compliance2.png";
import lfCompliance3 from "@assets/lf-compliance3.jpg";
import lfLearning from "@assets/lf-learning.png";
import lfLearning2 from "@assets/lf-learning2.jpg";
import lfPlayer from "@assets/lf-player.jpg";

import liffoThumb from "@assets/Liffo_thumbnail_1770103573838.jpg";
import acedboardThumb from "@assets/acedboard_thumbnail.svg";
import twoHLThumb from "@assets/2_Hour_Learning_thumbnail_1770103573825.jpg";

const ACCENT = "#B8860B";
const HOST = "cybertacklebox.com";

const steps: Step[] = [
  { n: "01", img: lfLogin, url: `${HOST}/login`, chip: "Auth · MFA",
    title: <>A front door that <em className="pf-em">earns trust</em></>,
    body: "A security platform has to read as credible. The split layout pairs a brand image with a single-column form, keeping consent and recovery visible rather than in fine print." },
  { n: "02", img: lfDashboard, url: `${HOST}/dashboard`, chip: "Side nav · role-aware",
    title: <>The fix that changed <em className="pf-em">everything</em></>,
    body: "The top bar becomes a grouped side rail of Home, Content Manager and Additional Content, rendering only what the signed-in role can access. Task counts, an activity log and a calendar sit where they can actually be scanned." },
  { n: "03", img: lfCompliance, url: `${HOST}/manage-compliances`, chip: "Admin · manage",
    title: <>Compliances, <em className="pf-em">managed</em></>,
    body: "Cobrand admins build and maintain compliance frameworks, domains, practices and questions, with proper tables, in-page tabs and inline editing where the old platform forced a round trip through a separate page." },
  { n: "04", img: lfAssessment, url: `${HOST}/assessments`, chip: "Customer · complete",
    title: <>The same thing, seen as an <em className="pf-em">Assessment</em></>,
    body: "What an admin manages as a Compliance, a customer completes as an Assessment. Framework selector, intro video, scored domain cards and a Dashboard / Domains / Report / Summary tab set, one entity, two vocabularies." },
  { n: "05", img: lfPlayer, url: `${HOST}/my-learning/section-1`, chip: "Learning · chapters",
    title: <>A learning experience worth <em className="pf-em">finishing</em></>,
    body: "The previous player is replaced by a chaptered layout with completion states in the right rail and Overview, Task, Q&A, Notes, Uploads and Video Script tabs beneath the video." },
];

export default function LionfishCaseStudy() {
  return (
    <CaseStudyShell accent={ACCENT} project="Lionfish" year="2025">
      <CaseHero
        title="Lionfish"
        tagline={<>I redesigned a multi-tenant cybersecurity platform and <em className="pf-em">shipped it to production.</em></>}
        meta={[
          ["Client", "Lionfish Cyber Security · Cyber Tacklebox"],
          ["Industry", "Cybersecurity · Compliance & workforce training · US"],
          ["Services", "UX Audit, Information Architecture, Design System, End-to-end UI"],
          ["Role", "Lead Designer, sole designer on the redesign"],
          ["Scope", "Full platform · multi-tenant, role-based, light & dark"],
          ["Year", "7 months design · live in production"],
        ]}
      />

      <div className="pf-wrap">
        <ChallengeSolution
          challenge="A functioning platform with significant usability problems. Navigation sat in a top bar rather than a side rail, menu structure was unclear, UX writing was inconsistent, inline editing was unavailable, the video player was dated, tables were poorly structured, in-page tabs lacked hierarchy and buttons carried ambiguous labels."
          solution="A complete redesign on a systematic foundation, Ant Design and Material 3 as reference systems, replacing the top bar with a grouped, role-aware side navigation, and rebuilding tables, tabs, buttons, inline editing and the learning experience as consistent components across every module, in both light and dark themes."
        />
        <Timeline phases={[
          { label: "Months 1–2", title: "Audit + Architecture", body: "Auditing the live platform module by module, cataloguing the usability issues, and restructuring the information architecture around a grouped side navigation that adapts to each role." },
          { label: "Months 3–6", title: "System + Module Design", body: "Building the component foundation, then redesigning every module: dashboards, compliances, assessments, learning, cobrand branding, roles and permissions, in light and dark." },
          { label: "Month 7 →", title: "Agile Delivery", body: "Design ran alongside active development, staying ahead of engineering while maintaining consistency as scope moved. Now live in production." },
        ]} />
      </div>

      <div style={{ marginTop: 70 }}>
        <ShowcaseBand
          browser={{ src: lfDashboard, url: `${HOST}/dashboard`, alt: "Cyber Tacklebox dashboard" }}
          caption="The redesigned dashboard, grouped side navigation, task counts, activity log and calendar"
          count="Dark theme"
        />
      </div>

      {/* ── The problem ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Problem"
          title={<>A functioning platform that was <em className="pf-em">difficult to work in.</em></>}
          body="This wasn't a broken product, it was execution debt, accumulated across navigation, components and copy. Each issue was small on its own; together they made a capable platform feel unusable."
        />
        <div className="pf-three">
          {[
            { t: "Navigation", d: "A top bar carrying a deep, multi-module platform, with a menu structure that obscured where features lived." },
            { t: "Components", d: "Tables poorly structured and placed, in-page tab menus unclear, and buttons inconsistently labelled." },
            { t: "Interaction", d: "No inline editing, a dated video player, and features that existed but were not properly connected." },
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
          title={<>The same screens, <em className="pf-em">rebuilt.</em></>}
          body="Old platform on the left, redesign on the right, same module, same job. The clearest tell is the top of each screen: a horizontal menu that had run out of room, replaced by a grouped side rail that scales with the platform."
        />
        <BeforeAfter
          before={lfOldBranding}
          after={lfBranding}
          beforeLabel="Old, cobrand branding"
          afterLabel="New, cobrand branding"
          caption="Cobrand branding, the same job (theme, colours, logo, subdomain), rebuilt with a clear in-page tab set, structured field groups and real form hierarchy"
        />
        <div style={{ marginTop: 26 }}>
          <BeforeAfter
            before={lfOldLearning}
            after={lfLearning}
            beforeLabel="Old, My Learning"
            afterLabel="New, My Learning"
            caption="My Learning, a flat list of modules with 'Select one' dropdowns becomes course cards with real progress states"
          />
        </div>
        <div className="pf-ecard" style={{ marginTop: 26 }} data-reveal>
          <p className="lbl">The detail that gives it away</p>
          <p className="note" style={{ marginTop: 0 }}>
            The old top navigation ended in a <b>"MORE"</b> overflow menu, the platform had outgrown its own navigation, and
            modules were disappearing behind a dropdown. That single detail is the whole argument for the side rail.
          </p>
        </div>
      </section>

      <Statement kicker="The reframe">
        Not a reskin, a <em className="pf-em">systematic rebuild.</em> Fix the foundation once, and every module inherits the fix.
      </Statement>

      {/* ── Walkthrough ── */}
      <section className="pf-wrap">
        <SectionHead
          label="The Platform"
          title={<>Five modules on one system, <em className="pf-em">screen by screen.</em></>}
        />
        <StickyWalkthrough steps={steps} variant="desktop" />
      </section>

      {/* ── Multi-tenant ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Multi-tenant by design"
          title={<>One platform, many <em className="pf-em">tenants and roles.</em></>}
          body="Lionfish is super admin over the whole platform. Companies and schools become cobrands, their own branded instance, using their logo and brand colours, where they train both internal users and their own customers. Every screen has to hold up under someone else's palette."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={lfBranding} url={`${HOST}/cobrands/team-pumpkin`} />
            <p className="pf-figcap">Cobrand settings, logo, primary and background colour, alias and subdomain configuration</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfBranding2} url={`${HOST}/cobrands/team-pumpkin/accounts`} />
            <p className="pf-figcap">In-page tabs, Main Info, Accounts/Users, Customers, Students, Files, Email Settings</p>
          </div>
        </div>
        <div style={{ marginTop: 22 }} data-reveal>
          <Browser src={lfBranding3} url={`${HOST}/cobrands`} />
          <p className="pf-figcap">The cobrand list, every tenant, rendered through the redesigned table component</p>
        </div>
      </section>

      <ShowcaseBand
        browser={{ src: lfAssessment, url: `${HOST}/assessments` }}
        caption="Customer-side assessments, framework selector, intro video, scored domain cards and report tabs"
        count="Customer view"
      />

      {/* ── Compliance ↔ Assessment ── */}
      <section className="pf-wrap">
        <SectionHead
          label="One entity, two names"
          title={<>The same object is a <em className="pf-em">Compliance</em> or an <em className="pf-em">Assessment</em>, depending on the role.</>}
          body="Admins under a cobrand create and manage Compliances. The customers those cobrands serve complete them as Assessments. Same underlying entity, named for the job each role is doing, so the interface speaks each user's language without duplicating the system underneath."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={lfCompliance2} url={`${HOST}/manage-compliances`} />
            <p className="pf-figcap">Admin, building and managing the framework</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfAssessment2} url={`${HOST}/assessments/domains`} />
            <p className="pf-figcap">Customer, completing it, domain by domain</p>
          </div>
        </div>
        <div className="pf-two" style={{ marginTop: 22 }}>
          <div data-reveal>
            <Browser src={lfCompliance3} url={`${HOST}/manage-compliances/questions`} />
            <p className="pf-figcap">Questions and practices, dense data, properly structured</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfAssessment3} url={`${HOST}/assessments/report`} />
            <p className="pf-figcap">Reporting, scores rolled up for the people who need to act on them</p>
          </div>
        </div>
      </section>

      {/* ── Learning ── */}
      <section className="pf-wrap">
        <SectionHead
          label="Learning"
          title={<>The training experience at the <em className="pf-em">centre of the platform.</em></>}
          body="Cyber awareness training is the product's reason for being, and it was running on a dated player. The rebuilt experience puts chapters, completion state and progress alongside the video, with the supporting material, tasks, Q&A, notes, uploads, transcript, one tab away."
        />
        <div className="pf-two">
          <div data-reveal>
            <Browser src={lfLearning} url={`${HOST}/my-learning`} />
            <p className="pf-figcap">My Learning, course cards with progress rings and resume / start / restart states</p>
          </div>
          <div data-reveal style={{ ["--d" as any]: ".1s" }}>
            <Browser src={lfPlayer} url={`${HOST}/my-learning/section-1`} />
            <p className="pf-figcap">The chaptered player, replacing the old video experience entirely</p>
          </div>
        </div>
      </section>

      <ShowcaseBand
        browser={{ src: lfMfa, url: `${HOST}/login/mfa` }}
        caption="Multi-factor authentication, security steps designed to feel reassuring rather than obstructive"
        count="Auth"
      />

      {/* ── Decisions ── */}
      <section className="pf-wrap">
        <SectionHead label="Key decisions" title={<>What the redesign <em className="pf-em">changed.</em></>} />
        <Decisions items={[
          { n: "01", title: "Grouped, role-aware side navigation",
            why: "The most significant change I made. A deep multi-module platform cannot be navigated from a top bar, so I grouped modules into a side rail under Home, Content Manager and Additional Content, rendering only what the signed-in role can access.",
            tradeoff: "Costs horizontal space, returned in orientation and room to scale." },
          { n: "02", title: "Ant Design and Material 3 as the foundation",
            why: "I was covering an entire platform alongside active development, so consistency had to come from a system rather than page-by-page decisions. Ant Design and Material 3 gave me proven patterns for tables, forms and navigation.",
            tradeoff: "Less bespoke visual character, appropriate for a tool used daily." },
          { n: "03", title: "Rebuild the components, not the surface",
            why: "I rebuilt tables, in-page tabs, buttons and their labels as system components, so every module inherited the same behaviour rather than each screen solving it separately.",
            tradeoff: "Slower to start than restyling screens, and what made a full-platform redesign feasible on my own." },
          { n: "04", title: "Inline editing and a modern learning experience",
            why: "Editing in place was unavailable and the video player was dated. I rebuilt both: inline editing across data views, and a chaptered player for the training content.",
            tradeoff: "More interaction states to design and specify for engineering." },
          { n: "05", title: "Cobrand theming as a first-class constraint",
            why: "Every screen had to hold up under a tenant's own logo and brand colours, so I kept colour structural and carried no meaning by hue alone. The system stays legible whatever palette a cobrand applies.",
            tradeoff: "Rules out colour-dependent visual devices across the platform." },
        ]} />
      </section>

      <section className="pf-wrap">
        <SectionHead
          label="Outcomes"
          title={<>Seven months, delivered alongside development, and <em className="pf-em">live in production.</em></>}
        />
        <Outcomes items={[
          { n: <>1 <em className="pf-em">designer</em></>, l: "The full platform redesign, end to end" },
          { n: <>Side <em className="pf-em">nav</em></>, l: "Grouped and role-aware, replacing the top bar" },
          { n: <>2 <em className="pf-em">themes</em></>, l: "Light and dark, across every module" },
          { n: <>Live</>, l: "In production and in use by cobrand organisations" },
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
