'use client'
import { cartImage } from "@/assets/images/Image";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";

const CartMenu = () => {
    const cart = useSelector((state: StateType) => state?.cart?.cart);
  return (
    <>
      <Image
        src={cartImage}
        alt="Amazone clone shope"
        className="w-12 h-8"
      ></Image>
      <p>cart</p>
      <p className="absolute top-1 left-1/3 text-darkYellow">{cart?.length}</p>
    </>
  );
};

export default CartMenu;
