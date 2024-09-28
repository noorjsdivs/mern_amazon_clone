import { twMerge } from "tailwind-merge";

interface Props {
  amount: number;
  className?: string;
}

const PriceFormated = ({ amount, className }: Props) => {
  const FormatedPrice = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return (
    <div className={twMerge("font-medium", className)}>{FormatedPrice}</div>
  );
};

export default PriceFormated;
