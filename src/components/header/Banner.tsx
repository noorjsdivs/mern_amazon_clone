"use client";
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from "@/assets/images/Image";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function Banner() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % 5); // Loop through slides
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full z-10">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={5000} // Speed of the transition between slides (optional)
        easing="ease-in-out"
        infinite={true}
        // autoplay={false} // Disable default autoplay
      >
        <div className="w-screen h-[80vh]">
          <Image src={bannerImgOne} alt="image 1" />
        </div>
        <div className="w-screen h-[80vh]">
          <Image src={bannerImgTwo} alt="image 2" />
        </div>
        <div className="w-screen h-[80vh]">
          <Image src={bannerImgThree} alt="image 3" />
        </div>
        <div className="w-screen h-[80vh]">
          <Image src={bannerImgFour} alt="image 3" />
        </div>
        <div className="w-screen h-[80vh]">
          <Image src={bannerImgFive} alt="image 3" />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Banner;
