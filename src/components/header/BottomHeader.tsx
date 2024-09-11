import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <div className="w-full mx-auto px-4 h-10 bg-amazone_light text-white flex items-center gap-2 text-sm">
      <p className="flex items-center gap-1 cursor-pointer border border-transparent hover:border-white px-2 h-8 duration-300">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-white px-2 h-8 duration-300">
        Todays Deals
      </p>
      <p className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-white px-2 h-8 duration-300">
        Customer Service
      </p>
      <p className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-white px-2 h-8 duration-300">
        Registry
      </p>
      <p className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-white px-2 h-8 duration-300">
        Gift Cards
      </p>
      <p className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-white px-2 h-8 duration-300">
        Sell
      </p>
      <p className="hidden md:flex items-center cursor-pointer border border-transparent hover:border-red-600 text-amazon_yellow hover:text-red-500 px-2 h-8 duration-300">
        Sign out
      </p>
    </div>
  );
};

export default BottomHeader;
