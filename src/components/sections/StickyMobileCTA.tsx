"use client";

import { Icon } from "@/components/ui/primitives";

export function StickyMobileCTA() {
  return (
    <div className="sticky-mobile-cta" style={{
      position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 90, display: "none",
      background: "rgba(10,10,13,0.94)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(245,245,242,0.14)", padding: "10px 14px", gap: 10,
      paddingBottom: "calc(10px + env(safe-area-inset-bottom))",
    }}>
      <a href="tel:7818541078" style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        color: "#fff", border: "1px solid rgba(245,245,242,0.3)", borderRadius: 999, fontSize: 14, fontWeight: 600, padding: "11px 0",
      }}>
        <Icon name="phone" size={15} /> Call Now
      </a>
      <a href="#quote" style={{
        flex: 1.4, display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
        color: "#0A0A0D", background: "var(--sb-flag-green)", borderRadius: 999, fontSize: 14, fontWeight: 700, padding: "11px 0",
      }}>
        Request Quote
      </a>
      <style>{`
        @media (max-width: 780px) { .sticky-mobile-cta { display: flex !important; } body { padding-bottom: 62px; } }
      `}</style>
    </div>
  );
}
