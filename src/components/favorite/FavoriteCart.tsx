import React from "react";
import { productType } from "../../../type";
import dynamic from "next/dynamic";
import Spinner from "../animation/Spinner";
import PriceFormate from "../PriceFormate";
import Link from "next/link";
import AddToCartButton from "../AddToCartButton";
import { FaCross } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeToFavorite } from "@/Redux/favorite/favoriteSlice";
const LoadImage = dynamic(() => import("../ImageSuspanse"), {
  loading: () => <Spinner />,
});
interface Props {
  product: productType;
}

const FavoriteCart = ({ product }: Props) => {
    const dispatch = useDispatch();
    const removeFavoriteItem = (id: number) => {
        dispatch(removeToFavorite(id));
    }

  return (
    <div className="flex items-center justify-between flex-wrap p-3 bg-gray-100 relative">
        {/* image */}
      <div className="w-1/4 md:w-1/6 p-2">
        <LoadImage image={product?.images[0]} alt={product?.title} />
      </div>
      {/* text/title/description */}
      <div className="w-3/4 md:w-3/6 p-2">
        <Link
          href={`/products/${product?.id}`}
          className="text-xl font-bold hover:text-darkYellow duration-300"
        >
          {product?.title}
        </Link>
        <p className="line-clamp-3">{product?.description}</p>
        <div className="flex items-center gap-2 font-bold">
          price: <PriceFormate price={product?.price} />
        </div>
      </div>
      {/* add to cart */}
      <div className="w-1/4 md:w-1/6 p-2 flex-1">
        <AddToCartButton product={product} />
      </div>
      <div className="hidden md:block md:w-1/6"></div>
      <button onClick={()=> removeFavoriteItem(product?.id)} className="absolute top-2 right-2 text-2xl hover:text-darkYellow duration-300"><MdClose/></button>
    </div>
  );
};

export default FavoriteCart;
