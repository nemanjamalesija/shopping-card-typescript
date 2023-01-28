import { QueryFunctionContext } from '@tanstack/react-query';
import { APIproducts } from '../constants/initialState';
type queryParams = [string, string];

const fetchProducts = async ({
  queryKey,
}: QueryFunctionContext<queryParams>): Promise<APIproducts['cart']> => {
  const category = queryKey[1];

  return await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then((response) => response.json());
};

export default fetchProducts;
