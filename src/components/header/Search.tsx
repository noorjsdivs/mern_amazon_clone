"use client";
import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import { RiCloseFill } from "react-icons/ri";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="text-black rounded-md flex items-center overflow-hidden">
      <SelectCategory />
      <div className="h-full flex-1 relative">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search here....."
          className="outline-none pl-3 pr-6 py-2 w-full"
          value={inputValue}
        />
        {inputValue && (
          <RiCloseFill onClick={()=> setInputValue('')} size={20} className="absolute top-1/2 right-1 -translate-y-1/2 text-primary z-50 hover:text-darkYellow duration-200 cursor-pointer" />
        )}
      </div>
      <button className="bg-yellow p-2 rounded-r-md font-bold hover:bg-darkYellow duration-300">
        search
      </button>
    </div>
  );
};

export default Search;