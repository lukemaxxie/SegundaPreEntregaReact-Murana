import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts } from './async-mocks'; // Asegúrate de que esta importación sea correcta

const ProductList = () => {
  const { categoryId } = useParams(); // Extrae categoryId de los parámetros de la ruta
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(categoryId).then((products) => {
      setProducts(products);
    });
  }, [categoryId]); 
  return (
    <div>
      {products.map(product => (
        <ProductItem 
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;