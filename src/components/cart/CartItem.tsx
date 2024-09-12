import Image from "next/image";
import React from "react";
import { productType } from "../../../type";
import PriceFormate from "./PriceFormate";
import Link from "next/link";
import { decreaseQuantity, deleteCartItem, increaseQuantity } from "@/Redux/cart/cartSlice";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface Props {
  item: productType;
}

const CartItem = ({ item }: Props) => {
    const dispatch = useDispatch();

    const handleIncrease = (id: number) => {
        dispatch(increaseQuantity(id));
    }
    const handleDecrease = (id: number) => {
        dispatch(decreaseQuantity(id));
    }
    const handleDelete = (id: number) => {
        dispatch(deleteCartItem(id));
    }

  return (
    <div className="p-2 lg:p-4 flex gap-1 justify-between items-center bg-white rounded">
      <Link href={{ pathname: `products/${item?.id}` }}>
        <Image
          src={item?.images[0]}
          alt={item?.title}
          height={200}
          width={200}
          className="w-32 h-32 object-contain"
        />
      </Link>
      <div className="w-2/5">
        <h1 className="text-xl font-bold ">{item?.title}</h1>
        <p className="text-base mt-1 text-gray-500">
          {item?.description.slice(0, 70)}...
        </p>
        <div className=" mt-2 rounded-lg font-semibold text-green-600">In Stock : {item?.stock}</div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleDecrease(item?.id)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 duration-300 text-xl"
        >
          -
        </button>
        <p className="px-2 w-8">{item?.quantity}</p>
        <button
          onClick={() => handleIncrease(item?.id)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 duration-300 text-xl"
        >
          +
        </button>
      </div>
      <PriceFormate price={item?.price} />
      <div>
        <button onClick={()=> handleDelete(item?.id)}><RiDeleteBinLine size={24} className="hover:text-darkYellow duration-300"/></button>
      </div>
    </div>
  );
};

export default CartItem;
