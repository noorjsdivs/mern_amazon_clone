import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../../type";
import toast from "react-hot-toast";
import { stat } from "fs";

interface InitialType {
  cart: productType[];
}

const initialState: InitialType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart Slice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item?.id === action.payload
      );
      if (existProduct) {
        if (existProduct?.quantity! < existProduct?.stock) {
          existProduct.quantity! += 1;
        }
      }
    },
    decreaseQuantity: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item?.id === action.payload
      );
      if (existProduct) {
        if (existProduct?.quantity! > 1) {
          existProduct.quantity! -= 1;
        }
      }
    },
    deleteCartItem: (state, action) => {
      const newArray = state.cart.filter(item => item?.id !== action.payload);
      state.cart = newArray;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, deleteCartItem } =
  cartSlice.actions;