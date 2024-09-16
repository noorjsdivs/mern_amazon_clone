import CheckoutBtn from "@/components/Buttons/CheckoutBtn";
import Link from "next/link";

const CheckOutPage = ({ cart, totalPrice }: any) => {
//   let tax = 15;
// let AllTotalPrice = totalPrice + tax;
  return (
    <div className="shadow-themeColor/30 sticky top-60 shadow-xl p-4 rounded-md lg:ml-10 w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Subtotal</h2>
        <h2 className="text-xl font-semibold">${totalPrice.toFixed(2)}</h2>
      </div>
      <hr />
      <div className="flex items-center justify-between mt-2 mb-3">
        {/* <p className="text-gray-500">Tax</p> */}
        {/* <p className="text-gray-500">${tax}</p> */}
      </div>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">Total</h3>
          <p className="text-xs inline-block text-gray-500">
            (Shipping fees not included)
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">
            ${(totalPrice).toFixed(2)}
          </h3>
        </div>
      </div>
      <div>
        <CheckoutBtn cart={cart} totalPrice={totalPrice}/>
      </div>
      <Link href={"/"}>
        {" "}
        <p className="underline text-sm mt-5 text-center">Continue Shopping</p>
      </Link>
    </div>
  );
};

export default CheckOutPage;
