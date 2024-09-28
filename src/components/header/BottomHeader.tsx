"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Container from "../Container";
import { TiThMenu } from "react-icons/ti";

const BottomHeader = () => {
  const { data: session } = useSession();
  return (
    <div className="w-full h-10 bg-amazone_light text-white ">
      <Container className="h-full flex items-center gap-2">
        <p className="flex items-center gap-1 hoverEffect">
          <TiThMenu />
          All
        </p>
        <div className=" hidden md:inline-flex">
          <p className=" flex items-center justify-center text-sm font-medium tracking-wide hoverEffect cursor-pointer">
            Todays Deals
          </p>
          <p className=" flex items-center justify-center text-sm font-medium tracking-wide hoverEffect cursor-pointer">
            Customer Service
          </p>
          <p className=" flex items-center justify-center text-sm font-medium tracking-wide hoverEffect cursor-pointer">
            Registry
          </p>{" "}
          <p className=" flex items-center justify-center text-sm font-medium tracking-wide hoverEffect cursor-pointer">
            Gift Cards
          </p>{" "}
          <p className=" flex items-center justify-center text-sm font-medium tracking-wide hoverEffect cursor-pointer">
            Sell
          </p>
          {session ? (
            <button
              onClick={() => signOut()}
              className=" flex items-center justify-center text-sm font-medium text-amazon_yellow hover:text-red-500  
                          tracking-wide hoverEffect cursor-pointer"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className=" flex items-center justify-center text-sm font-medium text-amazon_yellow hover:text-red-500  
                      tracking-wide hoverEffect cursor-pointer"
            >
              Sign In
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
