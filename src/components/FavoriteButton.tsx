import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <Link href={"/favorite"}
      className='text-xs text-gray-100 hidden lg:inline-flex flex-col 
      justify-center items-start headerItem relative'>
      <p>Marked</p>
      <p className='text-white font-bold '>& Favorite4</p>
      <span className=' absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400
       flex items-center justify-center text-xs text-amazonOrangeDark font-medium rounded-sm'>
        0
      </span>
    </Link>
  )
}

export default FavoriteButton