"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/design-system";
import { Icon, GhostButton } from "@/components/ui/primitives";

const FACEBOOK_URL = "https://www.facebook.com/p/SB-Landscaping-61573771418428/";
// Temporarily disabled. Set to true when the seasonal promotion should return.
const SHOW_SEASONAL_BANNER = false;

function Logo() {
  return (
    <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Image
        src="/logo/sb-logo-mark-header.png"
        alt="S.B. Landscaping"
        width={242}
        height={150}
        sizes="88px"
        priority
        style={{ height: 54, width: "auto", display: "block", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }}
      />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,13,0.86)" : "rgba(10,10,13,0.32)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(245,245,242,0.1)" : "1px solid rgba(245,245,242,0.06)",
        transition: "background 320ms ease, border-color 320ms ease",
      }}
    >
      {SHOW_SEASONAL_BANNER && <div className="seasonal-banner" role="region" aria-label="Seasonal offer">
        <div className="seasonal-banner-inner">
          <span className="seasonal-banner-icon" aria-hidden="true"><Icon name="seasonal" size={14} color="currentColor" /></span>
          <span className="seasonal-banner-copy seasonal-banner-copy-desktop">Book your fall or winter service early &amp; save 10%</span>
          <span className="seasonal-banner-copy seasonal-banner-copy-mobile">Fall &amp; winter bookings: save 10%</span>
          <span className="seasonal-banner-divider" aria-hidden="true" />
          <a href="#seasonal-offer" className="seasonal-banner-cta" aria-label="Claim Offer">
            <span className="seasonal-banner-cta-desktop">Claim Offer</span>
            <span className="seasonal-banner-cta-mobile">Claim</span>
            <Icon name="arrow" size={13} color="currentColor" />
          </a>
        </div>
      </div>}
      <div
        style={{
          display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
          padding: "16px clamp(20px, 6vw, 96px)", maxWidth: 1440, margin: "0 auto",
        }}
      >
        <Logo />
        <nav style={{ display: "flex", gap: 36, justifySelf: "center" }} className="header-nav-desktop">
          {links.map((l) => (
            <a key={l.label} href={l.href} style={{ color: "rgba(245,245,242,0.88)", fontSize: 14.5, fontWeight: 500, position: "relative" }} className="header-link">
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 20, justifySelf: "end" }} className="header-cta-desktop">
          <a href="tel:7818541078" className="header-call" style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontSize: 14, fontWeight: 600 }}>
            <Icon name="phone" size={16} /> 781-854-1078
          </a>
          <a href="#quote"><Button variant="accent" size="sm">Request a Quote</Button></a>
        </div>
        <button
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((o) => !o)}
          className="header-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", width: 44, height: 44, flexDirection: "column", justifyContent: "space-between", padding: "11px 8px", gridColumn: 3, justifySelf: "end" }}
        >
          <span style={{ height: 2, background: "#fff", borderRadius: 2, transform: open ? "translateY(9px) rotate(45deg)" : "none", transition: "transform 240ms ease" }} />
          <span style={{ height: 2, background: "#fff", borderRadius: 2, opacity: open ? 0 : 1, transition: "opacity 200ms ease" }} />
          <span style={{ height: 2, background: "#fff", borderRadius: 2, transform: open ? "translateY(-9px) rotate(-45deg)" : "none", transition: "transform 240ms ease" }} />
        </button>
      </div>
      <div
        id="mobile-navigation"
        style={{
          maxHeight: open ? 420 : 0, overflow: "hidden", transition: "max-height 360ms cubic-bezier(.16,1,.3,1)",
          background: "rgba(10,10,13,0.97)", backdropFilter: "blur(14px)",
        }}
        className="header-mobile-panel"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "8px 20px 24px" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ color: "#fff", fontSize: 17, fontWeight: 600, padding: "12px 0", borderBottom: "1px solid rgba(245,245,242,0.1)" }}>{l.label}</a>
          ))}
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a href="tel:7818541078" style={{ flex: 1 }}><GhostButton size="md" light style={{ width: "100%" }}>Call Now</GhostButton></a>
            <Button variant="accent" size="md" style={{ flex: 1 }} onClick={() => { setOpen(false); document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }); }}>Request a Quote</Button>
          </div>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit S.B. Landscaping on Facebook"
            style={{ display: "inline-flex", minHeight: 44, padding: "10px 8px", alignItems: "center", justifyContent: "center", gap: 8, alignSelf: "center", marginTop: 8, color: "rgba(245,245,242,0.72)", fontSize: 14, fontWeight: 600 }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></svg>
            Facebook
          </a>
        </div>
      </div>
      <style>{`
        .seasonal-banner {
          min-height: 42px;
          display: flex;
          align-items: center;
          background: #080a09;
          color: rgba(245,245,242,.9);
          border-bottom: 1px solid rgba(51,180,98,.22);
          box-shadow: inset 0 -1px 0 rgba(245,245,242,.025), 0 4px 16px rgba(0,0,0,.14);
        }
        .seasonal-banner-inner {
          width: fit-content;
          max-width: calc(100% - 28px);
          min-height: 32px;
          margin: 4px auto;
          padding: 2px 9px 2px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          border: 1px solid rgba(51,180,98,.2);
          border-radius: 999px;
          background: linear-gradient(180deg, rgba(245,245,242,.055), rgba(245,245,242,.025));
          box-shadow: inset 0 1px 0 rgba(245,245,242,.045), 0 0 18px rgba(31,164,99,.055);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .025em;
        }
        .seasonal-banner-icon { width: 16px; height: 22px; color: #4fc47a; display: grid; place-items: center; flex: 0 0 auto; }
        .seasonal-banner-copy-mobile, .seasonal-banner-cta-mobile { display: none; }
        .seasonal-banner-divider { width: 1px; height: 14px; background: rgba(51,180,98,.42); flex: 0 0 auto; }
        .seasonal-banner-cta {
          min-height: 26px;
          padding: 0 9px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border: 1px solid rgba(51,180,98,.36);
          border-radius: 999px;
          background: rgba(51,180,98,.07);
          color: #67d18d;
          font-size: 11.5px;
          font-weight: 750;
          white-space: nowrap;
          transition: color 220ms ease, border-color 220ms ease;
        }
        .seasonal-banner-cta:hover { color: #9be5b5; border-color: rgba(112,211,148,.68); background: rgba(51,180,98,.13); }
        .header-link::after { content:''; position:absolute; left:0; right:100%; bottom:-6px; height:1px; background:#fff; transition: right 280ms cubic-bezier(.16,1,.3,1); }
        .header-link:hover { color:#fff; }
        .header-link:hover::after { right:0; }
        .header-call { opacity: 0.9; transition: opacity 220ms ease; }
        .header-call:hover { opacity: 1; color: var(--sb-flag-green) !important; }
        @media (max-width: 1180px) {
          .header-nav-desktop, .header-cta-desktop { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
        @media (max-width: 560px) {
          .seasonal-banner { min-height: 42px; }
          .seasonal-banner-inner { min-height: 34px; width: calc(100% - 20px); max-width: none; justify-content: space-between; gap: 7px; padding: 2px 5px 2px 11px; }
          .seasonal-banner-icon, .seasonal-banner-divider, .seasonal-banner-copy-desktop { display: none; }
          .seasonal-banner-copy-mobile { display: inline; font-size: 11.5px; line-height: 1.2; }
          .seasonal-banner-cta-desktop { display: none; }
          .seasonal-banner-cta-mobile { display: inline; }
          .seasonal-banner-cta { min-height: 28px; padding: 0 8px; font-size: 10.5px; }
        }
        @media (min-width: 1181px) { .header-mobile-panel { display: none; } }
      `}</style>
    </header>
  );
}
