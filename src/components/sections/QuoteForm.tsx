"use client";

import React from "react";
import { EyebrowLabel, Input, Select, Button } from "@/components/ui/design-system";
import { Reveal, Icon } from "@/components/ui/primitives";

const SERVICE_OPTIONS = ["Garden Design & Plant Install", "New Landscape Design & Install", "Hardscape Design & Install", "Tree and Shrub Trimming & Pruning", "Weekly & Biweekly Landscape Maintenance", "Spring & Fall Cleanups", "Lawn Care & Fertilization", "Sod Install", "Snow Removal", "Other"];
const HEARD_OPTIONS = ["Google Search", "Facebook / Instagram", "Referral from friend or neighbor", "Saw a truck / job sign", "Other"];
const FORM_NAME = "sblandscaping-quote";

export function QuoteForm() {
  const [sent, setSent] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", FORM_NAME);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    setSending(true);
    setError(false);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);

      form.reset();
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };
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
              <div className="ed-head" style={{ fontSize: 22, margin: "14px 0 8px" }}>Thanks — your quote request has been sent. We&rsquo;ll follow up soon.</div>
            </div>
          ) : (
            <form name={FORM_NAME} method="POST" onSubmit={submit} style={{
              background: "#fff", border: "1px solid var(--border-default)", borderRadius: "var(--radius-xl)",
              padding: "clamp(24px,4vw,40px)", boxShadow: "var(--shadow-sm)",
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
            }} className="quote-form-grid">
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p hidden>
                <label>
                  Don&rsquo;t fill this out if you&rsquo;re human:
                  <input name="bot-field" />
                </label>
              </p>
              <Input label="Name" placeholder="Your full name" name="name" required />
              <Input label="Phone Number" placeholder="(xxx) xxx-xxxx" type="tel" name="phone" required />
              <div style={{ gridColumn: "1 / -1" }}>
                <Input label="Town / City" placeholder="e.g. Woburn, MA" name="town" required />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Select label="Service(s) Requested" options={SERVICE_OPTIONS} name="service" placeholder="Select a service" required />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Select label="How Did You Hear About Us?" options={HEARD_OPTIONS} name="heard" placeholder="Select an option (optional)" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Input label="Tell Us About Your Project (optional)" placeholder="Share a few details about your property and what you need" textarea name="details" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <Button type="submit" variant="accent" size="lg" disabled={sending} style={{ width: "100%" }}>
                  {sending ? "Sending Request…" : "Request My Free Quote"}
                </Button>
                {error && (
                  <p role="alert" aria-live="polite" style={{ color: "var(--status-error)", fontSize: 14, lineHeight: 1.6, margin: "14px 4px 0", textAlign: "center" }}>
                    Something went wrong sending your request. Please call <a href="tel:7818541078">781-854-1078</a> or email <a href="mailto:Settebelloservices2023@gmail.com">Settebelloservices2023@gmail.com</a>.
                  </p>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
      <style>{`@media (max-width: 640px) { .quote-form-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
