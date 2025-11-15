"use client";

import { useRef, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
    });
    form.reset();
  }

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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={animationClass('delay-0')}>
            <h2 className="text-4xl md:text-5xl font-bold font-headline">Contato da Ecco Clima</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Somos uma empresa que zela pela segurança e qualidade, do orçamento ao pós-venda. Cuide do seu ambiente com quem sabe cuidar da climatização de ponta a ponta.
            </p>
            <div className="mt-8 space-y-4">
              <p className="text-xl font-semibold bg-accent text-accent-foreground p-4 rounded-lg">
                Solicite uma visita técnica gratuita!
              </p>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-accent"/>
                <div>
                  <a href="tel:1126408455" className="hover:underline">(11) 2640-8455</a> | <a href="https://wa.me/5511976844276" target="_blank" rel="noopener noreferrer" className="hover:underline">(11) 97684-4276</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent"/>
                <a href="mailto:contato@eccoclima.com" className="hover:underline">contato@eccoclima.com</a>
              </div>
               <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-accent"/>
                <span>São Paulo e Interior</span>
              </div>
            </div>
          </div>
          <div className={`${animationClass('delay-200')} bg-background/20 backdrop-blur-sm border border-white/20 p-8 rounded-lg`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} className="bg-background/50 text-foreground placeholder:text-muted-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu.email@exemplo.com" {...field} className="bg-background/50 text-foreground placeholder:text-muted-foreground" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Como podemos ajudar?" {...field} className="bg-background/50 text-foreground placeholder:text-muted-foreground min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="accent" className="w-full">Enviar Mensagem</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
