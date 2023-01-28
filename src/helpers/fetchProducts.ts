import { QueryFunctionContext } from '@tanstack/react-query';
type queryParams = [string, string];

const fetchProducts = async ({
  queryKey,
}: QueryFunctionContext<queryParams>) => {
  const category = queryKey[1];

  return await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then((response) => response.json());
};

export default fetchProducts;
