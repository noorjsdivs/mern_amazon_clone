import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import PriceFormate from "./PriceFormate";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const StripePK =
    "pk_test_51PrP9gEOIYdbeOpR1IRGy4zPWAVZ3SO8aXczbqMXocMesSCT0DJZurJzmCflG5I95m7yvpgxMxizgcBKLIkxkkP100MIEyOPo4";
  const stripePromis = loadStripe(StripePK);
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state: StateType) => state.cart?.cart);

  useEffect(() => {
    const price = cart?.reduce(
      (total, item) => (total += item.price * item.quantity!),
      0
    );
    if (price) {
      setTotalPrice(price);
    }
  }, [cart]);

  const handleCheckout = async () => {
    const stripe = await stripePromis;

    console.log(stripe);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="font-bold text-2xl">Checkout</h1>
        <p className="flex mt-4 justify-between font-bold">
          Subtotal: <PriceFormate price={totalPrice} />
        </p>
        <hr />
        <p className="flex mt-4 justify-between font-bold">
          Total: <PriceFormate price={totalPrice} />
        </p>
        <hr />
      </div>
      <button
        onClick={handleCheckout}
        className="bg-yellow hover:bg-darkYellow duration-300 font-bold tracking-wide py-2 w-full rounded-full"
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
