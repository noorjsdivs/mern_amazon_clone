import { Product } from "@/lib/type"
import { twMerge } from "tw-merge";

interface Props{
    product?:Product;
    className?:string
}


const AddToCartButton = ({product, className}:Props) => {
  return (
    <button className={twMerge("text-sm text-white hover:text-amazonBule tracking-wide font-medium mb-2 border-[1px]  border-amazonBule/50 py-2 rounded-full bg-amazonLight hover:bg-amazonYellowDark duration-200")}>
        Add to cart
    </button>
  )
}

export default AddToCartButton