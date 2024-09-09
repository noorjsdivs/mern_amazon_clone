
import Container from "@/components/Container";
import ProductImage from "@/components/ProductImage";
import { getData } from "@/hooks";
import { Metadata } from "next";
import { FaEye } from "react-icons/fa";
export const metadata: Metadata = {
      title: "Product View Page | Amazon Clone app",
};


const ProductPage = async ({ params }) => {
      const { id } = params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      // @ts-ignore
      const product = await getData(endpoint);
      return (
            <div className="py-10">
                  <Container className={"flex flex-col lg:flex-row justify-between gap-10"}>
                        {/* Image Section */}
                        <div>
                              <ProductImage product={product} />
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-3/4 lg:w-2/4 text-start px-4 md:px-6 lg:px-10">
                              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">{product?.title}</h1>
                              <h1 className="text-lg md:text-xl mt-4">
                                    <span className="line-through">$322.88</span> ${product?.price}
                              </h1>
                              <div className="flex items-center gap-2 mt-4 text-sm md:text-base lg:text-xl">
                                    <FaEye size={20} />
                                    <span className="font-semibold">250+ </span>
                                    <span>People are viewing this right now</span>
                              </div>
                              <h1 className="mt-4 text-sm md:text-base lg:text-lg">{product?.description}</h1>
                              <h1 className="mt-2 text-sm md:text-base lg:text-lg">Brand: {product?.brand}</h1>
                              <h1 className="mt-2 text-sm md:text-base lg:text-lg">Category: {product?.category}</h1>
                        </div>

                  </Container>
            </div>
      );
};

export default ProductPage;
