'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/Redux/Store';

interface Props {
    children: React.ReactNode
}

const StoreProvider = ( {children} : Props) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider