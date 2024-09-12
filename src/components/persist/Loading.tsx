import React from "react";
import Spinner from "../animation/Spinner";

const Loading = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        {/* <h1 className="text-4xl ">Loading...</h1> */}
        <Spinner/>
      </div>
    </div>
  );
};

export default Loading;
