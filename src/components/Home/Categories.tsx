import Image from "next/image";
import { fetchData } from "../hooks/fetchData";
import Container from "@/Container/Container";

const Categories = async () => {
  const endpoint = "https://dummyjson.com/products/category/furniture";
  const { products } = await fetchData(endpoint);
  console.log("productssss", products[3]);
  return (
    <Container>
      <div className="mb-10 grid grid-cols-12 max-w-screen-lg mx-auto gap-0 ">
        <div className="flex items-center gap-5 h-auto w-auto relative col-span-6">
          <Image
            src={products[3]?.images[0]}
            alt="d"
            width={500}
            height={500}
          />
          <div className="bg-gray-700/60 w-[500px] h-[500px] cursor-pointer  absolute top-0 font-bold text-2xl text-white ">
            {" "}
            <span className="absolute top-52 left-32 text-3xl">
              {" "}
              <span className="text-5xl">
                Executive <br />
              </span>{" "}
              Conference Chair
            </span>
          </div>
        </div>
        <div className="col-span-6  p-5">
          <div className="flex items-center gap-5 h-auto w-auto relative col-span-3 -mt-5 mb-5">
            <Image
              src={
                "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png"
              }
              alt="furniture image"
              height={250}
              width={250}
              className="p-5"
            />
            <div className="bg-gray-700/60 w-[350px] h-[230px] cursor-pointer absolute top-0 font-bold text-2xl text-white ">
              {" "}
              <span className="absolute top-20 left-32 text-3xl">
                {" "}
                <span className="text-xl">
                  EU De <br />
                </span>{" "}
                Parfume
              </span>
            </div>
          </div>
          <div className="flex items-center gap-5 h-auto w-auto relative col-span-3">
            <Image
              src={
                "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png "
              }
              alt="furniture image"
              height={250}
              width={250}className="p-5"
            />
            <div className="bg-gray-700/60 w-[350px] h-[230px] cursor-pointer absolute top-0 font-bold text-2xl text-white ">
              {" "}
              <span className="absolute top-16 left-20 text-3xl">
                {" "}
                <span className="text-xl">
                Apple MacBook Pro <br />
                </span>{" "}
                Space Gray
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
