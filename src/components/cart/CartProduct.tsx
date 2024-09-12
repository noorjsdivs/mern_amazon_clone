"use client"
import { useSelector, useDispatch } from 'react-redux'
import Container from '../Container';
import Image from 'next/image';
import AddToCartButton from '../AddToCartButton';
import PriceFormat from '../PriceFormate';
import { cartDelete } from '@/redux/amazonSlice';
import toast from 'react-hot-toast/headless';
import Link from 'next/link';

const CartProduct = ({ product }) => {
     const dispatch = useDispatch()

     const handleDelete = () => {
          dispatch(cartDelete(product?.id))
          toast.success(`${product?.title.substring(0, 10)} delete successfully!`)
     }

     return (
          <div>
               <Container className=''>
                    <div className='flex flex-col lg:flex-row gap-6 border-b-2 border-gray-300 relative'>
                         <Link href={{ pathname: `/product/${product?.id}`, query: { id: product?.id } }}>
                              <Image className='flex items-center justify-center h-52 w-48 border-r-2 border-gray-300' src={product.images[0]} alt='ProductImage' height={200} width={200} />
                         </Link>
                         <div>
                              <h1 className='text-xl'>{product?.title}</h1>
                              <h1 className='mt-2'>Brand : {product?.brand}</h1>
                              <h1 className='mt-2'>Category : {product?.category}</h1>
                              <div>

                                   <span>{product.availabilityStatus && <p className='text-green-500'>In Stock</p>}</span>
                              </div>
                              <div className='flex items-center gap-4'>
                                   <h1 className='mt-4'><PriceFormat amount={product?.price} /></h1>
                                   <AddToCartButton className='gap-4' product={product} />
                              </div>
                         </div>
                         <button onClick={handleDelete} className='bg-gray-300 text-white hover:text-red-500 duration-300 cursor-pointer absolute px-2 top-4 right-4 font-semibold'>Delete</button>
                    </div>
               </Container>
          </div>
     );
};

export default CartProduct;