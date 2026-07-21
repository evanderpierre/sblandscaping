"use client";

import { Badge } from "@/components/ui/design-system";
import { Reveal, PhotoImg, HeritageAccent } from "@/components/ui/primitives";

export function Intro() {
  return (
    <section id="about" style={{ background: "var(--sb-black)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "center" }} className="intro-grid">
        <Reveal>
          <Badge tone="accent">Local &amp; Family Owned</Badge>
          <div style={{ display: "flex", alignItems: "center", gap: 9, margin: "14px 0 22px" }}>
            <HeritageAccent />
            <span style={{ color: "rgba(245,245,242,0.5)", fontSize: 12, letterSpacing: ".04em" }}>Built from the ground up. Local. Family-owned. Detail-focused.</span>
          </div>
          <h2 className="ed-head" style={{ color: "#fff", fontSize: "clamp(2rem, 3.4vw, 3.1rem)", margin: "0 0 20px", maxWidth: 520 }}>
            Started at 12 years old. Built into a full-time crew.
          </h2>
          <p style={{ color: "rgba(245,245,242,0.74)", fontSize: 16.5, lineHeight: 1.7, maxWidth: 500, marginBottom: 16 }}>
            S.B. Landscaping started with a simple work ethic: show up, do the job right, and take pride in the details. Alessandro began taking on small mowing and landscaping jobs at 12 years old, eventually turning years of hands-on experience into a full-time business.
          </p>
          <p style={{ color: "rgba(245,245,242,0.74)", fontSize: 16.5, lineHeight: 1.7, maxWidth: 500 }}>
            At 18, he officially launched S.B. Landscaping with a financed half-ton truck, a small trailer, a 20-year-old commercial mower, and the drive to build something of his own. Today, the company is a dedicated three-person crew serving residential and commercial clients across Woburn and nearby communities.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <PhotoImg tone="hardscape" overlay="soft" alt="Residential property with a landscaped walkway and maintained lawn" style={{ height: 420, borderRadius: "var(--radius-xl)" }} />
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 900px) { .intro-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
