"use client"
import { signIn } from 'next-auth/react';
import React from 'react';
 

const page = () => {
    return (
        <div>
        <div>
      <button onClick={() => signIn('google')}>Sign in with Google</button>
    </div>
        </div>
    );
};

export default page;