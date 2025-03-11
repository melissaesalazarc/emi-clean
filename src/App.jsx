import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/services">Servicios</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;