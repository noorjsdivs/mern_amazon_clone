"use client";
import React, { useEffect, useRef, useState } from "react";
import SelectCategory from "./SelectCategory";
import { RiCloseFill } from "react-icons/ri";
import { getData } from "@/helper";
import SearchList from "../search/SearchList";
import { useRouter } from "next/navigation";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFullViewButton = () => {
    if(inputValue){
      router.push(`/search?limit=194&order=asc&sortBy=title&q=${inputValue}`);
    }
  };

  useEffect(() => {
    // this function for fetch data
    async function fetchCategory() {
      setLoading(true);
      const { products } = await getData(
        `https://dummyjson.com/products/search?limit=10&order=asc&sortBy=title&q=${inputValue}`
      );
      setSearchData(products);
      setLoading(false);
    }
    // if search value then the function call
    if (inputValue) {
      fetchCategory();
    } else {
      setSearchData([]);
    }

    // click function
    const handleCloseSearchList = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if(target?.nodeName !=='button'){
        setInputValue("");
      }
    };

    document.addEventListener("click", handleCloseSearchList);
    return () => document.removeEventListener("click", handleCloseSearchList);
  }, [inputValue]);

  return (
    <div className="text-black rounded-md flex items-center relative">
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
          <RiCloseFill
            onClick={() => setInputValue("")}
            size={20}
            className="absolute top-1/2 right-1 -translate-y-1/2 text-primary hover:text-darkYellow duration-200 cursor-pointer"
          />
        )}
      </div>
      <button
        onClick={handleFullViewButton}
        className="bg-yellow p-2 rounded-r-md font-bold hover:bg-darkYellow duration-300"
      >
        search
      </button>

      {/* Search result */}
      {inputValue && (
        <div className="absolute top-full left-0 mt-2 p-4 w-full bg-gray-200 rounded-md shadow-lg ">
          <SearchList searchData={searchData} status={loading} />
          {searchData.length > 0 && (
            <div className="flex justify-center mt-2">
              <button
                onClick={handleFullViewButton}
                className="font-bold p-2 hover:bg-secondary/10 rounded-md duration-300"
              >
                see full view
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
