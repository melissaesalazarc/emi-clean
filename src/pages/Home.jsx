import React from 'react';

export default function Home({ count, setCount }) {
    return (
      <div className="p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Bienvenidos a EmiClean</h1>
          <p className="text-xl text-gray-700 mb-8">
            Productos de limpieza de alta calidad para tu hogar y negocio.
          </p>
          <a
            href="#productos"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Ver Productos
          </a>
        </div>
  
        {/* Sección de Productos Destacados */}
        <div id="productos" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
              Nuestros Productos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Producto 1 */}
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
  
              {/* Producto 2 */}
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
  
              {/* Producto 3 */}
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
  
        {/* Llamado a la Acción (CTA) */}
        <div className="bg-blue-900 py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Listo para probar nuestros productos?
            </h2>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-100 transition duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    );
  }