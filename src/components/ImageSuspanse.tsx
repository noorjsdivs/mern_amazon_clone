"use client";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  alt: string;
}

const ImageSuspanse = ({ image, alt }: Props) => {
  return (
    <Image
      src={image}
      alt={alt}
      width={200}
      height={200}
      className="w-full aspect-square object-contain  group-hover:scale-110 duration-300"
    ></Image>
  );
};

export default ImageSuspanse;
