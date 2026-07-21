"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, PhotoImg, GhostButton, Icon } from "@/components/ui/primitives";

type FeaturedService = { tone?: string; src?: string; alt?: string; focus?: string; title: string; desc: string };

const FEATURED: FeaturedService[] = [
  { tone: "plant", alt: "Landscaped garden bed with red and white flowers", title: "Garden Design & Plant Install", desc: "Custom garden beds, plant selection, and installations designed to match your property and lifestyle." },
  { tone: "forest", alt: "Landscaper mowing a maintained residential lawn", title: "New Landscape Design & Install", desc: "Full outdoor transformations built around your vision, needs, and long-term use of the space." },
  { tone: "hardscape", alt: "Residential property with a landscaped walkway and lawn", title: "Hardscape Design & Install", desc: "Walkways, patios, retaining walls, and hardscape features that add structure and curb appeal." },
  {
    src: "/images/google-business/shrub-trimming-boxwood-colonial-01.jpg",
    alt: "Trimmed boxwood shrubs and clean landscaping by S.B. Landscaping",
    focus: "50% 55%",
    title: "Tree and Shrub Trimming & Pruning",
    desc: "Detailed trimming and pruning to keep properties sharp, healthy, and well maintained.",
  },
  {
    src: "/images/google-business/lawn-mowing-fall-stripes-01.jpg",
    alt: "Freshly mowed lawn with fall stripes by S.B. Landscaping",
    focus: "50% 62%",
    title: "Weekly & Biweekly Landscape Maintenance",
    desc: "Consistent mowing and property care that keeps lawns clean, striped, and well maintained.",
  },
  { tone: "cleanup", alt: "Landscaper maintaining a residential lawn during seasonal cleanup", title: "Spring & Fall Cleanups", desc: "Seasonal cleanup services that clear leaves and debris and prepare properties for the months ahead." },
];

const SECONDARY = [
  { icon: "design", title: "Lawn Care & Fertilization" },
  { icon: "plant", title: "Sod Install" },
  { icon: "pin", title: "Snow Removal" },
];

function ServicePill({ s }: { s: { icon: string; title: string } }) {
  return (
    <a href="#quote" className="service-pill">
      <Icon name={s.icon} size={16} color="var(--sb-flag-green)" className="service-pill-icon" />
      <span>{s.title}</span>
      <Icon name="arrow" size={13} className="service-pill-arrow" color="var(--sb-forest-900)" />
    </a>
  );
}

function FeaturedCard({ s, i }: { s: FeaturedService; i: number }) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShow(true), 60 + i * 70); return () => clearTimeout(t); }, [i]);
  return (
    <div className="service-card" style={{
      position: "relative", height: 340, borderRadius: 18, overflow: "hidden",
      opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 700ms cubic-bezier(.16,1,.3,1), transform 700ms cubic-bezier(.16,1,.3,1)",
    }}>
      <PhotoImg src={s.src} tone={s.tone} alt={s.alt || s.title} focus={s.focus} sharpen style={{ position: "absolute", inset: 0, height: "100%" }} />
      <div className="service-card-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,13,0.08) 0%, rgba(10,10,13,0.12) 28%, rgba(10,10,13,0.55) 58%, rgba(10,10,13,0.94) 100%)", transition: "background 320ms ease" }} />
      <div style={{ position: "absolute", left: 22, right: 22, bottom: 20, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
        <div className="ed-head" style={{ color: "#fff", fontSize: 20, marginBottom: 8, lineHeight: 1.18 }}>{s.title}</div>
        <div style={{ color: "rgba(245,245,242,0.82)", fontSize: 13.5, lineHeight: 1.5, marginBottom: 12 }}>{s.desc}</div>
        <a href="#quote" className="service-cta-static" style={{
          display: "inline-flex", minHeight: 44, alignItems: "center", gap: 6, color: "var(--sb-flag-green)", fontSize: 12.5, fontWeight: 700, whiteSpace: "nowrap",
        }}>
          Request Quote <Icon name="arrow" size={13} style={{ flexShrink: 0 }} />
        </a>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ background: "var(--sb-sage-100)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: 40 }}>
          <Reveal>
            <EyebrowLabel>Our Services</EyebrowLabel>
            <h2 className="ed-head" style={{ fontSize: "clamp(2rem, 3.4vw, 3.1rem)", marginTop: 16, maxWidth: 620 }}>
              Services built around your property.
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 560, fontSize: 15.5, marginTop: 14 }}>
              We specialize in landscape design, installs, and plantings — with maintenance, cleanups, and seasonal services to keep your property sharp year-round.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 36 }} className="featured-grid">
          {FEATURED.map((s, i) => <FeaturedCard key={s.title} s={s} i={i} />)}
        </div>

        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--sb-forest-900)", marginBottom: 16 }}>
          Also available
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }} className="secondary-pills">
          {SECONDARY.map((s) => <ServicePill key={s.title} s={s} />)}
        </div>

        <a href="#quote"><GhostButton size="md" light={false}>Request a Quote</GhostButton></a>
      </div>
      <style>{`
        .service-card { box-shadow: var(--shadow-sm); transition: box-shadow 320ms cubic-bezier(.16,1,.3,1), transform 320ms cubic-bezier(.16,1,.3,1); }
        .service-card:hover { box-shadow: var(--shadow-card-hover); transform: translateY(-6px); }
        .service-card:hover .photo-hover-img { transform: scale(1.08); }
        .service-card:hover .service-card-overlay { background: linear-gradient(180deg, rgba(10,10,13,0.16) 0%, rgba(10,10,13,0.22) 28%, rgba(10,10,13,0.68) 58%, rgba(10,10,13,0.97) 100%) !important; }
        .service-pill {
          display: inline-flex; align-items: center; gap: 10px; padding: 11px 18px;
          background: rgba(30,51,40,0.06); border: 1px solid rgba(30,51,40,0.16); border-radius: 999px;
          color: var(--sb-black); font-size: 14px; font-weight: 600; transition: background 240ms ease, border-color 240ms ease, transform 240ms ease;
        }
        .service-pill-arrow { transition: transform 240ms cubic-bezier(.16,1,.3,1); }
        .service-pill:hover { background: var(--sb-forest-900); color: #fff; border-color: var(--sb-forest-900); transform: translateY(-2px); }
        .service-pill:hover .service-pill-arrow, .service-pill:hover .service-pill-icon { stroke: #fff; }
        .service-pill:hover .service-pill-arrow { transform: translateX(3px); }
        @media (max-width: 1080px) { .featured-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .featured-grid { grid-template-columns: 1fr !important; } .secondary-pills { flex-direction: column; align-items: stretch; } }
      `}</style>
    </section>
  );
}
