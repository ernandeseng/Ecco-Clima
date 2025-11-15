"use client";

import { useRef, useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AirVent, Building2, Check, Phone } from "lucide-react";
import Link from 'next/link';
import { ButtonColorful } from '../ui/button-colorful';

const services = {
  climatizacao: [
    "Sistema de ar-condicionado Split",
    "Sistema de climatização Multisplit",
    "Sistema de ar-condicionado VRV/VRF",
    "Limpeza e Higienização de sistemas",
    "Manutenção Preventiva e Corretiva",
  ],
  projetos: [
    "Projeto de climatização personalizado",
    "Infraestrutura completa de climatização",
    "Sistemas de Exaustão e Renovação de Ar",
    "Sistemas de Escadas Pressurizadas",
    "Laudos e Anotação de Responsabilidade Técnica (ART)",
  ],
};

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

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className={animationClass('delay-200')}>
            <Card className="bg-background/20 backdrop-blur-sm border-white/20 text-foreground h-full flex flex-col transform hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent/20 text-accent p-3 rounded-lg">
                  <AirVent className="w-8 h-8" />
                </div>
                <div>
                  <h3 as="h3">Serviços de Climatização</h3>
                  <p className="text-muted-foreground text-base">Instalação, limpeza e manutenção</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-4">
                  {services.climatizacao.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className={animationClass('delay-400')}>
            <Card className="bg-background/20 backdrop-blur-sm border-white/20 text-foreground h-full flex flex-col transform hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent/20 text-accent p-3 rounded-lg">
                  <Building2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 as="h3">Projetos e Infraestrutura</h3>
                  <p className="text-muted-foreground text-base">Soluções completas e personalizadas</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 mt-4">
                  {services.projetos.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className={`text-center mt-16 ${animationClass('delay-600')}`}>
          <ButtonColorful label="Solicite um Orçamento" />
        </div>
      </div>
    </section>
  );
}
