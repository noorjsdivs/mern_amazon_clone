import { getData } from "@/helper";
import React from "react";
import ProductList from "@/components/ProductList";

interface Props {
  searchParams: {
    category: string;
  };
}

const Result = async ({ searchParams }: Props) => {
  const { category } = searchParams;
  const endpoint = `https://dummyjson.com/products/category/${category}`;
  const { products: queryProduct } = await getData(endpoint);
  return (
        <ProductList className="" products={queryProduct} />
  );
};

export default Result;
