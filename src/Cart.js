import React, { useContext } from 'react';
import { CartContext } from './components/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Tu carrito</h1>
      {cart.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;