"use client";

import React from "react";
import { EyebrowLabel, Input, Select, Button } from "@/components/ui/design-system";
import { Reveal, Icon } from "@/components/ui/primitives";

const SERVICE_OPTIONS = ["Garden Design & Plant Install", "New Landscape Design & Install", "Hardscape Design & Install", "Tree and Shrub Trimming & Pruning", "Weekly & Biweekly Landscape Maintenance", "Spring & Fall Cleanups", "Lawn Care & Fertilization", "Sod Install", "Snow Removal", "Other"];
const HEARD_OPTIONS = ["Google Search", "Facebook / Instagram", "Referral from friend or neighbor", "Saw a truck / job sign", "Other"];

export function QuoteForm() {
  const [sent, setSent] = React.useState(false);
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <section id="quote" style={{ background: "var(--sb-sage-100)", padding: "var(--section-pad-y) clamp(20px,6vw,96px)" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <EyebrowLabel>Get Started</EyebrowLabel>
          <h2 className="ed-head" style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", margin: "16px 0 12px" }}>
            Tell us what you need done.
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 15.5, maxWidth: 500, margin: "0 auto" }}>
            Share a few details about your property, the service you&rsquo;re interested in, and the best way to reach you. S.B. Landscaping will follow up with next steps.
          </p>
        </Reveal>
        <Reveal delay={100}>
          {sent ? (
            <div style={{
              background: "#fff", border: "1px solid var(--border-default)", borderRadius: "var(--radius-xl)",
              padding: "48px 32px", textAlign: "center", boxShadow: "var(--shadow-sm)",
            }}>
              <Icon name="check" size={32} color="var(--sb-flag-green)" />
              <div className="ed-head" style={{ fontSize: 22, margin: "14px 0 8px" }}>Thanks — request received.</div>
              <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>We&rsquo;ll be in touch shortly to confirm details.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{
              background: "#fff", border: "1px solid var(--border-default)", borderRadius: "var(--radius-xl)",
              padding: "clamp(24px,4vw,40px)", boxShadow: "var(--shadow-sm)",
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
            }} className="quote-form-grid">
              <Input label="Name" placeholder="Your full name" name="name" />
              <Input label="Phone Number" placeholder="(xxx) xxx-xxxx" type="tel" name="phone" />
              <div style={{ gridColumn: "1 / -1" }}>
                <Input label="Town / City" placeholder="e.g. Woburn, MA" name="town" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Select label="Service(s) Requested" options={SERVICE_OPTIONS} name="service" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Select label="How Did You Hear About Us?" options={HEARD_OPTIONS} name="heard" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Input label="Tell Us About Your Project (optional)" placeholder="Share a few details about your property and what you need" textarea name="details" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Button type="submit" variant="accent" size="lg" style={{ width: "100%" }}>Request My Free Quote</Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
      <style>{`@media (max-width: 640px) { .quote-form-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
