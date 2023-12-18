import React from 'react';
import ProductList from './ProductList';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <ProductList />
    </div>
  );
};

export default ItemListContainer;