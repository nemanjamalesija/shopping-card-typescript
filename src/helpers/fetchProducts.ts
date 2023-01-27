import { QueryFunctionContext } from '@tanstack/react-query';
type queryParams = [string, number];

const fetchProducts = async ({
  queryKey,
}: QueryFunctionContext<queryParams>) => {
  const numberOfProducts = queryKey[1];

  return await fetch(
    `https://fakestoreapi.com/products?limit=${numberOfProducts}`
  ).then((response) => response.json());
};

export default fetchProducts;
