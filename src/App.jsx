
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound'; // <-- Importar el componente
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

function App() {
  const { token } = useContext(UserContext) || {};

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        
        {/* Ruta comodín para capturar cualquier URL inválida */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;