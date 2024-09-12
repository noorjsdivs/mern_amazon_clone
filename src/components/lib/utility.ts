import { useSelector } from "react-redux";
import { ProductType } from "../../../type";
interface StateType {
  shopping: {
    cart: ProductType[];
  };
}
export const calculateCartTotals = () => {
    const selector = useSelector((state:StateType) => state.shopping.cart);
    const totalAmt = selector.reduce(
      (sum, product) => {
        sum.regular += product?.price * product?.quentity!;
        sum.discounted +=
          product?.price *
          (product?.discountPercentage / 100) *
          product?.quentity!;
        return sum;
      },
      { regular: 0, discounted: 0 }
    );
  
    return { totalAmt };
  };