import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from './async-mocks'; 

const Category = () => {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then((products) => {
      setProducts(products);
    });
  }, [categoryId]); 

  return (
    <div>
      {products.map(product => (
        <Link to={`/item/${product.id}`} key={product.id}>
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;