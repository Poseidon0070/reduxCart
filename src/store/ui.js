import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
    name : 'UI',
    initialState : {
        cartVisibility : false,
        notification : null
    },
    reducers : {
        toggle : (state) => {
            state.cartVisibility = !state.cartVisibility
        },
        notification : (state, action) => {
            state.notification = {
                status : action.payload.status,
                title : action.payload.title,
                message : action.payload.message
            }
        }
    }
})

export default uiSlice