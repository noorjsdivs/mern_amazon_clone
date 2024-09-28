import { getData } from "@/helpers";
import { ProductType } from "../../type";
import ProductCard from "./ProductCard";
import Container from "./Container";

const ProductList = async () => {
  const endpoint = "https://dummyjson.com/products";
  const product = await getData(endpoint);
  const productArray = product.products;

  return (
    <Container className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {productArray?.map((product: ProductType) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
