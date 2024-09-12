"use client"

import Link from "next/link";
import Container from "./Container";
import Image from "next/image"
const ProductCart = ({ product }) => {
     return (
          <div>
               <Container className="border">
                    <Link href={{ pathname:`/product/${product.id}`, query: { id: product.id } }}>
                         <div className="border-b">
                              <Image className="h-72 w-72 px-8 py-10 hover:scale-125 duration-300 cursor-pointer" src={product?.images[0]} alt="productImage" height={500} width={500} />
                         </div>
                    </Link>
                    <div className="py-4 px-4">
                         <h1 className="h-10 font-semibold">{product?.title}</h1>
                         <h1 className="">{product?.category}</h1>
                         <h1 className="">$   {product?.price}</h1>
                         <div className="mt-4">
                              <button className="bg-yellow-200 rounded-full hover:bg-amazonYellow hover:text-white duration-300 text-gray-400 py-2 w-full">Add To Cart</button>
                         </div>
                    </div>

               </Container>
          </div>
     );
};

export default ProductCart;