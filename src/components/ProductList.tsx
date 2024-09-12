import { getData } from "@/app/helpers";
import ProductCard from "./ProductCard";
import { productType } from "../../type";
import Container from "./Container";

const ProductList = async () => {
  const endpoint = "https://dummyjson.com/products";
  const product = await getData(endpoint);
  const ProductArray = product?.products;
  console.log(ProductArray);

  return (
    <Container className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {ProductArray.map((product: productType) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;
