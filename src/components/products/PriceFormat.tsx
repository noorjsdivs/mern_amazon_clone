import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props{
    amount?:number;
    className:string;
}
export default function PriceFormat({amount,className}:Props) {
    const formattedAmount = new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'USD',
        minimumFractionDigits:2
    })
    const newClassName = twMerge('font-semibold',className)
  return (
    <div className='newClassName'>
     {formattedAmount}
    </div>
  )
}
