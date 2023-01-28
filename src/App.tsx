import { useEffect, useReducer } from 'react';
import reducer from './reducer';
import { useQuery } from '@tanstack/react-query';
import { initialState } from './constants/initialState';
import Loading from './components/Loading';
import fetchProducts from './helpers/fetchProducts';
import SingleProduct from './components/SingleProduct';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { data, isLoading } = useQuery(
    ['products', 'electronics'],
    fetchProducts
  );

  ////////////////////////////////////////////
  // FETCH WITH USE EFFECT => PRACTICE
  /* useEffect(() => {
    const fetchProducts = async () => {
      return await fetch(`https://fakestoreapi.com/products?limit=5`);
    };

    fetchProducts()
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data }));
  }, []); */
  /////////////////////////////////////////////
  //
  //

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: data });
  }, [data]);

  if (isLoading) return <Loading />;

  const { cart } = state;
  console.log(cart);

  return (
    <div className="App">
      {cart.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} product={product} />
        );
      })}
    </div>
  );
}

export default App;
