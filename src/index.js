import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Add this import statement
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
