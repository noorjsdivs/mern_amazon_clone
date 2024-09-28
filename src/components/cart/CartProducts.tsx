"use client";
import { useSelector } from "react-redux";
import Container from "../Container";
import { ProductType, StateType } from "../../../type";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import Button from "../Button";

const CartProducts = () => {
  const { cart } = useSelector((state: StateType) => state?.amazon);
  return (
    <Container>
      {cart.length > 0 ? (
        <>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Shopping Cart
          </h2>
          <div className="mt-10 lg:grid lg:grid-cols-12 lg:gap-10">
            <section className="col-span-7">
              <div className=" divide-y divide-gray-400 border-t border-b border-gray-400">
                {cart?.map((item: ProductType) => (
                  <CartProduct key={item?.id} product={item} />
                ))}
              </div>
            </section>
            <div className=" col-span-5 mt-10 md:mt-0">
              <CartSummary cart={cart} />
            </div>
          </div>
        </>
      ) : (
        <div className="py-10 shadow shadow-gray-600 max-w-3xl mx-auto flex flex-col gap-y-3 items-center text-center justify-between">
          <h2 className="text-xl md:text-3xl font-semibold">Shopping Cart</h2>
          <p className="max-w-[500px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus dolores illum nobis enim consectetur voluptates laborum,
            nesciunt maiores recusandae dicta repudiandae libero impedit eum
            quod architecto consequuntur earum voluptas aut.
          </p>
          <Button href="/">Go to Home</Button>
        </div>
      )}
    </Container>
  );
};

export default CartProducts;
