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
          <div className="area-map-card">
            <div className="area-map-kicker">
              <span>Massachusetts</span>
              <span className="area-map-region">Greater Boston · North Shore</span>
            </div>
            <svg
              viewBox="0 0 540 340"
              width="100%"
              height="100%"
              role="img"
              aria-labelledby="ma-map-title ma-map-desc"
              style={{ display: "block" }}
            >
              <title id="ma-map-title">S.B. Landscaping service area in Massachusetts</title>
              <desc id="ma-map-desc">Massachusetts outline highlighting Woburn as the home base, with Stoneham, Wakefield, and Saugus marked as nearby service communities.</desc>
              <defs>
                <radialGradient id="service-halo" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#33B462" stopOpacity=".24" />
                  <stop offset="68%" stopColor="#1FA463" stopOpacity=".08" />
                  <stop offset="100%" stopColor="#1FA463" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="ma-fill" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5F5F2" stopOpacity=".14" />
                  <stop offset="100%" stopColor="#F5F5F2" stopOpacity=".045" />
                </linearGradient>
                <filter id="marker-glow" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              <g opacity=".18" stroke="#F5F5F2" strokeWidth="1">
                <path d="M36 88H504M36 170H504M36 252H504" strokeDasharray="3 9" />
                <path d="M118 54V286M270 54V286M422 54V286" strokeDasharray="3 9" />
              </g>

              <ellipse cx="400" cy="140" rx="92" ry="82" fill="url(#service-halo)" />

              <image
                href="/images/service-area/massachusetts.svg"
                x="0"
                y="0"
                width="540"
                height="340"
                preserveAspectRatio="xMidYMid meet"
                className="ma-source-shape"
              />

              <g className="map-label-lines" fill="none" stroke="rgba(245,245,242,.34)" strokeWidth="1.2" vectorEffect="non-scaling-stroke">
                <path d="M382 151 L318 116 L252 116" />
                <path d="M399 143 L425 103 L456 103" />
                <path d="M377 163 L335 183 L281 183" />
                <path d="M413 173 L449 190 L493 190" />
              </g>

              <g className="map-secondary-marker">
                <circle cx="399" cy="143" r="5" fill="#F5F5F2" stroke="#0A0A0D" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="377" cy="163" r="5" fill="#F5F5F2" stroke="#0A0A0D" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="413" cy="173" r="5" fill="#F5F5F2" stroke="#0A0A0D" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </g>

              <g className="map-primary-marker">
                <circle cx="382" cy="151" r="17" fill="none" stroke="#33B462" strokeWidth="1.5" className="sa-ping" style={{ transformOrigin: "382px 151px" }} vectorEffect="non-scaling-stroke" />
                <circle cx="382" cy="151" r="10" fill="#33B462" fillOpacity=".2" filter="url(#marker-glow)" />
                <circle cx="382" cy="151" r="6.5" fill="#33B462" stroke="#F5F5F2" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </g>

              <g className="map-town-labels" fontFamily="var(--font-primary), sans-serif" fontSize="13" fontWeight="650" fill="rgba(245,245,242,.74)">
                <text x="252" y="110" fill="#33B462" fontSize="14" fontWeight="800">WOBURN</text>
                <text x="456" y="98">Wakefield</text>
                <text x="281" y="178">Stoneham</text>
                <text x="457" y="185">Saugus</text>
              </g>

              <g transform="translate(66 264)" opacity=".58">
                <path d="M0 18V0M0 0L-4 7M0 0L4 7" stroke="#F5F5F2" strokeWidth="1.4" fill="none" />
                <text x="-4" y="32" fill="#F5F5F2" fontFamily="var(--font-primary), sans-serif" fontSize="10" fontWeight="700">N</text>
              </g>
            </svg>
            <div className="area-map-caption">
              <span className="area-map-dot" aria-hidden="true" />
              Woburn-based, serving nearby communities
            </div>
            <style>{`
              @keyframes sa-ping { 0% { transform: scale(1); opacity: 0.9; } 100% { transform: scale(2.4); opacity: 0; } }
              .sa-ping { animation: sa-ping 2.2s ease-out infinite; }
            `}</style>
          </div>
        </Reveal>
      </div>
      <style>{`
        .area-map-card {
          height: 390px;
          border: 1px solid rgba(10,10,13,.1);
          border-radius: var(--radius-xl);
          overflow: hidden;
          position: relative;
          background: radial-gradient(circle at 76% 35%, #183626 0%, #101b15 33%, #0a0a0d 78%);
          box-shadow: 0 26px 70px rgba(10,10,13,.18);
        }
        .area-map-card::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px rgba(245,245,242,.05);
        }
        .ma-source-shape {
          filter: grayscale(1) invert(1) brightness(1.25) contrast(.88);
          opacity: .48;
          mix-blend-mode: screen;
        }
        .area-map-kicker {
          position: absolute;
          z-index: 2;
          top: 20px;
          left: 22px;
          right: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
          text-transform: uppercase;
        }
        .area-map-region { color: rgba(245,245,242,.42); font-size: 9px; letter-spacing: .09em; }
        .area-map-caption {
          position: absolute;
          z-index: 2;
          left: 18px;
          bottom: 17px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(245,245,242,.14);
          border-radius: 999px;
          background: rgba(10,10,13,.76);
          backdrop-filter: blur(10px);
          color: rgba(245,245,242,.84);
          font-size: 11.5px;
          font-weight: 650;
          padding: 8px 13px;
        }
        .area-map-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sb-flag-green); box-shadow: 0 0 0 4px rgba(51,180,98,.13); }
        @media (max-width: 900px) { .area-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 560px) {
          .area-map-card { height: 330px; }
          .area-map-kicker { top: 16px; left: 17px; right: 17px; }
          .area-map-region { display: none; }
          .area-map-caption { left: 14px; bottom: 14px; font-size: 10.5px; }
          .map-town-labels { font-size: 14px; }
        }
        @media (max-width: 360px) {
          .map-label-lines { opacity: .18; }
          .map-town-labels text:not(:first-child) { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) { .sa-ping { animation: none; opacity: .35; } }
      `}</style>
    </section>
  );
}
