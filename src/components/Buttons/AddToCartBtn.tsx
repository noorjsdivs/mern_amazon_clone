"use client";

import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/app/redux/blinkSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const AddToCartBtn = ({ product }: any) => {
  const [availableProduct, setAvailableProduct] = useState(null);
  const { cart } = useSelector((state: any) => state?.blink);
  console.log("cart", cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const existingProduct = cart?.find((item: any) => item?.id === product?.id);
    if (existingProduct) setAvailableProduct(existingProduct);
  }, [cart, product]);

  return (
    <div>
      {availableProduct ? (
        <div className="flex items-center justify-evenly gap-3 border border-orange-500 rounded-md w-52 h-10 mx-auto ">
          <button
            onClick={() => {
              if (availableProduct.quantity <= 1) {
                toast.error("Cannot deacrese less then 1");
              } else {
                dispatch(decreaseQuantity(availableProduct));
                toast.success("Quantity decrease.!");
              }
            }}
            className="cursor-pointer"
          >
            <FaMinus size={20} />
          </button>
          <span className="font-bold text-2xl">
            {availableProduct?.quantity}
          </span>
          <button
            onClick={() => {
              if (availableProduct?.quantity > 9) {
                toast.error("Cannot increase grater than 10");
              } else {
                dispatch(increaseQuantity(availableProduct));
                toast.success("Quantity incease.!");
              }
            }}
            className="cursor-pointer"
          >
            <FaPlus size={20} />
          </button>
        </div>
      ) : (
        <button
          className="border border-orange-500 hover:bg-orange-500  h-10 w-32 lg:w-full hover:text-white font-semibold capitalize rounded-md mt-10 mb-10 transition-all duration-300"
          onClick={() => {
            dispatch(addToCart(product));
            toast.success("Product added to the cart.!");
          }}
        >
          add to cart
        </button>
      )}
    </div>
  );
};

export default AddToCartBtn;
