"use client"
import { store } from "@/redux/store"
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'

interface Props {
  children: React.ReactNode
}

const LayOut = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </Provider>

  )
}

export default LayOut;