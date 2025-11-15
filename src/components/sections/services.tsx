"use client";

import { useRef, useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AirVent, Building2, Check, Wrench, Sparkles } from "lucide-react";
import { ButtonColorful } from '../ui/button-colorful';

const services = [
    { 
        icon: Building2, 
        title: "Serviços de climatização", 
        description: "Soluções completas e personalizadas.",
        items: [
            "Projeto de climatização personalizado",
            "Sistemas de Exaustão e Renovação de Ar",
            "Laudos e Anotação de Responsabilidade Técnica (ART)",
        ]
    },
    { 
        icon: AirVent, 
        title: "Instalação de Ar Condicionado", 
        description: "Equipes especializadas para todos os modelos.",
        items: [
            "Sistema de ar-condicionado Split",
            "Sistema de climatização Multisplit",
            "Sistema de ar-condicionado VRV/VRF",
        ]
    },
    { 
        icon: Sparkles, 
        title: "Higienização e Limpeza", 
        description: "Qualidade do ar e eficiência garantidas.",
        items: [
            "Limpeza completa de filtros e serpentinas",
            "Higienização contra ácaros e bactérias",
            "Melhora na qualidade do ar interno",
        ]
    },
    { 
        icon: Wrench, 
        title: "Reparo (Corretivo e Preventivo)", 
        description: "Manutenção preventiva e corretiva.",
        items: [
            "Contrato de manutenção preventiva (PMOC)",
            "Reparos emergenciais e agendados",
            "Técnicos qualificados para diagnósticos",
        ]
    },
];

export default function ServicesSection() {
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

  const animationClass = (delay: string) =>
    `transition-all duration-1000 ease-out ${delay} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`;

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-primary opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${animationClass('delay-0')}`}>
          <h2>Serviços da Ecco Clima</h2>
          <p className="mt-4 max-w-3xl mx-auto text-primary-foreground/80">
            Precisa climatizar sua casa ou prédio? Da instalação de ar-condicionado à climatização geral de ambientes, nossos serviços são feitos com qualidade por Engenheiros e Técnicos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {services.map((service, index) => (
            <div key={index} className={animationClass(`delay-${200 * (index + 1)}`)}>
              <Card className="bg-background/20 backdrop-blur-sm border-white/20 text-foreground h-full flex flex-col transform hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300">
                <CardHeader className="flex-row items-center gap-4">
                  <div className="bg-accent/20 text-accent p-3 rounded-lg">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle as="h3">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 mt-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 ${animationClass('delay-600')}`}>
          <ButtonColorful label="Solicite um Orçamento" />
        </div>
      </div>
    </section>
  );
}
