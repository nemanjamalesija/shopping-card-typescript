import { APIproducts } from './App';
import { ACTIONS } from './App';

const reducer = (state: APIproducts, action: ACTIONS): APIproducts => {
  if (action.type === 'SET_PRODUCTS') {
    if (action.payload === undefined) return { ...state };

    return { ...state, products: action.payload };
  }

  return state;
};

export default reducer;
