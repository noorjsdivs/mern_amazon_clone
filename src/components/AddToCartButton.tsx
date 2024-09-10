"use client"
import { addToCart, decrease, increase } from "@/redux/amazonSlice";
import { ProductType } from "@/type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineMinus } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
interface Props {
      product: any;
      className?: string;
      title?: string;
      showPrice?: boolean;
}

const AddToCartButton = ({ className, product }: Props) => {
      const dispatch = useDispatch()

      const handleAddToCart = () => {
            dispatch(addToCart(product))
      }
      const [existingProduct, setExistingProduct] = useState(null)
      //@ts-ignore
      const { cart } = useSelector((state) => state.amazon)

      useEffect(() => {
            const avilableProduct = cart.find((item: ProductType) => item.id === product.id)
            setExistingProduct(avilableProduct)
      }, [product, cart])

      const handlePlus = () => {
            dispatch(increase(product?.id))
            toast.success("Quantity increased successfully!")
      }
      const handleMinus = () => {
            if (existingProduct?.quantity! > 1) {
                  dispatch(decrease(product?.id))
                  toast.success("Quantity decrease successfully!")
            }
      }

      return (
            <div>

                  {
                        existingProduct ?
                              <div className={twMerge("flex items-center justify-between mt-4", className)}>
                                    <button
                                          disabled={existingProduct?.quantity <= 1}
                                          onClick={handleMinus}
                                          className={`py-2 px-2 cursor-pointer duration-300 rounded-full ${existingProduct?.quantity <= 1
                                                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                                : "hover:text-white hover:bg-amazonYellow text-gray-700 bg-gray-300"
                                                }`}
                                    >
                                          <AiOutlineMinus size={15} />
                                    </button>
                                    <button>{existingProduct?.quantity}</button>
                                    <button
                                          onClick={handlePlus}
                                          className="py-2 px-2 cursor-pointer hover:text-white hover:bg-amazonYellow duration-300 text-gray-700 bg-gray-300 rounded-full"
                                    >
                                          <FiPlus size={15} />
                                    </button>
                              </div>

                              :
                              <button onClick={handleAddToCart} className="bg-slate-300 text-gray-600 w-full py-2 rounded-full mb-2 mt-4 hover:bg-yellow-500 hover:text-white duration-300 cursor-pointer flex items-center justify-center gap-4"><PiShoppingCartSimple size={20} />
                                    Add To Cart
                              </button>
                  }
            </div>
      );
};

export default AddToCartButton;