"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

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
  return (
    <section id="clients" className="bg-white py-20 md:py-28">
      <div className="container mx-auto">
        <h2 className="text-center text-foreground mb-12">Marcas que Trabalhamos</h2>
        <InfiniteSlider
          gap={80}
          duration={30}
          className="w-full"
        >
          {clientLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={128}
              height={40}
              className="object-contain h-10 w-auto"
            />
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
