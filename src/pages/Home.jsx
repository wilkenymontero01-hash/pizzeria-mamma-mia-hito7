import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
// Importamos directamente el archivo pizza.js desde la carpeta src
import { pizzas as pizzasData } from "../pizza.js"; // (o sin llaves si se exporta por defecto como export default)

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Como ya tenemos los datos en el archivo local, los cargamos directamente al estado
    setPizzas(pizzasData);
  }, []);

  return (
    <div className="container my-4">
      <div className="row g-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-4">
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;