import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen con tamaño fijo y objectFit: cover para uniformidad visual */}
      <img
        src={pizza.img}
        className="card-img-top"
        alt={pizza.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-capitalize text-center fw-bold mb-3">
            {pizza.name}
          </h5>
          
          {/* Si tu pizza incluye la lista de ingredientes */}
          {pizza.ingredients && (
            <div className="text-center mb-3">
              <p className="card-text text-muted mb-1 fw-bold">🍕 Ingredientes:</p>
              <p className="card-text text-capitalize small">
                {pizza.ingredients.join(", ")}
              </p>
            </div>
          )}
        </div>

        <div>
          <hr />
          <p className="card-text text-center fs-5 fw-bold mb-3">
            Precio: ${pizza.price.toLocaleString("es-CL")}
          </p>

          <div className="d-flex justify-content-around">
            <button className="btn btn-light border btn-sm px-3">
              Ver Más 👀
            </button>
            <button
              className="btn btn-dark btn-sm px-3"
              onClick={() => addToCart(pizza)}
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