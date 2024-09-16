"use client";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const CartList = () => {
  const cart = useSelector((state: StateType) => state?.cart?.cart);
  return (
    <>
      {cart!.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 ">
          <div className="lg:col-span-9 flex flex-col gap-2 rounded-md justify-center md:p-5">
            {cart?.map((item) => (
              <CartItem key={item.title} item={item} />
            ))}
          </div>
          <div className="lg:col-span-3 p-5">
            <Checkout cart= {cart!}/>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartList;