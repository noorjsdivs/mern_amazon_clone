"use client";

import { addTocart, decressQuantity, incressQuantity } from "@/redux/storeSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { ProductType } from "../../type";
interface Props {
  product: ProductType;
  className:string
}

interface StateType {
  shopping: {
    cart: ProductType[]; // Assuming favouriteCart is an array of products
  };
}



const AddToCartBtn = ({ product, className } :Props) => {
  const disPatch = useDispatch();

  const handleAddToCart = () => {
    if (product) {
      disPatch(addTocart(product));
      toast.success(`added your product ${product.title}`)
      
    }
  };

  const selector = useSelector((state:StateType) => state.shopping.cart)

  const [existingProduct, setExistingProduct] =useState(null)

  useEffect(() => {
    const availableProduct = selector.find((item) => item.id === product.id)
     // @ts-ignore
    setExistingProduct(availableProduct)
  },[selector, product])


  const handlePlus = () =>{
    disPatch(incressQuantity(product.id))
    toast.success(`added your product ${product.title}`)
  }
  const handleMinus = () =>{
    // @ts-ignore
   if(existingProduct.quentity > 1){
    disPatch(decressQuantity(product.id))
    toast.success(`decress your product ${product.title}`)
   }
   else{
    toast.error("product not found")
   }
  }




  return (
    <div>
     {
      existingProduct ? 
      <div className={twMerge("flex justify-between", className)}>
         <button disabled={existingProduct.quentity < 1} onClick={handleMinus} className={twMerge(`bg-transparent bg-slate-300 border border-skyColor text-black rounded-full hover:bg-blue-500  hover:text-black duration-300 p-2 disabled:bg-gray-100}`)}><FaMinus/></button>
         <strong className="px-4">{existingProduct.quentity}</strong>
        <button  onClick={handlePlus} className={twMerge("bg-transparent bg-slate-300 border border-skyColor text-black rounded-full hover:bg-blue-500  hover:text-black duration-300 p-2")}><FaPlus/></button>
       

      </div> 
      :
      <> 
      <button
      onClick={handleAddToCart}
      className={twMerge("bg-transparent bg-slate-300 border border-skyColor text-black rounded-full px-6 py-1.5 hover:bg-blue-500 w-full hover:text-black duration-300 my-2", className)}
    >
      Add To Cart
    </button></>
     }
    </div>
  );
};

export default AddToCartBtn;
