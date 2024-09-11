import Banner from "@/components/header/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "@/helper";

export default async function Home() {
  const {products} = await getData('https://dummyjson.com/products');

  return (
    
    <div>
      <Banner/>
      <ProductList products = {products}/>
      
    </div>
  );
}
