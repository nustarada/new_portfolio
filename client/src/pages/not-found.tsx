import React from "react";
import { Link } from "wouter";
import { PageFooter } from "@/components/case-study/template";
import "@/styles/portfolio.css";

export default function NotFound() {
  return (
    <div className="pf" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <nav className="pf-nav">
        <Link href="/"><a className="logo">Karan Gadhave</a></Link>
        <div className="links"><Link href="/"><a>Work</a></Link></div>
      </nav>

      <main className="pf-wrap" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 140, paddingBottom: 80 }}>
        <p className="pf-label" style={{ marginBottom: 34 }}>Error 404</p>
        <h1 style={{ font: "300 clamp(44px,7vw,96px)/1.06 var(--font-display)", letterSpacing: "-.02em", maxWidth: 900 }}>
          This page doesn't exist -<br />but the <em className="pf-em">work does.</em>
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--soft)", maxWidth: 460, marginTop: 30 }}>
          The link may be out of date, or the page has moved. Everything worth seeing is one click away.
        </p>
        <div style={{ marginTop: 46 }}>
          <Link href="/"><a className="pf-cta">← Back to the work</a></Link>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
