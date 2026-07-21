"use client";

import React from "react";
import { Button } from "@/components/ui/design-system";
import { PhotoImg, GhostButton, Reveal, Icon, prefersReduced } from "@/components/ui/primitives";

export function Hero() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setShow(true), 100); return () => clearTimeout(t); }, []);
  const [offset, setOffset] = React.useState(0);
  React.useEffect(() => {
    if (prefersReduced) return;
    const onScroll = () => setOffset(window.scrollY * 0.12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = (delay: number): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 850ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform 850ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
  });

  return (
    <section id="home" style={{ position: "relative", minHeight: "92svh", background: "var(--sb-black)", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(1.08) translateY(${offset * -1}px)` }}>
        <PhotoImg
          src="/images/google-business/lawn-care-white-colonial-sign-01.jpg"
          className="hero-real-photo"
          focus="50% 58%"
          sharpen
          priority
          sizes="100vw"
          alt="S.B. Landscaping lawn care project in Woburn with branded yard sign"
          style={{ height: "100%" }}
        />
      </div>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(10,10,13,0.82) 0%, rgba(10,10,13,0.5) 42%, rgba(10,10,13,0.22) 68%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,13,0.15) 0%, rgba(10,10,13,0.25) 38%, rgba(10,10,13,0.9) 92%)" }} />

      <div
        style={{
          position: "relative", zIndex: 3, width: "100%", maxWidth: 1280, margin: "0 auto",
          padding: "clamp(120px,18vh,180px) clamp(20px,6vw,64px) clamp(56px,8vh,88px)", boxSizing: "border-box",
        }}
        className="hero-content"
      >
        <div style={{ ...t(0), color: "var(--sb-flag-green)", fontSize: 13, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 18 }}>
          Local &amp; Family-Owned Landscaping Company
        </div>

        <h1
          className="hero-headline"
          style={{
            ...t(100), color: "#fff", fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 700, letterSpacing: "-0.015em",
            fontSize: "clamp(2.05rem, 4.35vw, 4rem)", lineHeight: 1.08, margin: "0 0 22px", maxWidth: 900,
          }}
        >
          <span style={{ display: "block" }}>Landscape Design, Installation &amp; Maintenance</span>
          {" "}
          <span style={{ display: "block", color: "var(--sb-flag-green)" }}>Across Woburn &amp; Nearby Towns</span>
        </h1>

        <p className="hero-subhead" style={{ ...t(180), color: "rgba(245,245,242,0.85)", fontSize: 18, lineHeight: 1.6, maxWidth: 580, margin: "0 0 34px" }}>
          S.B. Landscaping provides plant installs, hardscape, lawn care, cleanups, pruning, sod, and snow removal for residential and commercial properties across Woburn, Stoneham, Wakefield, Saugus, and nearby communities.
        </p>

        <div className="hero-ctas" style={{ ...t(260), display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 30 }}>
          <a href="#quote"><Button variant="accent" size="lg">Request a Free Quote</Button></a>
          <a href="#services"><GhostButton size="lg" light>View Services</GhostButton></a>
        </div>

        <div style={{ ...t(320), display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Woburn", "Stoneham", "Wakefield", "Saugus"].map((a) => (
            <span key={a} style={{
              fontSize: 12.5, fontWeight: 600, color: "rgba(245,245,242,0.8)", padding: "6px 14px",
              border: "1px solid rgba(245,245,242,0.22)", borderRadius: 999,
            }}>{a}</span>
          ))}
        </div>

        <Reveal delay={80} style={{ marginTop: "clamp(32px,5vh,48px)" }}>
          <div style={{
            background: "rgba(245,245,242,0.06)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(245,245,242,0.12)", borderRadius: 18,
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          }} className="trust-bar">
            {[
              { icon: "pin", title: "Local & Family Owned", desc: "Rooted in nearby communities" },
              { icon: "check", title: "Residential & Commercial", desc: "Homes & businesses" },
              { icon: "design", title: "Design, Install & Maintenance", desc: "Complete landscape care" },
              { icon: "quote", title: "7 AM – 7 PM", desc: "Open seven days a week" },
            ].map((s, i) => (
              <div key={s.title} style={{
                padding: "16px 18px", display: "flex", alignItems: "center", gap: 11,
                borderLeft: i > 0 ? "1px solid rgba(245,245,242,0.1)" : "none",
              }} className="trust-item">
                <Icon name={s.icon} size={16} color="var(--sb-flag-green)" />
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>{s.title}</div>
                  <div style={{ color: "rgba(245,245,242,0.55)", fontSize: 11, lineHeight: 1.3 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{ ...t(420), position: "absolute", left: "50%", bottom: 18, transform: "translateX(-50%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }} className="hero-scrollcue">
        <span style={{ color: "rgba(245,245,242,0.55)", fontSize: 10.5, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 26, background: "linear-gradient(180deg, rgba(245,245,242,0.6), transparent)", animation: prefersReduced ? "none" : "sb-scroll-cue 1.8s ease-in-out infinite" }} />
      </div>

      <style>{`
        .hero-real-photo .photo-hover-img { object-position: 50% 58%; }
        @keyframes sb-scroll-cue { 0%,100% { transform: scaleY(0.6); opacity:.5; } 50% { transform: scaleY(1); opacity:1; } }
        @media (max-width: 640px) { .hero-real-photo .photo-hover-img { object-position: 18% 58% !important; } }
        @media (max-height: 700px) {
          .hero-content { padding-top: 108px !important; padding-bottom: 48px !important; }
          .hero-headline { font-size: clamp(2.1rem, 4.6vw, 3.6rem) !important; margin-bottom: 14px !important; }
          .hero-subhead { font-size: 15.5px !important; margin-bottom: 22px !important; }
          .hero-ctas { margin-bottom: 20px !important; }
          .hero-scrollcue { display: none !important; }
        }
      `}</style>
    </section>
  );
}
