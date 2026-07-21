"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal, prefersReduced } from "@/components/ui/primitives";

const STEPS = [
  { n: "01", title: "Tell us what you need", desc: "Send a message, call, or request a quote." },
  { n: "02", title: "We review the property", desc: "We confirm the scope, timing, and details." },
  { n: "03", title: "We complete the work", desc: "Our crew handles the landscaping with care and attention." },
  { n: "04", title: "You enjoy the finished space", desc: "Your yard looks cleaner, sharper, and better maintained." },
];

function ProcessLine() {
  const ref = React.useRef<SVGSVGElement | null>(null);
  const [go, setGo] = React.useState(prefersReduced);
  React.useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setGo(true); obs.unobserve(e.target); } });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <svg ref={ref} className="process-line" style={{ position: "absolute", top: 22, left: "12.5%", width: "75%", height: 2, overflow: "visible" }} preserveAspectRatio="none">
      <line x1="0" y1="1" x2="100%" y2="1" stroke="var(--border-strong)" strokeWidth="1"
        strokeDasharray="1000" strokeDashoffset={go ? 0 : 1000}
        style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1) 200ms" }} />
    </svg>
  );
}

export function Process() {
  return (
    <section style={{ background: "var(--sb-white)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal>
          <EyebrowLabel>Our Process</EyebrowLabel>
          <h2 className="ed-head" style={{ fontSize: "clamp(2rem, 3.4vw, 3.1rem)", margin: "16px 0 56px", maxWidth: 620 }}>
            A simple process from quote to clean finish.
          </h2>
        </Reveal>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }} className="process-grid">
          <ProcessLine />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{
                width: 46, height: 46, borderRadius: "50%", background: "var(--sb-black)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15,
                position: "relative", zIndex: 1,
              }}>{s.n}</div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18.5 }}>{s.title}</div>
              <div style={{ color: "var(--text-secondary)", fontSize: 14.5, lineHeight: 1.55 }}>{s.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; row-gap: 40px !important; }
          .process-line { display: none; }
        }
        @media (max-width: 520px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
