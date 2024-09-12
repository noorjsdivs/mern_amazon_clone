"use client";
import { useDispatch, useSelector } from "react-redux";
import { productType, StateType } from "../../type";
import { useEffect, useState } from "react";
import { addtocart, decrease, increase } from "@/app/redux/amazoneSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface PropsType {
  product?: productType;
}
const AddToCart = ({ product }: PropsType) => {
  const { cart } = useSelector((state: StateType) => state.amazone);
  const [existingProduct, setExistingProduct] = useState<productType | null>(
    null
  );
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);

  const dispatch = useDispatch();
  const handleClick = () => {
    if (product) {
      dispatch(addtocart(product));
    }
  };
  return (
    <div>
      {existingProduct ? (
        <div className="flex items-center gap-7 justify-center">
          <button
            onClick={() => {
              dispatch(decrease(product?.id));
            }}
            disabled={existingProduct?.quantity === 1}
            className="h-10 w-10 bg-amazon_blue text-white 
          rounded-full flex items-center justify-center border border-green-500"
          >
            <FaMinus />
          </button>
          <span className="text-xl">{existingProduct?.quantity}</span>
          <button
            onClick={() => {
              dispatch(increase(product?.id));
            }}
            className="h-10 w-10 bg-amazon_blue text-white 
             rounded-full flex items-center justify-center border border-green-500"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleClick}
          className="w-full py-2 bg-gray-200 text-amazon_dark text-sm font-semibold rounded-full border
        border-amazone_light hover:bg-amazon_yellow  duration-200"
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;
