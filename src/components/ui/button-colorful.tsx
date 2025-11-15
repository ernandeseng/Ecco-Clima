"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Agendar Visita",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            asChild
            variant="accent"
            size="lg"
            className={cn(
                "relative overflow-hidden group font-headline font-semibold tracking-[0.5px] uppercase",
                "bg-gradient-to-r from-green-500 via-teal-500 to-blue-500",
                className
            )}
        >
            <a href="https://wa.me/5511976844276" target="_blank" rel="noopener noreferrer">
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-gradient-to-r from-accent via-primary to-blue-400",
                        "opacity-80 group-hover:opacity-100",
                        "transition-opacity duration-500"
                    )}
                />
                <div className="relative flex items-center justify-center gap-2">
                    <Phone className="mr-2 h-5 w-5" />
                    <span>{label}</span>
                </div>
            </a>
        </Button>
    );
}
