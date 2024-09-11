import React from 'react'
import {Product} from "@/lib/type"
import Image from 'next/image'
import PriceFormat from './PriceFormat'
import AddToCartButton from './AddToCartButton'

import ProductIcon from './ProductIcon';

const ProductCard = ({product}:{product:Product}) => {
  return (
    <div className='border border-gray-200 rounded-md bg-white overflow-hidden'>
        <div className='relative group overflow-hidden h-72'>
            <Image src={product?.images[0]} 
            alt='product-images' 
            width={600} 
            height={600}
            loading='lazy'
            className=' w-full h-full object-contain bg-[#f8f8f8] group-hover:scale-110 duration-200'
            />
            <ProductIcon product ={product}/>
        </div>
        <div className='py-2 px-4 flex flex-col gap-2 justify-between'>
            <div className='flex flex-col gap-1 h-36'>
                <h2 className=' line-clamp-1 font-semibold'>
                    {product?.title}
                </h2>
                <p className='text-sm text-amazonBule/90 line-clamp-3 '>
                    {product?.description}
                </p>
                <PriceFormat amount={product?.price}/>
                <p className='text-sm'>
                    Category: <span className='font-semibold'>{product?.category}</span>
                </p>
            </div>
            <AddToCartButton product={product}/>
        </div>
    </div>
  )
}

export default ProductCard