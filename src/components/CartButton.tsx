import { cartIcon } from '@/app/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartButton = () => {
  return (
    <Link href={"/cart"}
    className='text-xs text-gray-100 headerItem relative'>
        <Image src={cartIcon} alt='cartIcon'
            className=' w-full h-8 object-cover'/>
            <p className='text-xs text-white font-bold mt-3'>
                Cart
            </p>
            <span className='absolute text-amazonOrange text-sm top-2 left-[29px] font-semibold'>0</span>
    </Link>
  )
}

export default CartButton