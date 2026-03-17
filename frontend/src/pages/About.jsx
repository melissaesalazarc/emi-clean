import React from 'react';
import Footer from '../components/Footer';
import logo from '../images/about/baemiLogo.webp';
import mision from '../images/about/misionImg.webp';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section with Logo Animation */}
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#087989] to-[#178FA8] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-float">
              <img 
                src={logo} 
                alt="Logo EmiClean" 
                className="w-64 md:w-80 h-auto drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F4F8] to-transparent"></div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#087989]">
                Nuestra <span className="text-[#178FA8]">Misión</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Nuestra misión es ofrecer soluciones integrales de limpieza y mantenimiento, brindando productos y
                servicios de la más alta calidad. Nos comprometemos a ser aliados estratégicos para nuestros clientes,
                contribuyendo a la conservación de sus bienes, activos e instalaciones, con un enfoque en la excelencia, la
                confiabilidad y el cumplimiento de sus objetivos.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-1 bg-[#F9D976]"></div>
                <div className="w-8 h-1 bg-[#A3D977]"></div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <img 
                src={mision}
                alt="Equipo de limpieza" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#087989] text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Nuestros <span className="text-[#F9D976]">Valores</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌱',
                  title: 'Sostenibilidad',
                  description: 'Productos ecológicos que reducen el impacto ambiental'
                },
                {
                  icon: '✨',
                  title: 'Excelencia',
                  description: 'Calidad premium en cada uno de nuestros productos'
                },
                {
                  icon: '🤝',
                  title: 'Compromiso',
                  description: 'Relaciones a largo plazo basadas en la confianza'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-[#F9D976]">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sucursales Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-[#096D73]">
              Nuestras <span className="text-[#188994]">Sucursales</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {/* Sucursal 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96">
                <img 
                  src="/images/about/brep.webp"
                  alt="Sucursal Saltillo"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#096D73] to-transparent opacity-90 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-2">Sucursal Saltillo República Ote </h3>
                  <p className="text-[#A3D977] mb-4">Quintana Roo 931, República Oriente, 25280 Saltillo, Coah.</p>
                  <div className="flex items-center space-x-2 text-white">
                    <span>🕒 9:00 - 18:00</span>
                    <span>📞 (52)  1 844 405 9196</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/Gd4wDdzRhzqfxN417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-2 bg-[#F9D976] text-[#096D73] rounded-full font-semibold self-start hover:bg-white transition duration-300"
                  >
                    Ver en mapa
                  </a>
                </div>
              </div>

              {/* Sucursal 2 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96">
                <img 
                  src="/images/about/bcdmx.webp"
                  alt="Sucursal CDMX"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#188994] to-transparent opacity-90 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-2">Sucursal CDMX</h3>
                  <p className="text-[#F9D976] mb-4">Calle 22-A, no. 77, Santa Rosa, Alcaldia Gustavo A Madero, CDMX</p>
                  <div className="flex items-center space-x-2 text-white">
                    <span>🕒 9:00 - 18:00</span>
                    <span>📞 (52) 1 55 2730 2115</span>
                  </div>
                  <a
                  href="https://maps.app.goo.gl/AkAPtBeXzxM2eD4Z9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-2 bg-[#A3D977] text-[#096D73] rounded-full font-semibold self-start hover:bg-white transition duration-300"
                >
                  Ver en mapa
                </a>
              </div>
            </div>
                          {/* Sucursal 1 */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-96">
                <img 
                  src="/images/about/btulip.jpeg"
                  alt="Sucursal Saltillo"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#096D73] to-transparent opacity-90 p-8 flex flex-col justify-end">
                  <h3 className="text-3xl font-bold text-white mb-2">Sucursal Saltillo Tulipanes</h3>
                  <p className="text-[#A3D977] mb-4">Local #16 Plaza Tulipanes (Blvd. Eulalio Gtz y Av. Don Juan Saade Murra)</p>
                  <div className="flex items-center space-x-2 text-white">
                    <span>🕒 9:00 - 18:00</span>
                    <span>📞 (52)  1 844 405 9196</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/kZrFNnKCrTcmpWE28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-2 bg-[#F9D976] text-[#096D73] rounded-full font-semibold self-start hover:bg-white transition duration-300"
                  >
                    Ver en mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#A3D977]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-8 text-[#087989]">
              ¿Listo para una limpieza revolucionaria?
            </h2>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center 
                         px-10 py-4 font-bold rounded-full overflow-hidden
                         text-white hover:text-[#087989]
                         transition-all duration-500 ease-in-out
                         shadow-lg hover:shadow-xl shadow-[#178FA850] hover:shadow-[#F9D97660]
                         hover:scale-105 group"
              style={{ background: "#178FA8" }}
            >
              <span className="relative z-10 flex items-center">
                Contáctanos
                <span className="ml-2 transition-all duration-300 transform group-hover:translate-x-1">
                  
                </span>
              </span>
              <span 
                className="absolute inset-0 z-0 rounded-full 
                           bg-gradient-to-r from-[#F9D976] to-[#A3D977]
                           opacity-0 group-hover:opacity-100
                           transition-opacity duration-500"
              ></span>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;