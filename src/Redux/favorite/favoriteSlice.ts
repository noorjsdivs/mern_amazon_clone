import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../../../type";

interface FavoriteType {
  favorite: productType[];
}

const initialState: FavoriteType = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: "favorite slice",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeToFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
    },
    clearFavorite: (state, action) => {
        state.favorite = [];
    }
  },
});

export default favoriteSlice.reducer;
export const { addToFavorite, removeToFavorite, clearFavorite } = favoriteSlice.actions;
