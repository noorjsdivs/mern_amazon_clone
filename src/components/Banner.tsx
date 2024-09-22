"use client";
import { banner_1, banner_2, banner_3, banner_4, banner_5 } from "@/assets";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductList from "./ProductList";
const Banner = () => {
  return (
    <>
      <div className="relative">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <Image priority src={banner_1} alt="banner_1" />
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
    </>
  );
};

export default Banner;
