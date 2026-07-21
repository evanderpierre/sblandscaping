"use client";

import { EyebrowLabel } from "@/components/ui/design-system";
import { Icon, Reveal } from "@/components/ui/primitives";

const STEPS = [
  {
    n: "01",
    icon: "quote",
    title: "Request a Quote",
    desc: "Tell us about your property, goals, and the service you need.",
  },
  {
    n: "02",
    icon: "pin",
    title: "On-Site Review",
    desc: "We assess the property, talk through ideas, and confirm scope.",
  },
  {
    n: "03",
    icon: "design",
    title: "Plan & Schedule",
    desc: "We align on the work, timing, and next steps before getting started.",
  },
  {
    n: "04",
    icon: "check",
    title: "Complete the Work",
    desc: "Our crew gets it done with care, detail, and a clean finish.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="process-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--sb-black)",
        padding: "var(--section-pad-y) clamp(20px,6vw,96px)",
      }}
    >
      <div className="process-glow" aria-hidden="true" />
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto" }}>
        <Reveal className="process-intro">
          <div>
            <EyebrowLabel inverse>Our Process</EyebrowLabel>
            <h2
              className="ed-head"
              style={{
                color: "#fff",
                fontSize: "clamp(2.15rem, 3.6vw, 3.35rem)",
                lineHeight: 1.08,
                margin: "16px 0 0",
                maxWidth: 650,
              }}
            >
              A simple process from quote to clean finish.
            </h2>
          </div>
          <p className="process-support">
            From the first call to the final walkthrough, we keep the process clear, efficient, and built around your property.
          </p>
        </Reveal>

        <ol className="process-grid" aria-label="Our four-step landscaping process">
          {STEPS.map((step, index) => (
            <Reveal
              key={step.n}
              as="li"
              delay={index * 90}
              className={`process-card process-card-${index + 1}`}
            >
              <div className="process-card-top">
                <span className="process-number" aria-hidden="true">{step.n}</span>
                <span className="process-icon" aria-hidden="true">
                  <Icon name={step.icon} size={21} color="var(--sb-flag-green)" />
                </span>
              </div>
              <div className="process-card-copy">
                <div className="process-step-label">Step {index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < STEPS.length - 1 && (
                <span className="process-next" aria-hidden="true">
                  <Icon name="arrow" size={17} color="rgba(245,245,242,.42)" />
                </span>
              )}
            </Reveal>
          ))}
        </ol>

        <Reveal delay={280} className="process-close">
          <span className="process-close-mark" aria-hidden="true"><Icon name="check" size={16} color="var(--sb-black)" /></span>
          <span>A clean, sharp outdoor space built around your needs.</span>
        </Reveal>
      </div>

      <style>{`
        .process-glow {
          position: absolute;
          width: 620px;
          height: 620px;
          right: -260px;
          top: -310px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(15, 143, 69, .18), rgba(15, 143, 69, 0) 68%);
          pointer-events: none;
        }
        .process-intro {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(280px, .65fr);
          align-items: end;
          gap: clamp(32px, 7vw, 96px);
          margin-bottom: clamp(48px, 7vw, 84px);
        }
        .process-support {
          color: rgba(245,245,242,.66);
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 4px;
          max-width: 450px;
        }
        .process-grid {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin: 0;
          padding: 0;
        }
        .process-card {
          position: relative;
          min-height: 292px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 52px;
          padding: 24px 24px 28px;
          border: 1px solid rgba(245,245,242,.13);
          border-top: 2px solid var(--sb-flag-green);
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(245,245,242,.09), rgba(245,245,242,.035));
          box-shadow: 0 22px 56px rgba(0,0,0,.2);
          transition: transform 300ms cubic-bezier(.16,1,.3,1), border-color 300ms ease, background 300ms ease;
        }
        .process-card:nth-child(even) { transform: translateY(26px) !important; }
        .process-card:hover {
          transform: translateY(-7px) !important;
          border-color: rgba(51,180,98,.48);
          background: linear-gradient(145deg, rgba(245,245,242,.12), rgba(245,245,242,.055));
        }
        .process-card:nth-child(even):hover { transform: translateY(19px) !important; }
        .process-card-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; }
        .process-number {
          color: rgba(245,245,242,.2);
          font-family: var(--font-heading);
          font-size: 46px;
          font-style: italic;
          font-weight: 800;
          line-height: .85;
          letter-spacing: -.05em;
        }
        .process-icon {
          width: 42px;
          height: 42px;
          border: 1px solid rgba(51,180,98,.28);
          border-radius: 50%;
          background: rgba(15,143,69,.1);
          display: grid;
          place-items: center;
          flex: 0 0 auto;
        }
        .process-step-label {
          color: var(--sb-flag-green);
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .process-card h3 {
          color: #fff;
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 750;
          line-height: 1.2;
          margin: 0 0 11px;
        }
        .process-card p { color: rgba(245,245,242,.62); font-size: 14px; line-height: 1.62; margin: 0; }
        .process-next {
          position: absolute;
          top: 50%;
          right: -18px;
          z-index: 2;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(245,245,242,.14);
          border-radius: 50%;
          background: var(--sb-black);
          display: grid;
          place-items: center;
          transform: translateY(-50%);
        }
        .process-close {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          color: rgba(245,245,242,.72);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .015em;
          margin-top: 70px;
          text-align: center;
        }
        .process-close-mark {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          background: var(--sb-flag-green);
          display: grid;
          place-items: center;
          flex: 0 0 auto;
        }
        @media (max-width: 1000px) {
          .process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
          .process-card:nth-child(even) { transform: none !important; }
          .process-card:nth-child(even):hover { transform: translateY(-7px) !important; }
          .process-next { display: none; }
          .process-close { margin-top: 46px; }
        }
        @media (max-width: 680px) {
          .process-intro { grid-template-columns: 1fr; gap: 22px; margin-bottom: 38px; }
          .process-support { font-size: 15px; line-height: 1.65; }
          .process-grid { grid-template-columns: 1fr; gap: 14px; }
          .process-card { min-height: 0; gap: 40px; padding: 22px 22px 24px; }
          .process-number { font-size: 40px; }
          .process-close { align-items: flex-start; text-align: left; margin-top: 34px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-card, .process-card:hover, .process-card:nth-child(even), .process-card:nth-child(even):hover { transform: none !important; transition: none; }
        }
      `}</style>
    </section>
  );
}
