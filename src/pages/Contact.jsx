import React, { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { db } from '../firebase/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion'; 


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setIsSubmitting(true);
    
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('¡Mensaje enviado!');
      setSubmitSuccess(true);
    } else {
      console.error('Error:', data);
      alert('Hubo un problema al enviar el mensaje.');
    }
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    alert('Hubo un error al enviar el mensaje.');
  } finally {
    setIsSubmitting(false);
  }
};


const Contact = () => {
  // Paleta de colores (coherente con tu marca)
  const COLORS = {
    primary: '#087989',
    secondary: '#178FA8',
    accent: '#F9D976',
    green: '#A3D977',
  };

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Enviar datos a Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      alert("¡Mensaje enviado!");
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] flex flex-col">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-[#087989] to-[#178FA8] text-white text-center px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl">Estamos aquí para ayudarte</p>
        </div>
      </section>

      {/* Información de Contacto + Formulario */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Datos de Contacto */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#087989] rounded-full text-white">
              <FaPhone size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#096D73]">Teléfono</h3>
              <p className="text-gray-600">(844) 405 9196</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#178FA8] rounded-full text-white">
              <FaEnvelope size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#096D73]">Email</h3>
              <p className="text-gray-600">baemi.group@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#F9D976] rounded-full text-[#096D73]">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#096D73]">Ubicación</h3>
              <p className="text-gray-600">Quintana Roo 931, República Oriente,Saltillo, Coah.</p>
              <p className="text-gray-600">Local #16 Plaza Tulipanes (Blvd. Eulalio Gtz y Av. Don Juan Saade Murra) Saltillo, Coah.</p>

            </div>
          </div>

          {/* Mapa (Google Maps Embed) */}
          <div className="pt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d450.32463628088146!2d-100.9551342042818!3d25.451730448962284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI3JzA0LjkiTiAxMDDCsDU3JzE4LjgiVw!5e0!3m2!1ses!2smx!4v1747097099603!5m2!1ses!2smx" 
              height="400"
                width="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación Baemi"
            ></iframe>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#087989] mb-6">Envía un Mensaje</h2>
          
          {submitSuccess ? (
            <div className="p-4 bg-green-100 text-green-800 rounded-lg mb-6">
              ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#178FA8] focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#087989] to-[#178FA8] text-white py-3 px-6 rounded-lg font-bold hover:opacity-90 transition flex items-center justify-center gap-2"
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
      </section>

       {/* WhatsApp CTA Section */}
       <section className="py-20 bg-[#A3D977]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#087989]">
            ¿Prefieres contactarnos por WhatsApp?
          </h2>
          <a
            href="https://wa.me/5218444059196?text=Hola%20Baemi%20Group,%20me%20interesan%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center 
                       px-10 py-4 font-bold rounded-full overflow-hidden
                       text-white hover:text-[#087989]
                       transition-all duration-500 ease-in-out
                       shadow-lg hover:shadow-xl shadow-[#178FA850] hover:shadow-[#F9D97660]
                       hover:scale-105 group"
            style={{ background: "#178FA8" }}
          >
            <span className="relative z-10 flex items-center">
            <img 
              src="/images/WhatsApp.png"
              alt="WhatsApp"
              className="w-6 h-6 mr-2"
            />

              Envíanos un WhatsApp
              <span className="ml-2 transition-all duration-300 transform group-hover:translate-x-1">
              </span>
            </span>
            <span 
              className="absolute inset-0 z-0 rounded-full 
                         bg-gradient-to-r from-[#F9D976] to-[#A3D977]
                         opacity-0 group-hover:opacity-100
                         transition-opacity duration-500"
            ></span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
