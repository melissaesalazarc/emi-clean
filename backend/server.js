import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Configurar el transporte de correo usando un servicio de correo
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "melissaesalazarc@gmail.com",
        pass: "Tamalero11",
    },
});

// Ruta para manejar el envío del formulario de contacto
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: "melissaesalazarc@gmail.com",
        to: "melissasalazr@hotmail.com",
        subject: 'Nuevo mensaje de contacto',
        text: `
      Nombre: ${name}
      Correo: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
    `,
    };

    // Enviar correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error al enviar el correo');
        }
        res.status(200).send('Correo enviado correctamente');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
