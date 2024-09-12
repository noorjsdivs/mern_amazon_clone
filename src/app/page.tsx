
import CarouselBanner from "@/components/CarouselBanner";
import { getFetchData } from "@/components/Hooks/index";
import ProductList from "@/components/ProductList";

const HomePage = async () => {
  const endPoint = "https://dummyjson.com/products";
  const products = await getFetchData(endPoint);

  return (
    <main>
      <div>
        <CarouselBanner/>
        <div className="">
          <ProductList products={products} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;