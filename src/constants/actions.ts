export type ACTIONS = {
  type: 'SET_PRODUCTS' | 'ADD_PRODUCT' | 'REMOVE_PRODUCT';
  payload?:
    | number
    | {
        id: number;
        title: string;
        price: number;
        description?: string | undefined;
        category: string;
        image: string;
        rating: { rate: number; count: number };
      }[]
    | {
        id: number;
        title: string;
        price: number;
        description?: string | undefined;
        category: string;
        image: string;
        rating: { rate: number; count: number };
      };
};
