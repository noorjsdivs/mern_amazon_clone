import { ProductType } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface InitialState {
      cart: ProductType[];
      userInfo: any;
}

const initialState: InitialState = {
      cart: [],
      userInfo: null,
};

export const amazonSlice = createSlice({
      // name
      name: "amazon",
      // initioalState
      initialState,

      reducers: {
            addToCart: (state, action) => {
                  const amazonProduct = state.cart.find((item) => item.id === action.payload.id)
                  if (amazonProduct) {
                        toast.error("Product already exit");
                        // @ts-ignore
                        amazonProduct.quantity! += 1
                  } else {
                        // @ts-ignore
                        state.cart.push({ ...action.payload, quantity: 1 })
                        toast.success("Product added successfully!")
                  }
            },

            cartDelete: (state, action) => {
                  state.cart = state.cart.filter((item) => item.id !== action.payload)
            },

            increase: (state, action) => {
                  const amazonProduct = state.cart.find((item) => item.id === action.payload)
                  if (amazonProduct) {
                        //@ts-ignore
                        amazonProduct.quantity! += 1
                  }
            },

            decrease: (state, action) => {
                  const amazonProduct = state.cart.find((item) => item.id === action.payload)
                  if (amazonProduct) {
                        //@ts-ignore
                        amazonProduct.quantity! -= 1
                  }
            },


            addToUser: (state, action) => {
                  state.userInfo = action.payload
            },

            removeUser: (state) => {
                  state.userInfo = null
            }

      }


})

export const { addToUser, removeUser, addToCart, decrease, increase, cartDelete } = amazonSlice.actions;
export default amazonSlice.reducer;