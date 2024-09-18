import {  configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/Redux/cart/cartSlice";
import userReducer from "@/Redux/user/userSlice";
import favoriteReducer from "@/Redux/favorite/favoriteSlice";
import searchReducer from '@/Redux/search/searchSlice';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage,
};
const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
};
const favoritePersistConfig = {
  key: "favorite",
  version: 1,
  storage,
};

const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const favoritePersistedReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);



const store = configureStore({
  reducer: {
    cart: cartPersistedReducer,
    user: userPersistedReducer,
    favorite: favoritePersistedReducer,
    search: searchReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

const persistor = persistStore(store);
export default store;
export { persistor };
