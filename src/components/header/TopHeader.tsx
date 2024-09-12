import { cartImage, logo } from "@/assets/images/Image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import ProfileMenu from "./ProfileMenu";
import FavoriteCart from "./FavoriteCart";
import CartMenu from "./CartMenu";

const TopHeader = () => {
  return (
    <div className="bg-primary px-4 py-3 flex justify-start md:justify-between items-center gap-2 text-white text-sm">
      <Link
        href={"/"}
        className="p-1 border border-primary hover:border-white duration-200"
      >
        <Image src={logo} alt="amazone clone" className="w-24"></Image>
      </Link>
      <div className="px-2 border border-primary hover:border-white duration-200 cursor-pointer hidden md:inline-flex items-center gap-2">
        <CiLocationOn size={30} />
        <p>
          Deliver to <br /> <span className="font-bold text-nowrap">Oman</span>
        </p>
      </div>
      <div className="w-1/2 hidden lg:inline-block">
        <Search />
      </div>
      <div>
        <ProfileMenu />
      </div>
      <div className="px-2 border border-primary hover:border-white duration-200 cursor-pointer hidden md:inline-block">
        <FavoriteCart />
      </div>
      <div>
        <Link
          href={"/cart"}
          className="p-2 border border-primary hover:border-white duration-200 cursor-pointer flex items-end font-bold relative"
        >
          <CartMenu />
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
