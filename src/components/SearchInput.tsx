'use client'

import { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

export default function SearchInput() {
  const [searchQuery,setSearchQuery] = useState('')
  return (
    <div className='flex-1 h-10 mx-4 hidden md:inline-flex relative'>
      <input type='text' placeholder='search amazon' 
      
      className='w-full h-full pl-4 text-black pr-6 focus-visible:border-amazonOrange border-[3px] border-transparent outline-none rounded-md'
      onChange={(e)=>setSearchQuery(e.target.value)}
      value={searchQuery}
      
      />
      {searchQuery && (

      <MdOutlineClose  onClick={(e)=>setSearchQuery('')} className='text-black text-xl hover:text-red-600 absolute top-2.5 right-12 cursor-pointer duration-200'/>
      )}
      <span>
      <HiOutlineSearch className='text-black text-sm  absolute top-0 right-0 bg-amazonOrange w-10 h-full flex items-center justify-center cursor-pointer duration-200 rounded-br-md rounded-tr-md p-2'/>
      </span>
    </div>
  )
}
