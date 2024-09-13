import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../../../type";
import toast from "react-hot-toast";

interface InitialState {
  cart: productType[];
  userInfo: any;
}
const initialState: InitialState = {
  cart: [],
  userInfo: null,
};

export const amazoneSlice = createSlice({
  name: "amazone",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state?.cart?.push({ ...action.payload, quantity: 1 });
        toast.success(
          `${action?.payload?.title.slice(0, 10)} added successfully`
        );
      }
    },
    increase: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decrease: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action?.payload
      );

      if (existingProduct) {
        existingProduct.quantity! -= 1;
      }
    },
  },
});

export const { addtocart, increase, decrease } = amazoneSlice.actions;
export default amazoneSlice.reducer;
