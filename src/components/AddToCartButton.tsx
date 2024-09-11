'use client'
import React from 'react'
import toast from 'react-hot-toast'

const AddToCartButton = () => {
  return (
    <button onClick={() => {toast('hello!')}} className='w-full py-2 rounded-full bg-gray-100 hover:bg-yellow duration-300 border border-primary/30 font-bold'>Add To Cart</button>
  )
}

export default AddToCartButton