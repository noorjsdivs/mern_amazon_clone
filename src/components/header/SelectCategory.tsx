import { getData } from "@/helper";
import React, { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const SelectCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
 

  useEffect(() => {
    async function fetchCategory() {
      const response = await getData('https://dummyjson.com/products/category-list');
      setCategories(response);
    }
    fetchCategory();
  }, [])


  const handleCategory = (event: React.MouseEvent) => {
    const target = event?.target as HTMLElement;
    setSelectedCategory(target?.innerText);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-200 h-full py-2 px-3 rounded-l-md flex items-center gap-1 cursor-pointer"
      >
        {selectedCategory}
        <span>
          <TiArrowSortedDown />
        </span>
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 text-primary bg-gray-50 p-4 rounded-md z-50 h-[80vh] overflow-auto shadow-md">
        {
          categories.map(item=> (
            <li
            key={item}
          onClick={handleCategory}
          className="hover:text-gray-500 p-2 cursor-pointer text-nowrap font-semibold duration-200"
        >
          {item}
        </li>
          ))
        }
        
      </ul>
      )}
    </div>
  );
};

export default SelectCategory;
