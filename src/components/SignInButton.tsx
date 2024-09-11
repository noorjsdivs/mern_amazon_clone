import React from 'react'
import { BiCaretDown } from 'react-icons/bi'

const SignInButton = () => {
  return (
    <form className='text-xs text-gray-100 flex flex-col justify-center items-start headerItem'>
        <p>Hello, sign in</p>
        <button className='text-white font-bold flex items-center'>
            Account & Lists{" "}
            <span>
                <BiCaretDown/>
            </span>
        </button>
    </form>
  )
}

export default SignInButton