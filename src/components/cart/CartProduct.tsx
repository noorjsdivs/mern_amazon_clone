import Image from "next/image"
import PriceFormate from "../PriceFormate"
import AddToCartBtn from "../AddToCartBtn"
import { FaCheck } from "react-icons/fa"


const CartProduct = ({product}) => {
  return (
    <div className="border shadow-lg space-y-2 shadow-slate-300 px-2 py-8 flex gap-8">
        <div className="border hover:border-red-400 w-40 duration-500 rounded-md">
            <Image className="w-32 mx-auto p-2 hover:scale-110 duration-300" src={product.images[0]} alt="images" height={200} width={200}/>
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
  )
}

export default CartProduct