import React from "react";
import { productType } from "../../../type";
import ResultItem from "./ResultItem";
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
          <ProductCart product={item} />
        ))}
      </Container>
    </div>
  );
};

export default ResultList;
