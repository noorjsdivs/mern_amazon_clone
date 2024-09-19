import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user slice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser : (state) => {
            state.user = null;
        }
    }
})

export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;