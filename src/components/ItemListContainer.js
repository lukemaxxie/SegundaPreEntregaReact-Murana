import React from 'react';
import { useParams } from 'react-router-dom'; 
import ProductList from './ProductList';

const ItemListContainer = ({ greeting }) => {
  const { idCategory } = useParams(); 

  return (
    <div>
      <h2>{greeting}</h2>
      <ProductList category={idCategory} /> {/* pass the category to ProductList */}
    </div>
  );
};

export default ItemListContainer;