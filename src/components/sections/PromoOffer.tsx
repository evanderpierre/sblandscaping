"use client";

import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, LeafShape, GhostButton, PhotoImg } from "@/components/ui/primitives";

export function PromoOffer() {
  return (
    <section style={{ background: "var(--sb-black)", padding: "clamp(48px,7vw,88px) clamp(20px,6vw,96px)", position: "relative", overflow: "hidden" }}>
      <PhotoImg
        src="/images/google-business/lawn-mowing-fall-stripes-01.jpg"
        alt="Freshly mowed lawn with fall stripes by S.B. Landscaping"
        focus="50% 55%"
        sizes="100vw"
        style={{ position: "absolute", inset: 0, height: "100%", opacity: 0.24 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(10,10,13,.94), rgba(10,10,13,.76), rgba(10,10,13,.92))" }} />
      <LeafShape size={220} rotate={-25} opacity={0.05} style={{ top: -30, left: -40 }} />
      <Reveal style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto", border: "1px solid rgba(245,245,242,0.16)", borderRadius: "var(--radius-xl)",
          padding: "clamp(32px,5vw,56px)", textAlign: "center", position: "relative",
        }}>
          <EyebrowLabel inverse>Seasonal Offer</EyebrowLabel>
          <h2 className="ed-head" style={{ color: "#fff", fontSize: "clamp(1.9rem, 3.4vw, 3rem)", margin: "18px 0 14px" }}>
            Book your fall or winter service early &amp; save 10%
          </h2>
          <p style={{ color: "rgba(245,245,242,0.72)", fontSize: 16, lineHeight: 1.6, maxWidth: 560, margin: "0 auto 28px" }}>
            Plan ahead for seasonal cleanup, aeration, overseeding, or snow removal. S.B. Landscaping is now booking fall and winter services for Woburn and surrounding communities.
          </p>
          <a href="#quote"><GhostButton size="lg" light>Claim the Seasonal Offer</GhostButton></a>
          <div style={{ color: "rgba(245,245,242,0.45)", fontSize: 12.5, marginTop: 18 }}>
            Offer applies to fall cleanup, aeration and overseeding, and snow removal services.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
