import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../../../type";
import toast from "react-hot-toast";

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart Slice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<productType>) => {
            const existingProduct = state.cart.find(
              (obj: productType, index) => obj?.id === action.payload?.id
            );
      
            if (!existingProduct) {
              state.cart.push({ ...action?.payload, quantity: 1 });
      
              toast.success("Cart added!");
            } else {
              existingProduct.quantity! += 1;
              toast.success("Increase product quantity!");
            }
          },
        removeToCart: (state, action) => {
            alert('remove to cart')
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeToCart} = cartSlice.actions;