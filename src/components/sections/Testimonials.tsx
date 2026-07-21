"use client";

import React from "react";
import { EyebrowLabel } from "@/components/ui/design-system";
import { Reveal } from "@/components/ui/primitives";

const GOOGLE_PROFILE_URL = "https://maps.app.goo.gl/ov2mwtoV1AiuK8R6A";

const REVIEWS = [
  {
    name: "Lorena Gjino",
    detail: "13 reviews · 1 photo",
    date: "2 months ago",
    review: "We love working with SB Landscaping. Professional, great communication and does a good job with our large yard. Thank you!",
  },
  {
    name: "Jeffrey Long",
    detail: "5 reviews",
    date: "a month ago",
    review: "Great prompt service for my spring cleanup and lawn maintenance.",
  },
  {
    name: "Kev-in",
    detail: "Local Guide · 21 reviews",
    date: "3 months ago",
    review: "I had S.B. Landscaping for my fall cleanup. Alessandro & his crew were meticulous, they trimmed my plants and trees 🌳 after all the leaves dropped. Afterwards they applied Scott's winter guard to my entire property. Since hiring this S. B. Landscaping my yard has never looked as good as it does today. Thanks Alessandro 😊 …",
  },
  {
    name: "Jeromy Armano",
    detail: "1 review",
    date: "3 months ago",
    review: "Alessandro and his crew are great! Would highly recommend!",
  },
] as const;

function FiveStars() {
  return (
    <div className="review-stars" aria-label="5 out of 5 stars" role="img">
      {[0, 1, 2, 3, 4].map((star) => (
        <svg key={star} aria-hidden="true" viewBox="0 0 20 20">
          <path d="M10 1.35l2.57 5.21 5.75.84-4.16 4.05.98 5.73L10 14.47l-5.14 2.71.98-5.73L1.68 7.4l5.75-.84L10 1.35z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleMark() {
  return (
    <svg className="google-mark" aria-hidden="true" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 01-2 3.02v2.53h3.24c1.9-1.75 2.98-4.33 2.98-7.39z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.38l-3.24-2.53c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.61A10 10 0 0012 22z" />
      <path fill="#FBBC05" d="M6.39 13.92A6.02 6.02 0 016.07 12c0-.67.12-1.31.32-1.92V7.47H3.04A10 10 0 002 12c0 1.61.38 3.13 1.04 4.53l3.35-2.61z" />
      <path fill="#EA4335" d="M12 5.95c1.47 0 2.79.51 3.83 1.5l2.87-2.88A9.64 9.64 0 0012 2a10 10 0 00-8.96 5.47l3.35 2.61C7.18 7.71 9.39 5.95 12 5.95z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="reviews" className="reviews-section" aria-labelledby="reviews-heading">
      <div className="reviews-shell">
        <Reveal className="reviews-intro">
          <EyebrowLabel inverse>Google Reviews</EyebrowLabel>
          <h2 id="reviews-heading">What local customers are saying</h2>
          <p>
            Homeowners trust S.B. Landscaping for reliable communication, detailed work, and clean results across Woburn and nearby communities.
          </p>
        </Reveal>

        <div className="reviews-grid">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 90} className={`review-card review-card-${index + 1}`}>
              <article>
                <div className="review-card-top">
                  <FiveStars />
                  <span className="google-review-badge"><GoogleMark />Google Review</span>
                </div>
                <blockquote>“{review.review}”</blockquote>
                <footer>
                  <div>
                    <cite>{review.name}</cite>
                    <span>{review.detail}</span>
                  </div>
                  <time>{review.date}</time>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="reviews-cta-wrap" delay={200}>
          <a
            className="reviews-cta"
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more S.B. Landscaping reviews on Google (opens in a new tab)"
          >
            <GoogleMark />
            View More Reviews on Google
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
