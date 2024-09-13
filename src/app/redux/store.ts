import { configureStore } from "@reduxjs/toolkit";
import amazoneReducers from "./amazoneSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, amazoneReducers);
export const store = configureStore({
  reducer: {
    amazone: persistedReducer,
  },
});

export const persiststore = persistStore(store);
