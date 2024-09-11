import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./blinkSlice";

export const store = configureStore({
    reducer:{
        blink: storeReducer
    }
})
