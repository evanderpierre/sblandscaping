"use client";

import React from "react";

type BadgeProps = {
  tone?: "sage" | "dark" | "accent" | "outline";
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export function Badge({ tone = "sage", icon = null, children }: BadgeProps) {
  const tones: Record<string, React.CSSProperties> = {
    sage: { background: "var(--sb-sage-100)", color: "var(--sb-forest-900)" },
    dark: { background: "var(--sb-black)", color: "var(--sb-white)" },
    accent: { background: "var(--sb-flag-green)", color: "var(--sb-black)" },
    outline: { background: "transparent", color: "var(--sb-white)", border: "1px solid var(--border-inverse)" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        ...tones[tone],
      }}
    >
      {icon}
      {children}
    </span>
  );
}

const buttonBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  height: 52,
  padding: "0 32px",
  borderRadius: "var(--radius-pill)",
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-label-md-size)",
  fontWeight: "var(--text-label-weight)" as unknown as number,
  border: "1px solid transparent",
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "transform 320ms cubic-bezier(.16,1,.3,1), background-color 320ms, box-shadow 320ms, color 320ms",
};

const buttonVariants: Record<string, React.CSSProperties> = {
  primary: { background: "var(--button-primary-bg)", color: "var(--button-primary-fg)" },
  accent: { background: "var(--button-accent-bg)", color: "var(--button-accent-fg)" },
  secondary: { background: "var(--button-secondary-bg)", color: "var(--button-secondary-fg)", borderColor: "var(--button-secondary-border)" },
  inverse: { background: "var(--button-inverse-bg)", color: "var(--button-inverse-fg)" },
};

const buttonSizes: Record<string, React.CSSProperties> = {
  sm: { height: 40, padding: "0 20px", fontSize: 14 },
  md: { height: 52, padding: "0 32px" },
  lg: { height: 60, padding: "0 40px", fontSize: 17 },
};

type ButtonProps = {
  variant?: "primary" | "accent" | "secondary" | "inverse";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  style?: React.CSSProperties;
};

export function Button({ variant = "primary", size = "md", disabled = false, icon = null, children, onClick, type = "button", style: styleOverride }: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const style: React.CSSProperties = {
    ...buttonBase,
    ...buttonVariants[variant],
    ...buttonSizes[size],
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
    transform: hover && !disabled ? "translateY(-2px)" : "none",
    boxShadow: hover && !disabled ? "var(--shadow-md)" : "none",
    ...styleOverride,
  };
  if (hover && !disabled && variant === "primary") style.background = "var(--button-primary-bg-hover)";
  if (hover && !disabled && variant === "accent") style.background = "var(--button-accent-bg-hover)";
  if (hover && !disabled && variant === "secondary") {
    style.background = "var(--button-secondary-fg)";
    style.color = "var(--surface-page)";
  }
  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
      {children}
    </button>
  );
}

type CardProps = {
  image?: string;
  tag?: string;
  title?: string;
  description?: string;
  dark?: boolean;
  hoverLift?: boolean;
  children?: React.ReactNode;
};

export function Card({ image, tag, title, description, dark = false, hoverLift = true, children }: CardProps) {
  return (
    <div
      style={{
        background: dark ? "var(--surface-card-dark)" : "var(--surface-card)",
        color: dark ? "var(--sb-white)" : "var(--text-primary)",
        borderRadius: "var(--radius-lg)",
        border: dark ? "1px solid var(--border-inverse)" : "1px solid var(--border-default)",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        transition: "box-shadow 320ms cubic-bezier(.16,1,.3,1), transform 320ms cubic-bezier(.16,1,.3,1)",
        cursor: hoverLift ? "pointer" : "default",
      }}
      onMouseEnter={(e) => {
        if (hoverLift) {
          e.currentTarget.style.boxShadow = "var(--shadow-card-hover)";
          e.currentTarget.style.transform = "translateY(-6px)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverLift) {
          e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          e.currentTarget.style.transform = "none";
        }
      }}
    >
      {image && (
        <div style={{ height: 200, overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt={title || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 600ms cubic-bezier(.16,1,.3,1)" }} />
        </div>
      )}
      <div style={{ padding: 24 }}>
        {tag && <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--sb-flag-green)", marginBottom: 10 }}>{tag}</div>}
        {title && <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, marginBottom: 8 }}>{title}</div>}
        {description && <div style={{ fontSize: 15, lineHeight: 1.6, color: dark ? "var(--sb-white-70)" : "var(--text-secondary)" }}>{description}</div>}
        {children}
      </div>
    </div>
  );
}

type EyebrowLabelProps = { children: React.ReactNode; inverse?: boolean };

export function EyebrowLabel({ children, inverse = false }: EyebrowLabelProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: inverse ? "var(--sb-sage-100)" : "var(--sb-forest-900)",
      }}
    >
      <span style={{ width: 18, height: 1.5, background: "currentColor", display: "inline-block" }} />
      {children}
    </div>
  );
}

type StatBlockProps = { value: React.ReactNode; label: React.ReactNode; dark?: boolean };

export function StatBlock({ value, label, dark = true }: StatBlockProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 44, lineHeight: 1, color: dark ? "var(--sb-white)" : "var(--sb-black)" }}>{value}</div>
      <div style={{ fontSize: 14, color: dark ? "var(--sb-white-70)" : "var(--text-secondary)" }}>{label}</div>
    </div>
  );
}

type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  dark?: boolean;
  name?: string;
};

export function Input({ label, placeholder, type = "text", textarea = false, dark = false, name }: InputProps) {
  const fieldStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "var(--radius-md)",
    border: dark ? "1px solid var(--border-inverse)" : "1px solid var(--border-default)",
    background: dark ? "var(--surface-glass)" : "#fff",
    color: dark ? "var(--sb-white)" : "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 200ms, box-shadow 200ms",
  };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: dark ? "var(--sb-white-70)" : "var(--text-secondary)" }}>{label}</span>}
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} style={{ ...fieldStyle, resize: "vertical", fontFamily: "var(--font-body)" }} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} style={fieldStyle} />
      )}
    </label>
  );
}

type SelectProps = { label?: string; options?: string[]; dark?: boolean; name?: string };

export function Select({ label, options = [], dark = false, name }: SelectProps) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: dark ? "var(--sb-white-70)" : "var(--text-secondary)" }}>{label}</span>}
      <select
        name={name}
        style={{
          width: "100%",
          padding: "14px 18px",
          borderRadius: "var(--radius-md)",
          border: dark ? "1px solid var(--border-inverse)" : "1px solid var(--border-default)",
          background: dark ? "var(--surface-glass)" : "#fff",
          color: dark ? "var(--sb-white)" : "var(--text-primary)",
          fontFamily: "var(--font-body)",
          fontSize: 15,
          outline: "none",
        }}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
