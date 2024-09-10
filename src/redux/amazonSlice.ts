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
                  const shofyProduct = state.cart.find((item) => item.id === action.payload.id)
                  if (shofyProduct) {
                        toast.error("Product already exit");
                        // @ts-ignore
                        shofyProduct.quantity! += 1
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
                  const shofyProduct = state.cart.find((item) => item.id === action.payload)
                  if (shofyProduct) {
                        //@ts-ignore
                        shofyProduct.quantity! += 1
                  }
            },

            decrease: (state, action) => {
                  const shofyProduct = state.cart.find((item) => item.id === action.payload)
                  if (shofyProduct) {
                        //@ts-ignore
                        shofyProduct.quantity! -= 1
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