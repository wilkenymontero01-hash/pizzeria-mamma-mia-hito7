
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const { cart, increaseCount, decreaseCount, total } = useContext(CartContext) || {};
  const { token } = useContext(UserContext) || {};

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <h3 className="text-center mb-4">Detalles del pedido:</h3>

      {cart?.length === 0 ? (
        <p className="text-center text-muted fs-5">Tu carrito está vacío 🍕</p>
      ) : (
        <div className="card p-4 shadow-sm">
          <ul className="list-group list-group-flush mb-4">
            {cart?.map((pizza) => (
              <li
                key={pizza.id}
                className="list-group-item d-flex justify-content-between align-items-center px-0"
              >
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <span className="fw-bold text-capitalize fs-5">{pizza.name}</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <span className="fw-bold fs-5 me-2">
                    ${(pizza.price * pizza.count).toLocaleString('es-CL')}
                  </span>
                  
                  {/* Botón Decrementar */}
                  <button
                    className="btn btn-outline-danger btn-sm px-3"
                    onClick={() => decreaseCount && decreaseCount(pizza.id)}
                  >
                    -
                  </button>

                  <span className="fw-bold fs-5 px-1">{pizza.count}</span>

                  {/* Botón Incrementar */}
                  <button
                    className="btn btn-outline-primary btn-sm px-3"
                    onClick={() => increaseCount && increaseCount(pizza.id)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-center border-top pt-3">
            <h2 className="fw-bold my-3">
              Total: ${total?.toLocaleString('es-CL')}
            </h2>

            {/* Botón de Pago según autenticación */}
            <button
              className="btn btn-dark btn-lg px-4"
              disabled={!token}
            >
              Pagar 🛒
            </button>

            {!token && (
              <p className="text-danger mt-2 small">
                Debes iniciar sesión para poder realizar el pago.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;