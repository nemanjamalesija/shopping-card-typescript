export type APIproducts = {
  cart: {
    id: number;
    title: string;
    price: number;
    description?: string | undefined;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }[];

  totalPrice: number;
};

export type singleProduct = {
  id: number;
  title: string;
  price: number;
  description?: string | undefined;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export const initialState: APIproducts = {
  cart: [
    {
      id: 1,
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
