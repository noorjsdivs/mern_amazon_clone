"use client";
import { carticon, logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { StateType } from "../../../type";

const Header = () => {
  const { cart } = useSelector((state: StateType) => state.amazone);
  return (
    <div className="w-full bg-amazon_blue h-20 text-lightText">
      <div className="w-full mx-auto h-full inline-flex items-center md:justify-between gap-1 md:gap-3 px-4 ">
        {/* logo */}
        <Link
          href={"/"}
          className="px-2 h-[70%] flex items-center justify-center border border-transparent
         hover:border-lightText cursor-pointer duration-300"
        >
          <Image src={logo} alt="logo" className="w-28 object-cover mt-1" />
        </Link>
        {/* delivery */}
        <div
          className="px-2 h-[50%] hidden lg:inline-flex items-center justify-center border border-transparent
         hover:border-lightText cursor-pointer gap-1 duration-300"
        >
          <IoLocationSharp className="text-2xl " />
          <div>
            <p className="text-xs">Deliver to</p>
            <p className="text-sm font-semibold">USA</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <span className=" absolute top-0 left-0 w-12 text-amazon_dark rounded-l-md h-full bg-lightText flex items-center justify-center cursor-pointer">
            All <IoMdArrowDropdown />
          </span>
          <input
            className="w-full h-full px-16 rounded-md outline-none text-base placeholder:text-sm text-amazon_dark"
            type="text"
            placeholder="search of product amazon_yt"
          />
          <span
            className="w-12 h-full bg-amazon_yellow text-amazon_dark flex items-center justify-center
           absolute top-0 right-0 rounded-r-md text-xl cursor-pointer"
          >
            <IoSearch />
          </span>
        </div>
        {/* signIn */}
        <div
          className="text-xs px-2 flex flex-col items-start justify-center text-gray-100 border border-transparent
         hover:border-lightText duration-300 h-[60%] cursor-pointer"
        >
          <p className="text-lightText">Hello,sign in</p>
          <h1 className="flex items-center text-sm font-semibold">
            Accounts & List <IoMdArrowDropdown />
          </h1>
        </div>
        {/* orders */}
        <div
          className="text-xs px-2 hidden md:inline-flex flex-col items-start justify-center text-gray-100 border border-transparent
         hover:border-lightText duration-300 h-[60%] cursor-pointer"
        >
          <p className="text-lightText">Returns</p>
          <p className="text-sm font-semibold">& orders</p>
        </div>
        {/* cart */}
        <Link
          href={"/cart"}
          className="text-xs px-2 inline-flex flex-col items-start justify-center text-gray-100 border border-transparent
         hover:border-lightText duration-300 h-[60%] cursor-pointer relative"
        >
          <Image src={carticon} alt="cartIcons" className="w-12 object-cover" />
          <span
            className=" absolute top-2 right-5 w-4 h-4 text-base text-red-600
           flex items-center justify-center rounded-full"
          >
            {cart?.length > 0 ? cart?.length : "0"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
