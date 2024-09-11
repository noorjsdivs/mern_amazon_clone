import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marked: []
}

const markedSlice = createSlice({
    name: 'favorite slice',
    initialState,
    reducers: {
        addToMarded: (state, action) => {
            alert('add to marked');
        }
    }
})

export default markedSlice.reducer;
export const {addToMarded} = markedSlice.actions;