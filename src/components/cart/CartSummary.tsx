import { useEffect, useState } from "react";
import { ProductType } from "../../../type";
import Button from "../Button";
import Title from "../Title";
import PriceFormated from "../PriceFormated";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
interface Props {
  cart: ProductType[];
}
const CartSummary = ({ cart }: Props) => {
  const [totalamount, setTotalamount] = useState(0);
  const [discountprice, setDiscountprice] = useState(0);

  useEffect(() => {
    let total = 0;
    let discount = 0;

    {
      cart?.map((item) => {
        total += item?.price * item?.quantity;
        discount +=
          ((item?.price * item?.discountPercentage) / 100) * item?.quantity;
      });
    }
    setTotalamount(total);
    setDiscountprice(discount);
  }, [cart]);
  const { data: session } = useSession();
  const stripePromise = loadStripe(
    "pk_test_51Q3WJeIYtxff7aIoW2ziM6sxVMZG9teyGIspsNDUlVteJzUsLVLuTcBHivlL8BMrAf3lSLkmOmxONKeup97lr2yn00LIyxn8E1"
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: cart,
        email: session?.user?.email,
      }),
    });

    const checkoutSession = await response.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result?.error) {
      alert(result?.error?.message);
    }
  };

  return (
    <div className="flex flex-col gap-y-5 bg-gray-300 text-amazon_dark rounded-md px-4 py-5">
      <Title>Cart Summary</Title>
      <div className="flex items-center justify-between">
        <Title>Subtotal</Title>
        <PriceFormated
          amount={totalamount + discountprice}
          className="text-base font-semibold"
        />
      </div>
      <div className="flex items-center justify-between">
        <Title>DiscountPrice</Title>
        <PriceFormated
          amount={discountprice}
          className="text-base font-semibold"
        />
      </div>
      <div className="flex items-center justify-between">
        <Title>Payble Amount</Title>
        <PriceFormated amount={totalamount} className="text-xl font-semibold" />
      </div>
      <Button onClick={handleCheckout} className="w-full h-12 text-lg">
        Checkout
      </Button>
    </div>
  );
};

export default CartSummary;
