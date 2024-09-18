import React from "react";
import { productType } from "../../../type";
import Spinner from "../animation/Spinner";
import Image from "next/image";
import dynamic from "next/dynamic";
import PriceFormate from "../PriceFormate";
import Link from "next/link";
const LoadImage = dynamic(() => import("../ImageSuspanse"), {
  loading: () => <Spinner />,
});

interface Props {
  searchData: productType[];
  status: boolean;
}

const SearchList = ({ searchData, status }: Props) => {
  return (
    <div className="max-h-[70vh] overflow-auto">
      {status ? (
        <div>
          <Spinner className="fill-black" />
        </div>
      ) : (
        <>
          {searchData.length > 0 ? (
            <div className="space-y-2">
              {searchData.map((product) => (
                // Single search item
                <Link
                  href={`/products/${product?.id}`}
                  key={product?.id}
                  className="flex items-center p-2 bg-white hover:bg-white duration-300 group rounded-md"
                >
                  {/* image */}
                  <div className="w-1/6 h-full p-2 rounded-md">
                    <LoadImage
                      image={product?.images[0]}
                      alt={product?.title}
                    />
                  </div>
                  {/* Text */}
                  <div className="w-5/6 p-2">
                    <h1 className="font-bold group-hover:text-darkYellow text-xl duration-300">
                      {product?.title}
                    </h1>
                    <p>{product?.description}</p>
                    <div className="text-nowrap flex items-center gap-2 font-medium">
                      price: <PriceFormate price={product?.price} />
                    </div>
                  </div>
                </Link>
              ))}
              
            </div>
          ) : (
            <div className="flex justify-center items-center h-16"><p>No search result!</p></div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchList;
