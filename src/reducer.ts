import { APIproducts } from './constants/initialState';
import { ACTIONS } from './constants/actions';

const reducer = (state: APIproducts, action: ACTIONS): APIproducts => {
  if (action.type === 'SET_PRODUCTS') {
    if (!action.payload) return { ...state };

    if (Array.isArray(action.payload))
      return {
        ...state,
        cart: [...action.payload],
      };
  }

  if (action.type === 'ADD_PRODUCT') {
    if (typeof action.payload === 'object' && !Array.isArray(action.payload)) {
      const newCart = [...state.cart, action.payload];

      return { ...state, cart: newCart };
    }
  }

  return state;
};

export default reducer;
