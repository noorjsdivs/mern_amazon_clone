import { FaAmazon, FaSpinner } from "react-icons/fa"


const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="flex flex-col items-center space-y-2">
      <FaAmazon className="animate-spin text-yellow-500 text-6xl" />
      <p className="text-gray-700 font-medium">Amazoon-Loading...</p>
    </div>
  </div>
  )
}

export default Loading