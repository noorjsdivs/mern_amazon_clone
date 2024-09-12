// import { configureStore } from '@reduxjs/toolkit'

// import shoppingReducer from "./storeSlice"


// export const store = configureStore({
//   reducer: {
//     shopping: shoppingReducer,
//   },
// })


import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shoppingReducer from "./storeSlice"

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

// Creating a persisted reducer
const persistedReducer = persistReducer(persistConfig, shoppingReducer);

export const store = configureStore({
  reducer: {
    shopping: persistedReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;