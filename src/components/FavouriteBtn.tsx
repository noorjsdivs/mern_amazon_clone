import Link from 'next/link'
import React from 'react'

export default function FavouriteBtn() {
  return (
    <div className='text-white border border-transparent hover:border-white p-1 text-sm relative'>
      <Link href={'/favourite'}>
        <p>Marked</p>
        <p>& Favourite</p>
        <span className='absolute top-1 right-2  border-white border flex items-center justify-center px-1 text-xs text-amazonOrangeDark font-bold rounded-md '> 0</span>
      </Link>
    </div>
  )
}
