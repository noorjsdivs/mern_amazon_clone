"use client"
import { signOut, useSession } from "next-auth/react"
import { MdMenu } from "react-icons/md"


const BottomHeader = () => {

  const { data: session } = useSession();
   
  return (
    <div className="bg-amazonBlue/90 text-white p-1 cursor-pointer">
        <ul className="flex mx-10  p-1 ">
            <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300"><MdMenu /> All</li>
            <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300">Today's Deals</li>
            <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300">Customer Service</li>
            <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300">Registry</li>
            <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300">Gift Cards</li>
            <li className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300">Sell</li>
          {
            session?.user &&   <p onClick={() => signOut()} className="border border-gray-700 hover:border flex gap-1 items-center border-transparent px-4 hover:border-yellow-500 transition-all duration-300">LogOut</p>
          }
        </ul>

    </div>
  )
}

export default BottomHeader