import Image from "next/image";
import { productType } from "../../type";
import Container from "./Container";
import { FaStar } from "react-icons/fa";
import AddToCart from "./button/AddToCart";

export interface Props {
  product: productType;
}

const SideBar = () => {
  return (
    <div className=" absolute right-0 bottom-12 w-full bg-gray-300 translate-y-20 overflow-hidden hover:translate-y-0">
      <div>
        <p>Compaire</p>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: Props) => {
  return (
    <Container className=" border border-lightText hover:shadow-lg hover:shadow-black/20 duration-200  overflow-hidden">
      <div className="relative">
        <div className="">
          <Image
            src={product?.image}
            alt="product_image"
            width={500}
            height={500}
            className="w-full h-48 object-contain cursor-pointer duration-200 "
          />
          <p className=" absolute top-0 right-1 text-gray-500 text-sm font-normal tracking-wide italic">
            {product?.category}
          </p>
          <SideBar />
        </div>
        {/* description */}
        <div className="px-2 py-4 flex flex-col gap-y-2">
          <div className="flex items-center justify-between gap-5 ">
            <h2 className="text-sm font-semibold text-amazone_light">
              {product?.title.slice(0, 15)}...
            </h2>
            <p className="text-sm text-amazone_light font-semibold">
              ${product?.price}
            </p>
          </div>
          <p>{product?.description.slice(0, 40)}...</p>
          <div className="flex items-center text-amazon_yellow">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <AddToCart>Add To Card</AddToCart>
        </div>
      </div>
    </Container>
  );
};

export default ProductCard;
