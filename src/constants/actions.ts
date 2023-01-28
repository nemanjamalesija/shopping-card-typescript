export type ACTIONS = {
  type: 'SET_PRODUCTS';
  payload?: {
    id: number;
    title: string;
    price: number;
    description?: string | undefined;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];
};
