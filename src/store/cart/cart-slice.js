import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [
            /*{
                title: "Mug Coding Fuel",
                price: 14.99,
                img: "codingfuel",
                quantity: 1
                id: uuidv4(),
            },*/
        ]
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
        updateItem: (state, action) => {
            const indexItem = state.cart.findIndex(obj => obj.id === action.payload.id);

            const newArr = [...state.cart];
            newArr.splice(indexItem, 1, action.payload);
            state.cart = newArr;
        },
    }
})

const {addItem, updateItem} = cartSlice.actions;

export {addItem, updateItem};