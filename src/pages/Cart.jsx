import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, calculateTotal } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="mb-4">Detalles del pedido:</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          Tu carrito está vacío. ¡Agrega algunas pizzas deliciosas desde el Home! 🍕
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"
            >
              {/* Información de la pizza (Imagen y Nombre) */}
              <div className="d-flex align-items-center">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  style={{ width: "70px", height: "70px", objectFit: "cover" }} 
                  className="me-3 rounded shadow-sm" 
                />
                <h5 className="mb-0 text-capitalize">{item.name}</h5>
              </div>

              {/* Controles de cantidad y precio */}
              <div className="d-flex align-items-center">
                <span className="fw-bold me-4 text-success">
                  ${(item.price * item.count).toLocaleString("es-CL")}
                </span>
                
                <button 
                  className="btn btn-outline-danger btn-sm px-2" 
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                
                <span className="mx-3 fw-bold fs-5">{item.count}</span>
                
                <button 
                  className="btn btn-outline-primary btn-sm px-2" 
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          {/* Total de la compra (Requerimiento 5: debe coincidir con el del navbar) */}
          <div className="mt-4 text-end">
            <h3>Total: ${calculateTotal().toLocaleString("es-CL")}</h3>
            <button 
              className="btn btn-dark btn-lg mt-3 px-5"
              disabled={cart.length === 0}
            >
              Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;