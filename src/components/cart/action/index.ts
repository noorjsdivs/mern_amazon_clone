import { productType } from "../../../../type";

export const calculateDiscount = (cart: productType[]) => {
  const discount = cart.reduce((total, item) => {
    const singleProductDiscount =
      (item?.price / 100) * item?.discountPercentage;

    total += singleProductDiscount * item?.quantity!;
    return total;
  }, 0);

  return discount;
};

export const calculatePrice = (cart: productType[]) => {
  const price = cart.reduce(
    (total, item) => (total += item.price * item.quantity!),
    0
  );

  return price;
};