'use client'
import { signIn } from "next-auth/react";
import React from "react";

const SignIn = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div>
        <form>
          {/* <input type="email" placeholder="Email" /> */}
        </form>

        <button onClick={()=> signIn('google')} className="px-4 py-2 rounded-md bg-yellow hover:bg-darkYellow duration-300">SignIn with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
