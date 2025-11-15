"use client";

import { AnimatedCarousel } from "@/components/ui/logo-carousel";
import Image from "next/image";

const clientLogos = [
  { src: "https://i.imgur.com/ur5LCr6.png", alt: "Springer" },
  { src: "https://i.imgur.com/9OAvr9v.png", alt: "Fujitsu" },
  { src: "https://i.imgur.com/8A5wWNu.png", alt: "LG" },
  { src: "https://i.imgur.com/SGOLEOT.png", alt: "Midea" },
  { src: "https://i.imgur.com/fT05ekK.png", alt: "Samsung" },
  { src: "https://i.imgur.com/aqvG6LN.png", alt: "Carrier" },
  { src: "https://i.imgur.com/YGQnl6c.png", alt: "Elgin" },
  { src: "https://i.imgur.com/R70DIoT.png", alt: "Trane" },
  { src: "https://i.imgur.com/rrFOdLT.png", alt: "Daikin" },
  { src: "https://i.imgur.com/UVG58JA.png", alt: "TCL" },
];

export default function ClientsSection() {
  const logoComponents = clientLogos.map((logo, index) => (
    <Image
      key={index}
      src={logo.src}
      alt={logo.alt}
      width={128}
      height={64}
      className="object-contain h-10 w-auto"
    />
  ));
  
  return (
    <section id="clients" className="bg-background">
       <AnimatedCarousel 
        title="Marcas que Trabalhamos"
        logos={[...logoComponents, ...logoComponents]}
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
