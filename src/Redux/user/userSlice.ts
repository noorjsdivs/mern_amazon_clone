import { createSlice } from "@reduxjs/toolkit";
import { execOnce } from "next/dist/shared/lib/utils";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: 'user slice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            alert('add user')
        }
    }
})

export default userSlice.reducer;
export const {addUser} = userSlice.actions;