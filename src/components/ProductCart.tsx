import Image from 'next/image';
import Link from 'next/link';
import { MdFavoriteBorder } from 'react-icons/md';
import { PiShoppingCartSimple } from 'react-icons/pi';
import AddToCartButton from './AddToCartButton';

const ProductCart = ({ product }) => {
      return (
            <div className="border border-amazonYellow relative bg-white">
                  <Link href={{ pathname: `/product/${product?.id}`, query: { id: product?.id } }}>
                        <div className=" border-b border-amazonYellow px-8 py-4">
                              <div className="flex items-center justify-center ">
                                    <Image className="h-60 hover:scale-110 duration-300 w-52" src={product.images[0]} height={500} width={500} alt="productImage" />
                              </div>
                        </div>
                        <MdFavoriteBorder size={25} className='absolute top-3 left-3 text-amazonYellow cursor-pointer' />
                        <span className='absolute top-3 right-3 bg-amazonYellow/85 font-medium py-0.5 px-1.5 text-[14px] text-gray-400'>12% off</span>
                  </Link>
                  <div className="px-4 py-2">
                        <h1 className="text-[20px] mt-1 font-semibold h-10 ">{product.title}</h1>
                        {/* <p className="text-[16px] text-gray-700 mt-2">{product.description}</p> */}
                        <p className="mt-4">Category : {product?.category}</p>
                        <p className="mt-2 text-[18px] text-green-500">${product.price}</p>
                        <AddToCartButton product={product} />
                  </div>
            </div>
      );
};

export default ProductCart;