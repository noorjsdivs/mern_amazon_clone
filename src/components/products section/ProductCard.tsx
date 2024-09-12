import Image from "next/image";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import PriceFormat from "./PriceFormat";
import AddToCartBtn from "../AddToCartBtn";
import { Product } from "../../../type";
import Link from "next/link";
import { paymentImage } from "@/assets";

interface Props {
  product: any;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden relative group">
      {/* product image */}
      <div className=" group overflow-hidden h-72 bg-[#F8F8F8] ">
        <Link
          href={{
            pathname: `product/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <Image
            src={product?.images[0]}
            alt="product image"
            width={600}
            height={600}
            loading="lazy"
            className="w-full h-full object-contain group-hover:scale-110 duration-300 "
          />
        </Link>
      </div>
      {/* discount and favourite icon */}
      <div className="absolute top-2 right-10 border border-black rounded-full px-3 group-hover:bg-black group-hover:text-white duration-200">
        {product?.discountPercentage}
      </div>
      <div className="absolute top-2 right-2 text-2xl ">
        <MdOutlineFavoriteBorder />
      </div>

      {/* products details */}
      <div>
        <div className="flex flex-col items-start justify-between gap-1 py-2 px-3">
          <h2 className="text-lg text-gray-700 ">{product?.title}</h2>
          <p className=" line-clamp-3 text-sm">{product?.description}</p>
          <PriceFormat amount={product?.price} className="text-black" />
          <p>
            {" "}
            Category:{" "}
            <span className="capitalize font-semibold">
              {product?.category}
            </span>
          </p>
          <AddToCartBtn product={product} className="" />
          
        </div>
      </div>
    </div>
  );
}
