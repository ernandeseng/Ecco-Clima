import HeroSection from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services";
import BenefitsSection from "@/components/sections/benefits";
import ClientsSection from "@/components/sections/clients";
import ContactSection from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
