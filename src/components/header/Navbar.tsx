import Link from "next/link";
import React from "react";
import Container from "../Container";
import AllMenuIcon from "./AllMenuIcon";
import { getData } from "@/helper";

const Navbar =async () => {

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

  const categories =  await getData('https://dummyjson.com/products/category-list');

  return (
    <div className="bg-secondary ">
      <Container className="py-1">
        <div className="text-white font-medium ">
          <ul className="flex justify-between lg:justify-start items-center gap-2 flex-wrap">
            <AllMenuIcon categories={categories}/>
            {navlink.map((item) => (
              <li
                key={item?.title}
                className=" border border-white hover:text-darkYellow duration-300 flex-1 lg:flex-none flex justify-center items-center rounded-full"
              >
                <Link
                  href={item?.link}
                  className="px-4 text-nowrap text-center "
                >
                  {item?.title}
                </Link>
              </li>
            ))}
            <li className="font-bold text-yellow tracking-wider underline">
              please signin to access your cart!
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
