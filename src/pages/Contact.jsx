import React from 'react';

export default function Contact() {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Contacto</h1>
        <p className="text-gray-700 mb-8">
          ¿Tienes alguna pregunta o comentario? ¡No dudes en contactarnos!
        </p>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Nombre:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="Tu email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mensaje:</label>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }