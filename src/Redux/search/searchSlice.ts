import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";
import { initialize } from "next/dist/server/lib/render-server";

const initialState = {
    search: {
        category: 'All',
        search_query: ''
    }
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCategory: (state, action)=> {
            state.search.category = action?.payload;
        },
        getCategory: (state, action) => {

        },
        setSearchQuery: (state, action) => {
            state.search.search_query = action.payload;
        },
        getSearchQuery: (state, action) => {

        }
    }
})

export default searchSlice.reducer;
export const { setCategory, setSearchQuery } = searchSlice.actions;