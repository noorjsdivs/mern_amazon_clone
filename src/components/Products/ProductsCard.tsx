import Container from "@/Container/Container";
import { fetchData } from "../hooks/fetchData";
import Image from "next/image";
import Link from "next/link";

const ProductsCard = async () => {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await fetchData(endpoint);

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {products?.slice(0, 12).map((item: any) => (
          <div
            key={item?._id}
            className=" border border-gray-200 rounded-md  w-72 "
          >
            <div className="bg-slate-100 relative h-72">
              <Link
                href={{
                  pathname: `products/${item?.id}`,
                  query: { id: item?.id },
                }}
              >
                <Image
                  src={item?.images[0]}
                  alt="product image"
                  height={400}
                  width={200}
                  className="w-full h-full object-contain hover:scale-110 transition-all duration-300"
                />
                <span className="absolute top-0 left-0 px-4 font-semibold capitalize bg-orange-300 rounded-md">
                  {item?.category}
                </span>
                <span className="absolute top-0 right-0 px-4 font-semibold capitalize bg-green-300 rounded-md">
                  {item?.discountPercentage}%
                </span>
              </Link>
            </div>
            <div className="px-4 mt-1 mb-5 flex flex-col gap-2">
              {" "}
              <p className="text-md font-semibold">{item?.title}</p>
              <p className="text-sm text-gray-500">
                {item?.description.slice(0, 60)}...
              </p>
              <p className="text-xl font-bold">${item?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductsCard;
