"use client"
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ product }) => {
      const [imageClick, setImageClick] = useState(product?.images[0])
      return (
            <div className="flex justify-between">
                  <div className="flex flex-col lg:px-10 lg:py-10 py-4">
                        {product.images.map((item, index) => (
                              <button
                                    key={index}
                                    onClick={() => setImageClick(item)}
                                    className={`border mb-2 rounded lg:h-28 lg:w-24 ${item === imageClick && "border-sky-600"}`}
                              >
                                    <div className="border rounded border-gray-400 lg:h-28 lg:w-24">
                                          <Image
                                                src={item}
                                                alt="product-image"
                                                width={200}
                                                height={200}
                                                className="lg:w-full lg:h-full w-16 h-16 object-contain"
                                          />
                                    </div>
                              </button>
                        ))}
                  </div>
                  <div className="lg:border-r-2 border-gray-300 py-4">
                        <Image className="lg:h-[400px] lg:w-96 px-8" src={imageClick} alt="img" height={200} width={200} />
                  </div>
            </div>
      );
};

export default ProductImage;