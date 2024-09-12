import { RotatingLines } from "react-loader-spinner";

export default function LoadingPage() {
  return (
    <div className="w-screen h-screen bg-black/80 fixed top-0 left-0 flex flex-col gap-4 items-center justify-center">
      <RotatingLines
        visible={true}
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-lines-loading"
      />
      <p className="text-white text-2xl font-bold tracking-widest">
        Loading...
      </p>
    </div>
  );
}
