"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function CarouselWithThumbs(props: {
  imageName: string;
  gallery: string[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div className="w-full md:w-1/2">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {props.gallery.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="p-0 overflow-clip">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <Image
                      width={1200}
                      height={1200}
                      src={image}
                      alt={props.imageName}
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <Carousel className="mt-4 w-full max-w-xs">
        <CarouselContent className="my-1 flex">
          {props.gallery.map((image, index) => (
            <CarouselItem
              className={cn(
                "basis-1/4 cursor-pointer",
                current === index + 1 ? "opacity-100" : "opacity-50",
              )}
              key={index}
              onClick={() => handleThumbClick(index)}
            >
              <Card
                className={cn(
                  "flex aspect-square items-center justify-center p-0 overflow-clip",
                  current === index + 1 && "border-2 border-red-500",
                )}
              >
                <CardContent className="p-0 h-full">
                  <Image
                    width={1200}
                    height={1200}
                    src={image}
                    alt={props.imageName}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
