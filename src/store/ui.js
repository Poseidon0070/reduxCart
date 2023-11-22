import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
    name : 'UI',
    initialState : {
        cartVisibility : false
    },
    reducers : {
        toggle : (state) => {
            state.cartVisibility = !state.cartVisibility
        }
    }
})

export default uiSlice