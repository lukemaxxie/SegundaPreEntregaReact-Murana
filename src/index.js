import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from '../src/components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
