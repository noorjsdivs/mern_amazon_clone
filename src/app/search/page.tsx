import { getData } from "@/helper";
import React from "react";
import ProductList from "@/components/ProductList";

interface Props {
  searchParams: {
    limit: string;
    order: string;
    sortBy: string;
    q: string;
  };
}

const Search = async ({ searchParams }: Props) => {
  const { limit, order, sortBy, q } = searchParams;
  const endpoint = `https://dummyjson.com/products/search?limit=${limit}&order=${order}&sortBy=${sortBy}&q=${q}`;
  const { products: queryProduct } = await getData(endpoint);
  return (
    <>
    
  
      <ProductList className="" products={queryProduct} />
    
    </>
  );
};

export default Search;
