import classes from './CartItem.module.css';

const CartItem = (props) => {

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${props.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.removeItem}>-</button>
          <button onClick={props.addItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
