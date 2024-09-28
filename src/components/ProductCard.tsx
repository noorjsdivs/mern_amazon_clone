import Image from "next/image";
import { ProductType } from "../../type";
import Rating from "./Rating";
import { IoIosHeartEmpty, IoMdCheckboxOutline } from "react-icons/io";
import Link from "next/link";
import PriceFormated from "./PriceFormated";
import AddToCartButton from "./AddToCartButton";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col scale-100 bg-gray-100 rounded-md group overflow-hidden border border-gray-300">
      <div className="px-4 py-2">
        <Link
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          }}
          className=" relative"
        >
          <Image
            src={product?.images[0]}
            alt="productsImg"
            width={500}
            height={500}
            className="h-60 w-full object-contain hover:scale-110 duration-200"
          />
          <div className="absolute -top-1 -right-3 flex items-center gap-x-3">
            <span className=" bg-red-500 text-white px-4 py-1 text-xs rounded-full hover:bg-amazon_dark hover:text-white cursor-pointer duration-300 border border-amazon_dark">
              {product?.discountPercentage}% off
            </span>
            <span className="text-2xl text-amazon_dark">
              <IoIosHeartEmpty />
            </span>
          </div>
        </Link>
        {/* description */}
        <div className="py-3 flex flex-col gap-y-1">
          <p className=" text-green-600 text-sm font-semibold flex items-center gap-1">
            <IoMdCheckboxOutline className="text-lg" />
            In Stock {product?.stock}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-semibold tracking-tight text-gray-500">
              {product?.category}
            </p>
            <Rating rating={product?.rating} />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">
              {product?.title.slice(0, 10)}..
            </p>
          </div>
          <div>
            <PriceFormated
              amount={product?.price}
              className="text-xl font-semibold text-blue-500"
            />
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
