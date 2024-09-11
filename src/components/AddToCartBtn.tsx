'use client'
import React from 'react'
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import { Product } from '../../type';
interface Props {
    product:Product[];
    className:string;
}

export default function AddToCartBtn({product,className}:Props) {
  return (
    <button onClick={()=> toast.success('Product added successfully')} className={twMerge(' border border-gray-400 w-full rounded-full bg-gray-300 hover:bg-amazonYellow duration-300 cursor-pointer h-10 flex items-center justify-center font-medium',className)}>
      Add to cart
    </button>
  )
}
