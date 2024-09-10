"use client"
import { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { cartIcon, logo } from "@/assets";
import { CgSearch } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import BottomHeader from "./BottomHeader";
import { FaUser } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { addToUser, removeUser } from "@/redux/amazonSlice";

const Header = () => {
      const [close, setClose] = useState("");
      const { data: session } = useSession()

      const dispatch = useDispatch()
      //@ts-ignore
      const { cart } = useSelector((state) => state.amazon)

      useEffect(() => {
            if (session) {
                  dispatch(addToUser(session?.user))
            } else {
                  dispatch(removeUser())
            }
      }, [session?.user])


      return (
            <div>
                  <div>
                        <div className='bg-amazonBlue text-lightText py-2'>
                              <Container className="flex items-center justify-between flex-wrap lg:flex-nowrap">
                                    {/* Logo */}
                                    <Link href={"/"}>
                                          <Image className='h-10 w-40 mt-4' src={logo} alt='logoImage' />
                                    </Link>

                                    {/* Location */}
                                    <div className='flex items-center gap-2 mt-2 lg:mt-0'>
                                          <SlLocationPin size={25} />
                                          <div className='text-sm'>
                                                <h1>Deliver to</h1>
                                                <p>USA</p>
                                          </div>
                                    </div>

                                    {/* Search Bar */}
                                    <div className='flex items-center relative mt-2 lg:mt-0 w-full lg:w-auto'>
                                          <input
                                                value={close}
                                                onChange={(e) => setClose(e.target.value)}
                                                placeholder='Search amazon...'
                                                type="text"
                                                className='py-2 placeholder:text-gray-700 text-gray-700 outline-none w-full lg:w-[500px] pr-10 pl-4'
                                          />
                                          <button className='bg-amazonYellowDark py-[10px] px-3 text-gray-800'>
                                                <CgSearch size={20} />
                                          </button>
                                          {close && (
                                                <VscClose onClick={() => setClose("")} className='absolute right-14 top-2.5 text-gray-800 cursor-pointer  duration-300 hover:text-red-500' size={20} />
                                          )}
                                    </div>

                                    {/* Account & Lists */}
                                    {/* user */}
                                    {
                                          session?.user ?
                                                <div className='mt-4 lg:mt-0 flex items-center gap-4'>
                                                      <div className="rounded-full py-1 px-1">
                                                            <Image className="h-8 w-8 rounded-full" src={session?.user?.image!} alt="userImage" width={200} height={200} />
                                                      </div>
                                                      <div>
                                                            <h1 className='text-xs lg:text-[14px]'>Hello, <span>{session?.user.name}</span></h1>
                                                            <h1 className='text-xs sm:text-sm'>Account & Lists</h1>
                                                      </div>
                                                </div>
                                                : <div onClick={() => signIn()} className='mt-4 lg:mt-0 flex items-center gap-4'>
                                                      <div className="border border-gray-300 lg:py-2 lg:px-2 py-1 px-1 rounded-full lg:text-[18px] text-[16px]">
                                                            <FaUser />
                                                      </div>
                                                      <div>
                                                            <h1 className=''>Hello, Sign in</h1>
                                                            <h1 className='text-xs sm:text-sm'>Account & Lists</h1>
                                                      </div>
                                                </div>
                                    }

                                    {/* Marked & Favorite */}
                                    <div className=' mt-4 lg:mt-0'>
                                          <h1 className='flex items-center gap-2 text-sm'>
                                                Marked
                                                <span className='border border-red-400 text-red-400 px-2 flex items-center justify-center h-4 w-4 text-xs'>1</span>
                                          </h1>
                                          <h1 className='text-xs sm:text-sm'>& Favorite</h1>
                                    </div>

                                    {/* Cart */}
                                    <Link href={"/cart"}>
                                          <div className='flex items-center gap-2 text-white relative mt-4 lg:mt-0'>
                                                {/* <PiShoppingCartSimpleLight size={30} /> */}
                                                <Image className="h-8 w-10 relative" src={cartIcon} alt="cartImage" />
                                                <h1 className='text-[18px]'>Cart</h1>
                                                {/* Length */}
                                                <span className='absolute bottom-5 text-red-400 left-[17px] flex items-center justify-center text-xs'>{cart?.length > 0 ? cart.length : "0"}</span>
                                          </div>
                                    </Link>
                              </Container>
                        </div>
                        <BottomHeader />
                  </div>
            </div>
      );
};

export default Header;