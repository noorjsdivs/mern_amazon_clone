import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

const Homepage = () => {
  return (
    <div className="relative">
      <Banner />
      <div className="-mt-24 md:-mt-40 lg:-mt-60 z-50">
        <ProductList />
      </div>
    </div>
  );
};

export default Homepage;
