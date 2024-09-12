import { configureStore } from "@reduxjs/toolkit";
import amazoneReducers from "./amazoneSlice";

export const store = configureStore({
  reducer: {
    amazone: amazoneReducers,
  },
});
