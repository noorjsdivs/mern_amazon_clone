'use client'

import { fetchData } from '@/lib'
import { Product } from '@/lib/type'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

export default function SearchInput() {
  const [searchQuery,setSearchQuery] = useState('')
  const [products, setProducts] =useState([])
  const [filteredProducts, setFilteredProducts]= useState([])
   
  useEffect(() =>{

    const getData =async () =>{
      const endpoint ="https://dummyjson.com/products/";
      try {
        const data = await fetchData(endpoint);
        setProducts(data?.products);
      } catch (error) {
        console.log("Error fetching data",error)
      }
    }
    getData();
  },[products])

  useEffect(()=>{
    const filtered = products.filter((item:Product)=>
    item?.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  setFilteredProducts(filtered);
  },[searchQuery]);

  return (
    <div className='flex-1 h-10 mx-4 hidden md:inline-flex relative'>
      <input type='text' placeholder='search amazon' 
      
      className='w-full h-full text-black pl-4 pr-6 focus-visible:border-amazonOrange border-[3px] border-transparent outline-none rounded-md'
      onChange={(e)=>setSearchQuery(e.target.value)}
      value={searchQuery}
      
      />
      {searchQuery && (
        <MdOutlineClose onClick={()=> setSearchQuery('')}  className='text-black text-xl absolute top-2.5 right-12 cursor-pointer duration-200'/>
      )}
      <span>
      <HiOutlineSearch className='text-black text-sm  absolute top-0 right-0 bg-amazonOrange w-10 h-full flex items-center justify-center cursor-pointer duration-200 rounded-br-md rounded-tr-md p-2'/>
      </span>
     {searchQuery && (
       <div className='absolute left-0 top-12 w-full mx-auto max-h-96
       bg-white rounded-md overflow-y-scroll cursor-pointer text-black border-2 border-amazonOrangeDark/80'>
         {filteredProducts?.length > 0 ? (
            <div className="flex flex-col">
              {filteredProducts?.map((item: Product) => (
                <Link

                  key={item?.id}
                  href={{
                    pathname: `/product/${item?.id}`,
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