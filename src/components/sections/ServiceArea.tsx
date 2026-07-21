"use client";

import { Badge, EyebrowLabel } from "@/components/ui/design-system";
import { Reveal } from "@/components/ui/primitives";

const AREAS = ["Woburn", "Stoneham", "Wakefield", "Saugus"];

export function ServiceArea() {
  return (
    <section id="service-area" style={{ background: "var(--sb-white)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 64, alignItems: "center" }} className="area-grid">
        <Reveal>
          <EyebrowLabel>Service Area</EyebrowLabel>
          <h2 className="ed-head" style={{ fontSize: "clamp(2rem, 3.4vw, 3.1rem)", margin: "16px 0 20px", maxWidth: 500 }}>
            Proudly serving Woburn and nearby communities.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.6, marginBottom: 28, maxWidth: 460 }}>
            S.B. Landscaping provides professional landscaping services throughout Woburn, Stoneham, Wakefield, Saugus, and surrounding Massachusetts communities — for both residential and commercial clients.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {AREAS.map((a) => <Badge key={a} tone="sage">{a}</Badge>)}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ height: 360, borderRadius: "var(--radius-xl)", overflow: "hidden", position: "relative", background: "var(--sb-sage-100)" }}>
            <svg viewBox="0 0 400 360" width="100%" height="100%" style={{ display: "block" }}>
              <rect width="400" height="360" fill="#DDE4D6" />
              <g stroke="rgba(30,51,40,0.18)" strokeWidth="1.5">
                <path d="M0 120 C 100 100, 180 160, 400 130" fill="none" />
                <path d="M0 220 C 120 260, 220 190, 400 240" fill="none" />
                <path d="M140 0 C 160 120, 90 220, 130 360" fill="none" />
                <path d="M280 0 C 250 100, 320 220, 260 360" fill="none" />
              </g>
              {[[80, 90], [210, 70], [320, 150], [110, 210], [250, 260], [180, 300], [60, 270], [340, 240]].map(([cx, cy], i) => (
                <g key={i}>
                  {i === 2 && <circle cx={cx} cy={cy} r="9" fill="none" stroke="#1FA463" strokeWidth="2" className="sa-ping" style={{ transformOrigin: `${cx}px ${cy}px` }} />}
                  <circle cx={cx} cy={cy} r={i === 2 ? 9 : 6} fill={i === 2 ? "#1FA463" : "#1E3328"} stroke="#F5F5F2" strokeWidth="2" />
                </g>
              ))}
            </svg>
            <div style={{ position: "absolute", left: 16, bottom: 16, background: "rgba(10,10,13,0.75)", color: "#fff", fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 999 }}>Service-area map — illustrative</div>
            <style>{`
              @keyframes sa-ping { 0% { transform: scale(1); opacity: 0.9; } 100% { transform: scale(2.4); opacity: 0; } }
              .sa-ping { animation: sa-ping 2.2s ease-out infinite; }
            `}</style>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 900px) { .area-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
