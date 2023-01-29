import React from 'react';
import { ACTIONS } from '../constants/actions';
import { APIproducts } from '../constants/initialState';

type singleProductProps = {
  category: string;
  description?: string | undefined;
  id: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  price: number;
  product: any;
  dispatch: React.Dispatch<ACTIONS>;
};

const SingleProduct = (props: singleProductProps) => {
  const [quantity, setQuantity] = React.useState(1);

  const addProduct = (product: APIproducts['cart'][number]) => {
    setQuantity((prev) => prev + 1);
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const {
    product,
    id,
    category,
    image,
    rating: { rate, count },
    title,
    price,
    dispatch,
  } = props;

  return (
    <div className="single-product-container">
      <div className="single-product-left">
        <img src={image} alt={title} />
        <div className="single-product-info">
          <h3>{title.slice(0, 50)}</h3>
          <div className="price-remove-div">
            <p className="product-price">{price}$</p>
            <button className="remove-product-btn">remove</button>
          </div>
        </div>
      </div>
      <div className="single-product-right">
        <button
          className="btn add-quantity"
          onClick={() => addProduct(product)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-product"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </button>
        <span className="product-quantity">{quantity}</span>
        <button className="btn remove-quantity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="icon-product"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
