"use client";
import { banner_1, banner_2, banner_3, banner_4, banner_5 } from "@/assets";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        interval={5000}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <Image src={banner_1} alt="banner_1" />
        </div>
        <div>
          <Image src={banner_2} alt="banner_2" />
        </div>
        <div>
          <Image src={banner_3} alt="banner_3" />
        </div>
        <div>
          <Image src={banner_4} alt="banner_4" />
        </div>
        <div>
          <Image src={banner_5} alt="banner_5" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
