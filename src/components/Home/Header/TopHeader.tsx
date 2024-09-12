"use client";
import { logo } from "@/assets";
import SearchBtn from "@/components/SearchField/SearchBtn";
import Container from "@/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";

import { useSelector } from "react-redux";

const TopHeader = () => {
  const { cart, favorite } = useSelector((state: any) => state.blink);


  const {data:session} = useSession();

  return (
    <Container className="sticky top-0 z-20">
      <div className="flex items-center justify-between bg-black text-white px-7 py-3 ">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Image src={logo} className="h-10 w-10" alt="logo" />
            <p className="text-sm md:text-xl font-bold">Blink Basktet</p>
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <span>
            <IoLocation size={28} />
          </span>
          <div>
            <p className="font-light text-xs">Deliver to</p>
            <p className="font-semibold">Bangladesh</p>
          </div>
        </div>
        <div className="w-[700px] relative">
          <SearchBtn />
        </div>
        <div className="flex items-center gap-5">
          {
            session?.user ? <div onClick={() => signOut()} className="cursor-pointer">
            <p className="text-xs"> Hello, {session?.user?.name}</p>
            <p className="font-bold">Logout</p>
          </div>
          : 

          <div onClick={() => signIn()} className="cursor-pointer">
            <p className="text-xs"> Hello, sign in</p>
            <p className="font-bold">Accounts & Lists</p>
          </div>
          
          }
          <div>
            <p className="font-light">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/favorite"}>
              <p className="flex flex-col">
                <span className="relative">
                  Marked{" "}
                  <span className="text-orange-600 font-bold text-md absolute top-0 right-0 bg-white h-5 w-5 rounded-full flex items-center justify-center">
                    {favorite?.length > 0 ? favorite.length : 0}
                  </span>
                </span>{" "}
                <span className="font-bold flex items-center gap-1">
                  & Favorite
                </span>
              </p>
            </Link>
            <Link href={"/cart"}>
              {" "}
              <p className="font-bold relative">
                <HiOutlineShoppingBag size={30} />
                Cart{" "}
                <span className="text-orange-600 font-bold text-md absolute top-1 -right-4 bg-white h-5 w-5 rounded-full flex items-center justify-center">
                  {cart?.length > 0 ? cart?.length : 0}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
