"use client";
import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"; // Imported MdFavorite for filled heart icon
import PriceFormate from "./PriceFormate";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {  favouriteQuantity } from "@/redux/storeSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  // optional add favourite
  const dispatch = useDispatch();
  const [existing, setExisting] = useState(null);
  const favourite = useSelector((state) => state.shopping.favouriteCart);
  const addFavourite = (e) => {
    e.preventDefault();
    if (product) {
      dispatch(favouriteQuantity(product));
      toast.success(`${product.title} favourite success`)
    }
  };




  useEffect(() => {
    const available = favourite.find((item) => item.id === product.id);
    setExisting(available); // Set existing if the product is in the favorite list
  }, [favourite, product]);




  return (
    <div className="relative h-96 flex w-full max-w-xs flex-col overflow-hidden rounded-lg bg-white hover:shadow-lg hover:shadow-slate-400 duration-300 border border-gray-300">
      <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
        <Link
          href={{
            pathname: `/product/${product.id}`,
            query: { id: product.id },
          }}
        >
          <Image
            className="object-contain w-64 h-28 hover:scale-110 duration-300 mx-auto mt-10"
            src={product.images[0]}
            height={300}
            width={300}
            alt="product"
          />
        </Link>

        <div className="items-center">
          <span className="absolute top-0 right-0 border border-gray-400 m-2 rounded-full hover:text-white hover:bg-black px-2 py-0.5 text-center text-sm font-medium text-black duration-300">
            39% OFF
          </span>
          <span
            onClick={addFavourite}
            className="absolute top-0 left-0 text-red-400 m-2 rounded-full px-1 text-center text-sm font-medium cursor-pointer"
          >
            {existing ? (
              <MdFavorite className="text-red-500" size={30} /> // Show filled heart if in favorite list
            ) : (
              <MdFavoriteBorder className="text-red-400" size={30} /> // Show outlined heart if not in favorite list
            )}
          </span>
        </div>
      </div>
      <div className="mt-4 px-5 pb-5">
        <div>
          <h5 className="text-xl tracking-tight text-black">
            {product.title.slice(0, 10)}
          </h5>
          <span className="text-sm">{product.description.slice(0, 40)}</span>
        </div>
        <div className="mt-2 mb-2 items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
              <PriceFormate amount={product.price} />
            </span>
          </p>
          <p>Category: {product.category}</p>
        </div>
        <AddToCartBtn className={""} product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
