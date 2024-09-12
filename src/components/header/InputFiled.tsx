"use client";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import ProductList from "../productlist/ProductList";
import ProductCard from "../ProductCard";

const InputFiled = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const allData = data.products;
        setCards(allData);
        setFilteredCards(allData);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.toLowerCase();
    const filteredResults = cards.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );
    setFilteredCards(filteredResults);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative"
      >
        <input
          className="w-full px-4 py-2 rounded-l-md border-2 border-gray-300 hover:border-yellow-400 duration-300 text-black outline-none"
          name="search"
          placeholder="Search products..."
        />
        <button
          type="submit"
          className="bg-yellow-500 py-3 px-3 rounded-r-md hover:bg-yellow-600 transition-all duration-300"
        >
          <IoSearch size={20} color="white" />
        </button>
      </form>
    </>
  );
};

export default InputFiled;
