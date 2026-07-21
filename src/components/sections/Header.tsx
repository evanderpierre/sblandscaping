"use client";

import React from "react";
import { Button } from "@/components/ui/design-system";
import { Icon, GhostButton } from "@/components/ui/primitives";

function Logo() {
  return (
    <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo/sb-logo-mark.png" alt="S.B. Landscaping" style={{ height: 54, width: "auto", display: "block", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))" }} />
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
          onClick={() => setOpen((o) => !o)}
          className="header-hamburger"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", width: 28, height: 22, flexDirection: "column", justifyContent: "space-between", padding: 0, gridColumn: 3, justifySelf: "end" }}
        >
          <span style={{ height: 2, background: "#fff", borderRadius: 2, transform: open ? "translateY(9px) rotate(45deg)" : "none", transition: "transform 240ms ease" }} />
          <span style={{ height: 2, background: "#fff", borderRadius: 2, opacity: open ? 0 : 1, transition: "opacity 200ms ease" }} />
          <span style={{ height: 2, background: "#fff", borderRadius: 2, transform: open ? "translateY(-9px) rotate(-45deg)" : "none", transition: "transform 240ms ease" }} />
        </button>
      </div>
      <div
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
        </div>
      </div>
      <style>{`
        .header-link::after { content:''; position:absolute; left:0; right:100%; bottom:-6px; height:1px; background:#fff; transition: right 280ms cubic-bezier(.16,1,.3,1); }
        .header-link:hover { color:#fff; }
        .header-link:hover::after { right:0; }
        .header-call { opacity: 0.9; transition: opacity 220ms ease; }
        .header-call:hover { opacity: 1; color: var(--sb-flag-green) !important; }
        @media (max-width: 1180px) {
          .header-nav-desktop, .header-cta-desktop { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
        @media (min-width: 1181px) { .header-mobile-panel { display: none; } }
      `}</style>
    </header>
  );
}
