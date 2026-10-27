
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  
  const { token, logout } = useContext(UserContext) || {};
  
  // Consumimos el CartContext de forma segura con valor por defecto para total
  const { total = 0 } = useContext(CartContext) || {};

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        {/* Logo / Título principal */}
        <Link className="navbar-brand" to="/">Pizzería Mamma Mía!</Link>
        
        {/* Botones de navegación central/izquierda */}
        <div className="d-flex align-items-center gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
          
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-sm">🔓 Profile</Link>
              <button onClick={logout} className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">🔐 Register</Link>
            </>
          )}
        </div>

        {/* Botón del carrito a la derecha */}
        <div className="ms-auto">
          <Link to="/cart" className="btn btn-outline-info btn-sm">
            🛒 Total: ${total?.toLocaleString('es-CL') || 0}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;