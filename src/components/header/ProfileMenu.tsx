"use client";
import { addUser, removeUser } from "@/Redux/user/userSlice";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../type";
import Image from "next/image";

const ProfileMenu = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const user  = useSelector((state: StateType) => state?.user?.user!);

  const handleSignOut = () => {
    signOut();
    dispatch(removeUser(''));
  }

  useEffect(() => {
    if (session?.user) {
      dispatch(addUser(session.user));
    } else {
      dispatch(removeUser(''))
    }
  });
  return (
    <>
      {user ? (
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={user?.image}
              alt="Amazon clone"
              width={48}
              height={48}
              className="rounded-full w-8 h-8"
            />
          </div>
          <div>
            <p>{user?.name}</p>
            <button onClick={handleSignOut} className="font-bold tracking-wider hover:text-darkYellow duration-200">SignOut</button>
          </div>
        </div>
      ) : (
        <div className="px-2 border border-primary hover:border-white duration-200 cursor-pointer">
          <Link href={"/signin"}>
            Hello, sign in <br />
            <span className="font-bold text-nowrap hidden md:inline-flex items-center">
              Accounts & List <TiArrowSortedDown size={24} />
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
