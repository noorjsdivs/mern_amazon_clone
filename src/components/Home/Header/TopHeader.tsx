import { logo } from "@/assets";
import Container from "@/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoLocation, IoSearch } from "react-icons/io5";
import { TbJewishStar } from "react-icons/tb";

const TopHeader = () => {
  return (
    <Container>
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
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none rounded-l-md h-10 px-4 w-[680px]  text-black placeholder:text-gray-500"
          />
          <span className="absolute top-0 right-0  flex items-center justify-center bg-orange-600 h-10 w-12  rounded-r-md">
            <IoSearch size={25} />
          </span>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <p className="text-xs"> Hello, sign in</p>
            <p className="font-bold">Accounts & Lists</p>
          </div>
          <div>
            <p className="font-light">Returns</p>
            <p className="font-bold">& Orders</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="flex flex-col">
              <span className="relative">
                Marked{" "}
                <span className="text-orange-600 font-bold text-md absolute top-0 right-0 bg-white h-5 w-5 rounded-full flex items-center justify-center">
                  1
                </span>
              </span>{" "}
              <span className="font-bold flex items-center gap-1">
                & Favorite
              </span>
            </p>{" "}
            <p className="font-bold relative">
              <HiOutlineShoppingBag size={30} />
              Cart{" "}
              <span className="text-orange-600 font-bold text-md absolute top-1 -right-4 bg-white h-5 w-5 rounded-full flex items-center justify-center">
                1
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopHeader;
