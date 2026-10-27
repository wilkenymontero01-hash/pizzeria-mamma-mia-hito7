
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) return <div className="container mt-5"><h3>Cargando detalles de la pizza...</h3></div>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow" style={{ maxWidth: '500px' }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h2 className="card-title text-capitalize">{pizza.name}</h2>
          <p className="card-text">{pizza.desc}</p>
          
          <h5 className="mt-3">Ingredientes:</h5>
          <ul>
            {pizza.ingredients?.map((ing, index) => (
              <li key={index} className="text-capitalize">🍕 {ing}</li>
            ))}
          </ul>
          
          <h4 className="mt-4 text-success">Precio: ${pizza.price?.toLocaleString('es-CL')}</h4>
        </div>
      </div>
    </div>
  );
};

export default Pizza;