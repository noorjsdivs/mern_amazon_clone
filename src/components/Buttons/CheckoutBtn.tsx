import { store } from "@/app/redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { FC } from "react";

interface CheckoutBtnProps {
  cart: Array<{ id: string; quantity: number; price: number }>; 
}

const CheckoutBtn: FC<CheckoutBtnProps> = ({ cart }) => {
  const publishableKey =
    "pk_test_51O7qmVGR9hlKk72pMHG35MMR7ZuvW4xFgWERZsV4r0UtjXuG4gTgKsfM4utp2WhMrr8iyDTsihLLthcbem1t0yEq000EoeHwMX";
  const stripePromise = loadStripe(publishableKey);

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{ name: "Sample Product", price: 2000, quantity: 1 }],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success && data.url) {
        window.location.href = data.url; 
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <button
        className="capitalize font-bold text-white bg-black mt-5 h-12 rounded-md w-full"
        onClick={handleCheckout}
        type="submit"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutBtn;
