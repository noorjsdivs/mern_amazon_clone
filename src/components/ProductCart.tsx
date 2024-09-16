import React from "react";
import { productType } from "../../type";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import FavoriteButton from "./FavoriteButton";
import PriceFormate from "./PriceFormate";

interface Props {
  product: productType;
}

const ProductCart = ({ product }: Props) => {
  const discount = (product?.price/100) * product?.discountPercentage;
  const actualPrice = discount + product?.price;
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
          <FavoriteButton product={product} />
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-2xl font-bold h-16 line-clamp-2">
          {product?.title}
        </h1>
        <p className="line-clamp-3 h-[72px] text-secondary/75 font-medium">{product.description}</p>
        <div className="flex items-end gap-2">
          <p className="text-xl font-bold">${product?.price}</p>
          <s  className="text-sm text-gray-600"><PriceFormate price={actualPrice}/></s>
        </div>
        <p className="flex justify-between">
          <span className="text-secondary/75">
            category: <span className="font-bold">{product?.category}</span>
          </span>{" "}
          <span className="px-2 rounded-lg bg-darkYellow/20 ">
            In Stock : {product?.stock}
          </span>
        </p>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCart;