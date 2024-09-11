"use client";
import { signOut, useSession } from "next-auth/react";
import { MdMenu } from "react-icons/md";

const BottomHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-amazonBlue/90 text-white p-0.5 cursor-pointer">
      <ul className="flex flex-wrap mx-5 md:mx-10 items-center justify-start p-1 gap-2">
        {/* Menu icon */}
        <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300">
          <MdMenu /> All
        </li>
        
        {/* Menu items */}
        <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300">
          Today's Deals
        </li>
        <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300">
          Customer Service
        </li>
        <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300">
          Registry
        </li>
        <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300">
          Gift Cards
        </li>
        <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300">
          Sell
        </li>
        
        {/* Logout button (only shows if user is logged in) */}
        {session?.user && (
          <p
            onClick={() => signOut()}
            className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 py-1 hover:border-yellow-500 transition-all duration-300"
          >
            LogOut
          </p>
        )}
      </ul>
    </div>
  );
};

export default BottomHeader;
