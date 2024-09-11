"use client";

import { addToCart, addToFavorite } from "@/app/redux/blinkSlice";
import toast from "react-hot-toast";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";

const Slides = ({ product }: any) => {
  const dispatch = useDispatch();
  
  return (
    <div className="absolute bottom-0 right-5 overflow-hidden translate-x-96 group-hover:translate-x-0 transition-all duration-300">
      <div className="flex items-center gap-5 text-sm md:text-lg">
        <span>
          <MdOutlineFavoriteBorder
            onClick={() => {
              dispatch(addToFavorite(product));
              toast.success("Product added to the favorite.!");
            }}
            className="text-2xl text-orange-500/80 hover:text-orange-500 font-bold cursor-pointer"
          />
        </span>
        <span>
          <MdOutlineShoppingCart
            onClick={() => {
              dispatch(addToCart(product));
              toast.success("Product added to the cart.!");
            }}
            className="text-2xl text-orange-500/80 hover:text-orange-500 font-bold cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
};

export default Slides;
