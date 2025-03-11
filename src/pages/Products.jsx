// src/pages/Products.jsx
import React from 'react';

const Products = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Nuestros Productos</h1>
      <p className="text-gray-700">
        Descubre nuestra gama de productos de limpieza de alta calidad.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Producto 1"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Limpiador Multiusos
            </h3>
            <p className="text-gray-700">
              Ideal para todas las superficies. Elimina la suciedad y las bacterias.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Producto 2"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Detergente Líquido
            </h3>
            <p className="text-gray-700">
              Formulado para dejar tu ropa limpia y con un aroma fresco.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Producto 3"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Desinfectante
            </h3>
            <p className="text-gray-700">
              Elimina el 99.9% de los gérmenes y bacterias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; // Exportación por defecto