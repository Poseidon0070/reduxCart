import { createSlice } from '@reduxjs/toolkit'
import { uiAction } from './store'
import { cartAction } from './store'

let cartSlice = createSlice({
    name : 'Cart',
    initialState : {
        items : [],
        totalQuantity : 0,
        change : false
    },
    reducers : {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
        },
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
                state.totalQuantity++
            }
            else {
                existingItem.quantity++;
                existingItem.totalAmount = existingItem.totalAmount + newItem.price
                state.totalQuantity++
            }
            state.change = true
        },

        removeItem : (state, action) => {
            let itemId = action.payload
            let existingItem = state.items.find((item) => item.id === itemId)
            if(existingItem.quantity === 1){
                state.items = state.items.filter((item) => item.id !== itemId)
                state.totalQuantity--
            }else{
                existingItem.quantity--
                existingItem.totalAmount = existingItem.totalAmount - existingItem.price
                state.totalQuantity--
            }
            state.change = true
        },
    }
})

// we cannot perform async function inside reducer so we write another function which does not return action object
// but return a function instead which dispatches action.
// redux is prepared to take action objects that return an action. Infact it calls that function actomatically
// ans provides the dispatch argument to it by itself!!!

let sendCartData = (cart) => {
    return (
        async (dispatch) => {
            dispatch(uiAction.notification({
                status : 'pending',
                title : 'Sending...',
                message : 'Sending cart data!'
            }))

            let sendResponse = async() => {
                let response = await fetch("https://react-http-fad6d-default-rtdb.firebaseio.com/cart.json", {
                    method : 'PUT',
                    body : JSON.stringify({
                        items : cart.items,
                        totalQuantity : cart.totalQuantity
                    })
                })
            
                if(!response.ok) {
                    throw new Error("Failed to send cart data!");
                }
            }

            await sendResponse()
            .then(() =>{
                dispatch(uiAction.notification({
                  status : 'success',
                  title : 'Success!',
                  message : 'Sent cart data successfully!'
                }))
            })
            .catch((error) => {
                dispatch(uiAction.notification({
                    status : 'error',
                    title : 'Error!',
                    message : 'Failed to send cart data!'
                }))
            })
        
        }
    )
}


let fetchCartData = () => {
    return (
        async (dispatch) => {
            
            let fetchData = async () => {
                let response = await fetch("https://react-http-fad6d-default-rtdb.firebaseio.com/cart.json")
                let data = await response.json()
                return data
            }
            
            await fetchData()
            .then((data) => {
                console.log(data)
                dispatch(cartAction.replaceCart({
                    items : data.items || [],
                    totalQuantity : data.totalQuantity
                }))
            })
            .catch((error) => {
                dispatch(uiAction.notification({
                    status : 'error',
                    title : 'Error!',
                    message : 'Failed to fetch cart data!'
                }))
            })
        }
        )
    }
    
export {sendCartData}
export {fetchCartData}
export default cartSlice