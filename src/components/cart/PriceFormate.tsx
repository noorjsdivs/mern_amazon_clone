import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  price: number;
  className?: string;
}

const PriceFormate = ({ price, className }: Props) => {
  const FormatedPrice = new Number(price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return (
    <div>
      <p className={twMerge("font-semibold w-20 text-nowrap", className)}>
        {FormatedPrice}
      </p>
    </div>
  );
};

export default PriceFormate;
