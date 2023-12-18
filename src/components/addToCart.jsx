import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const MyComponent = () => {
  const { cart, AgregaralCarrito } = useContext(CartContext);

};