import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css';

const Catalog = () => {
  return (
    <div className="catalog">
      <h2>Nuestros Servicios</h2>
      <ul>
        <li><Link to="/servicios/musicalizacion">Musicalización</Link></li>
        <li><Link to="/servicios/fotografia">Fotografía</Link></li>
        <li><Link to="/servicios/servicio-de-lunch">Servicio de Lunch</Link></li>
        <li><Link to="/servicios/decoracion-de-salon">Decoración de Salón</Link></li>
        <li><Link to="/servicios/mozos">Mozos</Link></li>
      </ul>
    </div>
  );
};

export default Catalog;