import { PiShoppingCartSimple } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
interface Props {
      product: any;
      className?: string;
      title?: string;
      showPrice?: boolean;
}

const AddToCartButton = ({ className, product }: Props) => {
      return (
            <div>
                  <button className={twMerge("bg-slate-300 text-gray-600 w-full py-2 rounded-full mb-3 mt-4 hover:bg-yellow-500 hover:text-white duration-300 cursor-pointer flex items-center justify-center gap-4", className)}><PiShoppingCartSimple size={20} />
                        Add To Cart</button>
            </div>
      );
};

export default AddToCartButton;