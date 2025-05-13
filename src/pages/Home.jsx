import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'; // Importa el Footer

// Importar las imágenes desde la carpeta images
import baemi from '../videos/baemi_home.mp4';
import industrias from '../videos/industrias_home.mp4';
import spray from '../videos/spray_home.mp4';

import marca1 from '../images/home/marca1.png';
import marca2 from '../images/home/marca2.png';
import marca3 from '../images/home/marca3.png';
import marca4 from '../images/home/marca4.png';
import marca5 from '../images/home/marca5.png';
import marca6 from '../images/home/marca6.png';
import marca7 from '../images/home/marca7.png';

import articulosLimpieza from '../images/home/articulosLimpieza.png';
import lavadoAutomotriz from '../images/home/lavadoAutomotriz.png';
import liquidosHogar from '../images/home/liquidosHogar.png';
import papel from '../images/home/papel.png';

import limpieza from '../images/home/limpieza.png';






const Home = () => {
  // Configuración del carrusel
  const swiperParams = {
    modules: [Autoplay, Navigation, Pagination],
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000, // Cambia de imagen cada 5 segundos
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };
  // MARCAS
  const marcasSwiperParams = {
    modules: [Autoplay, Navigation],
    spaceBetween: 30, //margen entre cada uno
    slidesPerView: 'auto', // Muestra las marcas en una línea horizontal
    loop: true, // Activar el modo loop
    autoplay: {
      delay: 3000, // Cambia de marca cada 3 segundos
      disableOnInteraction: false,
    },
    navigation: true, // Flechas de navegación
    breakpoints: {
      // Ajustes responsivos
      640: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 5,
      },
    },
  };


  
  return (
    <div className="min-h-screen w-full">
      {/* Carrusel de videos */}
      <div className="w-full h-[500px] relative">
        <Swiper {...swiperParams} className="w-full h-full">
          <SwiperSlide>
            <video
              src={baemi}
              alt="Baemi"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={industrias}
              alt="Industrias"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={spray}
              alt="Spray"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
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
          Calidad, innovación y resultados garantizados. Descubre los productos que marcan la diferencia.
          </p>

          {/* Lista de Productos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Producto 1 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={lavadoAutomotriz}
                alt="Lavado Automotriz"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
             
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Lavado Automotriz
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
              Brillo impecable y protección superior para tu vehículo. 
              ¡Descubre nuestros productos!
              </p>
            </div>

            {/* Producto 2 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={liquidosHogar}
                alt="Líquidos para el hogar"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Líquidos para el hogar
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
              Limpieza profunda y frescura en cada rincón de tu hogar. 
              ¡Transforma tu espacio con nuestra línea de líquidos especializados!
              </p>
            </div>

            {/* Producto 3 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={articulosLimpieza}
                alt="Artículos de Limpieza"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
                Artículos de Limpieza
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
              Mantén tu espacio impecable con nuestra selección de artículos de limpieza esenciales.
              </p>
            </div>
            {/* Producto 4 */}
            <div className="group p-6 rounded-lg shadow-lg text-center bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={papel}
                alt="Papel y Bolsas de Basura"
                className="mx-auto mb-4 w-32 h-32 object-cover transition-all duration-300 group-hover:scale-110"
              />
              <h3 style={{ color: 'var(--turquesa-oscuro)' }} className="text-xl font-bold mb-2 group-hover:text-blanco-puro">
              Papel y Bolsas de Basura
              </h3>
              <p className="text-gray-700 group-hover:text-blanco-puro">
              Soluciones confiables para el manejo de residuos y la higiene diaria. ¡Descúbrelas!
              </p>
            </div>
          </div>
        </div>
      </div>

     

       {/* MARCAS */}
       <div className="py-16 bg-gris-claro">
      <div className="max-w-8xl mx-auto px-4 text-center">
        {/* Título */}
        <h2 style={{ color: 'var(--turquesa-oscuro)' }} className="text-4xl font-bold mb-4">
          Marcas con las que trabajamos
        </h2>
        {/* Descripción */}
        <p style={{ color: 'var(--turquesa-claro)' }} className="text-xl mb-12">
        Calidad que perdura, innovación que inspira. Nuestros productos de línea han sido 
        cuidadosamente seleccionados para brindarte lo mejor en funcionalidad y estilo.
                </p>

        {/* Carrusel de Marcas */}
        <Swiper {...marcasSwiperParams} className="w-full">
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca1}
                alt="Marca 1"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca2}
                alt="Marca 2"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca3}
                alt="Marca 3"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca4}
                alt="Marca 4"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca5}
                alt="Marca 5"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca6}
                alt="Marca 6"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-auto">
            <div className="p-2 md:p-4 rounded-lg shadow-lg bg-blanco-puro transition-all duration-300 hover:bg-turquesa-claro hover:scale-105">
              <img
                src={marca7}
                alt="Marca 7"
                className="mx-auto w-48 h-48 md:w-64 md:h-64 object-contain" // Tamaño más grande en pantallas grandes
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

      {/* Sección Sobre Nosotros */}
      <div
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${limpieza})` }}
    >
      {/* Overlay para oscurecer la imagen de fondo */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Recuadro con información (animado con Framer Motion) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y desplazado hacia abajo
        whileInView={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
        transition={{ duration: 0.8, ease: 'easeOut' }} // Duración y tipo de animación
        viewport={{ twice: true }} // La animación solo se ejecuta una vez
        className="relative z-10 bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-2xl w-full md:max-w-2xl mx-4 md:mx-8 text-left transform transition-all hover:scale-105 hover:bg-opacity-100"
      >
        <h2 className="text-4xl font-bold mb-6 text-[#087989]">
          Sobre Nosotros
        </h2>
        <p className="text-lg mb-8 text-gray-700 text-justify">
        Fabricamos productos químicos de limpieza para el sector 
        automotriz, hogar, industrial, hotelero y restaurantera, 
        distribuimos jarcierías específicas para las diferentes áreas de trabajo, 
        instalacion de equipamiento necesario y servicio de limpieza.        </p>
        <Link
  to="/about"
  className="relative inline-flex items-center justify-center 
             px-10 py-3 font-bold rounded-full overflow-hidden
             text-white hover:text-[#087989]
             transition-all duration-500 ease-in-out
             shadow-lg hover:shadow-xl shadow-[#178FA850] hover:shadow-[#F9D97660]
             hover:scale-105 group"
  style={{
    background: "#178FA8", /* Azul verdoso sólido inicial */
  }}
>
  {/* Texto y flecha */}
  <span className="relative z-10 flex items-center">
    Conócenos Más
    <span className="ml-2 transition-all duration-300 transform group-hover:translate-x-1">
      
    </span>
  </span>

  {/* Capa de transición */}
  <span 
    className="absolute inset-0 z-0 rounded-full 
               bg-gradient-to-r from-[#F9D976] to-[#A3D977] /* Gradiente amarillo-verde */
               opacity-0 group-hover:opacity-100
               transition-opacity duration-500"
  ></span>
</Link>


      </motion.div>
    </div>


{/* Llamado a la Acción (CTA) */}
<div className="bg-[#A3D977] py-16"> {/* Fondo verde lima */}
  <div className="max-w-4xl mx-auto text-center px-4">
    <h2 className="text-[#087989] text-3xl font-bold mb-8">
      ¿Listo para probar nuestros productos?
    </h2>
    
    <Link
      to="/contact"
      className="relative inline-flex items-center justify-center 
                 px-10 py-4 font-bold rounded-full overflow-hidden
                 text-[#087989] hover:text-white
                 transition-all duration-500 ease-in-out
                 shadow-lg hover:shadow-xl shadow-[#F9D97650] hover:shadow-[#08798960]
                 hover:scale-105 group"
      style={{
        background: "#F9D976", /* Amarillo pastel sólido inicial */
      }}
    >
      {/* Texto y flecha */}
      <span className="relative z-10 flex items-center">
        Contáctanos
        <span className="ml-2 transition-all duration-300 transform group-hover:translate-x-1">
          
        </span>
      </span>

      {/* Capa de transición */}
      <span 
        className="absolute inset-0 z-0 rounded-full 
                   bg-gradient-to-r from-[#A3D977] to-[#178FA8] 
                   opacity-0 group-hover:opacity-100
                   transition-opacity duration-500"
      ></span>
    </Link>
  </div>
</div>


    {/*footer*/ }
    <Footer />

    </div>
  );
};

export default Home;