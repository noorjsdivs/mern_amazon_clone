import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

const HomePage = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="-mt-60 z-50">
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
