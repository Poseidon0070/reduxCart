import { createSlice } from '@reduxjs/toolkit'

let cartSlice = createSlice({
    name : 'Cart',
    initialState : {
        items : [],
        totalQuantity : 0
    },
    reducers : {
        addItem : (state, action) => {
            let newItem = action.payload
            let existingItem = state.items.find((item) => item.id === newItem.id)
            if(!existingItem) {
                state.items.push({
                    title : newItem.title,
                    id : newItem.id,
                    description : newItem.description,
                    price : newItem.price,
                    totalAmount : newItem.price,
                    quantity : 1
                })
            }
            else {
                existingItem.quantity++;
                existingItem.totalAmount = existingItem.totalAmount + newItem.price
            }
        },

        removeItem : (state, action) => {
            let itemId = action.payload
            let existingItem = state.items.find((item) => item.id === itemId)
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item) => item.id !== itemId)
            }else{
                existingItem.quantity--;
                existingItem.totalAmount = existingItem.totalAmount - existingItem.price
            }
        },
    }
})

export default cartSlice