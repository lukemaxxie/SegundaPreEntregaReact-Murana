import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import NuestrosServicios from './components/pages/NuestrosServicios';
import CalculaTuPresupuesto from './components/pages/CalculaTuPresupuesto';
import QuienesSomos from './components/pages/QuienesSomos';
import ProductDetail from './components/ProductDetail';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './components/CartContext';
import Cart from './Cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ProductDetail />} />
          <Route path="/nuestros-servicios" element={<NuestrosServicios />} />
          <Route path="/calcula-tu-presupuesto" element={<CalculaTuPresupuesto />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/cart" element={<Cart />} /> {/* Agrega esta línea */}

        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;