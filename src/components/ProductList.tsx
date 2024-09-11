import React from "react";
import { productType } from "../../type";
import ProductCart from "./ProductCart";
import Container from "./Container";

interface Props {
  products: productType[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Container className="-mt-48">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCart key={item?.title} product={item} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
