"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Spinner from "../animation/Spinner";
const LoadImage = dynamic(()=> import('../ImageSuspanse'), {loading: ()=> <Spinner/>})

interface Props {
  images: string[];
}

const ImageArrayView = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/6 flex flex-row justify-center lg:flex-col lg:justify-start  gap-1">
        {images.map((url, index) => (
          <button
            key={index}
            className={`w-1/6 lg:w-full border ${
              currentImage === url ? "border-darkYellow" : "border-secondary/20"
            } rounded-md duration-300`}
            onClick={() => setCurrentImage(url)}
          >
            {/* <Image
              src={url}
              alt="amazon"
              width={100}
              height={100}
              className="w-full aspect-square object-contain"
            /> */}
            <LoadImage image={url} alt="Amazon"/>
          </button>
        ))}
      </div>
      <div className="flex-1">
        {/* <Image
          src={currentImage}
          alt={currentImage}
          width={500}
          height={500}
          className="p-4 w-full aspect-square object-contain bg-gray-50 rounded-md"
        /> */}
        <LoadImage image={currentImage} alt={currentImage}/>
      </div>
    </div>
  );
};

export default ImageArrayView;
