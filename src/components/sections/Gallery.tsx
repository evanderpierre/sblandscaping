"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, PhotoImg, ArrowButton } from "@/components/ui/primitives";

type Project = {
  tag: string;
  title: string;
  src: string;
  alt: string;
  focus?: string;
};

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
  {
    tag: "Lawn Care / Brand",
    title: "Branded Lawn Care Finish",
    src: "/images/client-media/photos/optimized/lawn-care-branded-yard-sign-01.webp",
    alt: "Freshly maintained residential lawn with S.B. Landscaping yard sign",
    focus: "50% 52%",
  },
  {
    tag: "Lawn Maintenance",
    title: "Fresh Summer Mowing Stripes",
    src: "/images/client-media/photos/optimized/lawn-maintenance-stripes-01.webp",
    alt: "Fresh lawn maintenance stripes completed by S.B. Landscaping",
    focus: "50% 58%",
  },
  {
    tag: "Plant Install",
    title: "Garden Bed Planting",
    src: "/images/client-media/photos/optimized/garden-bed-planting-01.webp",
    alt: "Newly arranged hosta planting bed installed by S.B. Landscaping",
    focus: "50% 60%",
  },
  {
    tag: "Lawn Maintenance",
    title: "Striped Backyard Finish",
    src: "/images/client-media/photos/optimized/lawn-maintenance-striped-yard-02.webp",
    alt: "Striped backyard lawn after maintenance by S.B. Landscaping",
    focus: "50% 54%",
  },
  {
    tag: "Lawn & Property Care",
    title: "Maintained Lawn and Stone Border",
    src: "/images/client-media/photos/optimized/lawn-maintenance-stone-wall-01.webp",
    alt: "Maintained residential lawn beside an existing natural stone border",
    focus: "50% 58%",
  },
  {
    tag: "Mulch & Shrub Care",
    title: "Finished Property Maintenance",
    src: "/images/client-media/photos/optimized/mulch-shrub-maintenance-01.webp",
    alt: "Fresh mulch beds and maintained shrubs with S.B. Landscaping yard sign",
    focus: "50% 55%",
  },
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
      <PhotoImg src={p.src} alt={p.alt} focus={p.focus} sizes="320px" style={{ position: "absolute", inset: 0, height: "100%" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(10,10,13,0) 45%, rgba(10,10,13,0.82) 100%)" }} />
      <div style={{ position: "absolute", left: 22, bottom: 22, right: 22, pointerEvents: "none" }}>
        <div style={{ color: "var(--sb-flag-green)", fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".04em", marginBottom: 8 }}>{p.tag}</div>
        <div className="ed-head" style={{ color: "#fff", fontSize: 22, marginBottom: 8 }}>{p.title}</div>
      </div>
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
      </div>
    </section>
  );
}
