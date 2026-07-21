"use client";

import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, LeafShape, GhostButton, Icon } from "@/components/ui/primitives";

const POINTS = [
  "Overgrown shrubs",
  "Tired mulch beds",
  "Seasonal leaves and debris",
  "Patchy or unmaintained lawn",
  "Yard cleanup before events or listing a home",
];

export function PainPoint() {
  return (
    <section style={{ background: "var(--sb-black)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)", position: "relative", overflow: "hidden" }}>
      <LeafShape size={240} rotate={20} opacity={0.06} style={{ top: -30, right: -50 }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,0.9fr)", gap: 56, alignItems: "center" }} className="pain-grid">
        <Reveal>
          <EyebrowLabel inverse>A Little Overdue?</EyebrowLabel>
          <h2 className="ed-head" style={{ color: "#fff", fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)", margin: "16px 0 18px", maxWidth: 520 }}>
            Need your yard cleaned up before it gets out of hand?
          </h2>
          <p style={{ color: "rgba(245,245,242,0.72)", fontSize: 16, lineHeight: 1.6, maxWidth: 480, marginBottom: 30 }}>
            Whether your lawn needs regular care, your beds need fresh mulch, or your shrubs need shaping, S.B. Landscaping helps bring your outdoor space back under control.
          </p>
          <a href="#quote"><GhostButton size="lg" light>Get a Free Quote</GhostButton></a>
        </Reveal>
        <Reveal delay={100}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {POINTS.map((p) => (
              <li key={p} style={{
                display: "flex", alignItems: "center", gap: 14, padding: "16px 4px",
                borderBottom: "1px solid rgba(245,245,242,0.1)", color: "rgba(245,245,242,0.88)", fontSize: 15.5,
              }}>
                <Icon name="check" size={17} color="var(--sb-flag-green)" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <style>{`@media (max-width: 880px) { .pain-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
