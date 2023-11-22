import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui';
import cartSlice from './cart'

let store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        ui : uiSlice.reducer
    }
})

export const uiAction = uiSlice.actions
export const cartAction = cartSlice.actions
export default store