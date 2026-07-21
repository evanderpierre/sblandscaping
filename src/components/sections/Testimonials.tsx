"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, ArrowButton, prefersReduced } from "@/components/ui/primitives";

const REVIEWS = [
  { quote: "Professional, great communication, and they do a great job with our large yard.", name: "Local Customer", loc: "Woburn, MA" },
  { quote: "Great prompt service for my spring cleanup and lawn maintenance.", name: "Local Customer", loc: "Winchester, MA" },
  { quote: "Alessandro and his crew are great. Would highly recommend.", name: "Local Customer", loc: "Burlington, MA" },
  { quote: "The crew was meticulous, cleaned everything up, and my yard has never looked better.", name: "Local Customer", loc: "Stoneham, MA" },
];

export function Testimonials() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (prefersReduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const r = REVIEWS[i];
  return (
    <section id="reviews" style={{ background: "var(--sb-black)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <EyebrowLabel inverse>Trusted By Local Homeowners</EyebrowLabel>
        </Reveal>
        <div style={{ display: "flex", justifyContent: "center", gap: 3, margin: "18px 0 10px" }}>
          <svg width="120" height="20" viewBox="0 0 120 20" fill="none">
            {[0, 1, 2, 3, 4].map((s) => (
              <path key={s} transform={`translate(${s * 24}, 0)`} d="M10 0l2.9 6.5 7.1.7-5.3 4.8 1.5 7-6.2-3.7-6.2 3.7 1.5-7L0 7.2l7.1-.7z" fill="var(--sb-flag-green)" />
            ))}
          </svg>
        </div>
        <p key={i} className="ed-head" style={{
          color: "#fff", fontSize: "clamp(21px, 3vw, 32px)",
          lineHeight: 1.38, margin: "10px 0 28px",
        }}>&ldquo;{r.quote}&rdquo;</p>
        <div style={{ color: "rgba(245,245,242,0.6)", fontSize: 14, marginBottom: 32 }}>{r.name} · {r.loc}</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
          <ArrowButton dir="left" light onClick={() => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length)} size={40} />
          <div style={{ display: "flex", gap: 10 }}>
            {REVIEWS.map((_, idx) => (
              <button key={idx} aria-label={`Show review ${idx + 1}`} onClick={() => setI(idx)} style={{
                width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", padding: 0,
                background: idx === i ? "var(--sb-flag-green)" : "rgba(245,245,242,0.25)",
                transition: "background 240ms ease",
              }} />
            ))}
          </div>
          <ArrowButton dir="right" light onClick={() => setI((v) => (v + 1) % REVIEWS.length)} size={40} />
        </div>
      </div>
    </section>
  );
}
