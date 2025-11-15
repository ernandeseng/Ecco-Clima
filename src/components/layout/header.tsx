"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonColorful } from "../ui/button-colorful";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Climatização", href: "#services" },
  { name: "Equipamentos", href: "#clients" },
  { name: "Contato", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center text-2xl font-bold text-foreground">
             {logoImage && <Image src={logoImage.imageUrl} alt={logoImage.description} width={100} height={100} className="h-auto w-24" data-ai-hint={logoImage.imageHint} />}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group font-body"
              >
                {link.name}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <ButtonColorful label="Agendar Visita" className="h-9 px-4 py-2 text-sm" />
          </nav>

          {/* Mobile Nav */}
           <nav className="flex md:hidden items-center space-x-2 sm:space-x-4">
             {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group font-body"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
            </Button>
          </nav>

          {isMobileMenuOpen && (
              <div 
                className="absolute top-20 left-0 right-0 md:hidden bg-background/95 backdrop-blur-sm shadow-lg rounded-b-lg p-4"
                >
              <div className="container mx-auto">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 text-center"
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border/20">
                     <ButtonColorful label="Agendar Visita" className="w-full" onClick={closeMenu} />
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
