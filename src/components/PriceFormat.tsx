import { twMerge } from "tw-merge";

interface Props{
    amount?:number;
    className?: string;
}

const PriceFormat = ({amount , className}:Props) => {
    const formattedAmount =new Number (amount).toLocaleString
    ("en-Us",{
        style:"currency",
        currency: "USD",
        minimumFractionDigits:2
    })
  return (
    <span className={twMerge("font-semibold",className)}>
        {formattedAmount}
    </span>
  )
}

export default PriceFormat