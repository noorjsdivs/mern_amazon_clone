"use client";
import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";
import { ProductType, StateType } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  decreaseItems,
  increaseItems,
} from "@/app/redux/amazonSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  product: ProductType;
}

const AddToCartButton = ({ product }: Props) => {
  const { cart } = useSelector((state: StateType) => state?.amazon);
  const [existingProduct, setexistingProduct] = useState<ProductType | null>(
    null
  );

  useEffect(() => {
    const availableProducts = cart?.find((item) => item?.id === product?.id);
    if (availableProducts) {
      setexistingProduct(availableProducts);
    }
  }, [cart, product]);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (product) {
      dispatch(addtocart(product));
    }
  };

  const handleMinus = () => {
    if (existingProduct?.quantity === 1) {
      toast.error("product not less then 1");
    } else {
      dispatch(decreaseItems(product?.id));
    }
  };

  const handlePlus = () => {
    if (existingProduct && product) {
      if (existingProduct.quantity < product?.stock) {
        dispatch(increaseItems(product?.id));
      } else {
        toast.error(`Can't add more than available stock ${product?.stock}`);
      }
    }
  };
  return (
    <>
      {existingProduct ? (
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={handleMinus}
            className="w-8 h-8 bg-amazon_dark text-white rounded-full flex items-center justify-center"
          >
            <FaMinus />
          </button>
          <span className="text-xl font-semibold">
            {existingProduct?.quantity}
          </span>
          <button
            onClick={handlePlus}
            className="w-8 h-8 bg-amazon_dark text-white rounded-full flex items-center justify-center"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <div
          className="w-full h-10 bg-amazon_yellow border border-lightText hover:bg-amazon_dark
          hover:text-white flex items-center justify-center rounded-full duration-200"
        >
          <button
            onClick={handleClick}
            className="w-full h-full flex items-center justify-center gap-1 text-base font-semibold"
          >
            Add to cart
            <span>
              <FaCartShopping />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default AddToCartButton;
