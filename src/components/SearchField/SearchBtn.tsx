import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { fetchData } from "../hooks/fetchData";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";


const SearchBtn = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);
    const [isInputFocused, setIsInputFocused] = useState(false); 
    const searchContainerRef = useRef(null); 
    useEffect(() => {
      const getData = async () => {
        const endpoint = "https://dummyjson.com/products";
        try {
          const data = await fetchData(endpoint);
          setProducts(data?.products);
        } catch (error) {
          console.error("Error fetching data", error);
        }
      };
      getData();
    }, [products]);
  
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    useEffect(() => {
      const filtered = products.filter((item: any) =>
        item?.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, [searchQuery]);
 
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          searchContainerRef.current &&
          // @ts-ignore
          !searchContainerRef.current.contains(event.target)
        ) {
          setIsInputFocused(false); 
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <div
    ref={searchContainerRef}
    className="flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative"
  >
    <input
      className="w-[600px] h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazonOrange"
      type="text"
      onChange={(e) => setSearchQuery(e.target.value)}
      value={searchQuery}
      placeholder="Search products..."
      onFocus={() => setIsInputFocused(true)} // Set focus state
    />
    {searchQuery && (
      <MdOutlineClose
        onClick={() => setSearchQuery("")}
        className="text-xl  hover:text-red-600 absolute right-14 duration-200 cursor-pointer"
      />
    )}
    <span className="w-12 h-full bg-amazonOrange hover:bg-amazonOrangeDark duration-200 cursor-pointer text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
      <HiOutlineSearch />
    </span>
    {isInputFocused && searchQuery && (
      <div className="absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black">
        {filteredProducts?.length > 0 ? (
          <div className="flex flex-col">
            {filteredProducts?.map((item: any) => (
              <Link
                key={item?.id}                                                                                                      
                href={{
                  pathname: `/products/${item?.id}`,
                  query: { id: item?.id },
                }}
                onClick={() => setSearchQuery("")}
                className="flex items-center gap-x-2 text-base font-medium hover:bg-lightText/30 px-3 py-1.5"
              >
                <CiSearch className="text-lg" /> {item?.title}
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-10 px-5">
            <p className="text-base">
              Nothing matched with{" "}
              <span className="font-semibold underline underline-offset-2 decoration-[1px]">
                {searchQuery}
              </span>{" "}
              please try again.
            </p>
          </div>
        )}
      </div>
    )}
    
  </div>
  )
}

export default SearchBtn