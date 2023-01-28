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
      <nav>
        <div className="nav-div">
          <h1>Shopping Card</h1>
          <div className="amount-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div className="amount-container-value">
              <p className="total-purchaed">{cart.length}</p>
            </div>
          </div>
        </div>
      </nav>
      {cart.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            product={product}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default App;
