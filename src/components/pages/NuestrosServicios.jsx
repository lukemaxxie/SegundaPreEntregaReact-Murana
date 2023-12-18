import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import { products } from '../ProductData'; 

const NuestrosServicios = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productToRemove) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === productToRemove.id);
            if (existingProduct.quantity > 1) {
                return prevCart.map(item =>
                    item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return prevCart.filter(product => product.id !== productToRemove.id);
            }
        });
    };

    console.log(products);

    return (
        <div>
            <h1>Nuestros Servicios</h1>
            {products.map(product => (
                <ProductItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image} 
                    description={product.description}
                    addToCart={() => addToCart(product)}
                />
            ))}
        </div>)
        
};

export default NuestrosServicios;