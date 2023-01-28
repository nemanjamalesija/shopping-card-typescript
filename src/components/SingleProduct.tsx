import React from 'react';
import { ACTIONS } from '../constants/actions';
import { singleProduct } from '../constants/initialState';

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

  const addProduct = (product: any) => {
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
          <p className="product-price">{price}$</p>
        </div>
      </div>
      <div className="single-product-right">
        <button
          className="btn add-quantity"
          onClick={() => addProduct(product)}
        >
          ⬆
        </button>
        <span className="product-quantity">{quantity}</span>
        <button className="btn remove-quantity">⬇</button>
      </div>
    </div>
  );
};

export default SingleProduct;
