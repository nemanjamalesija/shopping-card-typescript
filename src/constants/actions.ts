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
