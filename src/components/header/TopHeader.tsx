"use client";
import Image from "next/image";
import Container from "../Container";
import { carticon, logo } from "@/assets";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../type";
import { signIn, useSession } from "next-auth/react";
import { adduser, removeUser } from "@/app/redux/amazonSlice";

const TopHeader = () => {
  const dispatch = useDispatch();
  const [searchvalue, setsearchValue] = useState("");
  const { cart } = useSelector((state: StateType) => state?.amazon);
  const { data: session } = useSession();
  useEffect(() => {
    if (session?.user) {
      dispatch(adduser(session?.user));
    } else {
      dispatch(removeUser());
    }
  }, [session?.user, dispatch]);
  return (
    <div className="w-full bg-amazon_dark text-lightText h-20">
      <Container className="h-full flex items-center justify-center gap-3">
        {/* logo */}
        <Link
          href={"/"}
          className="flex items-center justify-center hoverEffect"
        >
          <Image
            src={logo}
            alt="logo"
            className="w-16 md:w-20 lg:w-28 object-contain mt-1"
          />
        </Link>
        {/* deliver */}
        <div className="hidden md:inline-flex items-center gap-1 hoverEffect">
          <FaLocationDot className="text-xl" />
          <div>
            <p className="text-xs font-semibold">Deliver to</p>
            <p className="text-base font-semibold">USA</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex relative">
          <span
            className=" absolute top-0 left-0 h-full w-12 px-1 rounded-l-md
           bg-gray-300 text-amazon_dark flex items-center cursor-pointer font-medium"
          >
            All <MdArrowDropDown />
          </span>
          <input
            type="text"
            placeholder="search of products amazon_yt"
            className="w-full h-full outline-none px-12 ml-2 py-1 placeholder:text-xs text-amazon_dark text-base rounded-md"
            onChange={(e) => setsearchValue(e.target.value)}
            value={searchvalue}
          />
          <span
            className=" absolute top-0 right-0 w-12 h-full flex items-center justify-center bg-amazon_yellow
           text-amazon_dark text-xl font-semibold rounded-r-md cursor-pointer"
          >
            <FiSearch />
          </span>
          {searchvalue && (
            <span
              onClick={() => setsearchValue("")}
              className=" absolute top-2.5 right-16 text-amazon_dark text-xl hover:text-red-500 duration-200 cursor-pointer"
            >
              <IoCloseOutline />
            </span>
          )}
        </div>
        {/* orders */}
        <div
          className="text-xs px-2 hidden md:inline-flex flex-col items-start justify-center text-gray-100 border border-transparent
         hover:border-lightText duration-300 h-[60%] cursor-pointer"
        >
          <p className="text-lightText">Returns</p>
          <p className="text-sm font-semibold">& orders</p>
        </div>
        {/* accounts  */}
        {session?.user ? (
          <>
            <Image
              src={session.user.image!}
              alt="client_image"
              width={200}
              height={200}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-xs font-semibold text-white">
                Hello,{session?.user?.name}
              </p>
              <Link
                href={"/profile"}
                className="text-xs font-semibold text-white"
              >
                view profile
              </Link>
            </div>
          </>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs px-2 flex flex-col items-start justify-center text-gray-100 border border-transparent
        hover:border-lightText duration-300 h-[60%] cursor-pointer"
          >
            <p className="text-lightText">Hello,sign in</p>
            <h1 className="flex items-center text-sm font-semibold">
              Accounts & List <IoMdArrowDropdown />
            </h1>
          </div>
        )}
        {/* cart */}
        <Link
          href={"/cart"}
          className="hoverEffect relative flex items-center justify-center"
        >
          <Image
            src={carticon}
            alt="carticon"
            className="w-12 object-contain"
          />
          <span className=" absolute top-1 right-5 text-rose-500 ">
            {cart?.length > 0 ? cart?.length : "0"}
          </span>
        </Link>
      </Container>
    </div>
  );
};

export default TopHeader;
