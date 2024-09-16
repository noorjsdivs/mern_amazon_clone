"use client"
import { ThreeCircles } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='w-full h-full bg-black/80 absolute top-0 left-0 
    flex flex-col items-center justify-center'>
        {/* <DotLoader
         color="#a02f2f"
         cssOverride={{}}
         loading
         size={63}
         speedMultiplier={4}
        /> */}
         <ThreeCircles
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        <p className='text-white text-2xl font-bold tracking-widest'> Loading....</p>
    </div>
  )
}

export default Loading