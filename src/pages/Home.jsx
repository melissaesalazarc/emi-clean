import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

// Importar las imágenes desde la carpeta images
import ejemplo1 from '../images/ejemplo1.jpg';
import ejemplo2 from '../images/ejemplo2.png';
import ejemplo3 from '../images/ejemplo3.png';

const Home = () => {
  // Configuración del carrusel
  const swiperParams = {
    modules: [Autoplay, Navigation, Pagination],
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000, // Cambia de imagen cada 5 segundos
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  return (
    <div className="min-h-screen w-full">
      {/* Carrusel de imágenes */}
      <div className="w-full h-[500px] relative">
        <Swiper {...swiperParams} className="w-full h-full">
          <SwiperSlide>
            <img
              src={ejemplo1}
              alt="Imagen 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ejemplo2}
              alt="Imagen 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={ejemplo3}
              alt="Imagen 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Sección de Productos Destacados */}
      <div id="productos" className="py-16 bg-gris-claro">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Título */}
          <h2 style={{ color: 'var(--turquesa-oscuro)' }} className="text-4xl font-bold mb-4">
            Nuestros Productos Destacados
          </h2>
          {/* Subtítulo */}
          <p style={{ color: 'var(--turquesa-claro)' }} className="text-xl mb-12">
            Calidad para siempre
          </p>

          {/* Lista de Productos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Producto 1 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src="https://via.placeholder.com/150"
                alt="Lavado Automotriz"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Lavado Automotriz
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
                Ideal para todas las superficies. Elimina la suciedad y las bacterias.
              </p>
            </div>

            {/* Producto 2 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src="https://via.placeholder.com/150"
                alt="Líquidos para el hogar"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Líquidos para el hogar
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
                Formulado para dejar tu ropa limpia y con un aroma fresco.
              </p>
            </div>

            {/* Producto 3 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src="https://via.placeholder.com/150"
                alt="Artículos de Limpieza"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Artículos de Limpieza
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
                Elimina el 99.9% de los gérmenes y bacterias.
              </p>
            </div>
            {/* Producto 4 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src="https://via.placeholder.com/150"
                alt="Productos de Línea"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Productos de Línea
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
                Elimina el 99.9% de los gérmenes y bacterias.
              </p>
            </div>
          </div>
        </div>
      </div>

     

      {/* Sección Sobre Nosotros */}
      <div className="relative h-[400px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('https://via.placeholder.com/1200x400?text=Fondo+Sobre+Nosotros')` }}>
        {/* Overlay para oscurecer la imagen de fondo */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Recuadro con información */}
        <div className="relative z-10 bg-blanco-puro p-8 rounded-lg shadow-lg max-w-2xl text-center">
          <h2 style={{ color: 'var(--turquesa-oscuro)' }} className="text-3xl font-bold mb-4">
            Sobre Nosotros
          </h2>
          <p style={{ color: 'var(--turquesa-claro)' }} className="text-lg mb-6">
            En EmiClean, nos dedicamos a ofrecer productos de limpieza de la más alta calidad para tu hogar y negocio. Nuestra misión es ayudarte a mantener tus espacios limpios y seguros.
          </p>
          <Link
            to="/about"
            style={{ backgroundColor: 'var(--turquesa-claro)', color: 'var(--blanco-puro)' }}
            className="px-6 py-3 rounded-lg hover:bg-turquesa-oscuro transition duration-300"
          >
            Conócenos Más
          </Link>
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
};

export default Home;