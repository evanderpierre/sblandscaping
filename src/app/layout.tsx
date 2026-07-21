import type { Metadata } from "next";
import { Inter, Manrope, Pirata_One } from "next/font/google";
import { BUSINESS_DESCRIPTION, BUSINESS_NAME, IS_PREVIEW_MODE, SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: "S.B. Landscaping | Landscaping Services in Woburn, MA",
  description: BUSINESS_DESCRIPTION,
  applicationName: BUSINESS_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: BUSINESS_NAME,
    title: "S.B. Landscaping | Woburn, MA Landscaping Company",
    description:
      "Local landscaping, design, installs, maintenance, pruning, cleanups, hardscape, sod, and snow removal for Woburn and nearby Massachusetts communities.",
    images: [
      {
        url: "/images/google-business/lawn-care-white-colonial-sign-01.jpg",
        width: 1800,
        height: 1350,
        alt: "S.B. Landscaping lawn care project in Woburn with branded yard sign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.B. Landscaping | Woburn, MA Landscaping Company",
    description:
      "Landscape design, installs, maintenance, pruning, cleanups, hardscape, sod, and snow removal in Woburn and nearby communities.",
    images: ["/images/google-business/lawn-care-white-colonial-sign-01.jpg"],
  },
  robots: {
    index: !IS_PREVIEW_MODE,
    follow: !IS_PREVIEW_MODE,
    googleBot: {
      index: !IS_PREVIEW_MODE,
      follow: !IS_PREVIEW_MODE,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
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
