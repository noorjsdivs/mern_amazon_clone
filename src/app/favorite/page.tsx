"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Container from "@/Container/Container";
import { addToCart, decreaseQuantity, increaseQuantity } from "../redux/blinkSlice";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const FavoritePage = () => {
  const { favorite } = useSelector((state: any) => state?.blink);
  const [availableProduct, setAvailableProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const existingProduct = favorite?.find((item: any) => item?.id === product?.id);
    if (existingProduct) setAvailableProduct(existingProduct);
  }, [favorite, product]);

  return (
    <Container className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center justify-between gap-5">
        {favorite?.map((item: any) => (
          <div
            key={item?.id}
            className="flex items-center gap-5 justify-between border-b-2 border-gray-300 "
          >
            <div>
              <Link href={`/product/${item?.id}`}>
                <Image
                  src={item?.images[0]}
                  alt="product image"
                  height={300}
                  width={300}
                />
              </Link>
            </div>
            <div>
              <p className="bg-green-100 p-1 px-2 rounded-md w-24 capitalize">
                {item?.category}
              </p>
              <h2 className="text-2xl font-semibold">{item?.title}</h2>
              <div className="flex items-center gap-6">
                <p>{item?.brand}</p>
              </div>
              <p className="text-xs text-green-500">
                {item?.stock} stock available
              </p>
              <p>{item?.description}</p>
              {/* <div className="flex items-start gap-10 mt-10 mb-5">
                <button className="border-2 boder-black rounded-md font-semibold h-10 w-52 hover:text-white  hover:bg-black transition-all duration-300"  onClick={() => handleAddToCart(item)}>Add To Cart</button>
                <button className="rounded-md font-semibold h-10 w-52 text-white  bg-black">Buy Now</button>
              </div> */}
               <div>
      {availableProduct ? (
        <div className="flex items-center justify-evenly gap-3 border border-orange-500 rounded-md w-52 h-10 mx-auto ">
          <button
            onClick={() => {
              if (availableProduct.quantity <= 1) {
                toast.error("Cannot deacrese less then 1");
              } else {
                dispatch(decreaseQuantity(availableProduct));
                toast.success("Quantity decrease.!");
              }
            }}
            className="cursor-pointer"
          >
            <FaMinus size={20} />
          </button>
          <span className="font-bold text-2xl">
            {availableProduct?.quantity}
          </span>
          <button
            onClick={() => {
              if (availableProduct?.quantity > 9) {
                toast.error("Cannot increase grater than 10");
              } else {
                dispatch(increaseQuantity(availableProduct));
                toast.success("Quantity incease.!");
              }
            }}
            className="cursor-pointer"
          >
            <FaPlus size={20} />
          </button>
        </div>
      ) : (
        <button
          className="border border-orange-500 hover:bg-orange-500  h-10 w-32 lg:w-full hover:text-white font-semibold capitalize rounded-md mt-10 mb-10 transition-all duration-300"
          onClick={() => {
            dispatch(addToCart(product));
            toast.success("Product added to the cart.!");
          }}
        >
          add to cart
        </button>
      )}
    </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FavoritePage;
