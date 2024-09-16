import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./blinkSlice";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, storeReducer)

export const store = configureStore({
    reducer:{
        blink: persistedReducer
    }
})
export  let persistor = persistStore(store)
