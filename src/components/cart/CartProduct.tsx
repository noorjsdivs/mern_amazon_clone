import Image from "next/image";
import { ProductType } from "../../../type";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import PriceFormated from "../PriceFormated";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteItems } from "@/app/redux/amazonSlice";
import { FaCheck } from "react-icons/fa6";

interface Props {
  product: ProductType;
}

const CartProduct = ({ product }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="flex py-6 sm:py-10">
      <Link
        href={{
          pathname: `/products/${product?.id}`,
          query: { id: product?.id },
        }}
        className="w-20 h-20 sm:h-32 sm:w-32 flex items-center justify-center border
         border-amazone_light hover:border-blue-700 overflow-hidden rounded-md"
      >
        <Image
          src={product?.images[0]}
          alt="products_image"
          width={200}
          height={200}
          className="w-full h-full object-contain bg-gray-100 hover:scale-110 duration-200"
        />
      </Link>
      {/* details */}
      <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className=" pr-9 lg:pr-0 relative">
          <div className="flex flex-col col-span-3 gap-1">
            <p className="text-sm md:text-base font-semibold">
              {product?.title}
            </p>
            <p className="text-base font-normal">
              Brand: <span>{product?.brand}</span>
            </p>
            <p className="text-base font-normal">
              Category: <span>{product?.category}</span>
            </p>
            <div className="flex items-center gap-5">
              <PriceFormated
                amount={product?.quantity * product?.price}
                className="text-xl font-semibold text-blue-500"
              />
              <AddToCartButton product={product} />
            </div>
          </div>
          <div className="absolute right-0 top-0 text-xl hover:text-red-500 duration-200">
            <button onClick={() => dispatch(deleteItems(product?.id))}>
              <IoCloseOutline />
            </button>
          </div>
          <div>
            {product?.availabilityStatus && (
              <p className="flex items-center gap-1 font-semibold text-sm">
                <FaCheck className="text-green-500 text-xl" /> In Stock
              </p>
            )}
            <p className="flex flex-col md:flex-row gap-x-1 font-semibold text-sm ">
              you are saving{" "}
              <PriceFormated
                amount={
                  product?.price *
                  (product?.discountPercentage / 100) *
                  product?.quantity
                }
                className="text-green-500 font-semibold"
              />
              upon purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
