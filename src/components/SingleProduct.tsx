import React from 'react';

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
  product: Object;
};

const SingleProduct = (props: singleProductProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const {
    product,
    id,
    category,
    image,
    rating: { rate, count },
    title,
    price,
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
        <button className="btn add-quantity">⬆</button>
        <span className="product-quantity">{quantity}</span>
        <button className="btn remove-quantity">⬇</button>
      </div>
    </div>
  );
};

export default SingleProduct;
