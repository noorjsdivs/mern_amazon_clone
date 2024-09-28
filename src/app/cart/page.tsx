import CartProducts from "@/components/cart/CartProducts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
const Cartpage = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect("/");
  }
  return (
    <div className="py-10">
      <CartProducts />
    </div>
  );
};

export default Cartpage;
