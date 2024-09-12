import Image from "next/image";
import { productType } from "../../type";
import Link from "next/link";
import AddToCart from "./AddToCart";
export interface Props {
  product: productType;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="border  border-lightText hover:shadow-lg hover:shadow-black/30 duration-200 group rounded-md overflow-hidden">
      <div className=" relative bg-gray-100 py-2">
        <Link
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          }}
        >
          <Image
            src={product?.images[0]}
            alt="products Image"
            width={500}
            height={500}
            className="w-full h-48 object-contain  hover:scale-110 duration-200 cursor-pointer"
          />
          <span className="absolute top-1 right-2 border border-amazone_light px-4 py-1 rounded-3xl text-sm font-semibold text-gray-700">
            {product?.discountPercentage}%
          </span>
        </Link>
      </div>
      {/* description */}
      <div className="px-2 py-2">
        <div className="flex flex-col gap-y-1">
          <p className="text-base font-semibold text-amazon_dark tracking-wide">
            {product?.title}
          </p>
          <p className="text-sm text-gray-700">
            {product?.description.slice(0, 52)}...
          </p>
          <p className="text-base text-amazon_dark font-semibold">
            ${product?.price}
          </p>
          <p className="text-sm">
            Catagories:{" "}
            <span className="font-semibold">{product?.category}</span>
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
