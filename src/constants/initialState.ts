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

export const initialState: APIproducts = {
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
