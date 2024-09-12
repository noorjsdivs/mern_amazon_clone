import { paymentImage } from "@/assets";
import AddToCartBtn from "@/components/AddToCartBtn";
import Container from "@/components/Container";
import PriceTag from "@/components/PriceTag";
import ProductImage from "@/components/ProductImage";
import PriceFormat from "@/components/products section/PriceFormat";
import { fetchData } from "@/lib";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdStar } from "react-icons/md";

export const metadata: Metadata = {
  title: "Product page | Your shopping center",
  description: "An amazon clone application for education purpose",
};

interface Props {
  searchParams: {
    id: string;
  };
}
export default async function SingleProductPage({ searchParams }: Props) {
  // find single product using searchParams by called id
  const { id } = searchParams;
  // product ar id take endpoint a set kora
  const endpoint = `https://dummyjson.com/products/${id} `;
  const product = await fetchData(endpoint);
  // console.log(product);

  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          {/* image */}
        <div>
          <ProductImage product={product} />
        </div>
          {/* content / product details  */}
          <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product?.title}</h2>
        <div className="flex items-center justify-between">
          <PriceTag
            regularPrice={product?.price + product?.discountPercentage / 100}
            className="text-xl"
            discountedPrice={product?.price - product?.discountPercentage / 100}
          />
          <div className="flex items-center gap-1">
            <div className="text-base text-lightText flex items-center">
              {Array?.from({ length: 5 })?.map((_, index) => {
                const filled = index + 1 <= Math.floor(product?.rating);
                const halfFilled =
                  index + 1 > Math.floor(product?.rating) &&
                  index < Math.ceil(product?.rating);

                return (
                  <MdStar
                    key={index}
                    className={`${
                      filled
                        ? "text-amazonOrangeDark"
                        : halfFilled
                        ? "text-amazonYellowDark"
                        : "text-lightText"
                    }`}
                  />
                );
              })}
            </div>
            <p className="text-base font-semibold">{`(${product?.rating?.toFixed(
              1
            )} reviews)`}</p>
          </div>
        </div>
        <p className="flex items-center">
          <FaRegEye className="mr-1" />{" "}
          <span className="font-semibold mr-1">250+</span> peoples are viewing
          this right now
        </p>
        <p>
          You are saving{" "}
          <span className="text-base font-semibold text-green-500">
            <PriceFormat amount={product?.discountPercentage / 100} />
          </span>{" "}
          upon purchase
        </p>
        <div>
          <p className="text-sm tracking-wide">{product?.description}</p>
          <p className="text-base">{product?.warrantyInformation}</p>
        </div>
        <p>
          Brand: <span className="font-medium">{product?.brand}</span>
        </p>
        <p>
          Category:{" "}
          <span className="font-medium capitalize">{product?.category}</span>
        </p>
        <p>
          Tags:{" "}
          {product?.tags?.map((item, index) => (
            <span key={index} className="font-medium capitalize">
              {item}
              {index < product?.tags?.length - 1 && ", "}
            </span>
          ))}
        </p>

        <AddToCartBtn
          product={product}
          className=" rounded-md uppercase font-semibold"
        />

        <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
          <Image
            src={paymentImage}
            alt="payment"
            className="w-auto object-cover"
          />
          <p className="font-semibold">Guaranteed safe & secure checkout</p>
        </div>
      </div>
      </div>
    </Container>
  );
}
