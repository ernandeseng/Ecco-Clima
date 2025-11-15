"use client";

import { AnimatedCarousel } from "@/components/ui/logo-carousel";

const clientLogos = [
  "Empresa Alfa",
  "Construtora Beta",
  "Grupo Gamma",
  "Delta S.A.",
  "Epsilon Tech",
  "Zeta Corp",
  "Omega Solutions",
  "Theta Builders",
  "Iota Services",
  "Kappa Inc."
];

export default function ClientsSection() {
  return (
    <section id="clients" className="bg-background">
       <AnimatedCarousel 
        title="Nossos Clientes"
        logos={[...clientLogos, ...clientLogos]} // Duplicate for a smoother loop
        autoPlay={true}
        autoPlayInterval={2500}
        itemsPerViewMobile={2}
        itemsPerViewDesktop={5}
        logoContainerWidth="w-full"
        logoContainerHeight="h-24"
        padding="py-20 md:py-28"
        spacing="gap-16"
        titleClassName="text-center !max-w-full !ml-0 mb-2"
       />
    </section>
  );
}
