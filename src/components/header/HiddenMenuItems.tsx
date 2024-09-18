import React from "react";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";

interface Props {
  categories: string[]
}

const HiddenMenuItems = ({categories}: Props) => {


  return (
    <div className="">
      {/* Sign in */}
      <div className="bg-secondary py-2 w-full">
        <div className="flex justify-center items-center gap-2 text-white">
          <ProfileMenu />
        </div>
      </div>
      {/* Links */}
      <div className="text-primary capitalize py-10">
        <h3 className="text-2xl font-bold underline text-center">Category</h3>
        <ul className="font-medium p-4 flex flex-col gap-1">
          {
            categories.map(link => (
              <li key={link} className="border-b border-secondary/10">
                <Link href={{pathname: `/result`, query: {category: link}}} className="p-2 w-full block hover:text-darkYellow duration-300">{link}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default HiddenMenuItems;
