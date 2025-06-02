import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#087989] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Sección superior del footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <h2 className="text-2x1 font-bold">Comercializadora Baemi Group</h2>
            <p className="text-sm text-gray-200">
              Soluciones innovadoras para la limpieza y el mantenimiento de tus espacios.
            </p>
          </div>


            {/* Columna 2: Contacto */}
            <div className="space-y-4">
            <h3 className="text-lg font-semibold">Saltillo República Ote</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">Email: baemi.group@gmail.com</li>
              <li className="text-gray-200">Teléfono: +52 1 844 405 9196</li>
              <li className="text-gray-200">Quintana Roo 931, República Oriente, 25280 Saltillo, Coah.</li>
            </ul>
          </div>
          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">CDMX</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">Email: baemi.mx@gmail.com</li>
              <li className="text-gray-200">Teléfono: +52 1 55 2730 2115</li>
              <li className="text-gray-200">Calle 22-A, no. 77, Santa Rosa, Alcaldia Gustavo A Madero, CDMX</li>
            </ul>
          </div>

         {/* Columna 2: Contacto */}
         <div className="space-y-4">
            <h3 className="text-lg font-semibold">Saltillo Tulipanes</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">Email: baemi.group@gmail.com</li>
              <li className="text-gray-200">Teléfono: +52 1 844 405 9196</li>
              <li className="text-gray-200">Local #16 Plaza Tulipanes (Blvd. Eulalio Gtz y Av. Don Juan Saade Murra)</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Sección inferior del footer */}
        <div className="text-center text-gray-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Baemi Group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;