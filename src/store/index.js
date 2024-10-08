import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./cart/cart-slice";


export default configureStore({
    reducer:{
        CART: cartSlice.reducer
    }
});