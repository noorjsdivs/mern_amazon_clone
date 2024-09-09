import { RiMenuLine } from "react-icons/ri";
import Container from "./Container";
import { signIn, signOut, useSession } from "next-auth/react";

const BottomHeader = () => {
      const { data: session } = useSession()
      return (
            <div className="bg-amazonLight hidden lg:block text-lightText">
                  <Container className="flex items-center gap-4 py-2">
                        <div className="flex items-center gap-2 border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">
                              <RiMenuLine />
                              <h1>All</h1>
                        </div>
                        <h1 className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">Todays Deals</h1>
                        <h1 className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">Customer Service</h1>
                        <h1 className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">Registry</h1>
                        <h1 className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">Gift Cart</h1>
                        <h1 className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">Sell</h1>

                        {
                              session?.user ? <button className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer" onClick={() => signOut()}>Sign out</button>
                                    :
                                    <button onClick={() => signIn()} className="border border-gray-600 py-[2px] px-2 hover:border hover:border-amazonYellow duration-300 cursor-pointer">Sign in</button>
                        }
                  </Container>
            </div>
      );
};

export default BottomHeader;