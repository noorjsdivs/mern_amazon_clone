import React from "react";
import { productType } from "../../../type";
import Link from "next/link";
import Rating from "../Rating";
import PriceFormate from "../PriceFormate";
import AddToCartButton from "../AddToCartButton";
import ProductSpacification from "./ProductSpacification";

interface Props {
  product: productType;
}

const ProductDetails = ({ product }: Props) => {
  const discount = (product?.price / 100) * product?.discountPercentage;
  const actualPrice = product?.price + discount;
  return (
    <div className="p-4 space-y-2 text-sm">
      <h1 className="text-2xl font-bold">{product?.title}</h1>
      <p className="text-secondary font-bold  ">
        Brand:{" "}
        <Link
          href={`/?search=${product.brand.split(" ").join("")}`}
          className="hover:underline hover:text-darkYellow"
        >
          {product?.brand}
        </Link>
      </p>
      <Rating rating={product?.rating} />
      <div className="flex items-center gap-2">
        <p className="text-darkYellow">-{product?.discountPercentage}%</p>
        <p className="text-2xl flex items-start font-bold text-secondary">
          <span>$</span>
          {product?.price}
        </p>
      </div>
      <p className="flex items-center gap-12 text-secondary/70  font-bold">
        <span className="flex items-center">
          List price :{" "}
          <s>
            <PriceFormate price={actualPrice} />
          </s>
        </span>
        <p className="text-green-600">{product?.stock} in stock</p>
      </p>
      <p className="text-secondary ">{product?.description}</p>

      <div className="w-1/2">
        <AddToCartButton  product={product} />
      </div>
      <div className="mt-10">
        <ProductSpacification product={product}/>
      </div>
    </div>
  );
};

export default ProductDetails;
