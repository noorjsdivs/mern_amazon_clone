"use client";


import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../../type";
import Link from "next/link";

const ProductImage = ({ product }: { product: Product }) => {
  const [imgUrl, setImgUrl] = useState(product.images[0]);

  return (
    <div className="flex flex-start mt-5">
      <div>
        {product?.images?.map((item, index) => (
          <Image
            src={item}
            alt="productImage"
            width={200}
            height={200}
            priority
            key={index}
            className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-300 border border-gray-200 mb-1 ${
              imgUrl === item && "border-gray-500 rounded-sm opacity-100"
            }`}
            onClick={() => setImgUrl(item)}
          />
        ))}
      </div>
      <Link href={"/cart"} className="bg-gray-100 rounded-md ml-5 w-full max-h-[300px]">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="mainImage"
            width={500}
            height={500}
            priority
            className="w-full h-full object-contain"
          />
        )}
      </Link>
    </div>
  );
};

export default ProductImage;