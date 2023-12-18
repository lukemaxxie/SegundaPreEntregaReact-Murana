import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './ProductStyles.css';

const ProductItem = ({ name, price, image, description }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-item">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Precio: {price} UYU</p> 
      <button onClick={() => addToCart({ name, price, image })}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductItem;