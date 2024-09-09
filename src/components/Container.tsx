import { twMerge } from "tailwind-merge"

interface Props{
    children:React.ReactNode,
    className:string
}

const Container = ({children, className}:Props) => {
    const newClass = twMerge( "max-w-screen-xl lg:mx-20 px-4 lg:px-0",
    className)

  return (
    <div className={newClass}>
        {children}
    </div>
  )
}

export default Container