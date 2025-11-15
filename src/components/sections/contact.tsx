"use client";

import { useRef, useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ButtonColorful } from '../ui/button-colorful';

export default function ContactSection() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animationClass = (delay: string) =>
    `transition-all duration-1000 ease-out ${delay} ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`;
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-700 to-primary opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-1 gap-12 lg:gap-16 items-center">
          <div className={`${animationClass('delay-0')} text-center`}>
            <h2>Contato da Ecco Clima</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-3xl mx-auto">
              Somos uma empresa que zela pela segurança e qualidade, do orçamento ao pós-venda. Cuide do seu ambiente com quem sabe cuidar da climatização de ponta a ponta.
            </p>
            <div className="mt-8 space-y-4 max-w-md mx-auto">
              <ButtonColorful label="Solicite uma visita técnica gratuita!" className="text-sm px-4 sm:px-8"/>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent"/>
                <div className="flex flex-col sm:flex-row items-center sm:gap-2">
                  <a href="tel:1126408455" className="hover:underline font-body">(11) 2640-8455</a>
                  <span className="hidden sm:inline">|</span>
                  <a href="https://wa.me/5511976844276" target="_blank" rel="noopener noreferrer" className="hover:underline font-body">(11) 97684-4276</a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent"/>
                <a href="mailto:contato@eccoclima.com" className="hover:underline font-body">contato@eccoclima.com</a>
              </div>
               <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent"/>
                <span className="font-body">São Paulo e Interior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
