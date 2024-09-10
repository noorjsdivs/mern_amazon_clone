import Image from 'next/image';
import Link from 'next/link';
import { MdFavoriteBorder } from 'react-icons/md';
import AddToCartButton from './AddToCartButton';
import PriceFormat from './PriceFormate';

const ProductCart = ({ product }) => {
      return (
            <div className="border-2 border-amazonYellow relative bg-white lg:h-[475px] ">
                  <Link href={{ pathname: `/product/${product?.id}`, query: { id: product?.id } }}>
                        <div className=" border-b-2 border-amazonYellow px-8 py-4">
                              <div className="flex items-center justify-center ">
                                    <Image className="h-60 hover:scale-110 duration-300 w-52" src={product.images[0]} height={500} width={500} alt="productImage" />
                              </div>
                        </div>
                        <MdFavoriteBorder size={25} className='absolute top-3 left-3 text-amazonYellow cursor-pointer' />
                        <span className='absolute top-3 right-3 bg-amazonYellow/85 font-medium py-0.5 px-1.5 text-xs text-green-500'>$12 Saving</span>
                  </Link>
                  <div className="px-4 py-2">
                        <h1 className="text-[20px] mt-1 font-semibold h-10 mb-2">{product.title}</h1>
                        <p className="mt-4 mb-2">Category : {product?.category}</p>
                        <PriceFormat className="mt-2 text-[18px] text-green-500" amount={product.price} />
                        <AddToCartButton product={product} />
                  </div>
            </div>
      );
};

export default ProductCart;