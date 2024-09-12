import { twMerge } from "tailwind-merge";


interface Props {
  amount?: number;
  className?: string;
}

const PriceFormat = ({ amount, className }: Props) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  return <span className={twMerge(className)}>{formattedAmount}</span>;
};

export default PriceFormat;
