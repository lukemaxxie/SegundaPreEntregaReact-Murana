import { products } from './ProductData'; 
export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); 
  });
}