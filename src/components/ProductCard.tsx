import Image from "next/image"

import { MdFavoriteBorder } from "react-icons/md";
import PriceFormate from "./PriceFormate";
import AddToCartBtn from "./AddToCartBtn";

const ProductCard = ({product}) => {
    // console.log("product", product)
  return (
    <div className="relative  h-96  flex w-full max-w-xs flex-col overflow-hidden rounded-lg  bg-white hover:shadow-lg hover:shadow-slate-400 duration-300 border border-gray-300">
    <div className="relative mx-3 mt-3 flex  overflow-hidden rounded-xl">
      <Image
        className="object-contain w-52 h-50 mx-auto mt-10"
        src={product.images[0]}
        height={300}
        width={300}
        alt="product"
      />
     <div className="items-center">
     <span className="absolute top-0 right-0 border border-gray-400  m-2 rounded-full hover:text-white hover:bg-black px-2 py-0.5 text-center text-sm font-medium text-black duration-300">
        39% OFF
      </span>
     <span className="absolute top-0 left-0 text-red-400  m-2 rounded-full px-1 text-center text-sm font-medium ">
     <MdFavoriteBorder size={30} />
      </span>
      
     </div>
    </div>
    <div className="mt-4 px-5 pb-5">
      <div>
        <h5 className="text-xl  tracking-tight text-black">{product.title.slice(0,10)}</h5>
        <span className="text-sm">{product.description.slice(0,40)}</span>
      </div>
      <div className="mt-2 mb-2  items-center justify-between">
        <p>
          <span className="text-xl font-bold text-slate-900"><PriceFormate amount={product.price}/></span>
        
        </p>
        <p>Category: {product.category}</p>
        {/* <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="h-5 w-5 text-yellow-300" />
          ))}
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
        </div> */}
      </div>
     <AddToCartBtn product={product}/>
    </div>
  </div>
  )
}

export default ProductCard