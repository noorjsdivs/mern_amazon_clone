import { useSelector } from "react-redux";

export const calculateCartTotals = () => {
    const selector = useSelector((state) => state.shopping.cart);
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