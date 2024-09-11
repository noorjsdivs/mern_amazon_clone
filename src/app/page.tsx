import CarouselBanner from "@/components/CarouselBanner";
import ProductList from "@/components/products/ProductList";
import { fetchData } from "@/lib";



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
