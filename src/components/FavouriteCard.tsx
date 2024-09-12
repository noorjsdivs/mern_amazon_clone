"use client";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";
import AddToCartBtn from "./AddToCartBtn";
import { IoIosStar } from "react-icons/io";
import PriceFormate from "./PriceFormate";
import { useDispatch } from "react-redux";
import { deletefavourite } from "@/redux/storeSlice";
import toast from "react-hot-toast";


const FavouriteCard = ({ product }) => {
  const [existing, setExisting] = useState(product.images[0]);

  const startArray = Array.from({ length: product?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));
  const dispatch = useDispatch()

  return (
    <Container className="border border-gray-300 rounded-lg shadow-lg  my-3 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <div className="relative w-[250px] h-[260px] mx-auto mb-4 shadow-lg rounded-lg overflow-hidden">
              <Image
                width={270}
                height={280}
                src={existing}
                alt="Product"
                className="object-cover w-full h-full"
                id="mainImage"
              />
            </div>
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {/* Thumbnails */}
              {product.images.map((thumbnail, index) => (
                <div
                  key={index}
                  className={`p-1 border rounded-md shadow-sm cursor-pointer transition-all duration-300 ${
                    existing === thumbnail
                      ? "border-gray-500 shadow-md opacity-100"
                      : "border-gray-200 opacity-80 hover:opacity-100"
                  }`}
                  onClick={() => setExisting(thumbnail)}
                >
                  <Image
                    src={thumbnail}
                    width={80}
                    height={80}
                    className="object-cover w-24 h-24"
                    alt="Thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              {product.title}
            </h2>
            <p className="text-gray-500 mb-4">SKU: {product.category}</p>
            <span className="text-xl font-bold text-slate-900">
              <PriceFormate amount={product.price} />
            </span>

            {/* Ratings */}
            <div className="flex items-center gap-2 mb-4">
              <span className="ml-2 text-gray-600">{product.rating}</span>
              <span className="text-yellow-500 flex">{startArray}</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Add to Cart Button */}
            <div className="flex gap-6">
              <div className="flex space-x-4 mb-6">
                <AddToCartBtn product={product} className="" />
              </div>
              <div
              onClick={() => dispatch(deletefavourite(product.id), toast.success("delete success"))}
                className="flex space-x-4 mb-6"
              >
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FavouriteCard;
