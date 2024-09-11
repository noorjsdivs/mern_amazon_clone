import { getData } from "@/app/helpers";
import ProductCard from "./ProductCard";
import { productType } from "../../type";
import Container from "./Container";

const ProductList = async () => {
  const endpoint = "https://fakestoreapiserver.reactbd.com/tech";
  const product = await getData(endpoint);
  console.log(product);

  return (
    <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-5">
      {product?.map((product: productType) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
