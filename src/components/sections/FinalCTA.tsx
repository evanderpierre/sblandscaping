"use client";

import { Button } from "@/components/ui/design-system";
import { Reveal, PhotoImg, GhostButton } from "@/components/ui/primitives";

export function FinalCTA() {
  return (
    <section id="get-quote" style={{ padding: "var(--section-pad-y) clamp(20px,6vw,96px)", background: "var(--sb-black)" }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", minHeight: 420 }}>
          <PhotoImg tone="forest" alt="Finished backyard landscape" style={{ position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(10,10,13,0.88) 25%, rgba(30,51,40,0.5) 100%)" }} />
          <div style={{ position: "relative", padding: "clamp(40px,6vw,80px)", display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 420, maxWidth: 640 }}>
            <h2 className="ed-head" style={{ color: "#fff", fontSize: "clamp(2.2rem, 4vw, 3.6rem)", margin: "0 0 20px" }}>
              Ready to get your yard looking its best?
            </h2>
            <p style={{ color: "rgba(245,245,242,0.78)", fontSize: 17, lineHeight: 1.6, margin: "0 0 36px" }}>
              Tell us what you need done and we&rsquo;ll get back to you with next steps.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#quote"><Button variant="accent" size="lg">Request a Free Quote</Button></a>
              <a href="tel:7818541078"><GhostButton size="lg" light>Call Now</GhostButton></a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
