import React from "react";
import { productType } from "../../type";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";


interface Props {
  product: productType;
}

const ProductCart = ({ product }: Props) => {
  return (
    <div className="border border-primary/30 bg bg-gray-50 rounded-lg cursor-pointer ">
      <div className="p-5  relative group">
        <Image
          src={product?.images[0]}
          alt={product?.title}
          width={200}
          height={200}
          className="w-full aspect-square object-contain  group-hover:scale-110 duration-300"
        ></Image>
        <div className="absolute top-3 right-3 flex items-center gap-3">
          <p className="px-2 text-sm border border-primary rounded-full group-hover:bg-primary group-hover:text-white duration-300">
            {product?.discountPercentage}%
          </p>
          <FavoriteButton/>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-2xl font-bold h-16 line-clamp-2">{product?.title}</h1>
        <p className="line-clamp-3 h-[72px]">{product.description}</p>
        <p className="text-xl font-bold">${product?.price}</p>
        <p>
          category: <span className="font-bold">{product?.category}</span>
        </p>
        <AddToCartButton/>
      </div>
    </div>
  );
};

export default ProductCart;
