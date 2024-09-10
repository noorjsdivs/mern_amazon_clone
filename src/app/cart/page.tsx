import CartProducts from "@/components/cart/CartProducts";
import { Metadata } from "next";
export const metadata: Metadata = {
      title: "Cart | Amazon online shopping",
};
const CartProductPage = () => {
      return (
            <div>
                  <CartProducts />
            </div>
      );
};

export default CartProductPage;