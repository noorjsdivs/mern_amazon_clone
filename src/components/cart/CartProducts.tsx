"use client"
import { useSelector } from 'react-redux'
import CartProduct from "./CartProduct";
import Link from "next/link";
import Container from '../Container';
import CartSummary from './CartSummary';

const CartProducts = () => {
     const { cart } = useSelector((state) => state.amazon)

     return (
          <div className='py-20'>
               <Container className='' >
                    {
                         cart?.length ?
                              <div className='flex flex-col lg:flex-row justify-between gap-8 mt-10'>
                                   <div className='w-full lg:w-2/3 border-t-2 border-l-2 border-r-2 border-gray-300'>
                                        {
                                             cart?.map((item) => <CartProduct key={item.id} product={item} />)
                                        }
                                   </div>
                                   <div className='lg:w-2/6 w-full'>
                                        <CartSummary />
                                   </div>
                              </div>
                              :
                              <div className="shadow-lg shadow-gray-400 items-center justify-center text-center py-10 px-2 max-w-screen-sm mx-auto">
                                   <h1 className="text-4xl font-medium mb-4 px-4">Nothing To Shop</h1>
                                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis deserunt quaerat delectus! <br /> Ab, quo odio maxime nulla repellat, sed quos voluptatum qui amet <br /> laborum maiores officia tenetur? Eius, quo dignissimos?</p>
                                   <Link href={"/"}>
                                        <button className='bg-amazonYellow mt-4 text-white py-2 px-4'>Go To Shopping</button>
                                   </Link>
                              </div>
                    }
               </Container>
          </div>
     );
};

export default CartProducts;