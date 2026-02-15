import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { LegacySection } from "@/components/legacy-section";
import { ServicesSection } from "@/components/services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LegacySection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
