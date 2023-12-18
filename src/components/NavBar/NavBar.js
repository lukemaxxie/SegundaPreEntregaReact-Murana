import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../NavBar/Navbar.css';
import CartWidget from '../CartWidget';
import { CartContext } from '../CartContext'; // import your CartContext

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // access cartItems from CartContext

  return (
    <nav className="navbar">
      <h1 className="graffiti-text">Pachamama Eventos</h1>
      <div className="nav-categories">
        <NavLink className="category" activeClassName="active" to="/nuestros-servicios">Nuestros Servicios</NavLink>
        <NavLink className="category" activeClassName="active" to="/calcula-tu-presupuesto">Calcula Tu Presupuesto</NavLink>
        <NavLink className="category" activeClassName="active" to="/quienes-somos">Quienes Somos</NavLink>
      </div>
      <CartWidget cartItemCount={cartItems.length} /> {/* pass the count of cartItems to CartWidget */}
    </nav>
  );
};

export default Navbar;