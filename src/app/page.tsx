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

export default function Home() {
  return (
    <div data-screen-label="Homepage">
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
