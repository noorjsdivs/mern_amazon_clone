import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

const HomePage = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="-mt-32">
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
