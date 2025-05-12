import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Productos.css";
import Box from "../components/box";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/services/fake-api.json")
      .then((res) => res.json())
      .then((data) => setProductos(data.productos || []));
  }, []);

  const handleView = (producto) => {
    navigate("/vista-imagenes", { state: { producto } });
  };

  return (
    <div className="productos-container">
      <div className="productos-grid">
        {productos.map((producto) => (
          <Box
            key={producto.id}
            title={producto.nombre}
            onView={() => handleView(producto)}
          />
        ))}
      </div>
      <Link to="/" className="home-btn">Home</Link>
    </div>
  );
};

export default Productos;