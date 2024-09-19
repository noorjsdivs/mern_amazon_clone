import React from "react";
import { productType } from "../../type";
import ProductCart from "./ProductCart";
import Container from "./Container";
import { twMerge } from "tailwind-merge";

interface Props {
  products: productType[];
  className?: string;
}

const ProductList = ({ products, className }: Props) => {
  return (
    <Container className={twMerge(" px-5", className)}>
      <div
        className={twMerge(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
          className
        )}
      >
        {products.map((item) => (
            <ProductCart key={item?.id} product={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
