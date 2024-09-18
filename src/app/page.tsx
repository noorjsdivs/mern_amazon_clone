import Banner from "@/components/header/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "@/helper";

export default async function Home() {
  const { products } = await getData("https://dummyjson.com/products?limit=194");

  return (
    <div className="relative">
      <Banner />
      <ProductList className="-mt-28 relative" products={products} />
    </div>
  );
}
