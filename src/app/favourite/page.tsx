"use client"
import FavouriteCard from "@/components/FavouriteCard";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ProductType } from "../../../type";
interface StateType {
  shopping: {
    favouriteCart: ProductType[]; // Assuming favouriteCart is an array of products
  };
}


const Favourite = () => {

  const favourite = useSelector((state:StateType) => state.shopping.favouriteCart);



  return (
    <div>
     <div>
    {
      favourite.length ? <> {
        favourite.map((item) =>(
          <FavouriteCard key={item.id} product={item}/>
        ))
      }</> : <div className="flex flex-col items-center justify-center py-20 mb-4 bg-gray-100 rounded-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
       Your favourite Product Not Available
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the product you are looking for is not available.
      </p>
      <Link href="/">
        <p className="px-6 py-3 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition ease-in-out">
          Go Back to Home
        </p>
      </Link>
    </div>
    }
     </div>
    </div>
  )
}

export default Favourite