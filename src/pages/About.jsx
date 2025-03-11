import React from 'react';

export default function About() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Acerca de Nosotros</h1>
        <p className="text-gray-700">
          En EmiClean, nos dedicamos a ofrecer productos de limpieza de la más alta
          calidad para tu hogar y negocio. Nuestra misión es ayudarte a mantener
          tus espacios limpios y seguros.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Nuestra Historia</h2>
          <p className="text-gray-700">
            Fundada en 2023, EmiClean nació de la necesidad de ofrecer soluciones
            efectivas y ecológicas para la limpieza diaria. Desde entonces, hemos
            crecido y nos hemos convertido en una marca confiable y reconocida.
          </p>
        </div>
      </div>
    );
  }