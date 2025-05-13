import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

// Importar las imágenes y videos
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
      {/* Hero Section con Carrusel de Videos */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
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
              title: "Líquidos para el hogar",
              description: "Limpieza profunda y frescura en cada rincón de tu hogar."
            },
            {
              img: articulosLimpieza,
              title: "Artículos de Limpieza",
              description: "Mantén tu espacio impecable con artículos esenciales."
            },
            {
              img: papel,
              title: "Papel y Bolsas de Basura",
              description: "Soluciones confiables para el manejo de residuos."
            }
          ].map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
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
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed -z-10"
          style={{ backgroundImage: `url(${limpieza})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl max-w-2xl"
          >
            <h2 className="text-4xl font-bold text-[#087989] mb-6">
              Sobre <span className="text-[#178FA8]">Nosotros</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-justify">
              Fabricamos productos químicos de limpieza para el sector automotriz, hogar, industrial, hotelero y restaurantero. Distribuimos jarcierías específicas para las diferentes áreas de trabajo, instalación de equipamiento necesario y servicio de limpieza.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#178FA8] to-[#087989] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Conócenos Más
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