import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favorite: [],
  addUser: null,
};

const blinkSlice = createSlice({
  name: "blink",
  initialState,
  reducers: {
    addToCart: (state: any, action) => {
      const existingProduct = state?.cart?.find(
        (item: any) => item?.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    addToFavorite: (state: any, action) => {
      const existingProduct = state?.cart?.find(
        (item: any) => item?.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.favorite.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state: any, action) => {
      const existingProduct = state?.cart?.find(
        (item: any) => item?.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state: any, action) => {
      const existingProduct = state?.cart?.find(
        (item: any) => item?.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity -= 1;
      }
    },
    removeFromCart: (state: any, action) => {
      state.cart = state.cart.filter(
        (item: any) => item?.id !== action.payload
      );
    },
  },
});

export const { addToCart, addToFavorite , increaseQuantity, decreaseQuantity, removeFromCart} = blinkSlice.actions;
export default blinkSlice.reducer;
