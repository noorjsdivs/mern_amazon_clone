import { logo } from "@/assets/images/Image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navlink = [
    {
      title: "Today's Deals",
      link: "/todaysdeals",
    },
    {
      title: "Customar Service",
      link: "/services",
    },
    {
      title: "Gift Cards",
      link: "/giftcard",
    },
    {
      title: "Registry",
      link: "/registry",
    },
    {
      title: "Sell",
      link: "/sell",
    },
  ];

  return (
    <div className="px-4 py-3 bg-secondary text-white font-medium">
      <ul className="flex justify-between lg:justify-start items-center gap-2 flex-wrap">
        {navlink.map((item) => (
          <li
            key={item?.title}
            className=" border border-white hover:text-darkYellow duration-300 flex-1 lg:flex-none flex justify-center items-center rounded-full"
          >
            <Link href={item?.link} className="px-4 text-nowrap text-center ">
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
