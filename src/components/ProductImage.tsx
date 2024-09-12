'use client'
import { Product } from "@/lib/type"
import Image from "next/image";
import { useState } from "react";


interface Props{
    product:Product;
}

const ProductImage = ({product}:Props) => {
    const [imgUrl ,setIamgUrl] = useState(product?.images[0])
  return (
    <div>
        <div  className="flex flex-col float-start gap-2 "> 
            {product?.images?.map((item, index)=>(
                <Image
                onClick={() =>setIamgUrl(item)}
                src={item}
                alt="productImage"
                key={index}
                width={200}
                height={200}
                className={` w-24 h-24 object-contain cursor-pointer opacity-100
                hover:opacity-85 duration-200 border border-gray-200 mb-1 p-1
                 ${imgUrl === item && "border-gray-500 rounded-sm opacity-100"}`}
                />
            ))}
        </div>
        <div className="bg-gray-100 rounded-md ml-40 max-h-[550px]  ">
        <Image 
            src={imgUrl} 
            alt="mainImage" 
            width={400} 
            height={400}
           className=" h-full w-full object-contain"
            />
        </div>
    </div>
  )
}

export default ProductImage