import { useSelector } from "react-redux";

export const calculateCartTotals = () => {
      //@ts-ignore
      const { cart } = useSelector((state) => state.amazon)
      const totalAmt = cart.reduce(
            //@ts-ignore
            (sum, product) => {
                  sum.regular += product?.price * product?.quantity!;
                  sum.discounted +=
                        product?.price *
                        (product?.discountPercentage / 100) *
                        product?.quantity!;
                  return sum;
            },
            { regular: 0, discounted: 0 }
      );

      return { totalAmt };
};