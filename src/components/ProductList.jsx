import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './ProductData';
import ProductItem from './ProductItem';


const ProductList = () => {
  const { idCategory } = useParams();
  const filteredProducts = products.filter(product => product.category === idCategory);

  return (
    <div>
      {filteredProducts.map(product => (
        <Link to={`/item/${product.id}`} key={product.id}>
          <ProductItem 
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;