import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { calculateTotal } = useContext(CartContext);
  const total = calculateTotal();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">🍕 Pizzeria Mamma Mia!</Link>
        
        <div className="d-flex ms-auto">
          <Link to="/" className="btn btn-outline-light me-2">Home</Link>
          
          {/* Al hacer clic en Total nos lleva a la vista del Carrito */}
          <Link to="/cart" className="btn btn-outline-info">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;