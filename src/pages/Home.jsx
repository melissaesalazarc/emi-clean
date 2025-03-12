import React from 'react';

// src/pages/Home.jsx
export default function Home() {
    return (
      <div style={{ backgroundColor: 'var(--gris-claro)' }} className="min-h-screen p-8">
        {/* Hero Section */}
        <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="py-20 rounded-lg shadow-md">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 style={{ color: 'var(--turquesa-oscuro)' }} className="text-5xl font-bold mb-6">
              Bienvenidos a EmiClean
            </h1>
            <p style={{ color: 'var(--turquesa-claro)' }} className="text-xl mb-8">
              Productos de limpieza de alta calidad para tu hogar y negocio.
            </p>
            <a
              href="#productos"
              style={{ backgroundColor: 'var(--turquesa-claro)', color: 'var(--blanco-puro)' }}
              className="px-8 py-3 rounded-lg hover:bg-turquesa-oscuro transition duration-300"
            >
              Ver Productos
            </a>
          </div>
        </div>
  
        {/* Sección de Productos Destacados */}
        <div id="productos" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 style={{ color: 'var(--turquesa-oscuro)' }} className="text-3xl font-bold text-center mb-12">
              Nuestros Productos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Producto 1 */}
              <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Producto 1"
                  className="mx-auto mb-4"
                />
                <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2">
                  Limpiador Multiusos
                </h3>
                <p className="text-gray-700">
                  Ideal para todas las superficies. Elimina la suciedad y las bacterias.
                </p>
              </div>
  
              {/* Producto 2 */}
              <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Producto 2"
                  className="mx-auto mb-4"
                />
                <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2">
                  Detergente Líquido
                </h3>
                <p className="text-gray-700">
                  Formulado para dejar tu ropa limpia y con un aroma fresco.
                </p>
              </div>
  
              {/* Producto 3 */}
              <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="p-6 rounded-lg shadow-lg text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Producto 3"
                  className="mx-auto mb-4"
                />
                <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2">
                  Desinfectante
                </h3>
                <p className="text-gray-700">
                  Elimina el 99.9% de los gérmenes y bacterias.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Llamado a la Acción (CTA) */}
        <div style={{ backgroundColor: 'var(--verde-lima)' }} className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 style={{ color: 'var(--turquesa-oscuro)' }} className="text-3xl font-bold mb-6">
              ¿Listo para probar nuestros productos?
            </h2>
            <a
              href="/contact"
              style={{ backgroundColor: 'var(--amarillo-pastel)', color: 'var(--turquesa-oscuro)' }}
              className="px-8 py-3 rounded-lg hover:bg-turquesa-claro transition duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    );
  }