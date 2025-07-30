// src/pages/Productos.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import { categorias, productos, filtrarProductos } from '../data/productosData';

const Productos = () => {
  const location = useLocation();

  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Aplicar categoría si viene por query param (solo al cargar)
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoriaDesdeURL = queryParams.get('category');

    if (categoriaDesdeURL) {
      setActiveFilter(categoriaDesdeURL);
    }
  }, [location.search]);

  // Filtrar productos usando la función importada
  const filteredProducts = filtrarProductos(productos, activeFilter, searchTerm);
  
  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
      {/* Contenido principal */}
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 flex items-center justify-center bg-gradient-to-r from-[#087989] to-[#178FA8] text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#087989]/70 to-[#178FA8]/50"></div>
          <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Productos</h1>
            <p className="text-xl mb-8">Encuentra todo lo que necesitas para limpieza y mantenimiento</p>
          </div>
        </section>

        {/* Filtros y Búsqueda */}
        <section className="py-12 px-4 max-w-7xl mx-auto sticky top-0 bg-white shadow-sm z-10">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Barra de búsqueda */}
            <div className="w-full md:w-1/3 relative">
              <input 
                type="text" 
                placeholder="Buscar productos..." 
                className="w-full py-3 px-6 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F9D976]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Filtro por categoría */}
            <div className="w-full md:w-2/3">
              <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
                {categorias.map(categoria => (
                  <button
                    key={categoria.id}
                    onClick={() => setActiveFilter(categoria.nombre)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors ${activeFilter === categoria.nombre ? 'bg-[#087989] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {categoria.nombre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Listado de Productos */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          {/* Mostrar mensaje si no hay resultados */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-600">No se encontraron productos</h3>
              <p className="text-gray-500 mt-2">Intenta con otros filtros o términos de búsqueda</p>
            </div>
          )}

          {/* Grid de productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(producto => (
              <div key={producto.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Imagen del producto */}
                <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center relative">
                  {producto.imagen ? (
                    <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-5xl">📦</span>
                  )}
                  {producto.destacado && (
                    <span className="absolute top-3 right-3 bg-[#F9D976] text-[#087989] px-3 py-1 rounded-full text-xs font-bold">
                      Destacado
                    </span>
                  )}
                </div>
                
                {/* Info del producto */}
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-[#087989]">{producto.nombre}</h3>
                    <span className="bg-[#178FA8]/10 text-[#178FA8] text-xs px-2 py-1 rounded">
                      {producto.categoria}
                    </span>
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-[#087989] font-medium hover:text-[#178FA8] transition-colors">
                      Ver detalles
                    </button>
                    <button className="bg-[#F9D976] text-[#087989] px-4 py-2 rounded-lg font-semibold hover:bg-[#178FA8] hover:text-white transition-colors">
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#A3D977] to-[#58D68D]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6 text-white">¿No encuentras lo que buscas?</h2>
            <p className="text-xl text-white mb-8">Contáctanos y te ayudaremos a encontrar el producto perfecto</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-[#087989] rounded-full font-bold hover:bg-[#087989] hover:text-white transition duration-300 shadow-lg"
            >
              Contactar a un asesor
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Productos;