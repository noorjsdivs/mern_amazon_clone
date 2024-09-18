"use client";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  image: string;
  alt: string;
  className?: string
}

const ImageSuspanse = ({ image, alt, className }: Props) => {
  return (
    <div className={twMerge("w-full h-full flex items-center justify-center group", className)}>
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
        className="w-full h-full aspect-square object-contain aspect-square  group-hover:scale-110 duration-300 flex-1"
      />
    </div>
  );
};

export default ImageSuspanse;
