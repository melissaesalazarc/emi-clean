import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// Importar las imágenes y videos
import baemiL from '../images/home/baemiLogo.webp';
import baemi from '../videos/baemi_home.mp4';
import industrias from '../videos/industrias_home.mp4';
import spray from '../videos/spray_home.mp4';
import marca1 from '../images/home/marca1.webp';
import marca2 from '../images/home/marca2.webp';
import marca3 from '../images/home/marca3.webp';
import marca4 from '../images/home/marca4.webp';
import marca5 from '../images/home/marca5.webp';
import marca6 from '../images/home/marca6.webp';
import marca7 from '../images/home/marca7.webp';
import articulosLimpieza from '../images/home/articulosLimpieza.webp';
import lavadoAutomotriz from '../images/home/lavadoAutomotriz.webp';
import liquidosHogar from '../images/home/liquidosHogar.webp';
import papel from '../images/home/papel.webp';
import limpieza from '../images/home/limpieza.webp';

const Home = () => {
  const navigate = useNavigate();
  // Configuración del carrusel principal
  const swiperParams = {
    modules: [Autoplay, Navigation, Pagination],
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  // Configuración del carrusel de marcas
  const marcasSwiperParams = {
    modules: [Autoplay],
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 }
    },
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
  {/* Hero Section con Carrusel de Videos o Imágenes */}
  <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
    {/* Versión para pantallas grandes: Videos */}
    <div className="hidden md:block w-full h-full">
      <Swiper {...swiperParams} className="w-full h-full">
        <SwiperSlide>
          <video
            src={baemi}
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
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </SwiperSlide>
      </Swiper>
    </div>

    {/* Versión para móviles: Solo una imagen fija */}
    <div className="block md:hidden w-full h-full">
      <img
        src={baemiL}
        alt="Baemi"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Gradiente inferior */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F4F8] to-transparent"></div>
  </section>


      {/* Sección de Productos Destacados */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#087989] mb-4">
            Nuestros <span className="text-[#178FA8]">Productos Destacados</span>
          </h2>
          <p className="text-xl text-[#178FA8] max-w-2xl mx-auto">
            Calidad, innovación y resultados garantizados. Descubre los productos que marcan la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: lavadoAutomotriz,
              title: "Lavado Automotriz",
              description: "Brillo impecable y protección superior para tu vehículo."
            },
            {
              img: liquidosHogar,
              title: "Líquidos para el Hogar",
              description: "Limpieza profunda y frescura en cada rincón de tu hogar."
            },
            {
              img: articulosLimpieza,
              title: "Jarcería",
              description: "Mantén tu espacio impecable con artículos esenciales."
            },
            {
              img: papel,
              title: "Papel y Despachadores",
              description: "Soluciones confiables para el manejo de residuos."
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/products?category=${encodeURIComponent(product.title)}`)}

            >
              <div className="bg-[#F0F4F8] p-4 rounded-xl mb-4 flex justify-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-32 h-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#087989] mb-2">{product.title}</h3>
              <p className="text-gray-700">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sección de Marcas */}
      <section className="py-20 bg-[#087989] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Marcas con las que <span className="text-[#F9D976]">trabajamos</span>
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Calidad que perdura, innovación que inspira. Productos cuidadosamente seleccionados para brindarte lo mejor.
          </p>

          <Swiper {...marcasSwiperParams} className="py-8">
            {[marca1, marca2, marca3, marca4, marca5, marca6, marca7].map((marca, index) => (
              <SwiperSlide key={index} className="w-auto max-w-[200px]">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 h-60 flex items-center justify-center">
                  <img
                    src={marca}
                    alt={`Marca ${index + 1}`}
                    className="max-h-50 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

     {/* Sección Sobre Nosotros */}
<section className="relative py-12 md:py-24 text-white">
  <div
    className="relative min-h-[300px] md:h-[500px] flex items-center py-8 md:py-0 justify-center bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${limpieza})` }}
  >
    {/* Overlay para oscurecer la imagen de fondo */}
    <div className="absolute inset-0 bg-black opacity-40"></div>

    {/* Recuadro con información (animado con Framer Motion) */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative z-10 bg-white bg-opacity-90 p-4 mx-4 md:p-8 rounded-xl shadow-2xl w-full max-w-md md:max-w-2xl transform transition-all hover:scale-105 hover:bg-opacity-100"
    >
      <h2 className="text-4xl font-bold mb-6 text-[#087989]">
        Sobre Nosotros
      </h2>
      <p className="text-lg mb-8 text-gray-700 text-justify">
        Fabricamos productos químicos de limpieza para el sector 
        automotriz, hogar, industrial, hotelero y restaurantero, 
        distribuimos jarcierías específicas para las diferentes áreas de trabajo, 
        instalación de equipamiento necesario y servicio de limpieza.
      </p>
      <Link
        to="/about"
        className="relative inline-flex items-center justify-center 
                   px-10 py-3 font-bold rounded-full overflow-hidden
                   text-white hover:text-[#087989]
                   transition-all duration-500 ease-in-out
                   shadow-lg hover:shadow-xl shadow-[#178FA850] hover:shadow-[#F9D97660]
                   hover:scale-105 group"
        style={{ background: "#178FA8" }}
      >
        <span className="relative z-10 flex items-center">
          Conócenos Más
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
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#A3D977] to-[#F9D976]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#087989]">
            ¿Listo para probar nuestros productos?
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
                →
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;