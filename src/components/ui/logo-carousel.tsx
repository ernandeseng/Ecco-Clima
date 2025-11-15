"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TextRoll } from "./text-roll";

export const AnimatedCarousel = ({
  title = "Trusted by thousands of businesses worldwide",
  logoCount = 15,
  autoPlay = true,
  autoPlayInterval = 1000,
  logos = null,
  containerClassName = "",
  titleClassName = "",
  carouselClassName = "",
  logoClassName = "",
  itemsPerViewMobile = 4,
  itemsPerViewDesktop = 6,
  spacing = "gap-10",
  padding = "py-20 lg:py-40",
  logoContainerWidth = "w-48",
  logoContainerHeight = "h-24",
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [api, current, autoPlay, autoPlayInterval]);

  const logoItems = logos || Array.from({ length: logoCount }, (_, i) => `Logo ${i + 1}`);

  return (
    <div className={`w-full ${padding} bg-background ${containerClassName}`}>
      <div className="container mx-auto">
        <div className={`flex flex-col ${spacing}`}>
          {title && (
            <h2 className={`text-xl md:text-3xl tracking-tighter lg:max-w-xl font-regular text-left ml-2 text-foreground ${titleClassName}`}>
              <TextRoll>{title}</TextRoll>
            </h2>
          )}
          
          <div>
            <Carousel setApi={setApi} className={`w-full ${carouselClassName}`} opts={{
              align: "start",
              loop: true,
            }}>
              <CarouselContent className="-ml-1">
                {logoItems.map((logo, index) => (
                  <CarouselItem className={`pl-1 basis-1/${itemsPerViewMobile} md:basis-1/4 lg:basis-1/${itemsPerViewDesktop}`} key={index}>
                    <div className={`flex rounded-md ${logoContainerWidth} ${logoContainerHeight} items-center justify-center p-4 hover:bg-accent/10 transition-colors ${logoClassName}`}>
                      {typeof logo === 'string' ? (
                        <div className="flex justify-center items-center h-20 bg-secondary/50 rounded-lg p-4 w-full">
                           <span className="text-muted-foreground font-semibold text-center font-body text-base">{logo}</span>
                        </div>
                      ) : (
                        logo
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
