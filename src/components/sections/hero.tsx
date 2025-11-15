"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Start parallax effect only when the hero section is in view
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setOffsetY(window.pageYOffset);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-[85vh] min-h-[600px] md:h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {logoImage && (
            <Image 
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={200}
              height={200}
              className="mx-auto mb-4"
              data-ai-hint={logoImage.imageHint}
            />
          )}
          <h1 className="text-shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
            Ecco Clima
          </h1>
          <p className="font-headline font-semibold text-2xl md:text-4xl text-primary mt-2">
            Climatização
          </p>
          <p className="mt-6 max-w-xl mx-auto">
            Conheça nossos serviços de climatização em São Paulo e interior.
          </p>
          <Button asChild size="lg" variant="accent" className="mt-8 animate-pulse font-headline font-semibold tracking-[0.5px] uppercase">
            <Link href="#contact">AGENDAR VISITA TÉCNICA</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
