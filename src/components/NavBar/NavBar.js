import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar/Navbar.css';
import CartWidget from '../CartWidget';
import { CartContext } from '../CartContext';

const ROUTES = [
  { path: "/category/interior", name: "Interior" },
  { path: "/category/exterior", name: "Exterior" },
  {path: "/pages/CalculaTuPresupuesto", name: "Calcula tu presupuesto"},
  {path: "pages/QuienesSomos", name: "Quienes Somos"},
]; 
const Navbar = () => {
  const { cartItems } = useContext(CartContext); 

  return (
    <nav className="navbar">
      <NavLink to="/"><h1 className="graffiti-text">Pachamama Eventos</h1></NavLink>
      <div className="nav-categories">
        {ROUTES.map(route => (
          <NavLink key={route.path} className="category" activeClassName="active" to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>
      <CartWidget cartItemCount={cartItems.length} />
    </nav>
  );
};

export default Navbar;