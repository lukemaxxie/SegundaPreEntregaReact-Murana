import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './ProductData';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Link to="/">Back to Catalog</Link>
    </div>
  );
};

export default ProductDetail;