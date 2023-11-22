import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartAction } from '../../store/store';
import { useSelector,useDispatch } from 'react-redux';


const Cart = (props) => {

  let Dispatch = useDispatch()
  
  let addItemHandler = (item) => {
    Dispatch(cartAction.addItem(item))
  }

  let removeItemHandler = (id) => {
    Dispatch(cartAction.removeItem(id))
  }

  let cartItems = useSelector(state => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map((item) => {
            return (
              <CartItem
              key = {item.id}
              title = {item.title}
              quantity = {item.quantity}
              total = {item.totalAmount}
              price = {item.price}
              addItem = {addItemHandler.bind(null,item)}
              removeItem = {removeItemHandler.bind(null,item.id)}
              />
            )
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
