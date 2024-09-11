import { paymentImage } from "@/assets";
import Image from "next/image";
import { MdStar } from "react-icons/md";
import AddToCartBtn from "./AddToCartBtn";
import PriceFormate from "./PriceFormate";
import { FaRegEye } from "react-icons/fa";
import ProductImage from "./ProductImage";
import PriceTag from "./PriceTag";
import Container from "./Container";
import { IoIosStar } from "react-icons/io";


const SinglePage = ({product}) => {

    const startArray = Array.from({ length: product?.rating }, (_, index) => (
        <span key={index} className="text-yellow-400">
          <IoIosStar />
        </span>
      ));


  return (
    <Container className="mb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <ProductImage product={product} />
      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">{product?.title}</h2>
        <div className="flex items-center justify-between">
          <PriceTag
            regularPrice={product?.price + product?.discountPercentage / 100}
            className="text-xl"
            discountedPrice={product?.price - product?.discountPercentage / 100}
          />
          <div className="flex items-center gap-1">
          <p className="flex items-center gap-1">{startArray}</p>
          <p>({product.rating} reviews)</p>
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
            <PriceFormate amount={product?.discountPercentage / 100} />
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
      {/* Reviews */}
      {/* <div className="p-10 bg-[#f7f7f7] col-span-2 flex items-center flex-wrap gap-10">
        {product?.reviews?.map((item) => (
          <div
            key={item?.reviewerName}
            className="bg-white/80 p-5 border-[1px] border-amazonOrangeDark/50 rounded-md hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-1"
          >
            <p className="text-base font-semibold">{item?.comment}</p>
            <div className="text-xs">
              <p className="font-semibold">{item?.reviewerName}</p>
              <p className="">{item?.reviewerEmail}</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {Array?.from({ length: 5 })?.map((_, index) => (
                  <MdStar
                    key={index}
                    className={`${
                      index < item?.rating
                        ? "text-yellow-500"
                        : "text-lightText"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
    </Container>
  )
}

export default SinglePage