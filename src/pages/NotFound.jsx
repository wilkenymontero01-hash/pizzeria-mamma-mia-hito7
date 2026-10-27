

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">¡Página no encontrada! 🍕</h2>
      <p className="lead text-muted mb-4">
        Parece que la página que estás buscando no existe o la pizza se la comió alguien más.
      </p>
      <Link to="/" className="btn btn-dark btn-lg">
        Volver al Inicio 🏠
      </Link>
    </div>
  );
};

export default NotFound;