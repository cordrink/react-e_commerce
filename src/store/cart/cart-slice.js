import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers : {
        addItem: (state, action) => {
            const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id);

            if (indexItemAdd !== -1) {
                const updateQuantity = {
                    ...state.cart[indexItemAdd],
                    quantity: action.payload.quantity + state.cart[indexItemAdd].quantity
                }

                const newArr = [...state.cart]
                newArr.splice(indexItemAdd, 1, updateQuantity);

                state.cart = newArr;
            } else {
                const newArr = [...state.cart];
                newArr.push(action.payload);
                state.cart = newArr;
            }
            console.log(state.cart);
        },
        updateItem: (state, action) => {},
    }
})

const {addItem, updateItem} = cartSlice.actions;

export {addItem, updateItem};