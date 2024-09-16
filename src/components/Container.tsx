import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Container = ({children, className} : Props) => {
  return (
    <div className={twMerge('px-2 md:px-4 py-3 relative container mx-auto', className)}>{children}</div>
  )
}

export default Container