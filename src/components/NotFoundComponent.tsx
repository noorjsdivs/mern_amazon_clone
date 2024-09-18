import Link from 'next/link'
import React from 'react'

interface Props {
  title?: string,
  status?: number
}

const NotFoundComponent = ({title = "Page Not Found", status = 404}: Props) => {
  return (
    <div className="relative w-full h-[80vh]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <h1 className="text-gray-400 text-4xl font-bold">{status}</h1>
        <h3>
          {title}
          <Link
            href={"/"}
            className="text-darkYellow hover:text-black duration-300 font-semibold underline"
          >
            {" "}
            Go To Home
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default NotFoundComponent