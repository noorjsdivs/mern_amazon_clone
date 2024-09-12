import React from 'react'
import PriceFormat from './PriceFormat'
import { twMerge } from 'tw-merge';

 interface Props{
    regularPrice:number;
    discountedPrice:number;
    className:string;
 }

const PriceTag = ({discountedPrice, regularPrice,className}:Props) => {
  return (
    <div className={twMerge("flex items-center gap-2")}>
       <div  className='line-through text-gray-500 font-medium'>
       <PriceFormat 
        amount={regularPrice}
        />
       </div>
        <div  className='font-bold text-sky-600'>
        <PriceFormat 
        amount={discountedPrice}
        />
        </div>
    </div>
  )
}

export default PriceTag