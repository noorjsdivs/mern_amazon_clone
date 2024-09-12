
import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import PriceFormat from "@/components/PriceFormate";
import ProductImage from "@/components/ProductImage";
import { getData } from "@/hooks";
import { ProductType } from "@/type";
import { Metadata } from "next";
import { FaEye } from "react-icons/fa";
import { MdStar } from "react-icons/md";

export const metadata: Metadata = {
      title: "Product View Page | Amazon Clone app",
};


const ProductPage = async ({ params }: { params: ProductType }) => {
      const { id } = params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      // @ts-ignore
      const product: ProductType = await getData(endpoint);

      return (
            <div className="py-10 px-4 lg:px-0">
                  <h1 className="text-center mb-8 lg:text-4xl text-2xl text-green-600 font-medium tracking-wide">Single Product Page</h1>
                  <Container className={"flex flex-col lg:flex-row justify-between gap-6 border-2  border-amazonYellow"}>
                        {/* Image Section */}
                        <div>
                              <ProductImage product={product} />
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-3/4 lg:w-2/3 text-start px-4 md:px-6 mt-4">
                              <h1 className="text-[17px] md:text-2xl lg:text-3xl lg:font-semibold text-gray-700 tracking-wide">{product?.title}</h1>


                              {/* Price Section start */}
                              <div className="flex flex-col lg:flex-row items-center lg:gap-16 lg:justify-start">
                                    <h1 className="text-lg md:text-xl mt-4 flex items-center gap-6 font-medium">
                                          <span className="line-through"> <PriceFormat amount={product?.price + product?.discountPercentage / 100} /> </span> <PriceFormat amount={product?.price} />
                                    </h1>

                                    {/* Rating Section Start */}
                                    <div className="text-base text-lightText flex items-center lg:mt-4">
                                          {Array?.from({ length: 5 })?.map((_, index) => {
                                                const filled = index + 1 <= Math.floor(product?.rating);
                                                const halfFilled =
                                                      index + 1 > Math.floor(product?.rating) &&
                                                      index < Math.ceil(product?.rating);

                                                return (
                                                      <MdStar
                                                            key={index}
                                                            className={`${filled
                                                                  ? "text-amazonOrangeDark"
                                                                  : halfFilled
                                                                        ? "text-amazonYellowDark"
                                                                        : "text-lightText"
                                                                  }`}
                                                      />
                                                );
                                          })}
                                          <p className="text-black font-medium ml-2">{`(${product?.rating?.toFixed(
                                                1
                                          )} reviews)`}</p>
                                    </div>
                                    {/* Rating Section End */}

                              </div>
                              {/* Price Section End */}


                              <div className="flex flex-col lg:flex-row items-center gap-2 mt-4 text-sm md:text-base lg:text-xl">
                                    <div className="flex items-center gap-2">
                                          <FaEye size={20} />
                                          <span className="font-medium">250+ </span>
                                    </div>
                                    <span>People are viewing this right now</span>
                              </div>

                              <h1 className="mt-4 text-sm md:text-base lg:text-lg">{product?.description}</h1>
                              <h1 className="mt-2 text-sm md:text-base lg:text-lg">Brand: {product?.brand}</h1>
                              <h1 className="mt-2 text-sm md:text-base lg:text-lg">Category: {product?.category}</h1>
                              <div className="w-44 mt-2 lg:mb-0 mb-4">
                                    <AddToCartButton className="" product={product} />
                              </div>
                        </div>

                  </Container>
            </div>
      );
};

export default ProductPage;
