"use client"
import CarouselBanner from "@/components/CarouselBanner";
import ProductList from "@/components/ProductList";
import { getData } from "@/hooks";

const HomePage = async () => {

  const endPoind = "https://dummyjson.com/products";
  const { products } = await getData(endPoind)
  return (
    <main>
      <CarouselBanner />
      <div className="lg:-mt-72">
        <ProductList products={products} />
      </div>
    </main>
  );
}

export default HomePage;
