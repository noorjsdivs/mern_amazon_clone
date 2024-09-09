import { IoSearch } from "react-icons/io5"


const InputFiled = () => {
  return (
    <div className="flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative ">
        <input 
          className="w-full px-4 py-2 rounded-l-md border-2 border-gray-300 hover:border-yellow-400     duration-300 text-black outline-none" 
          type="text" 
          placeholder="Search products..." 
        />
        {/* Search Button with Icon */}
        <button className="bg-yellow-500  py-3 px-3 rounded-r-md hover:bg-yellow-600 transition-all duration-300">
          <IoSearch size={20} color="white" />
        </button>
      </div>
  )
}

export default InputFiled