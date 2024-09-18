import Container from "@/components/Container";
import ImageArrayView from "@/components/product/ImageArrayView";
import ProductDetails from "@/components/product/ProductDetails";
import { getData } from "@/helper";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const SinglePage = async ({ params }: Props) => {
  const endpoint = `https://dummyjson.com/products/${params?.id}`;
  const product = await getData(endpoint);
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <ImageArrayView images={product?.images} />
        </div>
        <div><ProductDetails product={product}/></div>
      </div>
    </Container>
  );
};

export default SinglePage;
