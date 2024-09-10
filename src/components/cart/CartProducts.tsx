"use client";
import Link from "next/link";
import Container from "../Container";
import CartSummary from "./CartSummary";
import CartProduct from "./CartProduct";
import { useSelector } from "react-redux";

const CartProducts = () => {
  // @ts-ignore
  const { cart } = useSelector((state) => state.amazon);

  return (
    <div>
      <Container className="py-10">
        {cart.length ? (
          <div>
            <div>
              <h1 className="text-3xl md:text-4xl text-gray-700 font-medium tracking-wide">
                Shopping Cart
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-6 mt-10">
              <div className="lg:w-2/3 w-full border-t-2 border-r-2 lg:border-r-2 border-l-2 border-amazonYellow ">
                {cart.map((product) => (
                  <CartProduct key={product?.id} product={product} />
                ))}
              </div>
              <div className="lg:w-1/3 w-full">
                <CartSummary />
              </div>
            </div>
          </div>
        ) : (
          <div className="shadow-2xl mx-auto py-10 w-11/12 md:w-2/3 text-center lg:px-6 px-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-600">
              Nothing to Shop
            </h2>
            <p className="text-sm md:text-lg text-gray-500 mt-4">
              Your shopping cart is empty. adding items to your cart now and enjoy great deals! <br /> Explore a wide variety of products tailored just for you.
            </p>
            <Link href={"/"}>
              <button className="py-2 px-6 md:px-10 mt-6 bg-yellow-400 text-gray-500">
                Add to Shopping
              </button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CartProducts;
