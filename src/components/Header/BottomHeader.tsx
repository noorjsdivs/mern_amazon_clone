import React from "react";
import { IoMdMenu } from "react-icons/io";

export default function BottomHeader() {
  return (
    <div className="w-full h-10 py-1 text-gray-300 bg-amazonLight px-4">
      <div className="flex items-center gap-4">
        <p className=" link flex items-center gap-1">
          <IoMdMenu />
          All
        </p>
        <p className="link ">Today's Deals</p>
        <p className="link ">Customer Service</p>
        <p className="link hidden lg:inline-flex ">Registry</p>
        <p className="link hidden lg:inline-flex ">Gift Cards</p>
        <p className="link hidden lg:inline-flex ">Sell</p>
        <p className="link ">Log out</p>
      </div>
    </div>
  );
}
