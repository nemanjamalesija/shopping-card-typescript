import { APIproducts } from './constants/initialState';
import { ACTIONS } from './constants/actions';

const reducer = (state: APIproducts, action: ACTIONS): APIproducts => {
  if (action.type === 'SET_PRODUCTS') {
    if (action.payload === undefined) return { ...state };

    return { ...state, products: action.payload };
  }

  return state;
};

export default reducer;
