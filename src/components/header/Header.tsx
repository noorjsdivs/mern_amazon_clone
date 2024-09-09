"use client";
import { cartIcon, logo } from "@/assets";
import Image from "next/image";
import { IoLocation, IoSearch } from "react-icons/io5"; // Import the search icon
import InputFiled from "./InputFiled";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  // console.log("this is session", session);
  return (
    <div className="flex bg-amazonBlue p-1 px-10 text-white justify-between items-center">
      {/* Left side (logo and location) */}
      <div className="flex gap-3 items-center">
        <Image
          className="w-44 h-14 mt-2 p-2 border border-transparent hover:border-white transition-all duration-300"
          src={logo}
          alt="Amazon logo"
        />
        <div className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 px-2">
          <span>
            <IoLocation size={24} />
          </span>
          <div>
            <h1>Delebary</h1>
            <span>USA</span>
          </div>
        </div>
      </div>

      {/* Middle (input search bar with search button) */}
      <InputFiled />

      {/* Right side */}
      <div className="flex gap-5">
        {session?.user ? (
          <>
            {" "}
            <div className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 font-medium px-2">
              <div>
                <p className="text-sm">Hello, {session.user.name}</p>
                <h3>Account & List</h3>
              </div>
            </div>{" "}
          </>
        ) : (
          <>
            <div
              onClick={() => signIn()}
              className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 font-medium px-2"
            >
              <div>
                <p className="text-sm">Hello, Sign in</p>
                <h3>Account & List</h3>
              </div>
            </div>
          </>
        )}

        <div className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 px-3">
          <div className="relative">
            <h1>Marked</h1>
            <span>& Favourite</span>
          </div>
          <span className="absolute  ml-16 top-3.5 border   border-yellow-400 h-5 w-5 text-center items-center justify-center text-sm">
            7
          </span>
        </div>
        {/* cart */}
        <div className="text-lightText flex gap-1 items-center border border-transparent hover:border-white transition-all duration-300 px-3">
          <div className="relative">
            <Image className="w-14" src={cartIcon} alt="image" />
          </div>
          <span className="absolute  mb-7 text-yellow-600 ml-6    text-center items-center justify-center text-sm">
            97
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
