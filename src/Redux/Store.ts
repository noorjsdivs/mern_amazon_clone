import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/Redux/cart/cartSlice';
import userReducer from '@/Redux/user/userSlice';
import favoriteReducer from '@/Redux/favorite/favoriteSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        favorite:  favoriteReducer

    }
})