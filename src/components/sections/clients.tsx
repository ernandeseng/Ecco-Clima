"use client";

import { useRef, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Phone } from 'lucide-react';

const clientLogos = [
  "Empresa Alfa",
  "Construtora Beta",
  "Grupo Gamma",
  "Delta S.A.",
  "Epsilon Tech",
  "Zeta Corp",
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = `transition-all duration-1000 ease-out ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`;

  return (
    <section id="clients" ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${animationClass}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Nossos Clientes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Confiança e parceria com grandes nomes do mercado.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center items-center h-20 bg-secondary/50 rounded-lg p-4">
                <span className="text-muted-foreground font-semibold text-center">{logo}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-16 ${animationClass}`}>
          <Button asChild variant="accent" size="lg" className="hover:scale-105 transition-transform">
            <a href="https://wa.me/5511976844276" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Seja nosso parceiro
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
