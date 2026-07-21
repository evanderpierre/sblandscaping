"use client";

import { Icon } from "@/components/ui/primitives";

const NAV_COLS = [
  { title: "Navigation", items: [["Home", "#home"], ["About", "#about"], ["Services", "#services"], ["Projects", "#projects"], ["Contact", "#contact"]] },
  { title: "Services", items: [["Garden Design & Plant Install", "#services"], ["New Landscape Design & Install", "#services"], ["Hardscape Design & Install", "#services"], ["Tree & Shrub Trimming", "#services"], ["Maintenance & Cleanups", "#services"]] },
  { title: "Service Areas", items: [["Woburn", "#service-area"], ["Stoneham", "#service-area"], ["Wakefield", "#service-area"], ["Saugus & beyond", "#service-area"]] },
] as const;

export function Footer() {
  return (
    <footer style={{ background: "var(--sb-black)", padding: "80px clamp(20px,6vw,96px) 32px", color: "rgba(245,245,242,0.75)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(245,245,242,0.12)" }} className="footer-grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/sb-logo-mark.png" alt="S.B. Landscaping" style={{ height: 40, width: "auto", display: "block", marginBottom: 16 }} />
            <p style={{ fontSize: 14, lineHeight: 1.65, maxWidth: 300, marginBottom: 14 }}>
              Professional landscape maintenance, garden design, plant installs, cleanups, pruning, hardscape, sod, snow removal, and outdoor property services based in Woburn, MA.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "rgba(245,245,242,0.55)", marginBottom: 18 }}>
              <span style={{ display: "inline-flex", width: 22, height: 3, borderRadius: 2, overflow: "hidden" }}>
                <span style={{ flex: 1, background: "var(--sb-flag-green)" }} />
                <span style={{ flex: 1, background: "#F5F5F2" }} />
                <span style={{ flex: 1, background: "#C1443B" }} />
              </span>
              Local &amp; family owned
            </div>
            <a href="#" aria-label="Facebook" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", width: 38, height: 38,
              borderRadius: "50%", border: "1px solid rgba(245,245,242,0.2)", color: "rgba(245,245,242,0.8)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></svg>
            </a>
          </div>
          {NAV_COLS.map((c) => (
            <div key={c.title}>
              <div style={{ color: "#fff", fontWeight: 700, fontFamily: "var(--font-heading)", fontSize: 13.5, marginBottom: 18, textTransform: "uppercase", letterSpacing: ".04em" }}>{c.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14 }}>
                {c.items.map(([label, href]) => <a key={label} href={href} style={{ color: "rgba(245,245,242,0.72)" }}>{label}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div id="contact" style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: "32px 0", fontSize: 14 }}>
          <a href="tel:7818541078" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,245,242,0.85)" }}><Icon name="phone" size={15} /> 781-854-1078</a>
          <a href="mailto:Settebelloservices2023@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,245,242,0.85)" }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
            Settebelloservices2023@gmail.com
          </a>
          <span style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,245,242,0.85)" }}><Icon name="pin" size={15} /> Woburn, MA</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(245,245,242,0.85)" }}><Icon name="quote" size={15} /> 7 AM – 7 PM, seven days a week</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, paddingTop: 24, borderTop: "1px solid rgba(245,245,242,0.12)", fontSize: 13, color: "rgba(245,245,242,0.45)" }}>
          <span>© 2026 S.B. Landscaping. All rights reserved.</span>
          <span>SBLandscapingpros.com · Serving Woburn, Stoneham, Wakefield, Saugus &amp; beyond.</span>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .footer-grid { grid-template-columns: 1fr 1fr !important; row-gap: 32px; } }
      @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
