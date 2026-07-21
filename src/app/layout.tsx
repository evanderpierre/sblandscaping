import type { Metadata } from "next";
import { Inter, Manrope, Pirata_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const pirataOne = Pirata_One({
  variable: "--font-accent-blackletter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "S.B. Landscaping — Woburn-Based Landscape Design & Install",
  description:
    "S.B. Landscaping provides landscape maintenance, garden design, plant installs, cleanups, pruning, hardscape, sod, and snow removal for residential and commercial clients across Woburn, Stoneham, Wakefield, Saugus, and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${pirataOne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
