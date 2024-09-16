"use";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const SelectCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState("All");

  const handleCategory = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event)
    setCategorySearch(event?.target?.innerText);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-200 h-full py-2 px-3 rounded-l-md flex items-center gap-1 cursor-pointer"
      >
        {categorySearch}
        <span>
          <TiArrowSortedDown />
        </span>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 text-primary bg-gray-50 p-4 rounded-md">
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            All
          </li>
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            Add Category
          </li>
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            Baby
          </li>
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            Automotive
          </li>
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            Mobile
          </li>
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            Desktop
          </li>
          <li
            onClick={handleCategory}
            className="hover:text-gray-500 cursor-pointer text-nowrap font-semibold duration-200"
          >
            Laptop
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectCategory;