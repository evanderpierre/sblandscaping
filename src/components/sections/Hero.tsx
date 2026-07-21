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
          padding: "clamp(152px,20vh,190px) clamp(20px,6vw,64px) clamp(56px,8vh,88px)", boxSizing: "border-box",
        }}
        className="hero-content"
      >
        <div className="hero-main-grid">
          <div className="hero-copy-column">
        <div style={{ ...t(0), color: "var(--sb-flag-green)", fontSize: 13, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 18 }}>
          Local &amp; Family-Owned Landscaping Company
        </div>

        <h1
          className="hero-headline"
          style={{
            ...t(100), color: "#fff", fontFamily: "var(--font-heading)", fontStyle: "italic", fontWeight: 700, letterSpacing: "-0.015em",
            fontSize: "clamp(2.05rem, 3.4vw, 3.15rem)", lineHeight: 1.04, margin: "0 0 22px", maxWidth: 900,
          }}
        >
          <span className="hero-headline-line" style={{ display: "block" }}>Landscape Design &amp; Install Services</span>
          {" "}
          <span className="hero-headline-line" style={{ display: "block", color: "var(--sb-flag-green)" }}>Across Woburn &amp; Nearby Towns</span>
        </h1>

        <p className="hero-subhead" style={{ ...t(180), color: "rgba(245,245,242,0.85)", fontSize: 18, lineHeight: 1.6, maxWidth: 580, margin: "0 0 34px" }}>
          S.B. Landscaping provides plant installs, hardscape, lawn care, cleanups, pruning, sod, and snow removal for residential and commercial properties across Woburn, Stoneham, Wakefield, Saugus, and nearby communities.
        </p>

        <div className="hero-ctas" style={{ ...t(260), display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 22 }}>
          <a href="#quote"><Button variant="accent" size="lg">Request a Free Quote</Button></a>
          <a href="#services"><GhostButton size="lg" light>View Services</GhostButton></a>
        </div>

        <div className="hero-town-pills" style={{ ...t(360), display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Woburn", "Stoneham", "Wakefield", "Saugus"].map((a) => (
            <span key={a} style={{
              fontSize: 12.5, fontWeight: 600, color: "rgba(245,245,242,0.8)", padding: "6px 14px",
              border: "1px solid rgba(245,245,242,0.22)", borderRadius: 999,
            }}>{a}</span>
          ))}
        </div>
          </div>

          <aside className="hero-facebook-proof" style={{ ...t(310) }} aria-label="Facebook recommendations">
            <div className="hero-facebook-heading">
              <div>
                <span className="hero-facebook-mark" aria-hidden="true">f</span>
                <span>Recommended on Facebook</span>
              </div>
              <a
                href="https://www.facebook.com/p/SB-Landscaping-61573771418428/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View S.B. Landscaping recommendations on Facebook"
                className="hero-facebook-link"
              >
                View on Facebook <span aria-hidden="true">↗</span>
              </a>
            </div>
            <article className="hero-facebook-card">
              <div className="hero-facebook-card-label"><span aria-hidden="true">f</span> Facebook Recommendation</div>
              <blockquote>&ldquo;He shows up when he says he will&hellip; His prices are fair and reasonable.&rdquo;</blockquote>
              <div className="hero-facebook-reviewer"><strong>Lisa Ambrosino</strong><span>Recommended on Facebook</span></div>
            </article>
            <article className="hero-facebook-card hero-facebook-card-offset">
              <div className="hero-facebook-card-label"><span aria-hidden="true">f</span> Facebook Recommendation</div>
              <blockquote>&ldquo;Excellent work ethic and SHOWS UP! &hellip; the project exceeded expectations.&rdquo;</blockquote>
              <div className="hero-facebook-reviewer"><strong>IslandGirl Liz</strong><span>Recommended on Facebook</span></div>
            </article>
          </aside>
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
        .hero-headline-line { white-space: nowrap; }
        .hero-main-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(340px, 410px); gap: clamp(42px, 5vw, 76px); align-items: center; }
        .hero-facebook-proof {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          color: rgba(245,245,242,.82);
        }
        .hero-facebook-heading { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 0 4px; }
        .hero-facebook-heading > div { display: flex; align-items: center; gap: 9px; color: rgba(245,245,242,.72); font-size: 11px; font-weight: 750; letter-spacing: .055em; text-transform: uppercase; }
        .hero-facebook-mark, .hero-facebook-card-label > span { width: 24px; height: 24px; display: inline-grid; place-items: center; border-radius: 7px; color: #08110c; background: #4fc47a; font-family: Arial, sans-serif; font-size: 16px; font-weight: 800; flex: 0 0 auto; }
        .hero-facebook-card {
          position: relative;
          width: calc(100% - 20px);
          min-height: 154px;
          padding: 20px 22px;
          border: 1px solid rgba(245,245,242,.17);
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(15,19,17,.9), rgba(26,34,29,.72));
          box-shadow: inset 0 1px rgba(255,255,255,.06), 0 18px 44px rgba(0,0,0,.24);
          backdrop-filter: blur(16px);
        }
        .hero-facebook-card::before { content: ""; position: absolute; left: 0; top: 22px; bottom: 22px; width: 2px; border-radius: 2px; background: rgba(79,196,122,.76); box-shadow: 0 0 16px rgba(79,196,122,.24); }
        .hero-facebook-card-offset { align-self: flex-end; }
        .hero-facebook-card-label { display: flex; align-items: center; gap: 8px; color: rgba(245,245,242,.55); font-size: 9.5px; font-weight: 750; letter-spacing: .08em; text-transform: uppercase; }
        .hero-facebook-card-label > span { width: 19px; height: 19px; border-radius: 6px; font-size: 13px; }
        .hero-facebook-card blockquote { margin: 17px 0 18px; color: #fff; font-family: var(--font-heading); font-size: 17px; font-style: italic; font-weight: 600; line-height: 1.48; }
        .hero-facebook-reviewer { display: grid; gap: 2px; }
        .hero-facebook-reviewer strong { color: rgba(245,245,242,.9); font-size: 12px; }
        .hero-facebook-reviewer span { color: rgba(245,245,242,.45); font-size: 10px; }
        .hero-facebook-link { color: #78d79a; font-size: 10.5px; font-weight: 750; white-space: nowrap; transition: color 180ms ease; }
        .hero-facebook-link:hover { color: #a2e8bb; }
        @media (max-width: 1080px) {
          .hero-main-grid { grid-template-columns: minmax(0, 1fr) minmax(320px, 360px); gap: 32px; }
          .hero-headline-line { white-space: normal; }
        }
        @media (max-width: 820px) {
          .hero-main-grid { grid-template-columns: 1fr; }
          .hero-facebook-proof { max-width: 680px; margin-top: 4px; }
        }
        @keyframes sb-scroll-cue { 0%,100% { transform: scaleY(0.6); opacity:.5; } 50% { transform: scaleY(1); opacity:1; } }
        @media (max-width: 640px) { .hero-real-photo .photo-hover-img { object-position: 18% 58% !important; } }
        @media (max-width: 640px) {
          .hero-content { padding-top: 148px !important; padding-bottom: 38px !important; }
          .hero-headline { font-size: clamp(1.85rem, 8.4vw, 2.15rem) !important; line-height: 1.06 !important; margin-bottom: 16px !important; }
          .hero-headline-line { white-space: normal; }
          .hero-subhead { font-size: 15.5px !important; line-height: 1.55 !important; margin-bottom: 22px !important; }
          .hero-ctas { gap: 10px !important; margin-bottom: 20px !important; }
          .hero-ctas > a, .hero-ctas > a > button { width: 100%; }
          .hero-main-grid { gap: 26px; }
          .hero-facebook-proof { gap: 11px; }
          .hero-facebook-heading { padding: 0 2px; }
          .hero-facebook-heading > div { font-size: 10px; }
          .hero-facebook-card, .hero-facebook-card-offset { width: 100%; min-height: 0; padding: 17px 18px; align-self: stretch; }
          .hero-facebook-card blockquote { margin: 14px 0 15px; font-size: 15.5px; line-height: 1.46; }
          .hero-town-pills { gap: 7px !important; }
          .trust-bar { grid-template-columns: 1fr 1fr !important; }
          .trust-item { padding: 12px !important; border-left: none !important; border-top: 1px solid rgba(245,245,242,0.1); }
          .trust-item:nth-child(-n+2) { border-top: none; }
          .trust-item:nth-child(even) { border-left: 1px solid rgba(245,245,242,0.1) !important; }
          .trust-item > div > div:last-child { display: none; }
          .hero-scrollcue { display: none !important; }
        }
        @media (max-height: 700px) {
          .hero-content { padding-top: 144px !important; padding-bottom: 48px !important; }
          .hero-headline { font-size: clamp(2.1rem, 4.6vw, 3.6rem) !important; margin-bottom: 14px !important; }
          .hero-subhead { font-size: 15.5px !important; margin-bottom: 22px !important; }
          .hero-ctas { margin-bottom: 20px !important; }
          .hero-scrollcue { display: none !important; }
        }
      `}</style>
    </section>
  );
}
