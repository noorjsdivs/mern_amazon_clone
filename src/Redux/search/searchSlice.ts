import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: {
    category: "All",
    search_query: "",
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.search.category = action?.payload;
    },
    setSearchQuery: (state, action) => {
      state.search.search_query = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setCategory, setSearchQuery } = searchSlice.actions;
