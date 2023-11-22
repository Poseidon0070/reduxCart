import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/store';

const Dummy_Items = [
  {
    id : 'i1',
    title : 'Samosa',
    description : 'Indian Snack',
    price : 10,
  },
  {
    id : 'i2',
    title : 'Pasta',
    description : 'Italian Snack',
    price : 15,
  }
]


const Products = (props) => {
  
  let Dispatch = useDispatch()
  
  let addItemHandler = (item) => {
    Dispatch(cartAction.addItem(item))
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {
            Dummy_Items.map((item) => {
              return (
                <ProductItem key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                addItem = {addItemHandler.bind(null, item)}>
                </ProductItem>
                )
            })
          }
      </ul>
    </section>
  );
};

export default Products;
