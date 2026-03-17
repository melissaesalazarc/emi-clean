// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: 'var(--turquesa-oscuro)' }} className="p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" style={{ color: 'var(--blanco-puro)' }} className="text-2xl font-bold">
          Baemi Group
        </Link>

        {/* Menú para desktop */}
        <ul className="hidden md:flex space-x-8" style={{ color: 'var(--blanco-puro)' }}>
          <li>
            <Link to="/" style={{ color: 'var(--blanco-puro)' }} className="hover:text-turquesa-claro">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'var(--blanco-puro)' }} className="hover:text-turquesa-claro">
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ color: 'var(--blanco-puro)' }} className="hover:text-turquesa-claro">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/services" style={{ color: 'var(--blanco-puro)' }} className="hover:text-turquesa-claro">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: 'var(--blanco-puro)' }} className="hover:text-turquesa-claro">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón para móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'var(--blanco-puro)' }}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú para móvil */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2" style={{ color: 'var(--blanco-puro)' }}>
          <li>
            <Link to="/" style={{ color: 'var(--blanco-puro)' }} className="block py-2 hover:text-turquesa-claro">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ color: 'var(--blanco-puro)' }} className="block py-2 hover:text-turquesa-claro">
              Acerca de
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ color: 'var(--blanco-puro)' }} className="block py-2 hover:text-turquesa-claro">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/services" style={{ color: 'var(--blanco-puro)' }} className="block py-2 hover:text-turquesa-claro">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ color: 'var(--blanco-puro)' }} className="block py-2 hover:text-turquesa-claro">
              Contacto
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;