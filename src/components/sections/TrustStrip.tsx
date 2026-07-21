"use client";

import { Reveal, Icon } from "@/components/ui/primitives";

const STATS = [
  { icon: "pin", title: "Local Service", desc: "Woburn & nearby towns" },
  { icon: "check", title: "Reliable Crew", desc: "Clean, detailed work" },
  { icon: "quote", title: "Free Estimates", desc: "Easy quote process" },
  { icon: "lawn", title: "Residential Focus", desc: "Outdoor property care" },
];

export function TrustStrip() {
  return (
    <section style={{ background: "var(--sb-white)", padding: "0 clamp(20px,6vw,96px)", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", transform: "translateY(-30px)" }}>
        <Reveal>
          <div style={{
            background: "rgba(10,10,13,0.6)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(245,245,242,0.14)", borderRadius: 999, boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          }} className="trust-bar">
            {STATS.map((s, i) => (
              <div key={s.title} style={{
                padding: "18px 20px", display: "flex", alignItems: "center", gap: 12,
                borderLeft: i > 0 ? "1px solid rgba(245,245,242,0.1)" : "none",
              }} className="trust-item">
                <Icon name={s.icon} size={17} color="var(--sb-flag-green)" />
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 13.5, lineHeight: 1.2 }}>{s.title}</div>
                  <div style={{ color: "rgba(245,245,242,0.58)", fontSize: 11.5, lineHeight: 1.3 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .trust-bar { border-radius: var(--radius-xl) !important; grid-template-columns: 1fr 1fr !important; }
          .trust-item:nth-child(2n+1) { border-left: none !important; }
          .trust-item:nth-child(n+3) { border-top: 1px solid rgba(245,245,242,0.1); }
        }
      `}</style>
    </section>
  );
}
