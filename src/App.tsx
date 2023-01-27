import React, { useReducer } from 'react';
import reducer from './reducer';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';

import './App.css';

export type APIproducts = {
  id: string;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}[];

const initialState: APIproducts = [
  {
    id: '',
    title: '',
    price: 0,
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  },
];

type queryParams = [string, number];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async ({
    queryKey,
  }: QueryFunctionContext<queryParams>) => {
    const numberOfProducts = queryKey[1];

    return await fetch(
      `https://fakestoreapi.com/products?limit=${numberOfProducts}`
    ).then((response) => response.json());
  };

  const { data, isLoading } = useQuery(['products', 5], fetchProducts);

  console.log(data);
  console.log(isLoading);

  return <div className="App">const</div>;
}

export default App;
