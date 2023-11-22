import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function App() {

  let cartVisibility = useSelector(state => state.ui.cartVisibility)
  return (
    <Layout>
      {cartVisibility && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
