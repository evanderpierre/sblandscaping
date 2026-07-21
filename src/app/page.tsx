import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { PainPoint } from "@/components/sections/PainPoint";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { PromoOffer } from "@/components/sections/PromoOffer";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";
import { SITE_URL } from "@/lib/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "S.B. Landscaping",
  url: SITE_URL,
  telephone: "+17818541078",
  email: "Settebelloservices2023@gmail.com",
  image: `${SITE_URL}/images/google-business/lawn-care-white-colonial-sign-01.jpg`,
  logo: `${SITE_URL}/logo/sb-logo-mark.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Woburn",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Woburn, MA" },
    { "@type": "City", name: "Stoneham, MA" },
    { "@type": "City", name: "Wakefield, MA" },
    { "@type": "City", name: "Saugus, MA" },
    { "@type": "AdministrativeArea", name: "Nearby Massachusetts communities" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/ov2mwtoV1AiuK8R6A",
    "https://www.facebook.com/p/SB-Landscaping-61573771418428/",
  ],
  serviceType: [
    "Landscape Design",
    "Landscape Installation",
    "Garden Design",
    "Plant Installation",
    "Hardscape Design and Installation",
    "Tree and Shrub Trimming",
    "Lawn Care",
    "Spring and Fall Cleanups",
    "Sod Installation",
    "Snow Removal",
  ],
};

export default function Home() {
  return (
    <div data-screen-label="Homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <Hero />
      <Intro />
      <PainPoint />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ServiceArea />
      <PromoOffer />
      <QuoteForm />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
