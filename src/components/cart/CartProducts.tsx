import { useSelector } from "react-redux";
import Container from "../Container";
import CartProduct from "./CartProduct";
import Link from "next/link";
import BillingSummary from "./BillingSummary";

const CartProducts = () => {
  const selector = useSelector((state) => state.shopping.cart);
  console.log("cartproduct", selector);
  return (
    <Container className="mt-6">
      {selector.length ? (
        <>
          {" "}
          <div>
            <h1 className="text-3xl mb-2 text-black font-semibold">
              Shopping Cart
            </h1>

            <div className="grid grid-cols-5 gap-5">
              {/* left */}
              <div className="col-span-3">
                {selector.map((item) => (
                  <CartProduct key={item.id} product={item} />
                ))}
              </div>
              <div className="col-span-2 bg-gray-200 h-80 px-6 ">
               <BillingSummary/>


              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 mb-4 bg-gray-100 rounded-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Product Not Available
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Sorry, the product you are looking for is not available.
          </p>
          <Link href="/">
            <p className="px-6 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition ease-in-out">
              Go Back to Home
            </p>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default CartProducts;
