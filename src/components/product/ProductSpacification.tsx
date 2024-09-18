import React from "react";
import { productType } from "../../../type";

interface Props {
  product: productType;
}

const ProductSpacification = ({ product }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <div className="border-b px-2">
        <p className="font-semibold">Brand: </p>
        <p className="font-semibold">Title: </p>
        <p className="font-semibold">Category: </p>
        <p className="font-semibold">Weight:</p>
        <p className="font-semibold">weight:</p>
        <p className="font-semibold">Height:</p>
        <p className="font-semibold">Depth:</p>
        <p className="font-semibold">Return Policy:</p>
      </div>
      <div className="col-span-2 px-2">
        <p>{product?.brand}</p>
        <p>{product?.title}</p>
        <p>{product?.category}</p>
        <p>{product?.weight}</p>
        <p>{product?.dimensions?.width}</p>
        <p>{product?.dimensions?.height}</p>
        <p>{product?.dimensions?.depth}</p>
        <p>{product?.returnPolicy}</p>
      </div>

      <div></div>
      <div></div>
    </div>
  );
};

export default ProductSpacification;
