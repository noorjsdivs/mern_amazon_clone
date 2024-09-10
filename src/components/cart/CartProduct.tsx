import Link from "next/link";
import Image from "next/image";
import { ImCheckmark } from "react-icons/im";
import AddToCartButton from "../AddToCartButton";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { cartDelete } from "@/redux/amazonSlice";
import Container from "../Container";
import PriceFormat from "../PriceFormate";

interface ProductType {
      id: string;
      title: string;
      brand: string;
      category: string;
      images: string[];
      price: number;
      quantity?: number;
      discountPercentage: number;
      availabilityStatus: boolean;
}

const CartProduct = ({ product }: { product: ProductType }) => {

      const dispatch = useDispatch()
      const handleDelete = () => {
            dispatch(cartDelete(product?.id))
            toast.success(`${product?.title.substring(0, 10)} deleted successfully!`)
      }
      return (
            <Container className="flex flex-col lg:flex-row md:flex gap-4 border-b-2 border-amazonYellow relative">
                  {/*product Image start */}
                  <div className="lg:flex flex items-center justify-center">
                        <Link className="" href={{ pathname: `/product/${product.id}`, query: { id: product.id } }}>
                              <Image className="h-48 w-48 lg:border-r-2 border-amazonYellow cursor-pointer" src={product?.images[0]} alt="cartImage" height={200} width={200} />
                        </Link>
                  </div>
                  {/*product Image end */}
                  {/* list section start */}
                  <div>
                        <div>
                              <h1 className="mt-2 text-xl text-gray-800 font-medium ">{product?.title}</h1>
                              <h1 className="text-gray-700 mt-1 text-sm">Brand : {product?.brand}</h1>
                              <h1 className="text-gray-700 mt-1 text-sm">Category : {product?.category}</h1>
                        </div>

                        <div className="flex items-center gap-2 mt-1 mb-1 text-sm">
                              <h1 className="flex items-center gap-2"> <ImCheckmark size={10} className="text-green-500" /> {product?.availabilityStatus && (<p>In Stock</p>)}</h1>
                        </div>
                        <div>
                              <h1 className="flex items-center gap-2 mt-1"> You are saving <PriceFormat className="text-green-500 text-[14px]" amount={product?.price * (product?.discountPercentage / 100) * product?.quantity} /> upon purchase</h1>
                        </div>
                        <div className="flex gap-6 items-center text-start mb-2">
                              <PriceFormat className="mt-4" amount={product?.price * product?.quantity!} />
                              <AddToCartButton product={product} className="gap-4" />
                        </div>
                  </div>
                  {/* list section end */}
                  <button onClick={handleDelete}>
                        <IoClose size={20} className="absolute right-4 top-4 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                  </button>
            </Container >
      );
};

export default CartProduct;