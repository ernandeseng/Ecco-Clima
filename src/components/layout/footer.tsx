import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');

  return (
    <footer className="bg-secondary/30 border-t border-border/10 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and About */}
          <div className="flex items-center gap-4">
            {logoImage && (
              <Link href="/" className="inline-block">
                <Image
                  src={logoImage.imageUrl}
                  alt={logoImage.description}
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </Link>
            )}
            <p className="text-sm max-w-xs">
              Soluções completas em climatização para seu conforto e bem-estar.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <Link href="#" aria-label="Facebook" className="group">
              <div className="p-2.5 rounded-full bg-[#1877F2] transition-transform group-hover:scale-110">
                <Facebook className="h-5 w-5 text-white" />
              </div>
            </Link>
            <Link href="#" aria-label="Instagram" className="group">
              <div className="p-2.5 rounded-full bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#833AB4] transition-transform group-hover:scale-110">
                <Instagram className="h-5 w-5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/10 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Ecco Clima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
