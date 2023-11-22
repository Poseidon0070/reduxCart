import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiAction } from '../../store/store';

const CartButton = (props) => {

  let Dispatch = useDispatch()

  let cartItems = useSelector(state => state.cart.items)
  let totalItems = 0;
  if (cartItems.length > 0) {
    totalItems = cartItems.reduce((tot, item) => tot + item.quantity, 0);
  }

  let cartToggleHandler = () => {
    Dispatch(uiAction.toggle())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
