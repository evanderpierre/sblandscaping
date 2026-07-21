"use client";

import React from "react";

export const prefersReduced =
  typeof window !== "undefined" &&
  !!window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  as?: React.ElementType;
  className?: string;
};

export function Reveal({ children, delay = 0, style, as = "div", className }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(prefersReduced);
  React.useEffect(() => {
    if (prefersReduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms cubic-bezier(.16,1,.3,1) ${delay}ms, transform 700ms cubic-bezier(.16,1,.3,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

// Curated, verified real landscaping photography (Unsplash, free license) — direct CDN URLs,
// reused thoughtfully across sections where no exact-match subcategory exists.
export const PHOTO_TONES: Record<string, { url: string; alt: string }> = {
  hero: { url: "https://images.unsplash.com/photo-1738193830098-2d92352a1856?auto=format&fit=crop&w=1800&q=80", alt: "A house with a manicured lawn and landscaping in front of it" },
  forest: { url: "https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=1400&q=80", alt: "A man mowing a manicured lawn with a lawn mower" },
  lawn: { url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80", alt: "Lush green grass field" },
  mulch: { url: "https://images.unsplash.com/photo-1740823434562-e81d21a4f5c2?auto=format&fit=crop&w=1400&q=80", alt: "Garden bed with various plants and fresh mulch" },
  plant: { url: "https://images.unsplash.com/photo-1597201278257-3687be27d954?auto=format&fit=crop&w=1400&q=80", alt: "Red and white flower garden bed" },
  hardscape: { url: "https://images.unsplash.com/photo-1738193830098-2d92352a1856?auto=format&fit=crop&w=1400&q=80", alt: "Residential property with landscaped walkway and lawn" },
  cleanup: { url: "https://images.unsplash.com/photo-1689728318937-17d24bc0a65c?auto=format&fit=crop&w=1400&q=80", alt: "A man using a lawn mower to cut grass during a property cleanup" },
  trim: { url: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?auto=format&fit=crop&w=1400&q=80", alt: "Landscaper working in a garden bed with hand tools" },
  sand: { url: "https://images.unsplash.com/photo-1757838661170-186930ac95db?auto=format&fit=crop&w=1400&q=80", alt: "Raised garden beds with young plants and mulch" },
  stone: { url: "https://images.unsplash.com/photo-1590820292118-e256c3ac2676?auto=format&fit=crop&w=1400&q=80", alt: "Push lawn mower on green grass during daytime" },
  dusk: { url: "https://images.unsplash.com/photo-1696128672709-a995b6dd531a?auto=format&fit=crop&w=1400&q=80", alt: "Soft-focus green grass field" },
};

type PhotoImgProps = {
  q?: string;
  tone?: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  overlay?: "none" | "bottom" | "full" | "soft";
  organic?: boolean;
  focus?: string;
  sharpen?: boolean;
  children?: React.ReactNode;
};

export function PhotoImg({ q, tone, alt, style, className = "", overlay = "none", organic = false, focus = "50% 50%", sharpen = false, children }: PhotoImgProps) {
  const key = tone || (q && q.split(",")[0]) || "forest";
  const t = PHOTO_TONES[key] || PHOTO_TONES.forest;
  return (
    <div
      className={`photo-hover ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#1b2b22",
        clipPath: organic ? "polygon(8% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%, 0% 8%)" : undefined,
        ...style,
      }}
      title={alt || t.alt}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={t.url}
        alt={alt || t.alt}
        loading="lazy"
        className="photo-hover-img"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: focus,
          display: "block",
          filter: sharpen ? "contrast(1.1) saturate(1.08)" : undefined,
        }}
      />
      {overlay === "bottom" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,13,0) 42%, rgba(10,10,13,0.8) 100%)" }} />}
      {overlay === "full" && <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,13,0.38)" }} />}
      {overlay === "soft" && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(10,10,13,0.15), rgba(10,10,13,0.38))" }} />}
      {children}
    </div>
  );
}

type BigNumberProps = {
  children: React.ReactNode;
  color?: string;
  size?: number;
  style?: React.CSSProperties;
};

export function BigNumber({ children, color = "rgba(245,245,242,0.85)", size = 64, style }: BigNumberProps) {
  return (
    <span
      style={{
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontWeight: 800,
        fontSize: size,
        color,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

const ICON_PATHS: Record<string, React.ReactNode> = {
  lawn: <><path d="M4 20c0-5 3-8 8-8s8 3 8 8" /><path d="M12 12V4M8 8l1.5 3M16 8l-1.5 3" /></>,
  cleanup: <><path d="M6 20h12M9 20V9a3 3 0 013-3 3 3 0 013 3v11" /><path d="M9 9h6" /></>,
  mulch: <><path d="M3 18c3-2 6-2 9 0s6 2 9 0" /><path d="M3 13c3-2 6-2 9 0s6 2 9 0" /></>,
  trim: <><circle cx="7" cy="7" r="2.5" /><circle cx="7" cy="17" r="2.5" /><path d="M20 6L9 15M9.5 9L20 18" /></>,
  plant: <><path d="M12 21v-8" /><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6zM12 13c0-5 3-7 7-7 0 5-3 7-7 7z" /></>,
  design: <><path d="M4 20L15 9M15 9l-2-2 3-3 2 2M15 9l2 2" /><path d="M4 20l3-1 1-3" /></>,
  hardscape: <><path d="M3 10h6v5H3zM10 10h6v5h-6zM17 10h4v5h-4z" /><path d="M3 15h18" /></>,
  seasonal: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></>,
  quote: <path d="M7 17c-1.5 0-3-1.5-3-4 0-3.5 2.5-6 6-6.5v2.2C8 9 7 10.3 7 12h3v5H7zm9 0c-1.5 0-3-1.5-3-4 0-3.5 2.5-6 6-6.5v2.2c-2 .3-3 1.6-3 3.3h3v5h-3z" />,
  pin: <><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  phone: <path d="M7 3.5H4.5C3.7 3.5 3 4.2 3 5c0 8.8 7.2 16 16 16 .8 0 1.5-.7 1.5-1.5V17c0-.6-.4-1.1-1-1.3l-3.5-1c-.5-.1-1 0-1.3.4l-1 1.2a13 13 0 01-6.4-6.4l1.2-1c.4-.3.5-.8.4-1.3l-1-3.5c-.2-.6-.7-1-1.3-1z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 13l4 4L19 7" />,
};

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

export function Icon({ name, size = 22, color = "currentColor", className, style }: IconProps) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className, style };
  return <svg {...common}>{ICON_PATHS[name] || null}</svg>;
}

type ArrowButtonProps = {
  dir?: "left" | "right";
  onClick?: () => void;
  light?: boolean;
  size?: number;
};

export function ArrowButton({ dir = "right", onClick, light = false, size = 46 }: ArrowButtonProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      aria-label={dir === "right" ? "Next" : "Previous"}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, borderRadius: "50%", flexShrink: 0, cursor: "pointer",
        border: `1px solid ${light ? "rgba(245,245,242,0.3)" : "var(--border-default)"}`,
        background: hover ? (light ? "#F5F5F2" : "var(--sb-black)") : "transparent",
        color: hover ? (light ? "#0A0A0D" : "#fff") : (light ? "#F5F5F2" : "var(--sb-black)"),
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 260ms cubic-bezier(.16,1,.3,1)", transform: dir === "left" ? "scaleX(-1)" : "none",
      }}
    >
      <Icon name="arrow" size={18} />
    </button>
  );
}

type LeafMarqueeProps = { bg?: string; color?: string };

export function LeafMarquee({ bg = "var(--sb-forest-900)", color = "rgba(221,228,214,0.5)" }: LeafMarqueeProps) {
  const items = Array.from({ length: 14 });
  return (
    <div style={{ background: bg, overflow: "hidden", padding: "18px 0", position: "relative" }}>
      <div className="leaf-marquee-track" style={{ display: "flex", gap: 48, width: "max-content", animation: prefersReduced ? "none" : "sb-marquee 26s linear infinite" }}>
        {[...items, ...items].map((_, i) => (
          <Icon key={i} name="plant" size={22} color={color} />
        ))}
      </div>
      <style>{`@keyframes sb-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

type GhostButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  href?: string | null;
  onClick?: () => void;
  light?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
};

export function GhostButton({ children, size = "lg", href = null, onClick, light = true, icon = null, style: styleOverride }: GhostButtonProps) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: { height: 40, padding: "0 20px", fontSize: 14 },
    md: { height: 52, padding: "0 32px", fontSize: 15 },
    lg: { height: 60, padding: "0 40px", fontSize: 17 },
  };
  const style: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    borderRadius: "var(--radius-pill)", fontFamily: "var(--font-body)", fontWeight: 600,
    cursor: "pointer", whiteSpace: "nowrap", textDecoration: "none", boxSizing: "border-box",
    border: `1.5px solid ${light ? "rgba(245,245,242,0.65)" : "rgba(10,10,13,0.35)"}`,
    background: hover ? (light ? "#F5F5F2" : "#0A0A0D") : "transparent",
    color: hover ? (light ? "#0A0A0D" : "#F5F5F2") : (light ? "#F5F5F2" : "#0A0A0D"),
    transform: hover ? "translateY(-2px)" : "none",
    boxShadow: hover ? "var(--shadow-md)" : "none",
    transition: "all 320ms cubic-bezier(.16,1,.3,1)",
    ...sizes[size],
    ...styleOverride,
  };
  const commonProps = {
    style,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };
  if (href) {
    return <a href={href} {...commonProps}>{icon}{children}</a>;
  }
  return <button {...commonProps}>{icon}{children}</button>;
}

type LeafShapeProps = {
  size?: number;
  color?: string;
  opacity?: number;
  style?: React.CSSProperties;
  rotate?: number;
};

export function LeafShape({ size = 120, color = "var(--sb-flag-green)", opacity = 0.14, style, rotate = 0 }: LeafShapeProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ position: "absolute", opacity, transform: `rotate(${rotate}deg)`, pointerEvents: "none", ...style }}>
      <path d="M50 4C25 18 10 42 14 68c22 10 46 2 62-20C82 24 68 8 50 4z" fill={color} />
    </svg>
  );
}
