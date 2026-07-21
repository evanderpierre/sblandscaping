"use client";

import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, PhotoImg, GhostButton, Icon } from "@/components/ui/primitives";

const REASONS = [
  { icon: "check", title: "Thorough, detail-focused work", desc: "Every job is handled with care, from the big picture down to the final edge." },
  { icon: "quote", title: "Reliable communication", desc: "You know the plan, the timing, and what to expect throughout the project." },
  { icon: "design", title: "Built around your vision", desc: "We focus on dialing in exactly what you want and fitting the project to your lifestyle." },
  { icon: "pin", title: "Local & family owned", desc: "A Woburn-based company serving nearby Massachusetts communities." },
  { icon: "lawn", title: "Residential & commercial", desc: "Services available for both homeowners and commercial properties." },
  { icon: "plant", title: "Specialized crew", desc: "A three-person crew with different talents across maintenance, installs, and plantings." },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" style={{ background: "var(--sb-sage-100)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,0.85fr) minmax(0,1.15fr)", gap: 64, alignItems: "center" }} className="why-grid">
        <Reveal>
          <PhotoImg tone="hardscape" overlay="soft" alt="Crew installing paver walkway" style={{ height: 520, borderRadius: "var(--radius-xl)" }} />
        </Reveal>
        <div>
          <Reveal>
            <EyebrowLabel>Why Trust Us</EyebrowLabel>
            <h2 className="ed-head" style={{ color: "var(--sb-black)", fontSize: "clamp(2rem, 3.4vw, 3.1rem)", margin: "16px 0 40px", maxWidth: 500 }}>
              Why Woburn trusts S.B. Landscaping.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 36 }} className="why-cards">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 60} style={{
                background: "rgba(245,245,242,0.55)", border: "1px solid rgba(30,51,40,0.1)",
                borderRadius: "var(--radius-lg)", padding: 22, display: "flex", flexDirection: "column", gap: 10,
              }}>
                <Icon name={r.icon} size={20} color="var(--sb-forest-900)" />
                <div style={{ color: "var(--sb-black)", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: 16.5 }}>{r.title}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: 13.5, lineHeight: 1.55 }}>{r.desc}</div>
              </Reveal>
            ))}
          </div>
          <a href="#quote"><GhostButton size="lg" light={false}>Start a Quote</GhostButton></a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .why-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 520px) { .why-cards { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
