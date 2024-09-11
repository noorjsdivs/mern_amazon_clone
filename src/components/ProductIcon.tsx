import { Product } from '@/lib/type'
import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

const ProductIcon = ({product}:{product:Product}) => {
  return (
    <div className='absolute top-2 right-2 flex items-center gap-2'>
        <p className='bg-transparent text-amazonBule border border-amazonBule
         group-hover:bg-amazonBule group-hover:text-white duration-200 text-xs 
          rounded-full py-1 px-2'>
            {product?.discountPercentage}%
        </p>
        <span className='text-xl z-40 '>
            <MdFavoriteBorder className='hover:bg-amazonBule'/>
        </span>
    </div>
  )
}

export default ProductIcon