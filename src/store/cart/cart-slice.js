import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers : {
        addItem: (state, action) => {},
        updateItem: (state, action) => {},
    }
})