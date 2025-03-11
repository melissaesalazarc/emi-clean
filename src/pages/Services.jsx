// src/pages/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Nuestros Servicios</h1>
      <p className="text-gray-700">
        Ofrecemos una amplia gama de servicios de limpieza para hogares y negocios.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Servicios Destacados</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Limpieza residencial</li>
          <li>Limpieza comercial</li>
          <li>Limpieza profunda</li>
          <li>Desinfección de espacios</li>
        </ul>
      </div>
    </div>
  );
};

export default Services; // Exportación por defecto