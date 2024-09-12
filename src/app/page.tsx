import CarouselBanner from "@/components/CarouselBanner";
import ProductList from "@/components/products section/ProductList";
import { fetchData } from "@/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Amazon clone",
  description: "An amazon clone application for education purpose",
};

export default async function Home() {
  const endpoint = 'https://dummyjson.com/products'
  const {products} = await fetchData(endpoint)
  // console.log( products);
  
  return (
    <main>
      <CarouselBanner/>
      <div className="-mt-10 md:-mt-20 lg:-mt-60 flex items-center justify-center pb-10 z-10 ">
        <ProductList products ={products}/>
      </div>
    </main>
  );
}
