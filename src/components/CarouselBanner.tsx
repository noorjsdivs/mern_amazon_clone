"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  bannerFive,
  bannerFour,
  bannerOne,
  bannerThree,
  bannerTwo,
} from "@/assets";
import Image from "next/image";

Autoplay.globalOptions = { delay: 8000 };

export default function CarouselBanner() {
  const bannerImages = [
    { title: "bannerOne", source: bannerOne },
    { title: "bannerTwo", source: bannerTwo },
    { title: "bannerThree", source: bannerThree },
    { title: "bannerFour", source: bannerFour },
    { title: "bannerFive", source: bannerFive },
  ];

  const [emblaRef] = useEmblaCarousel({ loop:true, duration:100 }, [Autoplay()]);
  return (
    <div className="overflow-hidden cursor-pointer relative z-0" ref={emblaRef}>
      <div className="flex">
          {bannerImages?.map((item) => (
            <Image key={item.title} src={item.source} alt={item.title}
            width={1920}
            height={1080}
            />
          ))}
      </div>
    </div>
  );
}
