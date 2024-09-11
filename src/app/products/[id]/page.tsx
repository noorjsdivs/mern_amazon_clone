import { paymentBG } from "@/assets";
import AddToCartBtn from "@/components/Buttons/AddToCartBtn";
import { fetchData } from "@/components/hooks/fetchData";
import ProductImages from "@/components/Products/ProductImages";
import Container from "@/Container/Container";
import { Metadata } from "next";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

interface Props {
  searchParams: {
    id: string;
  };
}

export const metadata: Metadata = {
  title: ` Single Product | Amazon Clone app`,
};

const SingleProduct = async ({ searchParams }: Props) => {
  const { id } = searchParams;
  const endpoint = `https://dummyjson.com/products/${id}`;
  const product = await fetchData(endpoint);
  const newPrice = product?.price - product?.discountPercentage / 100;

  return (
    <Container className="py-2 px-3 lg:px-5 lg:py-10">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <ProductImages product={product} />
        </div>
        <div className="col-span-6 px-1 lg:px-20 flex flex-col gap-3">
          <h2 className="text-3xl font-bold flex items-center justify-between">
            {product?.title}{" "}
            <p className="font-semibold text-sm bg-green-400 rounded-md px-2 py-1 text-white">
              {product?.availabilityStatus}
            </p>
          </h2>
          <div className="flex items-center justify-between mt-5">
            <p className="text-lg font-bold ">
              <del className="text-gray-500 font-normal">${product?.price}</del>{" "}
              <span>${newPrice.toFixed(2)}</span>
            </p>
            <p className="font-bold flex items-center gap-1">
              <span className="flex items-center gap-1 text-md text-orange-500">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStarBorder />
                <MdOutlineStarBorder />
              </span>
              ({product?.rating} reviews)
            </p>
          </div>
          <p className="font-semibold flex items-center gap-1 mt-3">
            <FaEye /> {product?.stock}+{" "}
            <span className="font-normal">
              peoples are viewing this right now
            </span>
          </p>
          <p>{product?.description}</p>
          <p className="font-semibold">
            Warranty :{" "}
            <span className="font-normal">{product?.warrantyInformation}</span>
          </p>
          <p className="font-semibold">
            Brand : <span className="font-normal">{product?.brand}</span>
          </p>
          <p className="font-semibold">
            Category : <span className="font-normal">{product?.category}</span>
          </p>
          {/* <p className="font-semibold">
            Tags :{" "}
            <span className="font-normal">
              {product?.tags[0]}, {product?.tags?.[1]}
            </span>
          </p> */}
          <div>
            <AddToCartBtn product={product}/>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            {" "}
            <Image src={paymentBG} alt="payment image" />
            <p className="text-lg">Guaranted secure online paymnets</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
