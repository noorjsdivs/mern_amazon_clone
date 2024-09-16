import React from 'react'

const EmptyCart = () => {
  return (
    <div className='w-full h-[80vh] relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-4xl text-gray-400 font-bold'>Empty cart</h1>
        </div>
    </div>
  )
}

export default EmptyCart