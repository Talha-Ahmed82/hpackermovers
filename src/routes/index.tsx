import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyTrustUs } from "@/components/WhyTrustUs";
import { HowItWorks } from "@/components/HowItWorks";
import { PriceEstimator } from "@/components/PriceEstimator";
import { GallerySection } from "@/components/GallerySection";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreas } from "@/components/ServiceAreas";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileCTABar } from "@/components/MobileCTABar";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <WhyTrustUs />
        <HowItWorks />
        <PriceEstimator />
        <GallerySection />
        <Testimonials />
        <ServiceAreas />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCTABar />
    </div>
  );
}
