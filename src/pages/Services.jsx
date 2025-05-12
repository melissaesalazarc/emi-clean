import React from 'react';
import { FaCar, FaShower, FaIndustry, FaLeaf, FaStar, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {
  // Paleta de colores de la marca (ajustados según About.jsx)
  const COLORS = {
    primary: '#087989',      // Azul principal
    secondary: '#178FA8',    // Azul secundario
    accent: '#F9D976',       // Amarillo
    green: '#A3D977',        // Verde
    lightBg: '#F0F4F8',      // Fondo claro
    darkText: '#096D73',     // Texto oscuro
  };

  // Datos de servicios
  const services = [
    {
      icon: <FaCar size={40} color={COLORS.accent} />,
      title: "Lavado Automotriz",
      description: "Servicio premium con productos ecológicos que cuidan tu vehículo y el medio ambiente.",
      highlight: "Incluye tratamiento anti-salitre",
    },
    {
      icon: <FaShower size={40} color={COLORS.green} />,
      title: "Limpieza Industrial",
      description: "Soluciones para maquinaria pesada y espacios industriales con tecnología de punta.",
      highlight: "Certificado ISO 9001",
    },
    // Añade más servicios...
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#087989] to-[#178FA8] overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      >
        <div className="text-center px-4 z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Calidad profesional y compromiso ecológico en cada detalle
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F4F8] to-transparent"></div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#096D73]">
            Soluciones <span className="text-[#178FA8]">a Medida</span>
          </h2>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="w-12 h-1 bg-[#F9D976]"></div>
            <div className="w-8 h-1 bg-[#A3D977]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#087989] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm font-semibold text-[#178FA8] flex items-center">
                  <FaStar className="mr-2" /> {service.highlight}
                </p>
              </div>
              <div className="px-8 pb-6">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-[#F9D976] to-[#A3D977] text-[#096D73] rounded-full font-semibold hover:shadow-md transition duration-300"
                >
                  Cotizar ahora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-20 bg-[#087989] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro <span className="text-[#F9D976]">Proceso</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Línea decorativa */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-1 bg-[#178FA8] z-0"></div>
            
            {[
              { step: "1", title: "Diagnóstico", icon: "🔍" },
              { step: "2", title: "Propuesta", icon: "📋" },
              { step: "3", title: "Ejecución", icon: "✨" },
              { step: "4", title: "Garantía", icon: "🛡️" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-sm text-center z-10"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#178FA8] flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-200">Paso {item.step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#F9D976] to-[#A3D977]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#087989]">
            ¿Necesitas un servicio personalizado?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#178FA8] text-white rounded-full font-bold hover:bg-[#096D73] transition duration-300 shadow-lg hover:shadow-xl"
          >
            Contáctanos
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;