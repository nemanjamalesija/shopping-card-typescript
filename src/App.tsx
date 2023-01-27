import React, { useEffect, useReducer } from 'react';
import reducer from './reducer';
import { useQuery, QueryFunctionContext } from '@tanstack/react-query';

import './App.css';

export type APIproducts = {
  cart: [];
  products: {
    id: string;
    title: string;
    price: number;
    description?: string | undefined;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];

  totalPrice: number;
};

const initialState: APIproducts = {
  cart: [],
  products: [
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
  ],
  totalPrice: 0,
};

export type ACTIONS = {
  type: 'SET_PRODUCTS';
  payload?: {
    id: string;
    title: string;
    price: number;
    description?: string | undefined;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];
};

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

  // FETCH WITH USE EFFECT => PRACTICE

  useEffect(() => {
    const fetchProducts = async () => {
      return await fetch(`https://fakestoreapi.com/products?limit=5`);
    };

    fetchProducts()
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data }));
  }, []);

  console.log(state);

  return <div className="App">const</div>;
}

export default App;
