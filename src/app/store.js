import { configureStore } from "@reduxjs/toolkit";
import menuCustom from "../reducers/menuCustom";
import menuScale from "../reducers/menuScale";
import cart from "../reducers/cart";

const store = configureStore({
    reducer: {
        menuCustom : menuCustom,
        menuScale : menuScale,
        cart: cart
    }
});

export default store