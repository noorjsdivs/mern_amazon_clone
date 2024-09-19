import React from "react";
import { productType } from "../../../type";
import Container from "../Container";
import ProductCart from "../ProductCart";

interface Props {
  products: productType[];
}

const ResultList = ({ products }: Props) => {
  return (
    <div>
      <Container>
        {products.map((item) => (
          <ProductCart key={item?.id} product={item} />
        ))}
      </Container>
    </div>
  );
};

export default ResultList;
