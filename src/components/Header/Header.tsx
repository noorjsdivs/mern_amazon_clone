import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchInput from "../SearchInput";
import SigninButton from "../SigninButton";
import FavouriteBtn from "../FavouriteBtn";
import CartBtn from "../CartBtn";
import BottomHeader from "./BottomHeader";

export default function Header() {
  return (
    <header>
      <div className="w-full h-20 bg-amazonBlue text-lightText ">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 md:gap-3 px-4">
          <div>
          {/* logo */}
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-28 text-black border border-transparent hover:border-white p-2 duration-300 object-cover"
              />
            </Link>
          </div>
          {/* deliver section*/}
          <div className="text-white flex items-center gap-1 border border-transparent hover:border-white duration-200 p-2 hidden lg:inline-flex">
            <MdOutlineLocationOn className="text-2xl" />
            <div>
              <p className="text-gray-400 font-sm">Deliverd to </p>
              <p className="font-bold text-sm">USA</p>
            </div>
          </div>
          {/* search ber section */}
          <SearchInput />
          {/* accounts section */}
          <SigninButton/>
          {/* favourite section */}
          <FavouriteBtn/>
          {/* cart section */}
          <CartBtn/>
        </div>
      </div>
      {/*  bottom header */}
      <BottomHeader/>
    </header>
  );
}
