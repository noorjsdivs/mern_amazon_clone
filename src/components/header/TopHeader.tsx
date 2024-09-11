import { cartImage, logo } from "@/assets/images/Image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";

const TopHeader = () => {
  return (
    <div className=" bg-primary px-4 py-3 flex justify-start md:justify-between items-center gap-2 text-white">
      <Link
        href={"/"}
        className="p-1 border border-primary hover:border-white duration-200"
      >
        <Image src={logo} alt="amazone clone" className="w-24"></Image>
      </Link>
      <div className="px-2 border border-primary hover:border-white duration-200 cursor-pointer hidden md:inline-flex items-center gap-2">
        <CiLocationOn size={30}/>
        <p>
          Deliver to <br /> <span className="font-bold text-nowrap">Oman</span>
        </p>
      </div>
      <div className="w-1/2 hidden lg:inline-block">
        <Search />
      </div>
      <div className="px-2 border border-primary hover:border-white duration-200 cursor-pointer">
        <p>
          Hello, sign in <br />
          <span className="font-bold text-nowrap hidden md:inline-flex items-center">Accounts & List <TiArrowSortedDown size={24}/></span>
        </p>
      </div>
      <div className="px-2 border border-primary hover:border-white duration-200 cursor-pointer hidden md:inline-block">
        <p>
          Marked <span className="text-darkYellow">0</span> <br /> <span className="font-bold text-nowrap">& Favorite</span>
        </p>
      </div>
      <div className="p-2 border border-primary hover:border-white duration-200 cursor-pointer flex items-end font-bold relative">
        <Image src={cartImage} alt="Amazone clone shope" className="w-12 h-8"></Image>
        <p>cart</p>
        <p className="absolute top-0 left-1/3 text-darkYellow">0</p>
      </div>
    </div>
  );
};

export default TopHeader;
