// "use client"
import Image from "next/image"
import PriceFormate from "../PriceFormate"
import AddToCartBtn from "../AddToCartBtn"
import { FaCheck } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { twMerge } from "tailwind-merge"
import { useDispatch } from "react-redux"
import { deleteBtn } from "@/redux/storeSlice"
import toast from "react-hot-toast"


const CartProduct = ({product}) => {
    const dispatch = useDispatch()

  return (
    <div className="border mb-7 shadow-lg space-y-2 shadow-slate-300 px-2 py-8 flex justify-between items-center">
        <div className="flex gap-8">
        <div className="border hover:border-red-400 w-40 h-44 duration-500 rounded-md">
            <Image className="w-32 h-36 mx-auto p-2 hover:scale-110 duration-300" src={product.images[0]} alt="images" height={200} width={200}/>
        </div>
        
        <div className="space-y-2">
            <h1>{product.title.slice(0,20)}</h1>
            <h1>brand: {product.brand}</h1>
            <p>Category : {product.category}</p>
            <div className="flex gap-5">
                <PriceFormate amount={product.price * product.quentity}/>
              <div className="gap-4">
              <AddToCartBtn className={"justify-between"} product={product}/>
              </div>
            </div>
            <div>
                {
                    product.availabilityStatus &&  <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                    <FaCheck className="text-lg text-green-500" />{" "}
                    <span>In Stock</span>
                  </p>
                }
                <p><PriceFormate amount={product.price * (product.discountPercentage / 100) * product.quentity}/>   upon purchase</p>
              </div>
        </div>
        
        </div>
        <div onClick={() => dispatch(deleteBtn(product.id), toast.success("deleted success"))} className={twMerge(`bg-transparent bg-slate-300 border mr-7 border-skyColor text-black rounded-full hover:bg-blue-500  hover:text-black duration-300 p-2 mx-5}`)}>
            <span><IoClose/></span>
        </div>
        
    </div>
  )
}

export default CartProduct