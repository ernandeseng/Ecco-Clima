"use client";

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';
import { ButtonColorful } from '../ui/button-colorful';

const benefits = [
  "Alta qualidade da visita técnica",
  "Atendimento personalizado e comprometido",
  "Rapidez no retorno do time especializado",
  "Facilidade de produtos à pronta entrega",
  "Segurança na implementação",
  "Seguro de responsabilidade civil",
  "Garantia gratuita de 12 meses (verão-inverno)",
  "Sustentabilidade com certificado do IBAMA",
  "Times com treinamentos constantes",
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const benefitsImage = PlaceHolderImages.find(p => p.id === 'benefits-illustration');

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
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-gray-50 text-gray-800 relative overflow-hidden">
      {benefitsImage && (
        <Image
          src={benefitsImage.imageUrl}
          alt={benefitsImage.description}
          width={800}
          height={800}
          className="absolute -right-40 -bottom-40 opacity-10 object-cover"
          data-ai-hint={benefitsImage.imageHint}
        />
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={animationClass('delay-0')}>
            <h2 className="text-slate-900">Benefícios exclusivos</h2>
            <p className="mt-4 text-gray-600">
              Quais as vantagens dos serviços da Ecco Clima?
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-10 ${animationClass('delay-200')}`}>
                <ButtonColorful label="Fale com um especialista" />
            </div>
          </div>
          {/* A imagem agora é uma marca d'água, então o div da imagem original pode ser removido ou escondido */}
          <div className={`${animationClass('delay-200')} hidden md:block`}>
            {/* O conteúdo da imagem foi movido para fora da grade principal para atuar como fundo */}
          </div>
        </div>
      </div>
    </section>
  );
}
