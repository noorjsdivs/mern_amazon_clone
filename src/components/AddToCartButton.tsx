"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productType, StateType } from "../../type";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/Redux/cart/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  product: productType;
}

const AddToCartButton = ({ product }: Props) => {
  const [isExist, setIsExist] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state: StateType) => state?.cart?.cart);

  const existingProduct = cart?.find(
    (item: productType) => item?.id === product?.id
  );
  // function
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleIncrese = () => {
    dispatch(increaseQuantity(product?.id));
  };

  const handleDecrese = () => {
    dispatch(decreaseQuantity(product?.id));
  };

  useEffect(() => {
    if (existingProduct) {
      setIsExist(true);
    }
  }, [cart]);

  return (
    <>
      {isExist ? (
        <div className="flex items-center justify-evenly bg-gray-50">
          <button onClick={handleDecrese} className=" bg-gray-200 p-3 rounded-full hover:bg-yellow duration-300 flex items-center">
            <FaMinus />
          </button>
          <p className="font-semibold text-xl">{existingProduct?.quantity}</p>
          <button onClick={handleIncrese} className=" bg-gray-200 p-3 rounded-full hover:bg-yellow duration-300 flex items-center">
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="w-full py-2 rounded-full bg-gray-100 hover:bg-yellow duration-300 border border-primary/30 font-bold"
        >
          Add To Cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
