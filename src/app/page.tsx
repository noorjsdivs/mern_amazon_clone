import CarouselBanner from "@/components/CarouselBanner";
import { Metadata } from "next";
import Link from "next/link";


export const metadata:Metadata={
title: "Home | Amazon 2.0"
}

export default function Home() {
  return (
    <div>
      <CarouselBanner/>
   
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
     
      <div className="flex flex-col items-start max-w-2xl mx-auto gap-3">
        <h2 className="text-4xl font-bold underline underline-offset-4 decoration-[1px] text-blue-300 hover:text-blue-500 duration-200 cursor-pointer">
          Amazon Clone Application
        </h2>
        <div>
          <p>
            Create you own branch then start making your todo application. Make
            sure to use checkout or switch to move in your branch then start
            working. Make push from your own branch and please do not try to
            push in main branch directly.
          </p>
        </div>
        <div className="w-full">
          <p className="text-lg font-bold my-3 underline underline-offset-2 decoration-[1px]">
            Functionalities included:
          </p>
          <ul className="flex flex-col text-white font-medium tracking-wide gap-2">
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Make as same as github link</span>
              <span className="listBottom">Make as same as github link</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Clean design</span>
              <span className="listBottom">Clean design</span>
            </li>
            <li className="relative h-6 flex items-center justify-center overflow-hidden group duration-300 hover:cursor-wait">
              <span className="listTop">Follow best practice</span>
              <span className="listBottom">Follow best practice</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold my-3 decoration-[1px]">
            github repository link:{" "}
            <Link
              href="https://github.com/noorjsdivs/amazon-clone.git"
              className=" text-sm underline underline-offset-2 decoration-[1px] tracking-wide font-medium"
            >
              https://github.com/noorjsdivs/amazon-clone.git
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
