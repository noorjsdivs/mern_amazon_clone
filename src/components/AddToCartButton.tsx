"use client" 
import { store } from "@/lib/store";
import { Product } from "@/lib/type"
import { useEffect, useState,  } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props{
    product?:Product;
    className?:string
}


const AddToCartButton = ({product, className}:Props) => {
  const [existingProduct, setExistingProduct] = useState<Product | null>(null);
  const {addToCart,cartProduct, decreaseQuantity} = store(); 

  useEffect(() =>{
    const availableItem = cartProduct?.find((item)=> item?.id === product?.id)
    setExistingProduct(availableItem || null);
  },[product, cartProduct])

  const handleAddToCart = ( )=>{
    if(product){
      addToCart(product);
      toast.success(
        `${product?.title.substring(1,12)}...added successfull`
      )
    }
  }

  const handleDecreaseQuantity =()=>{
    if(existingProduct){
      if(existingProduct?.quantity! > 1){
        decreaseQuantity(existingProduct?.id);
      toast.success(
        `${product?.title?.substring(0,10)} decreased successfully!`
      )
      }
      else{
        toast.error("You can not decrease less  than 1")
      }
    }
  }

  return (
   <>
   {existingProduct? (
    <div className="flex items-center justify-center gap-5 py-2 mt-2">
    <button 
      disabled={existingProduct?.quantity ===1}
      onClick={handleDecreaseQuantity}
      className=" bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200
     hover:border-sky-600 rounded-full text-sm  hover:text-white hover:bg-black/80
      duration-200 cursor-pointer disabled:bg-[#c9c7c7] disabled:hover:border-gray-200">
      <FaMinus/>
    </button>
    <p className="text-base font-semibold w-10 text-center">
      {existingProduct?.quantity}
    </p>
    <button
     onClick={handleAddToCart}
      className=" bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200
     hover:border-sky-600 rounded-full text-sm  hover:text-white hover:bg-black/80">
      <FaPlus/>
    </button>
   </div>
   ):(
    <button  
      onClick={handleAddToCart}
      className={twMerge("text-sm text-white hover:text-amazonBule tracking-wide font-medium mb-2 border-[1px]  border-amazonBule/50 py-2 rounded-full bg-amazonLight hover:bg-amazonYellowDark duration-200")}>
        Add to cart
    </button>
   )}
   
   
   </>
  )
}

export default AddToCartButton