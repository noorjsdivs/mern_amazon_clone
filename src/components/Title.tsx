import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return (
    <h1 className={twMerge("text-lg font-semibold tracking-wide", className)}>
      {children}
    </h1>
  );
};

export default Title;
