const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configura el servicio de correo (usando Nodemailer con Gmail, por ejemplo)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "melissaesalazarc@gmail.com",
        pass: "Tamalero11"// Tu contraseña o una "contraseña de aplicación"
    }
});

// Función que se ejecuta cuando se agrega un cliente a Firestore
exports.notifyNewCustomer = functions.firestore
    .document("clientes/{clienteId}")  // Reemplaza con el nombre de tu colección
    .onCreate((snapshot, context) => {
        const newClient = snapshot.data();

        // El contenido del correo
        const mailOptions = {
            from: "melissaesalazarc@gmail.com",
            to: "melissasalazr@hotmail.com",
            subject: "Nuevo Cliente Registrado",
            text: `¡Hola! Hemos registrado un nuevo cliente:\n\nNombre: ${newClient.nombre}\nCorreo: ${newClient.correo}\nTeléfono: ${newClient.telefono}`
        };

        // Envía el correo
        return transporter.sendMail(mailOptions)
            .then(() => {
                console.log("Correo enviado correctamente");
                return null;
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                throw new Error("Error al enviar el correo");
            });
    });
