import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Inter, Poppins } from 'next/font/google';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ecco Clima Solutions",
  description: "Serviços profissionais de climatização em São Paulo e interior.",
};

const fontBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-headline',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn(
        "font-body antialiased bg-background text-foreground",
        fontBody.variable,
        fontHeadline.variable
      )}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
