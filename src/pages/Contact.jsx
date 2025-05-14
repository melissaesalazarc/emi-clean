import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  const COLORS = {
    primary: '#087989',
    secondary: '#178FA8',
    accent: '#F9D976',
    green: '#A3D977',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "contacts"), formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Datos de las sucursales
  const sucursales = [
    {
      nombre: "Saltillo República Oriente",
      telefono: "+52 1 844 405 9196",
      whatsapp: "+52 1 844 405 9196",
      email: "baemi.group@gmail.com",
      direccion: "Quintana Roo 931, República Oriente, 25280 Saltillo, Coah.",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14412.151058559093!2d-100.99443647846084!3d25.437000942409806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86887374d52d0b85%3A0x11be2e8cc0625ee0!2sEMI%20Clean%20Saltillo!5e0!3m2!1ses!2smx!4v1747200099350!5m2!1ses!2smx" 
    
    },
    {
      nombre: "Saltillo Tulipanes",
      telefono: "+52 1 844 405 9196",
      whatsapp: "+52 1 844 405 9196",
      email: "baemi.group@gmail.com",
      direccion: "Local #16 Plaza Tulipanes (Blvd. Eulalio Gtz y Av. Don Juan Saade Murra), Saltillo, Coah.",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.227654586056!2d-100.9551343!3d25.4517304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868812e6a9c9f9a5%3A0x1d8a8b0d4b4b0b0b!2sBaemi%20Group!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
    },
    {
      nombre: "CDMX",
      telefono: "+52 55 5392 5651",
      whatsapp: "+52 55 4536 0987",
      email: "baemi.mx@gmail.com",
      direccion: "Calle 22-A, no. 77, Santa Rosa, Alcaldía Gustavo A Madero, CDMX",
      mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15041.849371094473!2d-99.17932318081004!3d19.5217544096398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f900776b5711%3A0xd31dd1462418a360!2sComercializadora%20BAEMI%20Group!5e0!3m2!1ses!2smx!4v1747199921492!5m2!1ses!2smx" 


    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-[#087989] to-[#178FA8] text-white text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl">Estamos aquí para ayudarte en cualquiera de nuestras sucursales</p>
        </div>
      </section>

      {/* Sección de Sucursales */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#087989] mb-12 text-center">
          Nuestras <span className="text-[#178FA8]">Sucursales</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {sucursales.map((sucursal, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <iframe
                  src={sucursal.mapa}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`Mapa ${sucursal.nombre}`}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#087989] mb-4">{sucursal.nombre}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#087989] rounded-full text-white mt-1">
                      <FaPhone size={14} />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Teléfono:</p>
                      <a href={`tel:${sucursal.telefono}`} className="text-gray-800 hover:text-[#178FA8]">
                        {sucursal.telefono}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#25D366] rounded-full text-white mt-1">
                      <FaWhatsapp size={14} />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">WhatsApp:</p>
                      <a 
                        href={`https://wa.me/${sucursal.whatsapp.replace(/\D/g, '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-[#25D366]"
                      >
                        {sucursal.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#178FA8] rounded-full text-white mt-1">
                      <FaEnvelope size={14} />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Email:</p>
                      <a href={`mailto:${sucursal.email}`} className="text-gray-800 hover:text-[#178FA8]">
                        {sucursal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#F9D976] rounded-full text-[#087989] mt-1">
                      <FaMapMarkerAlt size={14} />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Dirección:</p>
                      <p className="text-gray-800">{sucursal.direccion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#F0F4F8] rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#087989] mb-6 text-center">
              Envíanos un Mensaje
            </h2>
            
            {submitSuccess ? (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg mb-6 text-center">
                ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#087989] to-[#178FA8] text-white py-4 px-6 rounded-lg font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      <FaPaperPlane /> Enviar Mensaje
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;