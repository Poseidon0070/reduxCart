import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { uiAction } from './store/store';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart';

let initial = true

let App = () => {

  let cartVisibility = useSelector(state => state.ui.cartVisibility)
  let cart = useSelector(state => state.cart)
  let notification = useSelector(state => state.ui.notification)
  let dispatch = useDispatch()

  useEffect(() => {
    console.log("here")
    dispatch(fetchCartData())
  }, [])

  useEffect(() => {

    if(initial) {
      initial = false
      return ;
    }

    // let sendData = async() => {

    //   dispatch(uiAction.notification({
    //     status : 'pending',
    //     title : 'Sending...',
    //     message : 'Sending cart data!'
    //   }))
      
    //   let response = await fetch("https://react-http-fad6d-default-rtdb.firebaseio.com/cart.json", {
    //     method : 'PUT',
    //     body : JSON.stringify(cart)
    //   })

    //   if(!response.ok) {
    //     throw new Error("Failed to send cart data!");
    //   }

    //   dispatch(uiAction.notification({
    //     status : 'success',
    //     title : 'Success!',
    //     message : 'Sent cart data successfully!'
    //   }))

    // }

    //   sendData().catch(error => {
    //     dispatch(uiAction.notification({
    //       status : 'error',
    //       title : 'Error!',
    //       message : 'Sending cart data failed!'
    //     }))
    //   })

    dispatch(sendCartData(cart))

  },[cart,dispatch])


  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title}  message={notification.message}/>}
      <Layout>
        {cartVisibility && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
