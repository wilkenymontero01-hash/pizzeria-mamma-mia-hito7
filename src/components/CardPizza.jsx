
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CardPizza = ({ pizza }) => {
  
  const { addToCart } = useContext(CartContext) || {};

  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen con altura fija y ajuste proporcional */}
      <img 
        src={pizza.img} 
        className="card-img-top" 
        alt={pizza.name} 
        style={{ height: '220px', objectFit: 'cover', width: '100%' }}
      />
      
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize fw-bold">
          Pizza {pizza.name}
        </h5>
        <hr />
        
        <p className="card-text mb-1 fw-bold text-secondary">Ingredientes:</p>
        <ul className="list-unstyled mb-3 flex-grow-1">
          {pizza.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-muted small">
              🍕 {ingredient}
            </li>
          ))}
        </ul>

        <div className="mt-auto text-center border-top pt-3">
          <p className="fs-5 fw-bold text-dark mb-3">
            Precio: ${pizza.price?.toLocaleString('es-CL')}
          </p>

          <div className="d-flex justify-content-between gap-2">
            {/* Redirección dinámica según la ID de la pizza */}
            <Link 
              to={`/pizza/${pizza.id}`} 
              className="btn btn-outline-dark btn-sm px-3"
            >
              Ver Más 👀
            </Link>

            {/* Acción de agregar al carrito */}
            <button 
              className="btn btn-dark btn-sm px-3"
              onClick={() => addToCart && addToCart(pizza)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;