"use client";
import { cartIcon, logo } from "@/assets";
import Image from "next/image";
import { IoLocation } from "react-icons/io5"; 
import InputFiled from "./InputFiled";
import { signIn, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import BottomHeader from "./BottomHeader";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  const selector = useSelector((state) => state.shopping.cart);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex bg-amazonBlue p-1 px-10 text-white justify-between items-center">
        {/* Left side (logo and location) */}
        <div className="flex gap-3 items-center">
          <Link href={"/"}>
            <Image
              className="w-36 h-12 mt-2 p-2 border border-transparent hover:border-white transition-all duration-300"
              src={logo}
              alt="Amazon logo"
            />
          </Link>
          <div className="text-lightText lg:flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 px-2 hidden md:block">
            <span>
              <IoLocation size={24} />
            </span>
            <div>
              <h1>Delivery</h1>
              <span>USA</span>
            </div>
          </div>
        </div>

        {/* Middle (input search bar) */}
        <div className="hidden lg:flex flex-1">
          <InputFiled />
        </div>

        {/* Right side */}
        <div className="flex gap-5 items-center">
          {session?.user ? (
            <div className="text-lightText flex items-center gap-3">
              {/* User Image */}
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt="User image"
                  width={40}
                  height={40}
                  className="rounded-full border border-white"
                />
              )}
              <div className="hidden lg:flex flex-col">
                <span className="text-sm">Hello, {session.user.name}</span>
                <h3 className="hidden lg:block">Account & List</h3>
              </div>
            </div>
          ) : (
            <div
              onClick={() => signIn()}
              className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 font-medium px-2"
            >
              <div>
                <p className="text-sm">Hello, Sign in</p>
                <h3 className="hidden lg:block">Account & List</h3>
              </div>
            </div>
          )}

          <div className="text-lightText flex gap-1 hidden md:block items-center border border-transparent hover:border-white transition-all duration-300 px-3">
            <div className="relative">
              <h1>Marked</h1>
              <span>& Favourite</span>
            </div>
            <span className="absolute ml-16 top-3 border border-yellow-400 h-5 w-5 text-center items-center justify-center text-sm">
              7
            </span>
          </div>

          {/* Cart */}
          <Link href={"/cart"}>
            <div className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 px-3">
              <div className="relative p-1">
                <Image className="w-12" src={cartIcon} alt="Cart Icon" />
              </div>
              <span className="absolute mb-7 text-yellow-600 ml-6 font-medium text-center items-center justify-center text-sm">
                {selector.length > 0 ? selector.length : "0"}
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* BottomHeader component */}
      <BottomHeader />
    </header>
  );
};

export default Header;
