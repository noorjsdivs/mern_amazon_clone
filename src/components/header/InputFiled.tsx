"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const InputField = () => {
  const [searchTerm, setSearchTerm] = useState(""); // To store the search input
  const [products, setProducts] = useState([]); // To store the fetched products
  const router = useRouter();

  // Fetch data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products); // Store the products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle search and redirect to the first matching product page
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm) {
      const matchingProduct = products.find((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (matchingProduct) {
        router.push(`/product/${matchingProduct.id}`);
        toast.success(" matching product found");
      } else {
        toast.error("No matching product found");
      }
    }
    setSearchTerm("")
  };

  return (
    <div className="relative w-full">
      {/* Search input form */}
      <form
        className="flex h-10 w-full items-center justify-between relative"
        onSubmit={handleSearch}
      >
        <input
          className="w-full px-4 py-2 rounded-l-md border-2 border-gray-300 hover:border-yellow-400 duration-300 text-black outline-none"
          name="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <button
          type="submit"
          className="bg-yellow-500 py-3 px-3 rounded-r-md hover:bg-yellow-600 transition-all duration-300"
        >
          <IoSearch size={20} color="white" />
        </button>
      </form>
    </div>
  );
};

export default InputField;
