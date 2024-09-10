import { useSelector } from "react-redux";
import Container from "../Container";
import CartProduct from "./CartProduct";


const CartProducts = () => {
  const selector = useSelector((state) => state.shopping.cart);
  console.log("cartproduct", selector)
  return (
    <Container className="mt-6">
        <h1 className="text-3xl text-black font-semibold">Shopping Cart</h1>

        <div className="grid grid-cols-5 gap-5">
            {/* left */}
            <div className="col-span-3">
               {
                selector.map((item) =>(
                    <CartProduct key={item.id} product={item}/>
                    
                ))
               }

            </div>
            <div className="col-span-2 bg-red-400">
                <h1>right</h1>

            </div>
        </div>

    </Container>
  );
};

export default CartProducts;
