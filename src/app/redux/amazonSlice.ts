import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../../type";
import toast from "react-hot-toast";

interface UserInfoType {
  id: string;
  name: string;
  email: string;
}

interface InitialState {
  cart: ProductType[];
  userInfo: UserInfoType | null;
}

const initialState: InitialState = {
  cart: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon_Clone",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const existingproducts = state?.cart.find(
        (item) => item?.id === action.payload?.id
      );

      if (existingproducts) {
        existingproducts.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(
          `${action?.payload?.title.slice(0, 10)} added successfully`
        );
      }
    },
    deleteItems: (state, action) => {
      state.cart = state.cart.filter((item) => item?.id !== action.payload);
    },
    increaseItems: (state, action) => {
      const existingproducts = state.cart.find(
        (item) => item?.id === action.payload
      );
      if (existingproducts) {
        existingproducts.quantity! += 1;
      }
    },
    decreaseItems: (state, action) => {
      const existingproducts = state.cart.find(
        (item) => item?.id === action.payload
      );
      if (existingproducts) {
        existingproducts.quantity! -= 1;
      }
    },
    adduser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addtocart,
  deleteItems,
  increaseItems,
  decreaseItems,
  adduser,
  removeUser,
} = amazonSlice.actions;
export default amazonSlice.reducer;
