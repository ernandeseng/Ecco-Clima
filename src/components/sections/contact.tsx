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
    <section id="contact" ref={sectionRef} className="py-10 md:py-28 bg-primary text-primary-foreground relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-700 to-primary opacity-50"></div>
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-1 gap-8 lg:gap-12 items-center">
          <div className={`${animationClass('delay-0')} text-center`}>
            <h2 className="text-3xl md:text-[42px]">Contato da Ecco Clima</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-3xl mx-auto text-base md:text-lg px-6 md:px-0">
              Somos uma empresa que zela pela segurança e qualidade, do orçamento ao pós-venda. Cuide do seu ambiente com quem sabe cuidar da climatização de ponta a ponta.
            </p>
            <div className="mt-8 space-y-4 max-w-md mx-auto">
              <ButtonColorful 
                label="Solicite uma visita técnica gratuita!" 
                className="w-full max-w-[320px] mx-auto whitespace-normal h-auto text-sm px-4 sm:px-8 py-3"
              />
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <Phone className="w-5 h-5 text-accent"/>
                <div className="flex flex-col sm:flex-row items-center sm:gap-2">
                  <a href="tel:1126408455" className="hover:underline font-body">(11) 2640-8455</a>
                  <span className="hidden sm:inline">|</span>
                  <a href="https://wa.me/5511976844276" target="_blank" rel="noopener noreferrer" className="hover:underline font-body">(11) 97684-4276</a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <Mail className="w-5 h-5 text-accent"/>
                <a href="mailto:contato@eccoclima.com" className="hover:underline font-body">contato@eccoclima.com</a>
              </div>
               <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-accent"/>
                <span className="font-body">São Paulo e Interior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
