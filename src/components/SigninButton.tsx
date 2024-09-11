import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

export default function SigninButton() {
  return (
    <form action='' className='border border-transparent hover:border-white duration-200 p-1'>
      <p className='text-white text-sm'>Hello, Signin</p>
      <button className='flex items-center capitalize font-bold text-white'>accounts & lists <span>
      <TiArrowSortedDown />
        </span></button>
    </form>
  )
}
