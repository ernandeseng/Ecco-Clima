import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Clientes", href: "#clients" },
  { name: "Contato", href: "#contact" },
];

export default function Footer() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <footer className="bg-background border-t border-border/20 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            {logoImage && (
              <Link href="/" className="mb-4 inline-block">
                <Image
                  src={logoImage.imageUrl}
                  alt={logoImage.description}
                  width={120}
                  height={120}
                  className="h-auto"
                />
              </Link>
            )}
            <p className="text-sm">
              Soluções completas em climatização para seu conforto e bem-estar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:1126408455" className="hover:text-foreground transition-colors">(11) 2640-8455</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contato@eccoclima.com" className="hover:text-foreground transition-colors">contato@eccoclima.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span>São Paulo e Interior</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Siga-nos</h3>
            <div className="flex items-center space-x-4">
              <Link href="#" aria-label="Facebook" className="group">
                <div className="p-2 rounded-full bg-secondary group-hover:bg-[#1877F2] transition-colors">
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                </div>
              </Link>
              <Link href="#" aria-label="Instagram" className="group">
                <div className="p-2 rounded-full bg-secondary group-hover:bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] transition-colors">
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ecco Clima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
