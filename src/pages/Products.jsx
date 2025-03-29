import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Productos = () => {
  // Estado para el filtro activo
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Datos de ejemplo (deberías reemplazarlos con tus productos reales)
  const categorias = [
    { id: 1, nombre: 'Todos' },
    { id: 2, nombre: 'Lavado Automotriz' },
    { id: 3, nombre: 'Aerosoles y Aromas' },
    { id: 4, nombre: 'Líquidos para el Hogar' },
    { id: 5, nombre: 'Material COVID-19' },
    { id: 6, nombre: 'Papel y Despachadores' },
    { id: 7, nombre: 'Bolsas Plásticas' },
    { id: 8, nombre: 'Trapeadores y Fibras' },
    { id: 9, nombre: 'Recogedores y Cubetas' },
    { id: 10, nombre: 'Escobas y Cepillos' },
    { id: 11, nombre: 'Jarcería' },
    { id: 12, nombre: 'Estética Automotriz' },
    { id: 13, nombre: 'Equipo de Seguridad' },
    { id: 14, nombre: 'Ferretería' }
  ];

  const productos = [
    { id: 1, nombre: 'Limpiador Multiusos', categoria: 'Líquidos para el Hogar', destacado: true },
    { id: 2, nombre: 'Aromatizante Lavanda', categoria: 'Aerosoles y Aromas', destacado: true },
    { id: 3, nombre: 'Cubeta Industrial', categoria: 'Recogedores y Cubetas', destacado: false },
    { id: 4, nombre: 'Desinfectante COVID', categoria: 'Material COVID-19', destacado: true },
    { id: 5, nombre: 'Trapeador Microfibra', categoria: 'Trapeadores y Fibras', destacado: false },
    { id: 6, nombre: 'Bolsa de Basura 50L', categoria: 'Bolsas Plásticas', destacado: false },
    { id: 7, nombre: 'Cera para Autos', categoria: 'Lavado Automotriz', destacado: true },
    { id: 8, nombre: 'Toallas de Papel', categoria: 'Papel y Despachadores', destacado: false },
    { id: 9, nombre: 'Escoba Industrial', categoria: 'Escobas y Cepillos', destacado: false },
    { id: 10, nombre: 'Guantes de Seguridad', categoria: 'Equipo de Seguridad', destacado: true },
    { id: 11, nombre: 'Limpiador de Tapicería', categoria: 'Estética Automotriz', destacado: false },
    { id: 12, nombre: 'Cepillo para Pisos', categoria: 'Jarcería', destacado: false },
    { id: 13, nombre: 'Martillo', categoria: 'Ferretería', destacado: false },
    { id: 14, nombre: 'Detergente Concentrado', categoria: 'Líquidos para el Hogar', destacado: true }
  ];

  // Filtrar productos
  const filteredProducts = productos.filter(producto => {
    const matchesCategory = activeFilter === 'Todos' || producto.categoria === activeFilter;
    const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
{/* Hero Section Actualizada */}
<section className="relative py-20 flex items-center justify-center bg-gradient-to-r from-[#087989] to-[#178FA8] text-white">
  {/* Cambiamos el overlay negro por un gradiente sutil que combine */}
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
              {/* Imagen del producto (placeholder) */}
              <div className="h-48 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center relative">
                <span className="text-5xl">📦</span>
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
            to="/contacto"
            className="inline-block px-8 py-3 bg-white text-[#087989] rounded-full font-bold hover:bg-[#087989] hover:text-white transition duration-300 shadow-lg"
          >
            Contactar a un asesor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Productos;