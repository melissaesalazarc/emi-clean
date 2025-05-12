import React from 'react';
import { FaHeadset, FaTruck, FaMapMarkerAlt, FaQuoteLeft, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Services = () => {
  // Paleta de colores (coherente con About.jsx)
  const COLORS = {
    primary: '#087989',      // Azul principal
    secondary: '#178FA8',    // Azul secundario
    accent: '#F9D976',       // Amarillo
    green: '#A3D977',        // Verde
    lightBg: '#F0F4F8',      // Fondo claro
    darkText: '#096D73',     // Texto oscuro
  };

  // Servicios principales (basados en la info proporcionada)
  const coreServices = [
    {
      icon: <FaHeadset size={40} color={COLORS.accent} />,
      title: "Atención Personalizada",
      description: "Asesoría experta para elegir los productos ideales según tus necesidades.",
    },
    {
      icon: <FaQuoteLeft size={40} color={COLORS.green} />,
      title: "Cotización Rápida",
      description: "Respuesta ágil con transparencia y precios competitivos.",
    },
    {
      icon: <FaTruck size={40} color={COLORS.accent} />,
      title: "Entrega Inmediata",
      description: "Logística eficiente que supera expectativas de tiempo.",
    },
    {
      icon: <FaMapMarkerAlt size={40} color={COLORS.green} />,
      title: "Cobertura Regional",
      description: "Atendemos Monterrey, Saltillo y CDMX con disponibilidad garantizada.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#087989] to-[#178FA8] overflow-hidden text-center px-4"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      >
        <div className="z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Más que Productos, Experiencias</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Servicios diseñados para simplificar tu proceso de compra y garantizar satisfacción.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F4F8] to-transparent"></div>
      </section>

      {/* Nuestros Servicios */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#096D73]">
            Nuestros <span className="text-[#178FA8]">Servicios</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            En Baemi Group, te ofrecemos un acompañamiento integral que complementa nuestros productos de alta calidad.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <div className="w-12 h-1 bg-[#F9D976]"></div>
            <div className="w-8 h-1 bg-[#A3D977]"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-t-4 hover:border-[#178FA8]"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#087989] mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="py-20 bg-[#087989] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            ¿Por qué <span className="text-[#F9D976]">Elegirnos</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Garantía de Calidad*",
                description: "Todos nuestros productos pasan por rigurosos controles para asegurar el máximo rendimiento y durabilidad.",
                icon: "✅",
              },
              {
                title: "Enfoque Ecológico",
                description: "Desarrollamos fórmulas avanzadas que combinan eficacia y sostenibilidad, siempre a la vanguardia del sector.",
                icon: "🚀",
              },
              {
                title: "Relaciones Duraderas",
                description: "Más del 80% de nuestros clientes repiten compra gracias a nuestro servicio consistente y resultados visibles.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cobertura Geográfica (Mapa visual) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#096D73]">
            Cobertura en <span className="text-[#188994]">México</span>
          </h2>
          
          <div className="relative bg-[#F0F4F8] rounded-2xl p-8 overflow-hidden">
            {/* Imagen del mapa (ajusta la ruta) */}
            <img 
              src="/images/cobertura/mapaMex.png"  // Ruta desde la carpeta public/
              alt="Zonas de cobertura Baemi" 
              className="w-full h-auto rounded-lg mx-auto border border-[#087989]/20"
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              {[
                "Monterrey, NL",
                "Saltillo, Coah.",
                "Ciudad de México"
              ].map((city, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-[#F9D976] rounded-full"></div>
                  <span className="font-medium text-[#087989]">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#F9D976] to-[#A3D977]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-[#087989]">
            ¿Listo para experimentar la diferencia Baemi?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-[#178FA8] text-white rounded-full font-bold hover:bg-[#096D73] transition duration-300 shadow-lg hover:shadow-xl"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;