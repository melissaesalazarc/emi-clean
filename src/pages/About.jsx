import React from 'react';
import logo from '../images/about/baemiLogo.png';
import mision from '../images/about/misionImg.png';

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F0F4F8]">
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

      {/* Team Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#087989]">
          Conoce a <span className="text-[#178FA8]">Nuestro Equipo</span>
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: 'María González',
              role: 'CEO & Fundadora',
              image: 'https://randomuser.me/api/portraits/women/44.jpg'
            },
            {
              name: 'Carlos Martínez',
              role: 'Director de Operaciones',
              image: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            {
              name: 'Ana López',
              role: 'Directora de Innovación',
              image: 'https://randomuser.me/api/portraits/women/68.jpg'
            },
            {
              name: 'David Ramírez',
              role: 'Jefe de Calidad',
              image: 'https://randomuser.me/api/portraits/men/75.jpg'
            }
          ].map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#087989] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <p className="text-[#F9D976]">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
  );
  }