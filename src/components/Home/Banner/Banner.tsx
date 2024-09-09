"use client"
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "@/assets";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

Autoplay.globalOptions = { delay: 8000 };


const Banner = () => {
  const bannerImages = [
    { title: "bannerOne", source: bannerImgOne },
    { title: "bannerTwo", source: bannerImgTwo },
    { title: "bannerThree", source: bannerImgThree },
    { title: "bannerFour", source: bannerImgFour },
    { title: "bannerFive", source: bannerImgFive },
  ];
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div className="overflow-hidden cursor-pointer relative z-0" ref={emblaRef}>
      <div className="flex">
        {bannerImages?.map((item) => (
          <Image
            key={item?.title}
            src={item?.source}
            alt="bannerOne"
            width={1920}
            height={1080}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-mainColor" />
    </div>
  );
};

export default Banner;
