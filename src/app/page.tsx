import CarouselBanner from "@/components/CarouselBanner/CarouselBanner";
import { getFetchData } from "@/components/helper";

import ProductList from "@/components/productlist/ProductList";


const HomePage = async () => {
  const endPoint = "https://dummyjson.com/products";
  const data = await getFetchData(endPoint);

  const products = data.products;
  // console.log("products", products)

  return (
    <main>
      <div className="overflow-hidden">
        <CarouselBanner />

        <div className="lg:-mt-44 mb-10">
          <ProductList products={products} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
