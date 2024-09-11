"use client"
import Container from "@/Container/Container";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: React.ReactNode;
}

const ProductImages = ({ product }: any) => {
    const [currenImage, setCurrentImage] = useState(product?.images[0]);
  return (
    <Container className="flex items-start gap-8 lg:ml-20">
      <div className="flex flex-col gap-2">
        {product?.images?.map((item: any, index: number) => (
          <div className={`border-2 h-full w-20 md:w-32 flex items-center justify-center rounded-md ${item === currenImage ? "border-orange-500" : " border-gray-400"}`} key={index}>
            <Image
              src={item}
              alt="product images"
              width={150}
              height={150}
              className="object-contain cursor-pointer transition-all duration-300"
              onClick={() => setCurrentImage(item)}

            />
          </div>
        ))}
      </div>
      <div className="h-[500px] bg-orange-50 rounded-md p-3">
       <Image src={currenImage} alt="large image" width={500} height={500} className="object-contain"/>
      </div>
    </Container>
  );
};

export default ProductImages;
