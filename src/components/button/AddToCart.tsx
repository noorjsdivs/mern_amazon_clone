import { twMerge } from "tailwind-merge";

export interface Props {
  children: React.ReactNode;
  className?: string;
}
const AddToCart = ({ children, className }: Props) => {
  return (
    <button
      type="submit"
      className={twMerge(
        "w-full py-2 bg-yellow-400/80  text-amazon_dark rounded-md text-sm font-semibold border hover:border-amazon_dark hover:bg-yellow-400",
        className
      )}
    >
      {children}
    </button>
  );
};

export default AddToCart;
