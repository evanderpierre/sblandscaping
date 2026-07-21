"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, PhotoImg, ArrowButton, Icon } from "@/components/ui/primitives";

type Project = { tag: string; title: string; src?: string; tone?: string; alt: string; focus?: string; loc?: string };

const PROJECTS: Project[] = [
  {
    tag: "Lawn Care / Brand",
    title: "Finished Lawn Care Project",
    src: "/images/google-business/lawn-care-white-colonial-sign-01.jpg",
    alt: "S.B. Landscaping lawn care project in Woburn with branded yard sign",
    focus: "28% 55%",
  },
  {
    tag: "Shrub Trimming / Pruning",
    title: "Precision Boxwood Trimming",
    src: "/images/google-business/shrub-trimming-boxwood-colonial-01.jpg",
    alt: "Trimmed boxwood shrubs and clean landscaping by S.B. Landscaping",
    focus: "50% 52%",
  },
  {
    tag: "Lawn Maintenance / Fall Care",
    title: "Fresh Fall Mowing Stripes",
    src: "/images/google-business/lawn-mowing-fall-stripes-01.jpg",
    alt: "Freshly mowed lawn with fall stripes by S.B. Landscaping",
    focus: "50% 58%",
  },
  {
    tag: "Shrub Trimming Detail",
    title: "Rounded Shrub Pruning",
    src: "/images/google-business/shrub-trimming-rounded-bush-01.jpg",
    alt: "Rounded shrub trimming detail by S.B. Landscaping",
    focus: "50% 48%",
  },
  { tag: "Garden Design & Plant Install", title: "Garden Bed Install", loc: "Woburn, MA", tone: "plant", alt: "Garden bed planting and landscape design" },
  { tag: "Hardscape", title: "Walkway & Patio Install", loc: "Saugus, MA", tone: "hardscape", alt: "Residential hardscape walkway and patio" },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      style={{
        position: "relative", height: 420, width: 320, flexShrink: 0, borderRadius: 20,
        overflow: "hidden", cursor: "pointer", boxShadow: "var(--shadow-sm)", scrollSnapAlign: "start",
        transition: "box-shadow 320ms cubic-bezier(.16,1,.3,1), transform 320ms cubic-bezier(.16,1,.3,1)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-card-hover)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "var(--shadow-sm)"; e.currentTarget.style.transform = "none"; }}
    >
      <PhotoImg src={p.src} tone={p.tone} alt={p.alt} focus={p.focus} sizes="320px" style={{ position: "absolute", inset: 0, height: "100%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,13,0) 45%, rgba(10,10,13,0.82) 100%)" }} />
      <div style={{ position: "absolute", left: 22, bottom: 22, right: 22 }}>
        <div style={{ color: "var(--sb-flag-green)", fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 8 }}>{p.tag}</div>
        <div className="ed-head" style={{ color: "#fff", fontSize: 22, marginBottom: 8 }}>{p.title}</div>
        {p.loc && (
          <span style={{ color: "rgba(245,245,242,0.85)", fontSize: 12.5, display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="pin" size={13} /> {p.loc}
          </span>
        )}
      </div>
    </div>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = React.useState(50);
  return (
    <div style={{ position: "relative", height: 420, width: 320, flexShrink: 0, borderRadius: 20, overflow: "hidden", boxShadow: "var(--shadow-sm)", scrollSnapAlign: "start" }}>
      <PhotoImg tone="cleanup" alt="Before — overgrown property" style={{ position: "absolute", inset: 0, height: "100%" }} />
      <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 0 0 ${pos}%)` }}>
        <PhotoImg tone="lawn" alt="After — finished landscape" style={{ height: "100%" }} />
      </div>
      <span style={{ position: "absolute", left: 16, top: 16, background: "rgba(10,10,13,0.6)", color: "#fff", fontSize: 11.5, fontWeight: 700, padding: "5px 12px", borderRadius: 999 }}>BEFORE</span>
      <span style={{ position: "absolute", right: 16, top: 16, background: "var(--sb-flag-green)", color: "#0A0A0D", fontSize: 11.5, fontWeight: 700, padding: "5px 12px", borderRadius: 999 }}>AFTER</span>
      <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 3, background: "#fff", boxShadow: "0 0 0 5px rgba(255,255,255,0.3)", transform: "translateX(-1.5px)", pointerEvents: "none" }} />
      <input type="range" min="0" max="100" value={pos} onChange={(e) => setPos(Number(e.target.value))}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0, cursor: "ew-resize", margin: 0 }} />
      <div style={{ position: "absolute", left: 22, bottom: 22, color: "#fff", fontSize: 12.5, fontWeight: 600 }}>Drag to compare</div>
    </div>
  );
}

export function Gallery() {
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const scrollBy = (dir: number) => { if (trackRef.current) trackRef.current.scrollBy({ left: dir * 340, behavior: "smooth" }); };
  return (
    <section id="projects" style={{ background: "var(--sb-white)", padding: "var(--section-pad-y) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px,6vw,96px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          <Reveal>
            <EyebrowLabel>Featured Projects</EyebrowLabel>
            <h2 className="ed-head" style={{ fontSize: "clamp(2rem, 3.4vw, 3.1rem)", marginTop: 16, maxWidth: 560 }}>
              See the difference quality landscaping makes.
            </h2>
          </Reveal>
          <div style={{ display: "flex", gap: 10 }}>
            <ArrowButton dir="left" onClick={() => scrollBy(-1)} />
            <ArrowButton dir="right" onClick={() => scrollBy(1)} />
          </div>
        </div>
      </div>
      <div ref={trackRef} className="no-scrollbar" style={{
        display: "flex", gap: 20, overflowX: "auto", scrollSnapType: "x mandatory",
        padding: "4px clamp(20px,6vw,96px) 12px",
      }}>
        {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}
        <BeforeAfterSlider />
      </div>
    </section>
  );
}
