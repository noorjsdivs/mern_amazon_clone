import { paymentImage } from '@/app/assets'
import AddToCartButton from '@/components/AddToCartButton'
import Container from '@/components/Container'
import PriceFormat from '@/components/PriceFormat'
import PriceTag from '@/components/PriceTag'
import ProductImage from '@/components/ProductImage'
import { fetchData } from '@/lib'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { FaRegEye } from 'react-icons/fa'
import { MdStar } from 'react-icons/md'

export const metadata:Metadata={
         title: "Product View Page | Amazon Clone app"
         }

interface Props{
    searchParams:{
        id:string
    }
}

const SingleProductPage = async ({searchParams}:Props) => {
    const {id} = searchParams;
    const endpoint =`https://dummyjson.com/products/${id}`; 
    const product = await fetchData(endpoint);
    
  return (
    <Container>
       <div  className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
       <ProductImage product={product}/>
       <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-bold'>{product?.title}</h2>
        <div className='flex items-center justify-between gap-1'>
            <PriceTag
              regularPrice={product?.price + product?.discountPercentage / 100}
              discountedPrice={product?.price - product?.discountPercentage /100}
            />
        <div className='flex items-center gap-3'> 
            <div className='text-base flex items-center gap-1'>
                {Array.from({length: 5 }).map((_,index) =>{
                // const filled = index + 1 <= Math.floor {product?.rating}
                // const halfFilled = index + 1 > Math.floor(product?.rating) &&
                // index < Math.ceil(product?.rating);
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);

                return (
                    <MdStar key={index} 
                     className={`${
                        filled 
                        ?"text-amazonOrangeDark"
                        :halfFilled
                        ?"text-amazonYellowDark"
                        :"text-lightText"
                     }`}
                     
                    />)
                })}
            </div>
            <p className='text-base font-semibold'>
                {`(${product.rating} reviews)`}
            </p>
        </div>
        </div>
        <p className=' flex items-center  '>
            <FaRegEye className=' mr-1'/>{" "}
            <span className='font-semibold mr-1'>
                250+</span> people are viewing this right now
        </p>
        <p >
            You are saving {" "}
            <span className='text-base font-semibold text-green-500'>
                <PriceFormat amount={product?.price / 100}/>
            </span>{" "}
            upon purchase
        </p>
        <div className='mt-2 gap-2'>
            <p className='text-sm tracking-wide'>
                {product?.description}
            </p>
            <p className='text-base font-semibold'>
                {product?.warrantyInformation}
            </p>
        </div>
        <p>
            Brand: <span className='font-medium'>
                {product?.Brand}
            </span>
        </p>
        <p>
            Category: <span className='font-medium capitalize'>
                {product?.category}
            </span>
        </p>
        <p>
            Tags: {""}
             {product?.tags.map((item,index) =>(
                <span key={index} 
                    className=' font-medium capitalize'>
                    {item}
                    {index <product?.tags?.lenght - 1 && ", "}
                </span>
             ))}
             
        </p>
        <AddToCartButton product={product}/>
        <div className='bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2'>
            <Image 
              src={paymentImage}
              alt='PaymentImage'
              className='w-auto object-cover'    
            />
            <p className='font-semibold'>
                Guaranteed safe & secure checkout
            </p>
        </div>
       </div>
       </div>
    </Container>
  )
}

export default SingleProductPage
