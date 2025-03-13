import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <div id="productos" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 style={{ color: 'var(--turquesa-oscuro)' }} className="text-3xl font-bold text-center mb-12">
            Nuestros Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Producto 1"
                className="mx-auto mb-4"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2">
                Limpiador Multiusos
              </h3>
              <p className="text-gray-700">
                Ideal para todas las superficies. Elimina la suciedad y las bacterias.
              </p>
            </div>

            {/* Producto 2 */}
            <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Producto 2"
                className="mx-auto mb-4"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2">
                Detergente Líquido
              </h3>
              <p className="text-gray-700">
                Formulado para dejar tu ropa limpia y con un aroma fresco.
              </p>
            </div>

            {/* Producto 3 */}
            <div style={{ backgroundColor: 'var(--blanco-puro)' }} className="p-6 rounded-lg shadow-lg text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Producto 3"
                className="mx-auto mb-4"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2">
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