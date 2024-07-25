import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./goodsSlice";
import cartReducer from "./cartSlice";
import "../style.css";

const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
});

export default store;
