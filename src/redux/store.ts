import { configureStore } from '@reduxjs/toolkit'

import shoppingReducer from "./storeSlice"


export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
})