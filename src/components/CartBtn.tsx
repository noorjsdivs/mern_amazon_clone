import { cartIcon } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CartBtn() {
  return (
    <div className='relative border border-transparent hover:border-white p-1'>
      <Link href={'/cart'} className='flex items-center text-white'>
           <Image src={cartIcon} alt='cart icon' className='w-auto h-8' /> 
           <p className='text-md font-bold'>Cart</p>
           <span className='absolute -top-1 right-11  flex items-center justify-center px-1 text-lg text-amazonOrangeDark font-bold rounded-md '> 0</span>
      </Link>
    </div>
  )
}
