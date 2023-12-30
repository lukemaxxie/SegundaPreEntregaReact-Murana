import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/NavBar';
import ProductDetail from './components/ProductDetail';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './components/CartContext';
import ParticleBackground from './ParticleBackground';
import CalculaTuPresupuesto from './components/pages/CalculaTuPresupuesto'; 
import QuienesSomos from './components/pages/QuienesSomos'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <ParticleBackground /> 
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ProductDetail />} /> 
            <Route path="/pages/CalculaTuPresupuesto" element={<CalculaTuPresupuesto />} />
            <Route path="/pages/QuienesSomos" element={<QuienesSomos />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;