import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, href, onClick }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "px-4 py-2 rounded-md text-base font-semibold bg-amazon_dark text-white hover:bg-yellow-500 hover:text-amazon_dark duration-200",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            "px-4 py-2 rounded-md text-base font-semibold bg-amazon_dark text-white hover:bg-yellow-500 hover:text-amazon_dark duration-200",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
